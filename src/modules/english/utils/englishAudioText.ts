const VIETNAMESE_MARK_PATTERN = /[À-ỹĐđĂăÂâÊêÔôƠơƯư]/u;

export function isLikelyEnglishAudioText(text: string) {
  const normalized = String(text || '').trim();
  if (!normalized) return false;
  return !VIETNAMESE_MARK_PATTERN.test(normalized);
}
