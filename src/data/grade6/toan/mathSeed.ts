import { mathLessonCards } from './mathLessonCards';
import { mathLessons } from './mathLessons';
import { mathQuestions } from './mathQuestions';

export type MathPracticeQuestionCountOption = 10 | 12 | 20 | 40;

type PracticeSamplingPolicy = {
  easy: number;
  medium: number;
  hard: number;
};

export const PRACTICE_QUESTION_COUNT_OPTIONS: Array<{
  value: MathPracticeQuestionCountOption;
  title: string;
  label: string;
  description: string;
}> = [
  {
    value: 10,
    title: 'Luyện nhanh',
    label: '10 câu',
    description: 'Gọn nhẹ để ôn nhanh một lượt.',
  },
  {
    value: 12,
    title: 'Tiêu chuẩn',
    label: '12 câu',
    description: 'Cân bằng giữa khởi động, luyện tập và thử thách.',
  },
  {
    value: 20,
    title: 'Luyện sâu',
    label: '20 câu',
    description: 'Nhiều câu hơn để chắc kiến thức trong bài.',
  },
  {
    value: 40,
    title: 'Thử thách đủ bài',
    label: '40 câu',
    description: 'Làm toàn bộ ngân hàng câu hỏi của bài này.',
  },
];

const PRACTICE_SAMPLING_POLICIES: Record<Exclude<MathPracticeQuestionCountOption, 40>, PracticeSamplingPolicy> = {
  10: { easy: 4, medium: 4, hard: 2 },
  12: { easy: 5, medium: 5, hard: 2 },
  20: { easy: 6, medium: 10, hard: 4 },
};

export const DEFAULT_PRACTICE_QUESTION_COUNT: MathPracticeQuestionCountOption = 12;

export const mathSeed = {
  subjectCode: 'math' as const,
  subjectTitle: 'Toán Lớp 6',
  unitTitle: 'Toán Lớp 6',
  lessons: mathLessons,
  lessonCards: mathLessonCards,
  questions: mathQuestions,
};

export function getActiveMathLessons() {
  return mathLessons.filter((lesson) => lesson.isActive).sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getMathLessonById(lessonId: number) {
  return mathLessons.find((lesson) => lesson.id === lessonId && lesson.isActive);
}

export function getMathLessonCards(lessonId: number) {
  return mathLessonCards.filter((card) => card.lessonId === lessonId && card.isActive).sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getMathLessonQuestions(lessonId: number) {
  return mathQuestions.filter((question) => question.lessonId === lessonId && question.isActive);
}

export function isPracticeQuestionCountOption(value: number): value is MathPracticeQuestionCountOption {
  return PRACTICE_QUESTION_COUNT_OPTIONS.some((option) => option.value === value);
}

export function getPracticeSamplingPolicy(questionCount: MathPracticeQuestionCountOption) {
  if (questionCount === 40) return null;

  return PRACTICE_SAMPLING_POLICIES[questionCount];
}

function shuffleQuestions<T>(items: T[]) {
  const next = [...items];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const current = next[index];
    next[index] = next[randomIndex];
    next[randomIndex] = current;
  }

  return next;
}

export function getMathLessonPracticeQuestions(
  lessonId: number,
  targetCount: MathPracticeQuestionCountOption = DEFAULT_PRACTICE_QUESTION_COUNT,
) {
  const questions = getMathLessonQuestions(lessonId);

  if (targetCount === 40) {
    return shuffleQuestions(questions);
  }

  const policy = getPracticeSamplingPolicy(targetCount);
  const selected = (['hard', 'easy', 'medium'] as const).flatMap((difficulty) => {
    const count = policy?.[difficulty] ?? 0;
    return shuffleQuestions(questions.filter((question) => question.difficulty === difficulty)).slice(0, count);
  });
  const selectedIds = new Set(selected.map((question) => question.id));
  const fallback = shuffleQuestions(questions.filter((question) => !selectedIds.has(question.id))).slice(
    0,
    Math.max(0, targetCount - selected.length),
  );

  return shuffleQuestions([...selected, ...fallback]).slice(0, targetCount);
}
