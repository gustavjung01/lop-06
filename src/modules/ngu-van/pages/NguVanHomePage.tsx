import { ArrowLeft, BookOpenText, Layers3 } from 'lucide-react';
import { useState } from 'react';
import { getActiveNguVanLessons, getNguVanLessonById, getNguVanLessonQuestions, nguVanSeed } from '../../../data/grade6/ngu-van';
import { NguVanLessonCard } from '../components/NguVanLessonCard';
import { NguVanLessonDetailPage } from './NguVanLessonDetailPage';
import { NguVanPracticePage } from './NguVanPracticePage';

type NguVanPageView = 'home' | 'detail' | 'practice';
type NguVanHomePageProps = { onBackToDashboard: () => void; };
export function NguVanHomePage({ onBackToDashboard }: NguVanHomePageProps) {
  const lessons = getActiveNguVanLessons();
  const [view, setView] = useState<NguVanPageView>('home');
  const [selectedLessonId, setSelectedLessonId] = useState(lessons[0]?.id ?? 1);
  const selectedLesson = getNguVanLessonById(selectedLessonId) ?? lessons[0];
  if (view === 'detail' && selectedLesson) return <NguVanLessonDetailPage lesson={selectedLesson} onBack={() => setView('home')} onPractice={(lessonId) => { setSelectedLessonId(lessonId); setView('practice'); }} />;
  if (view === 'practice' && selectedLesson) return <NguVanPracticePage lesson={selectedLesson} onBackToLesson={(lessonId) => { setSelectedLessonId(lessonId); setView('detail'); }} />;
  return (
    <section className="mx-auto w-full max-w-6xl min-w-0 px-4 py-8 sm:px-6 lg:px-8">
      <button type="button" onClick={onBackToDashboard} className="mb-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"><ArrowLeft className="h-4 w-4" />Dashboard</button>
      <div className="w-full max-w-full min-w-0 rounded-3xl border border-rose-100 bg-gradient-to-r from-rose-50 via-white to-orange-50 p-5">
        <div className="flex min-w-0 flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-rose-600 text-white shadow-lg shadow-rose-200"><BookOpenText className="h-7 w-7" /></div>
            <div className="min-w-0"><p className="text-sm font-black uppercase tracking-[0.16em] text-rose-700">Môn học đã mở</p><h1 className="mt-1 text-3xl font-black text-slate-950 [overflow-wrap:anywhere]">{nguVanSeed.subjectTitle}</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 [overflow-wrap:anywhere]">Bộ bài học đã chuẩn hoá theo đọc hiểu, tiếng Việt, viết, nói và nghe; có ngữ liệu ngắn, ghi nhớ và kho câu hỏi luyện tập.</p></div>
          </div>
          <div className="max-w-full min-w-0 rounded-2xl bg-white/80 px-4 py-3 text-sm font-bold text-slate-700 ring-1 ring-rose-100 [overflow-wrap:anywhere]">{lessons.length} bài - {nguVanSeed.questions.length} câu hỏi</div>
        </div>
      </div>
      <div className="mt-6"><div className="mb-4 flex min-w-0 items-center gap-2"><Layers3 className="h-5 w-5 shrink-0 text-rose-700" /><h2 className="text-xl font-black text-slate-950 [overflow-wrap:anywhere]">Lộ trình: {nguVanSeed.subjectTitle}</h2></div><div className="grid min-w-0 gap-4 md:grid-cols-[repeat(2,minmax(0,1fr))]">{lessons.map((lesson) => <NguVanLessonCard key={lesson.id} lesson={lesson} questionCount={getNguVanLessonQuestions(lesson.id).length} onSelect={(lessonId) => { setSelectedLessonId(lessonId); setView('detail'); }} />)}</div></div>
    </section>
  );
}
