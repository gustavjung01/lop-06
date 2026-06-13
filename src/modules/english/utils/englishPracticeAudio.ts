import type { EnglishQuestion } from '../../../data/grade6/tieng-anh';
import type { EnglishAudioSourceRef } from './englishAudio';
import { buildEnglishAudioSourceId } from './englishAudioKeys';

export function buildEnglishQuestionAudioSequence(question: EnglishQuestion): EnglishAudioSourceRef[] {
  const sequence: EnglishAudioSourceRef[] = [
    {
      sourceType: 'question',
      sourceId: question.sourceId,
      lessonId: question.lessonId,
    },
  ];

  if (question.options?.length && (question.questionType === 'single_choice' || question.questionType === 'true_false')) {
    sequence.push(
      ...question.options.map((option) => ({
        sourceType: 'question-option' as const,
        sourceId: buildEnglishAudioSourceId('question-option', option.text || option.key),
        lessonId: question.lessonId,
      })),
    );
  }

  return sequence;
}
