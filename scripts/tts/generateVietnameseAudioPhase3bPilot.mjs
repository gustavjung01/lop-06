import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const REPO_ROOT = process.cwd();
const CATALOG_PATH = path.join(REPO_ROOT, 'docs/audio/english-audio-vi-phase3a-catalog.json');
const REPORT_MD = path.join(REPO_ROOT, 'docs/audio/english-audio-vi-phase3b-pilot-report.md');
const REPORT_JSON = path.join(REPO_ROOT, 'docs/audio/english-audio-vi-phase3b-pilot-report.json');

const PROFILE_ID = 'vi-v1-phase3b-pilot';
const VOICE_NAME = 'vi-VN-Chirp3-HD-Despina';
const LANGUAGE_CODE = 'vi-VN';
const OUTPUT_DIR = path.join('F:\\1_A_Disk_D\\khuong-binh\\lop6-tts-audio', PROFILE_ID);
const GOOGLE_TTS_ENDPOINT = 'https://texttospeech.googleapis.com/v1/text:synthesize';

function parseArgs(argv) {
  const result = { limit: 50, offset: 0, voice: VOICE_NAME };
  for (const arg of argv.slice(2)) {
    if (arg.startsWith('--limit=')) {
      const value = Number(arg.slice('--limit='.length));
      if (Number.isFinite(value) && value > 0) result.limit = Math.floor(value);
    } else if (arg.startsWith('--offset=')) {
      const value = Number(arg.slice('--offset='.length));
      if (Number.isFinite(value) && value >= 0) result.offset = Math.floor(value);
    } else if (arg.startsWith('--voice=')) {
      const value = String(arg.slice('--voice='.length)).trim();
      if (value) result.voice = value;
    }
  }
  return result;
}

