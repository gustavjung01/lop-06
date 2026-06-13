import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '../..');

const DEFAULT_MANIFEST = path.join(REPO_ROOT, 'docs/audio/english-audio-manifest-full.json');
const DEFAULT_REPORT_JSON = path.join(REPO_ROOT, 'docs/audio/english-audio-r2-upload-report.json');
const DEFAULT_REPORT_MD = path.join(REPO_ROOT, 'docs/audio/english-audio-r2-upload-report.md');
const CHECKPOINT_JSON = path.join(REPO_ROOT, 'docs/audio/english-audio-r2-upload-checkpoint.json');

const DEFAULT_OUTPUT_DIR = 'F:\\1_A_Disk_D\\khuong-binh\\lop6-tts-audio\\en-v1';
const DEFAULT_BASE_R2_PATH = 'audio/tts/assets/en-v1';
const DEFAULT_LIMIT = 50;
const DEFAULT_OFFSET = 0;
const DEFAULT_DRY_RUN = true;
const KEY_POINTER_PATH = path.join(REPO_ROOT, 'docs/keys.md');
const PROJECT_SLUG = 'hoc-tap-lop-06';

function nowIso() {
  return new Date().toISOString();
}

function parseBoolean(value, fallback) {
  if (value == null || value === '') return fallback;
  const text = String(value).toLowerCase().trim();
  if (['1', 'true', 'yes', 'on'].includes(text)) return true;
  if (['0', 'false', 'no', 'off'].includes(text)) return false;
  return fallback;
}

function parseArgs(argv) {
  const result = {
    manifest: DEFAULT_MANIFEST,
    limit: DEFAULT_LIMIT,
    offset: DEFAULT_OFFSET,
    resume: false,
    dryRun: DEFAULT_DRY_RUN,
    checkpoint: CHECKPOINT_JSON,
    outputDir: DEFAULT_OUTPUT_DIR,
    baseR2Path: DEFAULT_BASE_R2_PATH,
    reportJson: DEFAULT_REPORT_JSON,
    reportMd: DEFAULT_REPORT_MD,
  };

  for (const arg of argv.slice(2)) {
    if (arg.startsWith('--manifest=')) {
      result.manifest = arg.slice('--manifest='.length);
    } else if (arg.startsWith('--limit=')) {
      const value = Number(arg.slice('--limit='.length));
      if (Number.isFinite(value) && value > 0) result.limit = Math.max(1, Math.floor(value));
    } else if (arg.startsWith('--offset=')) {
      const value = Number(arg.slice('--offset='.length));
      if (Number.isFinite(value) && value >= 0) result.offset = Math.max(0, Math.floor(value));
    } else if (arg === '--resume') {
      result.resume = true;
    } else if (arg.startsWith('--dryRun=')) {
      result.dryRun = parseBoolean(arg.slice('--dryRun='.length), DEFAULT_DRY_RUN);
    } else if (arg === '--dryRun') {
      result.dryRun = true;
    } else if (arg.startsWith('--checkpoint=')) {
      result.checkpoint = arg.slice('--checkpoint='.length);
    } else if (arg.startsWith('--outputDir=')) {
      result.outputDir = arg.slice('--outputDir='.length);
    } else if (arg.startsWith('--baseR2Path=')) {
      result.baseR2Path = arg.slice('--baseR2Path='.length);
    } else if (arg.startsWith('--report-json=')) {
      result.reportJson = arg.slice('--report-json='.length);
    } else if (arg.startsWith('--report-md=')) {
      result.reportMd = arg.slice('--report-md='.length);
    }
  }

  return result;
}

function normalizeText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim();
}

