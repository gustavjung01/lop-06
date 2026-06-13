import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dataDir = path.join(root, 'src/data/grade6/khtn');

function readArray(fileName, exportName) {
  const filePath = path.join(dataDir, fileName);
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(new RegExp(`export const ${exportName}: [^=]+ = ([\\s\\S]*);\\s*$`));
  if (!match) throw new Error(`Cannot read ${exportName} from ${fileName}`);
  return JSON.parse(match[1]);
}

const lessons = readArray('khtnLessons.ts', 'khtnLessons');
const cards = readArray('khtnLessonCards.ts', 'khtnLessonCards');
const questions = readArray('khtnQuestions.ts', 'khtnQuestions');
const lessonIds = new Set(lessons.map((lesson) => lesson.id));
const lessonSlugs = lessons.map((lesson) => lesson.slug);
const duplicateLessonIds = lessons
  .map((lesson) => lesson.id)
  .filter((id, index, ids) => ids.indexOf(id) !== index);
const duplicateSlugs = lessonSlugs.filter((slug, index, slugs) => slugs.indexOf(slug) !== index);
const internalTextPattern = /dot-02|dot2|app-ready|app_ready|demo|demon|MVP|bundle|chunk|preset/i;
const errors = [];

if (duplicateLessonIds.length) errors.push(`Duplicate lesson ids: ${duplicateLessonIds.join(', ')}`);
if (duplicateSlugs.length) errors.push(`Duplicate lesson slugs: ${duplicateSlugs.join(', ')}`);

for (const lesson of lessons) {
  if (!String(lesson.title || '').trim()) errors.push(`Lesson ${lesson.id} has empty title`);
  if (internalTextPattern.test(JSON.stringify(lesson))) errors.push(`Internal text found in lesson ${lesson.id}`);
}

for (const card of cards) {
  if (!lessonIds.has(card.lessonId)) errors.push(`Card ${card.id} points to missing lesson ${card.lessonId}`);
  if (!String(card.content || '').trim()) errors.push(`Card ${card.id} has empty content`);
  if (internalTextPattern.test(JSON.stringify(card))) errors.push(`Internal text found in card ${card.id}`);
}

for (const question of questions) {
  if (!lessonIds.has(question.lessonId)) errors.push(`Question ${question.id} points to missing lesson ${question.lessonId}`);
  if (!String(question.correctAnswer || '').trim()) errors.push(`Question ${question.id} has empty correctAnswer`);
  if (!String(question.answerText || '').trim()) errors.push(`Question ${question.id} has empty answerText`);
  if (!String(question.explanationSimple || '').trim()) errors.push(`Question ${question.id} has empty explanation`);
  if (question.options?.length && !question.options.some((option) => option.key === question.correctAnswer)) {
    errors.push(`Question ${question.id} correctAnswer does not match options`);
  }
  if (internalTextPattern.test(JSON.stringify(question))) errors.push(`Internal text found in question ${question.id}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(JSON.stringify({ lessons: lessons.length, cards: cards.length, questions: questions.length, ok: true }, null, 2));
