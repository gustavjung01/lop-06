export type MathDifficulty = 'easy' | 'medium' | 'hard';

export type MathLesson = {
  id: number;
  grade: 6;
  subjectCode: 'math';
  unitCode: string;
  lessonCode: string;
  title: string;
  objective: string;
  summarySimple: string;
  tips: string;
  difficulty: MathDifficulty;
  estimatedMinutes: number;
  status: 'draft' | 'ready' | 'archived';
  sortOrder: number;
  isActive: 0 | 1;
};

export type MathLessonCard = {
  id: number;
  lessonId: number;
  cardType: 'intro' | 'explain' | 'example' | 'tip' | 'mini_check';
  title: string;
  content: string;
  exampleJson: string | null;
  sortOrder: number;
  isActive: 0 | 1;
};

export type MathQuestion = {
  id: number;
  grade: 6;
  subjectCode: 'math';
  lessonId: number;
  questionType: 'single_choice' | 'scenario_choice' | 'true_false' | 'fill_number';
  questionText: string;
  optionsJson: string | null;
  correctAnswer: string;
  explanationSimple: string;
  wrongAnswerExplanations?: Record<string, string>;
  difficulty: MathDifficulty;
  skillTag: string;
  sourceType: 'manual' | 'generated' | 'imported';
  isVerified: 0 | 1;
  isActive: 0 | 1;
};

export type MathAnswerState = {
  selectedAnswer: string;
  isCorrect: boolean;
};
