import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '../..');

const LESSONS_PATH = path.join(REPO_ROOT, 'src/data/grade6/tieng-anh/englishLessons.ts');
const CARDS_PATH = path.join(REPO_ROOT, 'src/data/grade6/tieng-anh/englishLessonCards.ts');
const QUESTIONS_PATH = path.join(REPO_ROOT, 'src/data/grade6/tieng-anh/englishQuestions.ts');

const OUTPUT_DIR = path.join(REPO_ROOT, 'docs/audio');
const OUTPUT_JSON = path.join(OUTPUT_DIR, 'english-audio-catalog-full.json');
const OUTPUT_CSV = path.join(OUTPUT_DIR, 'english-audio-catalog-full.csv');

const PROFILE_ID = 'en-v1';
const VOICE_NAME = 'en-US-Neural2-F';
const SUBJECT_CODE = 'english';
const GRADE = 6;
const OUTPUT_ROOT = 'F:\\1_A_Disk_D\\khuong-binh\\lop6-tts-audio';
const AUDIO_OUTPUT_DIR = path.join(OUTPUT_ROOT, PROFILE_ID);

const INTERNAL_TEXT_RE = /\b(?:dot-02|app-ready|app ready|demo|demon|MVP|bundle|chunk|preset)\b|dot-02|app-ready/i;
const MOJIBAKE_RE = /(?:Ã|Ä|á»|â€|ï¿½)/;
const CONTROL_RE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g;

function nowIso() {
  return new Date().toISOString();
}

function normalizeWhitespace(value) {
  return String(value ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\s+/g, ' ')
    .trim();
}

function repairLikelyMojibake(value) {
  const raw = String(value ?? '');
  if (!raw || !MOJIBAKE_RE.test(raw)) {
    return raw;
  }

  try {
    const bytes = Uint8Array.from(raw, (char) => char.charCodeAt(0) & 0xff);
    const decoded = new TextDecoder('utf-8', { fatal: false }).decode(bytes);
    const rawScore = (raw.match(MOJIBAKE_RE) || []).length;
    const decodedScore = (decoded.match(MOJIBAKE_RE) || []).length;
    return decodedScore < rawScore ? decoded : raw;
  } catch {
    return raw;
  }
}

function cleanText(value) {
  return normalizeWhitespace(
    repairLikelyMojibake(
      String(value ?? '')
        .replace(CONTROL_RE, ' ')
        .replace(/\uFFFD/g, ' '),
    ),
  )
    .replace(/\s+([,.;:!?])/g, '$1')
    .trim();
}

function isSafeText(value) {
  const text = cleanText(value);
  if (!text) return false;
  if (INTERNAL_TEXT_RE.test(text)) return false;
  return text.length >= 2;
}

function extractArrayLiteral(sourceText, exportName) {
  const signature = `export const ${exportName}`;
  const signatureIndex = sourceText.indexOf(signature);
  if (signatureIndex < 0) {
    throw new Error(`Missing export "${exportName}" in source file.`);
  }

  const equalsIndex = sourceText.indexOf('=', signatureIndex);
  if (equalsIndex < 0) {
    throw new Error(`Cannot find "=" for export "${exportName}".`);
  }

  const openIndex = sourceText.indexOf('[', equalsIndex);
  if (openIndex < 0) {
    throw new Error(`Cannot find array literal for export "${exportName}".`);
  }

  let depth = 0;
  let stringQuote = null;
  let escaped = false;
  let lineComment = false;
  let blockComment = false;

  for (let i = openIndex; i < sourceText.length; i += 1) {
    const char = sourceText[i];
    const next = sourceText[i + 1];

    if (lineComment) {
      if (char === '\n') lineComment = false;
      continue;
    }

    if (blockComment) {
      if (char === '*' && next === '/') {
        blockComment = false;
        i += 1;
      }
      continue;
    }

    if (stringQuote) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === '\\') {
        escaped = true;
        continue;
      }
      if (char === stringQuote) {
        stringQuote = null;
      }
      continue;
    }

    if (char === '"' || char === '\'' || char === '`') {
      stringQuote = char;
      continue;
    }

    if (char === '/' && next === '/') {
      lineComment = true;
      i += 1;
      continue;
    }

    if (char === '/' && next === '*') {
      blockComment = true;
      i += 1;
      continue;
    }

    if (char === '[') {
      depth += 1;
      continue;
    }

    if (char === ']') {
      depth -= 1;
      if (depth === 0) {
        return sourceText.slice(openIndex, i + 1);
      }
    }
  }

  throw new Error(`Unclosed array literal for export "${exportName}".`);
}

async function loadTsArray(filePath, exportName) {
  const sourceText = await fs.readFile(filePath, 'utf8');
  const literal = extractArrayLiteral(sourceText, exportName);
  return Function(`"use strict"; return (${literal});`)();
}

