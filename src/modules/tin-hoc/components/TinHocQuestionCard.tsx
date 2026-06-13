import { CheckCircle2, Eye, Lightbulb, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { TinHocQuestion } from '../../../data/grade6/tin-hoc';
import { openAIChatIntent } from '../../../shared/services/aiChatIntent';

export const TIN_HOC_REFERENCE_ANSWER_PREFIX = '__reference__:';

type Props = {
  question: TinHocQuestion;
  selectedAnswer?: string;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
};

export function normalizeTinHocAnswer(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[.?!,;:]+$/g, '')
    .replace(/\s+/g, ' ');
}

export function isTinHocReferenceAnswer(answer: string) {
  return answer.startsWith(TIN_HOC_REFERENCE_ANSWER_PREFIX);
}

export function isTinHocAnswerCorrect(question: TinHocQuestion, answer: string) {
  if (isTinHocReferenceAnswer(answer)) return false;
  return normalizeTinHocAnswer(answer) === normalizeTinHocAnswer(question.correctAnswer)
    || normalizeTinHocAnswer(answer) === normalizeTinHocAnswer(question.answerText);
}

function difficultyLabel(difficulty: TinHocQuestion['difficulty']) {
  if (difficulty === 'easy') return 'Cơ bản';
  if (difficulty === 'medium') return 'Vừa sức';
  return 'Thử thách';
}

export function TinHocQuestionCard({ question, selectedAnswer, questionIndex, totalQuestions, onAnswer }: Props) {
  const [textAnswer, setTextAnswer] = useState('');
  const answered = Boolean(selectedAnswer);
  const correct = selectedAnswer ? isTinHocAnswerCorrect(question, selectedAnswer) : false;
  const isOrderSteps = question.questionType === 'order_steps';
  const isFillText = question.questionType === 'fill_text';
  const isReference = selectedAnswer ? isTinHocReferenceAnswer(selectedAnswer) : false;
  const openAIExplanation = () => {
    openAIChatIntent({
      prompt: `Giải thích câu luyện tập Tin học lớp 6 này cho học sinh. Câu hỏi: ${question.questionText}. Đáp án đúng/tham khảo: ${question.answerText}. Hãy giải thích thật dễ hiểu, ngắn gọn và có mẹo nhớ nhanh.`,
      autoSend: true,
    });
  };

  useEffect(() => {
    setTextAnswer('');
  }, [question.id]);

  return (
    <article className="w-full max-w-full min-w-0 rounded-3xl border border-cyan-100 bg-white p-5 shadow-sm">
      <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-black uppercase tracking-[0.12em] text-cyan-700">Câu {questionIndex + 1}/{totalQuestions}</p>
          <h2 className="mt-2 text-xl font-black leading-snug text-slate-950 [overflow-wrap:anywhere]">{question.questionText}</h2>
        </div>
        <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{difficultyLabel(question.difficulty)}</span>
      </div>

      {question.options?.length ? (
        <div className="mt-5 grid min-w-0 gap-3">
          {question.options.map((option) => {
            const selected = selectedAnswer === option.key;
            const right = question.correctAnswer === option.key;
            const showRight = answered && right;
            const showWrong = answered && selected && !right;

            return (
              <button
                key={option.key}
                type="button"
                disabled={answered}
                onClick={() => onAnswer(option.key)}
                className={`flex w-full min-w-0 items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                  showRight
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                    : showWrong
                      ? 'border-rose-300 bg-rose-50 text-rose-800'
                      : selected
                        ? 'border-cyan-300 bg-cyan-50 text-cyan-800'
                        : 'border-slate-200 text-slate-700 hover:border-cyan-200 hover:bg-cyan-50'
                } ${answered ? 'cursor-default' : ''}`}
              >
                <span className="min-w-0 flex-1 [overflow-wrap:anywhere]"><strong>{option.key}.</strong> {option.text}</span>
                {showRight ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : null}
                {showWrong ? <XCircle className="h-5 w-5 shrink-0" /> : null}
              </button>
            );
          })}
        </div>
      ) : isOrderSteps ? (
        <div className="mt-5">
          <button
            type="button"
            disabled={answered}
            onClick={() => onAnswer(`${TIN_HOC_REFERENCE_ANSWER_PREFIX}${question.answerText}`)}
            className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-black text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500 sm:w-auto"
          >
            <Eye className="h-4 w-4" />
            Xem đáp án tham khảo
          </button>
        </div>
      ) : (
        <form
          className="mt-5 flex min-w-0 flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            if (answered || !textAnswer.trim()) return;
            onAnswer(textAnswer);
          }}
        >
          <input
            value={selectedAnswer ?? textAnswer}
            disabled={answered}
            onChange={(event) => setTextAnswer(event.target.value)}
            className={`w-full min-w-0 flex-1 rounded-2xl border px-4 py-3 text-sm font-bold outline-none transition ${
              answered
                ? correct
                  ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                  : 'border-rose-300 bg-rose-50 text-rose-800'
                : 'border-slate-200 text-slate-800 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100'
            }`}
            placeholder="Nhập câu trả lời"
          />
          <button
            type="submit"
            disabled={answered || !textAnswer.trim()}
            className="w-full min-w-0 rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-black text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500 sm:w-auto"
          >
            Kiểm tra
          </button>
        </form>
      )}

      {answered ? (
        <div className={`mt-5 min-w-0 rounded-2xl p-4 text-sm [overflow-wrap:anywhere] ${correct ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}`}>
          <p className="flex min-w-0 items-center gap-2 font-black">
            {correct ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <XCircle className="h-5 w-5 shrink-0" />}
            {isReference ? 'Đáp án tham khảo' : correct ? 'Chính xác!' : 'Chưa đúng rồi.'}
          </p>
          {(isFillText || isOrderSteps || !correct) ? <p className="mt-2 font-semibold">Đáp án/gợi ý: {question.answerText}</p> : null}
          {isOrderSteps ? (
            <p className="mt-2 leading-6">Câu sắp xếp bước đang ở chế độ tự luyện, không cộng vào số câu đúng.</p>
          ) : null}
          <p className="mt-2 leading-6">{question.explanationSimple}</p>
          <div className="mt-3">
            <button
              type="button"
              onClick={openAIExplanation}
              className="inline-flex items-center gap-2 rounded-2xl border border-cyan-200 bg-white px-4 py-2 text-xs font-black text-cyan-700 hover:bg-cyan-50"
            >
              <Lightbulb className="h-4 w-4" />
              Giải thích bằng AI
            </button>
          </div>
        </div>
      ) : null}
    </article>
  );
}
