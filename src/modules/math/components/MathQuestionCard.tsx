import { CheckCircle2, Lightbulb, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

import type { MathQuestion } from '../../../data/grade6/toan';
import { openAIChatIntent } from '../../../shared/services/aiChatIntent';
import {
  getWrongAnswerExplanation,
  isCorrectAnswer,
  parseQuestionOptions,
} from '../utils/mathPracticeEngine';

type MathQuestionCardProps = {
  question: MathQuestion;
  selectedAnswer?: string;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
};

const dopiPracticeFormat = [
  'Trả lời theo đúng khung sau, ngắn gọn và dễ hiểu:',
  '1. Hiểu nhanh: nêu ý chính trong 1 câu.',
  '2. Cách làm: ghi 2 đến 4 bước rõ ràng.',
  '3. Lỗi dễ nhầm: nhắc 1 lỗi học sinh hay mắc.',
  '4. Mẹo nhớ: 1 câu ngắn.',
  '5. Tự kiểm tra: hỏi lại 1 câu nhỏ.',
  'Không dùng bảng. Không lan man. Xưng là Dopi.',
].join('\n');

export function MathQuestionCard({
  question,
  selectedAnswer,
  questionIndex,
  totalQuestions,
  onAnswer,
}: MathQuestionCardProps) {
  const options = parseQuestionOptions(question);
  const [fillAnswer, setFillAnswer] = useState('');
  const isAnswered = Boolean(selectedAnswer);
  const isCorrect = selectedAnswer ? isCorrectAnswer(question, selectedAnswer) : false;
  const wrongExplanation = selectedAnswer ? getWrongAnswerExplanation(question, selectedAnswer) : '';
  const openAIHint = () => {
    openAIChatIntent({
      prompt: `Dopi hãy gợi ý cách làm câu luyện tập Toán lớp 6 này, nhưng chưa nêu đáp án cuối cùng.\n\nCâu hỏi: ${question.questionText}\n\n${dopiPracticeFormat}\n\nGiới hạn: tối đa 120 từ.`,
      displayText: 'Dopi gợi ý cách làm câu này giúp em.',
      autoSend: true,
    });
  };
  const openAIExplanation = () => {
    openAIChatIntent({
      prompt: `Dopi hãy giải thích câu luyện tập Toán lớp 6 này.\n\nCâu hỏi: ${question.questionText}\nĐáp án đúng/tham khảo: ${question.correctAnswer}\n\n${dopiPracticeFormat}\n\nGiới hạn: tối đa 150 từ.`,
      displayText: 'Dopi giải thích câu này giúp em.',
      autoSend: true,
    });
  };

  useEffect(() => {
    setFillAnswer('');
  }, [question.id]);

  return (
    <article className="w-full max-w-full min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-black uppercase tracking-[0.12em] text-blue-700">
            Câu {questionIndex + 1}/{totalQuestions}
          </p>
          <h2 className="mt-2 text-xl font-black leading-snug text-slate-950 [overflow-wrap:anywhere]">{question.questionText}</h2>
        </div>
        <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
          {question.difficulty === 'easy' ? 'Cơ bản' : question.difficulty === 'medium' ? 'Trung bình' : 'Khó'}
        </span>
      </div>

      {!isAnswered ? (
        <button
          type="button"
          onClick={openAIHint}
          className="mt-4 inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black text-blue-700 hover:bg-blue-100 sm:w-auto"
        >
          <Lightbulb className="h-4 w-4" />
          Gợi ý bằng AI
        </button>
      ) : null}

      {question.questionType === 'fill_number' ? (
        <form
          className="mt-5 flex min-w-0 flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            if (!fillAnswer.trim() || isAnswered) return;
            onAnswer(fillAnswer);
          }}
        >
          <input
            value={selectedAnswer ?? fillAnswer}
            disabled={isAnswered}
            onChange={(event) => setFillAnswer(event.target.value)}
            inputMode="decimal"
            className={`w-full min-w-0 flex-1 rounded-2xl border px-4 py-3 text-sm font-bold outline-none transition ${
              isAnswered
                ? isCorrect
                  ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                  : 'border-rose-300 bg-rose-50 text-rose-800'
                : 'border-slate-200 text-slate-800 focus:border-blue-300 focus:ring-4 focus:ring-blue-100'
            }`}
            placeholder="Nhập đáp án"
          />
          <button
            type="submit"
            disabled={isAnswered || !fillAnswer.trim()}
            className="w-full min-w-0 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500 sm:w-auto"
          >
            Trả lời
          </button>
        </form>
      ) : (
        <div className="mt-5 grid min-w-0 gap-3">
          {options.map((option) => {
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
                        ? 'border-blue-300 bg-blue-50 text-blue-800'
                        : 'border-slate-200 text-slate-700 hover:border-blue-200 hover:bg-blue-50'
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
      )}

      {isAnswered ? (
        <div className={`mt-5 min-w-0 rounded-2xl p-4 text-sm [overflow-wrap:anywhere] ${isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}`}>
          <p className="flex min-w-0 items-center gap-2 font-black">
            {isCorrect ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
            {isCorrect ? 'Chính xác!' : 'Chưa đúng rồi.'}
          </p>
          {!isCorrect && wrongExplanation ? (
            <p className="mt-2 font-semibold">{wrongExplanation}</p>
          ) : null}
          {!isCorrect ? (
            <p className="mt-2 font-semibold">Đáp án đúng: {question.correctAnswer}</p>
          ) : null}
          <p className="mt-2 leading-6">{question.explanationSimple}</p>
          <div className="mt-3">
            <button
              type="button"
              onClick={openAIExplanation}
              className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-white px-4 py-2 text-xs font-black text-blue-700 hover:bg-blue-50 sm:w-auto"
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