function toCsvCell(value) {
  const text = String(value ?? '');
  if (!/[",\n\r]/.test(text)) return text;
  return `"${text.replace(/"/g, '""')}"`;
}

function buildCsv(items) {
  const header = [
    'id',
    'subject',
    'grade',
    'sourceType',
    'sourceId',
    'lessonId',
    'title',
    'text',
    'profileId',
    'voice',
    'localOutputPath',
    'r2ObjectKey',
    'warning',
  ];
  const lines = [header.join(',')];
  for (const item of items) {
    lines.push([
      item.id,
      item.subject,
      item.grade,
      item.sourceType,
      item.sourceId,
      item.lessonId,
      item.title,
      item.text,
      item.profileId,
      item.voice,
      item.localOutputPath,
      item.r2ObjectKey,
      item.warning || '',
    ].map(toCsvCell).join(','));
  }
  return `${lines.join('\n')}\n`;
}

function buildCatalogItems({ lessons, cards, questions }) {
  const lessonMap = new Map(lessons.map((lesson) => [Number(lesson.id), lesson]));
  const lessonIds = new Set(lessons.map((lesson) => Number(lesson.id)));

  const lessonCardRows = cards
    .filter((card) => Number(card.isActive) === 1)
    .filter((card) => lessonIds.has(Number(card.lessonId)))
    .map((card) => {
      const lesson = lessonMap.get(Number(card.lessonId));
      const text = cleanText(card.audioText || card.content || card.title || '');
      const warning = [];
      if (!isSafeText(text)) warning.push('unsafe-text');
      if (text.length > 260) warning.push('long-text');
      return {
        id: `eng6-full-${String(card.id).padStart(5, '0')}`,
        subject: SUBJECT_CODE,
        grade: GRADE,
        sourceType: 'lesson-card',
        sourceId: String(card.sourceId || card.id),
        lessonId: Number(card.lessonId),
        title: cleanText(card.title || lesson?.title || ''),
        text,
        profileId: PROFILE_ID,
        voice: VOICE_NAME,
        localOutputPath: path.join(AUDIO_OUTPUT_DIR, `lesson-card-${String(card.sourceId || card.id)}.mp3`),
        r2ObjectKey: `audio/tts/assets/${PROFILE_ID}/lesson-card-${String(card.sourceId || card.id)}.mp3`,
        warning: warning.join('|'),
      };
    });

  const questionRows = questions
    .filter((question) => Number(question.isActive) === 1)
    .filter((question) => lessonIds.has(Number(question.lessonId)))
    .map((question) => {
      const text = cleanText(question.audioText || question.questionText || '');
      const warning = [];
      if (!isSafeText(text)) warning.push('unsafe-text');
      if (text.length > 180) warning.push('long-text');
      return {
        id: `eng6-full-${String(question.id).padStart(5, '0')}`,
        subject: SUBJECT_CODE,
        grade: GRADE,
        sourceType: 'question',
        sourceId: String(question.sourceId || question.id),
        lessonId: Number(question.lessonId),
        title: cleanText(question.questionText || ''),
        text,
        profileId: PROFILE_ID,
        voice: VOICE_NAME,
        localOutputPath: path.join(AUDIO_OUTPUT_DIR, `question-${String(question.sourceId || question.id)}.mp3`),
        r2ObjectKey: `audio/tts/assets/${PROFILE_ID}/question-${String(question.sourceId || question.id)}.mp3`,
        warning: warning.join('|'),
      };
    });

  const rows = [...lessonCardRows, ...questionRows];
  const seen = new Set();
  const deduped = [];
  for (const item of rows) {
    const key = `${item.sourceType}:${item.sourceId}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(item);
  }
  return deduped;
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const [lessons, cards, questions] = await Promise.all([
    loadTsArray(LESSONS_PATH, 'englishLessons'),
    loadTsArray(CARDS_PATH, 'englishLessonCards'),
    loadTsArray(QUESTIONS_PATH, 'englishQuestions'),
  ]);

  const items = buildCatalogItems({ lessons, cards, questions });
  const warnings = items.filter((item) => item.warning).length;
  const duplicateSourceIds = items.length - new Set(items.map((item) => `${item.sourceType}:${item.sourceId}`)).size;
  const emptyText = items.filter((item) => !item.text).length;
  const tooLongText = items.filter((item) => item.warning.includes('long-text')).length;
  const internalText = items.filter((item) => item.warning.includes('unsafe-text')).length;

  const catalog = {
    generatedAt: nowIso(),
    profileId: PROFILE_ID,
    voice: VOICE_NAME,
    subject: SUBJECT_CODE,
    grade: GRADE,
    outputRoot: OUTPUT_ROOT,
    outputDir: AUDIO_OUTPUT_DIR,
    counts: {
      lessons: lessons.filter((lesson) => Number(lesson.isActive) === 1).length,
      lessonCards: items.filter((item) => item.sourceType === 'lesson-card').length,
      questions: items.filter((item) => item.sourceType === 'question').length,
      totalItems: items.length,
      warnings,
      duplicateSourceIds,
      emptyText,
      tooLongText,
      internalText,
    },
    items,
  };

  await fs.writeFile(OUTPUT_JSON, `${JSON.stringify(catalog, null, 2)}\n`, 'utf8');
  await fs.writeFile(OUTPUT_CSV, buildCsv(items), 'utf8');

  console.log(JSON.stringify({
    catalogJson: OUTPUT_JSON,
    catalogCsv: OUTPUT_CSV,
    totalItems: items.length,
    lessonCards: catalog.counts.lessonCards,
    questions: catalog.counts.questions,
    warnings,
    duplicateSourceIds,
    emptyText,
    tooLongText,
    internalText,
  }, null, 2));
}

main().catch((error) => {
  console.error(String(error?.message || error));
  process.exitCode = 1;
});
