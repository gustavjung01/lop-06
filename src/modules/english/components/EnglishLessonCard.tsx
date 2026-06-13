import { BookOpen, ChevronRight, Clock, Languages } from 'lucide-react';

import type { EnglishLesson } from '../../../data/grade6/tieng-anh';

type EnglishLessonCardProps = {
  lesson: EnglishLesson;
  questionCount: number;
  onSelect: (lessonId: number) => void;
};

const lessonTypeLabel: Record<EnglishLesson['lessonType'], string> = {
  vocabulary: 'Từ vựng',
  grammar: 'Ngữ pháp',
  skills: 'Kĩ năng',
};

export function EnglishLessonCard({ lesson, questionCount, onSelect }: EnglishLessonCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(lesson.id)}
      className="group w-full max-w-full min-w-0 rounded-2xl border border-indigo-100 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg"
    >
      <div className="flex min-w-0 items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
          <Languages className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-black text-indigo-700">
              Unit {lesson.unitNumber}
            </span>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-black text-emerald-700">
              {lessonTypeLabel[lesson.lessonType]}
            </span>
            <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-black text-amber-700">
              {questionCount} câu
            </span>
          </div>
          <h3 className="mt-3 text-base font-black leading-snug text-slate-950 [overflow-wrap:anywhere]">
            {lesson.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 [overflow-wrap:anywhere]">
            {lesson.summarySimple}
          </p>
          <div className="mt-3 flex min-w-0 flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-500">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {lesson.estimatedMinutes} phút
            </span>
            <span className="inline-flex items-center gap-1 text-indigo-700">
              <BookOpen className="h-3.5 w-3.5" />
              Vào bài
              <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
