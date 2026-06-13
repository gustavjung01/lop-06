import { useCallback, useEffect, useMemo, useState } from 'react';

export type EnglishAudioSourceType = 'lesson-card' | 'question' | 'vocabulary-word' | 'question-option' | 'vietnamese-gloss';

export type EnglishAudioSourceRef = {
  sourceType: EnglishAudioSourceType;
  sourceId: string;
  lessonId?: number;
};

export type EnglishAudioManifestItem = {
  sourceType: EnglishAudioSourceType;
  sourceId: string;
  lessonId: number;
  r2ObjectKey: string;
  url: string;
};

export type EnglishAudioManifestMatch = {
  item: EnglishAudioManifestItem;
  matchType: 'exact' | 'slug';
};

export type EnglishAudioManifest = {
  version: string;
  generatedAt: string;
  profileId: string;
  language: 'en';
  subject: 'english';
  baseUrl: string;
  totalItems: number;
  items: Record<string, EnglishAudioManifestItem>;
};

const MANIFEST_URL = 'audio/tts/manifest.json?v=phase3d';

let manifestPromise: Promise<EnglishAudioManifest | null> | null = null;
let manifestCache: EnglishAudioManifest | null = null;

type PlaybackState = {
  key: string;
  url: string;
  audio: HTMLAudioElement;
};

let currentAudio: PlaybackState | null = null;
let currentAudioResolve: ((value: boolean) => void) | null = null;
const playbackListeners = new Set<() => void>();

function getPlaybackKey(sourceType: EnglishAudioSourceType, sourceId: string, lessonId?: number) {
  return `${sourceType}:${typeof lessonId === 'number' ? lessonId : 'none'}:${sourceId}`;
}

function getSequencePlaybackKey(items: EnglishAudioSourceRef[]) {
  return `sequence:${items
    .map((item) => `${item.sourceType}:${typeof item.lessonId === 'number' ? item.lessonId : 'none'}:${item.sourceId}`)
    .join('|')}`;
}

function emitPlaybackChange() {
  playbackListeners.forEach((listener) => listener());
}

export function subscribeEnglishAudioPlayback(listener: () => void) {
  playbackListeners.add(listener);
  return () => playbackListeners.delete(listener);
}

export function getEnglishAudioPlaybackKey() {
  return currentAudio?.key ?? null;
}

export function getEnglishAudioPlaybackUrl() {
  return currentAudio?.url ?? null;
}

function getManifestKey(sourceType: EnglishAudioSourceType, sourceId: string) {
  return `${sourceType}:${sourceId}`;
}

function getSourceSlug(sourceId: string) {
  const normalizedSourceId = String(sourceId ?? '').trim();
  if (!normalizedSourceId) return '';
  const parts = normalizedSourceId.split('-');
  if (parts.length < 2) return normalizedSourceId;
  return parts.slice(0, -1).join('-');
}

export function resolveEnglishAudioManifestItem(
  manifest: EnglishAudioManifest | null | undefined,
  sourceType: EnglishAudioSourceType,
  sourceId: string,
  lessonId?: number,
): EnglishAudioManifestMatch | null {
  const exactKey = getManifestKey(sourceType, sourceId);
  const exactItem = manifest?.items?.[exactKey];
  if (exactItem) {
    return { item: exactItem, matchType: 'exact' };
  }

  const sourceSlug = getSourceSlug(sourceId);
  if (!sourceSlug || !manifest?.items) return null;

  const candidates = Object.values(manifest.items).filter(
    (item) => item.sourceType === sourceType && item.sourceId.startsWith(`${sourceSlug}-`),
  );

  if (!candidates.length) return null;

  const lessonCandidates = typeof lessonId === 'number' ? candidates.filter((item) => Number(item.lessonId) === lessonId) : [];
  const sortedCandidates = (lessonCandidates.length ? lessonCandidates : candidates).slice().sort((a, b) =>
    a.sourceId.localeCompare(b.sourceId),
  );

  return {
    item: sortedCandidates[0],
    matchType: 'slug',
  };
}

async function readEnglishAudioManifest() {
  if (manifestCache) return manifestCache;
  if (!manifestPromise) {
    manifestPromise = fetch(MANIFEST_URL, { cache: 'no-store' })
      .then(async (response) => {
        if (!response.ok) return null;
        return (await response.json()) as EnglishAudioManifest;
      })
      .catch(() => null)
      .then((manifest) => {
        manifestCache = manifest;
        return manifest;
      });
  }
  return manifestPromise;
}

