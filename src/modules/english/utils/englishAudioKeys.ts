type EnglishAudioSourceType = 'lesson-card' | 'question' | 'vocabulary-word' | 'question-option' | 'vietnamese-gloss';

function normalizeAudioText(value: string) {
  return String(value ?? '')
    .trim()
    .replace(/\s+/g, ' ');
}

function slugifyAudioText(value: string) {
  return normalizeAudioText(value)
    .toLowerCase()
    .replace(/['’"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function shortHash(value: string) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}

export function buildVietnameseGlossSourceId(lessonSourceId: string, englishWord: string) {
  const lessonKey = normalizeAudioText(lessonSourceId);
  const wordSlug = slugifyAudioText(englishWord);
  if (!lessonKey || !wordSlug) return '';
  return `${lessonKey}:vocab:${wordSlug}`;
}

export function buildEnglishAudioSourceId(sourceType: EnglishAudioSourceType, text: string) {
  const normalized = normalizeAudioText(text);
  if (!normalized) return '';
  const slug = slugifyAudioText(normalized) || 'item';
  return `${slug}-${shortHash(`${sourceType}:${normalized.toLowerCase()}`)}`;
}

export function normalizeEnglishAudioText(value: string) {
  return normalizeAudioText(value);
}
