export type CongNgheDifficulty = 'easy' | 'medium' | 'hard';

export type CongNgheTopicType = 'nha_o' | 'vat_lieu' | 'thuc_pham' | 'trang_phuc' | 'do_dung' | 'quy_trinh';

export type CongNgheLesson = {
  id: number;
  sourceId: string;
  grade: 6;
  subjectCode: 'cong-nghe';
  unitCode: string;
  unitTitle: string;
  topicType: CongNgheTopicType;
  lessonCode: string;
  slug: string;
  title: string;
  objectives: string[];
  keyPoints: string[];
  keywords: Record<string, string>;
  examples: string[];
  commonMistakes: string[];
  summarySimple: string;
  difficulty: CongNgheDifficulty;
  estimatedMinutes: number;
  status: 'draft' | 'ready' | 'archived';
  sortOrder: number;
  isActive: 0 | 1;
};

export type CongNgheLessonCard = {
  id: number;
  sourceId: string;
  lessonId: number;
  cardType: 'intro' | 'explain' | 'example' | 'tip' | 'mini_check';
  title: string;
  content: string;
  sortOrder: number;
  isActive: 0 | 1;
};

export type CongNgheQuestionType = 'single_choice' | 'true_false' | 'fill_text' | 'scenario_choice' | 'order_steps';

export type CongNgheQuestionOption = {
  key: string;
  text: string;
};

export type CongNgheQuestion = {
  id: number;
  sourceId: string;
  lessonId: number;
  questionType: CongNgheQuestionType;
  questionText: string;
  options: CongNgheQuestionOption[] | null;
  correctAnswer: string;
  answerText: string;
  explanationSimple: string;
  difficulty: CongNgheDifficulty;
  skillTag: string;
  tags: string[];
  isActive: 0 | 1;
};

export type CongNghePracticeQuestionCountOption = 10 | 12 | 20 | 40;

export type CongNghePracticeQuestionCountChoice = {
  value: CongNghePracticeQuestionCountOption;
  title: string;
  label: string;
  description: string;
};
