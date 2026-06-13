import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const REPO_ROOT = process.cwd();

const LESSONS_PATH = path.join(REPO_ROOT, 'src/data/grade6/ngu-van/nguVanLessons.ts');
const CARDS_PATH = path.join(REPO_ROOT, 'src/data/grade6/ngu-van/nguVanLessonCards.ts');
const QUESTIONS_PATH = path.join(REPO_ROOT, 'src/data/grade6/ngu-van/nguVanQuestions.ts');

const DOCS_DIR = path.join(REPO_ROOT, 'docs/audio');
const AUDIT_MD = path.join(DOCS_DIR, 'ngu-van-audio-phase1-audit.md');
const CATALOG_JSON = path.join(DOCS_DIR, 'ngu-van-audio-phase1-catalog.json');
const CATALOG_CSV = path.join(DOCS_DIR, 'ngu-van-audio-phase1-catalog.csv');
const REPORT_MD = path.join(DOCS_DIR, 'ngu-van-audio-phase1-pilot-report.md');
const REPORT_JSON = path.join(DOCS_DIR, 'ngu-van-audio-phase1-pilot-report.json');

const SUBJECT = 'ngu-van';
const GRADE = 6;
const PROFILE_ID = 'vi-v1';
const VOICE_NAME = 'vi-VN-Chirp3-HD-Despina';
const LANGUAGE_CODE = 'vi-VN';
const PILOT_LESSON_ID = 1;
const OUTPUT_DIR = path.join('F:\\1_A_Disk_D\\khuong-binh\\lop6-tts-audio', 'ngu-van-vi-v1-pilot');
const GOOGLE_TTS_ENDPOINT = 'https://texttospeech.googleapis.com/v1/text:synthesize';
const MAX_ITEMS = 20;
const DEFAULT_ITEMS = 10;

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
  if (!raw) return raw;
  const WINDOWS_1252 = new Map([
    [0x20ac, 0x80], [0x201a, 0x82], [0x0192, 0x83], [0x201e, 0x84], [0x2026, 0x85],
    [0x2020, 0x86], [0x2021, 0x87], [0x02c6, 0x88], [0x2030, 0x89], [0x0160, 0x8a],
    [0x2039, 0x8b], [0x0152, 0x8c], [0x017d, 0x8e], [0x2018, 0x91], [0x2019, 0x92],
    [0x201c, 0x93], [0x201d, 0x94], [0x2022, 0x95], [0x2013, 0x96], [0x2014, 0x97],
    [0x02dc, 0x98], [0x2122, 0x99], [0x0161, 0x9a], [0x203a, 0x9b], [0x0153, 0x9c],
    [0x017e, 0x9e], [0x0178, 0x9f],
  ]);

  const encodeWindows1252Bytes = (input) =>
    Uint8Array.from(Array.from(String(input ?? '')), (char) => {
      const code = char.codePointAt(0);
      if (WINDOWS_1252.has(code)) return WINDOWS_1252.get(code);
      if (code <= 0xff) return code;
      return code & 0xff;
    });

  const score = (text) => {
    let count = 0;
    for (const char of String(text ?? '')) {
      const code = char.charCodeAt(0);
      if (code === 0xfffd || code === 0x00c3 || code === 0x00c2 || code === 0x00c4 || code === 0x00e1 || code === 0x00ba) {
        count += 1;
      }
    }
    return count;
  };

  try {
    const bytes = encodeWindows1252Bytes(raw);
    const once = new TextDecoder('utf-8', { fatal: false }).decode(bytes);
    const twice = new TextDecoder('utf-8', { fatal: false }).decode(encodeWindows1252Bytes(once));
    const rawScore = score(raw);
    const onceScore = score(once);
    const twiceScore = score(twice);
    if (twiceScore < onceScore && twiceScore < rawScore) return twice;
    if (onceScore < rawScore) return once;
    return raw;
  } catch {
    return raw;
  }
}

function cleanText(value) {
  return normalizeWhitespace(
    repairLikelyMojibake(String(value ?? ''))
      .replace(/[\u0000-\u001F]/g, ' ')
      .replace(/\uFFFD/g, ' '),
  )
    .replace(/\s+([,.;:!?])/g, '$1')
    .trim();
}

function sanitizeFileName(value) {
  return cleanText(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '') || 'audio';
}

