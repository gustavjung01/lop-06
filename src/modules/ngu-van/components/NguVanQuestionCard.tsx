import { CheckCircle2, Eye, Lightbulb, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

import type { NguVanQuestion } from '../../../data/grade6/ngu-van';
import { openAIChatIntent } from '../../../shared/services/aiChatIntent';

type NguVanQuestionCardProps = {
  question: NguVanQuestion;
  selectedAnswer?: string;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
};

function normalizeAnswer(value: string) {
  return value.trim().toLowerCase().replace(/[.?!]+$/g, '');
}

function isCorrectAnswer(question: NguVanQuestion, answer: string) {
  if (question.questionType === 'short_answer' || question.questionType === 'writing_prompt') return false;
  return normalizeAnswer(answer) === normalizeAnswer(question.correctAnswer)
    || normalizeAnswer(answer) === normalizeAnswer(question.answerText);
}

function getDifficultyLabel(difficulty: NguVanQuestion['difficulty']) {
  if (difficulty === 'easy') return 'Cơ bản';
  if (difficulty === 'medium') return 'Vừa sức';
  return 'Thử thách';
}

export function NguVanQuestionCard({
  question,
  selectedAnswer,
  questionIndex,
  totalQuestions,
  onAnswer,
}: NguVanQuestionCardProps) {
  const [textAnswer, setTextAnswer] = useState('');
  const isAnswered = Boolean(selectedAnswer);
  const isCorrect = selectedAnswer ? isCorrectAnswer(question, selectedAnswer) : false;
  const hasOptions = Boolean(question.options?.length);
  const isOpenAnswer = question.questionType === 'short_answer' || question.questionType === 'writing_prompt';
  const openAIExplanation = () => {
    openAIChatIntent({
      prompt: `Giải thích câu luyện tập này cho học sinh lớp 6. Câu hỏi: ${question.questionText}. Đáp án đúng/tham khảo: ${question.answerText}. Hãy giải thích thật dễ hiểu, ngắn gọn và cho một mẹo nhớ nhanh.`,
      autoSend: true,
    });
  };

  useEffect(() => {
    setTextAnswer('');
  }, [question.id]);

  return (
    <article className="w-full max-w-full min-w-0 rounded-3xl border border-rose-100 bg-white p-5 shadow-sm">
      <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-black uppercase tracking-[0.12em] text-rose-700">
            Câu {questionIndex + 1}/{totalQuestions}
          </p>
          <h2 className="mt-2 text-xl font-black leading-snug text-slate-950 [overflow-wrap:anywhere]">
            {question.questionText}
          </h2>
        </div>
        <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
          {getDifficultyLabel(question.difficulty)}
        </span>
      </div>

      {hasOptions ? (
        <div className="mt-5 grid min-w-0 gap-3">
          {question.options?.map((option) => {
            const isSelected = selectedAnswer === option.key;
            const isCorrectOption = question.correctAnswer === option.key;
            const showCorrect = isAnswered && isCorrectOption;
            const showWrong = isAnswered && isSelected && !isCorrectOption;

            return (
              <button
                key={option.key}
                type="button"
                disabled={isAnswered}
                onClick={() => onAnswer(option.key)}
                className={`flex w-full min-w-0 items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                  showCorrect
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                    : showWrong
                      ? 'border-rose-300 bg-rose-50 text-rose-800'
                      : isSelected
                        ? 'border-rose-300 bg-rose-50 text-rose-800'
                        : 'border-slate-200 text-slate-700 hover:border-rose-200 hover:bg-rose-50'
                } ${isAnswered ? 'cursor-default' : ''}`}
              >
                <span className="min-w-0 flex-1 [overflow-wrap:anywhere]">
                  <strong>{option.key}.</strong> {option.text}
                </span>
                {showCorrect ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : null}
                {showWrong ? <XCircle className="h-5 w-5 shrink-0" /> : null}
              </button>
            );
          })}
        </div>
      ) : (
        <form
          className="mt-5 flex min-w-0 flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            if (isAnswered) return;
            if (isOpenAnswer) {
              onAnswer(question.answerText);
              return;
            }
            if (!textAnswer.trim()) return;
            onAnswer(textAnswer);
          }}
        >
          {isOpenAnswer ? (
            <button
              type="submit"
              disabled={isAnswered}
              className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-rose-600 px-5 py-3 text-sm font-black text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500 sm:w-auto"
            >
              <Eye className="h-4 w-4" />
              Xem đáp án tham khảo
            </button>
          ) : null}
        </form>
      )}

      {isAnswered ? (
        <div className={`mt-5 min-w-0 rounded-2xl p-4 text-sm [overflow-wrap:anywhere] ${
          isOpenAnswer ? 'bg-amber-50 text-amber-800' : isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'
        }`}
        >
          <p className="flex min-w-0 items-center gap-2 font-black">
            {isOpenAnswer ? <Eye className="h-5 w-5 shrink-0" /> : isCorrect ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <XCircle className="h-5 w-5 shrink-0" />}
            {isOpenAnswer ? 'Đáp án tham khảo' : isCorrect ? 'Chính xác!' : 'Chưa đúng rồi.'}
          </p>
          {isOpenAnswer ? <p className="mt-2 leading-6">Câu tự luyện này không cộng vào số câu đúng.</p> : null}
          <p className="mt-2 font-semibold">Đáp án/gợi ý: {question.answerText}</p>
          <p className="mt-2 leading-6">{question.explanationSimple}</p>
          <div className="mt-3">
            <button
              type="button"
              onClick={openAIExplanation}
              className="inline-flex items-center gap-2 rounded-2xl border border-rose-200 bg-white px-4 py-2 text-xs font-black text-rose-700 hover:bg-rose-50"
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
