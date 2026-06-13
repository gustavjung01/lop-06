export type EnglishDifficulty = 'easy' | 'medium' | 'hard';

export type EnglishLessonType = 'vocabulary' | 'grammar' | 'skills';

export type EnglishLesson = {
  id: number;
  sourceId: string;
  grade: 6;
  subjectCode: 'tieng-anh';
  unitCode: string;
  unitNumber: number;
  unitTitle: string;
  lessonCode: string;
  lessonType: EnglishLessonType;
  slug: string;
  title: string;
  topic: string;
  objectives: string[];
  vocabulary: Record<string, string>;
  grammarFocus: Array<{ name: string; rule: string }>;
  communicationPatterns: Array<{ question: string; answer: string }>;
  summarySimple: string;
  difficulty: EnglishDifficulty;
  estimatedMinutes: number;
  status: 'draft' | 'ready' | 'archived';
  sortOrder: number;
  isActive: 0 | 1;
};

export type EnglishLessonCard = {
  id: number;
  sourceId: string;
  lessonId: number;
  cardType: 'intro' | 'explain' | 'example' | 'tip' | 'common_mistake' | 'mini_check' | 'recap';
  title: string;
  content: string;
  sortOrder: number;
  isActive: 0 | 1;
  audioKey?: string;
  audioText?: string;
};

export type EnglishQuestionType = 'single_choice' | 'true_false' | 'fill_text' | 'reorder_sentence' | 'writing_prompt';

export type EnglishQuestionOption = {
  key: string;
  text: string;
};

export type EnglishQuestion = {
  id: number;
  sourceId: string;
  lessonId: number;
  questionType: EnglishQuestionType;
  questionText: string;
  options: EnglishQuestionOption[] | null;
  correctAnswer: string;
  answerText: string;
  explanationSimple: string;
  difficulty: EnglishDifficulty;
  skillTag: string;
  tags: string[];
  audioKey?: string;
  audioText?: string;
  isActive: 0 | 1;
};
