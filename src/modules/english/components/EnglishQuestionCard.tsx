import { CheckCircle2, Eye, Lightbulb, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

import type { EnglishQuestion } from '../../../data/grade6/tieng-anh';
import { EnglishAudioButton } from './EnglishAudioButton';
import { buildEnglishQuestionAudioSequence } from '../utils/englishPracticeAudio';
import { openAIChatIntent } from '../../../shared/services/aiChatIntent';

type EnglishQuestionCardProps = {
  question: EnglishQuestion;
  selectedAnswer?: string;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
};

function normalizeAnswer(value: string) {
  return value.trim().toLowerCase().replace(/[.?!]+$/g, '');
}

function isCorrectAnswer(question: EnglishQuestion, answer: string) {
  if (question.questionType === 'writing_prompt') return false;
  return (
    normalizeAnswer(answer) === normalizeAnswer(question.correctAnswer) ||
    normalizeAnswer(answer) === normalizeAnswer(question.answerText)
  );
}

function getDifficultyLabel(difficulty: EnglishQuestion['difficulty']) {
  if (difficulty === 'easy') return 'Cơ bản';
  if (difficulty === 'medium') return 'Vừa sức';
  return 'Thử thách';
}

export function EnglishQuestionCard({
  question,
  selectedAnswer,
  questionIndex,
  totalQuestions,
  onAnswer,
}: EnglishQuestionCardProps) {
  const [textAnswer, setTextAnswer] = useState('');
  const isAnswered = Boolean(selectedAnswer);
  const isCorrect = selectedAnswer ? isCorrectAnswer(question, selectedAnswer) : false;
  const hasOptions = Boolean(question.options?.length);
  const isOpenWriting = question.questionType === 'writing_prompt';
  const questionAudioSequence = buildEnglishQuestionAudioSequence(question);
  const openAIExplanation = () => {
    openAIChatIntent({
      prompt: `Giải thích câu luyện tập tiếng Anh này cho học sinh lớp 6. Câu hỏi: ${question.questionText}. Đáp án đúng/tham khảo: ${question.answerText}. Hãy giải thích thật dễ hiểu, ngắn gọn và cho một mẹo nhớ nhanh.`,
      autoSend: true,
    });
  };

  useEffect(() => {
    setTextAnswer('');
  }, [question.id]);

  return (
    <article className="w-full max-w-full min-w-0 rounded-3xl border border-indigo-100 bg-white p-5 shadow-sm">
      <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-black uppercase tracking-[0.12em] text-indigo-700">
            Câu {questionIndex + 1}/{totalQuestions}
          </p>
          <h2 className="mt-2 text-xl font-black leading-snug text-slate-950 [overflow-wrap:anywhere]">
            {question.questionText}
          </h2>
        </div>
        <div className="flex shrink-0 items-start gap-2">
          <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
            {getDifficultyLabel(question.difficulty)}
          </span>
          <EnglishAudioButton
            sourceType="question"
            sourceId={question.sourceId}
            lessonId={question.lessonId}
            label={question.questionText}
            sequenceItems={questionAudioSequence}
            sequencePlaybackKey={`question-sequence:${question.id}`}
          />
        </div>
      </div>

      {hasOptions ? (
        <div className="mt-5 grid min-w-0 gap-3">
          {question.options?.map((option) => {
            const isSelected = selectedAnswer === option.key;
            const isCorrectOption = question.correctAnswer === option.key;
            const showCorrect = isAnswered && isCorrectOption;
            const showWrong = isAnswered && isSelected && !isCorrectOption;

            return (
              <div key={option.key} className="flex min-w-0 items-stretch gap-2">
                <button
                  type="button"
                  disabled={isAnswered}
                  onClick={() => onAnswer(option.key)}
                  className={`flex min-w-0 flex-1 items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                    showCorrect
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                      : showWrong
                        ? 'border-rose-300 bg-rose-50 text-rose-800'
                        : isSelected
                          ? 'border-indigo-300 bg-indigo-50 text-indigo-800'
                          : 'border-slate-200 text-slate-700 hover:border-indigo-200 hover:bg-indigo-50'
                  } ${isAnswered ? 'cursor-default' : ''}`}
                >
                  <span className="min-w-0 flex-1 [overflow-wrap:anywhere]">
                    <strong>{option.key}.</strong> {option.text}
                  </span>
                  {showCorrect ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : null}
                  {showWrong ? <XCircle className="h-5 w-5 shrink-0" /> : null}
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <form
          className="mt-5 flex min-w-0 flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            if (isAnswered) return;
            if (isOpenWriting) {
              onAnswer(question.answerText);
              return;
            }
            if (!textAnswer.trim()) return;
            onAnswer(textAnswer);
          }}
        >
          {isOpenWriting ? (
            <button
              type="submit"
              disabled={isAnswered}
              className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-black text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500 sm:w-auto"
            >
              <Eye className="h-4 w-4" />
              Xem đáp án tham khảo
            </button>
          ) : (
            <>
              <input
                value={selectedAnswer ?? textAnswer}
                disabled={isAnswered}
                onChange={(event) => setTextAnswer(event.target.value)}
                className={`w-full min-w-0 flex-1 rounded-2xl border px-4 py-3 text-sm font-bold outline-none transition ${
                  isAnswered
                    ? isCorrect
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                      : 'border-rose-300 bg-rose-50 text-rose-800'
                    : 'border-slate-200 text-slate-800 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100'
                }`}
                placeholder="Nhập câu trả lời"
              />
              <button
                type="submit"
                disabled={isAnswered || !textAnswer.trim()}
                className="w-full min-w-0 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-black text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500 sm:w-auto"
              >
                Trả lời
              </button>
            </>
          )}
        </form>
      )}

      {isAnswered ? (
        <div
          className={`mt-5 min-w-0 rounded-2xl p-4 text-sm [overflow-wrap:anywhere] ${
            isOpenWriting ? 'bg-amber-50 text-amber-800' : isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'
          }`}
        >
          <p className="flex min-w-0 items-center gap-2 font-black">
            {isOpenWriting ? (
              <Eye className="h-5 w-5 shrink-0" />
            ) : isCorrect ? (
              <CheckCircle2 className="h-5 w-5 shrink-0" />
            ) : (
              <XCircle className="h-5 w-5 shrink-0" />
            )}
            {isOpenWriting ? 'Đáp án tham khảo' : isCorrect ? 'Chính xác!' : 'Chưa đúng rồi.'}
          </p>
          {isOpenWriting ? <p className="mt-2 leading-6">Câu tự luyện này không cộng vào số câu đúng.</p> : null}
          <p className="mt-2 font-semibold">Đáp án/gợi ý: {question.answerText}</p>
          <p className="mt-2 leading-6">{question.explanationSimple}</p>
          <div className="mt-3">
            <button
              type="button"
              onClick={openAIExplanation}
              className="inline-flex items-center gap-2 rounded-2xl border border-indigo-200 bg-white px-4 py-2 text-xs font-black text-indigo-700 hover:bg-indigo-50"
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
