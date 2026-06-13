import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const outputRoot = path.join('F:\\1_A_Disk_D\\khuong-binh\\TK\\google\\AI-Builder\\DATA-LOP-06');
const timestamp = new Date().toISOString().replace(/[:-]/g, '').replace(/T/, '-').slice(0, 15);
const exportDir = path.join(outputRoot, `export-${timestamp}`);

const subjects = [
  { code: 'toan', name: 'Toán', dataDir: 'src/data/grade6/toan', lessonFile: 'mathLessons.ts', lessonExport: 'mathLessons', questionFile: 'mathQuestions.ts', questionExport: 'mathQuestions', outputFile: 'grade-06-toan.txt' },
  { code: 'tieng-anh', name: 'Tiếng Anh', dataDir: 'src/data/grade6/tieng-anh', lessonFile: 'englishLessons.ts', lessonExport: 'englishLessons', questionFile: 'englishQuestions.ts', questionExport: 'englishQuestions', outputFile: 'grade-06-tieng-anh.txt' },
  { code: 'khtn', name: 'KHTN', dataDir: 'src/data/grade6/khtn', lessonFile: 'khtnLessons.ts', lessonExport: 'khtnLessons', questionFile: 'khtnQuestions.ts', questionExport: 'khtnQuestions', outputFile: 'grade-06-khtn.txt' },
  { code: 'ngu-van', name: 'Ngữ văn', dataDir: 'src/data/grade6/ngu-van', lessonFile: 'nguVanLessons.ts', lessonExport: 'nguVanLessons', questionFile: 'nguVanQuestions.ts', questionExport: 'nguVanQuestions', outputFile: 'grade-06-ngu-van.txt' },
  { code: 'lich-su-dia-li', name: 'Lịch sử - Địa lí', dataDir: 'src/data/grade6/lich-su-dia-li', lessonFile: 'lichSuDiaLiLessons.ts', lessonExport: 'lichSuDiaLiLessons', questionFile: 'lichSuDiaLiQuestions.ts', questionExport: 'lichSuDiaLiQuestions', outputFile: 'grade-06-lich-su-dia-li.txt' },
  { code: 'tin-hoc', name: 'Tin học', dataDir: 'src/data/grade6/tin-hoc', lessonFile: 'tinHocLessons.ts', lessonExport: 'tinHocLessons', questionFile: 'tinHocQuestions.ts', questionExport: 'tinHocQuestions', outputFile: 'grade-06-tin-hoc.txt' },
  { code: 'cong-nghe', name: 'Công nghệ', dataDir: 'src/data/grade6/cong-nghe', lessonFile: 'congNgheLessons.ts', lessonExport: 'congNgheLessons', questionFile: 'congNgheQuestions.ts', questionExport: 'congNgheQuestions', outputFile: 'grade-06-cong-nghe.txt' },
  { code: 'gdcd', name: 'GDCD', dataDir: 'src/data/grade6/gdcd', lessonFile: 'gdcdLessons.ts', lessonExport: 'gdcdLessons', questionFile: 'gdcdQuestions.ts', questionExport: 'gdcdQuestions', outputFile: 'grade-06-gdcd.txt' }
];

function formatTimestamp(date) {
  return date.toISOString().replace(/[:-]/g, '').replace(/T/, '-').slice(0, 15);
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function parseExportArray(filePath, exportName) {
  const content = readFile(filePath);
  const pattern = new RegExp(`export const ${exportName}: [^=]+ = ([\\s\\S]*?);\\s*$`, 'm');
  const match = content.match(pattern);
  if (!match) {
    throw new Error(`Cannot parse export ${exportName} from ${filePath}`);
  }
  try {
    return JSON.parse(match[1]);
  } catch (error) {
    throw new Error(`JSON parse failed for ${filePath}: ${error.message}`);
  }
}

function normalizeText(value) {
  if (value == null) return '';
  if (Array.isArray(value)) return value.filter(Boolean).join(' \n');
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value).trim();
}

function questionOptionsText(question) {
  if (question.options && Array.isArray(question.options) && question.options.length) {
    return question.options.map((option) => `${option.key}. ${option.text}`).join(' \n');
  }
  if (question.optionsJson) {
    try {
      const parsed = JSON.parse(question.optionsJson);
      if (Array.isArray(parsed)) {
        return parsed.map((option) => `${option.key}. ${option.text}`).join(' \n');
      }
    } catch {
      return question.optionsJson;
    }
  }
  return '';
}

function answerText(question) {
  if (typeof question.answerText === 'string' && question.answerText.trim()) {
    return question.answerText.trim();
  }
  if (question.correctAnswer && question.options) {
    const found = question.options.find((option) => option.key === question.correctAnswer);
    if (found?.text) return `${question.correctAnswer}. ${found.text}`;
  }
  if (question.correctAnswer && question.optionsJson) {
    try {
      const parsed = JSON.parse(question.optionsJson);
      const found = parsed.find((option) => option.key === question.correctAnswer);
      if (found?.text) return `${question.correctAnswer}. ${found.text}`;
    } catch {
      // ignore
    }
  }
  return question.correctAnswer || '';
}

function explanationText(question) {
  return normalizeText(question.explanationSimple || question.explanation || question.answerText || question.answerText || '');
}

