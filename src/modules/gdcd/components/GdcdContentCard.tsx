import { CheckCircle2, HeartHandshake, Lightbulb, NotebookText, Sparkles } from 'lucide-react';
import type { GdcdLessonCard } from '../../../data/grade6/gdcd';

type Props = {
  card: GdcdLessonCard;
  index: number;
  total: number;
};

const cardMeta = {
  intro: { label: 'Mở đầu', icon: Sparkles, tone: 'border-violet-100 bg-violet-50/70 text-violet-900' },
  explain: { label: 'Giải thích', icon: NotebookText, tone: 'border-rose-100 bg-rose-50/70 text-rose-900' },
  example: { label: 'Tình huống', icon: HeartHandshake, tone: 'border-lime-100 bg-lime-50/70 text-lime-900' },
  tip: { label: 'Gợi ý mềm', icon: Lightbulb, tone: 'border-sky-100 bg-sky-50/70 text-sky-900' },
  mini_check: { label: 'Tự kiểm tra', icon: CheckCircle2, tone: 'border-emerald-100 bg-emerald-50/70 text-emerald-900' },
} satisfies Record<GdcdLessonCard['cardType'], { label: string; icon: typeof Sparkles; tone: string }>;

export function GdcdContentCard({ card, index, total }: Props) {
  const meta = cardMeta[card.cardType];
  const Icon = meta.icon;

  return (
    <article className={`w-full max-w-full min-w-0 rounded-3xl border p-5 shadow-sm ${meta.tone}`}>
      <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
        <p className="inline-flex min-w-0 items-center gap-2 text-xs font-black uppercase tracking-[0.14em] [overflow-wrap:anywhere]">
          <Icon className="h-4 w-4 shrink-0" />
          {meta.label}
        </p>
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-black">{index + 1}/{total}</span>
      </div>
      <h3 className="mt-3 text-xl font-black text-slate-950 [overflow-wrap:anywhere]">{card.title}</h3>
      <p className="mt-2 whitespace-pre-line text-sm font-semibold leading-7 [overflow-wrap:anywhere]">{card.content}</p>
    </article>
  );
}
