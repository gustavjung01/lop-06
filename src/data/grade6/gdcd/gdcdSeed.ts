import { gdcdLessonCards } from './gdcdLessonCards';
import { gdcdLessons } from './gdcdLessons';
import { gdcdQuestions } from './gdcdQuestions';
import type { GdcdDifficulty, GdcdPracticeQuestionCountChoice, GdcdPracticeQuestionCountOption } from './gdcdTypes';

export const DEFAULT_GDCD_PRACTICE_QUESTION_COUNT: GdcdPracticeQuestionCountOption = 12;

export const GDCD_PRACTICE_QUESTION_COUNT_OPTIONS: GdcdPracticeQuestionCountChoice[] = [
  {
    "value": 10,
    "title": "Luyện nhanh",
    "label": "10 câu",
    "description": "Ôn nhanh khái niệm và tình huống gần đời sống."
  },
  {
    "value": 12,
    "title": "Tiêu chuẩn",
    "label": "12 câu",
    "description": "Cân bằng giữa nhận biết, tình huống và tư liệu liên hệ."
  },
  {
    "value": 20,
    "title": "Luyện sâu",
    "label": "20 câu",
    "description": "Luyện nhiều tình huống hơn để hiểu cách ứng xử phù hợp."
  },
  {
    "value": 40,
    "title": "Thử thách đầy bài",
    "label": "40 câu",
    "description": "Làm toàn bộ ngân hàng câu hỏi của bài này."
  }
];

const samplingPolicy: Record<Exclude<GdcdPracticeQuestionCountOption, 40>, Record<GdcdDifficulty, number>> = {
  10: { easy: 4, medium: 4, hard: 2 },
  12: { easy: 5, medium: 5, hard: 2 },
  20: { easy: 6, medium: 10, hard: 4 },
};

export const gdcdSeed = {
  subjectCode: 'gdcd',
  subjectTitle: 'GDCD',
  grade: 6,
  lessons: gdcdLessons,
  cards: gdcdLessonCards,
  questions: gdcdQuestions,
};

export function getActiveGdcdLessons() {
  return gdcdLessons
    .filter((lesson) => lesson.isActive === 1)
    .sort((first, second) => first.sortOrder - second.sortOrder);
}

export function getGdcdLessonById(lessonId: number) {
  return gdcdLessons.find((lesson) => lesson.id === lessonId && lesson.isActive === 1);
}

export function getGdcdLessonCards(lessonId: number) {
  return gdcdLessonCards
    .filter((card) => card.lessonId === lessonId && card.isActive === 1)
    .sort((first, second) => first.sortOrder - second.sortOrder);
}

export function getGdcdLessonQuestions(lessonId: number) {
  return gdcdQuestions.filter((question) => question.lessonId === lessonId && question.isActive === 1);
}

export function isGdcdPracticeQuestionCountOption(value: number): value is GdcdPracticeQuestionCountOption {
  return GDCD_PRACTICE_QUESTION_COUNT_OPTIONS.some((option) => option.value === value);
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

export function getGdcdLessonPracticeQuestions(
  lessonId: number,
  targetCount: GdcdPracticeQuestionCountOption = DEFAULT_GDCD_PRACTICE_QUESTION_COUNT,
) {
  const questions = getGdcdLessonQuestions(lessonId);

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
