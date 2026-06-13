import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { TinHocLesson, TinHocPracticeQuestionCountOption } from '../../../data/grade6/tin-hoc';
import {
  DEFAULT_TIN_HOC_PRACTICE_QUESTION_COUNT,
  TIN_HOC_PRACTICE_QUESTION_COUNT_OPTIONS,
  getTinHocLessonPracticeQuestions,
  isTinHocPracticeQuestionCountOption,
} from '../../../data/grade6/tin-hoc';
import { useToast } from '../../../shared/components/ToastProvider';
import { useSound } from '../../../shared/hooks/useSound';
import {
  isTinHocAnswerCorrect,
  isTinHocReferenceAnswer,
  TinHocQuestionCard,
} from '../components/TinHocQuestionCard';

type Props = {
  lesson: TinHocLesson;
  onBackToLesson: (lessonId: number) => void;
};

const STORAGE_KEY = 'lop6.tinHoc.practiceQuestionCount';

function getStoredQuestionCount(): TinHocPracticeQuestionCountOption {
  if (typeof window === 'undefined') return DEFAULT_TIN_HOC_PRACTICE_QUESTION_COUNT;
  const value = Number(window.localStorage.getItem(STORAGE_KEY));
  return isTinHocPracticeQuestionCountOption(value) ? value : DEFAULT_TIN_HOC_PRACTICE_QUESTION_COUNT;
}

