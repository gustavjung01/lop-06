import { CheckCircle2, Lightbulb, ListChecks, MonitorCog, Sparkles } from 'lucide-react';
import type { TinHocLessonCard as CardData } from '../../../data/grade6/tin-hoc';

type Props = {
  card: CardData;
  index: number;
  total: number;
};

const meta = {
  intro: {
    icon: Sparkles,
    label: 'Khởi động',
    style: 'border-cyan-100 bg-cyan-50/80 text-cyan-900',
  },
  explain: {
    icon: MonitorCog,
    label: 'Giải thích',
    style: 'border-sky-100 bg-sky-50/80 text-sky-900',
  },
  example: {
    icon: ListChecks,
    label: 'Ví dụ thao tác',
    style: 'border-emerald-100 bg-emerald-50/80 text-emerald-900',
  },
  tip: {
    icon: Lightbulb,
    label: 'Mẹo an toàn',
    style: 'border-amber-100 bg-amber-50/80 text-amber-900',
  },
  mini_check: {
    icon: CheckCircle2,
    label: 'Tự kiểm tra',
    style: 'border-indigo-100 bg-indigo-50/80 text-indigo-900',
  },
} satisfies Record<CardData['cardType'], { icon: typeof Sparkles; label: string; style: string }>;

export function TinHocContentCard({ card, index, total }: Props) {
  const item = meta[card.cardType];
  const Icon = item.icon;

  return (
    <article className={`w-full max-w-full min-w-0 rounded-3xl border p-5 shadow-sm ${item.style}`}>
      <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
        <p className="inline-flex min-w-0 items-center gap-2 text-xs font-black uppercase tracking-[0.14em] [overflow-wrap:anywhere]">
          <Icon className="h-4 w-4 shrink-0" />
          {item.label}
        </p>
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-black text-slate-600 ring-1 ring-black/5">
          Thẻ {index + 1}/{total}
        </span>
      </div>
      <h3 className="mt-3 text-xl font-black text-slate-950 [overflow-wrap:anywhere]">{card.title}</h3>
      <p className="mt-2 text-sm font-semibold leading-7 [overflow-wrap:anywhere]">{card.content}</p>
    </article>
  );
}
