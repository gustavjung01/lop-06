import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dataDir = path.join(root, 'src/data/grade6/cong-nghe');

function readArray(fileName, exportName) {
  const filePath = path.join(dataDir, fileName);
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(new RegExp(`export const ${exportName}(?:: [^=]+)? = ([\\s\\S]*?)(?: satisfies [^;]+)?;\\s*$`));
  if (!match) throw new Error(`Cannot read ${exportName} from ${fileName}`);
  return JSON.parse(match[1]);
}

const lessons = readArray('congNgheLessons.ts', 'congNgheLessons');
const cards = readArray('congNgheLessonCards.ts', 'congNgheLessonCards');
const questions = readArray('congNgheQuestions.ts', 'congNgheQuestions');
const lessonIds = new Set(lessons.map((lesson) => lesson.id));
const lessonSlugs = lessons.map((lesson) => lesson.slug);
const duplicateLessonIds = lessons
  .map((lesson) => lesson.id)
  .filter((id, index, ids) => ids.indexOf(id) !== index);
const duplicateSlugs = lessonSlugs.filter((slug, index, slugs) => slugs.indexOf(slug) !== index);
const internalTextPattern = /dot-02|app-ready|demo|demon|MVP/i;
const mojibakePattern = /Ã|Ä|á»|áº|Æ|�|Lá»|sá»|Ä/;
const errors = [];

function checkText(label, value) {
  const text = JSON.stringify(value);
  if (internalTextPattern.test(text)) errors.push(`Internal text found in ${label}`);
  if (mojibakePattern.test(text)) errors.push(`Mojibake text found in ${label}`);
}

if (duplicateLessonIds.length) errors.push(`Duplicate lesson ids: ${duplicateLessonIds.join(', ')}`);
if (duplicateSlugs.length) errors.push(`Duplicate lesson slugs: ${duplicateSlugs.join(', ')}`);

for (const lesson of lessons) {
  if (!String(lesson.title || '').trim()) errors.push(`Lesson ${lesson.id} has empty title`);
  checkText(`lesson ${lesson.id}`, lesson);
}

for (const card of cards) {
  if (!lessonIds.has(card.lessonId)) errors.push(`Card ${card.id} points to missing lesson ${card.lessonId}`);
  if (!String(card.content || '').trim()) errors.push(`Card ${card.id} has empty content`);
  checkText(`card ${card.id}`, card);
}

for (const question of questions) {
  if (!lessonIds.has(question.lessonId)) errors.push(`Question ${question.id} points to missing lesson ${question.lessonId}`);
  if (!String(question.correctAnswer || '').trim()) errors.push(`Question ${question.id} has empty correctAnswer`);
  if (!String(question.answerText || '').trim()) errors.push(`Question ${question.id} has empty answerText`);
  if (!String(question.explanationSimple || '').trim()) errors.push(`Question ${question.id} has empty explanation`);
  if (question.options?.length && !question.options.some((option) => option.key === question.correctAnswer)) {
    errors.push(`Question ${question.id} correctAnswer does not match options`);
  }
  checkText(`question ${question.id}`, question);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      lessons: lessons.length,
      cards: cards.length,
      questions: questions.length,
      questionTypes: questions.reduce((acc, question) => {
        acc[question.questionType] = (acc[question.questionType] || 0) + 1;
        return acc;
      }, {}),
      difficulty: questions.reduce((acc, question) => {
        acc[question.difficulty] = (acc[question.difficulty] || 0) + 1;
        return acc;
      }, {}),
      ok: true,
    },
    null,
    2,
  ),
);