export function TinHocPracticePage({ lesson, onBackToLesson }: Props) {
  const [questionCount, setQuestionCount] = useState<TinHocPracticeQuestionCountOption>(() => getStoredQuestionCount());
  const [practiceRound, setPracticeRound] = useState(0);
  const [practiceStarted, setPracticeStarted] = useState(false);
  const questions = useMemo(() => getTinHocLessonPracticeQuestions(lesson.id, questionCount), [lesson.id, questionCount, practiceRound]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const toast = useToast();
  const sound = useSound();

  const currentQuestion = questions[currentIndex];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;
  const answeredCount = Object.keys(answers).length;
  const correctCount = questions.reduce((count, question) => {
    const answer = answers[question.id];
    if (!answer) return count;
    return isTinHocAnswerCorrect(question, answer) ? count + 1 : count;
  }, 0);
  const progress = questions.length ? Math.round((answeredCount / questions.length) * 100) : 0;

  const resetPractice = () => {
    setAnswers({});
    setCurrentIndex(0);
    setIsFinished(false);
    setPracticeRound((round) => round + 1);
  };

  const startPractice = () => {
    resetPractice();
    setPracticeStarted(true);
    sound.play('ui_tap_soft');
  };

  const handleQuestionCountChange = (nextCount: TinHocPracticeQuestionCountOption) => {
    setQuestionCount(nextCount);
    window.localStorage.setItem(STORAGE_KEY, String(nextCount));
    resetPractice();
    sound.play('ui_tap_soft');
  };

  const handleAnswer = (answer: string) => {
    if (!currentQuestion || answers[currentQuestion.id]) return;
    const isReference = isTinHocReferenceAnswer(answer);
    const right = isTinHocAnswerCorrect(currentQuestion, answer);
    setAnswers((previous) => ({ ...previous, [currentQuestion.id]: answer }));

    if (right) {
      sound.play('answer_correct_soft');
      toast.success('Đúng rồi!', 'Em trả lời chính xác.');
      return;
    }

    if (isReference) {
      sound.play('notify_soft');
      toast.info('Đáp án tham khảo', 'Câu này không cộng vào số câu đúng.');
      return;
    }

    sound.play('answer_wrong_gentle');
    toast.error('Chưa đúng', 'Xem giải thích bên dưới rồi thử câu tiếp theo.');
  };

  const questionCountSelector = (
    <div className="mb-5 w-full max-w-full min-w-0 rounded-3xl border border-cyan-100 bg-white p-4 shadow-sm">
      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-700">Số câu luyện tập</p>
          <p className="mt-1 text-sm font-semibold text-slate-600 [overflow-wrap:anywhere]">App sẽ đảo câu hỏi mỗi lượt để em không học tủ.</p>
        </div>
        <span className="max-w-full rounded-full bg-cyan-50 px-3 py-1 text-xs font-black text-cyan-700 [overflow-wrap:anywhere]">
          Đang chọn {questionCount} câu
        </span>
      </div>
      <div className="mt-4 grid min-w-0 gap-2 sm:grid-cols-[repeat(2,minmax(0,1fr))]">
        {TIN_HOC_PRACTICE_QUESTION_COUNT_OPTIONS.map((option) => {
          const selected = questionCount === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleQuestionCountChange(option.value)}
              className={`w-full min-w-0 rounded-2xl border p-3 text-left transition ${selected ? 'border-cyan-300 bg-cyan-50 text-cyan-900 shadow-sm' : 'border-slate-200 bg-white text-slate-700 hover:border-cyan-200 hover:bg-cyan-50'}`}
              aria-pressed={selected}
            >
              <span className="flex min-w-0 flex-wrap items-center justify-between gap-2">
                <span className="min-w-0 text-sm font-black [overflow-wrap:anywhere]">{option.title}</span>
                <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-xs font-black text-cyan-700 ring-1 ring-cyan-100">{option.label}</span>
              </span>
              <span className="mt-1 block text-xs font-semibold leading-5 text-slate-600 [overflow-wrap:anywhere]">{option.description}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  if (!practiceStarted) {
    return (
      <section className="mx-auto w-full max-w-3xl min-w-0 px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-full min-w-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="min-w-0 text-center">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-700">Chuẩn bị luyện tập</p>
            <h1 className="mt-3 text-3xl font-black text-slate-950 [overflow-wrap:anywhere]">{lesson.title}</h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-6 text-slate-600 [overflow-wrap:anywhere]">
              Mỗi câu đều có đáp án hoặc gợi ý ngắn để em tự kiểm tra thao tác và tình huống.
            </p>
          </div>
          {questionCountSelector}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button type="button" onClick={startPractice} className="inline-flex w-full min-w-0 items-center justify-center rounded-2xl bg-cyan-600 px-6 py-4 text-sm font-black text-white transition hover:bg-cyan-700 sm:w-auto">
              Bắt đầu luyện tập
            </button>
            <button type="button" onClick={() => onBackToLesson(lesson.id)} className="inline-flex w-full min-w-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-black text-slate-700 hover:bg-slate-50 sm:w-auto">
              Quay lại bài học
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (isFinished) {
    return (
      <section className="mx-auto w-full max-w-3xl min-w-0 px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-full min-w-0 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
          <p className="mt-3 text-sm font-black uppercase tracking-[0.14em] text-emerald-700">Hoàn thành luyện tập</p>
          <h1 className="mt-2 text-3xl font-black text-slate-950 [overflow-wrap:anywhere]">{lesson.title}</h1>
          <p className="mt-3 text-lg font-bold text-slate-700 [overflow-wrap:anywhere]">Đúng {correctCount}/{questions.length} câu</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <button type="button" onClick={() => onBackToLesson(lesson.id)} className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-50 sm:w-auto">
              <ArrowLeft className="h-4 w-4" />
              Quay lại bài học
            </button>
            <button type="button" onClick={startPractice} className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-black text-white hover:bg-cyan-700 sm:w-auto">
              <RotateCcw className="h-4 w-4" />
              Làm lại
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-3xl min-w-0 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-5 grid min-w-0 gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
        <button type="button" onClick={() => onBackToLesson(lesson.id)} className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 sm:w-auto sm:justify-start">
          <ArrowLeft className="h-4 w-4" />
          Quay lại bài học
        </button>
        <div className="grid w-full min-w-0 grid-cols-1 gap-2 sm:flex sm:w-auto sm:flex-wrap sm:items-center">
          <span className="inline-flex min-w-0 items-center justify-center rounded-full bg-cyan-50 px-3 py-2 text-sm font-black text-cyan-700 sm:py-1">{questionCount} câu</span>
          <button type="button" onClick={() => setPracticeStarted(false)} className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-black text-slate-700 hover:bg-slate-50 sm:w-auto">Đổi số câu</button>
          <button type="button" onClick={startPractice} className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-black text-slate-700 hover:bg-slate-50 sm:w-auto">Lượt mới</button>
        </div>
      </div>
      <div className="mb-5 h-2 w-full max-w-full overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-cyan-600 transition-all" style={{ width: `${progress}%` }} />
      </div>
      <TinHocQuestionCard
        question={currentQuestion!}
        selectedAnswer={currentAnswer}
        questionIndex={currentIndex}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
      />
      {currentAnswer ? (
        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={() => {
              if (currentIndex + 1 >= questions.length) {
                setIsFinished(true);
                sound.play('practice_complete');
                return;
              }
              setCurrentIndex((index) => index + 1);
            }}
            className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:bg-cyan-700 sm:w-auto"
          >
            {currentIndex + 1 >= questions.length ? 'Xem tổng kết' : 'Câu tiếp theo'}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
