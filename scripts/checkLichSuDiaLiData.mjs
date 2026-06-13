import fs from 'node:fs';
import path from 'node:path';
const root = process.cwd();
const dataDir = path.join(root, 'src/data/grade6/lich-su-dia-li');
function readArray(fileName, exportName) { const content = fs.readFileSync(path.join(dataDir, fileName), 'utf8'); const match = content.match(new RegExp(`export const ${exportName}: [^=]+ = ([\\s\\S]*);\\s*$`)); if (!match) throw new Error(`Cannot read ${exportName}`); return JSON.parse(match[1]); }
const lessons = readArray('lichSuDiaLiLessons.ts', 'lichSuDiaLiLessons');
const cards = readArray('lichSuDiaLiLessonCards.ts', 'lichSuDiaLiLessonCards');
const questions = readArray('lichSuDiaLiQuestions.ts', 'lichSuDiaLiQuestions');
const lessonIds = new Set(lessons.map((lesson) => lesson.id));
const errors = [];
const internal = /dot-02|dot2|app-ready|app_ready|\bdemo\b|\bdemon\b|MVP|bundle|chunk|preset/i;
const mojibake = /Ã|Ä|á»|áº|Æ|�|Lá»|sá»|Ä/;
const dupIds = lessons.map((l) => l.id).filter((id, i, ids) => ids.indexOf(id) !== i);
const dupSlugs = lessons.map((l) => l.slug).filter((slug, i, slugs) => slugs.indexOf(slug) !== i);
if (dupIds.length) errors.push(`Duplicate lesson ids: ${dupIds.join(', ')}`);
if (dupSlugs.length) errors.push(`Duplicate slugs: ${dupSlugs.join(', ')}`);

function checkText(label, value) {
  const text = String(value ?? '');
  if (internal.test(text)) errors.push(`Internal text found in ${label}`);
  if (mojibake.test(text)) errors.push(`Mojibake text found in ${label}: ${text.slice(0, 120)}`);
}

function checkTextList(label, values) {
  for (const [index, value] of (values || []).entries()) checkText(`${label}[${index}]`, value);
}

for (const lesson of lessons) {
  if (!['lich_su','dia_li'].includes(lesson.subjectPart)) errors.push(`Lesson ${lesson.id} invalid subjectPart ${lesson.subjectPart}`);
  if (!String(lesson.title || '').trim()) errors.push(`Lesson ${lesson.id} empty title`);
  checkText(`lesson ${lesson.id} title`, lesson.title);
  checkText(`lesson ${lesson.id} unitTitle`, lesson.unitTitle);
  checkText(`lesson ${lesson.id} summarySimple`, lesson.summarySimple);
  checkTextList(`lesson ${lesson.id} objectives`, lesson.objectives);
  checkTextList(`lesson ${lesson.id} keyPoints`, lesson.keyPoints);
  checkTextList(`lesson ${lesson.id} examples`, lesson.examples);
  checkTextList(`lesson ${lesson.id} commonMistakes`, lesson.commonMistakes);
  checkTextList(`lesson ${lesson.id} timeline`, lesson.timeline);
  checkTextList(`lesson ${lesson.id} mapSkills`, lesson.mapSkills);
  for (const [keyword, meaning] of Object.entries(lesson.keywords || {})) {
    checkText(`lesson ${lesson.id} keyword`, keyword);
    checkText(`lesson ${lesson.id} keyword meaning`, meaning);
  }
}

for (const card of cards) {
  if (!lessonIds.has(card.lessonId)) errors.push(`Card ${card.id} missing lesson ${card.lessonId}`);
  if (!String(card.content || '').trim()) errors.push(`Card ${card.id} empty content`);
  checkText(`card ${card.id} title`, card.title);
  checkText(`card ${card.id} content`, card.content);
}

for (const question of questions) {
  if (!lessonIds.has(question.lessonId)) errors.push(`Question ${question.id} missing lesson ${question.lessonId}`);
  if (!String(question.correctAnswer || '').trim()) errors.push(`Question ${question.id} empty correctAnswer`);
  if (!String(question.answerText || '').trim()) errors.push(`Question ${question.id} empty answerText`);
  if (!String(question.explanationSimple || '').trim()) errors.push(`Question ${question.id} empty explanation`);
  if (question.options?.length && !question.options.some((option) => option.key === question.correctAnswer)) errors.push(`Question ${question.id} correctAnswer mismatch`);
  checkText(`question ${question.id} text`, question.questionText);
  checkText(`question ${question.id} answerText`, question.answerText);
  checkText(`question ${question.id} explanationSimple`, question.explanationSimple);
  for (const option of question.options || []) checkText(`question ${question.id} option ${option.key}`, option.text);
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(JSON.stringify({ lessons: lessons.length, cards: cards.length, questions: questions.length, ok: true }, null, 2));
