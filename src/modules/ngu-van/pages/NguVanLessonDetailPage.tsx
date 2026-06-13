import { ArrowLeft, BookOpenCheck, Clock, MessageSquareText, PlayCircle } from 'lucide-react';

import type { NguVanLesson } from '../../../data/grade6/ngu-van';
import { getNguVanLessonCards, getNguVanLessonQuestions } from '../../../data/grade6/ngu-van';
import { NguVanAudioButton } from '../components/NguVanAudioButton';
import { NguVanContentCard } from '../components/NguVanContentCard';

type NguVanLessonDetailPageProps = {
  lesson: NguVanLesson;
  onBack: () => void;
  onPractice: (lessonId: number) => void;
};

export function NguVanLessonDetailPage({ lesson, onBack, onPractice }: NguVanLessonDetailPageProps) {
  const cards = getNguVanLessonCards(lesson.id);
  const questions = getNguVanLessonQuestions(lesson.id);
  const keywordEntries = Object.entries(lesson.keywords).slice(0, 12);

  const lessonTitleSourceId = `${lesson.sourceId}-title`;
  const lessonSummarySourceId = `${lesson.sourceId}-summary`;
  const lessonSummaryText = lesson.focus || lesson.summarySimple || '';

  return (
    <section className="mx-auto w-full max-w-5xl min-w-0 px-4 py-8 sm:px-6 lg:px-8" data-audio-pilot="ngu-van-phase1">
      <button
        type="button"
        onClick={onBack}
        className="mb-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
      >
        <ArrowLeft className="h-4 w-4" />
        Danh sách bài
      </button>

      <div className="w-full max-w-full min-w-0 rounded-3xl border border-rose-100 bg-white p-5 shadow-sm">
        <div className="flex min-w-0 flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-rose-700 [overflow-wrap:anywhere]">{lesson.skillType}</p>
            <div className="mt-2 flex min-w-0 items-start justify-between gap-3">
              <h1 className="min-w-0 flex-1 text-3xl font-black leading-tight text-slate-950 [overflow-wrap:anywhere]">{lesson.title}</h1>
              <NguVanAudioButton
                sourceType="ngu-van-lesson-title"
                sourceId={lessonTitleSourceId}
                lessonId={lesson.id}
                label={lesson.title}
                compact
                className="shrink-0"
              />
            </div>
            <div className="mt-3 flex min-w-0 items-start justify-between gap-3">
              <p className="min-w-0 flex-1 text-base leading-7 text-slate-600 [overflow-wrap:anywhere]">{lessonSummaryText}</p>
              <NguVanAudioButton
                sourceType="ngu-van-lesson-summary"
                sourceId={lessonSummarySourceId}
                lessonId={lesson.id}
                label={lessonSummaryText || lesson.title}
                compact
                className="shrink-0 border-rose-200 bg-rose-50 text-rose-700 hover:border-rose-300 hover:bg-rose-100 hover:text-rose-800"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => onPractice(lesson.id)}
            className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-rose-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-rose-200 transition hover:bg-rose-700 md:w-auto md:shrink-0"
          >
            <PlayCircle className="h-5 w-5" />
            Luyện tập bài này
          </button>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-black text-rose-700">{cards.length} thẻ nội dung</span>
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black text-amber-700">{questions.length} câu hỏi</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{lesson.estimatedMinutes} phút</span>
        </div>

        <div className="mt-5 grid min-w-0 gap-3 rounded-2xl bg-slate-50 p-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              <BookOpenCheck className="h-4 w-4" />
              Mục tiêu
            </p>
            <ul className="mt-2 grid gap-2 text-sm leading-6 text-slate-700">
              {lesson.objectives.map((objective) => (
                <li key={objective} className="[overflow-wrap:anywhere]">- {objective}</li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              <MessageSquareText className="h-4 w-4" />
              Gợi ý nhớ nhanh
            </p>
            <div className="mt-2 grid gap-2 text-sm leading-6 text-slate-700">
              {lesson.keyPoints.slice(0, 3).map((point) => (
                <p key={point} className="[overflow-wrap:anywhere]">
                  - {point}
                </p>
              ))}
            </div>
          </div>
        </div>

        {lesson.miniText ? (
          <div className="mt-5 rounded-2xl border border-rose-100 bg-rose-50/60 p-4">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-rose-700">Ngữ liệu luyện đọc</p>
            <p className="mt-3 text-sm font-medium leading-7 text-slate-700 [overflow-wrap:anywhere]">{lesson.miniText}</p>
          </div>
        ) : null}

        {keywordEntries.length ? (
          <div className="mt-5 rounded-2xl border border-orange-100 bg-orange-50/60 p-4">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-orange-700">Ghi nhớ từ khóa</p>
            <div className="mt-3 grid min-w-0 gap-2 sm:grid-cols-[repeat(2,minmax(0,1fr))] lg:grid-cols-[repeat(3,minmax(0,1fr))]">
              {keywordEntries.map(([word, meaning]) => (
                <div key={word} className="min-w-0 rounded-2xl bg-white px-3 py-2 text-sm ring-1 ring-orange-100">
                  <p className="font-black text-slate-950 [overflow-wrap:anywhere]">{word}</p>
                  <p className="mt-1 text-slate-600 [overflow-wrap:anywhere]">{meaning}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-6 grid min-w-0 gap-4">
        {cards.map((card, index) => (
          <NguVanContentCard key={card.id} card={card} index={index} total={cards.length} />
        ))}
      </div>

      <div className="mt-6 w-full max-w-full min-w-0 rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm">
        <Clock className="mx-auto h-8 w-8 text-rose-700" />
        <h2 className="mt-2 text-lg font-black text-slate-950 [overflow-wrap:anywhere]">Sẵn sàng luyện tập?</h2>
        <p className="mt-1 text-sm text-slate-600 [overflow-wrap:anywhere]">
          Kho câu hỏi bài này có {questions.length} câu. Mỗi lượt nên chọn số câu vừa sức để đọc kỹ và trả lời chắc.
        </p>
        <button
          type="button"
          onClick={() => onPractice(lesson.id)}
          className="mt-4 inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-rose-700 sm:w-auto"
        >
          <PlayCircle className="h-4 w-4" />
          Bắt đầu luyện tập
        </button>
      </div>
    </section>
  );
}
