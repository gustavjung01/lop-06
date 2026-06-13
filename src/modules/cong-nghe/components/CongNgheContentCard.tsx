import { CheckCircle2, Lightbulb, NotebookText, Sparkles, Wrench } from 'lucide-react';
import type { CongNgheLessonCard } from '../../../data/grade6/cong-nghe';

type Props = {
  card: CongNgheLessonCard;
  index: number;
  total: number;
};

const cardMeta = {
  intro: { label: 'Mở đầu', icon: Sparkles, tone: 'border-orange-100 bg-orange-50/70 text-orange-900' },
  explain: { label: 'Giải thích', icon: NotebookText, tone: 'border-amber-100 bg-amber-50/70 text-amber-900' },
  example: { label: 'Ví dụ', icon: Wrench, tone: 'border-lime-100 bg-lime-50/70 text-lime-900' },
  tip: { label: 'Mẹo an toàn', icon: Lightbulb, tone: 'border-sky-100 bg-sky-50/70 text-sky-900' },
  mini_check: { label: 'Tự kiểm tra', icon: CheckCircle2, tone: 'border-emerald-100 bg-emerald-50/70 text-emerald-900' },
} satisfies Record<CongNgheLessonCard['cardType'], { label: string; icon: typeof Sparkles; tone: string }>;

export function CongNgheContentCard({ card, index, total }: Props) {
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