function hashText(text) {
  return crypto.createHash('sha1').update(String(text), 'utf8').digest('hex').slice(0, 10);
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

function extractArrayLiteral(sourceText, exportName) {
  const signature = `export const ${exportName}`;
  const signatureIndex = sourceText.indexOf(signature);
  if (signatureIndex < 0) throw new Error(`Missing export "${exportName}" in source file.`);

  const equalsIndex = sourceText.indexOf('=', signatureIndex);
  if (equalsIndex < 0) throw new Error(`Cannot find "=" for export "${exportName}".`);

  const openIndex = sourceText.indexOf('[', equalsIndex);
  if (openIndex < 0) throw new Error(`Cannot find array literal for export "${exportName}".`);

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
      if (char === stringQuote) stringQuote = null;
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
      if (depth === 0) return sourceText.slice(openIndex, i + 1);
    }
  }

  throw new Error(`Unclosed array literal for export "${exportName}".`);
}

async function loadTsArray(filePath, exportName) {
  const sourceText = await fs.readFile(filePath, 'utf8');
  const literal = extractArrayLiteral(sourceText, exportName);
  return Function(`"use strict"; return (${literal});`)();
}

async function resolveAuth() {
  const shellKey = String(process.env.GOOGLE_TTS_API_KEY || '').trim();
  if (shellKey) return { mode: 'api-key', token: shellKey, source: 'env:GOOGLE_TTS_API_KEY', quotaProject: '' };

  const envFile = String(process.env.GOOGLE_TTS_ENV_FILE || '').trim();
  if (envFile) {
    const parsed = parseDotEnv(await fs.readFile(envFile, 'utf8'));
    const fileKey = String(parsed.GOOGLE_TTS_API_KEY || parsed.GOOGLE_TTS_KEY || parsed.TTS_API_KEY || '').trim();
    if (fileKey) return { mode: 'api-key', token: fileKey, source: `file:${envFile}`, quotaProject: '' };
  }

  let quotaProject = String(process.env.GOOGLE_CLOUD_QUOTA_PROJECT || process.env.GOOGLE_TTS_QUOTA_PROJECT || '').trim();
  if (!quotaProject) {
    try {
      const out = execFileSync('gcloud', ['config', 'get-value', 'project'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], shell: true });
      const candidate = String(out || '').trim();
      if (candidate && candidate !== '(unset)' && candidate !== 'null') quotaProject = candidate;
    } catch {}
  }

  const candidates = [
    process.env.GCLOUD_CLI_PATH,
    'C:\\Program Files (x86)\\Google\\Cloud SDK\\google-cloud-sdk\\bin\\gcloud.cmd',
    'C:\\Program Files\\Google\\Cloud SDK\\google-cloud-sdk\\bin\\gcloud.cmd',
  ].filter(Boolean);

  let gcloudBinary = '';
  for (const candidate of candidates) {
    try {
      await fs.stat(candidate);
      gcloudBinary = candidate;
      break;
    } catch {}
  }

  if (!gcloudBinary) {
    try {
      const whereOut = execFileSync('where.exe', ['gcloud'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
      gcloudBinary = String(whereOut || '').split(/\r?\n/).map((line) => line.trim()).find(Boolean) || '';
    } catch {}
  }

  if (gcloudBinary) {
    try {
      const stdout = execFileSync(gcloudBinary, ['auth', 'application-default', 'print-access-token'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], shell: true });
      const token = String(stdout || '').trim();
      if (token) return { mode: 'adc', token, source: `adc:${gcloudBinary}`, quotaProject };
    } catch {}
  }

  try {
    const stdout = execFileSync('gcloud', ['auth', 'application-default', 'print-access-token'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], shell: true });
    const token = String(stdout || '').trim();
    if (token) return { mode: 'adc', token, source: 'adc:gcloud-application-default', quotaProject };
  } catch {}

  return null;
}

async function synthesizeSpeech({ auth, text }) {
  const url = auth.mode === 'api-key' ? `${GOOGLE_TTS_ENDPOINT}?key=${encodeURIComponent(auth.token)}` : GOOGLE_TTS_ENDPOINT;
  const headers = { 'Content-Type': 'application/json' };
  if (auth.mode === 'adc') {
    headers.Authorization = `Bearer ${auth.token}`;
    if (auth.quotaProject) headers['x-goog-user-project'] = auth.quotaProject;
  }

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      input: { text },
      voice: { languageCode: LANGUAGE_CODE, name: VOICE_NAME },
      audioConfig: { audioEncoding: 'MP3' },
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`google-tts-http-${response.status}: ${body.slice(0, 220)}`);
  }

  const json = await response.json();
  const audioContent = String(json.audioContent || '');
  if (!audioContent) throw new Error('google-tts-empty-audio');
  return Buffer.from(audioContent, 'base64');
}

