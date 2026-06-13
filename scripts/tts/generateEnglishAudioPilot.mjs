import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '../..');

const LESSONS_PATH = path.join(REPO_ROOT, 'src/data/grade6/tieng-anh/englishLessons.ts');
const CARDS_PATH = path.join(REPO_ROOT, 'src/data/grade6/tieng-anh/englishLessonCards.ts');
const QUESTIONS_PATH = path.join(REPO_ROOT, 'src/data/grade6/tieng-anh/englishQuestions.ts');

const DOCS_DIR = path.join(REPO_ROOT, 'docs/audio');
const CATALOG_JSON = path.join(DOCS_DIR, 'english-audio-catalog-pilot.json');
const CATALOG_CSV = path.join(DOCS_DIR, 'english-audio-catalog-pilot.csv');
const REPORT_MD = path.join(DOCS_DIR, 'english-audio-pilot-generate-report.md');

const PROFILE_ID = 'en-v1-pilot';
const VOICE_NAME = 'en-US-Neural2-F';
const SUBJECT_CODE = 'tieng-anh';
const GRADE = 6;
const OUTPUT_ROOT = 'F:\\1_A_Disk_D\\khuong-binh\\lop6-tts-audio';
const OUTPUT_DIR = path.join(OUTPUT_ROOT, PROFILE_ID);
const GOOGLE_TTS_ENDPOINT = 'https://texttospeech.googleapis.com/v1/text:synthesize';
const MAX_FILES = 20;
const TARGET_FILES = 14;
const LESSON_IDS = [1, 2];
const CARD_TARGET_PER_LESSON = 4;
const QUESTION_TARGET_PER_LESSON = 3;

const ALLOWED_CARD_TYPES = new Set(['intro', 'explain', 'example', 'tip', 'common_mistake', 'mini_check', 'recap']);
const ALLOWED_QUESTION_TYPES = new Set(['single_choice', 'true_false', 'fill_text']);
const INTERNAL_TEXT_RE = /(dot-02|app-ready|app ready|demo|demon|MVP|bundle|chunk|preset)/i;
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
  if (text.length < 8) return false;
  return true;
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

function parseArgs(argv) {
  const result = {
    envFile: '',
    maxFiles: MAX_FILES,
    voice: VOICE_NAME,
  };

  for (const arg of argv.slice(2)) {
    if (arg.startsWith('--env-file=')) {
      result.envFile = arg.slice('--env-file='.length);
    } else if (arg.startsWith('--max=')) {
      const value = Number(arg.slice('--max='.length));
      if (Number.isFinite(value) && value > 0) {
        result.maxFiles = Math.min(MAX_FILES, Math.max(1, Math.floor(value)));
      }
    } else if (arg.startsWith('--voice=')) {
      const value = String(arg.slice('--voice='.length)).trim();
      if (value) result.voice = value;
    }
  }

  return result;
}

function parseDotEnv(content) {
  const result = {};
  for (const line of String(content ?? '').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx < 0) continue;
    const key = trimmed.slice(0, idx).trim();
    const value = trimmed.slice(idx + 1).trim();
    if (key) result[key] = value;
  }
  return result;
}

