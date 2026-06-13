export type TinHocDifficulty = 'easy' | 'medium' | 'hard';

export type TinHocTopicType = 'may_tinh' | 'internet' | 'an_toan_so' | 'thuat_toan' | 'ung_dung';

export type TinHocLesson = {
  id: number;
  sourceId: string;
  grade: 6;
  subjectCode: 'tin-hoc';
  unitCode: string;
  unitTitle: string;
  topicType: TinHocTopicType;
  lessonCode: string;
  slug: string;
  title: string;
  objectives: string[];
  keyPoints: string[];
  keywords: Record<string, string>;
  examples: string[];
  commonMistakes: string[];
  summarySimple: string;
  difficulty: TinHocDifficulty;
  estimatedMinutes: number;
  status: 'draft' | 'ready' | 'archived';
  sortOrder: number;
  isActive: 0 | 1;
};

export type TinHocLessonCard = {
  id: number;
  sourceId: string;
  lessonId: number;
  cardType: 'intro' | 'explain' | 'example' | 'tip' | 'mini_check';
  title: string;
  content: string;
  sortOrder: number;
  isActive: 0 | 1;
};

export type TinHocQuestionType = 'single_choice' | 'true_false' | 'fill_text' | 'scenario_choice' | 'order_steps';

export type TinHocQuestionOption = {
  key: string;
  text: string;
};

export type TinHocQuestion = {
  id: number;
  sourceId: string;
  lessonId: number;
  questionType: TinHocQuestionType;
  questionText: string;
  options: TinHocQuestionOption[] | null;
  correctAnswer: string;
  answerText: string;
  explanationSimple: string;
  difficulty: TinHocDifficulty;
  skillTag: string;
  tags: string[];
  isActive: 0 | 1;
};

export type TinHocPracticeQuestionCountOption = 10 | 12 | 20 | 40;

export type TinHocPracticeQuestionCountChoice = {
  value: TinHocPracticeQuestionCountOption;
  title: string;
  label: string;
  description: string;
};
