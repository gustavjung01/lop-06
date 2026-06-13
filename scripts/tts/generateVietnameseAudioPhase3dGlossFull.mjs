import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '../..');

const CATALOG_PATH = path.join(REPO_ROOT, 'docs/audio/english-audio-vi-phase3a-catalog.json');
const PILOT_MANIFEST_PATH = path.join(REPO_ROOT, 'docs/audio/english-audio-vi-phase3c-pilot-manifest.json');
const FULL_MANIFEST_PATH = path.join(REPO_ROOT, 'docs/audio/english-audio-vi-phase3d-gloss-full-manifest.json');
const FINAL_REPORT_JSON = path.join(REPO_ROOT, 'docs/audio/english-audio-vi-phase3d-gloss-full-report.json');
const FINAL_REPORT_MD = path.join(REPO_ROOT, 'docs/audio/english-audio-vi-phase3d-gloss-full-report.md');

const PROFILE_ID = 'vi-v1';
const VOICE_NAME = 'vi-VN-Chirp3-HD-Despina';
const LANGUAGE_CODE = 'vi-VN';
const BASE_URL = 'https://audio.hochungkhoi.site';
const BASE_R2_PATH = 'audio/tts/assets/vi-v1/vietnamese-gloss';
const PILOT_OUTPUT_DIR = 'F:\\1_A_Disk_D\\khuong-binh\\lop6-tts-audio\\vi-v1-phase3b-pilot';
const FULL_OUTPUT_DIR = 'F:\\1_A_Disk_D\\khuong-binh\\lop6-tts-audio\\vi-v1\\vietnamese-gloss';
const GOOGLE_TTS_ENDPOINT = 'https://texttospeech.googleapis.com/v1/text:synthesize';

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

  const encodeWindows1252Bytes = (input) =>
    Uint8Array.from(Array.from(String(input ?? '')), (char) => {
      const code = char.codePointAt(0);
      if (WINDOWS_1252.has(code)) return WINDOWS_1252.get(code);
      if (code <= 0xff) return code;
      return code & 0xff;
    });

  const scoreMojibake = (input) => {
    let count = 0;
    for (const char of String(input ?? '')) {
      const code = char.charCodeAt(0);
      if (code === 0xfffd || code === 0x00c3 || code === 0x00c2 || code === 0x00c4 || code === 0x00e1 || code === 0x00ba) {
        count += 1;
      }
    }
    return count;
  };

  try {
    const bytes = encodeWindows1252Bytes(raw);
    const decodedOnce = new TextDecoder('utf-8', { fatal: false }).decode(bytes);
    const decodedTwice = new TextDecoder('utf-8', { fatal: false }).decode(encodeWindows1252Bytes(decodedOnce));
    const rawScore = scoreMojibake(raw);
    const onceScore = scoreMojibake(decodedOnce);
    const twiceScore = scoreMojibake(decodedTwice);
    if (twiceScore < onceScore && twiceScore < rawScore) return decodedTwice;
    if (onceScore < rawScore) return decodedOnce;
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

function previewText(value, maxLength = 72) {
  const text = cleanText(value);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, Math.max(0, maxLength - 1)).trimEnd()}...`;
}

function hashText(text) {
  return crypto.createHash('sha1').update(String(text), 'utf8').digest('hex').slice(0, 10);
}

function parseDotEnv(content) {
  const result = {};
  for (const line of String(content || '').split(/\r?\n/)) {
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
      const out = execFileSync('gcloud', ['config', 'get-value', 'project'], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
        shell: true,
      });
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
      const stdout = execFileSync(gcloudBinary, ['auth', 'application-default', 'print-access-token'], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
        shell: true,
      });
      const token = String(stdout || '').trim();
      if (token) return { mode: 'adc', token, source: `adc:${gcloudBinary}`, quotaProject };
    } catch {}
  }

  try {
    const stdout = execFileSync('gcloud', ['auth', 'application-default', 'print-access-token'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: true,
    });
    const token = String(stdout || '').trim();
    if (token) return { mode: 'adc', token, source: 'adc:gcloud-application-default', quotaProject };
  } catch {}

  return null;
}

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

async function writeJson(filePath, data) {
  await fs.writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

async function fileSize(filePath) {
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

function buildSourceKey(item) {
  return `${String(item.sourceType || '').trim()}:${String(item.sourceId || '').trim()}`;
}

function buildHashFileName(item) {
  const hash = hashText(`${item.sourceType}|${item.sourceId}|${item.text}`);
  return `${item.sourceType}-${hash}.mp3`;
}

function buildR2ObjectKey(fileName) {
  return `${BASE_R2_PATH}/${fileName}`;
}

function buildUrl(r2ObjectKey) {
  return `${BASE_URL}/${r2ObjectKey}`;
}

function buildManifestItem(item, {
  id,
  voice,
  localOutputPath,
  localFileName,
  fileSizeBytes,
  status,
  lessonTitle,
  text,
}) {
  const r2ObjectKey = buildR2ObjectKey(localFileName);
  return {
    id,
    profileId: PROFILE_ID,
    voice,
    sourceType: 'vietnamese-gloss',
    sourceId: item.sourceId,
    lessonId: Number(item.lessonId),
    lessonTitle: cleanText(lessonTitle || item.lessonTitle || ''),
    text: cleanText(text || item.text || ''),
    textPreview: previewText(text || item.text || ''),
    localOutputPath,
    localFileName,
    fileSizeBytes,
    r2ObjectKey,
    url: buildUrl(r2ObjectKey),
    status,
  };
}

async function readCatalogGlossItems() {
  const rawText = (await fs.readFile(CATALOG_PATH, 'utf8')).replace(/^\uFEFF/, '');
  const raw = JSON.parse(rawText);
  const items = Array.isArray(raw) ? raw : Array.isArray(raw.catalogItems) ? raw.catalogItems : [];
  const glosses = [];
  const seen = new Set();

  for (const item of items) {
    if (String(item.sourceType || '') !== 'vietnamese-gloss') continue;
    const sourceId = String(item.sourceId || '').trim();
    const text = cleanText(item.text);
    if (!sourceId || !text) continue;
    if (seen.has(sourceId)) continue;
    seen.add(sourceId);
    glosses.push({
      sourceType: 'vietnamese-gloss',
      sourceId,
      lessonId: Number(item.lessonId),
      lessonTitle: cleanText(item.lessonTitle || ''),
      text,
    });
  }

  glosses.sort((a, b) => Number(a.lessonId) - Number(b.lessonId) || a.sourceId.localeCompare(b.sourceId));
  return glosses;
}

async function readPilotManifest() {
  const raw = await readJson(PILOT_MANIFEST_PATH);
  const items = raw?.items && typeof raw.items === 'object' ? raw.items : {};
  const bySourceId = new Map();
  for (const [key, item] of Object.entries(items)) {
    if (String(item.sourceType || '') !== 'vietnamese-gloss') continue;
    bySourceId.set(String(item.sourceId || '').trim(), { key, ...item });
  }
  return { ...raw, items, bySourceId };
}

function buildCsvCell(value) {
  const text = String(value ?? '');
  if (!/[",\n\r]/.test(text)) return text;
  return `"${text.replace(/"/g, '""')}"`;
}