async function resolveTtsAuth(envFile) {
  const shellKey = String(process.env.GOOGLE_TTS_API_KEY || '').trim();
  if (shellKey) {
    return { mode: 'api-key', token: shellKey, source: 'env:GOOGLE_TTS_API_KEY', quotaProject: '' };
  }

  if (envFile) {
    const resolved = path.resolve(envFile);
    const content = await fs.readFile(resolved, 'utf8');
    const parsed = parseDotEnv(content);
    const fileKey = String(parsed.GOOGLE_TTS_API_KEY || parsed.GOOGLE_TTS_KEY || parsed.TTS_API_KEY || '').trim();
    if (fileKey) {
      return { mode: 'api-key', token: fileKey, source: `file:${resolved}`, quotaProject: '' };
    }
  }

  const envQuotaProject = String(process.env.GOOGLE_CLOUD_QUOTA_PROJECT || process.env.GOOGLE_TTS_QUOTA_PROJECT || '').trim();
  let quotaProject = envQuotaProject;
  if (!quotaProject) {
    try {
      const projectOutput = execFileSync('gcloud', ['config', 'get-value', 'project'], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
        shell: true,
      });
      const candidate = String(projectOutput || '').trim();
      if (candidate && candidate !== '(unset)' && candidate !== 'null') {
        quotaProject = candidate;
      }
    } catch {
      // Ignore and fall through.
    }
  }

  const gcloudCandidates = [
    process.env.GCLOUD_CLI_PATH,
    'C:\\Program Files (x86)\\Google\\Cloud SDK\\google-cloud-sdk\\bin\\gcloud.cmd',
    'C:\\Program Files\\Google\\Cloud SDK\\google-cloud-sdk\\bin\\gcloud.cmd',
  ].filter(Boolean);

  let gcloudBinary = '';
  for (const candidate of gcloudCandidates) {
    try {
      await fs.stat(candidate);
      gcloudBinary = candidate;
      break;
    } catch {
      // Try next candidate.
    }
  }

  if (!gcloudBinary) {
    try {
      const whereOutput = execFileSync('where.exe', ['gcloud'], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
      });
      const firstPath = String(whereOutput || '')
        .split(/\r?\n/)
        .map((line) => line.trim())
        .find(Boolean);
      if (firstPath) {
        gcloudBinary = firstPath;
      }
    } catch {
      // Ignore and continue to missing auth.
    }
  }

  if (gcloudBinary) {
    try {
      const stdout = execFileSync(gcloudBinary, ['auth', 'application-default', 'print-access-token'], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
        shell: true,
      });
      const token = String(stdout || '').trim();
      if (token) {
        return { mode: 'adc', token, source: `adc:${gcloudBinary}`, quotaProject };
      }
    } catch {
      // Ignore and fall through to missing auth.
    }
  }

  try {
    const stdout = execFileSync('gcloud', ['auth', 'application-default', 'print-access-token'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: true,
    });
    const token = String(stdout || '').trim();
    if (token) {
      return { mode: 'adc', token, source: 'adc:gcloud-application-default', quotaProject };
    }
  } catch {
    // Ignore and fall through to missing auth.
  }

  return null;
}

function toCsvCell(value) {
  const text = String(value ?? '');
  if (!/[",\n\r]/.test(text)) return text;
  return `"${text.replace(/"/g, '""')}"`;
}

function buildCsv(rows) {
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
    'status',
    'fileSize',
    'error',
  ];

  const lines = [header.join(',')];
  for (const row of rows) {
    lines.push([
      row.id,
      row.subject,
      row.grade,
      row.sourceType,
      row.sourceId,
      row.lessonId,
      row.title,
      row.text,
      row.profileId,
      row.voice,
      row.localOutputPath,
      row.r2ObjectKey,
      row.status,
      row.fileSize,
      row.error || '',
    ].map(toCsvCell).join(','));
  }
  return `${lines.join('\n')}\n`;
}

function chooseLessonCardText(card) {
  return cleanText(card.audioText || card.content || '');
}

function chooseQuestionText(question) {
  return cleanText(question.audioText || question.questionText || '');
}

function buildMarkdownReport(report) {
  const lines = [];
  lines.push('# English Audio Pilot Generate Report');
  lines.push('');
  lines.push(`- Generated at: ${report.generatedAt}`);
  lines.push(`- profileId: ${report.profileId}`);
  lines.push(`- voice: ${report.voice}`);
  lines.push(`- subject: ${report.subject}`);
  lines.push(`- grade: ${report.grade}`);
  lines.push(`- catalog: ${report.catalogPath}`);
  lines.push(`- outputDir: ${report.outputDir}`);
  lines.push(`- keySource: ${report.keySource || 'missing'}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- catalogItems: ${report.catalogItems}`);
  lines.push(`- generated: ${report.generated}`);
  lines.push(`- skippedExisting: ${report.skippedExisting}`);
  lines.push(`- failed: ${report.failed}`);
  lines.push(`- maxFiles: ${report.maxFiles}`);
  lines.push('');
  lines.push('## Item Status');
  lines.push('');
  lines.push('| id | sourceType | sourceId | status | fileSize | localOutputPath | error |');
  lines.push('|---|---|---|---|---:|---|---|');
  for (const item of report.items) {
    lines.push(`| ${item.id} | ${item.sourceType} | ${item.sourceId} | ${item.status} | ${item.fileSize} | ${item.localOutputPath} | ${item.error ? item.error.replace(/\|/g, '\\|') : ''} |`);
  }
  return `${lines.join('\n')}\n`;
}

async function probeFileSize(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return Number(stat.size || 0);
  } catch {
    return 0;
  }
}

