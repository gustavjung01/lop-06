import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '../..');

const DEFAULT_CATALOG = path.join(REPO_ROOT, 'docs/audio/english-audio-catalog-full.json');
const DEFAULT_REPORT_JSON = path.join(REPO_ROOT, 'docs/audio/english-audio-full-generate-report.json');
const DEFAULT_REPORT_MD = path.join(REPO_ROOT, 'docs/audio/english-audio-full-generate-report.md');
const DEFAULT_CHECKPOINT_JSON = path.join(REPO_ROOT, 'docs/audio/english-audio-full-generate-checkpoint.json');

const OUTPUT_ROOT = 'F:\\1_A_Disk_D\\khuong-binh\\lop6-tts-audio';
const PROFILE_ID = 'en-v1';
const VOICE_NAME = 'en-US-Neural2-F';
const GOOGLE_TTS_ENDPOINT = 'https://texttospeech.googleapis.com/v1/text:synthesize';

function nowIso() {
  return new Date().toISOString();
}

function parseArgs(argv) {
  const result = {
    catalog: DEFAULT_CATALOG,
    limit: 50,
    offset: 0,
    resume: false,
    voice: VOICE_NAME,
    envFile: '',
    reportJson: DEFAULT_REPORT_JSON,
    reportMd: DEFAULT_REPORT_MD,
    checkpoint: DEFAULT_CHECKPOINT_JSON,
  };

  for (const arg of argv.slice(2)) {
    if (arg.startsWith('--catalog=')) {
      result.catalog = arg.slice('--catalog='.length);
    } else if (arg.startsWith('--limit=')) {
      const value = Number(arg.slice('--limit='.length));
      if (Number.isFinite(value) && value > 0) result.limit = Math.max(1, Math.floor(value));
    } else if (arg.startsWith('--offset=')) {
      const value = Number(arg.slice('--offset='.length));
      if (Number.isFinite(value) && value >= 0) result.offset = Math.max(0, Math.floor(value));
    } else if (arg === '--resume') {
      result.resume = true;
    } else if (arg.startsWith('--voice=')) {
      const value = String(arg.slice('--voice='.length)).trim();
      if (value) result.voice = value;
    } else if (arg.startsWith('--env-file=')) {
      result.envFile = arg.slice('--env-file='.length);
    } else if (arg.startsWith('--report-json=')) {
      result.reportJson = arg.slice('--report-json='.length);
    } else if (arg.startsWith('--report-md=')) {
      result.reportMd = arg.slice('--report-md='.length);
    } else if (arg.startsWith('--checkpoint=')) {
      result.checkpoint = arg.slice('--checkpoint='.length);
    }
  }

  return result;
}

