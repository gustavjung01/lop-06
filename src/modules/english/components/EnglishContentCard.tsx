import { AlertTriangle, BookOpen, HelpCircle, Lightbulb, RotateCcw, Sparkles, Star } from 'lucide-react';

import type { EnglishLessonCard as EnglishLessonCardData } from '../../../data/grade6/tieng-anh';
import { EnglishAudioButton } from './EnglishAudioButton';

type EnglishContentCardProps = {
  card: EnglishLessonCardData;
  index: number;
  total: number;
};

const cardMeta = {
  intro: { label: 'Giới thiệu', icon: BookOpen, border: 'border-indigo-200', bg: 'bg-indigo-50', text: 'text-indigo-700' },
  explain: { label: 'Giải thích', icon: Lightbulb, border: 'border-amber-200', bg: 'bg-amber-50', text: 'text-amber-700' },
  example: { label: 'Ví dụ', icon: Star, border: 'border-emerald-200', bg: 'bg-emerald-50', text: 'text-emerald-700' },
  tip: { label: 'Mẹo nhớ', icon: Sparkles, border: 'border-sky-200', bg: 'bg-sky-50', text: 'text-sky-700' },
  common_mistake: { label: 'Lỗi hay gặp', icon: AlertTriangle, border: 'border-rose-200', bg: 'bg-rose-50', text: 'text-rose-700' },
  mini_check: { label: 'Kiểm tra nhanh', icon: HelpCircle, border: 'border-violet-200', bg: 'bg-violet-50', text: 'text-violet-700' },
  recap: { label: 'Tóm tắt', icon: RotateCcw, border: 'border-slate-200', bg: 'bg-slate-100', text: 'text-slate-700' },
};

export function EnglishContentCard({ card, index, total }: EnglishContentCardProps) {
  const meta = cardMeta[card.cardType];
  const Icon = meta.icon;

  return (
    <article className={`w-full max-w-full min-w-0 rounded-2xl border bg-white p-4 shadow-sm ${meta.border}`}>
      <div className="flex min-w-0 items-start gap-3">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${meta.bg} ${meta.text}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-2.5 py-1 text-xs font-black ${meta.bg} ${meta.text}`}>
                  {meta.label}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {index + 1}/{total}
                </span>
              </div>
              <h3 className="mt-2 text-base font-black text-slate-950 [overflow-wrap:anywhere]">{card.title}</h3>
            </div>
            <EnglishAudioButton sourceType="lesson-card" sourceId={card.sourceId} lessonId={card.lessonId} label={card.title} />
          </div>
          <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-700 [overflow-wrap:anywhere]">
            {card.content}
          </p>
        </div>
      </div>
    </article>
  );
}