async function synthesizeSpeech({ auth, text, voiceName }) {
  const url = auth.mode === 'api-key'
    ? `${GOOGLE_TTS_ENDPOINT}?key=${encodeURIComponent(auth.token)}`
    : GOOGLE_TTS_ENDPOINT;

  const headers = { 'Content-Type': 'application/json' };
  if (auth.mode === 'adc') {
    headers.Authorization = `Bearer ${auth.token}`;
    if (auth.quotaProject) {
      headers['x-goog-user-project'] = auth.quotaProject;
    }
  }

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      input: { text },
      voice: { languageCode: 'en-US', name: voiceName },
      audioConfig: { audioEncoding: 'MP3' },
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`google-tts-http-${response.status}: ${body.slice(0, 220)}`);
  }

  const json = await response.json();
  const audioContent = String(json.audioContent || '');
  if (!audioContent) {
    throw new Error('google-tts-empty-audio');
  }
  return Buffer.from(audioContent, 'base64');
}

function buildPilotItems({ lessons, cards, questions, maxFiles }) {
  const lessonMap = new Map(lessons.map((lesson) => [Number(lesson.id), lesson]));

  const selectedLessonIds = LESSON_IDS.filter((id) => lessonMap.has(id));
  const cardItems = [];
  const questionItems = [];

  for (const lessonId of selectedLessonIds) {
    const lesson = lessonMap.get(lessonId);
    const lessonCards = cards
      .filter((card) => Number(card.isActive) === 1)
      .filter((card) => Number(card.lessonId) === lessonId)
      .filter((card) => ALLOWED_CARD_TYPES.has(String(card.cardType)))
      .map((card) => ({
        card,
        lesson,
        text: chooseLessonCardText(card),
      }))
      .filter((item) => isSafeText(item.text))
      .filter((item) => item.text.length >= 24 && item.text.length <= 260)
      .sort((a, b) => Number(a.card.sortOrder) - Number(b.card.sortOrder) || Number(a.card.id) - Number(b.card.id))
      .slice(0, CARD_TARGET_PER_LESSON);

    for (const item of lessonCards) {
      cardItems.push(item);
    }

    const lessonQuestions = questions
      .filter((question) => Number(question.isActive) === 1)
      .filter((question) => Number(question.lessonId) === lessonId)
      .filter((question) => ALLOWED_QUESTION_TYPES.has(String(question.questionType)))
      .map((question) => ({
        question,
        lesson,
        text: chooseQuestionText(question),
      }))
      .filter((item) => isSafeText(item.text))
      .filter((item) => item.text.length >= 16 && item.text.length <= 140)
      .sort((a, b) => Number(a.question.id) - Number(b.question.id))
      .slice(0, QUESTION_TARGET_PER_LESSON);

    for (const item of lessonQuestions) {
      questionItems.push(item);
    }
  }

  const combined = [
    ...cardItems.map((item) => ({
      sourceType: 'lesson-card',
      sourceId: String(item.card.sourceId || item.card.id),
      lessonId: Number(item.card.lessonId),
      lessonTitle: String(item.lesson?.title || ''),
      title: cleanText(item.card.title || item.lesson?.title || ''),
      text: item.text,
      source: item.card,
    })),
    ...questionItems.map((item) => ({
      sourceType: 'question',
      sourceId: String(item.question.sourceId || item.question.id),
      lessonId: Number(item.question.lessonId),
      lessonTitle: String(item.lesson?.title || ''),
      title: cleanText(item.question.questionText || item.lesson?.title || ''),
      text: item.text,
      source: item.question,
    })),
  ];

  const unique = [];
  const seen = new Set();
  for (const item of combined) {
    const key = `${item.sourceType}:${item.sourceId}`;
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(item);
  }

  const shortlisted = unique.slice(0, maxFiles);
  return shortlisted.map((item, index) => {
    const safeSourceId = item.sourceId.replace(/[\\/]/g, '-');
    const fileName = `${item.sourceType}-${safeSourceId}.mp3`;
    const localOutputPath = path.join(OUTPUT_DIR, fileName);
    const r2ObjectKey = `audio/tts/assets/${PROFILE_ID}/${fileName}`;
    return {
      id: `eng6-pilot-${String(index + 1).padStart(3, '0')}`,
      subject: SUBJECT_CODE,
      grade: GRADE,
      sourceType: item.sourceType,
      sourceId: item.sourceId,
      lessonId: item.lessonId,
      lessonTitle: item.lessonTitle,
      title: item.title,
      text: item.text,
      profileId: PROFILE_ID,
      voice: VOICE_NAME,
      localOutputPath,
      r2ObjectKey,
      status: 'planned',
      fileSize: 0,
      error: '',
    };
  });
}