function normalizeWhitespace(value) {
  return String(value ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\s+/g, ' ')
    .trim();
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

function repairLikelyMojibake(value) {
  const raw = String(value ?? '');
  if (!raw) return raw;
  const WINDOWS_1252 = new Map([
    [0x20ac, 0x80],
    [0x201a, 0x82],
    [0x0192, 0x83],
    [0x201e, 0x84],
    [0x2026, 0x85],
    [0x2020, 0x86],
    [0x2021, 0x87],
    [0x02c6, 0x88],
    [0x2030, 0x89],
    [0x0160, 0x8a],
    [0x2039, 0x8b],
    [0x0152, 0x8c],
    [0x017d, 0x8e],
    [0x2018, 0x91],
    [0x2019, 0x92],
    [0x201c, 0x93],
    [0x201d, 0x94],
    [0x2022, 0x95],
    [0x2013, 0x96],
    [0x2014, 0x97],
    [0x02dc, 0x98],
    [0x2122, 0x99],
    [0x0161, 0x9a],
    [0x203a, 0x9b],
    [0x0153, 0x9c],
    [0x017e, 0x9e],
    [0x0178, 0x9f],
  ]);
  const hasMojibakeHints = (value) => {
    let count = 0;
    for (const char of String(value ?? '')) {
      const code = char.charCodeAt(0);
      if (code === 0xfffd || code === 0x00c3 || code === 0x00c2 || code === 0x00c4 || code === 0x00e1 || code === 0x00ba) {
        count += 1;
      }
    }
    return count;
  };
  const encodeWindows1252Bytes = (input) =>
    Uint8Array.from(Array.from(String(input ?? '')), (char) => {
      const code = char.codePointAt(0);
      if (WINDOWS_1252.has(code)) return WINDOWS_1252.get(code);
      if (code <= 0xff) return code;
      return code & 0xff;
    });
  try {
    const bytes = encodeWindows1252Bytes(raw);
    const decodedOnce = new TextDecoder('utf-8', { fatal: false }).decode(bytes);
    const decodedTwice = new TextDecoder('utf-8', { fatal: false }).decode(
      encodeWindows1252Bytes(decodedOnce),
    );

    const rawScore = hasMojibakeHints(raw);
    const onceScore = hasMojibakeHints(decodedOnce);
    const twiceScore = hasMojibakeHints(decodedTwice);

    if (twiceScore < onceScore && twiceScore < rawScore) return decodedTwice;
    if (onceScore < rawScore) return decodedOnce;
    return raw;
  } catch {
    return raw;
  }
}

function slugify(value) {
  return cleanText(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'text';
}

function hashText(text) {
  return crypto.createHash('sha1').update(String(text), 'utf8').digest('hex').slice(0, 10);
}

function looksVietnamese(text) {
  const t = cleanText(text);
  return /[ăâđêôơưÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬĐÊẾỀỂỄỆÔỐỒỔỖỘƠỚỜỞỠỢƯỨỪỬỮỰáàảãạăắằẳẵặâấầẩẫậđêếềểễệôốồổỗộơớờởỡợưứừửữự]/.test(t)
    || /(Chủ đề|Bài này|Hãy|Em hãy|Nhớ|Đừng|Nghĩa Việt|tiếng Việt|bạn cùng lớp|đồng phục|thư viện|bài tập về nhà|bài học)/i.test(t);
}

function classifySourceType(text, kind) {
  const len = cleanText(text).length;
  if (kind === 'gloss') return 'vietnamese-gloss';
  if (kind === 'objective') return 'vietnamese-instruction';
  if (kind === 'summary') return len >= 90 ? 'vietnamese-lesson-note' : 'vietnamese-instruction';
  if (len <= 80) return 'vietnamese-instruction';
  return 'vietnamese-lesson-note';
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

async function resolveAuth() {
  const envKey = String(process.env.GOOGLE_TTS_API_KEY || '').trim();
  if (envKey) return { mode: 'api-key', token: envKey, source: 'env:GOOGLE_TTS_API_KEY', quotaProject: '' };

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

async function readCatalog() {
  const rawText = (await fs.readFile(CATALOG_PATH, 'utf8')).replace(/^\uFEFF/, '');
  const raw = JSON.parse(rawText);
  const items = Array.isArray(raw) ? raw : Array.isArray(raw.catalogItems) ? raw.catalogItems : [];
  if (!items.length) throw new Error('Phase 3A catalog is empty.');
  return items;
}

function selectPilotItems(items, limit, offset) {
  const glosses = items
    .filter((item) => String(item.sourceType || '') === 'vietnamese-gloss')
    .sort((a, b) => Number(a.lessonId) - Number(b.lessonId) || String(a.text).localeCompare(String(b.text), 'vi'));
  return glosses.slice(offset, offset + limit).map((item) => ({
    sourceType: item.sourceType,
    lessonId: Number(item.lessonId),
    lessonTitle: cleanText(item.lessonTitle || ''),
    sourceId: String(item.sourceId || '').trim(),
    text: cleanText(item.text),
  })).filter((item) => item.text);
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
      voice: { languageCode: LANGUAGE_CODE, name: voiceName },
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

function buildMarkdown(report) {
  const lines = [];
  lines.push('# English Audio Phase 3B Vietnamese Pilot Report');
  lines.push('');
  lines.push(`- Generated at: ${report.generatedAt}`);
  lines.push(`- profileId: ${report.profileId}`);
  lines.push(`- voice: ${report.voice}`);
  lines.push(`- source catalog: ${report.sourceCatalog}`);
  lines.push(`- outputDir: ${report.outputDir}`);
  lines.push(`- authSource: ${report.authSource || 'missing'}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- selectedItems: ${report.selectedItems}`);
  lines.push(`- generated: ${report.generated}`);
  lines.push(`- skippedExisting: ${report.skippedExisting}`);
  lines.push(`- failed: ${report.failed}`);
  lines.push(`- zeroSize: ${report.zeroSize}`);
  lines.push('');
  lines.push('## Sample texts');
  lines.push('');
  lines.push('| # | sourceType | sourceId | text |');
  lines.push('|---:|---|---|---|');
  for (const item of report.sampleTexts) {
    lines.push(`| ${item.index} | ${item.sourceType} | ${item.sourceId} | ${item.text.replace(/\\|/g, '\\\\|')} |`);
  }
  lines.push('');
  lines.push('## Notes');
  lines.push('');
  lines.push('- No mp3 was committed.');
  lines.push('- No checkpoint was created.');
  lines.push('- No R2 upload was performed in this pilot.');
  return `${lines.join('\n')}\n`;
}

async function main() {
  const args = parseArgs(process.argv);
  await fs.mkdir(path.dirname(REPORT_MD), { recursive: true });
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const catalogItems = await readCatalog();
  const selectedItems = selectPilotItems(catalogItems, args.limit, args.offset);
  const auth = await resolveAuth();
  if (!auth) throw new Error('Missing Google TTS auth for Vietnamese pilot.');

  const report = {
    generatedAt: new Date().toISOString(),
    profileId: PROFILE_ID,
    voice: args.voice,
    sourceCatalog: CATALOG_PATH,
    outputDir: OUTPUT_DIR,
    authSource: auth.source,
    selectedItems: selectedItems.length,
    generated: 0,
    skippedExisting: 0,
    failed: 0,
    zeroSize: 0,
    sampleTexts: [],
    items: [],
  };

  for (const item of selectedItems) {
    const hash = hashText(`${item.sourceType}|${item.sourceId}|${item.text}`);
    const fileName = `${item.sourceType}-${hash}.mp3`;
    const localOutputPath = path.join(OUTPUT_DIR, fileName);
    const r2ObjectKey = `audio/tts/assets/${PROFILE_ID}/${fileName}`;
    const existingSize = await probeFileSize(localOutputPath);

    if (existingSize > 0) {
      report.skippedExisting += 1;
      report.items.push({ id: `${PROFILE_ID}-${hash}`, profileId: PROFILE_ID, voice: args.voice, sourceType: item.sourceType, lessonId: item.lessonId, lessonTitle: item.lessonTitle, sourceId: item.sourceId, text: item.text, localOutputPath, r2ObjectKey, status: 'skipped-existing', fileSize: existingSize, error: '' });
      continue;
    }

    try {
      const audio = await synthesizeSpeech({ auth, text: item.text, voiceName: args.voice });
      await fs.writeFile(localOutputPath, audio);
      const fileSize = await probeFileSize(localOutputPath);
      if (fileSize <= 0) throw new Error('generated-file-empty');
      report.generated += 1;
      report.items.push({ id: `${PROFILE_ID}-${hash}`, profileId: PROFILE_ID, voice: args.voice, sourceType: item.sourceType, lessonId: item.lessonId, lessonTitle: item.lessonTitle, sourceId: item.sourceId, text: item.text, localOutputPath, r2ObjectKey, status: 'generated', fileSize, error: '' });
      if (report.sampleTexts.length < 10) {
        report.sampleTexts.push({ index: report.sampleTexts.length + 1, sourceType: item.sourceType, sourceId: item.sourceId, text: item.text });
      }
    } catch (error) {
      report.failed += 1;
      report.items.push({ id: `${PROFILE_ID}-${hash}`, profileId: PROFILE_ID, voice: args.voice, sourceType: item.sourceType, lessonId: item.lessonId, lessonTitle: item.lessonTitle, sourceId: item.sourceId, text: item.text, localOutputPath, r2ObjectKey, status: 'failed', fileSize: 0, error: String(error?.message || error) });
    }
  }

  report.zeroSize = report.items.filter((item) => Number(item.fileSize) === 0).length;
  await fs.writeFile(REPORT_MD, buildMarkdown(report), 'utf8');
  await fs.writeFile(REPORT_JSON, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

  console.log(JSON.stringify({
    reportMd: REPORT_MD,
    reportJson: REPORT_JSON,
    generated: report.generated,
    skippedExisting: report.skippedExisting,
    failed: report.failed,
    zeroSize: report.zeroSize,
    selectedItems: report.selectedItems,
    outputDir: OUTPUT_DIR,
    voice: args.voice,
  }, null, 2));
}

main().catch((error) => {
  console.error(String(error?.message || error));
  process.exitCode = 1;
});
