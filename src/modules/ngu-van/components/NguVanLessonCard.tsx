import { BookOpenText, ChevronRight } from 'lucide-react';

import type { NguVanLesson } from '../../../data/grade6/ngu-van';

type NguVanLessonCardProps = { lesson: NguVanLesson; questionCount: number; onSelect: (lessonId: number) => void; };
function getDifficultyLabel(difficulty: NguVanLesson['difficulty']) { if (difficulty === 'easy') return 'Cơ bản'; if (difficulty === 'medium') return 'Vừa sức'; return 'Thử thách'; }
export function NguVanLessonCard({ lesson, questionCount, onSelect }: NguVanLessonCardProps) {
  return (
    <article className="w-full max-w-full min-w-0 rounded-3xl border border-rose-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex min-w-0 items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-lg shadow-rose-100"><BookOpenText className="h-6 w-6" /></div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-rose-700 [overflow-wrap:anywhere]">{lesson.skillType}</p>
          <h3 className="mt-1 text-lg font-black leading-snug text-slate-950 [overflow-wrap:anywhere]">{lesson.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 [overflow-wrap:anywhere]">{lesson.summarySimple}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-black text-rose-700">{getDifficultyLabel(lesson.difficulty)}</span>
        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black text-amber-700">{questionCount} câu hỏi</span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{lesson.estimatedMinutes} phút</span>
      </div>
      <button type="button" onClick={() => onSelect(lesson.id)} className="mt-4 inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-rose-700">
        Mở bài học <ChevronRight className="h-4 w-4" />
      </button>
    </article>
  );
}