export async function getEnglishAudioManifest() {
  return readEnglishAudioManifest();
}

export function getEnglishAudioUrlFromManifest(
  manifest: EnglishAudioManifest | null | undefined,
  sourceType: EnglishAudioSourceType,
  sourceId: string,
  lessonId?: number,
) {
  return resolveEnglishAudioManifestItem(manifest, sourceType, sourceId, lessonId)?.item.url ?? null;
}

function stopCurrentAudio(resolvePlayback = false) {
  if (currentAudioResolve) {
    const resolve = currentAudioResolve;
    currentAudioResolve = null;
    resolve(resolvePlayback);
  }

  if (currentAudio) {
    currentAudio.audio.pause();
    currentAudio.audio.currentTime = 0;
    currentAudio = null;
    emitPlaybackChange();
  }
}

async function playEnglishAudioUrlOnce(url: string, playbackKey: string) {
  try {
    const audio = new Audio(url);
    audio.preload = 'auto';
    currentAudio = {
      key: playbackKey,
      url,
      audio,
    };
    emitPlaybackChange();

    return await new Promise<boolean>((resolve) => {
      let settled = false;
      currentAudioResolve = (value: boolean) => {
        if (settled) return;
        settled = true;
        if (currentAudio?.audio === audio) currentAudio = null;
        currentAudioResolve = null;
        emitPlaybackChange();
        resolve(value);
      };

      audio.onended = () => {
        if (currentAudioResolve) currentAudioResolve(true);
      };
      audio.onerror = () => {
        if (currentAudioResolve) currentAudioResolve(false);
      };

      void audio.play().catch(() => {
        if (currentAudioResolve) currentAudioResolve(false);
      });
    });
  } catch {
    stopCurrentAudio(false);
    return false;
  }
}

async function playEnglishAudioUrl(url: string, playbackKey: string) {
  if (currentAudio?.key === playbackKey) {
    stopCurrentAudio(false);
    return false;
  }

  stopCurrentAudio(false);
  return playEnglishAudioUrlOnce(url, playbackKey);
}

export function stopEnglishAudioPlayback() {
  stopCurrentAudio(false);
}

export async function playEnglishAudio(sourceType: EnglishAudioSourceType, sourceId: string, lessonId?: number) {
  const manifest = await readEnglishAudioManifest();
  const url = getEnglishAudioUrlFromManifest(manifest, sourceType, sourceId, lessonId);
  if (!url) return false;
  return playEnglishAudioUrl(url, getPlaybackKey(sourceType, sourceId, lessonId));
}

export async function playEnglishAudioSequence(items: EnglishAudioSourceRef[], playbackKey?: string) {
  const manifest = await readEnglishAudioManifest();
  if (!manifest) return false;

  const sequencePlaybackKey = playbackKey ?? getSequencePlaybackKey(items);
  if (currentAudio?.key === sequencePlaybackKey) {
    stopCurrentAudio(false);
    return false;
  }

  stopCurrentAudio(false);

  let playedAny = false;
  for (const item of items) {
    const url = getEnglishAudioUrlFromManifest(manifest, item.sourceType, item.sourceId, item.lessonId);
    if (!url) continue;
    const played = await playEnglishAudioUrlOnce(url, sequencePlaybackKey);
    if (!played) break;
    playedAny = true;
  }

  return playedAny;
}

