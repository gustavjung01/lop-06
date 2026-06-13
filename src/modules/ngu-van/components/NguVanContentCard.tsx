import { NotebookText } from 'lucide-react';

import type { NguVanLessonCard as NguVanContentCardData } from '../../../data/grade6/ngu-van';
import { NguVanAudioButton } from './NguVanAudioButton';

type NguVanContentCardProps = {
  card: NguVanContentCardData;
  index: number;
  total: number;
};

function getCardTone(cardType: string) {
  if (cardType === 'intro') return 'border-rose-100 bg-rose-50/70 text-rose-800';
  if (cardType === 'example') return 'border-amber-100 bg-amber-50/70 text-amber-800';
  if (cardType === 'common_mistake') return 'border-orange-100 bg-orange-50/70 text-orange-800';
  if (cardType === 'mini_check') return 'border-sky-100 bg-sky-50/70 text-sky-800';
  return 'border-slate-200 bg-white text-slate-700';
}

export function NguVanContentCard({ card, index, total }: NguVanContentCardProps) {
  return (
    <article className={`w-full max-w-full min-w-0 rounded-3xl border p-5 shadow-sm ${getCardTone(card.cardType)}`}>
      <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
        <p className="inline-flex min-w-0 items-center gap-2 text-xs font-black uppercase tracking-[0.14em] [overflow-wrap:anywhere]">
          <NotebookText className="h-4 w-4 shrink-0" />
          Thẻ {index + 1}/{total}
        </p>
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-black text-slate-600 ring-1 ring-black/5">
          {card.cardType.replace(/_/g, ' ')}
        </span>
      </div>

      <div className="mt-3 flex min-w-0 items-start justify-between gap-3">
        <h3 className="min-w-0 flex-1 text-xl font-black text-slate-950 [overflow-wrap:anywhere]">{card.title}</h3>
        <NguVanAudioButton
          sourceType="ngu-van-content-card"
          sourceId={card.sourceId}
          lessonId={card.lessonId}
          label={card.title}
          compact
          className="shrink-0"
        />
      </div>

      <p className="mt-2 whitespace-pre-line text-sm font-semibold leading-7 [overflow-wrap:anywhere]">{card.content}</p>
    </article>
  );
}
