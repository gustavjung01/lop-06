// Auto-generated from local KHTN learning data. Do not edit counts by hand.
import { khtnLessonCards } from './khtnLessonCards';
import { khtnLessons } from './khtnLessons';
import { khtnQuestions } from './khtnQuestions';
import type { KhtnDifficulty } from './khtnTypes';

export const khtnSeed = {
  subjectCode: 'khtn',
  subjectTitle: 'Khoa học tự nhiên',
  grade: 6,
  lessons: khtnLessons,
  cards: khtnLessonCards,
  questions: khtnQuestions,
};

export function getActiveKhtnLessons() {
  return khtnLessons
    .filter((lesson) => lesson.isActive === 1)
    .sort((first, second) => first.sortOrder - second.sortOrder);
}

export function getKhtnLessonById(lessonId: number) {
  return khtnLessons.find((lesson) => lesson.id === lessonId && lesson.isActive === 1);
}

export function getKhtnLessonCards(lessonId: number) {
  return khtnLessonCards
    .filter((card) => card.lessonId === lessonId && card.isActive === 1)
    .sort((first, second) => first.sortOrder - second.sortOrder);
}

export function getKhtnLessonQuestions(lessonId: number) {
  return khtnQuestions.filter((question) => question.lessonId === lessonId && question.isActive === 1);
}

export function getKhtnLessonPracticeQuestions(lessonId: number, count = 12) {
  const questions = getKhtnLessonQuestions(lessonId);
  if (count >= 40) return shuffleItems(questions);

  const policy = getSamplingPolicy(count);
  const selected = (['hard', 'easy', 'medium'] as const).flatMap((difficulty) => {
    return shuffleItems(questions.filter((question) => question.difficulty === difficulty)).slice(0, policy[difficulty]);
  });
  const selectedIds = new Set(selected.map((question) => question.id));
  const fallback = shuffleItems(questions.filter((question) => !selectedIds.has(question.id))).slice(
    0,
    Math.max(0, count - selected.length),
  );

  return shuffleItems([...selected, ...fallback]).slice(0, count);
}

function getSamplingPolicy(count: number): Record<KhtnDifficulty, number> {
  if (count <= 10) return { easy: 4, medium: 4, hard: 2 };
  if (count <= 12) return { easy: 5, medium: 5, hard: 2 };
  return { easy: 6, medium: 10, hard: 4 };
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
