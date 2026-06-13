// Auto-generated from local Ngữ văn learning data. Do not edit counts by hand.
import { nguVanLessonCards } from './nguVanLessonCards';
import { nguVanLessons } from './nguVanLessons';
import { nguVanQuestions } from './nguVanQuestions';
import type { NguVanDifficulty } from './nguVanTypes';

export const nguVanSeed = { subjectCode: 'ngu-van', subjectTitle: 'Ngữ văn', grade: 6, lessons: nguVanLessons, cards: nguVanLessonCards, questions: nguVanQuestions };
export function getActiveNguVanLessons() { return nguVanLessons.filter((lesson) => lesson.isActive === 1).sort((a, b) => a.sortOrder - b.sortOrder); }
export function getNguVanLessonById(lessonId: number) { return nguVanLessons.find((lesson) => lesson.id === lessonId && lesson.isActive === 1); }
export function getNguVanLessonCards(lessonId: number) { return nguVanLessonCards.filter((card) => card.lessonId === lessonId && card.isActive === 1).sort((a, b) => a.sortOrder - b.sortOrder); }
export function getNguVanLessonQuestions(lessonId: number) { return nguVanQuestions.filter((question) => question.lessonId === lessonId && question.isActive === 1); }
export function getNguVanLessonPracticeQuestions(lessonId: number, count = 12) {
  const questions = getNguVanLessonQuestions(lessonId);
  if (count >= 40) return shuffleItems(questions);

  const policy = getSamplingPolicy(count);
  const selected = (['hard', 'easy', 'medium'] as const).flatMap((difficulty) => {
    return shuffleItems(questions.filter((question) => question.difficulty === difficulty)).slice(0, policy[difficulty]);
  });
  const selectedIds = new Set(selected.map((question) => question.id));
  const fallback = shuffleItems(questions.filter((question) => !selectedIds.has(question.id))).slice(0, Math.max(0, count - selected.length));

  return shuffleItems([...selected, ...fallback]).slice(0, count);
}
function getSamplingPolicy(count: number): Record<NguVanDifficulty, number> {
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
