import { FlaskConical } from 'lucide-react';

import type { KhtnLessonCard as KhtnContentCardData } from '../../../data/grade6/khtn';

type KhtnContentCardProps = {
  card: KhtnContentCardData;
  index: number;
  total: number;
};

function getCardTone(cardType: string) {
  if (cardType === 'intro') return 'border-emerald-100 bg-emerald-50/70 text-emerald-800';
  if (cardType === 'example') return 'border-amber-100 bg-amber-50/70 text-amber-800';
  if (cardType === 'common_mistake') return 'border-rose-100 bg-rose-50/70 text-rose-800';
  if (cardType === 'mini_check') return 'border-sky-100 bg-sky-50/70 text-sky-800';
  return 'border-slate-200 bg-white text-slate-700';
}

export function KhtnContentCard({ card, index, total }: KhtnContentCardProps) {
  return (
    <article className={`w-full max-w-full min-w-0 rounded-3xl border p-5 shadow-sm ${getCardTone(card.cardType)}`}>
      <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
        <p className="inline-flex min-w-0 items-center gap-2 text-xs font-black uppercase tracking-[0.14em] [overflow-wrap:anywhere]">
          <FlaskConical className="h-4 w-4 shrink-0" />
          Thẻ {index + 1}/{total}
        </p>
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-black text-slate-600 ring-1 ring-black/5">
          {card.cardType.replace(/_/g, ' ')}
        </span>
      </div>
      <h3 className="mt-3 text-xl font-black text-slate-950 [overflow-wrap:anywhere]">{card.title}</h3>
      <p className="mt-2 text-sm font-semibold leading-7 [overflow-wrap:anywhere]">{card.content}</p>
    </article>
  );
}
