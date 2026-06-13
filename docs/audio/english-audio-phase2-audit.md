# English Audio Phase 2 Audit

Date: 2026-05-25

## What is already wired

- Lesson card audio: present
- Question audio: present
- Full lesson playback button: present
- Practice auto-play-next toggle: present
- Manual audio playback stops the previous audio before starting a new one

## Manifest coverage

Source: `public/audio/tts/manifest.json`

- `lesson-card`: 288 items
- `question`: 1440 items
- `vocabulary-word`: 0 items
- `question-option`: 0 items

Total manifest items: 1728

## Missing audio for phase 2

The current English data has:

- vocabulary entries: 432
- question option instances: 3136

Those are not yet covered by the current manifest, so:

- vocabulary word buttons stay hidden until matching audio exists
- option audio buttons stay hidden until matching audio exists

## English-only playback rule

The lesson detail playlist only includes English-only content.
Mixed English-Vietnamese text is filtered out from the "Nghe toàn bộ" queue.

## Vietnamese voice audit

Local cap-01 evidence confirms the Vietnamese static voice profile naming convention:

- `vi-v1`

No stronger per-voice ID was confirmed from the local audit beyond that profile name.

## Files updated in phase 2

- `src/modules/english/utils/englishAudio.ts`
- `src/modules/english/utils/englishAudioText.ts`
- `src/modules/english/components/EnglishAudioButton.tsx`
- `src/modules/english/components/EnglishContentCard.tsx`
- `src/modules/english/components/EnglishQuestionCard.tsx`
- `src/modules/english/pages/EnglishLessonDetailPage.tsx`
- `src/modules/english/pages/EnglishPracticePage.tsx`

## Build

- `npm run build`: pass

## Follow-up for audio content

To enable vocabulary and option audio buttons, we need additional manifest entries and matching audio files for:

- vocabulary-word
- question-option

No extra upload was performed in this phase.
