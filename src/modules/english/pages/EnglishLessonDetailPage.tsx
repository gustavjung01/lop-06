import { ArrowLeft, BookOpenCheck, Clock, MessageCircle, PlayCircle, Volume2 } from 'lucide-react';
import { useMemo } from 'react';

import type { EnglishLesson } from '../../../data/grade6/tieng-anh';
import { getEnglishLessonCards, getEnglishLessonQuestions } from '../../../data/grade6/tieng-anh';
import { EnglishContentCard } from '../components/EnglishContentCard';
import { EnglishAudioButton } from '../components/EnglishAudioButton';
import { isLikelyEnglishAudioText } from '../utils/englishAudioText';
import { buildEnglishAudioSourceId, buildVietnameseGlossSourceId } from '../utils/englishAudioKeys';
import { playEnglishAudioSequence } from '../utils/englishAudio';

type EnglishLessonDetailPageProps = {
  lesson: EnglishLesson;
  onBack: () => void;
  onPractice: (lessonId: number) => void;
};

const lessonTypeLabel: Record<EnglishLesson['lessonType'], string> = {
  vocabulary: 'Từ vựng',
  grammar: 'Ngữ pháp',
  skills: 'Đọc, nói, viết',
};

function toVocabularySourceId(word: string) {
  return buildEnglishAudioSourceId('vocabulary-word', word);
}

function toVietnameseGlossSourceId(lessonSourceId: string, word: string) {
  return buildVietnameseGlossSourceId(lessonSourceId, word);
}

