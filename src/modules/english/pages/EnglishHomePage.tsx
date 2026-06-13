import { ArrowLeft, Languages, Layers3 } from 'lucide-react';
import { useState } from 'react';

import {
  englishSeed,
  getActiveEnglishLessons,
  getEnglishLessonById,
  getEnglishLessonQuestions,
} from '../../../data/grade6/tieng-anh';
import { EnglishLessonCard } from '../components/EnglishLessonCard';
import { EnglishLessonDetailPage } from './EnglishLessonDetailPage';
import { EnglishPracticePage } from './EnglishPracticePage';

type EnglishPageView = 'home' | 'detail' | 'practice';

type EnglishHomePageProps = {
  onBackToDashboard: () => void;
};

export function EnglishHomePage({ onBackToDashboard }: EnglishHomePageProps) {
  const lessons = getActiveEnglishLessons();
  const [view, setView] = useState<EnglishPageView>('home');
  const [selectedLessonId, setSelectedLessonId] = useState(lessons[0]?.id ?? 1);
  const selectedLesson = getEnglishLessonById(selectedLessonId) ?? lessons[0];

  if (view === 'detail' && selectedLesson) {
    return (
      <EnglishLessonDetailPage
        lesson={selectedLesson}
        onBack={() => setView('home')}
        onPractice={(lessonId) => {
          setSelectedLessonId(lessonId);
          setView('practice');
        }}
      />
    );
  }

  if (view === 'practice' && selectedLesson) {
    return (
      <EnglishPracticePage
        lesson={selectedLesson}
        onBackToLesson={(lessonId) => {
          setSelectedLessonId(lessonId);
          setView('detail');
        }}
      />
    );
  }

  return (
    <section className="mx-auto w-full max-w-6xl min-w-0 px-4 py-8 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={onBackToDashboard}
        className="mb-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
      >
        <ArrowLeft className="h-4 w-4" />
        Dashboard
      </button>

      <div className="w-full max-w-full min-w-0 rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50 via-white to-sky-50 p-5">
        <div className="flex min-w-0 flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
              <Languages className="h-7 w-7" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-indigo-700">Môn học đã mở</p>
              <h1 className="mt-1 text-3xl font-black text-slate-950 [overflow-wrap:anywhere]">{englishSeed.subjectTitle}</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 [overflow-wrap:anywhere]">
                Bộ bài học đã chuẩn hoá theo unit, có từ vựng, ngữ pháp, mẫu giao tiếp và kho câu hỏi luyện tập ngắn.
              </p>
            </div>
          </div>
          <div className="max-w-full min-w-0 rounded-2xl bg-white/80 px-4 py-3 text-sm font-bold text-slate-700 ring-1 ring-indigo-100 [overflow-wrap:anywhere]">
            {lessons.length} bài - {englishSeed.questions.length} câu hỏi
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-4 flex min-w-0 items-center gap-2">
          <Layers3 className="h-5 w-5 shrink-0 text-indigo-700" />
          <h2 className="text-xl font-black text-slate-950 [overflow-wrap:anywhere]">Lộ trình: {englishSeed.subjectTitle}</h2>
        </div>
        <div className="grid min-w-0 gap-4 md:grid-cols-[repeat(2,minmax(0,1fr))]">
          {lessons.map((lesson) => (
            <EnglishLessonCard
              key={lesson.id}
              lesson={lesson}
              questionCount={getEnglishLessonQuestions(lesson.id).length}
              onSelect={(lessonId) => {
                setSelectedLessonId(lessonId);
                setView('detail');
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
