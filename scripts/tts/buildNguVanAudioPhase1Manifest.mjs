import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '../..');

const SOURCE_REPORT = path.join(REPO_ROOT, 'docs/audio/ngu-van-audio-phase1-pilot-report.json');
const OUTPUT_MANIFEST = path.join(REPO_ROOT, 'docs/audio/ngu-van-audio-phase1-manifest.json');

const PROFILE_ID = 'vi-v1';
const VOICE = 'vi-VN-Chirp3-HD-Despina';
const BASE_URL = 'https://audio.hochungkhoi.site';
const BASE_R2_PATH = 'audio/tts/assets/ngu-van/vi-v1/phase1-pilot';

function nowIso() {
  return new Date().toISOString();
}

function normalizeText(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function buildManifestKey(item) {
  const sourceTypeMap = {
    'lesson-title': 'ngu-van-lesson-title',
    'lesson-summary': 'ngu-van-lesson-summary',
    'content-card': 'ngu-van-content-card',
  };
  const sourceType = sourceTypeMap[item.sourceType];
  if (!sourceType) {
    throw new Error(`unsupported-source-type:${item.sourceType}`);
  }
  const sourceId = normalizeText(item.sourceId);
  return `${sourceType}:${sourceId}`;
}

function buildManifestItem(item) {
  const sourceTypeMap = {
    'lesson-title': 'ngu-van-lesson-title',
    'lesson-summary': 'ngu-van-lesson-summary',
    'content-card': 'ngu-van-content-card',
  };
  const sourceType = sourceTypeMap[item.sourceType];
  const sourceId = normalizeText(item.sourceId);
  const localOutputPath = normalizeText(item.localOutputPath);
  const localFileName = normalizeText(item.localFileName || path.basename(localOutputPath));
  const r2ObjectKey = `${BASE_R2_PATH}/${localFileName}`;
  const text = normalizeText(item.text);

  return {
    sourceType,
    sourceId,
    lessonId: Number(item.lessonId),
    title: normalizeText(item.title),
    text,
    textPreview: text.length > 84 ? `${text.slice(0, 83).trimEnd()}…` : text,
    localOutputPath,
    localFileName,
    fileSizeBytes: Number(item.fileSize || 0),
    r2ObjectKey,
    url: `${BASE_URL}/${r2ObjectKey}`,
    status: item.status || 'local-ready',
  };
}

async function main() {
  const report = JSON.parse(await fs.readFile(SOURCE_REPORT, 'utf8'));
  const items = Array.isArray(report.items) ? report.items : [];
  if (!items.length) throw new Error('ngu-van-pilot-report-empty');

  const manifestItems = {};
  for (const item of items) {
    const key = buildManifestKey(item);
    if (manifestItems[key]) throw new Error(`duplicate-key:${key}`);
    manifestItems[key] = buildManifestItem(item);
  }

  const manifest = {
    version: '1.0.0',
    generatedAt: nowIso(),
    profileId: PROFILE_ID,
    language: 'vi',
    subject: 'ngu-van',
    voice: VOICE,
    baseUrl: BASE_URL,
    baseR2Path: BASE_R2_PATH,
    totalItems: Object.keys(manifestItems).length,
    sourceReport: SOURCE_REPORT,
    items: manifestItems,
    summary: {
      pilotLessonId: Number(report.pilotLessonId || 1),
      pilotLessonTitle: normalizeText(report.pilotLessonTitle || ''),
      sourceTypeCounts: report.sourceTypeCounts || {},
    },
  };

  await fs.writeFile(OUTPUT_MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

  console.log(JSON.stringify({
    output: OUTPUT_MANIFEST,
    totalItems: manifest.totalItems,
    sourceTypeCounts: manifest.summary.sourceTypeCounts,
    baseR2Path: BASE_R2_PATH,
  }, null, 2));
}

main().catch((error) => {
  console.error(String(error?.message || error));
  process.exitCode = 1;
});