function previewText(value, maxLength = 84) {
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
    'sourceType',
    'sourceId',
    'lessonId',
    'title',
    'textPreview',
    'r2ObjectKey',
    'localFileName',
    'localFileSizeBytes',
    'remoteStatus',
    'result',
    'error',
  ];
  const lines = [header.join(',')];
  for (const item of items) {
    lines.push([
      item.key,
      item.id,
      item.sourceType,
      item.sourceId,
      item.lessonId,
      item.title,
      item.textPreview,
      item.r2ObjectKey,
      item.localFileName,
      item.localFileSizeBytes,
      item.remoteStatus,
      item.result,
      item.error || '',
    ].map(toCsvCell).join(','));
  }
  return `${lines.join('\n')}\n`;
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

function parsePointerSourceFile(content) {
  const match = String(content || '').match(/^\s*source_file:\s*(.+?)\s*$/im);
  return match ? match[1].trim() : '';
}

function pickProjectBlock(content, projectSlug) {
  const lines = String(content || '').split(/\r?\n/);
  const projectIndex = lines.findIndex((line) => line.toLowerCase().includes(projectSlug.toLowerCase()));
  if (projectIndex < 0) return null;

  const windowLines = lines.slice(projectIndex, Math.min(lines.length, projectIndex + 80));
  const text = windowLines.join('\n');

  const accountId = text.match(/Account ID\s*[:=]\s*([a-f0-9-]+)/i)?.[1]?.trim() || '';
  const accessKeyId = text.match(/Access Key ID\s*[:=]\s*([a-f0-9-]+)/i)?.[1]?.trim() || '';
  const secretAccessKey = text.match(/Secret Access Key\s*[:=]\s*([a-f0-9-]+)/i)?.[1]?.trim() || '';
  const publicBaseUrl = text.match(/Public Development URL\s*[:=]\s*(\S+)/i)?.[1]?.trim() || '';
  const s3Api = text.match(/S3 API\s*[:=]\s*(\S+)/i)?.[1]?.trim() || '';
  const r2Url = text.match(/R2url\s*[:=]\s*(\S+)/i)?.[1]?.trim() || '';

  let bucket = '';
  try {
    const parsedS3 = s3Api ? new URL(s3Api) : null;
    const pathname = parsedS3 ? parsedS3.pathname.replace(/^\/+|\/+$/g, '') : '';
    if (pathname) {
      bucket = pathname.split('/').pop() || '';
    }
  } catch {
    // ignore invalid S3 URL
  }

  if (!bucket) bucket = projectSlug;

  return {
    accountId,
    accessKeyId,
    secretAccessKey,
    bucket,
    endpoint: accountId ? `https://${accountId}.r2.cloudflarestorage.com` : '',
    publicBaseUrl,
    sourceHint: s3Api || r2Url || '',
  };
}