function buildReportMarkdown(report) {
  const lines = [];
  lines.push('# English Audio Phase 3D Vietnamese Gloss Full Report');
  lines.push('');
  lines.push(`- generatedAt: ${report.generatedAt}`);
  lines.push(`- profileId: ${report.profileId}`);
  lines.push(`- voice: ${report.voice}`);
  lines.push(`- catalogPath: ${report.catalogPath}`);
  lines.push(`- pilotManifestPath: ${report.pilotManifestPath}`);
  lines.push(`- manifestPath: ${report.manifestPath}`);
  lines.push(`- uploadReportPath: ${report.uploadReportPath}`);
  lines.push(`- localNewOutputDir: ${report.localNewOutputDir}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- rawGloss: ${report.rawGloss}`);
  lines.push(`- uniqueGloss: ${report.uniqueGloss}`);
  lines.push(`- alreadyExisted: ${report.alreadyExisted}`);
  lines.push(`- generatedNew: ${report.generatedNew}`);
  lines.push(`- uploadedNew: ${report.uploadedNew}`);
  lines.push(`- skippedExisting: ${report.skippedExisting}`);
  lines.push(`- failed: ${report.failed}`);
  lines.push(`- zeroSize: ${report.zeroSize}`);
  lines.push(`- manifestTotalItems: ${report.manifestTotalItems}`);
  lines.push('');
  lines.push('## Manifest counts');
  lines.push('');
  lines.push(`- lesson-card: ${report.manifestCounts['lesson-card'] || 0}`);
  lines.push(`- question: ${report.manifestCounts.question || 0}`);
  lines.push(`- vocabulary-word: ${report.manifestCounts['vocabulary-word'] || 0}`);
  lines.push(`- question-option: ${report.manifestCounts['question-option'] || 0}`);
  lines.push(`- vietnamese-gloss: ${report.manifestCounts['vietnamese-gloss'] || 0}`);
  lines.push(`- total: ${report.manifestTotalItems}`);
  lines.push('');
  lines.push('## Sample URLs');
  lines.push('');
  for (const sample of report.sampleUrls) {
    lines.push(`- ${sample.sourceId}: ${sample.url}`);
  }
  lines.push('');
  lines.push('## Sample text');
  lines.push('');
  lines.push('| # | sourceId | text | status |');
  lines.push('|---:|---|---|---|');
  for (const sample of report.sampleTexts) {
    lines.push(`| ${sample.index} | ${sample.sourceId} | ${sample.text.replace(/\|/g, '\\|')} | ${sample.status} |`);
  }
  lines.push('');
  return `${lines.join('\n')}\n`;
}

