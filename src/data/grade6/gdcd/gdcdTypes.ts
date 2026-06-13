export type GdcdDifficulty = 'easy' | 'medium' | 'hard';

export type GdcdTopicType = 'tu_nhan_thuc' | 'dao_duc' | 'phap_luat' | 'ky_nang_song' | 'cong_dong';

export type GdcdLesson = {
  id: number;
  sourceId: string;
  grade: 6;
  subjectCode: 'gdcd';
  unitCode: string;
  unitTitle: string;
  topicType: GdcdTopicType;
  lessonCode: string;
  slug: string;
  title: string;
  objectives: string[];
  keyPoints: string[];
  keywords: Record<string, string>;
  examples: string[];
  commonMistakes: string[];
  summarySimple: string;
  difficulty: GdcdDifficulty;
  estimatedMinutes: number;
  status: 'draft' | 'ready' | 'archived';
  sortOrder: number;
  isActive: 0 | 1;
};

export type GdcdLessonCard = {
  id: number;
  sourceId: string;
  lessonId: number;
  cardType: 'intro' | 'explain' | 'example' | 'tip' | 'mini_check';
  title: string;
  content: string;
  sortOrder: number;
  isActive: 0 | 1;
};

export type GdcdQuestionType = 'single_choice' | 'true_false' | 'fill_text' | 'scenario_choice' | 'order_steps';

export type GdcdQuestionOption = { key: string; text: string; };

export type GdcdQuestion = {
  id: number;
  sourceId: string;
  lessonId: number;
  questionType: GdcdQuestionType;
  questionText: string;
  options: GdcdQuestionOption[] | null;
  correctAnswer: string;
  answerText: string;
  explanationSimple: string;
  difficulty: GdcdDifficulty;
  skillTag: string;
  tags: string[];
  isActive: 0 | 1;
};

export type GdcdPracticeQuestionCountOption = 10 | 12 | 20 | 40;

export type GdcdPracticeQuestionCountChoice = {
  value: GdcdPracticeQuestionCountOption;
  title: string;
  label: string;
  description: string;
};
