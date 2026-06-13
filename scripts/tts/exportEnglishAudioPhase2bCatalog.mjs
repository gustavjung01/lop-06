import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '../..');

const LESSONS_PATH = path.join(REPO_ROOT, 'src/data/grade6/tieng-anh/englishLessons.ts');
const QUESTIONS_PATH = path.join(REPO_ROOT, 'src/data/grade6/tieng-anh/englishQuestions.ts');

const OUTPUT_DIR = path.join(REPO_ROOT, 'docs/audio');
const OUTPUT_JSON = path.join(OUTPUT_DIR, 'english-audio-catalog-phase2b.json');
const OUTPUT_CSV = path.join(OUTPUT_DIR, 'english-audio-catalog-phase2b.csv');
const REPORT_JSON = path.join(OUTPUT_DIR, 'english-audio-phase2b-catalog-report.json');
const REPORT_MD = path.join(OUTPUT_DIR, 'english-audio-phase2b-catalog-report.md');

const PROFILE_ID = 'en-v1';
const VOICE_NAME = 'en-US-Neural2-F';
const SUBJECT_CODE = 'english';
const GRADE = 6;
const OUTPUT_ROOT = 'F:\\1_A_Disk_D\\khuong-binh\\lop6-tts-audio';
const AUDIO_OUTPUT_DIR = path.join(OUTPUT_ROOT, PROFILE_ID);
const VOICE_FOLDER = {
  'vocabulary-word': 'vocabulary-word',
  'question-option': 'question-option',
};

const INTERNAL_TEXT_RE = /\b(?:dot-02|app-ready|app ready|demo|demon|MVP|bundle|chunk|preset)\b|dot-02|app-ready/i;
const MOJIBAKE_RE = /(?:Ãƒ|Ã„|Ã¡Â»|Ã¢â‚¬|Ã¯Â¿Â½)/;
const VIETNAMESE_MARK_PATTERN = /[À-ỹĐđĂăÂâÊêÔôƠơƯư]/u;
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

function isEnglishOnlyText(value) {
  const text = cleanText(value);
  if (!text) return false;
  if (INTERNAL_TEXT_RE.test(text)) return false;
  return !VIETNAMESE_MARK_PATTERN.test(text);
}

function normalizeEnglishText(value) {
  return cleanText(value).toLowerCase();
}