function parseArgs(argv) {
  const result = { max: DEFAULT_ITEMS };
  for (const arg of argv.slice(2)) {
    if (arg.startsWith('--max=')) {
      const value = Number(arg.slice('--max='.length));
      if (Number.isFinite(value) && value > 0) {
        result.max = Math.min(MAX_ITEMS, Math.max(1, Math.floor(value)));
      }
    }
  }
  return result;
}

function chooseCardText(card) {
  return cleanText(card.audioText || card.content || '');
}

function buildPilotItems({ lesson, cards, max }) {
  const selectedCards = cards
    .filter((card) => Number(card.isActive) === 1)
    .filter((card) => Number(card.lessonId) === lesson.id)
    .sort((a, b) => Number(a.sortOrder) - Number(b.sortOrder) || Number(a.id) - Number(b.id))
    .slice(0, 8)
    .map((card) => ({
      sourceType: 'content-card',
      sourceId: String(card.sourceId || `lesson-${lesson.id}-card-${card.id}`),
      lessonId: Number(card.lessonId),
      lessonTitle: cleanText(lesson.title),
      title: cleanText(card.title || `Thẻ ${card.sortOrder}`),
      text: chooseCardText(card),
    }))
    .filter((item) => item.text && item.text.length >= 12);

  const seeded = [
    {
      sourceType: 'lesson-title',
      sourceId: `${lesson.sourceId}-title`,
      lessonId: Number(lesson.id),
      lessonTitle: cleanText(lesson.title),
      title: 'Tên bài',
      text: cleanText(lesson.title),
    },
    {
      sourceType: 'lesson-summary',
      sourceId: `${lesson.sourceId}-summary`,
      lessonId: Number(lesson.id),
      lessonTitle: cleanText(lesson.title),
      title: 'Tóm tắt ngắn',
      text: cleanText(lesson.summarySimple || lesson.focus || lesson.objectives?.[0] || ''),
    },
    ...selectedCards,
  ].slice(0, max);

  const unique = [];
  const seen = new Set();
  for (const item of seeded) {
    const key = `${item.sourceType}:${item.sourceId}`;
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(item);
  }

  return unique.map((item, index) => {
    const safeBase = sanitizeFileName(`${item.sourceType}-${item.sourceId}`);
    const localFileName = `${safeBase}.mp3`;
    const plannedPath = path.join(OUTPUT_DIR, localFileName);
    const id = `nv6-pilot-${String(index + 1).padStart(3, '0')}`;
    return {
      id,
      subject: SUBJECT,
      grade: GRADE,
      sourceType: item.sourceType,
      sourceId: item.sourceId,
      lessonId: item.lessonId,
      lessonTitle: item.lessonTitle,
      title: item.title,
      text: item.text,
      voiceProfile: PROFILE_ID,
      voice: VOICE_NAME,
      plannedPath,
      localOutputPath: plannedPath,
      localFileName,
      status: 'planned',
      fileSize: 0,
      error: '',
    };
  });
}