async function readCredentialSources() {
  const env = {
    accountId: String(process.env.R2_ACCOUNT_ID || '').trim(),
    accessKeyId: String(process.env.R2_ACCESS_KEY_ID || '').trim(),
    secretAccessKey: String(process.env.R2_SECRET_ACCESS_KEY || '').trim(),
    bucket: String(process.env.R2_BUCKET || '').trim(),
    endpoint: String(process.env.R2_ENDPOINT || '').trim(),
    publicBaseUrl: String(process.env.R2_PUBLIC_BASE_URL || '').trim(),
  };

  const source = {
    accountId: env.accountId ? 'env' : '',
    accessKeyId: env.accessKeyId ? 'env' : '',
    secretAccessKey: env.secretAccessKey ? 'env' : '',
    bucket: env.bucket ? 'env' : '',
    endpoint: env.endpoint ? 'env' : '',
    publicBaseUrl: env.publicBaseUrl ? 'env' : '',
  };

  const dotenvR2 = path.join(REPO_ROOT, '.env.r2');
  try {
    const content = await fs.readFile(dotenvR2, 'utf8');
    const parsed = parseDotEnv(content);
    for (const [key, value] of Object.entries({
      accountId: parsed.R2_ACCOUNT_ID,
      accessKeyId: parsed.R2_ACCESS_KEY_ID,
      secretAccessKey: parsed.R2_SECRET_ACCESS_KEY,
      bucket: parsed.R2_BUCKET,
      endpoint: parsed.R2_ENDPOINT,
      publicBaseUrl: parsed.R2_PUBLIC_BASE_URL,
    })) {
      if (!env[key] && value) {
        env[key] = String(value).trim();
        source[key] = '.env.r2';
      }
    }
  } catch {
    // ignore missing local file
  }

  const pointerExists = await fs.stat(KEY_POINTER_PATH).then(() => true).catch(() => false);
  if (pointerExists) {
    try {
      const pointerContent = await fs.readFile(KEY_POINTER_PATH, 'utf8');
      const sourceFile = parsePointerSourceFile(pointerContent);
      if (sourceFile) {
        const sourceExists = await fs.stat(sourceFile).then(() => true).catch(() => false);
        if (sourceExists) {
          const sourceContent = await fs.readFile(sourceFile, 'utf8');
          const projectCreds = pickProjectBlock(sourceContent, PROJECT_SLUG);
          if (projectCreds?.accountId && projectCreds?.accessKeyId && projectCreds?.secretAccessKey && projectCreds?.bucket) {
            for (const [key, value] of Object.entries(projectCreds)) {
              if (value && !env[key]) {
                env[key] = value;
                source[key] = `source_file:${sourceFile}`;
              }
            }
          }
        }
      }
    } catch {
      // ignore pointer/source read issues here; they will be surfaced as missing credential fields later.
    }
  }

  const keysMd = path.join(REPO_ROOT, 'docs/keys.md');
  const docsKeysExists = await fs.stat(keysMd).then(() => true).catch(() => false);

  return { env, source, docsKeysExists, sourcePointerExists: pointerExists };
}

function missingCredentialFields(creds) {
  const missing = [];
  if (!creds.accountId) missing.push('R2_ACCOUNT_ID');
  if (!creds.accessKeyId) missing.push('R2_ACCESS_KEY_ID');
  if (!creds.secretAccessKey) missing.push('R2_SECRET_ACCESS_KEY');
  if (!creds.bucket) missing.push('R2_BUCKET');
  return missing;
}

