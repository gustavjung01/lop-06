export type NguVanDifficulty = 'easy' | 'medium' | 'hard';

export type NguVanLesson = {
  id: number; sourceId: string; grade: 6; subjectCode: 'ngu-van'; unitCode: string; unitTitle: string; lessonCode: string;
  skillType: string; textType: string; slug: string; title: string; focus: string; objectives: string[]; keyPoints: string[];
  keywords: Record<string, string>; miniText: string; examples: string[]; commonMistakes: string[]; summarySimple: string;
  difficulty: NguVanDifficulty; estimatedMinutes: number; status: 'draft' | 'ready' | 'archived'; sortOrder: number; isActive: 0 | 1;
};

export type NguVanLessonCard = { id: number; sourceId: string; lessonId: number; cardType: string; title: string; content: string; sortOrder: number; isActive: 0 | 1; };
export type NguVanQuestionType = 'single_choice' | 'true_false' | 'short_answer' | 'scenario_choice' | 'writing_prompt';
export type NguVanQuestionOption = { key: string; text: string; };
export type NguVanQuestion = {
  id: number; sourceId: string; lessonId: number; questionType: NguVanQuestionType; questionText: string; options: NguVanQuestionOption[] | null;
  correctAnswer: string; answerText: string; explanationSimple: string; difficulty: NguVanDifficulty; skillTag: string; tags: string[];
  audioKey?: string; audioText?: string; isActive: 0 | 1;
};
export type NguVanPracticeQuestionCountOption = 10 | 12 | 20 | 40;
export type NguVanPracticeQuestionCountChoice = { value: NguVanPracticeQuestionCountOption; title: string; label: string; description: string; };
