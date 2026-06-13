import { Loader2, Volume2 } from 'lucide-react';

import type { NguVanAudioSourceType } from '../utils/nguVanAudio';
import { useNguVanAudio } from '../utils/nguVanAudio';

type NguVanAudioButtonProps = {
  sourceType: NguVanAudioSourceType;
  sourceId: string;
  lessonId?: number;
  label: string;
  className?: string;
  compact?: boolean;
};

export function NguVanAudioButton({
  sourceType,
  sourceId,
  lessonId,
  label,
  className,
  compact = false,
}: NguVanAudioButtonProps) {
  const audioState = useNguVanAudio(sourceType, sourceId, lessonId);
  const { hasAudio, isLoading, isPlaying, play, resolvedSourceId, matchType } = audioState;

  if (!isLoading && !hasAudio) return null;

  const disabled = isLoading || !hasAudio;

  return (
    <button
      type="button"
      onClick={() => void play()}
      disabled={disabled}
      title={disabled ? 'Audio đang tải' : isPlaying ? `Dừng: ${label}` : `Nghe: ${label}`}
      aria-label={disabled ? 'Audio đang tải' : isPlaying ? `Dừng ${label}` : `Nghe ${label}`}
      aria-pressed={isPlaying}
      data-audio-source-type={sourceType}
      data-audio-source-id={sourceId}
      data-audio-resolved-source-id={resolvedSourceId ?? undefined}
      data-audio-match-type={matchType ?? undefined}
      className={[
        'inline-flex min-w-0 items-center justify-center gap-2 rounded-full border text-xs font-black transition',
        compact ? 'h-8 px-2.5' : 'h-9 px-3',
        disabled
          ? 'cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400'
          : isPlaying
            ? 'border-emerald-200 bg-emerald-100 text-emerald-800 shadow-sm'
            : 'border-rose-200 bg-rose-50 text-rose-700 hover:border-rose-300 hover:bg-rose-100 hover:text-rose-800',
        className ?? '',
      ].join(' ')}
    >
      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Volume2 className={`h-4 w-4 ${isPlaying ? 'animate-pulse' : ''}`} />}
      {compact ? null : <span className="hidden sm:inline">{isPlaying ? 'Đang nghe' : 'Nghe'}</span>}
    </button>
  );
}
