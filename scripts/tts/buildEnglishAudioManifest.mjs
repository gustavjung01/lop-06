import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '../..');

const FULL_CATALOG_PATH = path.join(REPO_ROOT, 'docs/audio/english-audio-catalog-full.json');
const PHASE2B_CATALOG_PATH = path.join(REPO_ROOT, 'docs/audio/english-audio-catalog-phase2b.json');
const OUTPUT_JSON = path.join(REPO_ROOT, 'docs/audio/english-audio-manifest-full.json');
const OUTPUT_CSV = path.join(REPO_ROOT, 'docs/audio/english-audio-manifest-full.csv');
const REPORT_MD = path.join(REPO_ROOT, 'docs/audio/english-audio-manifest-report.md');

const PROFILE_ID = 'en-v1';
const VOICE = 'en-US-Neural2-F';
const LANGUAGE = 'en';
const SUBJECT = 'english';
const GRADE = 6;
const BASE_R2_PATH = `audio/tts/assets/${PROFILE_ID}`;
const DEFAULT_SOURCE_CATALOGS = [FULL_CATALOG_PATH, PHASE2B_CATALOG_PATH];

function nowIso() {
  return new Date().toISOString();
}

function normalizeText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim();
}

function previewText(value, maxLength = 96) {
  const text = normalizeText(value);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
}

