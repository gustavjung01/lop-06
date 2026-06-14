import { ArrowLeft, Clock, HelpCircle, Lightbulb, PlayCircle } from 'lucide-react';

import type { MathLesson } from '../../../data/grade6/toan';
import { getMathLessonCards, getMathLessonQuestions } from '../../../data/grade6/toan';
import { openAIChatIntent } from '../../../shared/services/aiChatIntent';
import { MathContentCard } from '../components/MathContentCard';
import { MathProgressPill } from '../components/MathProgressPill';

type MathLessonDetailPageProps = {
  lesson: MathLesson;
  onBack: () => void;
  onPractice: (lessonId: number) => void;
};

const dopiLessonFormat = [
  'Trả lời theo đúng khung sau, ngắn gọn và dễ hiểu:',
  '1. Hiểu nhanh: nêu ý chính trong 1 đến 2 câu.',
  '2. Cách học: ghi 2 đến 4 bước rõ ràng.',
  '3. Ví dụ nhỏ: đưa 1 ví dụ đơn giản.',
  '4. Mẹo nhớ: 1 câu ngắn.',
  '5. Tự kiểm tra: hỏi lại 1 câu nhỏ.',
  'Không dùng bảng. Không lan man. Xưng là Dopi.',
].join('\n');

export function MathLessonDetailPage({ lesson, onBack, onPractice }: MathLessonDetailPageProps) {
  const cards = getMathLessonCards(lesson.id);
  const questions = getMathLessonQuestions(lesson.id);

  const openLessonAIExplanation = () => {
    openAIChatIntent({
      prompt: `Dopi hãy giải thích bài học Toán lớp 6 này.\n\nTên bài: ${lesson.title}\nMục tiêu: ${lesson.objective}\nTóm tắt: ${lesson.summarySimple}\nMẹo học có sẵn: ${lesson.tips}\n\n${dopiLessonFormat}\n\nGiới hạn: tối đa 180 từ.`,
      autoSend: true,
    });
  };

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

      <div className="w-full max-w-full min-w-0 rounded-3xl border border-blue-100 bg-white p-5 shadow-sm">
        <div className="flex min-w-0 flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-blue-700">Toán Lớp 6 - Học liệu chuẩn</p>
            <h1 className="mt-2 text-3xl font-black leading-tight text-slate-950 [overflow-wrap:anywhere]">{lesson.title}</h1>
            <p className="mt-3 text-base leading-7 text-slate-600 [overflow-wrap:anywhere]">{lesson.objective}</p>
          </div>

          <div className="grid w-full min-w-0 gap-2 md:w-auto md:shrink-0">
            <button
              type="button"
              onClick={() => onPractice(lesson.id)}
              className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
            >
              <PlayCircle className="h-5 w-5" />
              Luyện tập bài này
            </button>
            <button
              type="button"
              onClick={openLessonAIExplanation}
              className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-black text-blue-700 transition hover:bg-blue-100"
            >
              <Lightbulb className="h-5 w-5" />
              Giải thích bài bằng AI
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <MathProgressPill label="thẻ nội dung" value={cards.length} tone="blue" />
          <MathProgressPill label="câu hỏi" value={questions.length} tone="amber" />
          <MathProgressPill label="phút" value={lesson.estimatedMinutes} tone="green" />
          <MathProgressPill label="Sẵn sàng" tone="green" />
        </div>

        <div className="mt-5 grid min-w-0 gap-3 rounded-2xl bg-slate-50 p-4 md:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">Tóm tắt</p>
            <p className="mt-2 text-sm leading-6 text-slate-700 [overflow-wrap:anywhere]">{lesson.summarySimple}</p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">Mẹo học</p>
            <p className="mt-2 text-sm leading-6 text-slate-700 [overflow-wrap:anywhere]">{lesson.tips}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid min-w-0 gap-4">
        {cards.map((card, index) => (
          <MathContentCard key={card.id} card={card} index={index} total={cards.length} />
        ))}
      </div>

      <div className="mt-6 w-full max-w-full min-w-0 rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm">
        <HelpCircle className="mx-auto h-8 w-8 text-blue-700" />
        <h2 className="mt-2 text-lg font-black text-slate-950 [overflow-wrap:anywhere]">Đã sẵn sàng kiểm tra nhanh?</h2>
        <p className="mt-1 text-sm text-slate-600 [overflow-wrap:anywhere]">
          Ngân hàng bài này có {questions.length} câu hỏi. Mỗi lượt luyện tập chọn khoảng 12 câu ngẫu nhiên và xem giải thích ngay sau khi trả lời.
        </p>
        <button
          type="button"
          onClick={() => onPractice(lesson.id)}
          className="mt-4 inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-700 sm:w-auto"
        >
          <Clock className="h-4 w-4" />
          Bắt đầu luyện tập
        </button>
      </div>
    </section>
  );
}
