import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '../..');

const SOURCE_REPORT = path.join(REPO_ROOT, 'docs/audio/english-audio-vi-phase3b-pilot-report.json');
const OUTPUT_MANIFEST = path.join(REPO_ROOT, 'docs/audio/english-audio-vi-phase3c-pilot-manifest.json');
const BASE_R2_PATH = 'audio/tts/assets/vi-v1/vietnamese-gloss';
const BASE_URL = 'https://audio.hochungkhoi.site';
const PROFILE_ID = 'vi-v1';
const VOICE = 'vi-VN-Chirp3-HD-Despina';

function nowIso() {
  return new Date().toISOString();
}

function normalizeText(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
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

  const score = (text) => {
    const normalized = String(text ?? '');
    let count = 0;
    for (const char of normalized) {
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
  return normalizeText(
    repairLikelyMojibake(String(value ?? ''))
      .replace(/[\u0000-\u001F]/g, ' ')
      .replace(/\uFFFD/g, ' '),
  )
    .replace(/\s+([,.;:!?])/g, '$1')
    .trim();
}

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

async function fileSize(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return Number(stat.size || 0);
  } catch {
    return 0;
  }
}

function buildManifestItem(item) {
  const localOutputPath = normalizeText(item.localOutputPath);
  const localFileName = path.basename(localOutputPath);
  const text = cleanText(item.text);
  const r2ObjectKey = `${BASE_R2_PATH}/${localFileName}`;
  const key = `vietnamese-gloss:${normalizeText(item.sourceId)}`;

  return {
    key,
    value: {
      sourceType: 'vietnamese-gloss',
      sourceId: normalizeText(item.sourceId),
      lessonId: Number(item.lessonId),
      lessonTitle: cleanText(item.lessonTitle),
      text,
      textPreview: text.length > 80 ? `${text.slice(0, 79)}…` : text,
      localOutputPath,
      localFileName,
      fileSizeBytes: Number(item.fileSize || 0),
      r2ObjectKey,
      url: `${BASE_URL}/${r2ObjectKey}`,
    },
  };
}

async function main() {
  const report = await readJson(SOURCE_REPORT);
  const items = Array.isArray(report.items) ? report.items.filter((item) => String(item.sourceType || '') === 'vietnamese-gloss') : [];
  if (!items.length) throw new Error('phase3b-report-empty');

  const manifestItems = {};
  let missingCount = 0;
  let zeroSizeCount = 0;

  for (const item of items) {
    const localFileSize = await fileSize(item.localOutputPath);
    if (localFileSize <= 0) missingCount += 1;
    if (localFileSize === 0) zeroSizeCount += 1;
    const built = buildManifestItem({ ...item, fileSize: localFileSize });
    if (manifestItems[built.key]) {
      throw new Error(`duplicate-key:${built.key}`);
    }
    manifestItems[built.key] = built.value;
  }

  const manifest = {
    version: '1.0.0',
    generatedAt: nowIso(),
    profileId: PROFILE_ID,
    language: 'vi',
    subject: 'english',
    voice: VOICE,
    baseUrl: BASE_URL,
    baseR2Path: BASE_R2_PATH,
    totalItems: Object.keys(manifestItems).length,
    sourceReport: SOURCE_REPORT,
    items: manifestItems,
    summary: {
      selectedItems: items.length,
      missingLocal: missingCount,
      zeroSize: zeroSizeCount,
    },
  };

  await fs.writeFile(OUTPUT_MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

  console.log(JSON.stringify({
    output: OUTPUT_MANIFEST,
    totalItems: manifest.totalItems,
    selectedItems: items.length,
    missingLocal: missingCount,
    zeroSize: zeroSizeCount,
    baseR2Path: BASE_R2_PATH,
  }, null, 2));
}

main().catch((error) => {
  console.error(String(error?.message || error));
  process.exitCode = 1;
});