function slugifyEnglishText(value) {
  return normalizeEnglishText(value)
    .replace(/['’"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function shortHash(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}

function buildAudioSourceId(sourceType, text) {
  const normalized = cleanText(text);
  if (!normalized) return '';
  const slug = slugifyEnglishText(normalized) || 'item';
  return `${slug}-${shortHash(`${sourceType}:${normalized.toLowerCase()}`)}`;
}

function parseArrayLiteral(sourceText, exportName) {
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

  for (let index = openIndex; index < sourceText.length; index += 1) {
    const char = sourceText[index];
    const next = sourceText[index + 1];

    if (lineComment) {
      if (char === '\n') lineComment = false;
      continue;
    }

    if (blockComment) {
      if (char === '*' && next === '/') {
        blockComment = false;
        index += 1;
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
      index += 1;
      continue;
    }

    if (char === '/' && next === '*') {
      blockComment = true;
      index += 1;
      continue;
    }

    if (char === '[') {
      depth += 1;
      continue;
    }

    if (char === ']') {
      depth -= 1;
      if (depth === 0) {
        return sourceText.slice(openIndex, index + 1);
      }
    }
  }

  throw new Error(`Unclosed array literal for export "${exportName}".`);
}

async function loadTsArray(filePath, exportName) {
  const sourceText = await fs.readFile(filePath, 'utf8');
  const literal = parseArrayLiteral(sourceText, exportName);
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
    'rawInstanceCount',
    'lessonIds',
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
      item.rawInstanceCount,
      Array.isArray(item.lessonIds) ? item.lessonIds.join('|') : '',
      item.warning || '',
    ].map(toCsvCell).join(','));
  }
  return `${lines.join('\n')}\n`;
}

function buildItemId(sourceType, index) {
  return `eng6-p2b-${sourceType === 'vocabulary-word' ? 'vocab' : 'opt'}-${String(index).padStart(5, '0')}`;
}

function createItemRecord({
  catalogIndex,
  sourceType,
  sourceId,
  lessonId,
  title,
  text,
  rawInstanceCount,
  lessonIds,
  warning,
}) {
  const fileName = `${sourceId}.mp3`;
  const relativeFolder = VOICE_FOLDER[sourceType];
  return {
    id: buildItemId(sourceType, catalogIndex),
    subject: SUBJECT_CODE,
    grade: GRADE,
    sourceType,
    sourceId,
    lessonId,
    title,
    text,
    profileId: PROFILE_ID,
    voice: VOICE_NAME,
    localOutputPath: path.join(AUDIO_OUTPUT_DIR, relativeFolder, fileName),
    r2ObjectKey: `audio/tts/assets/${PROFILE_ID}/${relativeFolder}/${fileName}`,
    rawInstanceCount,
    lessonIds: Array.from(new Set(lessonIds)).sort((a, b) => a - b),
    warning,
  };
}

function pushSample(list, value, max = 60) {
  if (list.length < max) list.push(value);
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const [lessons, questions] = await Promise.all([
    loadTsArray(LESSONS_PATH, 'englishLessons'),
    loadTsArray(QUESTIONS_PATH, 'englishQuestions'),
  ]);

  const activeLessons = lessons.filter((lesson) => Number(lesson.isActive) === 1);
  const vocabGroups = new Map();
  const optionGroups = new Map();
  const skippedQuestionOptions = [];
  let rawVocabularyEntries = 0;
  let skippedVocabularyEntries = 0;
  let rawQuestionOptionInstances = 0;
  let englishQuestionOptionInstances = 0;

  for (const lesson of activeLessons) {
    const vocabularyEntries = Object.entries(lesson.vocabulary || {});
    for (const [word, meaning] of vocabularyEntries) {
      rawVocabularyEntries += 1;
      const englishText = cleanText(word);
      if (!isEnglishOnlyText(englishText)) {
        skippedVocabularyEntries += 1;
        continue;
      }
      const normalizedKey = normalizeEnglishText(englishText);
      const sourceId = buildAudioSourceId('vocabulary-word', englishText);
      const group = vocabGroups.get(normalizedKey) || {
        sourceType: 'vocabulary-word',
        sourceId,
        lessonId: Number(lesson.id),
        title: englishText,
        text: englishText,
        rawInstanceCount: 0,
        lessonIds: new Set(),
        warnings: [],
      };
      group.rawInstanceCount += 1;
      group.lessonIds.add(Number(lesson.id));
      group.title = englishText;
      group.text = englishText;
      if (!isEnglishOnlyText(meaning)) {
        pushSample(group.warnings, `meaning-not-english:${cleanText(meaning)}`);
      }
      vocabGroups.set(normalizedKey, group);
    }
  }

  for (const question of questions.filter((item) => Number(item.isActive) === 1)) {
    for (const option of question.options || []) {
      rawQuestionOptionInstances += 1;
      const optionText = cleanText(option.text);
      if (!isEnglishOnlyText(optionText)) {
        skippedQuestionOptions.push({
          lessonId: Number(question.lessonId),
          questionId: Number(question.id),
          questionSourceId: String(question.sourceId || question.id),
          optionKey: String(option.key || ''),
          text: optionText,
          reason: 'non-english-or-mixed',
        });
        continue;
      }

      englishQuestionOptionInstances += 1;
      const normalizedKey = normalizeEnglishText(optionText);
      const sourceId = buildAudioSourceId('question-option', optionText);
      const group = optionGroups.get(normalizedKey) || {
        sourceType: 'question-option',
        sourceId,
        lessonId: Number(question.lessonId),
        title: optionText,
        text: optionText,
        rawInstanceCount: 0,
        lessonIds: new Set(),
        warnings: [],
      };
      group.rawInstanceCount += 1;
      group.lessonIds.add(Number(question.lessonId));
      group.title = optionText;
      group.text = optionText;
      optionGroups.set(normalizedKey, group);
    }
  }

  const vocabItems = [...vocabGroups.values()].map((group, index) =>
    createItemRecord({
      catalogIndex: index + 1,
      sourceType: group.sourceType,
      sourceId: group.sourceId,
      lessonId: group.lessonId,
      title: group.title,
      text: group.text,
      rawInstanceCount: group.rawInstanceCount,
      lessonIds: Array.from(group.lessonIds),
      warning: group.warnings.join('|'),
    }),
  );

  const optionItems = [...optionGroups.values()].map((group, index) =>
    createItemRecord({
      catalogIndex: vocabItems.length + index + 1,
      sourceType: group.sourceType,
      sourceId: group.sourceId,
      lessonId: group.lessonId,
      title: group.title,
      text: group.text,
      rawInstanceCount: group.rawInstanceCount,
      lessonIds: Array.from(group.lessonIds),
      warning: group.warnings.join('|'),
    }),
  );

  const items = [...vocabItems, ...optionItems];
  const uniqueVocab = vocabItems.length;
  const uniqueOptions = optionItems.length;
  const skippedQuestionOptionCount = skippedQuestionOptions.length;

  const catalog = {
    generatedAt: nowIso(),
    profileId: PROFILE_ID,
    voice: VOICE_NAME,
    subject: SUBJECT_CODE,
    grade: GRADE,
    outputRoot: OUTPUT_ROOT,
    outputDir: AUDIO_OUTPUT_DIR,
    counts: {
      lessons: activeLessons.length,
      rawVocabularyEntries,
      uniqueVocabularyAudio: uniqueVocab,
      skippedVocabularyEntries,
      rawQuestionOptionInstances,
      englishQuestionOptionInstances,
      uniqueQuestionOptionAudio: uniqueOptions,
      skippedQuestionOptionInstances: skippedQuestionOptionCount,
      totalItems: items.length,
    },
    items,
  };

  const report = {
    generatedAt: catalog.generatedAt,
    profileId: PROFILE_ID,
    voice: VOICE_NAME,
    outputDir: AUDIO_OUTPUT_DIR,
    counts: catalog.counts,
    skippedQuestionOptionSamples: skippedQuestionOptions.slice(0, 120),
    sampleItems: items.slice(0, 40).map((item) => ({
      id: item.id,
      sourceType: item.sourceType,
      sourceId: item.sourceId,
      lessonId: item.lessonId,
      title: item.title,
      text: item.text,
      localOutputPath: item.localOutputPath,
      r2ObjectKey: item.r2ObjectKey,
      rawInstanceCount: item.rawInstanceCount,
      lessonIds: item.lessonIds,
    })),
  };

  const reportMdLines = [];
  reportMdLines.push('# English Audio Phase 2B Catalog Report');
  reportMdLines.push('');
  reportMdLines.push(`- generatedAt: ${report.generatedAt}`);
  reportMdLines.push(`- profileId: ${PROFILE_ID}`);
  reportMdLines.push(`- voice: ${VOICE_NAME}`);
  reportMdLines.push(`- outputDir: ${AUDIO_OUTPUT_DIR}`);
  reportMdLines.push('');
  reportMdLines.push('## Counts');
  reportMdLines.push('');
  reportMdLines.push(`- rawVocabularyEntries: ${rawVocabularyEntries}`);
  reportMdLines.push(`- uniqueVocabularyAudio: ${uniqueVocab}`);
  reportMdLines.push(`- skippedVocabularyEntries: ${skippedVocabularyEntries}`);
  reportMdLines.push(`- rawQuestionOptionInstances: ${rawQuestionOptionInstances}`);
  reportMdLines.push(`- englishQuestionOptionInstances: ${englishQuestionOptionInstances}`);
  reportMdLines.push(`- uniqueQuestionOptionAudio: ${uniqueOptions}`);
  reportMdLines.push(`- skippedQuestionOptionInstances: ${skippedQuestionOptionCount}`);
  reportMdLines.push(`- totalItems: ${items.length}`);
  reportMdLines.push('');
  reportMdLines.push('## Notes');
  reportMdLines.push('');
  reportMdLines.push('- Only English-only text is queued for TTS.');
  reportMdLines.push('- Mixed or Vietnamese option text is skipped for phase 2B.');
  reportMdLines.push('- Vocabulary words and question options use shared normalized source ids.');
  reportMdLines.push('');
  reportMdLines.push('## Sample Items');
  reportMdLines.push('');
  reportMdLines.push('| sourceType | sourceId | lessonId | title | text | rawInstanceCount |');
  reportMdLines.push('|---|---|---:|---|---|---:|');
  for (const item of report.sampleItems) {
    reportMdLines.push(`| ${item.sourceType} | ${item.sourceId} | ${item.lessonId} | ${item.title} | ${item.text} | ${item.rawInstanceCount} |`);
  }

  await fs.writeFile(OUTPUT_JSON, `${JSON.stringify(catalog, null, 2)}\n`, 'utf8');
  await fs.writeFile(OUTPUT_CSV, buildCsv(items), 'utf8');
  await fs.writeFile(REPORT_JSON, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  await fs.writeFile(REPORT_MD, `${reportMdLines.join('\n')}\n`, 'utf8');

  console.log(JSON.stringify({
    catalogJson: OUTPUT_JSON,
    catalogCsv: OUTPUT_CSV,
    reportJson: REPORT_JSON,
    reportMd: REPORT_MD,
    rawVocabularyEntries,
    uniqueVocabularyAudio: uniqueVocab,
    rawQuestionOptionInstances,
    englishQuestionOptionInstances,
    uniqueQuestionOptionAudio: uniqueOptions,
    skippedQuestionOptionInstances: skippedQuestionOptionCount,
    totalItems: items.length,
  }, null, 2));
}

main().catch((error) => {
  console.error(String(error?.message || error));
  process.exitCode = 1;
});