function formatLessonBlock(lesson, questions, subject) {
  const chapterLabel = lesson.unitTitle || lesson.unitCode || '';
  const summary = normalizeText(lesson.summarySimple || lesson.summary || lesson.objective || lesson.objectives || lesson.focus || lesson.topic);
  const ruleText = normalizeText(lesson.tips || lesson.grammarFocus || lesson.keyPoints || lesson.keywords || lesson.commonMistakes);
  const examples = normalizeText(lesson.examples || lesson.communicationPatterns || lesson.vocabulary || lesson.keyPoints);
  const qaLines = questions.map((question, index) => {
    const optionsText = questionOptionsText(question);
    return [`Question ${index + 1}: ${normalizeText(question.questionText)}`,
      optionsText ? `Options:\n${optionsText}` : '',
      `Correct answer: ${answerText(question)}`,
      `Explanation: ${explanationText(question)}`].filter(Boolean).join('\n');
  }).join('\n\n');
  const lessonIdText = lesson.lessonCode || lesson.id || '';
  const sourceFile = path.join(subject.dataDir, subject.lessonFile).replace(/\\/g, '/');

  return [
    '=== LESSON_START ===',
    'Lớp: 6',
    `Môn: ${subject.name}`,
    `Chương/Unit: ${chapterLabel}`,
    `Lesson ID: ${lessonIdText}`,
    `Bài: ${normalizeText(lesson.title || lesson.slug || lesson.sourceId || lesson.lessonCode)}`,
    `Tóm tắt kiến thức: ${summary}`,
    `Công thức/quy tắc: ${ruleText}`,
    `Ví dụ mẫu: ${examples}`,
    `Câu hỏi luyện tập: ${qaLines}`,
    `Đáp án: ${questions.map((q) => answerText(q)).filter(Boolean).join(' | ')}`,
    `Giải thích: ${questions.map((q) => explanationText(q)).filter(Boolean).join(' | ')}`,
    `Ghi chú AI: Xuất từ ${sourceFile}. Dữ liệu học tập Lớp 6, không bao gồm nhạc/audio/hình ảnh.`,
    '=== LESSON_END ===',
    ''
  ].join('\n');
}

function createExport() {
  fs.mkdirSync(exportDir, { recursive: true });

  const index = [];
  const fileSummaries = [];
  let totalLessons = 0;
  let totalFiles = 0;

  for (const subject of subjects) {
    const lessonPath = path.join(root, subject.dataDir, subject.lessonFile);
    const questionPath = path.join(root, subject.dataDir, subject.questionFile);
    const lessons = parseExportArray(lessonPath, subject.lessonExport);
    const questions = parseExportArray(questionPath, subject.questionExport);
    const questionsByLesson = new Map();
    for (const question of questions) {
      const lessonKey = question.lessonId;
      if (!questionsByLesson.has(lessonKey)) questionsByLesson.set(lessonKey, []);
      questionsByLesson.get(lessonKey).push(question);
    }

    const sortedLessons = [...lessons].sort((a, b) => ((a.sortOrder ?? a.id ?? 0) - (b.sortOrder ?? b.id ?? 0)));
    const fileBlocks = sortedLessons.map((lesson) => {
      totalLessons += 1;
      const lessonQuestions = questionsByLesson.get(lesson.id) || [];
      const block = formatLessonBlock(lesson, lessonQuestions, subject);
      index.push({
        grade: 6,
        subject: subject.name,
        lessonId: lesson.lessonCode || String(lesson.id),
        lessonTitle: lesson.title || lesson.slug || '',
        sourceFile: subject.dataDir + '/' + subject.lessonFile,
        lessonOrder: lesson.sortOrder ?? lesson.id ?? 0
      });
      return block;
    }).join('\n');

    const outputPath = path.join(exportDir, subject.outputFile);
    fs.writeFileSync(outputPath, fileBlocks, 'utf8');
    const stats = fs.statSync(outputPath);
    fileSummaries.push({ file: subject.outputFile, lessons: sortedLessons.length, bytes: stats.size });
    totalFiles += 1;
  }

  const indexPath = path.join(exportDir, 'index.json');
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2), 'utf8');
  const indexStats = fs.statSync(indexPath);

  console.log(`Export folder: ${exportDir}`);
  console.log(`Subjects exported: ${subjects.length}`);
  console.log(`Lessons exported: ${totalLessons}`);
  console.log(`Output files: ${totalFiles + 1}`);
  console.log('File sizes:');
  for (const summary of fileSummaries) {
    console.log(`  ${summary.file}: ${summary.bytes} bytes (${summary.lessons} lessons)`);
  }
  console.log(`  index.json: ${indexStats.size} bytes`);
  console.log('Example block:');
  console.log('---');
  console.log(sortedLessonsExample(fileSummaries, subjects));
}

function sortedLessonsExample(fileSummaries, subjectsList) {
  const firstSubject = subjectsList[0];
  const firstLessonPath = path.join(root, firstSubject.dataDir, firstSubject.lessonFile);
  const lessons = parseExportArray(firstLessonPath, firstSubject.lessonExport);
  const questions = parseExportArray(path.join(root, firstSubject.dataDir, firstSubject.questionFile), firstSubject.questionExport);
  const questionsByLesson = new Map();
  for (const question of questions) {
    const lessonKey = question.lessonId;
    if (!questionsByLesson.has(lessonKey)) questionsByLesson.set(lessonKey, []);
    questionsByLesson.get(lessonKey).push(question);
  }
  const lesson = lessons.sort((a, b) => ((a.sortOrder ?? a.id ?? 0) - (b.sortOrder ?? b.id ?? 0)))[0];
  return formatLessonBlock(lesson, questionsByLesson.get(lesson.id) || [], firstSubject).split('\n').slice(0, 40).join('\n');
}

createExport();