export function EnglishLessonDetailPage({ lesson, onBack, onPractice }: EnglishLessonDetailPageProps) {
  const cards = getEnglishLessonCards(lesson.id);
  const questions = getEnglishLessonQuestions(lesson.id);
  const vocabularyEntries = Object.entries(lesson.vocabulary).slice(0, 12);

  const lessonAudioPlaylist = useMemo(
    () =>
      [
        ...vocabularyEntries
          .filter(([word]) => isLikelyEnglishAudioText(word))
          .map(([word]) => ({ sourceType: 'vocabulary-word' as const, sourceId: toVocabularySourceId(word), lessonId: lesson.id })),
        ...cards
        .filter((card) => isLikelyEnglishAudioText(card.audioText ?? card.content))
        .map((card) => ({ sourceType: 'lesson-card' as const, sourceId: card.sourceId, lessonId: card.lessonId })),
      ].filter((item) => Boolean(item.sourceId)),
    [cards, vocabularyEntries],
  );

  return (
    <section className="mx-auto w-full max-w-5xl min-w-0 px-4 py-8 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={onBack}
        className="mb-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
      >
        <ArrowLeft className="h-4 w-4" />
        Danh sách bài
      </button>

      <div className="w-full max-w-full min-w-0 rounded-3xl border border-indigo-100 bg-white p-5 shadow-sm">
        <div className="flex min-w-0 flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-indigo-700">
              Unit {lesson.unitNumber} - {lessonTypeLabel[lesson.lessonType]}
            </p>
            <h1 className="mt-2 text-3xl font-black leading-tight text-slate-950 [overflow-wrap:anywhere]">{lesson.title}</h1>
            <p className="mt-3 text-base leading-7 text-slate-600 [overflow-wrap:anywhere]">{lesson.summarySimple}</p>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-2 md:w-auto md:shrink-0">
            <button
              type="button"
              onClick={() => void playEnglishAudioSequence(lessonAudioPlaylist)}
              disabled={!lessonAudioPlaylist.length}
              className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl border border-indigo-200 bg-indigo-50 px-5 py-3 text-sm font-black text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-100 hover:text-indigo-800 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-400 md:w-auto"
              title={lessonAudioPlaylist.length ? 'Nghe toàn bộ các đoạn tiếng Anh thuần trong bài' : 'Chưa có đoạn tiếng Anh thuần để phát'}
            >
              <Volume2 className="h-5 w-5" />
              Nghe toàn bộ
            </button>
            <button
              type="button"
              onClick={() => onPractice(lesson.id)}
              className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 md:w-auto"
            >
              <PlayCircle className="h-5 w-5" />
              Luyện tập bài này
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-black text-indigo-700">{cards.length} thẻ nội dung</span>
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black text-amber-700">{questions.length} câu hỏi</span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">{lesson.estimatedMinutes} phút</span>
        </div>

        <div className="mt-5 grid min-w-0 gap-3 rounded-2xl bg-slate-50 p-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              <BookOpenCheck className="h-4 w-4" />
              Mục tiêu
            </p>
            <ul className="mt-2 grid gap-2 text-sm leading-6 text-slate-700">
              {lesson.objectives.map((objective) => (
                <li key={objective} className="[overflow-wrap:anywhere]">- {objective}</li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              <MessageCircle className="h-4 w-4" />
              Mẫu giao tiếp
            </p>
            <div className="mt-2 grid gap-2 text-sm leading-6 text-slate-700">
              {lesson.communicationPatterns.slice(0, 3).map((pattern) => (
                <p key={pattern.question} className="[overflow-wrap:anywhere]">
                  <strong>{pattern.question}</strong> - {pattern.answer}
                </p>
              ))}
            </div>
          </div>
        </div>

        {vocabularyEntries.length ? (
          <div className="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-indigo-700">Từ vựng nổi bật</p>
            <div className="mt-3 grid min-w-0 gap-2 sm:grid-cols-[repeat(2,minmax(0,1fr))] lg:grid-cols-[repeat(3,minmax(0,1fr))]">
              {vocabularyEntries.map(([word, meaning]) => (
                <div key={word} className="min-w-0 rounded-2xl bg-white px-3 py-2 text-sm ring-1 ring-indigo-100">
                  <div className="flex min-w-0 items-start justify-between gap-2">
                    <p className="min-w-0 flex-1 font-black text-slate-950 [overflow-wrap:anywhere]">{word}</p>
                    <EnglishAudioButton
                      sourceType="vocabulary-word"
                      sourceId={toVocabularySourceId(word)}
                      lessonId={lesson.id}
                      label={word}
                      compact
                      className="shrink-0"
                    />
                  </div>
                  <div className="mt-1 flex min-w-0 items-start justify-between gap-2">
                    <p className="min-w-0 flex-1 text-slate-600 [overflow-wrap:anywhere]">{meaning}</p>
                    <EnglishAudioButton
                      sourceType="vietnamese-gloss"
                      sourceId={toVietnameseGlossSourceId(lesson.sourceId, word)}
                      lessonId={lesson.id}
                      label={meaning}
                      compact
                      className="shrink-0 border-emerald-200 bg-emerald-50 text-emerald-700 hover:border-emerald-300 hover:bg-emerald-100 hover:text-emerald-800"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-6 grid min-w-0 gap-4">
        {cards.map((card, index) => (
          <EnglishContentCard key={card.id} card={card} index={index} total={cards.length} />
        ))}
      </div>

      <div className="mt-6 w-full max-w-full min-w-0 rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm">
        <Clock className="mx-auto h-8 w-8 text-indigo-700" />
        <h2 className="mt-2 text-lg font-black text-slate-950 [overflow-wrap:anywhere]">Sẵn sàng luyện tập?</h2>
        <p className="mt-1 text-sm text-slate-600 [overflow-wrap:anywhere]">
          Kho câu hỏi bài này có {questions.length} câu. Mỗi lượt nên chọn số câu vừa sức để ôn đều.
        </p>
        <button
          type="button"
          onClick={() => onPractice(lesson.id)}
          className="mt-4 inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-indigo-700 sm:w-auto"
        >
          <PlayCircle className="h-4 w-4" />
          Bắt đầu luyện tập
        </button>
      </div>
    </section>
  );
}
