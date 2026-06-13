import { useCallback, useEffect, useState } from 'react';

export type SoundEvent =
  | 'ui_tap_soft'
  | 'answer_correct_soft'
  | 'answer_wrong_gentle'
  | 'hint_reveal'
  | 'practice_complete'
  | 'lesson_complete'
  | 'badge_unlock'
  | 'notify_soft';

export type SoundVolume = 'off' | 'low' | 'medium';

export type SoundSettings = {
  enabled: boolean;
  volume: SoundVolume;
};

export const SOUND_ENABLED_KEY = 'lop6.sound.enabled';
export const SOUND_VOLUME_KEY = 'lop6.sound.volume';

const volumeMap: Record<SoundVolume, number> = {
  off: 0,
  low: 0.25,
  medium: 0.4,
};

let audioContext: AudioContext | null = null;
const lastPlayedAt = new Map<SoundEvent, number>();

function getAudioContext() {
  if (typeof window === 'undefined') return null;

  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) return null;

  audioContext ??= new AudioContextConstructor();
  return audioContext;
}

export function getSoundSettings(): SoundSettings {
  if (typeof window === 'undefined') {
    return { enabled: true, volume: 'low' };
  }

  const enabledRaw = window.localStorage.getItem(SOUND_ENABLED_KEY);
  const volumeRaw = window.localStorage.getItem(SOUND_VOLUME_KEY);
  const volume: SoundVolume = volumeRaw === 'off' || volumeRaw === 'medium' || volumeRaw === 'low' ? volumeRaw : 'low';

  return {
    enabled: enabledRaw === null ? true : enabledRaw === 'true',
    volume,
  };
}

export function saveSoundSettings(settings: SoundSettings) {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(SOUND_ENABLED_KEY, String(settings.enabled));
  window.localStorage.setItem(SOUND_VOLUME_KEY, settings.volume);
}

function playTone(
  context: AudioContext,
  at: number,
  frequency: number,
  duration: number,
  volume: number,
  type: OscillatorType = 'sine',
) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const fade = Math.min(0.035, duration / 4);

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, at);
  gain.gain.setValueAtTime(0.0001, at);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, volume), at + fade);
  gain.gain.exponentialRampToValueAtTime(0.0001, at + duration);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(at);
  oscillator.stop(at + duration + 0.02);
}

function playPattern(event: SoundEvent, context: AudioContext, volume: number) {
  const now = context.currentTime;
  const soft = volume * 0.35;

  switch (event) {
    case 'ui_tap_soft':
      playTone(context, now, 520, 0.08, soft * 0.45, 'sine');
      break;
    case 'answer_correct_soft':
      playTone(context, now, 523.25, 0.13, soft, 'sine');
      playTone(context, now + 0.09, 659.25, 0.16, soft * 0.9, 'sine');
      playTone(context, now + 0.18, 783.99, 0.18, soft * 0.65, 'triangle');
      break;
    case 'answer_wrong_gentle':
      playTone(context, now, 349.23, 0.16, soft * 0.75, 'sine');
      playTone(context, now + 0.12, 293.66, 0.2, soft * 0.52, 'sine');
      break;
    case 'hint_reveal':
      playTone(context, now, 440, 0.1, soft * 0.5, 'triangle');
      playTone(context, now + 0.08, 587.33, 0.14, soft * 0.45, 'triangle');
      break;
    case 'practice_complete':
      playTone(context, now, 392, 0.14, soft * 0.8, 'sine');
      playTone(context, now + 0.1, 523.25, 0.18, soft * 0.82, 'sine');
      playTone(context, now + 0.22, 659.25, 0.25, soft * 0.6, 'triangle');
      break;
    case 'lesson_complete':
      playTone(context, now, 329.63, 0.16, soft * 0.75, 'sine');
      playTone(context, now + 0.12, 493.88, 0.18, soft * 0.7, 'sine');
      playTone(context, now + 0.24, 659.25, 0.26, soft * 0.58, 'triangle');
      break;
    case 'badge_unlock':
      playTone(context, now, 659.25, 0.12, soft * 0.7, 'triangle');
      playTone(context, now + 0.09, 880, 0.16, soft * 0.62, 'triangle');
      playTone(context, now + 0.2, 1174.66, 0.22, soft * 0.42, 'sine');
      break;
    case 'notify_soft':
      playTone(context, now, 587.33, 0.1, soft * 0.45, 'sine');
      playTone(context, now + 0.08, 783.99, 0.13, soft * 0.36, 'sine');
      break;
  }
}

export async function playSoundEvent(event: SoundEvent) {
  const settings = getSoundSettings();
  const volume = settings.enabled ? volumeMap[settings.volume] : 0;
  if (volume <= 0) return;

  const now = Date.now();
  const lastEventAt = lastPlayedAt.get(event) ?? 0;
  if (now - lastEventAt < 100) return;
  lastPlayedAt.set(event, now);

  try {
    const context = getAudioContext();
    if (!context) return;

    if (context.state === 'suspended') {
      await context.resume();
    }

    playPattern(event, context, volume);
  } catch {
    // Audio can be blocked by the browser before a user gesture. Keep the app quiet and stable.
  }
}

export function useSound() {
  const [settings, setSettings] = useState<SoundSettings>(() => getSoundSettings());

  useEffect(() => {
    saveSoundSettings(settings);
  }, [settings]);

  const updateSettings = useCallback((next: SoundSettings) => {
    setSettings(next);
    saveSoundSettings(next);
  }, []);

  const setEnabled = useCallback((enabled: boolean) => {
    setSettings((current) => {
      const next = { ...current, enabled, volume: enabled && current.volume === 'off' ? 'low' : current.volume };
      saveSoundSettings(next);
      return next;
    });
  }, []);

  const setVolume = useCallback((volume: SoundVolume) => {
    setSettings(() => {
      const next = { enabled: volume !== 'off', volume };
      saveSoundSettings(next);
      return next;
    });
  }, []);

  const play = useCallback((event: SoundEvent) => {
    void playSoundEvent(event);
  }, []);

  return {
    play,
    setEnabled,
    setVolume,
    settings,
    updateSettings,
  };
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