async function main() {
  const args = parseArgs(process.argv);
  await fs.mkdir(DOCS_DIR, { recursive: true });
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const [lessons, cards, questions] = await Promise.all([
    loadTsArray(LESSONS_PATH, 'englishLessons'),
    loadTsArray(CARDS_PATH, 'englishLessonCards'),
    loadTsArray(QUESTIONS_PATH, 'englishQuestions'),
  ]);

  const allItems = buildPilotItems({
    lessons,
    cards,
    questions,
    maxFiles: args.maxFiles,
  });

  const catalog = {
    generatedAt: nowIso(),
    profileId: PROFILE_ID,
    voice: args.voice,
    subject: SUBJECT_CODE,
    grade: GRADE,
    outputRoot: OUTPUT_ROOT,
    outputDir: OUTPUT_DIR,
    maxFiles: args.maxFiles,
    targetFiles: TARGET_FILES,
    items: allItems,
  };

  await fs.writeFile(CATALOG_JSON, `${JSON.stringify(catalog, null, 2)}\n`, 'utf8');
  await fs.writeFile(CATALOG_CSV, buildCsv(allItems), 'utf8');

  const auth = await resolveTtsAuth(args.envFile);
  const report = {
    generatedAt: nowIso(),
    profileId: PROFILE_ID,
    voice: args.voice,
    subject: SUBJECT_CODE,
    grade: GRADE,
    catalogPath: CATALOG_JSON,
    outputDir: OUTPUT_DIR,
    keySource: auth?.source || '',
    catalogItems: allItems.length,
    generated: 0,
    skippedExisting: 0,
    failed: 0,
    maxFiles: args.maxFiles,
    items: [],
  };

  if (!auth) {
    report.failed = allItems.length;
    report.items = allItems.map((item) => ({
      ...item,
      status: 'skipped',
      fileSize: 0,
        error: 'Missing Google TTS auth. Set GOOGLE_TTS_API_KEY or ensure ADC/gcloud application-default credentials are available.',
      }));
    await fs.writeFile(REPORT_MD, buildMarkdownReport(report), 'utf8');
    console.log(JSON.stringify({
      catalogJson: CATALOG_JSON,
      catalogCsv: CATALOG_CSV,
      reportMd: REPORT_MD,
      catalogItems: allItems.length,
      generated: 0,
      skippedExisting: 0,
      failed: report.failed,
      keySource: 'missing',
      outputDir: OUTPUT_DIR,
      voice: args.voice,
    }, null, 2));
    throw new Error('Missing Google TTS auth. Set GOOGLE_TTS_API_KEY or make ADC available.');
  }

  for (const item of allItems) {
    const existingSize = await probeFileSize(item.localOutputPath);
    if (existingSize > 0) {
      report.skippedExisting += 1;
      report.items.push({
        ...item,
        status: 'skipped-existing',
        fileSize: existingSize,
        error: '',
      });
      continue;
    }

    try {
      const audio = await synthesizeSpeech({
        auth,
        text: item.text,
        voiceName: args.voice,
      });
      await fs.writeFile(item.localOutputPath, audio);
      const fileSize = await probeFileSize(item.localOutputPath);
      if (fileSize <= 0) {
        throw new Error('generated-file-empty');
      }
      report.generated += 1;
      report.items.push({
        ...item,
        status: 'generated',
        fileSize,
        error: '',
      });
    } catch (error) {
      report.failed += 1;
      report.items.push({
        ...item,
        status: 'failed',
        fileSize: 0,
        error: String(error?.message || error),
      });
    }
  }

  await fs.writeFile(REPORT_MD, buildMarkdownReport(report), 'utf8');

  console.log(JSON.stringify({
    catalogJson: CATALOG_JSON,
    catalogCsv: CATALOG_CSV,
    reportMd: REPORT_MD,
    catalogItems: allItems.length,
    generated: report.generated,
    skippedExisting: report.skippedExisting,
    failed: report.failed,
    keySource: auth.source,
    outputDir: OUTPUT_DIR,
    voice: args.voice,
  }, null, 2));
}

main().catch((error) => {
  console.error(String(error?.message || error));
  process.exitCode = 1;
});
