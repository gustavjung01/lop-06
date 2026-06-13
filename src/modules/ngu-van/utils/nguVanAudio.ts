import { useCallback, useEffect, useMemo, useState } from 'react';

export type NguVanAudioSourceType =
  | 'ngu-van-lesson-title'
  | 'ngu-van-lesson-summary'
  | 'ngu-van-content-card';

export type NguVanAudioSourceRef = {
  sourceType: NguVanAudioSourceType;
  sourceId: string;
  lessonId?: number;
};

export type NguVanAudioManifestItem = {
  sourceType: NguVanAudioSourceType;
  sourceId: string;
  lessonId: number;
  r2ObjectKey: string;
  url: string;
};

export type NguVanAudioManifest = {
  version: string;
  generatedAt: string;
  profileId: string;
  language: 'vi';
  subject: 'ngu-van';
  voice: string;
  baseUrl: string;
  baseR2Path: string;
  totalItems: number;
  items: Record<string, NguVanAudioManifestItem>;
};

export type NguVanAudioManifestMatch = {
  item: NguVanAudioManifestItem;
  matchType: 'exact';
};

const MANIFEST_URL = 'audio/tts/manifest.json?v=ngu-van-audio-pilot';

let manifestPromise: Promise<NguVanAudioManifest | null> | null = null;
let manifestCache: NguVanAudioManifest | null = null;

type PlaybackState = {
  key: string;
  url: string;
  audio: HTMLAudioElement;
};

let currentAudio: PlaybackState | null = null;
let currentAudioResolve: ((value: boolean) => void) | null = null;
const playbackListeners = new Set<() => void>();

function emitPlaybackChange() {
  playbackListeners.forEach((listener) => listener());
}

function getPlaybackKey(sourceType: NguVanAudioSourceType, sourceId: string, lessonId?: number) {
  return `${sourceType}:${typeof lessonId === 'number' ? lessonId : 'none'}:${sourceId}`;
}

function getManifestKey(sourceType: NguVanAudioSourceType, sourceId: string) {
  return `${sourceType}:${sourceId}`;
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

function attachAudioEvents(audio: HTMLAudioElement) {
  audio.onended = () => {
    if (currentAudioResolve) currentAudioResolve(true);
  };
  audio.onerror = () => {
    if (currentAudioResolve) currentAudioResolve(false);
  };
}

async function playAudioUrlOnce(url: string, playbackKey: string) {
  try {
    const audio = new Audio(url);
    audio.preload = 'auto';
    currentAudio = { key: playbackKey, url, audio };
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

      attachAudioEvents(audio);
      void audio.play().catch(() => {
        if (currentAudioResolve) currentAudioResolve(false);
      });
    });
  } catch {
    stopCurrentAudio(false);
    return false;
  }
}

async function playAudioUrl(url: string, playbackKey: string) {
  if (currentAudio?.key === playbackKey) {
    stopCurrentAudio(false);
    return false;
  }

  stopCurrentAudio(false);
  return playAudioUrlOnce(url, playbackKey);
}

async function readNguVanAudioManifest() {
  if (manifestCache) return manifestCache;
  if (!manifestPromise) {
    manifestPromise = fetch(MANIFEST_URL, { cache: 'no-store' })
      .then(async (response) => {
        if (!response.ok) return null;
        return (await response.json()) as NguVanAudioManifest;
      })
      .catch(() => null)
      .then((manifest) => {
        manifestCache = manifest;
        return manifest;
      });
  }
  return manifestPromise;
}

export function subscribeNguVanAudioPlayback(listener: () => void) {
  playbackListeners.add(listener);
  return () => playbackListeners.delete(listener);
}

export function getNguVanAudioPlaybackKey() {
  return currentAudio?.key ?? null;
}

export function resolveNguVanAudioManifestItem(
  manifest: NguVanAudioManifest | null | undefined,
  sourceType: NguVanAudioSourceType,
  sourceId: string,
) {
  const key = getManifestKey(sourceType, sourceId);
  return manifest?.items?.[key] ?? null;
}

export function getNguVanAudioUrlFromManifest(
  manifest: NguVanAudioManifest | null | undefined,
  sourceType: NguVanAudioSourceType,
  sourceId: string,
) {
  return resolveNguVanAudioManifestItem(manifest, sourceType, sourceId)?.url ?? null;
}

export function stopNguVanAudioPlayback() {
  stopCurrentAudio(false);
}

export async function playNguVanAudio(sourceType: NguVanAudioSourceType, sourceId: string, lessonId?: number) {
  const manifest = await readNguVanAudioManifest();
  const item = resolveNguVanAudioManifestItem(manifest, sourceType, sourceId);
  if (!item) return false;
  if (typeof lessonId === 'number' && Number(item.lessonId) !== lessonId) {
    return false;
  }
  return playAudioUrl(item.url, getPlaybackKey(sourceType, sourceId, lessonId ?? item.lessonId));
}

export function useNguVanAudio(sourceType: NguVanAudioSourceType, sourceId: string, lessonId?: number) {
  const [manifest, setManifest] = useState<NguVanAudioManifest | null>(manifestCache);
  const [isLoading, setIsLoading] = useState(!manifestCache);
  const [playbackVersion, setPlaybackVersion] = useState(0);

  useEffect(() => {
    let cancelled = false;
    void readNguVanAudioManifest().then((nextManifest) => {
      if (cancelled) return;
      setManifest(nextManifest);
      setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeNguVanAudioPlayback(() => setPlaybackVersion((version) => version + 1));
    return () => {
      unsubscribe();
    };
  }, []);

  const resolvedItem = useMemo(
    () => resolveNguVanAudioManifestItem(manifest, sourceType, sourceId),
    [manifest, sourceId, sourceType],
  );

  const playbackKey = useMemo(
    () => getPlaybackKey(sourceType, sourceId, lessonId ?? resolvedItem?.lessonId),
    [lessonId, resolvedItem?.lessonId, sourceId, sourceType],
  );

  const isPlaying = currentAudio?.key === playbackKey && playbackVersion >= 0;

  useEffect(() => {
    if (isLoading || resolvedItem) return;
    const meta = import.meta as ImportMeta & { env?: { DEV?: boolean } };
    if (meta.env?.DEV) {
      console.warn(
        `[NguVanAudio] missing audio for sourceType=${sourceType} sourceId=${sourceId}${
          typeof lessonId === 'number' ? ` lessonId=${lessonId}` : ''
        }`,
      );
    }
  }, [isLoading, lessonId, resolvedItem, sourceId, sourceType]);

  const play = useCallback(async () => {
    if (resolvedItem) {
      return playNguVanAudio(sourceType, sourceId, lessonId ?? resolvedItem.lessonId);
    }

    const nextManifest = await readNguVanAudioManifest();
    const nextItem = resolveNguVanAudioManifestItem(nextManifest, sourceType, sourceId);
    if (!nextItem) return false;
    return playNguVanAudio(sourceType, sourceId, lessonId ?? nextItem.lessonId);
  }, [lessonId, resolvedItem, sourceId, sourceType]);

  return {
    audioUrl: resolvedItem?.url ?? null,
    resolvedSourceId: resolvedItem?.sourceId ?? null,
    matchType: resolvedItem ? ('exact' as const) : null,
    isLoading,
    hasAudio: Boolean(resolvedItem),
    isPlaying,
    play,
  };
}