export function useEnglishAudio(sourceType: EnglishAudioSourceType, sourceId: string, lessonId?: number) {
  const [manifest, setManifest] = useState<EnglishAudioManifest | null>(manifestCache);
  const [isLoading, setIsLoading] = useState(!manifestCache);
  const [playbackVersion, setPlaybackVersion] = useState(0);

  useEffect(() => {
    let cancelled = false;
    void readEnglishAudioManifest().then((nextManifest) => {
      if (cancelled) return;
      setManifest(nextManifest);
      setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeEnglishAudioPlayback(() => setPlaybackVersion((version) => version + 1));
    return () => {
      unsubscribe();
    };
  }, []);

  const audioUrl = useMemo(
    () => getEnglishAudioUrlFromManifest(manifest, sourceType, sourceId, lessonId),
    [lessonId, manifest, sourceId, sourceType],
  );

  const resolvedMatch = useMemo(
    () => resolveEnglishAudioManifestItem(manifest, sourceType, sourceId, lessonId),
    [lessonId, manifest, sourceId, sourceType],
  );

  const playbackKey = useMemo(() => getPlaybackKey(sourceType, sourceId, lessonId), [lessonId, sourceId, sourceType]);
  const isPlaying = currentAudio?.key === playbackKey && playbackVersion >= 0;

  useEffect(() => {
    if (isLoading || audioUrl) return;
    const meta = import.meta as ImportMeta & { env?: { DEV?: boolean } };
    if (meta.env?.DEV) {
      console.warn(
        `[EnglishAudio] missing audio for sourceType=${sourceType} sourceId=${sourceId}${
          typeof lessonId === 'number' ? ` lessonId=${lessonId}` : ''
        }`,
      );
    }
  }, [audioUrl, isLoading, lessonId, sourceId, sourceType]);

  useEffect(() => {
    if (!resolvedMatch || resolvedMatch.matchType === 'exact') return;
    const meta = import.meta as ImportMeta & { env?: { DEV?: boolean } };
    if (meta.env?.DEV) {
      console.info(
        `[EnglishAudio] fallback match sourceType=${sourceType} sourceId=${sourceId} resolvedSourceId=${resolvedMatch.item.sourceId}${
          typeof lessonId === 'number' ? ` lessonId=${lessonId}` : ''
        }`,
      );
    }
  }, [lessonId, resolvedMatch, sourceId, sourceType]);

  const play = useCallback(async () => {
    if (audioUrl) {
      return playEnglishAudio(sourceType, sourceId, lessonId);
    }

    const nextManifest = await readEnglishAudioManifest();
    const nextUrl = getEnglishAudioUrlFromManifest(nextManifest, sourceType, sourceId, lessonId);
    if (!nextUrl) return false;
    return playEnglishAudio(sourceType, sourceId, lessonId);
  }, [audioUrl, lessonId, sourceId, sourceType]);

  return {
    audioUrl,
    resolvedSourceId: resolvedMatch?.item.sourceId ?? null,
    matchType: resolvedMatch?.matchType ?? null,
    isLoading,
    hasAudio: Boolean(audioUrl),
    isPlaying,
    play,
  };
}

export function useEnglishAudioSequence(items: EnglishAudioSourceRef[], playbackKey: string) {
  const [manifest, setManifest] = useState<EnglishAudioManifest | null>(manifestCache);
  const [isLoading, setIsLoading] = useState(!manifestCache);
  const [playbackVersion, setPlaybackVersion] = useState(0);

  useEffect(() => {
    let cancelled = false;
    void readEnglishAudioManifest().then((nextManifest) => {
      if (cancelled) return;
      setManifest(nextManifest);
      setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeEnglishAudioPlayback(() => setPlaybackVersion((version) => version + 1));
    return () => {
      unsubscribe();
    };
  }, []);

  const resolvedItems = useMemo(
    () =>
      items
        .map((item) => resolveEnglishAudioManifestItem(manifest, item.sourceType, item.sourceId, item.lessonId))
        .filter((item): item is EnglishAudioManifestMatch => Boolean(item)),
    [items, manifest],
  );

  const hasAudio = resolvedItems.length > 0;
  const resolvedMatch = resolvedItems[0] ?? null;
  const isPlaying = currentAudio?.key === playbackKey && playbackVersion >= 0;

  useEffect(() => {
    if (isLoading || hasAudio) return;
    const meta = import.meta as ImportMeta & { env?: { DEV?: boolean } };
    if (meta.env?.DEV) {
      console.warn(`[EnglishAudio] missing audio sequence playbackKey=${playbackKey}`);
    }
  }, [hasAudio, isLoading, playbackKey]);

  const play = useCallback(async () => playEnglishAudioSequence(items, playbackKey), [items, playbackKey]);

  return {
    audioUrl: resolvedMatch?.item.url ?? null,
    resolvedSourceId: resolvedMatch?.item.sourceId ?? null,
    matchType: resolvedMatch?.matchType ?? null,
    isLoading,
    hasAudio,
    isPlaying,
    play,
  };
}