async function generateFullGlossManifest({ voice }) {
  const catalogItems = await readCatalogGlossItems();
  const pilotManifest = await readPilotManifest();
  const pilotBySourceId = pilotManifest.bySourceId;

  if (catalogItems.length !== 142) {
    throw new Error(`unexpected-gloss-count:${catalogItems.length}`);
  }

  const auth = await resolveAuth();
  if (!auth) throw new Error('Missing Google TTS auth for Vietnamese phase 3D.');

  await fs.mkdir(path.dirname(FULL_MANIFEST_PATH), { recursive: true });
  await fs.mkdir(FULL_OUTPUT_DIR, { recursive: true });

  const items = {};
  const reportItems = [];
  const sampleTexts = [];
  let generatedNew = 0;
  let alreadyExisted = 0;
  let zeroSize = 0;

  for (let index = 0; index < catalogItems.length; index += 1) {
    const item = catalogItems[index];
    const key = buildSourceKey(item);
    const pilotItem = pilotBySourceId.get(item.sourceId);

    let localOutputPath = '';
    let localFileName = '';
    let fileSizeBytes = 0;
    let status = '';

    if (pilotItem) {
      localOutputPath = cleanText(pilotItem.localOutputPath);
      localFileName = path.basename(localOutputPath || String(pilotItem.localFileName || ''));
      fileSizeBytes = await fileSize(localOutputPath);
      if (fileSizeBytes <= 0) {
        throw new Error(`pilot-local-missing:${item.sourceId}`);
      }
      alreadyExisted += 1;
      status = 'pilot-existing';
    } else {
      localFileName = buildHashFileName(item);
      localOutputPath = path.join(FULL_OUTPUT_DIR, localFileName);
      fileSizeBytes = await fileSize(localOutputPath);
      if (fileSizeBytes > 0) {
        status = 'existing-local';
      } else {
        const audio = await synthesizeSpeech({ auth, text: item.text, voiceName: voice });
        await fs.writeFile(localOutputPath, audio);
        fileSizeBytes = await fileSize(localOutputPath);
        if (fileSizeBytes <= 0) throw new Error(`generated-file-empty:${item.sourceId}`);
        generatedNew += 1;
        status = 'generated-new';
      }
    }

    if (fileSizeBytes <= 0) {
      zeroSize += 1;
    }

    const manifestItem = buildManifestItem(item, {
      id: `vi3d-${String(index + 1).padStart(4, '0')}`,
      voice,
      localOutputPath,
      localFileName,
      fileSizeBytes,
      status,
      lessonTitle: item.lessonTitle,
      text: item.text,
    });
    items[key] = manifestItem;
    reportItems.push(manifestItem);

    if (sampleTexts.length < 10) {
      sampleTexts.push({
        index: sampleTexts.length + 1,
        sourceId: item.sourceId,
        text: item.text,
        status,
      });
    }
  }

  const manifest = {
    version: '1.0.0',
    generatedAt: nowIso(),
    profileId: PROFILE_ID,
    language: 'vi',
    subject: 'english',
    voice,
    baseUrl: BASE_URL,
    baseR2Path: BASE_R2_PATH,
    totalItems: Object.keys(items).length,
    sourceCatalog: CATALOG_PATH,
    sourcePilotManifest: PILOT_MANIFEST_PATH,
    summary: {
      rawGloss: catalogItems.length,
      uniqueGloss: reportItems.length,
      alreadyExisted,
      generatedNew,
      zeroSize,
    },
    items,
  };

  await writeJson(FULL_MANIFEST_PATH, manifest);

  return {
    catalogPath: CATALOG_PATH,
    pilotManifestPath: PILOT_MANIFEST_PATH,
    manifestPath: FULL_MANIFEST_PATH,
    localNewOutputDir: FULL_OUTPUT_DIR,
    authSource: auth.source,
    rawGloss: catalogItems.length,
    uniqueGloss: reportItems.length,
    alreadyExisted,
    generatedNew,
    zeroSize,
    voice,
    manifest,
    sampleTexts,
  };
}

