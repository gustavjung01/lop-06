import type { MathQuestion } from '../../../data/grade6/toan';

export type MathQuestionOption = {
  key: string;
  text: string;
};

export function parseQuestionOptions(question: MathQuestion): MathQuestionOption[] {
  if (question.questionType === 'true_false') {
    return [
      { key: 'true', text: 'Đúng' },
      { key: 'false', text: 'Sai' },
    ];
  }

  if (!question.optionsJson) return [];

  try {
    const parsed = JSON.parse(question.optionsJson) as MathQuestionOption[];
    return parsed.filter((option) => option.key && option.text);
  } catch {
    return [];
  }
}

export function isCorrectAnswer(question: MathQuestion, selectedAnswer: string) {
  const normalize = (value: string) => value.trim().toLowerCase().replace(/\s+/g, '');
  return normalize(selectedAnswer) === normalize(question.correctAnswer);
}

export function getWrongAnswerExplanation(question: MathQuestion, selectedAnswer: string) {
  return question.wrongAnswerExplanations?.[selectedAnswer] ?? '';
}

export function getPracticeSummary(
  questions: MathQuestion[],
  answers: Record<number, string>,
) {
  const correctCount = questions.reduce((count, question) => {
    return isCorrectAnswer(question, answers[question.id] ?? '') ? count + 1 : count;
  }, 0);

  return {
    correctCount,
    wrongCount: questions.length - correctCount,
    totalCount: questions.length,
  };
}