function buildCatalogCsv(rows) {
  const header = [
    'id', 'subject', 'grade', 'sourceType', 'sourceId', 'lessonId', 'title', 'text', 'voiceProfile', 'voice', 'plannedPath', 'localOutputPath', 'status', 'fileSize', 'error',
  ];
  const toCsvCell = (value) => {
    const text = String(value ?? '');
    if (!/[",\n\r]/.test(text)) return text;
    return `"${text.replace(/"/g, '""')}"`;
  };
  return `${[header.join(',')]
    .concat(rows.map((row) => [
      row.id, row.subject, row.grade, row.sourceType, row.sourceId, row.lessonId, row.title, row.text, row.voiceProfile, row.voice, row.plannedPath, row.localOutputPath, row.status, row.fileSize, row.error || '',
    ].map(toCsvCell).join(',')))
    .join('\n')}\n`;
}

function buildAuditMarkdown(report) {
  const lines = [];
  lines.push('# Ngữ văn Lớp 6 Audio Phase 1 Audit');
  lines.push('');
  lines.push(`- generatedAt: ${report.generatedAt}`);
  lines.push(`- subject: ${report.subject}`);
  lines.push(`- grade: ${report.grade}`);
  lines.push(`- pilotLessonId: ${report.pilotLessonId}`);
  lines.push(`- pilotLessonTitle: ${report.pilotLessonTitle}`);
  lines.push(`- voiceProfile: ${report.voiceProfile}`);
  lines.push(`- voice: ${report.voice}`);
  lines.push('');
  lines.push('## Audit counts');
  lines.push('');
  lines.push(`- lessons: ${report.lessonsCount}`);
  lines.push(`- cards: ${report.cardsCount}`);
  lines.push(`- questions: ${report.questionsCount}`);
  lines.push(`- firstLessonCards: ${report.firstLessonCards}`);
  lines.push(`- firstLessonQuestions: ${report.firstLessonQuestions}`);
  lines.push('');
  lines.push('## Pilot scope');
  lines.push('');
  lines.push(`- pilotItems: ${report.pilotItems}`);
  lines.push(`- sourceTypeCounts: ${JSON.stringify(report.sourceTypeCounts)}`);
  lines.push('');
  lines.push('## Notes');
  lines.push('');
  lines.push('- Pilot chỉ lấy bài đầu tiên để nghe thử giọng, không mở rộng toàn bộ 24 bài.');
  lines.push('- No UI change was made in this phase.');
  lines.push('- No R2 upload was performed.');
  lines.push('- No mp3 was committed.');
  return `${lines.join('\n')}\n`;
}

function buildReportMarkdown(report) {
  const lines = [];
  lines.push('# Ngữ văn Lớp 6 Audio Phase 1 Pilot Report');
  lines.push('');
  lines.push(`- generatedAt: ${report.generatedAt}`);
  lines.push(`- profileId: ${report.profileId}`);
  lines.push(`- voice: ${report.voice}`);
  lines.push(`- catalogPath: ${report.catalogPath}`);
  lines.push(`- outputDir: ${report.outputDir}`);
  lines.push(`- authSource: ${report.authSource || 'missing'}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- catalogItems: ${report.catalogItems}`);
  lines.push(`- generated: ${report.generated}`);
  lines.push(`- skippedExisting: ${report.skippedExisting}`);
  lines.push(`- failed: ${report.failed}`);
  lines.push(`- zeroSize: ${report.zeroSize}`);
  lines.push('');
  lines.push('## Sample texts');
  lines.push('');
  lines.push('| # | sourceType | sourceId | text | status |');
  lines.push('|---:|---|---|---|---|');
  for (const item of report.sampleTexts) {
    lines.push(`| ${item.index} | ${item.sourceType} | ${item.sourceId} | ${item.text.replace(/\|/g, '\\|')} | ${item.status} |`);
  }
  lines.push('');
  lines.push('## Notes');
  lines.push('');
  lines.push('- No mp3 was committed.');
  lines.push('- No checkpoint was created.');
  lines.push('- No R2 upload was performed in this pilot.');
  lines.push('- Vietnamese voice profile used: vi-v1 / vi-VN-Chirp3-HD-Despina.');
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

async function main() {
  const args = parseArgs(process.argv);
  await fs.mkdir(DOCS_DIR, { recursive: true });
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const [lessons, cards, questions] = await Promise.all([
    loadTsArray(LESSONS_PATH, 'nguVanLessons'),
    loadTsArray(CARDS_PATH, 'nguVanLessonCards'),
    loadTsArray(QUESTIONS_PATH, 'nguVanQuestions'),
  ]);

  const lesson = lessons.find((item) => Number(item.id) === PILOT_LESSON_ID);
  if (!lesson) throw new Error(`Missing pilot lesson id ${PILOT_LESSON_ID}`);

  const firstLessonCards = cards.filter((card) => Number(card.lessonId) === PILOT_LESSON_ID && Number(card.isActive) === 1);
  const firstLessonQuestions = questions.filter((question) => Number(question.lessonId) === PILOT_LESSON_ID && Number(question.isActive) === 1);
  const pilotItems = buildPilotItems({ lesson, cards: firstLessonCards, max: args.max });

  const catalog = {
    generatedAt: nowIso(),
    subject: SUBJECT,
    grade: GRADE,
    profileId: PROFILE_ID,
    voice: VOICE_NAME,
    voiceProfile: PROFILE_ID,
    pilotLessonId: Number(lesson.id),
    pilotLessonTitle: cleanText(lesson.title),
    lessonsCount: lessons.length,
    cardsCount: cards.length,
    questionsCount: questions.length,
    firstLessonCards: firstLessonCards.length,
    firstLessonQuestions: firstLessonQuestions.length,
    pilotItems: pilotItems.length,
    outputDir: OUTPUT_DIR,
    items: pilotItems,
  };

  await fs.writeFile(CATALOG_JSON, `${JSON.stringify(catalog, null, 2)}\n`, 'utf8');
  await fs.writeFile(CATALOG_CSV, buildCatalogCsv(pilotItems), 'utf8');
  await fs.writeFile(AUDIT_MD, buildAuditMarkdown({
    generatedAt: catalog.generatedAt,
    subject: catalog.subject,
    grade: catalog.grade,
    pilotLessonId: catalog.pilotLessonId,
    pilotLessonTitle: catalog.pilotLessonTitle,
    voiceProfile: catalog.voiceProfile,
    voice: catalog.voice,
    lessonsCount: catalog.lessonsCount,
    cardsCount: catalog.cardsCount,
    questionsCount: catalog.questionsCount,
    firstLessonCards: catalog.firstLessonCards,
    firstLessonQuestions: catalog.firstLessonQuestions,
    pilotItems: catalog.pilotItems,
    sourceTypeCounts: pilotItems.reduce((acc, item) => {
      acc[item.sourceType] = (acc[item.sourceType] || 0) + 1;
      return acc;
    }, {}),
  }), 'utf8');

  const auth = await resolveAuth();
  if (!auth) throw new Error('Missing Google TTS auth for Ngữ văn pilot.');

  const report = {
    generatedAt: nowIso(),
    profileId: PROFILE_ID,
    voice: VOICE_NAME,
    subject: SUBJECT,
    grade: GRADE,
    pilotLessonId: Number(lesson.id),
    pilotLessonTitle: cleanText(lesson.title),
    catalogPath: CATALOG_JSON,
    outputDir: OUTPUT_DIR,
    authSource: auth.source,
    catalogItems: pilotItems.length,
    generated: 0,
    skippedExisting: 0,
    failed: 0,
    zeroSize: 0,
    sourceTypeCounts: pilotItems.reduce((acc, item) => {
      acc[item.sourceType] = (acc[item.sourceType] || 0) + 1;
      return acc;
    }, {}),
    sampleTexts: [],
    items: [],
  };

  for (const item of pilotItems) {
    const existingSize = await probeFileSize(item.localOutputPath);
    if (existingSize > 0) {
      report.skippedExisting += 1;
      report.items.push({ ...item, status: 'skipped-existing', fileSize: existingSize, error: '' });
      if (report.sampleTexts.length < 10) {
        report.sampleTexts.push({ index: report.sampleTexts.length + 1, sourceType: item.sourceType, sourceId: item.sourceId, text: item.text, status: 'skipped-existing' });
      }
      continue;
    }

    try {
      const audio = await synthesizeSpeech({ auth, text: item.text });
      await fs.writeFile(item.localOutputPath, audio);
      const fileSize = await probeFileSize(item.localOutputPath);
      if (fileSize <= 0) throw new Error('generated-file-empty');
      report.generated += 1;
      report.items.push({ ...item, status: 'generated', fileSize, error: '' });
      if (report.sampleTexts.length < 10) {
        report.sampleTexts.push({ index: report.sampleTexts.length + 1, sourceType: item.sourceType, sourceId: item.sourceId, text: item.text, status: 'generated' });
      }
    } catch (error) {
      report.failed += 1;
      report.items.push({ ...item, status: 'failed', fileSize: 0, error: String(error?.message || error) });
      if (report.sampleTexts.length < 10) {
        report.sampleTexts.push({ index: report.sampleTexts.length + 1, sourceType: item.sourceType, sourceId: item.sourceId, text: item.text, status: 'failed' });
      }
    }
  }

  report.zeroSize = report.items.filter((item) => Number(item.fileSize) === 0).length;

  await fs.writeFile(REPORT_JSON, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  await fs.writeFile(REPORT_MD, buildReportMarkdown(report), 'utf8');

  console.log(JSON.stringify({
    auditMd: AUDIT_MD,
    catalogJson: CATALOG_JSON,
    catalogCsv: CATALOG_CSV,
    reportJson: REPORT_JSON,
    reportMd: REPORT_MD,
    catalogItems: catalog.pilotItems,
    generated: report.generated,
    skippedExisting: report.skippedExisting,
    failed: report.failed,
    zeroSize: report.zeroSize,
    outputDir: OUTPUT_DIR,
    voice: VOICE_NAME,
  }, null, 2));
}

main().catch((error) => {
  console.error(String(error?.message || error));
  process.exitCode = 1;
});