function normalizeText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function decodeBase64Audio(content) {
  if (!content) return null;
  return Buffer.from(String(content), 'base64');
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
      // Ignore and continue.
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

  const tryGetToken = (binary) => {
    const stdout = execFileSync(binary, ['auth', 'application-default', 'print-access-token'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: true,
    });
    return String(stdout || '').trim();
  };

  if (gcloudBinary) {
    try {
      const token = tryGetToken(gcloudBinary);
      if (token) {
        return { mode: 'adc', token, source: `adc:${gcloudBinary}`, quotaProject };
      }
    } catch {
      // Ignore and fall through.
    }
  }

  try {
    const token = tryGetToken('gcloud');
    if (token) {
      return { mode: 'adc', token, source: 'adc:gcloud-application-default', quotaProject };
    }
  } catch {
    // Ignore and fall through.
  }

  return null;
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

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

async function writeJson(filePath, payload) {
  await fs.writeFile(filePath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
}

function buildMarkdownReport(report) {
  const lines = [];
  lines.push('# English Audio Full Generate Report');
  lines.push('');
  lines.push(`- Generated at: ${report.generatedAt}`);
  lines.push(`- profileId: ${report.profileId}`);
  lines.push(`- voice: ${report.voice}`);
  lines.push(`- catalog: ${report.catalogPath}`);
  lines.push(`- outputDir: ${report.outputDir}`);
  lines.push(`- resume: ${report.resume ? 'yes' : 'no'}`);
  lines.push(`- offset: ${report.offset}`);
  lines.push(`- limit: ${report.limit}`);
  lines.push(`- keySource: ${report.keySource || 'missing'}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- totalItems: ${report.totalItems}`);
  lines.push(`- batchItems: ${report.batchItems}`);
  lines.push(`- created: ${report.created}`);
  lines.push(`- skippedExisting: ${report.skippedExisting}`);
  lines.push(`- skippedCheckpoint: ${report.skippedCheckpoint}`);
  lines.push(`- failed: ${report.failed}`);
  lines.push(`- warnings: ${report.warnings}`);
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

async function fileSize(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return Number(stat.size || 0);
  } catch {
    return 0;
  }
}

async function readCheckpoint(filePath) {
  const exists = await fs.stat(filePath).then(() => true).catch(() => false);
  if (!exists) {
    return { processedKeys: [] };
  }
  const parsed = await readJson(filePath);
  return {
    processedKeys: Array.isArray(parsed.processedKeys) ? parsed.processedKeys : [],
  };
}

async function writeCheckpoint(filePath, payload) {
  await writeJson(filePath, payload);
}

async function main() {
  const args = parseArgs(process.argv);
  const catalog = await readJson(args.catalog);
  const allItems = Array.isArray(catalog.items) ? catalog.items : [];
  const batchItems = allItems.slice(args.offset, args.offset + args.limit);
  const auth = await resolveTtsAuth(args.envFile);

  if (!auth) {
    throw new Error('Missing Google TTS auth. Set GOOGLE_TTS_API_KEY or make ADC available.');
  }

  await fs.mkdir(path.dirname(args.reportJson), { recursive: true });

  const checkpoint = args.resume ? await readCheckpoint(args.checkpoint) : { processedKeys: [] };
  const processedKeys = new Set(Array.isArray(checkpoint.processedKeys) ? checkpoint.processedKeys : []);

  const report = {
    generatedAt: nowIso(),
    profileId: PROFILE_ID,
    voice: args.voice,
    catalogPath: args.catalog,
    outputRoot: OUTPUT_ROOT,
    outputDir: path.join(OUTPUT_ROOT, PROFILE_ID),
    resume: args.resume,
    offset: args.offset,
    limit: args.limit,
    totalItems: allItems.length,
    batchItems: batchItems.length,
    keySource: auth.source,
    created: 0,
    skippedExisting: 0,
    skippedCheckpoint: 0,
    failed: 0,
    warnings: 0,
    items: [],
  };

  const shouldUpdateCheckpoint = args.resume;
  let processedSinceCheckpoint = 0;

  for (const item of batchItems) {
    const sourceType = String(item.sourceType || '').trim();
    const sourceId = String(item.sourceId || '').trim();
    const key = `${sourceType}:${sourceId}`;
    const localPath = String(item.localOutputPath || '').trim();
    const warning = String(item.warning || '').trim();

    if (warning) {
      report.warnings += 1;
    }

    if (args.resume && processedKeys.has(key)) {
      report.skippedCheckpoint += 1;
      report.items.push({
        ...item,
        status: 'skipped-checkpoint',
        fileSize: await fileSize(localPath),
        error: '',
      });
      continue;
    }

    const existingSize = await fileSize(localPath);
    if (existingSize > 0) {
      report.skippedExisting += 1;
      if (args.resume) {
        processedKeys.add(key);
      }
      report.items.push({
        ...item,
        status: 'skipped-existing',
        fileSize: existingSize,
        error: '',
      });
      continue;
    }

    try {
      const text = normalizeText(item.text);
      const audio = await synthesizeSpeech({
        auth,
        text,
        voiceName: args.voice,
      });
      await fs.mkdir(path.dirname(localPath), { recursive: true });
      await fs.writeFile(localPath, audio);
      const newSize = await fileSize(localPath);
      if (newSize <= 0) {
        throw new Error('generated-file-empty');
      }
      report.created += 1;
      if (args.resume) {
        processedKeys.add(key);
      }
      report.items.push({
        ...item,
        status: 'created',
        fileSize: newSize,
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
      break;
    }

    processedSinceCheckpoint += 1;
    if (shouldUpdateCheckpoint && processedSinceCheckpoint % 10 === 0) {
      await writeCheckpoint(args.checkpoint, {
        updatedAt: nowIso(),
        processedKeys: Array.from(processedKeys),
      });
    }

    await sleep(150);
  }

  if (shouldUpdateCheckpoint) {
    await writeCheckpoint(args.checkpoint, {
      updatedAt: nowIso(),
      processedKeys: Array.from(processedKeys),
    });
  }

  const pass = report.failed === 0;
  report.status = pass ? 'completed' : 'completed-with-errors';

  await writeJson(args.reportJson, report);
  await fs.writeFile(args.reportMd, buildMarkdownReport(report), 'utf8');

  console.log(JSON.stringify({
    reportJson: args.reportJson,
    reportMarkdown: args.reportMd,
    checkpoint: shouldUpdateCheckpoint ? args.checkpoint : null,
    totalItems: report.totalItems,
    batchItems: report.batchItems,
    created: report.created,
    skippedExisting: report.skippedExisting,
    skippedCheckpoint: report.skippedCheckpoint,
    failed: report.failed,
    warnings: report.warnings,
    keySource: report.keySource,
    outputDir: report.outputDir,
    pass,
  }, null, 2));
}

main().catch((error) => {
  console.error(String(error?.message || error));
  process.exitCode = 1;
});
