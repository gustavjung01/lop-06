import { ArrowLeft, Clock, ListChecks, PlayCircle } from 'lucide-react';
import type { TinHocLesson } from '../../../data/grade6/tin-hoc';
import { getTinHocLessonCards, getTinHocLessonQuestions } from '../../../data/grade6/tin-hoc';
import { TinHocContentCard } from '../components/TinHocContentCard';

type Props = {
  lesson: TinHocLesson;
  onBack: () => void;
  onPractice: (lessonId: number) => void;
};

export function TinHocLessonDetailPage({ lesson, onBack, onPractice }: Props) {
  const cards = getTinHocLessonCards(lesson.id);
  const questions = getTinHocLessonQuestions(lesson.id);
  const keywordEntries = Object.entries(lesson.keywords).slice(0, 6);

  return (
    <section className="mx-auto w-full max-w-5xl min-w-0 px-4 py-8 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={onBack}
        className="mb-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
      >
        <ArrowLeft className="h-4 w-4" />
        Danh sách bài
      </button>

      <div className="w-full max-w-full min-w-0 rounded-3xl border border-cyan-100 bg-white p-5 shadow-sm">
        <div className="flex min-w-0 flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-cyan-700 [overflow-wrap:anywhere]">{lesson.unitTitle}</p>
            <h1 className="mt-2 text-3xl font-black leading-tight text-slate-950 [overflow-wrap:anywhere]">{lesson.title}</h1>
            <p className="mt-3 text-base leading-7 text-slate-600 [overflow-wrap:anywhere]">{lesson.summarySimple}</p>
          </div>

          <button
            type="button"
            onClick={() => onPractice(lesson.id)}
            className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-cyan-100 transition hover:bg-cyan-700 md:w-auto md:shrink-0"
          >
            <PlayCircle className="h-5 w-5" />
            Luyện tập bài này
          </button>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-black text-cyan-700">{cards.length} thẻ nội dung</span>
          <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-black text-sky-700">{questions.length} câu hỏi</span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">{lesson.estimatedMinutes} phút</span>
        </div>

        <div className="mt-5 grid min-w-0 gap-3 rounded-2xl bg-slate-50 p-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              <ListChecks className="h-4 w-4" />
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
              <Clock className="h-4 w-4" />
              Ví dụ gần gũi
            </p>
            <div className="mt-2 grid gap-2 text-sm leading-6 text-slate-700">
              {lesson.examples.slice(0, 3).map((example) => (
                <p key={example} className="[overflow-wrap:anywhere]">- {example}</p>
              ))}
            </div>
          </div>
        </div>

        {keywordEntries.length ? (
          <div className="mt-5 rounded-2xl border border-cyan-100 bg-cyan-50/60 p-4">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-cyan-700">Ghi nhớ từ khóa</p>
            <div className="mt-3 grid min-w-0 gap-2 sm:grid-cols-[repeat(2,minmax(0,1fr))] lg:grid-cols-[repeat(3,minmax(0,1fr))]">
              {keywordEntries.map(([word, meaning]) => (
                <div key={word} className="min-w-0 rounded-2xl bg-white px-3 py-2 text-sm ring-1 ring-cyan-100">
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
          <TinHocContentCard key={card.id} card={card} index={index} total={cards.length} />
        ))}
      </div>

      <div className="mt-6 w-full max-w-full min-w-0 rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm">
        <PlayCircle className="mx-auto h-8 w-8 text-cyan-700" />
        <h2 className="mt-2 text-lg font-black text-slate-950 [overflow-wrap:anywhere]">Sẵn sàng luyện tập?</h2>
        <p className="mt-1 text-sm text-slate-600 [overflow-wrap:anywhere]">
          Kho câu hỏi bài này có {questions.length} câu. Mỗi lượt nên chọn số câu vừa sức để hiểu thao tác và tình huống.
        </p>
        <button
          type="button"
          onClick={() => onPractice(lesson.id)}
          className="mt-4 inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-cyan-700 sm:w-auto"
        >
          <PlayCircle className="h-4 w-4" />
          Bắt đầu luyện tập
        </button>
      </div>
    </section>
  );
}
