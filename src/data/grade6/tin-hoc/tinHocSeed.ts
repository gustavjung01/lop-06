// Auto-generated from local Tin học learning data. Do not edit counts by hand.
import { tinHocLessonCards } from './tinHocLessonCards';
import { tinHocLessons } from './tinHocLessons';
import { tinHocQuestions } from './tinHocQuestions';
import type { TinHocDifficulty, TinHocPracticeQuestionCountChoice, TinHocPracticeQuestionCountOption } from './tinHocTypes';

export const DEFAULT_TIN_HOC_PRACTICE_QUESTION_COUNT: TinHocPracticeQuestionCountOption = 12;

export const TIN_HOC_PRACTICE_QUESTION_COUNT_OPTIONS: TinHocPracticeQuestionCountChoice[] = [
  {
    value: 10,
    title: 'Luyện nhanh',
    label: '10 câu',
    description: 'Ôn nhanh khái niệm và thao tác chính.',
  },
  {
    value: 12,
    title: 'Tiêu chuẩn',
    label: '12 câu',
    description: 'Cân bằng giữa khái niệm, tình huống và thao tác.',
  },
  {
    value: 20,
    title: 'Luyện sâu',
    label: '20 câu',
    description: 'Luyện nhiều câu hơn để chắc bài.',
  },
  {
    value: 40,
    title: 'Thử thách đủ bài',
    label: '40 câu',
    description: 'Làm toàn bộ ngân hàng câu hỏi của bài này.',
  },
];

const samplingPolicy: Record<Exclude<TinHocPracticeQuestionCountOption, 40>, Record<TinHocDifficulty, number>> = {
  10: { easy: 4, medium: 4, hard: 2 },
  12: { easy: 5, medium: 5, hard: 2 },
  20: { easy: 6, medium: 10, hard: 4 },
};

export const tinHocSeed = {
  subjectCode: 'tin-hoc',
  subjectTitle: 'Tin học',
  grade: 6,
  lessons: tinHocLessons,
  cards: tinHocLessonCards,
  questions: tinHocQuestions,
};

export function getActiveTinHocLessons() {
  return tinHocLessons
    .filter((lesson) => lesson.isActive === 1)
    .sort((first, second) => first.sortOrder - second.sortOrder);
}

export function getTinHocLessonById(lessonId: number) {
  return tinHocLessons.find((lesson) => lesson.id === lessonId && lesson.isActive === 1);
}

export function getTinHocLessonCards(lessonId: number) {
  return tinHocLessonCards
    .filter((card) => card.lessonId === lessonId && card.isActive === 1)
    .sort((first, second) => first.sortOrder - second.sortOrder);
}

export function getTinHocLessonQuestions(lessonId: number) {
  return tinHocQuestions.filter((question) => question.lessonId === lessonId && question.isActive === 1);
}

export function isTinHocPracticeQuestionCountOption(value: number): value is TinHocPracticeQuestionCountOption {
  return TIN_HOC_PRACTICE_QUESTION_COUNT_OPTIONS.some((option) => option.value === value);
}

function shuffleItems<T>(items: T[]) {
  const next = [...items];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const current = next[index];
    next[index] = next[randomIndex];
    next[randomIndex] = current;
  }

  return next;
}

export function getTinHocLessonPracticeQuestions(
  lessonId: number,
  targetCount: TinHocPracticeQuestionCountOption = DEFAULT_TIN_HOC_PRACTICE_QUESTION_COUNT,
) {
  const questions = getTinHocLessonQuestions(lessonId);

  if (targetCount === 40) {
    return shuffleItems(questions);
  }

  const policy = samplingPolicy[targetCount];
  const selected = (['hard', 'easy', 'medium'] as const).flatMap((difficulty) => {
    return shuffleItems(questions.filter((question) => question.difficulty === difficulty)).slice(0, policy[difficulty]);
  });
  const selectedIds = new Set(selected.map((question) => question.id));
  const fallback = shuffleItems(questions.filter((question) => !selectedIds.has(question.id))).slice(
    0,
    Math.max(0, targetCount - selected.length),
  );

  return shuffleItems([...selected, ...fallback]).slice(0, targetCount);
}