function encodeRfc3986(value) {
  return encodeURIComponent(value)
    .replace(/[!'()*]/g, (ch) => `%${ch.charCodeAt(0).toString(16).toUpperCase()}`);
}

function encodeObjectKey(key) {
  return String(key)
    .split('/')
    .map((segment) => encodeRfc3986(segment))
    .join('/');
}

function sha256Hex(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function hmac(key, value, encoding = undefined) {
  return crypto.createHmac('sha256', key).update(value).digest(encoding);
}

function getSigningKey(secretAccessKey, dateStamp, region, service) {
  const kDate = hmac(`AWS4${secretAccessKey}`, dateStamp);
  const kRegion = hmac(kDate, region);
  const kService = hmac(kRegion, service);
  return hmac(kService, 'aws4_request');
}

function buildR2Endpoint(accountId, endpoint) {
  if (endpoint) {
    return endpoint.replace(/\/+$/, '');
  }
  if (!accountId) {
    return '';
  }
  return `https://${accountId}.r2.cloudflarestorage.com`;
}

function buildR2ObjectUrl(endpoint, bucket, objectKey) {
  return `${endpoint}/${encodeRfc3986(bucket)}/${encodeObjectKey(objectKey)}`;
}

function buildSignedRequest({
  method,
  url,
  host,
  accessKeyId,
  secretAccessKey,
  bodyBytes,
  service = 's3',
  region = 'auto',
  extraHeaders = {},
}) {
  const now = new Date();
  const amzDate = now.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
  const dateStamp = amzDate.slice(0, 8);
  const payloadHash = sha256Hex(bodyBytes || Buffer.alloc(0));

  const headers = {
    host,
    'x-amz-content-sha256': payloadHash,
    'x-amz-date': amzDate,
    ...extraHeaders,
  };

  const canonicalHeaders = Object.keys(headers)
    .map((name) => name.toLowerCase())
    .sort()
    .map((name) => `${name}:${String(headers[name]).trim().replace(/\s+/g, ' ')}\n`)
    .join('');

  const signedHeaders = Object.keys(headers)
    .map((name) => name.toLowerCase())
    .sort()
    .join(';');

  const urlObj = new URL(url);
  const canonicalUri = urlObj.pathname.split('/').map((segment) => encodeRfc3986(decodeURIComponent(segment))).join('/').replace(/\/+/g, '/');
  const canonicalQueryString = urlObj.searchParams.toString();
  const canonicalRequest = [
    method.toUpperCase(),
    canonicalUri || '/',
    canonicalQueryString,
    canonicalHeaders,
    signedHeaders,
    payloadHash,
  ].join('\n');

  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign = [
    'AWS4-HMAC-SHA256',
    amzDate,
    credentialScope,
    sha256Hex(canonicalRequest),
  ].join('\n');

  const signingKey = getSigningKey(secretAccessKey, dateStamp, region, service);
  const signature = hmac(signingKey, stringToSign, 'hex');
  const authorization = `AWS4-HMAC-SHA256 Credential=${accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  return {
    headers: {
      ...headers,
      Authorization: authorization,
    },
    bodyHash: payloadHash,
    amzDate,
  };
}

async function headObject({ endpoint, bucket, objectKey, creds }) {
  const url = buildR2ObjectUrl(endpoint, bucket, objectKey);
  const host = new URL(endpoint).host;
  const { headers } = buildSignedRequest({
    method: 'HEAD',
    url,
    host,
    accessKeyId: creds.accessKeyId,
    secretAccessKey: creds.secretAccessKey,
    bodyBytes: Buffer.alloc(0),
    extraHeaders: {},
  });

  const response = await fetch(url, { method: 'HEAD', headers });
  return {
    exists: response.status === 200,
    status: response.status,
  };
}

async function putObject({ endpoint, bucket, objectKey, bodyBytes, creds }) {
  const url = buildR2ObjectUrl(endpoint, bucket, objectKey);
  const host = new URL(endpoint).host;
  const { headers } = buildSignedRequest({
    method: 'PUT',
    url,
    host,
    accessKeyId: creds.accessKeyId,
    secretAccessKey: creds.secretAccessKey,
    bodyBytes,
    extraHeaders: {
      'content-type': 'audio/mpeg',
    },
  });

  const response = await fetch(url, {
    method: 'PUT',
    headers,
    body: bodyBytes,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`r2-upload-http-${response.status}: ${text.slice(0, 220)}`);
  }
}

function buildMarkdownReport(report) {
  const lines = [];
  lines.push('# English Audio R2 Upload Report');
  lines.push('');
  lines.push(`- generatedAt: ${report.generatedAt}`);
  lines.push(`- dryRun: ${report.dryRun ? 'yes' : 'no'}`);
  lines.push(`- manifest: ${report.manifestPath}`);
  lines.push(`- outputDir: ${report.outputDir}`);
  lines.push(`- baseR2Path: ${report.baseR2Path}`);
  lines.push(`- bucket: ${report.bucket || '(missing)'}`);
  lines.push(`- endpoint: ${report.endpoint || '(missing)'}`);
  lines.push('');
  lines.push('## Credential');
  lines.push('');
  lines.push(`- credentialReady: ${report.credentialReady ? 'yes' : 'no'}`);
  lines.push(`- missingFields: ${report.missingCredentialFields.length ? report.missingCredentialFields.join(', ') : '(none)'}`);
  lines.push(`- docsKeysExists: ${report.docsKeysExists ? 'yes' : 'no'}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- totalItems: ${report.totalItems}`);
  lines.push(`- selectedItems: ${report.selectedItems}`);
  lines.push(`- planned: ${report.planned}`);
  lines.push(`- uploaded: ${report.uploaded}`);
  lines.push(`- skippedExisting: ${report.skippedExisting}`);
  lines.push(`- skippedMissingLocal: ${report.skippedMissingLocal}`);
  lines.push(`- failed: ${report.failed}`);
  lines.push('');
  lines.push('## Item Status');
  lines.push('');
  lines.push('| key | result | remoteStatus | localFileName | localFileSizeBytes | error |');
  lines.push('|---|---|---|---|---:|---|');
  for (const item of report.items.slice(0, 120)) {
    lines.push(`| ${item.key} | ${item.result} | ${item.remoteStatus || ''} | ${item.localFileName} | ${item.localFileSizeBytes} | ${item.error || ''} |`);
  }
  if (report.items.length > 120) {
    lines.push(`| ... | ... | ... | ... | ... | ${report.items.length - 120} more items |`);
  }
  lines.push('');
  lines.push('## Notes');
  lines.push('');
  lines.push('- This report is local-only.');
  lines.push('- No R2 upload was performed in dry-run mode.');
  lines.push('- No public URL was generated yet.');
  return `${lines.join('\n')}\n`;
}

async function loadCheckpoint(filePath) {
  try {
    const parsed = await readJson(filePath);
    return {
      uploadedKeys: new Set(Array.isArray(parsed.uploadedKeys) ? parsed.uploadedKeys : []),
    };
  } catch {
    return {
      uploadedKeys: new Set(),
    };
  }
}

async function saveCheckpoint(filePath, uploadedKeys) {
  await writeJson(filePath, {
    updatedAt: nowIso(),
    uploadedKeys: Array.from(uploadedKeys),
  });
}

async function main() {
  const args = parseArgs(process.argv);
  const manifest = await readJson(args.manifest);
  const items = Object.entries(manifest.items || {})
    .map(([key, item]) => ({ key, ...item }))
    .sort((a, b) => a.key.localeCompare(b.key));

  const selectedItems = items.slice(args.offset, args.offset + args.limit);
  const credentialBundle = await readCredentialSources();
  const creds = credentialBundle.env;
  const missingFields = missingCredentialFields(creds);
  const credentialReady = missingFields.length === 0;
  const endpoint = buildR2Endpoint(creds.accountId, creds.endpoint);
  const bucket = creds.bucket;
  const checkpoint = args.resume ? await loadCheckpoint(args.checkpoint) : { uploadedKeys: new Set() };
  const uploadedKeys = new Set(checkpoint.uploadedKeys);

  const report = {
    generatedAt: nowIso(),
    manifestPath: args.manifest,
    outputDir: args.outputDir,
    baseR2Path: args.baseR2Path,
    bucket,
    endpoint,
    dryRun: args.dryRun,
    resume: args.resume,
    offset: args.offset,
    limit: args.limit,
    totalItems: items.length,
    selectedItems: selectedItems.length,
    credentialReady,
    missingCredentialFields: missingFields,
    docsKeysExists: credentialBundle.docsKeysExists,
    planned: 0,
    uploaded: 0,
    skippedExisting: 0,
    skippedMissingLocal: 0,
    failed: 0,
    items: [],
  };

  if (!credentialReady && !args.dryRun) {
    report.failed += 1;
    report.items.push({
      key: 'credential',
      result: 'failed',
      remoteStatus: '',
      localFileName: '',
      localFileSizeBytes: 0,
      error: `missing-credentials:${missingFields.join(',')}`,
    });
  }

  for (const item of selectedItems) {
    const resolvedLocalPath = normalizeText(item.localOutputPath)
      ? normalizeText(item.localOutputPath)
      : path.join(normalizeText(manifest.outputDir || args.outputDir), normalizeText(item.localFileName || ''));
    const localFileName = path.basename(resolvedLocalPath || normalizeText(item.localFileName || ''));
    const localFileSizeBytes = await fileSize(resolvedLocalPath);
    const baseResult = {
      key: item.key,
      remoteStatus: 'unchecked',
      localFileName,
      localFileSizeBytes,
      error: '',
    };

    if (!resolvedLocalPath) {
      report.failed += 1;
      report.items.push({ ...baseResult, result: 'failed', error: 'missing-local-file-path' });
      continue;
    }
    if (!item.r2ObjectKey) {
      report.failed += 1;
      report.items.push({ ...baseResult, result: 'failed', error: 'missing-r2ObjectKey' });
      continue;
    }
    if (localFileSizeBytes <= 0) {
      report.skippedMissingLocal += 1;
      report.items.push({ ...baseResult, result: 'skipped-missing-local', remoteStatus: 'missing-local-file', error: '' });
      continue;
    }

    if (args.dryRun || !credentialReady) {
      report.planned += 1;
      report.items.push({
        ...baseResult,
        result: args.dryRun ? 'dry-run-planned' : 'blocked-missing-credentials',
        remoteStatus: 'not-uploaded',
      });
      continue;
    }

    let remoteExists = false;
    if (args.resume) {
      try {
        const remote = await headObject({
          endpoint,
          bucket,
          objectKey: item.r2ObjectKey,
          creds,
        });
        remoteExists = remote.exists;
        baseResult.remoteStatus = remote.exists ? 'exists' : 'missing';
      } catch (error) {
        report.failed += 1;
        report.items.push({
          ...baseResult,
          result: 'failed',
          remoteStatus: 'head-error',
          error: String(error?.message || error),
        });
        continue;
      }
      if (remoteExists) {
        report.skippedExisting += 1;
        report.items.push({ ...baseResult, result: 'skipped-existing', remoteStatus: 'exists' });
        continue;
      }
    }

    try {
      const bodyBytes = await fs.readFile(resolvedLocalPath);
      await putObject({
        endpoint,
        bucket,
        objectKey: item.r2ObjectKey,
        bodyBytes,
        creds,
      });
      report.uploaded += 1;
      uploadedKeys.add(item.key);
      report.items.push({ ...baseResult, result: 'uploaded', remoteStatus: remoteExists ? 'missing-rechecked' : 'uploaded' });
    } catch (error) {
      report.failed += 1;
      report.items.push({
        ...baseResult,
        result: 'failed',
        remoteStatus: remoteExists ? 'upload-after-head' : 'upload',
        error: String(error?.message || error),
      });
      break;
    }
  }

  if (args.resume && !args.dryRun) {
    await saveCheckpoint(args.checkpoint, uploadedKeys);
  }

  const status = report.failed > 0 ? 'needs-attention' : (args.dryRun ? 'dry-run-complete' : 'completed');
  report.status = status;

  await fs.mkdir(path.dirname(args.reportJson), { recursive: true });
  await writeJson(args.reportJson, report);
  await fs.writeFile(args.reportMd, buildMarkdownReport(report), 'utf8');

  console.log(JSON.stringify({
    reportJson: args.reportJson,
    reportMarkdown: args.reportMd,
    checkpoint: args.resume ? args.checkpoint : null,
    dryRun: args.dryRun,
    credentialReady,
    missingCredentialFields: missingFields,
    totalItems: report.totalItems,
    selectedItems: report.selectedItems,
    planned: report.planned,
    uploaded: report.uploaded,
    skippedExisting: report.skippedExisting,
    skippedMissingLocal: report.skippedMissingLocal,
    failed: report.failed,
    endpoint: endpoint || '',
    bucket: bucket || '',
    pass: report.failed === 0,
  }, null, 2));

  if (!args.dryRun && !credentialReady) {
    process.exitCode = 1;
  } else if (report.failed > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(String(error?.message || error));
  process.exitCode = 1;
});
