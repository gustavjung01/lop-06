export type KhtnDifficulty = 'easy' | 'medium' | 'hard';

export type KhtnLesson = {
  id: number;
  sourceId: string;
  grade: 6;
  subjectCode: 'khtn';
  unitCode: string;
  unitTitle: string;
  lessonCode: string;
  slug: string;
  title: string;
  objectives: string[];
  keyPoints: string[];
  keywords: Record<string, string>;
  examples: string[];
  commonMistakes: string[];
  summarySimple: string;
  difficulty: KhtnDifficulty;
  estimatedMinutes: number;
  status: 'draft' | 'ready' | 'archived';
  sortOrder: number;
  isActive: 0 | 1;
};

export type KhtnLessonCard = {
  id: number;
  sourceId: string;
  lessonId: number;
  cardType: string;
  title: string;
  content: string;
  sortOrder: number;
  isActive: 0 | 1;
};

export type KhtnQuestionType = 'single_choice' | 'true_false' | 'fill_text' | 'scenario_choice';

export type KhtnQuestionOption = {
  key: string;
  text: string;
};

export type KhtnQuestion = {
  id: number;
  sourceId: string;
  lessonId: number;
  questionType: KhtnQuestionType;
  questionText: string;
  options: KhtnQuestionOption[] | null;
  correctAnswer: string;
  answerText: string;
  explanationSimple: string;
  difficulty: KhtnDifficulty;
  skillTag: string;
  tags: string[];
  isActive: 0 | 1;
};

export type KhtnPracticeQuestionCountOption = 10 | 12 | 20 | 40;

export type KhtnPracticeQuestionCountChoice = {
  value: KhtnPracticeQuestionCountOption;
  title: string;
  label: string;
  description: string;
};