async function finalizeReport({ uploadReportPath }) {
  const manifest = await readJson(FULL_MANIFEST_PATH);
  const uploadReport = await readJson(uploadReportPath);
  const items = Object.entries(manifest.items || {})
    .map(([key, item]) => ({ key, ...item }))
    .sort((a, b) => a.key.localeCompare(b.key));

  const manifestCounts = items.reduce((acc, item) => {
    acc[item.sourceType] = (acc[item.sourceType] || 0) + 1;
    return acc;
  }, {});

  const sampleUrls = items.slice(0, 5).map((item) => ({
    sourceId: item.sourceId,
    url: item.url,
    sourceType: item.sourceType,
  }));

  const sampleTexts = items.slice(0, 10).map((item, index) => ({
    index: index + 1,
    sourceId: item.sourceId,
    text: item.text,
    status: item.status || '',
  }));

  const generatedNew = items.filter((item) => item.status === 'generated-new').length;
  const alreadyExisted = items.filter((item) => item.status === 'pilot-existing').length;
  const zeroSize = items.filter((item) => Number(item.fileSizeBytes) <= 0).length;
  const uploadedNew = Number(uploadReport.uploaded || 0);
  const skippedExisting = Number(uploadReport.skippedExisting || 0);
  const failed = Number(uploadReport.failed || 0);

  const report = {
    generatedAt: nowIso(),
    profileId: manifest.profileId || PROFILE_ID,
    voice: manifest.voice || VOICE_NAME,
    catalogPath: CATALOG_PATH,
    pilotManifestPath: PILOT_MANIFEST_PATH,
    manifestPath: FULL_MANIFEST_PATH,
    uploadReportPath,
    localNewOutputDir: FULL_OUTPUT_DIR,
    baseR2Path: manifest.baseR2Path || BASE_R2_PATH,
    rawGloss: Number(manifest.summary?.rawGloss || 142),
    uniqueGloss: Number(manifest.summary?.uniqueGloss || items.length),
    alreadyExisted,
    generatedNew,
    uploadedNew,
    skippedExisting,
    failed,
    zeroSize,
    manifestCounts,
    manifestTotalItems: Number(manifest.totalItems || items.length),
    publicBaseUrl: manifest.baseUrl || BASE_URL,
    sampleUrls,
    sampleTexts,
    notes: [
      'No mp3 was committed.',
      'No checkpoint was committed.',
      'No key or env file was committed.',
      'Vietnamese gloss only.',
    ],
  };

  await writeJson(FINAL_REPORT_JSON, report);
  await fs.writeFile(FINAL_REPORT_MD, buildReportMarkdown(report), 'utf8');

  console.log(JSON.stringify({
    reportJson: FINAL_REPORT_JSON,
    reportMd: FINAL_REPORT_MD,
    uniqueGloss: report.uniqueGloss,
    generatedNew: report.generatedNew,
    uploadedNew: report.uploadedNew,
    skippedExisting: report.skippedExisting,
    failed: report.failed,
    zeroSize: report.zeroSize,
    manifestTotalItems: report.manifestTotalItems,
  }, null, 2));
}

async function main() {
  const args = (() => {
    const result = {
      voice: VOICE_NAME,
      finalizeReport: '',
      uploadReportPath: FINAL_REPORT_JSON,
    };
    for (const arg of process.argv.slice(2)) {
      if (arg.startsWith('--voice=')) {
        const value = String(arg.slice('--voice='.length)).trim();
        if (value) result.voice = value;
      } else if (arg.startsWith('--finalize-report=')) {
        result.finalizeReport = arg.slice('--finalize-report='.length).trim();
      } else if (arg.startsWith('--upload-report=')) {
        result.uploadReportPath = arg.slice('--upload-report='.length).trim();
      }
    }
    return result;
  })();

  if (args.finalizeReport) {
    await finalizeReport({ uploadReportPath: args.finalizeReport });
    return;
  }

  const result = await generateFullGlossManifest({ voice: args.voice });
  console.log(JSON.stringify({
    catalogPath: result.catalogPath,
    pilotManifestPath: result.pilotManifestPath,
    manifestPath: result.manifestPath,
    rawGloss: result.rawGloss,
    uniqueGloss: result.uniqueGloss,
    alreadyExisted: result.alreadyExisted,
    generatedNew: result.generatedNew,
    zeroSize: result.zeroSize,
    voice: result.voice,
  }, null, 2));
}

main().catch((error) => {
  console.error(String(error?.message || error));
  process.exitCode = 1;
});
