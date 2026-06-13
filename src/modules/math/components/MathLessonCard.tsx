import { BookOpen, CheckCircle2, ChevronRight, Clock, HelpCircle, Lock } from 'lucide-react';

import type { MathLesson } from '../../../data/grade6/toan';
import { MathProgressPill } from './MathProgressPill';

type MathLessonCardProps = {
  lesson: MathLesson;
  questionCount: number;
  onSelect: (lessonId: number) => void;
  isLocked?: boolean;
};

export function MathLessonCard({ lesson, questionCount, onSelect, isLocked = false }: MathLessonCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(lesson.id)}
      className={`group w-full max-w-full min-w-0 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg ${isLocked ? 'opacity-70 bg-slate-50' : ''}`}
    >
      <div className="flex min-w-0 items-start gap-3">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${isLocked ? 'bg-slate-200 text-slate-500' : 'bg-blue-50 text-blue-700'}`}>
          {isLocked ? <Lock className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {!isLocked && <MathProgressPill label="Sẵn sàng" tone="green" />}
            <MathProgressPill label="phút" value={lesson.estimatedMinutes} tone="blue" />
            <MathProgressPill label="câu hỏi" value={questionCount} tone="amber" />
          </div>
          <h3 className="mt-3 text-base font-black leading-snug text-slate-950 [overflow-wrap:anywhere]">{lesson.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 [overflow-wrap:anywhere]">{lesson.summarySimple}</p>
          <div className="mt-3 flex min-w-0 flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-500">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              Bài {lesson.sortOrder}
            </span>
            {isLocked ? (
              <span className="inline-flex items-center gap-1 text-slate-500 font-bold">
                <Lock className="h-3.5 w-3.5" />
                Mở bằng key
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-blue-700">
                <HelpCircle className="h-3.5 w-3.5" />
                Vào bài
                <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </span>
            )}
          </div>
        </div>
        {!isLocked && <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />}
      </div>
    </button>
  );
}
