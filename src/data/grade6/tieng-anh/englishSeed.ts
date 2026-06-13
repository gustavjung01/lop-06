import { englishLessonCards } from './englishLessonCards';
import { englishLessons } from './englishLessons';
import { englishQuestions } from './englishQuestions';

export type EnglishPracticeQuestionCountOption = 10 | 12 | 15 | 20 | 40;

type PracticeSamplingPolicy = { easy: number; medium: number; hard: number };

export const ENGLISH_PRACTICE_QUESTION_COUNT_OPTIONS: Array<{ value: EnglishPracticeQuestionCountOption; title: string; label: string; description: string }> = [
  { value: 10, title: 'Luyện nhanh', label: '10 câu', description: 'Ôn từ vựng và mẫu câu trong vài phút.' },
  { value: 12, title: 'Tiêu chuẩn', label: '12 câu', description: 'Vừa đủ để kiểm tra bài học sau khi xem thẻ kiến thức.' },
  { value: 15, title: 'Luyện chắc', label: '15 câu', description: 'Thêm câu ngữ cảnh để nhớ lâu hơn.' },
  { value: 20, title: 'Luyện sâu', label: '20 câu', description: 'Phù hợp khi muốn ôn kỹ một unit.' },
  { value: 40, title: 'Thử thách đủ bài', label: '40 câu', description: 'Làm toàn bộ kho câu hỏi của bài này.' },
];

const PRACTICE_SAMPLING_POLICIES: Record<Exclude<EnglishPracticeQuestionCountOption, 40>, PracticeSamplingPolicy> = {
  10: { easy: 4, medium: 4, hard: 2 },
  12: { easy: 5, medium: 5, hard: 2 },
  15: { easy: 5, medium: 7, hard: 3 },
  20: { easy: 6, medium: 10, hard: 4 },
};

export const DEFAULT_ENGLISH_PRACTICE_QUESTION_COUNT: EnglishPracticeQuestionCountOption = 12;

export const englishSeed = {
  subjectCode: 'tieng-anh' as const,
  subjectTitle: 'Tiếng Anh Lớp 6',
  unitTitle: 'Tiếng Anh Lớp 6',
  lessons: englishLessons,
  lessonCards: englishLessonCards,
  questions: englishQuestions,
};

export function getActiveEnglishLessons() {
  return englishLessons.filter((lesson) => lesson.isActive).sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getEnglishLessonById(lessonId: number) {
  return englishLessons.find((lesson) => lesson.id === lessonId && lesson.isActive);
}

export function getEnglishLessonCards(lessonId: number) {
  return englishLessonCards.filter((card) => card.lessonId === lessonId && card.isActive).sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getEnglishLessonQuestions(lessonId: number) {
  return englishQuestions.filter((question) => question.lessonId === lessonId && question.isActive);
}

export function isEnglishPracticeQuestionCountOption(value: number): value is EnglishPracticeQuestionCountOption {
  return ENGLISH_PRACTICE_QUESTION_COUNT_OPTIONS.some((option) => option.value === value);
}

export function getEnglishPracticeSamplingPolicy(questionCount: EnglishPracticeQuestionCountOption) {
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

export function getEnglishLessonPracticeQuestions(lessonId: number, targetCount: EnglishPracticeQuestionCountOption = DEFAULT_ENGLISH_PRACTICE_QUESTION_COUNT) {
  const questions = getEnglishLessonQuestions(lessonId);
  if (targetCount === 40) return shuffleQuestions(questions);
  const policy = getEnglishPracticeSamplingPolicy(targetCount);
  const selected = (['hard', 'easy', 'medium'] as const).flatMap((difficulty) => {
    const count = policy?.[difficulty] ?? 0;
    return shuffleQuestions(questions.filter((question) => question.difficulty === difficulty)).slice(0, count);
  });
  const selectedIds = new Set(selected.map((question) => question.id));
  const fallback = shuffleQuestions(questions.filter((question) => !selectedIds.has(question.id))).slice(0, Math.max(0, targetCount - selected.length));
  return shuffleQuestions([...selected, ...fallback]).slice(0, targetCount);
}