function toCsvCell(value) {
  const text = String(value ?? '');
  if (!/[",\n\r]/.test(text)) return text;
  return `"${text.replace(/"/g, '""')}"`;
}

function buildCsv(items) {
  const header = [
    'key',
    'id',
    'catalogId',
    'subject',
    'grade',
    'sourceType',
    'sourceId',
    'lessonId',
    'title',
    'textPreview',
    'r2ObjectKey',
    'localFileName',
    'fileSizeBytes',
    'durationMs',
    'status',
  ];

  const lines = [header.join(',')];
  for (const item of items) {
    lines.push([
      item.key,
      item.id,
      item.catalogId || '',
      item.subject,
      item.grade,
      item.sourceType,
      item.sourceId,
      item.lessonId,
      item.title,
      item.textPreview,
      item.r2ObjectKey,
      item.localFileName,
      item.fileSizeBytes,
      item.durationMs ?? '',
      item.status,
    ].map(toCsvCell).join(','));
  }

  return `${lines.join('\n')}\n`;
}

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

async function fileExists(filePath) {
  return fs.stat(filePath).then(() => true).catch(() => false);
}

async function fileSizeBytes(filePath) {
  const stat = await fs.stat(filePath);
  return Number(stat.size || 0);
}

function validateRequiredString(value, fieldName, errors) {
  const text = normalizeText(value);
  if (!text) {
    errors.push(`missing-${fieldName}`);
    return '';
  }
  return text;
}

function summarize(items, field) {
  const counts = new Map();
  for (const item of items) {
    const key = item[field];
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return counts;
}

async function main() {
  const sourceCatalogPaths = [];
  for (const candidate of DEFAULT_SOURCE_CATALOGS) {
    if (await fileExists(candidate)) {
      sourceCatalogPaths.push(candidate);
    }
  }
  if (!sourceCatalogPaths.length) {
    throw new Error('missing-source-catalogs');
  }

  const sourceCatalogs = [];
  for (const catalogPath of sourceCatalogPaths) {
    const catalog = await readJson(catalogPath);
    sourceCatalogs.push({
      catalogPath,
      catalog,
      items: Array.isArray(catalog.items) ? catalog.items : [],
    });
  }

  const items = sourceCatalogs.flatMap((entry) => entry.items);

  const errors = [];
  const duplicates = {
    id: [],
    source: [],
    r2: [],
  };
  const missingFiles = [];
  const zeroSizeFiles = [];
  const wrongPathFiles = [];
  const normalizedItems = [];

  const seenIds = new Set();
  const seenSourceKeys = new Set();
  const seenR2Keys = new Set();

  for (const rawItem of items) {
    const itemErrors = [];
    const catalogId = validateRequiredString(rawItem.id, 'id', itemErrors);
    const sourceType = validateRequiredString(rawItem.sourceType, 'sourceType', itemErrors);
    const sourceId = validateRequiredString(rawItem.sourceId, 'sourceId', itemErrors);
    const lessonId = Number(rawItem.lessonId);
    const title = validateRequiredString(rawItem.title, 'title', itemErrors);
    const text = validateRequiredString(rawItem.text, 'text', itemErrors);
    const localOutputPath = validateRequiredString(rawItem.localOutputPath, 'localOutputPath', itemErrors);
    const r2ObjectKey = validateRequiredString(rawItem.r2ObjectKey, 'r2ObjectKey', itemErrors);
    const subject = validateRequiredString(rawItem.subject, 'subject', itemErrors);
    const grade = Number(rawItem.grade);

    if (subject !== SUBJECT) {
      itemErrors.push('invalid-subject');
    }
    if (grade !== GRADE) {
      itemErrors.push('invalid-grade');
    }
    if (!Number.isInteger(lessonId) || lessonId <= 0) {
      itemErrors.push('invalid-lessonId');
    }
    if (!sourceType || !sourceId) {
      itemErrors.push('invalid-source');
    }
    if (localOutputPath && localOutputPath.includes(`${PROFILE_ID}-pilot`)) {
      itemErrors.push('pilot-path');
      wrongPathFiles.push(localOutputPath);
    }
    if (localOutputPath && !localOutputPath.includes(`\\${PROFILE_ID}\\`)) {
      itemErrors.push('wrong-profile-path');
      wrongPathFiles.push(localOutputPath);
    }
    if (r2ObjectKey && !r2ObjectKey.startsWith(`${BASE_R2_PATH}/`)) {
      itemErrors.push('wrong-r2-path');
    }

    const key = `${sourceType}:${sourceId}`;
    const manifestId = key;
    if (seenIds.has(manifestId)) {
      duplicates.id.push(manifestId);
      itemErrors.push('duplicate-id');
    }
    if (seenSourceKeys.has(key)) {
      duplicates.source.push(key);
      itemErrors.push('duplicate-source');
    }
    if (seenR2Keys.has(r2ObjectKey)) {
      duplicates.r2.push(r2ObjectKey);
      itemErrors.push('duplicate-r2');
    }
    seenIds.add(manifestId);
    seenSourceKeys.add(key);
    seenR2Keys.add(r2ObjectKey);

    let fileBytes = 0;
    try {
      fileBytes = await fileSizeBytes(localOutputPath);
      if (fileBytes <= 0) {
        zeroSizeFiles.push(localOutputPath);
        itemErrors.push('zero-size');
      }
    } catch {
      missingFiles.push(localOutputPath);
      itemErrors.push('missing-local-file');
    }

    const normalizedItem = {
      key,
      id: manifestId,
      catalogId,
      subject,
      grade,
      sourceType,
      sourceId,
      lessonId,
      title,
      textPreview: previewText(text),
      r2ObjectKey,
      localFileName: path.basename(localOutputPath),
      fileSizeBytes: fileBytes,
      durationMs: null,
      status: itemErrors.length === 0 ? 'local-ready' : 'needs-fix',
    };

    normalizedItems.push(normalizedItem);
  }

  const counts = {
    totalItems: normalizedItems.length,
    localReady: normalizedItems.filter((item) => item.status === 'local-ready').length,
    missingFiles: missingFiles.length,
    zeroSizeFiles: zeroSizeFiles.length,
    duplicateIdCount: duplicates.id.length,
    duplicateSourceCount: duplicates.source.length,
    duplicateR2Count: duplicates.r2.length,
    wrongPathCount: wrongPathFiles.length,
  };

  const manifest = {
    version: '1.0.0',
    generatedAt: nowIso(),
    profileId: PROFILE_ID,
    language: LANGUAGE,
    subject: SUBJECT,
    grade: GRADE,
    voice: VOICE,
    totalItems: normalizedItems.length,
    baseR2Path: BASE_R2_PATH,
    sourceCatalogPaths: sourceCatalogPaths.map((catalogPath) =>
      path.relative(REPO_ROOT, catalogPath).replaceAll('\\', '/'),
    ),
    outputDir: 'F:\\1_A_Disk_D\\khuong-binh\\lop6-tts-audio\\en-v1',
    validation: counts,
    items: Object.fromEntries(normalizedItems.map((item) => [item.key, item])),
  };

  const reportLines = [];
  reportLines.push('# English Audio Manifest Report');
  reportLines.push('');
  reportLines.push(`- generatedAt: ${manifest.generatedAt}`);
  reportLines.push(`- profileId: ${manifest.profileId}`);
  reportLines.push(`- voice: ${manifest.voice}`);
  for (const catalogPath of manifest.sourceCatalogPaths) {
    reportLines.push(`- catalog: ${catalogPath}`);
  }
  reportLines.push(`- outputDir: ${manifest.outputDir}`);
  reportLines.push(`- baseR2Path: ${manifest.baseR2Path}`);
  reportLines.push('');
  reportLines.push('## Validation');
  reportLines.push('');
  reportLines.push(`- catalog items: ${items.length}`);
  reportLines.push(`- manifest items: ${normalizedItems.length}`);
  reportLines.push(`- local mp3 found: ${counts.localReady}`);
  reportLines.push(`- missing: ${counts.missingFiles}`);
  reportLines.push(`- zeroSize: ${counts.zeroSizeFiles}`);
  reportLines.push(`- duplicate ids: ${counts.duplicateIdCount}`);
  reportLines.push(`- duplicate source keys: ${counts.duplicateSourceCount}`);
  reportLines.push(`- duplicate r2 keys: ${counts.duplicateR2Count}`);
  reportLines.push(`- wrong path count: ${counts.wrongPathCount}`);
  reportLines.push('');
  reportLines.push('## Notes');
  reportLines.push('');
  reportLines.push('- This manifest is local-only.');
  reportLines.push('- No R2 upload was performed.');
  reportLines.push('- No public URL was generated yet.');
  reportLines.push('');
  reportLines.push('## File Status Summary');
  reportLines.push('');
  reportLines.push('| key | sourceType | sourceId | status | fileSizeBytes | localFileName |');
  reportLines.push('|---|---|---|---|---:|---|');
  for (const item of normalizedItems.slice(0, 80)) {
    reportLines.push(`| ${item.key} | ${item.sourceType} | ${item.sourceId} | ${item.status} | ${item.fileSizeBytes} | ${item.localFileName} |`);
  }
  if (normalizedItems.length > 80) {
    reportLines.push(`| ... | ... | ... | ... | ... | ${normalizedItems.length - 80} more items |`);
  }

  await fs.mkdir(path.dirname(OUTPUT_JSON), { recursive: true });
  await fs.writeFile(OUTPUT_JSON, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  await fs.writeFile(OUTPUT_CSV, buildCsv(normalizedItems), 'utf8');
  await fs.writeFile(REPORT_MD, `${reportLines.join('\n')}\n`, 'utf8');

  const hasErrors =
    errors.length > 0 ||
    counts.missingFiles > 0 ||
    counts.zeroSizeFiles > 0 ||
    counts.duplicateIdCount > 0 ||
    counts.duplicateSourceCount > 0 ||
    counts.duplicateR2Count > 0 ||
    counts.wrongPathCount > 0;
  if (hasErrors) {
    console.error(JSON.stringify({ ...counts, manifestJson: OUTPUT_JSON, manifestCsv: OUTPUT_CSV, reportMd: REPORT_MD }, null, 2));
    process.exitCode = 1;
    return;
  }

  console.log(JSON.stringify({
    manifestJson: OUTPUT_JSON,
    manifestCsv: OUTPUT_CSV,
    reportMd: REPORT_MD,
    totalItems: counts.totalItems,
    localReady: counts.localReady,
    missingFiles: counts.missingFiles,
    zeroSizeFiles: counts.zeroSizeFiles,
    duplicateIdCount: counts.duplicateIdCount,
    duplicateSourceCount: counts.duplicateSourceCount,
    duplicateR2Count: counts.duplicateR2Count,
    wrongPathCount: counts.wrongPathCount,
  }, null, 2));
}

main().catch((error) => {
  console.error(String(error?.message || error));
  process.exitCode = 1;
});
