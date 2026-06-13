import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dataDir = path.join(root, 'src/data/grade6/tieng-anh');
const srcDir = path.join(root, 'src');

function readArray(fileName, exportName) {
  const filePath = path.join(dataDir, fileName);
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(new RegExp(`export const ${exportName}: [^=]+ = ([\\s\\S]*);\\s*$`));
  if (!match) throw new Error(`Cannot read ${exportName} from ${fileName}`);
  return JSON.parse(match[1]);
}

function walkFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkFiles(fullPath);
    return fullPath;
  });
}

const lessons = readArray('englishLessons.ts', 'englishLessons');
const cards = readArray('englishLessonCards.ts', 'englishLessonCards');
const questions = readArray('englishQuestions.ts', 'englishQuestions');
const lessonIds = new Set(lessons.map((lesson) => lesson.id));
const duplicateLessonIds = lessons
  .map((lesson) => lesson.id)
  .filter((id, index, ids) => ids.indexOf(id) !== index);

const errors = [];
if (duplicateLessonIds.length) errors.push(`Duplicate lesson ids: ${duplicateLessonIds.join(', ')}`);

for (const card of cards) {
  if (!lessonIds.has(card.lessonId)) errors.push(`Card ${card.id} points to missing lesson ${card.lessonId}`);
}

for (const question of questions) {
  if (!lessonIds.has(question.lessonId)) errors.push(`Question ${question.id} points to missing lesson ${question.lessonId}`);
  if (!String(question.correctAnswer || '').trim()) errors.push(`Question ${question.id} has empty correctAnswer`);
  if (!String(question.answerText || '').trim()) errors.push(`Question ${question.id} has empty answerText`);
  if (!String(question.explanationSimple || '').trim()) errors.push(`Question ${question.id} has empty explanation`);
  if (question.options?.length && !question.options.some((option) => option.key === question.correctAnswer)) {
    errors.push(`Question ${question.id} correctAnswer does not match options`);
  }
}

const internalTextPattern = /dot-02|dot2|app-ready|app_ready|bundle|chunk|\bdemo\b|\bdemon\b|MVP/i;
for (const filePath of walkFiles(srcDir)) {
  if (!/\.(ts|tsx|json|css)$/.test(filePath)) continue;
  const content = fs.readFileSync(filePath, 'utf8');
  if (internalTextPattern.test(content)) {
    errors.push(`Internal text found in ${path.relative(root, filePath)}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(JSON.stringify({ lessons: lessons.length, cards: cards.length, questions: questions.length, ok: true }, null, 2));
