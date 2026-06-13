// Auto-generated from local KHTN learning data. Do not edit counts by hand.
import type { KhtnPracticeQuestionCountChoice, KhtnPracticeQuestionCountOption, KhtnQuestion } from './khtnTypes';

export const KHTN_PRACTICE_QUESTION_COUNT_OPTIONS: KhtnPracticeQuestionCountChoice[] = [
  {
    "value": 10,
    "title": "Khởi động",
    "label": "10 câu",
    "description": "Phù hợp khi em muốn ôn nhanh một lượt."
  },
  {
    "value": 12,
    "title": "Vừa sức",
    "label": "12 câu",
    "description": "Cân bằng giữa ghi nhớ khái niệm và vận dụng."
  },
  {
    "value": 20,
    "title": "Ôn chắc",
    "label": "20 câu",
    "description": "Dành cho buổi học dài hơn hoặc trước kiểm tra."
  },
  {
    "value": 40,
    "title": "Toàn bộ bài",
    "label": "40 câu",
    "description": "Làm hết kho câu hỏi của bài đang học."
  }
];

export const DEFAULT_KHTN_PRACTICE_QUESTION_COUNT: KhtnPracticeQuestionCountOption = 12;

export function isKhtnPracticeQuestionCountOption(value: number): value is KhtnPracticeQuestionCountOption {
  return KHTN_PRACTICE_QUESTION_COUNT_OPTIONS.some((option) => option.value === value);
}

export const khtnQuestions: KhtnQuestion[] = [
  {
    "id": 1,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q001",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Khoa học tự nhiên và phương pháp học tập'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Hiểu KHTN là gì."
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Hiểu KHTN là gì.",
    "explanationSimple": "Bài này hướng tới: Hiểu KHTN là gì.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 2,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q002",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Khoa học tự nhiên và phương pháp học tập'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "B",
        "text": "Biết các bước học tập/nghiên cứu đơn giản."
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Biết các bước học tập/nghiên cứu đơn giản.",
    "explanationSimple": "Bài này hướng tới: Biết các bước học tập/nghiên cứu đơn giản.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 3,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q003",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Khoa học tự nhiên và phương pháp học tập'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "B",
        "text": "Không cần quan sát"
      },
      {
        "key": "C",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "D",
        "text": "Phân biệt quan sát, dự đoán và kết luận."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Phân biệt quan sát, dự đoán và kết luận.",
    "explanationSimple": "Bài này hướng tới: Phân biệt quan sát, dự đoán và kết luận.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 4,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q004",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Khoa học tự nhiên và phương pháp học tập'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Học thuộc khái niệm mà không hiểu hiện tượng."
      },
      {
        "key": "D",
        "text": "Khoa học tự nhiên nghiên cứu các sự vật, hiện tượng và quy luật trong tự nhiên."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Khoa học tự nhiên nghiên cứu các sự vật, hiện tượng và quy luật trong tự nhiên.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 5,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q005",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Khoa học tự nhiên và phương pháp học tập'?",
    "options": [
      {
        "key": "A",
        "text": "Bằng chứng quan sát/thí nghiệm quan trọng hơn đoán mò."
      },
      {
        "key": "B",
        "text": "Nhầm dự đoán với kết luận."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Bằng chứng quan sát/thí nghiệm quan trọng hơn đoán mò.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 6,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q006",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Khoa học tự nhiên và phương pháp học tập'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm dự đoán với kết luận."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Khoa học tự nhiên nghiên cứu các sự vật, hiện tượng và quy luật trong tự nhiên."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Khoa học tự nhiên nghiên cứu các sự vật, hiện tượng và quy luật trong tự nhiên.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 7,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q007",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Khoa học tự nhiên và phương pháp học tập'?",
    "options": [
      {
        "key": "A",
        "text": "Bằng chứng quan sát/thí nghiệm quan trọng hơn đoán mò."
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Nhầm dự đoán với kết luận."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Bằng chứng quan sát/thí nghiệm quan trọng hơn đoán mò.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 8,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q008",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Khoa học tự nhiên và phương pháp học tập'?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận khi chưa có bằng chứng."
      },
      {
        "key": "B",
        "text": "Bằng chứng quan sát/thí nghiệm quan trọng hơn đoán mò."
      },
      {
        "key": "C",
        "text": "Học thuộc khái niệm mà không hiểu hiện tượng."
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Bằng chứng quan sát/thí nghiệm quan trọng hơn đoán mò.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 9,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q009",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Khoa học tự nhiên và phương pháp học tập'?",
    "options": [
      {
        "key": "A",
        "text": "Học KHTN cần biết quan sát, đặt câu hỏi, dự đoán, thử nghiệm, ghi kết quả và rút kết luận."
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Học thuộc khái niệm mà không hiểu hiện tượng."
      },
      {
        "key": "D",
        "text": "Nhầm dự đoán với kết luận."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Học KHTN cần biết quan sát, đặt câu hỏi, dự đoán, thử nghiệm, ghi kết quả và rút kết luận.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 10,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q010",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Khoa học tự nhiên và phương pháp học tập'?",
    "options": [
      {
        "key": "A",
        "text": "Học KHTN cần biết quan sát, đặt câu hỏi, dự đoán, thử nghiệm, ghi kết quả và rút kết luận."
      },
      {
        "key": "B",
        "text": "Học thuộc khái niệm mà không hiểu hiện tượng."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Học KHTN cần biết quan sát, đặt câu hỏi, dự đoán, thử nghiệm, ghi kết quả và rút kết luận.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 11,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q011",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'natural science'?",
    "options": [
      {
        "key": "A",
        "text": "quan sát"
      },
      {
        "key": "B",
        "text": "gây bệnh"
      },
      {
        "key": "C",
        "text": "dinh dưỡng"
      },
      {
        "key": "D",
        "text": "Khoa học tự nhiên"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Khoa học tự nhiên",
    "explanationSimple": "'Khoa học tự nhiên' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 12,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q012",
    "lessonId": 1,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'observation' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "quan sát",
    "answerText": "quan sát",
    "explanationSimple": "'observation' tương ứng với 'quan sát' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 13,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q013",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'prediction'?",
    "options": [
      {
        "key": "A",
        "text": "dự đoán"
      },
      {
        "key": "B",
        "text": "thủy tinh"
      },
      {
        "key": "C",
        "text": "kéo"
      },
      {
        "key": "D",
        "text": "động năng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "dự đoán",
    "explanationSimple": "'dự đoán' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 14,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q014",
    "lessonId": 1,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'experiment' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "thí nghiệm",
    "answerText": "thí nghiệm",
    "explanationSimple": "'experiment' tương ứng với 'thí nghiệm' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 15,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q015",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'conclusion'?",
    "options": [
      {
        "key": "A",
        "text": "thời gian"
      },
      {
        "key": "B",
        "text": "bôi trơn"
      },
      {
        "key": "C",
        "text": "quan sát"
      },
      {
        "key": "D",
        "text": "kết luận"
      }
    ],
    "correctAnswer": "D",
    "answerText": "kết luận",
    "explanationSimple": "'kết luận' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 16,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q016",
    "lessonId": 1,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Khoa học tự nhiên và phương pháp học tập'.",
    "options": null,
    "correctAnswer": "Khoa học tự nhiên",
    "answerText": "Khoa học tự nhiên",
    "explanationSimple": "Một từ khóa đúng là 'Khoa học tự nhiên'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 17,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q017",
    "lessonId": 1,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Khoa học tự nhiên và phương pháp học tập'.",
    "options": null,
    "correctAnswer": "kết luận",
    "answerText": "kết luận",
    "explanationSimple": "Một từ khóa đúng là 'kết luận'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 18,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q018",
    "lessonId": 1,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Khoa học tự nhiên và phương pháp học tập'.",
    "options": null,
    "correctAnswer": "dự đoán",
    "answerText": "dự đoán",
    "explanationSimple": "Một từ khóa đúng là 'dự đoán'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 19,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q019",
    "lessonId": 1,
    "questionType": "true_false",
    "questionText": "Khoa học tự nhiên nghiên cứu các sự vật, hiện tượng và quy luật trong tự nhiên.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 20,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q020",
    "lessonId": 1,
    "questionType": "true_false",
    "questionText": "Học KHTN cần biết quan sát, đặt câu hỏi, dự đoán, thử nghiệm, ghi kết quả và rút kết luận.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 21,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q021",
    "lessonId": 1,
    "questionType": "true_false",
    "questionText": "Bằng chứng quan sát/thí nghiệm quan trọng hơn đoán mò.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 22,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q022",
    "lessonId": 1,
    "questionType": "true_false",
    "questionText": "KHTN gắn với vật lí, hóa học, sinh học, khoa học Trái Đất và thiên văn ở mức nhập môn.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 23,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q023",
    "lessonId": 1,
    "questionType": "true_false",
    "questionText": "Học thuộc khái niệm mà không hiểu hiện tượng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 24,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q024",
    "lessonId": 1,
    "questionType": "true_false",
    "questionText": "Kết luận khi chưa có bằng chứng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 25,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q025",
    "lessonId": 1,
    "questionType": "true_false",
    "questionText": "Nhầm dự đoán với kết luận.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 26,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q026",
    "lessonId": 1,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Khoa học tự nhiên và phương pháp học tập', hãy nêu một thuật ngữ liên quan đến ý: KHTN gắn với vật lí, hóa học, sinh học, khoa học Trái Đất và thiên văn ở mức nhập môn.",
    "options": null,
    "correctAnswer": "kết luận",
    "answerText": "kết luận",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'kết luận' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 27,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q027",
    "lessonId": 1,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Khoa học tự nhiên và phương pháp học tập', hãy nêu một thuật ngữ liên quan đến ý: Học KHTN cần biết quan sát, đặt câu hỏi, dự đoán, thử nghiệm, ghi kết quả và rút kết luận.",
    "options": null,
    "correctAnswer": "dự đoán",
    "answerText": "dự đoán",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'dự đoán' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 28,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q028",
    "lessonId": 1,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Khoa học tự nhiên và phương pháp học tập', hãy nêu một thuật ngữ liên quan đến ý: Học KHTN cần biết quan sát, đặt câu hỏi, dự đoán, thử nghiệm, ghi kết quả và rút kết luận.",
    "options": null,
    "correctAnswer": "Khoa học tự nhiên",
    "answerText": "Khoa học tự nhiên",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'Khoa học tự nhiên' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 29,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q029",
    "lessonId": 1,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Khoa học tự nhiên và phương pháp học tập', hãy nêu một thuật ngữ liên quan đến ý: Khoa học tự nhiên nghiên cứu các sự vật, hiện tượng và quy luật trong tự nhiên.",
    "options": null,
    "correctAnswer": "thí nghiệm",
    "answerText": "thí nghiệm",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thí nghiệm' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 30,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q030",
    "lessonId": 1,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Khoa học tự nhiên và phương pháp học tập', hãy nêu một thuật ngữ liên quan đến ý: Khoa học tự nhiên nghiên cứu các sự vật, hiện tượng và quy luật trong tự nhiên.",
    "options": null,
    "correctAnswer": "dự đoán",
    "answerText": "dự đoán",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'dự đoán' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 31,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q031",
    "lessonId": 1,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Khoa học tự nhiên và phương pháp học tập', hãy nêu một thuật ngữ liên quan đến ý: Bằng chứng quan sát/thí nghiệm quan trọng hơn đoán mò.",
    "options": null,
    "correctAnswer": "Khoa học tự nhiên",
    "answerText": "Khoa học tự nhiên",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'Khoa học tự nhiên' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 32,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q032",
    "lessonId": 1,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Khoa học tự nhiên và phương pháp học tập', hãy nêu một thuật ngữ liên quan đến ý: Bằng chứng quan sát/thí nghiệm quan trọng hơn đoán mò.",
    "options": null,
    "correctAnswer": "dự đoán",
    "answerText": "dự đoán",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'dự đoán' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 33,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q033",
    "lessonId": 1,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Khoa học tự nhiên và phương pháp học tập', hãy nêu một thuật ngữ liên quan đến ý: Học KHTN cần biết quan sát, đặt câu hỏi, dự đoán, thử nghiệm, ghi kết quả và rút kết luận.",
    "options": null,
    "correctAnswer": "dự đoán",
    "answerText": "dự đoán",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'dự đoán' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 34,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q034",
    "lessonId": 1,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Khoa học tự nhiên và phương pháp học tập', hãy nêu một thuật ngữ liên quan đến ý: Khoa học tự nhiên nghiên cứu các sự vật, hiện tượng và quy luật trong tự nhiên.",
    "options": null,
    "correctAnswer": "kết luận",
    "answerText": "kết luận",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'kết luận' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 35,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q035",
    "lessonId": 1,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Ghi lại chiều cao cây mỗi ngày để theo dõi sự lớn lên.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Học thuộc khái niệm mà không hiểu hiện tượng."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Khoa học tự nhiên nghiên cứu các sự vật, hiện tượng và quy luật trong tự nhiên."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Khoa học tự nhiên nghiên cứu các sự vật, hiện tượng và quy luật trong tự nhiên.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 36,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q036",
    "lessonId": 1,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Khoa học tự nhiên và phương pháp học tập', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận khi chưa có bằng chứng."
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 37,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q037",
    "lessonId": 1,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Ghi lại chiều cao cây mỗi ngày để theo dõi sự lớn lên.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Bằng chứng quan sát/thí nghiệm quan trọng hơn đoán mò."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Kết luận khi chưa có bằng chứng."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Bằng chứng quan sát/thí nghiệm quan trọng hơn đoán mò.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 38,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q038",
    "lessonId": 1,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Ghi lại chiều cao cây mỗi ngày để theo dõi sự lớn lên.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Nhầm dự đoán với kết luận."
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 39,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q039",
    "lessonId": 1,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Quan sát đá tan để tìm hiểu sự chuyển thể.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận khi chưa có bằng chứng."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Khoa học tự nhiên nghiên cứu các sự vật, hiện tượng và quy luật trong tự nhiên."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Khoa học tự nhiên nghiên cứu các sự vật, hiện tượng và quy luật trong tự nhiên.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 40,
    "sourceId": "sci6-b2-l01-khoa-hoc-tu-nhien-va-phuong-phap-hoc-tap-q040",
    "lessonId": 1,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Khoa học tự nhiên và phương pháp học tập', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Học thuộc khái niệm mà không hiểu hiện tượng."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 41,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q001",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'An toàn trong phòng thực hành'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "B",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Nhận biết quy tắc an toàn."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nhận biết quy tắc an toàn.",
    "explanationSimple": "Bài này hướng tới: Nhận biết quy tắc an toàn.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 42,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q002",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'An toàn trong phòng thực hành'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Chọn cách xử lý sự cố phù hợp."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Chọn cách xử lý sự cố phù hợp.",
    "explanationSimple": "Bài này hướng tới: Chọn cách xử lý sự cố phù hợp.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 43,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q003",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'An toàn trong phòng thực hành'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Tránh hành vi nguy hiểm trong phòng thực hành."
      },
      {
        "key": "C",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tránh hành vi nguy hiểm trong phòng thực hành.",
    "explanationSimple": "Bài này hướng tới: Tránh hành vi nguy hiểm trong phòng thực hành.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 44,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q004",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'An toàn trong phòng thực hành'?",
    "options": [
      {
        "key": "A",
        "text": "Tự pha trộn hóa chất."
      },
      {
        "key": "B",
        "text": "Không tự ý nếm, ngửi trực tiếp, chạm vào hóa chất khi chưa được hướng dẫn."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Không tự ý nếm, ngửi trực tiếp, chạm vào hóa chất khi chưa được hướng dẫn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 45,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q005",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'An toàn trong phòng thực hành'?",
    "options": [
      {
        "key": "A",
        "text": "Ngửi trực tiếp miệng lọ hóa chất."
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Đùa nghịch khi thực hành."
      },
      {
        "key": "D",
        "text": "Phòng thực hành có dụng cụ, hóa chất, nguồn nhiệt và vật sắc nhọn nên phải tuân thủ quy tắc an toàn."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Phòng thực hành có dụng cụ, hóa chất, nguồn nhiệt và vật sắc nhọn nên phải tuân thủ quy tắc an toàn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 46,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q006",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'An toàn trong phòng thực hành'?",
    "options": [
      {
        "key": "A",
        "text": "Đùa nghịch khi thực hành."
      },
      {
        "key": "B",
        "text": "Tự pha trộn hóa chất."
      },
      {
        "key": "C",
        "text": "Không tự ý nếm, ngửi trực tiếp, chạm vào hóa chất khi chưa được hướng dẫn."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Không tự ý nếm, ngửi trực tiếp, chạm vào hóa chất khi chưa được hướng dẫn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 47,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q007",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'An toàn trong phòng thực hành'?",
    "options": [
      {
        "key": "A",
        "text": "Tự pha trộn hóa chất."
      },
      {
        "key": "B",
        "text": "Khi có sự cố cần báo giáo viên/người lớn, giữ bình tĩnh và rời khỏi nơi nguy hiểm nếu cần."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Khi có sự cố cần báo giáo viên/người lớn, giữ bình tĩnh và rời khỏi nơi nguy hiểm nếu cần.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 48,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q008",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'An toàn trong phòng thực hành'?",
    "options": [
      {
        "key": "A",
        "text": "Tự pha trộn hóa chất."
      },
      {
        "key": "B",
        "text": "Không tự ý nếm, ngửi trực tiếp, chạm vào hóa chất khi chưa được hướng dẫn."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Đùa nghịch khi thực hành."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Không tự ý nếm, ngửi trực tiếp, chạm vào hóa chất khi chưa được hướng dẫn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 49,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q009",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'An toàn trong phòng thực hành'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Ngửi trực tiếp miệng lọ hóa chất."
      },
      {
        "key": "C",
        "text": "Không tự ý nếm, ngửi trực tiếp, chạm vào hóa chất khi chưa được hướng dẫn."
      },
      {
        "key": "D",
        "text": "Tự pha trộn hóa chất."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Không tự ý nếm, ngửi trực tiếp, chạm vào hóa chất khi chưa được hướng dẫn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 50,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q010",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'An toàn trong phòng thực hành'?",
    "options": [
      {
        "key": "A",
        "text": "Không tự ý nếm, ngửi trực tiếp, chạm vào hóa chất khi chưa được hướng dẫn."
      },
      {
        "key": "B",
        "text": "Tự pha trộn hóa chất."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Ngửi trực tiếp miệng lọ hóa chất."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Không tự ý nếm, ngửi trực tiếp, chạm vào hóa chất khi chưa được hướng dẫn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 51,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q011",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'safety'?",
    "options": [
      {
        "key": "A",
        "text": "nhựa"
      },
      {
        "key": "B",
        "text": "an toàn"
      },
      {
        "key": "C",
        "text": "thí nghiệm"
      },
      {
        "key": "D",
        "text": "hóa chất"
      }
    ],
    "correctAnswer": "B",
    "answerText": "an toàn",
    "explanationSimple": "'an toàn' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 52,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q012",
    "lessonId": 2,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'chemical' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "hóa chất",
    "answerText": "hóa chất",
    "explanationSimple": "'chemical' tương ứng với 'hóa chất' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 53,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q013",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'warning label'?",
    "options": [
      {
        "key": "A",
        "text": "tế bào mới"
      },
      {
        "key": "B",
        "text": "nhiên liệu"
      },
      {
        "key": "C",
        "text": "nhãn cảnh báo"
      },
      {
        "key": "D",
        "text": "sự cháy"
      }
    ],
    "correctAnswer": "C",
    "answerText": "nhãn cảnh báo",
    "explanationSimple": "'nhãn cảnh báo' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 54,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q014",
    "lessonId": 2,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'protection' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "bảo hộ",
    "answerText": "bảo hộ",
    "explanationSimple": "'protection' tương ứng với 'bảo hộ' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 55,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q015",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'incident'?",
    "options": [
      {
        "key": "A",
        "text": "sự cố"
      },
      {
        "key": "B",
        "text": "cao su"
      },
      {
        "key": "C",
        "text": "tổng hợp"
      },
      {
        "key": "D",
        "text": "phóng đại"
      }
    ],
    "correctAnswer": "A",
    "answerText": "sự cố",
    "explanationSimple": "'sự cố' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 56,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q016",
    "lessonId": 2,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'An toàn trong phòng thực hành'.",
    "options": null,
    "correctAnswer": "bảo hộ",
    "answerText": "bảo hộ",
    "explanationSimple": "Một từ khóa đúng là 'bảo hộ'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 57,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q017",
    "lessonId": 2,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'An toàn trong phòng thực hành'.",
    "options": null,
    "correctAnswer": "bảo hộ",
    "answerText": "bảo hộ",
    "explanationSimple": "Một từ khóa đúng là 'bảo hộ'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 58,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q018",
    "lessonId": 2,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'An toàn trong phòng thực hành'.",
    "options": null,
    "correctAnswer": "nhãn cảnh báo",
    "answerText": "nhãn cảnh báo",
    "explanationSimple": "Một từ khóa đúng là 'nhãn cảnh báo'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 59,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q019",
    "lessonId": 2,
    "questionType": "true_false",
    "questionText": "Phòng thực hành có dụng cụ, hóa chất, nguồn nhiệt và vật sắc nhọn nên phải tuân thủ quy tắc an toàn.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 60,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q020",
    "lessonId": 2,
    "questionType": "true_false",
    "questionText": "Không tự ý nếm, ngửi trực tiếp, chạm vào hóa chất khi chưa được hướng dẫn.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 61,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q021",
    "lessonId": 2,
    "questionType": "true_false",
    "questionText": "Khi có sự cố cần báo giáo viên/người lớn, giữ bình tĩnh và rời khỏi nơi nguy hiểm nếu cần.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 62,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q022",
    "lessonId": 2,
    "questionType": "true_false",
    "questionText": "Cần đọc nhãn, ký hiệu cảnh báo và dọn sạch khu vực thực hành sau khi làm xong.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 63,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q023",
    "lessonId": 2,
    "questionType": "true_false",
    "questionText": "Ngửi trực tiếp miệng lọ hóa chất.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 64,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q024",
    "lessonId": 2,
    "questionType": "true_false",
    "questionText": "Tự pha trộn hóa chất.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 65,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q025",
    "lessonId": 2,
    "questionType": "true_false",
    "questionText": "Đùa nghịch khi thực hành.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 66,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q026",
    "lessonId": 2,
    "questionType": "fill_text",
    "questionText": "Trong bài 'An toàn trong phòng thực hành', hãy nêu một thuật ngữ liên quan đến ý: Không tự ý nếm, ngửi trực tiếp, chạm vào hóa chất khi chưa được hướng dẫn.",
    "options": null,
    "correctAnswer": "bảo hộ",
    "answerText": "bảo hộ",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'bảo hộ' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 67,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q027",
    "lessonId": 2,
    "questionType": "fill_text",
    "questionText": "Trong bài 'An toàn trong phòng thực hành', hãy nêu một thuật ngữ liên quan đến ý: Không tự ý nếm, ngửi trực tiếp, chạm vào hóa chất khi chưa được hướng dẫn.",
    "options": null,
    "correctAnswer": "nhãn cảnh báo",
    "answerText": "nhãn cảnh báo",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nhãn cảnh báo' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 68,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q028",
    "lessonId": 2,
    "questionType": "fill_text",
    "questionText": "Trong bài 'An toàn trong phòng thực hành', hãy nêu một thuật ngữ liên quan đến ý: Không tự ý nếm, ngửi trực tiếp, chạm vào hóa chất khi chưa được hướng dẫn.",
    "options": null,
    "correctAnswer": "nhãn cảnh báo",
    "answerText": "nhãn cảnh báo",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nhãn cảnh báo' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 69,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q029",
    "lessonId": 2,
    "questionType": "fill_text",
    "questionText": "Trong bài 'An toàn trong phòng thực hành', hãy nêu một thuật ngữ liên quan đến ý: Khi có sự cố cần báo giáo viên/người lớn, giữ bình tĩnh và rời khỏi nơi nguy hiểm nếu cần.",
    "options": null,
    "correctAnswer": "an toàn",
    "answerText": "an toàn",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'an toàn' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 70,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q030",
    "lessonId": 2,
    "questionType": "fill_text",
    "questionText": "Trong bài 'An toàn trong phòng thực hành', hãy nêu một thuật ngữ liên quan đến ý: Cần đọc nhãn, ký hiệu cảnh báo và dọn sạch khu vực thực hành sau khi làm xong.",
    "options": null,
    "correctAnswer": "nhãn cảnh báo",
    "answerText": "nhãn cảnh báo",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nhãn cảnh báo' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 71,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q031",
    "lessonId": 2,
    "questionType": "fill_text",
    "questionText": "Trong bài 'An toàn trong phòng thực hành', hãy nêu một thuật ngữ liên quan đến ý: Cần đọc nhãn, ký hiệu cảnh báo và dọn sạch khu vực thực hành sau khi làm xong.",
    "options": null,
    "correctAnswer": "hóa chất",
    "answerText": "hóa chất",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'hóa chất' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 72,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q032",
    "lessonId": 2,
    "questionType": "fill_text",
    "questionText": "Trong bài 'An toàn trong phòng thực hành', hãy nêu một thuật ngữ liên quan đến ý: Khi có sự cố cần báo giáo viên/người lớn, giữ bình tĩnh và rời khỏi nơi nguy hiểm nếu cần.",
    "options": null,
    "correctAnswer": "sự cố",
    "answerText": "sự cố",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'sự cố' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 73,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q033",
    "lessonId": 2,
    "questionType": "fill_text",
    "questionText": "Trong bài 'An toàn trong phòng thực hành', hãy nêu một thuật ngữ liên quan đến ý: Phòng thực hành có dụng cụ, hóa chất, nguồn nhiệt và vật sắc nhọn nên phải tuân thủ quy tắc an toàn.",
    "options": null,
    "correctAnswer": "hóa chất",
    "answerText": "hóa chất",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'hóa chất' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 74,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q034",
    "lessonId": 2,
    "questionType": "fill_text",
    "questionText": "Trong bài 'An toàn trong phòng thực hành', hãy nêu một thuật ngữ liên quan đến ý: Khi có sự cố cần báo giáo viên/người lớn, giữ bình tĩnh và rời khỏi nơi nguy hiểm nếu cần.",
    "options": null,
    "correctAnswer": "nhãn cảnh báo",
    "answerText": "nhãn cảnh báo",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nhãn cảnh báo' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 75,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q035",
    "lessonId": 2,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Không hướng miệng ống nghiệm đang đun về phía người khác.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Đùa nghịch khi thực hành."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Phòng thực hành có dụng cụ, hóa chất, nguồn nhiệt và vật sắc nhọn nên phải tuân thủ quy tắc an toàn."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Phòng thực hành có dụng cụ, hóa chất, nguồn nhiệt và vật sắc nhọn nên phải tuân thủ quy tắc an toàn.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 76,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q036",
    "lessonId": 2,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Không hướng miệng ống nghiệm đang đun về phía người khác.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Ngửi trực tiếp miệng lọ hóa chất."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 77,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q037",
    "lessonId": 2,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'An toàn trong phòng thực hành', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Ngửi trực tiếp miệng lọ hóa chất."
      },
      {
        "key": "D",
        "text": "Cần đọc nhãn, ký hiệu cảnh báo và dọn sạch khu vực thực hành sau khi làm xong."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Cần đọc nhãn, ký hiệu cảnh báo và dọn sạch khu vực thực hành sau khi làm xong.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 78,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q038",
    "lessonId": 2,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'An toàn trong phòng thực hành', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Đùa nghịch khi thực hành."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 79,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q039",
    "lessonId": 2,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Báo giáo viên khi làm đổ dung dịch lạ.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Không tự ý nếm, ngửi trực tiếp, chạm vào hóa chất khi chưa được hướng dẫn."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Ngửi trực tiếp miệng lọ hóa chất."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Không tự ý nếm, ngửi trực tiếp, chạm vào hóa chất khi chưa được hướng dẫn.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 80,
    "sourceId": "sci6-b2-l02-an-toan-trong-phong-thuc-hanh-q040",
    "lessonId": 2,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Báo giáo viên khi làm đổ dung dịch lạ.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Tự pha trộn hóa chất."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 81,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q001",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Kính lúp, kính hiển vi và dụng cụ quan sát'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "D",
        "text": "Chọn dụng cụ quan sát phù hợp."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Chọn dụng cụ quan sát phù hợp.",
    "explanationSimple": "Bài này hướng tới: Chọn dụng cụ quan sát phù hợp.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 82,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q002",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Kính lúp, kính hiển vi và dụng cụ quan sát'?",
    "options": [
      {
        "key": "A",
        "text": "Biết nguyên tắc dùng kính hiển vi an toàn."
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Biết nguyên tắc dùng kính hiển vi an toàn.",
    "explanationSimple": "Bài này hướng tới: Biết nguyên tắc dùng kính hiển vi an toàn.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 83,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q003",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Kính lúp, kính hiển vi và dụng cụ quan sát'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "B",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "C",
        "text": "Phân biệt kính lúp và kính hiển vi."
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Phân biệt kính lúp và kính hiển vi.",
    "explanationSimple": "Bài này hướng tới: Phân biệt kính lúp và kính hiển vi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 84,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q004",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Kính lúp, kính hiển vi và dụng cụ quan sát'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Kính lúp dùng quan sát vật nhỏ nhưng còn nhìn được bằng mắt thường."
      },
      {
        "key": "C",
        "text": "Chạm tay vào thấu kính."
      },
      {
        "key": "D",
        "text": "Vặn ốc lấy nét quá mạnh."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Kính lúp dùng quan sát vật nhỏ nhưng còn nhìn được bằng mắt thường.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 85,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q005",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Kính lúp, kính hiển vi và dụng cụ quan sát'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Vặn ốc lấy nét quá mạnh."
      },
      {
        "key": "D",
        "text": "Kính hiển vi dùng quan sát vật rất nhỏ như tế bào, vi sinh vật."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Kính hiển vi dùng quan sát vật rất nhỏ như tế bào, vi sinh vật.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 86,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q006",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Kính lúp, kính hiển vi và dụng cụ quan sát'?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Chạm tay vào thấu kính."
      },
      {
        "key": "D",
        "text": "Dùng kính hiển vi cần đặt tiêu bản, chỉnh ánh sáng và lấy nét từ từ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Dùng kính hiển vi cần đặt tiêu bản, chỉnh ánh sáng và lấy nét từ từ.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 87,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q007",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Kính lúp, kính hiển vi và dụng cụ quan sát'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Kính lúp dùng quan sát vật nhỏ nhưng còn nhìn được bằng mắt thường."
      },
      {
        "key": "C",
        "text": "Chạm tay vào thấu kính."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Kính lúp dùng quan sát vật nhỏ nhưng còn nhìn được bằng mắt thường.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 88,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q008",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Kính lúp, kính hiển vi và dụng cụ quan sát'?",
    "options": [
      {
        "key": "A",
        "text": "Chạm tay vào thấu kính."
      },
      {
        "key": "B",
        "text": "Kính lúp dùng quan sát vật nhỏ nhưng còn nhìn được bằng mắt thường."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Vặn ốc lấy nét quá mạnh."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Kính lúp dùng quan sát vật nhỏ nhưng còn nhìn được bằng mắt thường.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 89,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q009",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Kính lúp, kính hiển vi và dụng cụ quan sát'?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "B",
        "text": "Vặn ốc lấy nét quá mạnh."
      },
      {
        "key": "C",
        "text": "Cần giữ sạch thấu kính, không chạm tay trực tiếp vào bề mặt kính."
      },
      {
        "key": "D",
        "text": "Chạm tay vào thấu kính."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Cần giữ sạch thấu kính, không chạm tay trực tiếp vào bề mặt kính.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 90,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q010",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Kính lúp, kính hiển vi và dụng cụ quan sát'?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "B",
        "text": "Kính lúp dùng quan sát vật nhỏ nhưng còn nhìn được bằng mắt thường."
      },
      {
        "key": "C",
        "text": "Vặn ốc lấy nét quá mạnh."
      },
      {
        "key": "D",
        "text": "Chạm tay vào thấu kính."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Kính lúp dùng quan sát vật nhỏ nhưng còn nhìn được bằng mắt thường.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 91,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q011",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'magnifying glass'?",
    "options": [
      {
        "key": "A",
        "text": "kính lúp"
      },
      {
        "key": "B",
        "text": "dự đoán"
      },
      {
        "key": "C",
        "text": "khí gas"
      },
      {
        "key": "D",
        "text": "chất"
      }
    ],
    "correctAnswer": "A",
    "answerText": "kính lúp",
    "explanationSimple": "'kính lúp' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 92,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q012",
    "lessonId": 3,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'microscope' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "kính hiển vi",
    "answerText": "kính hiển vi",
    "explanationSimple": "'microscope' tương ứng với 'kính hiển vi' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 93,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q013",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'slide'?",
    "options": [
      {
        "key": "A",
        "text": "tiêu bản"
      },
      {
        "key": "B",
        "text": "tế bào mới"
      },
      {
        "key": "C",
        "text": "hóa chất"
      },
      {
        "key": "D",
        "text": "vật liệu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "tiêu bản",
    "explanationSimple": "'tiêu bản' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 94,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q014",
    "lessonId": 3,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'lens' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "thấu kính",
    "answerText": "thấu kính",
    "explanationSimple": "'lens' tương ứng với 'thấu kính' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 95,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q015",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'magnify'?",
    "options": [
      {
        "key": "A",
        "text": "phóng đại"
      },
      {
        "key": "B",
        "text": "chiết"
      },
      {
        "key": "C",
        "text": "nhãn cảnh báo"
      },
      {
        "key": "D",
        "text": "công dụng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "phóng đại",
    "explanationSimple": "'phóng đại' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 96,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q016",
    "lessonId": 3,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Kính lúp, kính hiển vi và dụng cụ quan sát'.",
    "options": null,
    "correctAnswer": "tiêu bản",
    "answerText": "tiêu bản",
    "explanationSimple": "Một từ khóa đúng là 'tiêu bản'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 97,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q017",
    "lessonId": 3,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Kính lúp, kính hiển vi và dụng cụ quan sát'.",
    "options": null,
    "correctAnswer": "thấu kính",
    "answerText": "thấu kính",
    "explanationSimple": "Một từ khóa đúng là 'thấu kính'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 98,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q018",
    "lessonId": 3,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Kính lúp, kính hiển vi và dụng cụ quan sát'.",
    "options": null,
    "correctAnswer": "kính hiển vi",
    "answerText": "kính hiển vi",
    "explanationSimple": "Một từ khóa đúng là 'kính hiển vi'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 99,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q019",
    "lessonId": 3,
    "questionType": "true_false",
    "questionText": "Kính lúp dùng quan sát vật nhỏ nhưng còn nhìn được bằng mắt thường.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 100,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q020",
    "lessonId": 3,
    "questionType": "true_false",
    "questionText": "Kính hiển vi dùng quan sát vật rất nhỏ như tế bào, vi sinh vật.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 101,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q021",
    "lessonId": 3,
    "questionType": "true_false",
    "questionText": "Dùng kính hiển vi cần đặt tiêu bản, chỉnh ánh sáng và lấy nét từ từ.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 102,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q022",
    "lessonId": 3,
    "questionType": "true_false",
    "questionText": "Cần giữ sạch thấu kính, không chạm tay trực tiếp vào bề mặt kính.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 103,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q023",
    "lessonId": 3,
    "questionType": "true_false",
    "questionText": "Dùng kính hiển vi cho vật quá to.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 104,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q024",
    "lessonId": 3,
    "questionType": "true_false",
    "questionText": "Vặn ốc lấy nét quá mạnh.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 105,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q025",
    "lessonId": 3,
    "questionType": "true_false",
    "questionText": "Chạm tay vào thấu kính.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 106,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q026",
    "lessonId": 3,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Kính lúp, kính hiển vi và dụng cụ quan sát', hãy nêu một thuật ngữ liên quan đến ý: Cần giữ sạch thấu kính, không chạm tay trực tiếp vào bề mặt kính.",
    "options": null,
    "correctAnswer": "tiêu bản",
    "answerText": "tiêu bản",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tiêu bản' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 107,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q027",
    "lessonId": 3,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Kính lúp, kính hiển vi và dụng cụ quan sát', hãy nêu một thuật ngữ liên quan đến ý: Cần giữ sạch thấu kính, không chạm tay trực tiếp vào bề mặt kính.",
    "options": null,
    "correctAnswer": "thấu kính",
    "answerText": "thấu kính",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thấu kính' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 108,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q028",
    "lessonId": 3,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Kính lúp, kính hiển vi và dụng cụ quan sát', hãy nêu một thuật ngữ liên quan đến ý: Cần giữ sạch thấu kính, không chạm tay trực tiếp vào bề mặt kính.",
    "options": null,
    "correctAnswer": "tiêu bản",
    "answerText": "tiêu bản",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tiêu bản' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 109,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q029",
    "lessonId": 3,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Kính lúp, kính hiển vi và dụng cụ quan sát', hãy nêu một thuật ngữ liên quan đến ý: Cần giữ sạch thấu kính, không chạm tay trực tiếp vào bề mặt kính.",
    "options": null,
    "correctAnswer": "kính lúp",
    "answerText": "kính lúp",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'kính lúp' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 110,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q030",
    "lessonId": 3,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Kính lúp, kính hiển vi và dụng cụ quan sát', hãy nêu một thuật ngữ liên quan đến ý: Kính hiển vi dùng quan sát vật rất nhỏ như tế bào, vi sinh vật.",
    "options": null,
    "correctAnswer": "tiêu bản",
    "answerText": "tiêu bản",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tiêu bản' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 111,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q031",
    "lessonId": 3,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Kính lúp, kính hiển vi và dụng cụ quan sát', hãy nêu một thuật ngữ liên quan đến ý: Cần giữ sạch thấu kính, không chạm tay trực tiếp vào bề mặt kính.",
    "options": null,
    "correctAnswer": "tiêu bản",
    "answerText": "tiêu bản",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tiêu bản' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 112,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q032",
    "lessonId": 3,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Kính lúp, kính hiển vi và dụng cụ quan sát', hãy nêu một thuật ngữ liên quan đến ý: Dùng kính hiển vi cần đặt tiêu bản, chỉnh ánh sáng và lấy nét từ từ.",
    "options": null,
    "correctAnswer": "kính lúp",
    "answerText": "kính lúp",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'kính lúp' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 113,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q033",
    "lessonId": 3,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Kính lúp, kính hiển vi và dụng cụ quan sát', hãy nêu một thuật ngữ liên quan đến ý: Cần giữ sạch thấu kính, không chạm tay trực tiếp vào bề mặt kính.",
    "options": null,
    "correctAnswer": "phóng đại",
    "answerText": "phóng đại",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'phóng đại' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 114,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q034",
    "lessonId": 3,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Kính lúp, kính hiển vi và dụng cụ quan sát', hãy nêu một thuật ngữ liên quan đến ý: Dùng kính hiển vi cần đặt tiêu bản, chỉnh ánh sáng và lấy nét từ từ.",
    "options": null,
    "correctAnswer": "kính hiển vi",
    "answerText": "kính hiển vi",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'kính hiển vi' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 115,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q035",
    "lessonId": 3,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Dùng kính hiển vi quan sát tế bào biểu bì hành.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Vặn ốc lấy nét quá mạnh."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Kính hiển vi dùng quan sát vật rất nhỏ như tế bào, vi sinh vật."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Kính hiển vi dùng quan sát vật rất nhỏ như tế bào, vi sinh vật.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 116,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q036",
    "lessonId": 3,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Kính lúp, kính hiển vi và dụng cụ quan sát', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Chạm tay vào thấu kính."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 117,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q037",
    "lessonId": 3,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Dùng kính hiển vi quan sát tế bào biểu bì hành.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Vặn ốc lấy nét quá mạnh."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Cần giữ sạch thấu kính, không chạm tay trực tiếp vào bề mặt kính."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Cần giữ sạch thấu kính, không chạm tay trực tiếp vào bề mặt kính.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 118,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q038",
    "lessonId": 3,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Dùng kính lúp quan sát gân lá.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Chạm tay vào thấu kính."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 119,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q039",
    "lessonId": 3,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Kính lúp, kính hiển vi và dụng cụ quan sát', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Chạm tay vào thấu kính."
      },
      {
        "key": "B",
        "text": "Kính lúp dùng quan sát vật nhỏ nhưng còn nhìn được bằng mắt thường."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Kính lúp dùng quan sát vật nhỏ nhưng còn nhìn được bằng mắt thường.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 120,
    "sourceId": "sci6-b2-l03-kinh-lup-kinh-hien-vi-va-dung-cu-quan-sat-q040",
    "lessonId": 3,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Kính lúp, kính hiển vi và dụng cụ quan sát', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Dùng kính hiển vi cho vật quá to."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 121,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q001",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Không cần quan sát"
      },
      {
        "key": "C",
        "text": "Chọn dụng cụ đo phù hợp."
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chọn dụng cụ đo phù hợp.",
    "explanationSimple": "Bài này hướng tới: Chọn dụng cụ đo phù hợp.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 122,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q002",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ'?",
    "options": [
      {
        "key": "A",
        "text": "Đọc và ghi kết quả đo có đơn vị."
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Đọc và ghi kết quả đo có đơn vị.",
    "explanationSimple": "Bài này hướng tới: Đọc và ghi kết quả đo có đơn vị.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 123,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q003",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ'?",
    "options": [
      {
        "key": "A",
        "text": "Đổi đơn vị đơn giản."
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Học thuộc tất cả số liệu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Đổi đơn vị đơn giản.",
    "explanationSimple": "Bài này hướng tới: Đổi đơn vị đơn giản.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 124,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q004",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ'?",
    "options": [
      {
        "key": "A",
        "text": "Cần chọn dụng cụ có giới hạn đo và độ chia nhỏ nhất phù hợp."
      },
      {
        "key": "B",
        "text": "Đọc lệch mắt."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Dùng dụng cụ đo không phù hợp."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cần chọn dụng cụ có giới hạn đo và độ chia nhỏ nhất phù hợp.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 125,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q005",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ'?",
    "options": [
      {
        "key": "A",
        "text": "Đọc lệch mắt."
      },
      {
        "key": "B",
        "text": "Các đại lượng thường gặp: chiều dài, khối lượng, thời gian, nhiệt độ."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Các đại lượng thường gặp: chiều dài, khối lượng, thời gian, nhiệt độ.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 126,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q006",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ'?",
    "options": [
      {
        "key": "A",
        "text": "Các đại lượng thường gặp: chiều dài, khối lượng, thời gian, nhiệt độ."
      },
      {
        "key": "B",
        "text": "Dùng dụng cụ đo không phù hợp."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Các đại lượng thường gặp: chiều dài, khối lượng, thời gian, nhiệt độ.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 127,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q007",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ'?",
    "options": [
      {
        "key": "A",
        "text": "Đọc lệch mắt."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Đo là so sánh đại lượng cần đo với đơn vị đo phù hợp."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Đo là so sánh đại lượng cần đo với đơn vị đo phù hợp.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 128,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q008",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ'?",
    "options": [
      {
        "key": "A",
        "text": "Đọc lệch mắt."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Cần chọn dụng cụ có giới hạn đo và độ chia nhỏ nhất phù hợp."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Cần chọn dụng cụ có giới hạn đo và độ chia nhỏ nhất phù hợp.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 129,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q009",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ'?",
    "options": [
      {
        "key": "A",
        "text": "Đo là so sánh đại lượng cần đo với đơn vị đo phù hợp."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Quên ghi đơn vị."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Đo là so sánh đại lượng cần đo với đơn vị đo phù hợp.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 130,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q010",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Dùng dụng cụ đo không phù hợp."
      },
      {
        "key": "C",
        "text": "Cần chọn dụng cụ có giới hạn đo và độ chia nhỏ nhất phù hợp."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Cần chọn dụng cụ có giới hạn đo và độ chia nhỏ nhất phù hợp.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 131,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q011",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'length'?",
    "options": [
      {
        "key": "A",
        "text": "biến đổi"
      },
      {
        "key": "B",
        "text": "chiều dài"
      },
      {
        "key": "C",
        "text": "hành tinh"
      },
      {
        "key": "D",
        "text": "đẩy"
      }
    ],
    "correctAnswer": "B",
    "answerText": "chiều dài",
    "explanationSimple": "'chiều dài' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 132,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q012",
    "lessonId": 4,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'mass' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "khối lượng",
    "answerText": "khối lượng",
    "explanationSimple": "'mass' tương ứng với 'khối lượng' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 133,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q013",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'time'?",
    "options": [
      {
        "key": "A",
        "text": "thí nghiệm"
      },
      {
        "key": "B",
        "text": "tính chất"
      },
      {
        "key": "C",
        "text": "chiết"
      },
      {
        "key": "D",
        "text": "thời gian"
      }
    ],
    "correctAnswer": "D",
    "answerText": "thời gian",
    "explanationSimple": "'thời gian' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 134,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q014",
    "lessonId": 4,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'temperature' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "nhiệt độ",
    "answerText": "nhiệt độ",
    "explanationSimple": "'temperature' tương ứng với 'nhiệt độ' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 135,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q015",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'unit'?",
    "options": [
      {
        "key": "A",
        "text": "Mặt Trăng"
      },
      {
        "key": "B",
        "text": "đơn vị"
      },
      {
        "key": "C",
        "text": "cơ thể"
      },
      {
        "key": "D",
        "text": "thể khí"
      }
    ],
    "correctAnswer": "B",
    "answerText": "đơn vị",
    "explanationSimple": "'đơn vị' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 136,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q016",
    "lessonId": 4,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ'.",
    "options": null,
    "correctAnswer": "thời gian",
    "answerText": "thời gian",
    "explanationSimple": "Một từ khóa đúng là 'thời gian'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 137,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q017",
    "lessonId": 4,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ'.",
    "options": null,
    "correctAnswer": "nhiệt độ",
    "answerText": "nhiệt độ",
    "explanationSimple": "Một từ khóa đúng là 'nhiệt độ'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 138,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q018",
    "lessonId": 4,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ'.",
    "options": null,
    "correctAnswer": "chiều dài",
    "answerText": "chiều dài",
    "explanationSimple": "Một từ khóa đúng là 'chiều dài'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 139,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q019",
    "lessonId": 4,
    "questionType": "true_false",
    "questionText": "Đo là so sánh đại lượng cần đo với đơn vị đo phù hợp.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 140,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q020",
    "lessonId": 4,
    "questionType": "true_false",
    "questionText": "Cần chọn dụng cụ có giới hạn đo và độ chia nhỏ nhất phù hợp.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 141,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q021",
    "lessonId": 4,
    "questionType": "true_false",
    "questionText": "Khi đọc kết quả phải đặt mắt đúng vị trí và ghi kèm đơn vị.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 142,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q022",
    "lessonId": 4,
    "questionType": "true_false",
    "questionText": "Các đại lượng thường gặp: chiều dài, khối lượng, thời gian, nhiệt độ.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 143,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q023",
    "lessonId": 4,
    "questionType": "true_false",
    "questionText": "Quên ghi đơn vị.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 144,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q024",
    "lessonId": 4,
    "questionType": "true_false",
    "questionText": "Đọc lệch mắt.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 145,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q025",
    "lessonId": 4,
    "questionType": "true_false",
    "questionText": "Dùng dụng cụ đo không phù hợp.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 146,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q026",
    "lessonId": 4,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ', hãy nêu một thuật ngữ liên quan đến ý: Khi đọc kết quả phải đặt mắt đúng vị trí và ghi kèm đơn vị.",
    "options": null,
    "correctAnswer": "thời gian",
    "answerText": "thời gian",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thời gian' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 147,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q027",
    "lessonId": 4,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ', hãy nêu một thuật ngữ liên quan đến ý: Khi đọc kết quả phải đặt mắt đúng vị trí và ghi kèm đơn vị.",
    "options": null,
    "correctAnswer": "khối lượng",
    "answerText": "khối lượng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'khối lượng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 148,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q028",
    "lessonId": 4,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ', hãy nêu một thuật ngữ liên quan đến ý: Khi đọc kết quả phải đặt mắt đúng vị trí và ghi kèm đơn vị.",
    "options": null,
    "correctAnswer": "nhiệt độ",
    "answerText": "nhiệt độ",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nhiệt độ' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 149,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q029",
    "lessonId": 4,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ', hãy nêu một thuật ngữ liên quan đến ý: Các đại lượng thường gặp: chiều dài, khối lượng, thời gian, nhiệt độ.",
    "options": null,
    "correctAnswer": "khối lượng",
    "answerText": "khối lượng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'khối lượng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 150,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q030",
    "lessonId": 4,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Đo chiều dài, khối lượng, thời gian và nhiệt độ', hãy nêu một thuật ngữ liên quan đến ý: Cần chọn dụng cụ có giới hạn đo và độ chia nhỏ nhất phù hợp.",
    "options": null,
    "correctAnswer": "chiều dài",
    "answerText": "chiều dài",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'chiều dài' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 151,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q031",
    "lessonId": 4,
    "questionType": "fill_text",
    "questionText": "Đổi 2,5 m ra cm.",
    "options": null,
    "correctAnswer": "250",
    "answerText": "250",
    "explanationSimple": "1 m = 100 cm nên 2,5 m = 250 cm.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 152,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q032",
    "lessonId": 4,
    "questionType": "fill_text",
    "questionText": "Đổi 3 kg ra g.",
    "options": null,
    "correctAnswer": "3000",
    "answerText": "3000",
    "explanationSimple": "1 kg = 1000 g nên 3 kg = 3000 g.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 153,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q033",
    "lessonId": 4,
    "questionType": "fill_text",
    "questionText": "Đổi 5 phút ra giây.",
    "options": null,
    "correctAnswer": "300",
    "answerText": "300",
    "explanationSimple": "1 phút = 60 giây nên 5 phút = 300 giây.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 154,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q034",
    "lessonId": 4,
    "questionType": "fill_text",
    "questionText": "Nhiệt độ 37°C thuộc đại lượng nào?",
    "options": null,
    "correctAnswer": "nhiệt độ",
    "answerText": "nhiệt độ",
    "explanationSimple": "Độ C dùng để đo nhiệt độ.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 155,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q035",
    "lessonId": 4,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Đo nhiệt độ nước bằng nhiệt kế.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Khi đọc kết quả phải đặt mắt đúng vị trí và ghi kèm đơn vị."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Dùng dụng cụ đo không phù hợp."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Khi đọc kết quả phải đặt mắt đúng vị trí và ghi kèm đơn vị.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 156,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q036",
    "lessonId": 4,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Đo nhiệt độ nước bằng nhiệt kế.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Dùng dụng cụ đo không phù hợp."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 157,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q037",
    "lessonId": 4,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Đo chiều dài, khối lượng, thời gian và nhiệt độ', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Đọc lệch mắt."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Các đại lượng thường gặp: chiều dài, khối lượng, thời gian, nhiệt độ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Các đại lượng thường gặp: chiều dài, khối lượng, thời gian, nhiệt độ.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 158,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q038",
    "lessonId": 4,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Đo nhiệt độ nước bằng nhiệt kế.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Quên ghi đơn vị."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 159,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q039",
    "lessonId": 4,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Đo chiều dài bàn bằng thước mét.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Quên ghi đơn vị."
      },
      {
        "key": "C",
        "text": "Các đại lượng thường gặp: chiều dài, khối lượng, thời gian, nhiệt độ."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Các đại lượng thường gặp: chiều dài, khối lượng, thời gian, nhiệt độ.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 160,
    "sourceId": "sci6-b2-l04-do-chieu-dai-khoi-luong-thoi-gian-va-nhiet-do-q040",
    "lessonId": 4,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Đo chiều dài, khối lượng, thời gian và nhiệt độ', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Đọc lệch mắt."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 161,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q001",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Chất và vật thể'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Không cần quan sát"
      },
      {
        "key": "C",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "D",
        "text": "Phân biệt chất và vật thể."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Phân biệt chất và vật thể.",
    "explanationSimple": "Bài này hướng tới: Phân biệt chất và vật thể.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 162,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q002",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Chất và vật thể'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "B",
        "text": "Không cần quan sát"
      },
      {
        "key": "C",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "D",
        "text": "Nêu ví dụ chất tạo nên vật thể."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nêu ví dụ chất tạo nên vật thể.",
    "explanationSimple": "Bài này hướng tới: Nêu ví dụ chất tạo nên vật thể.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 163,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q003",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Chất và vật thể'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "B",
        "text": "Nhận ra một vật thể có thể gồm nhiều chất."
      },
      {
        "key": "C",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nhận ra một vật thể có thể gồm nhiều chất.",
    "explanationSimple": "Bài này hướng tới: Nhận ra một vật thể có thể gồm nhiều chất.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 164,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q004",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Chất và vật thể'?",
    "options": [
      {
        "key": "A",
        "text": "Vật thể là những thứ tồn tại xung quanh ta, có hình dạng hoặc giới hạn nhất định."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Nghĩ mỗi vật chỉ làm từ một chất."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Vật thể là những thứ tồn tại xung quanh ta, có hình dạng hoặc giới hạn nhất định.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 165,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q005",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Chất và vật thể'?",
    "options": [
      {
        "key": "A",
        "text": "Một vật thể có thể làm từ nhiều chất; một chất có thể dùng tạo nhiều vật thể."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Một vật thể có thể làm từ nhiều chất; một chất có thể dùng tạo nhiều vật thể.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 166,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q006",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Chất và vật thể'?",
    "options": [
      {
        "key": "A",
        "text": "Một vật thể có thể làm từ nhiều chất; một chất có thể dùng tạo nhiều vật thể."
      },
      {
        "key": "B",
        "text": "Gọi tên đồ vật thay cho tên chất."
      },
      {
        "key": "C",
        "text": "Nhầm vật thể tự nhiên và vật thể nhân tạo với chất."
      },
      {
        "key": "D",
        "text": "Nghĩ mỗi vật chỉ làm từ một chất."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Một vật thể có thể làm từ nhiều chất; một chất có thể dùng tạo nhiều vật thể.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 167,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q007",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Chất và vật thể'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm vật thể tự nhiên và vật thể nhân tạo với chất."
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Vật thể là những thứ tồn tại xung quanh ta, có hình dạng hoặc giới hạn nhất định."
      },
      {
        "key": "D",
        "text": "Gọi tên đồ vật thay cho tên chất."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Vật thể là những thứ tồn tại xung quanh ta, có hình dạng hoặc giới hạn nhất định.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 168,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q008",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Chất và vật thể'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Chất là vật liệu tạo nên vật thể."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Nhầm vật thể tự nhiên và vật thể nhân tạo với chất."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chất là vật liệu tạo nên vật thể.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 169,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q009",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Chất và vật thể'?",
    "options": [
      {
        "key": "A",
        "text": "Nhận biết chất/vật thể giúp hiểu tính chất và công dụng của đồ vật."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Nhầm vật thể tự nhiên và vật thể nhân tạo với chất."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nhận biết chất/vật thể giúp hiểu tính chất và công dụng của đồ vật.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 170,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q010",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Chất và vật thể'?",
    "options": [
      {
        "key": "A",
        "text": "Chất là vật liệu tạo nên vật thể."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Gọi tên đồ vật thay cho tên chất."
      },
      {
        "key": "D",
        "text": "Nhầm vật thể tự nhiên và vật thể nhân tạo với chất."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Chất là vật liệu tạo nên vật thể.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 171,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q011",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'substance'?",
    "options": [
      {
        "key": "A",
        "text": "lớn lên"
      },
      {
        "key": "B",
        "text": "vật thể"
      },
      {
        "key": "C",
        "text": "động vật"
      },
      {
        "key": "D",
        "text": "chất"
      }
    ],
    "correctAnswer": "D",
    "answerText": "chất",
    "explanationSimple": "'chất' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 172,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q012",
    "lessonId": 5,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'object' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "vật thể",
    "answerText": "vật thể",
    "explanationSimple": "'object' tương ứng với 'vật thể' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 173,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q013",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'material'?",
    "options": [
      {
        "key": "A",
        "text": "lương thực"
      },
      {
        "key": "B",
        "text": "pha Mặt Trăng"
      },
      {
        "key": "C",
        "text": "vật liệu"
      },
      {
        "key": "D",
        "text": "kéo"
      }
    ],
    "correctAnswer": "C",
    "answerText": "vật liệu",
    "explanationSimple": "'vật liệu' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 174,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q014",
    "lessonId": 5,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'property' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "tính chất",
    "answerText": "tính chất",
    "explanationSimple": "'property' tương ứng với 'tính chất' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 175,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q015",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'use'?",
    "options": [
      {
        "key": "A",
        "text": "dự đoán"
      },
      {
        "key": "B",
        "text": "đơn vị cơ bản"
      },
      {
        "key": "C",
        "text": "kính hiển vi"
      },
      {
        "key": "D",
        "text": "công dụng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "công dụng",
    "explanationSimple": "'công dụng' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 176,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q016",
    "lessonId": 5,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Chất và vật thể'.",
    "options": null,
    "correctAnswer": "chất",
    "answerText": "chất",
    "explanationSimple": "Một từ khóa đúng là 'chất'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 177,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q017",
    "lessonId": 5,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Chất và vật thể'.",
    "options": null,
    "correctAnswer": "công dụng",
    "answerText": "công dụng",
    "explanationSimple": "Một từ khóa đúng là 'công dụng'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 178,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q018",
    "lessonId": 5,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Chất và vật thể'.",
    "options": null,
    "correctAnswer": "vật thể",
    "answerText": "vật thể",
    "explanationSimple": "Một từ khóa đúng là 'vật thể'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 179,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q019",
    "lessonId": 5,
    "questionType": "true_false",
    "questionText": "Vật thể là những thứ tồn tại xung quanh ta, có hình dạng hoặc giới hạn nhất định.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 180,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q020",
    "lessonId": 5,
    "questionType": "true_false",
    "questionText": "Chất là vật liệu tạo nên vật thể.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 181,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q021",
    "lessonId": 5,
    "questionType": "true_false",
    "questionText": "Một vật thể có thể làm từ nhiều chất; một chất có thể dùng tạo nhiều vật thể.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 182,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q022",
    "lessonId": 5,
    "questionType": "true_false",
    "questionText": "Nhận biết chất/vật thể giúp hiểu tính chất và công dụng của đồ vật.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 183,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q023",
    "lessonId": 5,
    "questionType": "true_false",
    "questionText": "Gọi tên đồ vật thay cho tên chất.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 184,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q024",
    "lessonId": 5,
    "questionType": "true_false",
    "questionText": "Nghĩ mỗi vật chỉ làm từ một chất.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 185,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q025",
    "lessonId": 5,
    "questionType": "true_false",
    "questionText": "Nhầm vật thể tự nhiên và vật thể nhân tạo với chất.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 186,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q026",
    "lessonId": 5,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Chất và vật thể', hãy nêu một thuật ngữ liên quan đến ý: Một vật thể có thể làm từ nhiều chất; một chất có thể dùng tạo nhiều vật thể.",
    "options": null,
    "correctAnswer": "vật liệu",
    "answerText": "vật liệu",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vật liệu' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 187,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q027",
    "lessonId": 5,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Chất và vật thể', hãy nêu một thuật ngữ liên quan đến ý: Chất là vật liệu tạo nên vật thể.",
    "options": null,
    "correctAnswer": "vật liệu",
    "answerText": "vật liệu",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vật liệu' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 188,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q028",
    "lessonId": 5,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Chất và vật thể', hãy nêu một thuật ngữ liên quan đến ý: Chất là vật liệu tạo nên vật thể.",
    "options": null,
    "correctAnswer": "tính chất",
    "answerText": "tính chất",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tính chất' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 189,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q029",
    "lessonId": 5,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Chất và vật thể', hãy nêu một thuật ngữ liên quan đến ý: Vật thể là những thứ tồn tại xung quanh ta, có hình dạng hoặc giới hạn nhất định.",
    "options": null,
    "correctAnswer": "vật thể",
    "answerText": "vật thể",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vật thể' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 190,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q030",
    "lessonId": 5,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Chất và vật thể', hãy nêu một thuật ngữ liên quan đến ý: Nhận biết chất/vật thể giúp hiểu tính chất và công dụng của đồ vật.",
    "options": null,
    "correctAnswer": "vật thể",
    "answerText": "vật thể",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vật thể' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 191,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q031",
    "lessonId": 5,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Chất và vật thể', hãy nêu một thuật ngữ liên quan đến ý: Chất là vật liệu tạo nên vật thể.",
    "options": null,
    "correctAnswer": "vật liệu",
    "answerText": "vật liệu",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vật liệu' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 192,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q032",
    "lessonId": 5,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Chất và vật thể', hãy nêu một thuật ngữ liên quan đến ý: Nhận biết chất/vật thể giúp hiểu tính chất và công dụng của đồ vật.",
    "options": null,
    "correctAnswer": "tính chất",
    "answerText": "tính chất",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tính chất' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 193,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q033",
    "lessonId": 5,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Chất và vật thể', hãy nêu một thuật ngữ liên quan đến ý: Nhận biết chất/vật thể giúp hiểu tính chất và công dụng của đồ vật.",
    "options": null,
    "correctAnswer": "vật liệu",
    "answerText": "vật liệu",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vật liệu' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 194,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q034",
    "lessonId": 5,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Chất và vật thể', hãy nêu một thuật ngữ liên quan đến ý: Vật thể là những thứ tồn tại xung quanh ta, có hình dạng hoặc giới hạn nhất định.",
    "options": null,
    "correctAnswer": "vật thể",
    "answerText": "vật thể",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vật thể' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 195,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q035",
    "lessonId": 5,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Cốc nước gồm cốc là vật thể chứa nước là chất.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Chất là vật liệu tạo nên vật thể."
      },
      {
        "key": "D",
        "text": "Gọi tên đồ vật thay cho tên chất."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chất là vật liệu tạo nên vật thể.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 196,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q036",
    "lessonId": 5,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Chất và vật thể', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm vật thể tự nhiên và vật thể nhân tạo với chất."
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 197,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q037",
    "lessonId": 5,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Cốc nước gồm cốc là vật thể chứa nước là chất.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Gọi tên đồ vật thay cho tên chất."
      },
      {
        "key": "C",
        "text": "Một vật thể có thể làm từ nhiều chất; một chất có thể dùng tạo nhiều vật thể."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Một vật thể có thể làm từ nhiều chất; một chất có thể dùng tạo nhiều vật thể.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 198,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q038",
    "lessonId": 5,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Chất và vật thể', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm vật thể tự nhiên và vật thể nhân tạo với chất."
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 199,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q039",
    "lessonId": 5,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Chất và vật thể', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Nhận biết chất/vật thể giúp hiểu tính chất và công dụng của đồ vật."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Gọi tên đồ vật thay cho tên chất."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nhận biết chất/vật thể giúp hiểu tính chất và công dụng của đồ vật.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 200,
    "sourceId": "sci6-b2-l05-chat-va-vat-the-q040",
    "lessonId": 5,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Cốc nước gồm cốc là vật thể chứa nước là chất.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Nghĩ mỗi vật chỉ làm từ một chất."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 201,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q001",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Các thể của chất và sự chuyển thể'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Phân biệt ba thể của chất."
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Phân biệt ba thể của chất.",
    "explanationSimple": "Bài này hướng tới: Phân biệt ba thể của chất.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 202,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q002",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Các thể của chất và sự chuyển thể'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Nhận biết hiện tượng chuyển thể."
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nhận biết hiện tượng chuyển thể.",
    "explanationSimple": "Bài này hướng tới: Nhận biết hiện tượng chuyển thể.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 203,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q003",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Các thể của chất và sự chuyển thể'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Giải thích ví dụ chuyển thể của nước."
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Giải thích ví dụ chuyển thể của nước.",
    "explanationSimple": "Bài này hướng tới: Giải thích ví dụ chuyển thể của nước.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 204,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q004",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Các thể của chất và sự chuyển thể'?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ bay hơi chỉ xảy ra khi nước sôi."
      },
      {
        "key": "B",
        "text": "Thể rắn có hình dạng xác định; thể lỏng có thể tích xác định nhưng hình dạng theo vật chứa; thể khí dễ lan tỏa."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Thể rắn có hình dạng xác định; thể lỏng có thể tích xác định nhưng hình dạng theo vật chứa; thể khí dễ lan tỏa.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 205,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q005",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Các thể của chất và sự chuyển thể'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Thể rắn có hình dạng xác định; thể lỏng có thể tích xác định nhưng hình dạng theo vật chứa; thể khí dễ lan tỏa."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Thể rắn có hình dạng xác định; thể lỏng có thể tích xác định nhưng hình dạng theo vật chứa; thể khí dễ lan tỏa.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 206,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q006",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Các thể của chất và sự chuyển thể'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm ngưng tụ với đông đặc."
      },
      {
        "key": "B",
        "text": "Chất thường tồn tại ở thể rắn, thể lỏng và thể khí."
      },
      {
        "key": "C",
        "text": "Không phân biệt hình dạng và thể tích."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chất thường tồn tại ở thể rắn, thể lỏng và thể khí.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 207,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q007",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Các thể của chất và sự chuyển thể'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Nhiệt độ và điều kiện môi trường ảnh hưởng đến tốc độ chuyển thể."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nhiệt độ và điều kiện môi trường ảnh hưởng đến tốc độ chuyển thể.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 208,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q008",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Các thể của chất và sự chuyển thể'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Nhiệt độ và điều kiện môi trường ảnh hưởng đến tốc độ chuyển thể."
      },
      {
        "key": "C",
        "text": "Không phân biệt hình dạng và thể tích."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nhiệt độ và điều kiện môi trường ảnh hưởng đến tốc độ chuyển thể.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 209,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q009",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Các thể của chất và sự chuyển thể'?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ bay hơi chỉ xảy ra khi nước sôi."
      },
      {
        "key": "B",
        "text": "Không phân biệt hình dạng và thể tích."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Nhiệt độ và điều kiện môi trường ảnh hưởng đến tốc độ chuyển thể."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nhiệt độ và điều kiện môi trường ảnh hưởng đến tốc độ chuyển thể.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 210,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q010",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Các thể của chất và sự chuyển thể'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Sự chuyển thể gồm nóng chảy, đông đặc, bay hơi và ngưng tụ."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Sự chuyển thể gồm nóng chảy, đông đặc, bay hơi và ngưng tụ.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 211,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q011",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'solid'?",
    "options": [
      {
        "key": "A",
        "text": "Mặt Trăng"
      },
      {
        "key": "B",
        "text": "đơn vị cơ bản"
      },
      {
        "key": "C",
        "text": "nhiệt"
      },
      {
        "key": "D",
        "text": "thể rắn"
      }
    ],
    "correctAnswer": "D",
    "answerText": "thể rắn",
    "explanationSimple": "'thể rắn' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 212,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q012",
    "lessonId": 6,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'liquid' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "thể lỏng",
    "answerText": "thể lỏng",
    "explanationSimple": "'liquid' tương ứng với 'thể lỏng' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 213,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q013",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'gas'?",
    "options": [
      {
        "key": "A",
        "text": "tiêm phòng"
      },
      {
        "key": "B",
        "text": "sao"
      },
      {
        "key": "C",
        "text": "thể khí"
      },
      {
        "key": "D",
        "text": "thủy tinh"
      }
    ],
    "correctAnswer": "C",
    "answerText": "thể khí",
    "explanationSimple": "'thể khí' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 214,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q014",
    "lessonId": 6,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'melting' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "nóng chảy",
    "answerText": "nóng chảy",
    "explanationSimple": "'melting' tương ứng với 'nóng chảy' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 215,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q015",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'condensation'?",
    "options": [
      {
        "key": "A",
        "text": "không khí"
      },
      {
        "key": "B",
        "text": "thực vật"
      },
      {
        "key": "C",
        "text": "động năng"
      },
      {
        "key": "D",
        "text": "ngưng tụ"
      }
    ],
    "correctAnswer": "D",
    "answerText": "ngưng tụ",
    "explanationSimple": "'ngưng tụ' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 216,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q016",
    "lessonId": 6,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Các thể của chất và sự chuyển thể'.",
    "options": null,
    "correctAnswer": "thể khí",
    "answerText": "thể khí",
    "explanationSimple": "Một từ khóa đúng là 'thể khí'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 217,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q017",
    "lessonId": 6,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Các thể của chất và sự chuyển thể'.",
    "options": null,
    "correctAnswer": "thể rắn",
    "answerText": "thể rắn",
    "explanationSimple": "Một từ khóa đúng là 'thể rắn'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 218,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q018",
    "lessonId": 6,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Các thể của chất và sự chuyển thể'.",
    "options": null,
    "correctAnswer": "thể lỏng",
    "answerText": "thể lỏng",
    "explanationSimple": "Một từ khóa đúng là 'thể lỏng'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 219,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q019",
    "lessonId": 6,
    "questionType": "true_false",
    "questionText": "Chất thường tồn tại ở thể rắn, thể lỏng và thể khí.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 220,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q020",
    "lessonId": 6,
    "questionType": "true_false",
    "questionText": "Thể rắn có hình dạng xác định; thể lỏng có thể tích xác định nhưng hình dạng theo vật chứa; thể khí dễ lan tỏa.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 221,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q021",
    "lessonId": 6,
    "questionType": "true_false",
    "questionText": "Sự chuyển thể gồm nóng chảy, đông đặc, bay hơi và ngưng tụ.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 222,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q022",
    "lessonId": 6,
    "questionType": "true_false",
    "questionText": "Nhiệt độ và điều kiện môi trường ảnh hưởng đến tốc độ chuyển thể.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 223,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q023",
    "lessonId": 6,
    "questionType": "true_false",
    "questionText": "Nghĩ bay hơi chỉ xảy ra khi nước sôi.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 224,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q024",
    "lessonId": 6,
    "questionType": "true_false",
    "questionText": "Nhầm ngưng tụ với đông đặc.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 225,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q025",
    "lessonId": 6,
    "questionType": "true_false",
    "questionText": "Không phân biệt hình dạng và thể tích.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 226,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q026",
    "lessonId": 6,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các thể của chất và sự chuyển thể', hãy nêu một thuật ngữ liên quan đến ý: Nhiệt độ và điều kiện môi trường ảnh hưởng đến tốc độ chuyển thể.",
    "options": null,
    "correctAnswer": "thể rắn",
    "answerText": "thể rắn",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thể rắn' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 227,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q027",
    "lessonId": 6,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các thể của chất và sự chuyển thể', hãy nêu một thuật ngữ liên quan đến ý: Nhiệt độ và điều kiện môi trường ảnh hưởng đến tốc độ chuyển thể.",
    "options": null,
    "correctAnswer": "thể lỏng",
    "answerText": "thể lỏng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thể lỏng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 228,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q028",
    "lessonId": 6,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các thể của chất và sự chuyển thể', hãy nêu một thuật ngữ liên quan đến ý: Nhiệt độ và điều kiện môi trường ảnh hưởng đến tốc độ chuyển thể.",
    "options": null,
    "correctAnswer": "thể lỏng",
    "answerText": "thể lỏng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thể lỏng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 229,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q029",
    "lessonId": 6,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các thể của chất và sự chuyển thể', hãy nêu một thuật ngữ liên quan đến ý: Chất thường tồn tại ở thể rắn, thể lỏng và thể khí.",
    "options": null,
    "correctAnswer": "thể rắn",
    "answerText": "thể rắn",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thể rắn' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 230,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q030",
    "lessonId": 6,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các thể của chất và sự chuyển thể', hãy nêu một thuật ngữ liên quan đến ý: Chất thường tồn tại ở thể rắn, thể lỏng và thể khí.",
    "options": null,
    "correctAnswer": "thể rắn",
    "answerText": "thể rắn",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thể rắn' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 231,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q031",
    "lessonId": 6,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các thể của chất và sự chuyển thể', hãy nêu một thuật ngữ liên quan đến ý: Sự chuyển thể gồm nóng chảy, đông đặc, bay hơi và ngưng tụ.",
    "options": null,
    "correctAnswer": "nóng chảy",
    "answerText": "nóng chảy",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nóng chảy' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 232,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q032",
    "lessonId": 6,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các thể của chất và sự chuyển thể', hãy nêu một thuật ngữ liên quan đến ý: Thể rắn có hình dạng xác định; thể lỏng có thể tích xác định nhưng hình dạng theo vật chứa; thể khí dễ lan tỏa.",
    "options": null,
    "correctAnswer": "nóng chảy",
    "answerText": "nóng chảy",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nóng chảy' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 233,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q033",
    "lessonId": 6,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các thể của chất và sự chuyển thể', hãy nêu một thuật ngữ liên quan đến ý: Nhiệt độ và điều kiện môi trường ảnh hưởng đến tốc độ chuyển thể.",
    "options": null,
    "correctAnswer": "thể rắn",
    "answerText": "thể rắn",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thể rắn' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 234,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q034",
    "lessonId": 6,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các thể của chất và sự chuyển thể', hãy nêu một thuật ngữ liên quan đến ý: Nhiệt độ và điều kiện môi trường ảnh hưởng đến tốc độ chuyển thể.",
    "options": null,
    "correctAnswer": "nóng chảy",
    "answerText": "nóng chảy",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nóng chảy' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 235,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q035",
    "lessonId": 6,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Hơi nước gặp lạnh ngưng tụ thành giọt nước.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Thể rắn có hình dạng xác định; thể lỏng có thể tích xác định nhưng hình dạng theo vật chứa; thể khí dễ lan tỏa."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Không phân biệt hình dạng và thể tích."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Thể rắn có hình dạng xác định; thể lỏng có thể tích xác định nhưng hình dạng theo vật chứa; thể khí dễ lan tỏa.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 236,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q036",
    "lessonId": 6,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Nước đá nóng chảy thành nước lỏng.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Không phân biệt hình dạng và thể tích."
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 237,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q037",
    "lessonId": 6,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Hơi nước gặp lạnh ngưng tụ thành giọt nước.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Chất thường tồn tại ở thể rắn, thể lỏng và thể khí."
      },
      {
        "key": "D",
        "text": "Nhầm ngưng tụ với đông đặc."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chất thường tồn tại ở thể rắn, thể lỏng và thể khí.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 238,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q038",
    "lessonId": 6,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Nước đá nóng chảy thành nước lỏng.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm ngưng tụ với đông đặc."
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 239,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q039",
    "lessonId": 6,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Các thể của chất và sự chuyển thể', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Nhầm ngưng tụ với đông đặc."
      },
      {
        "key": "C",
        "text": "Nhiệt độ và điều kiện môi trường ảnh hưởng đến tốc độ chuyển thể."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nhiệt độ và điều kiện môi trường ảnh hưởng đến tốc độ chuyển thể.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 240,
    "sourceId": "sci6-b2-l06-cac-the-cua-chat-va-su-chuyen-the-q040",
    "lessonId": 6,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Hơi nước gặp lạnh ngưng tụ thành giọt nước.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Không phân biệt hình dạng và thể tích."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 241,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q001",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Oxygen, không khí và bảo vệ không khí'?",
    "options": [
      {
        "key": "A",
        "text": "Biết không khí là hỗn hợp khí."
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Học thuộc tất cả số liệu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Biết không khí là hỗn hợp khí.",
    "explanationSimple": "Bài này hướng tới: Biết không khí là hỗn hợp khí.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 242,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q002",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Oxygen, không khí và bảo vệ không khí'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần quan sát"
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Nêu vai trò của oxygen."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nêu vai trò của oxygen.",
    "explanationSimple": "Bài này hướng tới: Nêu vai trò của oxygen.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 243,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q003",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Oxygen, không khí và bảo vệ không khí'?",
    "options": [
      {
        "key": "A",
        "text": "Chọn hành động bảo vệ không khí."
      },
      {
        "key": "B",
        "text": "Không cần quan sát"
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Chọn hành động bảo vệ không khí.",
    "explanationSimple": "Bài này hướng tới: Chọn hành động bảo vệ không khí.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 244,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q004",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Oxygen, không khí và bảo vệ không khí'?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ không khí chỉ gồm oxygen."
      },
      {
        "key": "B",
        "text": "Không khí sạch quan trọng với sức khỏe và môi trường."
      },
      {
        "key": "C",
        "text": "Cho rằng oxygen là chất cháy."
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Không khí sạch quan trọng với sức khỏe và môi trường.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 245,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q005",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Oxygen, không khí và bảo vệ không khí'?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Không khí là hỗn hợp nhiều khí, trong đó có oxygen, nitrogen, carbon dioxide và một số khí khác."
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Không khí là hỗn hợp nhiều khí, trong đó có oxygen, nitrogen, carbon dioxide và một số khí khác.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 246,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q006",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Oxygen, không khí và bảo vệ không khí'?",
    "options": [
      {
        "key": "A",
        "text": "Không khí là hỗn hợp nhiều khí, trong đó có oxygen, nitrogen, carbon dioxide và một số khí khác."
      },
      {
        "key": "B",
        "text": "Cho rằng oxygen là chất cháy."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Nghĩ không khí chỉ gồm oxygen."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Không khí là hỗn hợp nhiều khí, trong đó có oxygen, nitrogen, carbon dioxide và một số khí khác.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 247,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q007",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Oxygen, không khí và bảo vệ không khí'?",
    "options": [
      {
        "key": "A",
        "text": "Oxygen cần cho hô hấp và duy trì sự cháy."
      },
      {
        "key": "B",
        "text": "Nghĩ không khí chỉ gồm oxygen."
      },
      {
        "key": "C",
        "text": "Cho rằng oxygen là chất cháy."
      },
      {
        "key": "D",
        "text": "Không thấy tác hại của khói bụi."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Oxygen cần cho hô hấp và duy trì sự cháy.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 248,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q008",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Oxygen, không khí và bảo vệ không khí'?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ không khí chỉ gồm oxygen."
      },
      {
        "key": "B",
        "text": "Ô nhiễm không khí có thể đến từ khói bụi, khí thải, đốt rác và cháy rừng."
      },
      {
        "key": "C",
        "text": "Không thấy tác hại của khói bụi."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Ô nhiễm không khí có thể đến từ khói bụi, khí thải, đốt rác và cháy rừng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 249,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q009",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Oxygen, không khí và bảo vệ không khí'?",
    "options": [
      {
        "key": "A",
        "text": "Không thấy tác hại của khói bụi."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Oxygen cần cho hô hấp và duy trì sự cháy."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Oxygen cần cho hô hấp và duy trì sự cháy.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 250,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q010",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Oxygen, không khí và bảo vệ không khí'?",
    "options": [
      {
        "key": "A",
        "text": "Không khí là hỗn hợp nhiều khí, trong đó có oxygen, nitrogen, carbon dioxide và một số khí khác."
      },
      {
        "key": "B",
        "text": "Không thấy tác hại của khói bụi."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Cho rằng oxygen là chất cháy."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Không khí là hỗn hợp nhiều khí, trong đó có oxygen, nitrogen, carbon dioxide và một số khí khác.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 251,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q011",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'oxygen'?",
    "options": [
      {
        "key": "A",
        "text": "chất tế bào"
      },
      {
        "key": "B",
        "text": "oxygen"
      },
      {
        "key": "C",
        "text": "thiên hà"
      },
      {
        "key": "D",
        "text": "hỗn hợp"
      }
    ],
    "correctAnswer": "B",
    "answerText": "oxygen",
    "explanationSimple": "'oxygen' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 252,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q012",
    "lessonId": 7,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'air' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "không khí",
    "answerText": "không khí",
    "explanationSimple": "'air' tương ứng với 'không khí' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 253,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q013",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'respiration'?",
    "options": [
      {
        "key": "A",
        "text": "hô hấp"
      },
      {
        "key": "B",
        "text": "thể rắn"
      },
      {
        "key": "C",
        "text": "đa bào"
      },
      {
        "key": "D",
        "text": "nấm mốc"
      }
    ],
    "correctAnswer": "A",
    "answerText": "hô hấp",
    "explanationSimple": "'hô hấp' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 254,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q014",
    "lessonId": 7,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'burning' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "sự cháy",
    "answerText": "sự cháy",
    "explanationSimple": "'burning' tương ứng với 'sự cháy' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 255,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q015",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'pollution'?",
    "options": [
      {
        "key": "A",
        "text": "ô nhiễm"
      },
      {
        "key": "B",
        "text": "hệ sinh thái"
      },
      {
        "key": "C",
        "text": "phương thẳng đứng"
      },
      {
        "key": "D",
        "text": "hiện tượng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "ô nhiễm",
    "explanationSimple": "'ô nhiễm' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 256,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q016",
    "lessonId": 7,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Oxygen, không khí và bảo vệ không khí'.",
    "options": null,
    "correctAnswer": "hô hấp",
    "answerText": "hô hấp",
    "explanationSimple": "Một từ khóa đúng là 'hô hấp'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 257,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q017",
    "lessonId": 7,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Oxygen, không khí và bảo vệ không khí'.",
    "options": null,
    "correctAnswer": "hô hấp",
    "answerText": "hô hấp",
    "explanationSimple": "Một từ khóa đúng là 'hô hấp'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 258,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q018",
    "lessonId": 7,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Oxygen, không khí và bảo vệ không khí'.",
    "options": null,
    "correctAnswer": "hô hấp",
    "answerText": "hô hấp",
    "explanationSimple": "Một từ khóa đúng là 'hô hấp'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 259,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q019",
    "lessonId": 7,
    "questionType": "true_false",
    "questionText": "Không khí là hỗn hợp nhiều khí, trong đó có oxygen, nitrogen, carbon dioxide và một số khí khác.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 260,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q020",
    "lessonId": 7,
    "questionType": "true_false",
    "questionText": "Oxygen cần cho hô hấp và duy trì sự cháy.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 261,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q021",
    "lessonId": 7,
    "questionType": "true_false",
    "questionText": "Không khí sạch quan trọng với sức khỏe và môi trường.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 262,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q022",
    "lessonId": 7,
    "questionType": "true_false",
    "questionText": "Ô nhiễm không khí có thể đến từ khói bụi, khí thải, đốt rác và cháy rừng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 263,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q023",
    "lessonId": 7,
    "questionType": "true_false",
    "questionText": "Nghĩ không khí chỉ gồm oxygen.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 264,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q024",
    "lessonId": 7,
    "questionType": "true_false",
    "questionText": "Cho rằng oxygen là chất cháy.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 265,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q025",
    "lessonId": 7,
    "questionType": "true_false",
    "questionText": "Không thấy tác hại của khói bụi.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 266,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q026",
    "lessonId": 7,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Oxygen, không khí và bảo vệ không khí', hãy nêu một thuật ngữ liên quan đến ý: Ô nhiễm không khí có thể đến từ khói bụi, khí thải, đốt rác và cháy rừng.",
    "options": null,
    "correctAnswer": "oxygen",
    "answerText": "oxygen",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'oxygen' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 267,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q027",
    "lessonId": 7,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Oxygen, không khí và bảo vệ không khí', hãy nêu một thuật ngữ liên quan đến ý: Không khí sạch quan trọng với sức khỏe và môi trường.",
    "options": null,
    "correctAnswer": "sự cháy",
    "answerText": "sự cháy",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'sự cháy' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 268,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q028",
    "lessonId": 7,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Oxygen, không khí và bảo vệ không khí', hãy nêu một thuật ngữ liên quan đến ý: Không khí sạch quan trọng với sức khỏe và môi trường.",
    "options": null,
    "correctAnswer": "hô hấp",
    "answerText": "hô hấp",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'hô hấp' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 269,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q029",
    "lessonId": 7,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Oxygen, không khí và bảo vệ không khí', hãy nêu một thuật ngữ liên quan đến ý: Oxygen cần cho hô hấp và duy trì sự cháy.",
    "options": null,
    "correctAnswer": "sự cháy",
    "answerText": "sự cháy",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'sự cháy' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 270,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q030",
    "lessonId": 7,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Oxygen, không khí và bảo vệ không khí', hãy nêu một thuật ngữ liên quan đến ý: Không khí sạch quan trọng với sức khỏe và môi trường.",
    "options": null,
    "correctAnswer": "không khí",
    "answerText": "không khí",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'không khí' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 271,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q031",
    "lessonId": 7,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Oxygen, không khí và bảo vệ không khí', hãy nêu một thuật ngữ liên quan đến ý: Ô nhiễm không khí có thể đến từ khói bụi, khí thải, đốt rác và cháy rừng.",
    "options": null,
    "correctAnswer": "hô hấp",
    "answerText": "hô hấp",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'hô hấp' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 272,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q032",
    "lessonId": 7,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Oxygen, không khí và bảo vệ không khí', hãy nêu một thuật ngữ liên quan đến ý: Không khí là hỗn hợp nhiều khí, trong đó có oxygen, nitrogen, carbon dioxide và một số khí khác.",
    "options": null,
    "correctAnswer": "hô hấp",
    "answerText": "hô hấp",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'hô hấp' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 273,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q033",
    "lessonId": 7,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Oxygen, không khí và bảo vệ không khí', hãy nêu một thuật ngữ liên quan đến ý: Ô nhiễm không khí có thể đến từ khói bụi, khí thải, đốt rác và cháy rừng.",
    "options": null,
    "correctAnswer": "sự cháy",
    "answerText": "sự cháy",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'sự cháy' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 274,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q034",
    "lessonId": 7,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Oxygen, không khí và bảo vệ không khí', hãy nêu một thuật ngữ liên quan đến ý: Oxygen cần cho hô hấp và duy trì sự cháy.",
    "options": null,
    "correctAnswer": "sự cháy",
    "answerText": "sự cháy",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'sự cháy' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 275,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q035",
    "lessonId": 7,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Ngọn nến tắt khi bị úp kín do thiếu oxygen.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Không khí sạch quan trọng với sức khỏe và môi trường."
      },
      {
        "key": "B",
        "text": "Cho rằng oxygen là chất cháy."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Không khí sạch quan trọng với sức khỏe và môi trường.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 276,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q036",
    "lessonId": 7,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Trồng cây và không đốt rác giúp giảm ô nhiễm.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Không thấy tác hại của khói bụi."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 277,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q037",
    "lessonId": 7,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Ngọn nến tắt khi bị úp kín do thiếu oxygen.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Không khí là hỗn hợp nhiều khí, trong đó có oxygen, nitrogen, carbon dioxide và một số khí khác."
      },
      {
        "key": "B",
        "text": "Không thấy tác hại của khói bụi."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Không khí là hỗn hợp nhiều khí, trong đó có oxygen, nitrogen, carbon dioxide và một số khí khác.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 278,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q038",
    "lessonId": 7,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Ngọn nến tắt khi bị úp kín do thiếu oxygen.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ không khí chỉ gồm oxygen."
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 279,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q039",
    "lessonId": 7,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Oxygen, không khí và bảo vệ không khí', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Không thấy tác hại của khói bụi."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Không khí là hỗn hợp nhiều khí, trong đó có oxygen, nitrogen, carbon dioxide và một số khí khác."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Không khí là hỗn hợp nhiều khí, trong đó có oxygen, nitrogen, carbon dioxide và một số khí khác.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 280,
    "sourceId": "sci6-b2-l07-oxygen-khong-khi-va-bao-ve-khong-khi-q040",
    "lessonId": 7,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Ngọn nến tắt khi bị úp kín do thiếu oxygen.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Không thấy tác hại của khói bụi."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 281,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q001",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Vật liệu thông dụng'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "B",
        "text": "Nhận biết vật liệu thông dụng."
      },
      {
        "key": "C",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nhận biết vật liệu thông dụng.",
    "explanationSimple": "Bài này hướng tới: Nhận biết vật liệu thông dụng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 282,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q002",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Vật liệu thông dụng'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Không cần quan sát"
      },
      {
        "key": "C",
        "text": "Nêu tính chất và ứng dụng."
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nêu tính chất và ứng dụng.",
    "explanationSimple": "Bài này hướng tới: Nêu tính chất và ứng dụng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 283,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q003",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Vật liệu thông dụng'?",
    "options": [
      {
        "key": "A",
        "text": "Chọn vật liệu phù hợp tình huống."
      },
      {
        "key": "B",
        "text": "Không cần quan sát"
      },
      {
        "key": "C",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Chọn vật liệu phù hợp tình huống.",
    "explanationSimple": "Bài này hướng tới: Chọn vật liệu phù hợp tình huống.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 284,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q004",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Vật liệu thông dụng'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm vật liệu với sản phẩm."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Vật liệu là chất hoặc hỗn hợp chất dùng để tạo sản phẩm."
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Vật liệu là chất hoặc hỗn hợp chất dùng để tạo sản phẩm.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 285,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q005",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Vật liệu thông dụng'?",
    "options": [
      {
        "key": "A",
        "text": "Không xét an toàn/môi trường."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Chọn vật liệu chỉ theo vẻ ngoài."
      },
      {
        "key": "D",
        "text": "Mỗi vật liệu có tính chất riêng như cứng, dẻo, dẫn điện, cách điện, bền, dễ vỡ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Mỗi vật liệu có tính chất riêng như cứng, dẻo, dẫn điện, cách điện, bền, dễ vỡ.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 286,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q006",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Vật liệu thông dụng'?",
    "options": [
      {
        "key": "A",
        "text": "Mỗi vật liệu có tính chất riêng như cứng, dẻo, dẫn điện, cách điện, bền, dễ vỡ."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Chọn vật liệu chỉ theo vẻ ngoài."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Mỗi vật liệu có tính chất riêng như cứng, dẻo, dẫn điện, cách điện, bền, dễ vỡ.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 287,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q007",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Vật liệu thông dụng'?",
    "options": [
      {
        "key": "A",
        "text": "Chọn vật liệu cần phù hợp công dụng, an toàn, chi phí và môi trường."
      },
      {
        "key": "B",
        "text": "Nhầm vật liệu với sản phẩm."
      },
      {
        "key": "C",
        "text": "Chọn vật liệu chỉ theo vẻ ngoài."
      },
      {
        "key": "D",
        "text": "Không xét an toàn/môi trường."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Chọn vật liệu cần phù hợp công dụng, an toàn, chi phí và môi trường.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 288,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q008",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Vật liệu thông dụng'?",
    "options": [
      {
        "key": "A",
        "text": "Chọn vật liệu chỉ theo vẻ ngoài."
      },
      {
        "key": "B",
        "text": "Nhầm vật liệu với sản phẩm."
      },
      {
        "key": "C",
        "text": "Mỗi vật liệu có tính chất riêng như cứng, dẻo, dẫn điện, cách điện, bền, dễ vỡ."
      },
      {
        "key": "D",
        "text": "Không xét an toàn/môi trường."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Mỗi vật liệu có tính chất riêng như cứng, dẻo, dẫn điện, cách điện, bền, dễ vỡ.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 289,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q009",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Vật liệu thông dụng'?",
    "options": [
      {
        "key": "A",
        "text": "Vật liệu là chất hoặc hỗn hợp chất dùng để tạo sản phẩm."
      },
      {
        "key": "B",
        "text": "Chọn vật liệu chỉ theo vẻ ngoài."
      },
      {
        "key": "C",
        "text": "Nhầm vật liệu với sản phẩm."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Vật liệu là chất hoặc hỗn hợp chất dùng để tạo sản phẩm.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 290,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q010",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Vật liệu thông dụng'?",
    "options": [
      {
        "key": "A",
        "text": "Mỗi vật liệu có tính chất riêng như cứng, dẻo, dẫn điện, cách điện, bền, dễ vỡ."
      },
      {
        "key": "B",
        "text": "Nhầm vật liệu với sản phẩm."
      },
      {
        "key": "C",
        "text": "Không xét an toàn/môi trường."
      },
      {
        "key": "D",
        "text": "Chọn vật liệu chỉ theo vẻ ngoài."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Mỗi vật liệu có tính chất riêng như cứng, dẻo, dẫn điện, cách điện, bền, dễ vỡ.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 291,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q011",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'material'?",
    "options": [
      {
        "key": "A",
        "text": "phóng đại"
      },
      {
        "key": "B",
        "text": "chất đạm"
      },
      {
        "key": "C",
        "text": "vật liệu"
      },
      {
        "key": "D",
        "text": "phương thẳng đứng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "vật liệu",
    "explanationSimple": "'vật liệu' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 292,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q012",
    "lessonId": 8,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'metal' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "kim loại",
    "answerText": "kim loại",
    "explanationSimple": "'metal' tương ứng với 'kim loại' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 293,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q013",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'plastic'?",
    "options": [
      {
        "key": "A",
        "text": "tổng hợp"
      },
      {
        "key": "B",
        "text": "thể khí"
      },
      {
        "key": "C",
        "text": "nhựa"
      },
      {
        "key": "D",
        "text": "động năng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "nhựa",
    "explanationSimple": "'nhựa' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 294,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q014",
    "lessonId": 8,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'glass' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "thủy tinh",
    "answerText": "thủy tinh",
    "explanationSimple": "'glass' tương ứng với 'thủy tinh' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 295,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q015",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'rubber'?",
    "options": [
      {
        "key": "A",
        "text": "biến đổi"
      },
      {
        "key": "B",
        "text": "cơ thể"
      },
      {
        "key": "C",
        "text": "phục hồi"
      },
      {
        "key": "D",
        "text": "cao su"
      }
    ],
    "correctAnswer": "D",
    "answerText": "cao su",
    "explanationSimple": "'cao su' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 296,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q016",
    "lessonId": 8,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Vật liệu thông dụng'.",
    "options": null,
    "correctAnswer": "vật liệu",
    "answerText": "vật liệu",
    "explanationSimple": "Một từ khóa đúng là 'vật liệu'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 297,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q017",
    "lessonId": 8,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Vật liệu thông dụng'.",
    "options": null,
    "correctAnswer": "vật liệu",
    "answerText": "vật liệu",
    "explanationSimple": "Một từ khóa đúng là 'vật liệu'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 298,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q018",
    "lessonId": 8,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Vật liệu thông dụng'.",
    "options": null,
    "correctAnswer": "kim loại",
    "answerText": "kim loại",
    "explanationSimple": "Một từ khóa đúng là 'kim loại'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 299,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q019",
    "lessonId": 8,
    "questionType": "true_false",
    "questionText": "Vật liệu là chất hoặc hỗn hợp chất dùng để tạo sản phẩm.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 300,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q020",
    "lessonId": 8,
    "questionType": "true_false",
    "questionText": "Vật liệu thông dụng gồm kim loại, nhựa, gỗ, thủy tinh, cao su, gốm sứ.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 301,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q021",
    "lessonId": 8,
    "questionType": "true_false",
    "questionText": "Mỗi vật liệu có tính chất riêng như cứng, dẻo, dẫn điện, cách điện, bền, dễ vỡ.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 302,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q022",
    "lessonId": 8,
    "questionType": "true_false",
    "questionText": "Chọn vật liệu cần phù hợp công dụng, an toàn, chi phí và môi trường.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 303,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q023",
    "lessonId": 8,
    "questionType": "true_false",
    "questionText": "Chọn vật liệu chỉ theo vẻ ngoài.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 304,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q024",
    "lessonId": 8,
    "questionType": "true_false",
    "questionText": "Không xét an toàn/môi trường.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 305,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q025",
    "lessonId": 8,
    "questionType": "true_false",
    "questionText": "Nhầm vật liệu với sản phẩm.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 306,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q026",
    "lessonId": 8,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vật liệu thông dụng', hãy nêu một thuật ngữ liên quan đến ý: Vật liệu là chất hoặc hỗn hợp chất dùng để tạo sản phẩm.",
    "options": null,
    "correctAnswer": "nhựa",
    "answerText": "nhựa",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nhựa' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 307,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q027",
    "lessonId": 8,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vật liệu thông dụng', hãy nêu một thuật ngữ liên quan đến ý: Chọn vật liệu cần phù hợp công dụng, an toàn, chi phí và môi trường.",
    "options": null,
    "correctAnswer": "cao su",
    "answerText": "cao su",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'cao su' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 308,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q028",
    "lessonId": 8,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vật liệu thông dụng', hãy nêu một thuật ngữ liên quan đến ý: Vật liệu là chất hoặc hỗn hợp chất dùng để tạo sản phẩm.",
    "options": null,
    "correctAnswer": "nhựa",
    "answerText": "nhựa",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nhựa' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 309,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q029",
    "lessonId": 8,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vật liệu thông dụng', hãy nêu một thuật ngữ liên quan đến ý: Vật liệu thông dụng gồm kim loại, nhựa, gỗ, thủy tinh, cao su, gốm sứ.",
    "options": null,
    "correctAnswer": "thủy tinh",
    "answerText": "thủy tinh",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thủy tinh' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 310,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q030",
    "lessonId": 8,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vật liệu thông dụng', hãy nêu một thuật ngữ liên quan đến ý: Vật liệu là chất hoặc hỗn hợp chất dùng để tạo sản phẩm.",
    "options": null,
    "correctAnswer": "vật liệu",
    "answerText": "vật liệu",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vật liệu' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 311,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q031",
    "lessonId": 8,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vật liệu thông dụng', hãy nêu một thuật ngữ liên quan đến ý: Vật liệu thông dụng gồm kim loại, nhựa, gỗ, thủy tinh, cao su, gốm sứ.",
    "options": null,
    "correctAnswer": "kim loại",
    "answerText": "kim loại",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'kim loại' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 312,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q032",
    "lessonId": 8,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vật liệu thông dụng', hãy nêu một thuật ngữ liên quan đến ý: Vật liệu thông dụng gồm kim loại, nhựa, gỗ, thủy tinh, cao su, gốm sứ.",
    "options": null,
    "correctAnswer": "vật liệu",
    "answerText": "vật liệu",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vật liệu' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 313,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q033",
    "lessonId": 8,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vật liệu thông dụng', hãy nêu một thuật ngữ liên quan đến ý: Vật liệu là chất hoặc hỗn hợp chất dùng để tạo sản phẩm.",
    "options": null,
    "correctAnswer": "thủy tinh",
    "answerText": "thủy tinh",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thủy tinh' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 314,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q034",
    "lessonId": 8,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vật liệu thông dụng', hãy nêu một thuật ngữ liên quan đến ý: Chọn vật liệu cần phù hợp công dụng, an toàn, chi phí và môi trường.",
    "options": null,
    "correctAnswer": "kim loại",
    "answerText": "kim loại",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'kim loại' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 315,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q035",
    "lessonId": 8,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Lốp xe làm từ cao su vì đàn hồi.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Chọn vật liệu chỉ theo vẻ ngoài."
      },
      {
        "key": "C",
        "text": "Mỗi vật liệu có tính chất riêng như cứng, dẻo, dẫn điện, cách điện, bền, dễ vỡ."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Mỗi vật liệu có tính chất riêng như cứng, dẻo, dẫn điện, cách điện, bền, dễ vỡ.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 316,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q036",
    "lessonId": 8,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Dây điện lõi đồng vì đồng dẫn điện tốt.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Nhầm vật liệu với sản phẩm."
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 317,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q037",
    "lessonId": 8,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Lốp xe làm từ cao su vì đàn hồi.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Chọn vật liệu cần phù hợp công dụng, an toàn, chi phí và môi trường."
      },
      {
        "key": "C",
        "text": "Nhầm vật liệu với sản phẩm."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chọn vật liệu cần phù hợp công dụng, an toàn, chi phí và môi trường.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 318,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q038",
    "lessonId": 8,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Vật liệu thông dụng', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Chọn vật liệu chỉ theo vẻ ngoài."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 319,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q039",
    "lessonId": 8,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Vật liệu thông dụng', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Không xét an toàn/môi trường."
      },
      {
        "key": "C",
        "text": "Chọn vật liệu cần phù hợp công dụng, an toàn, chi phí và môi trường."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chọn vật liệu cần phù hợp công dụng, an toàn, chi phí và môi trường.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 320,
    "sourceId": "sci6-b2-l08-vat-lieu-thong-dung-q040",
    "lessonId": 8,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Lốp xe làm từ cao su vì đàn hồi.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Không xét an toàn/môi trường."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 321,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q001",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn'?",
    "options": [
      {
        "key": "A",
        "text": "Phân biệt nguyên liệu và nhiên liệu."
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Phân biệt nguyên liệu và nhiên liệu.",
    "explanationSimple": "Bài này hướng tới: Phân biệt nguyên liệu và nhiên liệu.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 322,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q002",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "B",
        "text": "Nêu ví dụ nhiên liệu."
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Học thuộc tất cả số liệu"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nêu ví dụ nhiên liệu.",
    "explanationSimple": "Bài này hướng tới: Nêu ví dụ nhiên liệu.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 323,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q003",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn'?",
    "options": [
      {
        "key": "A",
        "text": "Biết lưu ý an toàn khi dùng nhiên liệu."
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Biết lưu ý an toàn khi dùng nhiên liệu.",
    "explanationSimple": "Bài này hướng tới: Biết lưu ý an toàn khi dùng nhiên liệu.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 324,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q004",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn'?",
    "options": [
      {
        "key": "A",
        "text": "Nhiên liệu là chất khi cháy hoặc biến đổi có thể cung cấp năng lượng."
      },
      {
        "key": "B",
        "text": "Bỏ qua nguy cơ cháy nổ."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nhiên liệu là chất khi cháy hoặc biến đổi có thể cung cấp năng lượng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 325,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q005",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua nguy cơ cháy nổ."
      },
      {
        "key": "B",
        "text": "Nguyên liệu là vật chất ban đầu dùng để sản xuất ra sản phẩm."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Cho rằng nhiên liệu chỉ là xăng dầu."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nguyên liệu là vật chất ban đầu dùng để sản xuất ra sản phẩm.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 326,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q006",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn'?",
    "options": [
      {
        "key": "A",
        "text": "Cho rằng nhiên liệu chỉ là xăng dầu."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Nguyên liệu là vật chất ban đầu dùng để sản xuất ra sản phẩm."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nguyên liệu là vật chất ban đầu dùng để sản xuất ra sản phẩm.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 327,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q007",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm nguyên liệu với nhiên liệu."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Nhiên liệu thường gặp: than, xăng, dầu, khí gas, củi."
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nhiên liệu thường gặp: than, xăng, dầu, khí gas, củi.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 328,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q008",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm nguyên liệu với nhiên liệu."
      },
      {
        "key": "B",
        "text": "Bỏ qua nguy cơ cháy nổ."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Nhiên liệu là chất khi cháy hoặc biến đổi có thể cung cấp năng lượng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nhiên liệu là chất khi cháy hoặc biến đổi có thể cung cấp năng lượng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 329,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q009",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Nguyên liệu là vật chất ban đầu dùng để sản xuất ra sản phẩm."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Bỏ qua nguy cơ cháy nổ."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nguyên liệu là vật chất ban đầu dùng để sản xuất ra sản phẩm.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 330,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q010",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn'?",
    "options": [
      {
        "key": "A",
        "text": "Nguyên liệu là vật chất ban đầu dùng để sản xuất ra sản phẩm."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Nhầm nguyên liệu với nhiên liệu."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nguyên liệu là vật chất ban đầu dùng để sản xuất ra sản phẩm.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 331,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q011",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'raw material'?",
    "options": [
      {
        "key": "A",
        "text": "dung dịch"
      },
      {
        "key": "B",
        "text": "nguyên liệu"
      },
      {
        "key": "C",
        "text": "an toàn"
      },
      {
        "key": "D",
        "text": "cao su"
      }
    ],
    "correctAnswer": "B",
    "answerText": "nguyên liệu",
    "explanationSimple": "'nguyên liệu' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 332,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q012",
    "lessonId": 9,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'fuel' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "nhiên liệu",
    "answerText": "nhiên liệu",
    "explanationSimple": "'fuel' tương ứng với 'nhiên liệu' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 333,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q013",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'energy'?",
    "options": [
      {
        "key": "A",
        "text": "năng lượng"
      },
      {
        "key": "B",
        "text": "nóng chảy"
      },
      {
        "key": "C",
        "text": "thể lỏng"
      },
      {
        "key": "D",
        "text": "kim loại"
      }
    ],
    "correctAnswer": "A",
    "answerText": "năng lượng",
    "explanationSimple": "'năng lượng' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 334,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q014",
    "lessonId": 9,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'gas' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "khí gas",
    "answerText": "khí gas",
    "explanationSimple": "'gas' tương ứng với 'khí gas' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 335,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q015",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'fire/explosion'?",
    "options": [
      {
        "key": "A",
        "text": "bôi trơn"
      },
      {
        "key": "B",
        "text": "tổng hợp"
      },
      {
        "key": "C",
        "text": "phân giải"
      },
      {
        "key": "D",
        "text": "cháy nổ"
      }
    ],
    "correctAnswer": "D",
    "answerText": "cháy nổ",
    "explanationSimple": "'cháy nổ' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 336,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q016",
    "lessonId": 9,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn'.",
    "options": null,
    "correctAnswer": "cháy nổ",
    "answerText": "cháy nổ",
    "explanationSimple": "Một từ khóa đúng là 'cháy nổ'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 337,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q017",
    "lessonId": 9,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn'.",
    "options": null,
    "correctAnswer": "năng lượng",
    "answerText": "năng lượng",
    "explanationSimple": "Một từ khóa đúng là 'năng lượng'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 338,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q018",
    "lessonId": 9,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn'.",
    "options": null,
    "correctAnswer": "nhiên liệu",
    "answerText": "nhiên liệu",
    "explanationSimple": "Một từ khóa đúng là 'nhiên liệu'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 339,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q019",
    "lessonId": 9,
    "questionType": "true_false",
    "questionText": "Nguyên liệu là vật chất ban đầu dùng để sản xuất ra sản phẩm.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 340,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q020",
    "lessonId": 9,
    "questionType": "true_false",
    "questionText": "Nhiên liệu là chất khi cháy hoặc biến đổi có thể cung cấp năng lượng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 341,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q021",
    "lessonId": 9,
    "questionType": "true_false",
    "questionText": "Nhiên liệu thường gặp: than, xăng, dầu, khí gas, củi.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 342,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q022",
    "lessonId": 9,
    "questionType": "true_false",
    "questionText": "Sử dụng nhiên liệu cần an toàn, tiết kiệm và hạn chế gây ô nhiễm.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 343,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q023",
    "lessonId": 9,
    "questionType": "true_false",
    "questionText": "Nhầm nguyên liệu với nhiên liệu.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 344,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q024",
    "lessonId": 9,
    "questionType": "true_false",
    "questionText": "Cho rằng nhiên liệu chỉ là xăng dầu.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 345,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q025",
    "lessonId": 9,
    "questionType": "true_false",
    "questionText": "Bỏ qua nguy cơ cháy nổ.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 346,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q026",
    "lessonId": 9,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn', hãy nêu một thuật ngữ liên quan đến ý: Nhiên liệu thường gặp: than, xăng, dầu, khí gas, củi.",
    "options": null,
    "correctAnswer": "nguyên liệu",
    "answerText": "nguyên liệu",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nguyên liệu' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 347,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q027",
    "lessonId": 9,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn', hãy nêu một thuật ngữ liên quan đến ý: Sử dụng nhiên liệu cần an toàn, tiết kiệm và hạn chế gây ô nhiễm.",
    "options": null,
    "correctAnswer": "cháy nổ",
    "answerText": "cháy nổ",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'cháy nổ' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 348,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q028",
    "lessonId": 9,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn', hãy nêu một thuật ngữ liên quan đến ý: Sử dụng nhiên liệu cần an toàn, tiết kiệm và hạn chế gây ô nhiễm.",
    "options": null,
    "correctAnswer": "nguyên liệu",
    "answerText": "nguyên liệu",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nguyên liệu' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 349,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q029",
    "lessonId": 9,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn', hãy nêu một thuật ngữ liên quan đến ý: Nguyên liệu là vật chất ban đầu dùng để sản xuất ra sản phẩm.",
    "options": null,
    "correctAnswer": "cháy nổ",
    "answerText": "cháy nổ",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'cháy nổ' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 350,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q030",
    "lessonId": 9,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn', hãy nêu một thuật ngữ liên quan đến ý: Nguyên liệu là vật chất ban đầu dùng để sản xuất ra sản phẩm.",
    "options": null,
    "correctAnswer": "khí gas",
    "answerText": "khí gas",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'khí gas' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 351,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q031",
    "lessonId": 9,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn', hãy nêu một thuật ngữ liên quan đến ý: Nguyên liệu là vật chất ban đầu dùng để sản xuất ra sản phẩm.",
    "options": null,
    "correctAnswer": "cháy nổ",
    "answerText": "cháy nổ",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'cháy nổ' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 352,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q032",
    "lessonId": 9,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn', hãy nêu một thuật ngữ liên quan đến ý: Nhiên liệu là chất khi cháy hoặc biến đổi có thể cung cấp năng lượng.",
    "options": null,
    "correctAnswer": "nguyên liệu",
    "answerText": "nguyên liệu",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nguyên liệu' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 353,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q033",
    "lessonId": 9,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn', hãy nêu một thuật ngữ liên quan đến ý: Sử dụng nhiên liệu cần an toàn, tiết kiệm và hạn chế gây ô nhiễm.",
    "options": null,
    "correctAnswer": "cháy nổ",
    "answerText": "cháy nổ",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'cháy nổ' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 354,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q034",
    "lessonId": 9,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên liệu, nhiên liệu và sử dụng an toàn', hãy nêu một thuật ngữ liên quan đến ý: Sử dụng nhiên liệu cần an toàn, tiết kiệm và hạn chế gây ô nhiễm.",
    "options": null,
    "correctAnswer": "khí gas",
    "answerText": "khí gas",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'khí gas' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 355,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q035",
    "lessonId": 9,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Nguyên liệu, nhiên liệu và sử dụng an toàn', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Nhầm nguyên liệu với nhiên liệu."
      },
      {
        "key": "C",
        "text": "Nhiên liệu thường gặp: than, xăng, dầu, khí gas, củi."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nhiên liệu thường gặp: than, xăng, dầu, khí gas, củi.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 356,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q036",
    "lessonId": 9,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Quặng sắt là nguyên liệu sản xuất thép.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Nhầm nguyên liệu với nhiên liệu."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 357,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q037",
    "lessonId": 9,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Xăng là nhiên liệu cho một số phương tiện.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Nhầm nguyên liệu với nhiên liệu."
      },
      {
        "key": "C",
        "text": "Nhiên liệu thường gặp: than, xăng, dầu, khí gas, củi."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nhiên liệu thường gặp: than, xăng, dầu, khí gas, củi.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 358,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q038",
    "lessonId": 9,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Xăng là nhiên liệu cho một số phương tiện.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Nhầm nguyên liệu với nhiên liệu."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 359,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q039",
    "lessonId": 9,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Nguyên liệu, nhiên liệu và sử dụng an toàn', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Cho rằng nhiên liệu chỉ là xăng dầu."
      },
      {
        "key": "B",
        "text": "Nhiên liệu thường gặp: than, xăng, dầu, khí gas, củi."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nhiên liệu thường gặp: than, xăng, dầu, khí gas, củi.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 360,
    "sourceId": "sci6-b2-l09-nguyen-lieu-nhien-lieu-va-su-dung-an-toan-q040",
    "lessonId": 9,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Xăng là nhiên liệu cho một số phương tiện.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Bỏ qua nguy cơ cháy nổ."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 361,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q001",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Lương thực, thực phẩm và dinh dưỡng'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Phân biệt lương thực và thực phẩm."
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Phân biệt lương thực và thực phẩm.",
    "explanationSimple": "Bài này hướng tới: Phân biệt lương thực và thực phẩm.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 362,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q002",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Lương thực, thực phẩm và dinh dưỡng'?",
    "options": [
      {
        "key": "A",
        "text": "Nhận biết nhóm chất dinh dưỡng."
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Học thuộc tất cả số liệu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nhận biết nhóm chất dinh dưỡng.",
    "explanationSimple": "Bài này hướng tới: Nhận biết nhóm chất dinh dưỡng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 363,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q003",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Lương thực, thực phẩm và dinh dưỡng'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Chọn bữa ăn cân đối."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Chọn bữa ăn cân đối.",
    "explanationSimple": "Bài này hướng tới: Chọn bữa ăn cân đối.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 364,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q004",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lương thực, thực phẩm và dinh dưỡng'?",
    "options": [
      {
        "key": "A",
        "text": "Cần chọn, bảo quản và chế biến thực phẩm an toàn."
      },
      {
        "key": "B",
        "text": "Nhầm lương thực với tất cả thực phẩm."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Ăn lệch một nhóm chất."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cần chọn, bảo quản và chế biến thực phẩm an toàn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 365,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q005",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lương thực, thực phẩm và dinh dưỡng'?",
    "options": [
      {
        "key": "A",
        "text": "Cần chọn, bảo quản và chế biến thực phẩm an toàn."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Dùng thực phẩm mốc/hết hạn."
      },
      {
        "key": "D",
        "text": "Nhầm lương thực với tất cả thực phẩm."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cần chọn, bảo quản và chế biến thực phẩm an toàn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 366,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q006",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lương thực, thực phẩm và dinh dưỡng'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Dùng thực phẩm mốc/hết hạn."
      },
      {
        "key": "C",
        "text": "Lương thực thường cung cấp tinh bột chính như gạo, ngô, khoai, mì."
      },
      {
        "key": "D",
        "text": "Ăn lệch một nhóm chất."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Lương thực thường cung cấp tinh bột chính như gạo, ngô, khoai, mì.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 367,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q007",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lương thực, thực phẩm và dinh dưỡng'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Nhầm lương thực với tất cả thực phẩm."
      },
      {
        "key": "C",
        "text": "Ăn lệch một nhóm chất."
      },
      {
        "key": "D",
        "text": "Lương thực thường cung cấp tinh bột chính như gạo, ngô, khoai, mì."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Lương thực thường cung cấp tinh bột chính như gạo, ngô, khoai, mì.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 368,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q008",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lương thực, thực phẩm và dinh dưỡng'?",
    "options": [
      {
        "key": "A",
        "text": "Cần chọn, bảo quản và chế biến thực phẩm an toàn."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Ăn lệch một nhóm chất."
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cần chọn, bảo quản và chế biến thực phẩm an toàn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 369,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q009",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lương thực, thực phẩm và dinh dưỡng'?",
    "options": [
      {
        "key": "A",
        "text": "Ăn lệch một nhóm chất."
      },
      {
        "key": "B",
        "text": "Cần chọn, bảo quản và chế biến thực phẩm an toàn."
      },
      {
        "key": "C",
        "text": "Dùng thực phẩm mốc/hết hạn."
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Cần chọn, bảo quản và chế biến thực phẩm an toàn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 370,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q010",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lương thực, thực phẩm và dinh dưỡng'?",
    "options": [
      {
        "key": "A",
        "text": "Thực phẩm cung cấp chất dinh dưỡng cho cơ thể."
      },
      {
        "key": "B",
        "text": "Dùng thực phẩm mốc/hết hạn."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Thực phẩm cung cấp chất dinh dưỡng cho cơ thể.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 371,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q011",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'staple food'?",
    "options": [
      {
        "key": "A",
        "text": "nguyên sinh vật"
      },
      {
        "key": "B",
        "text": "lương thực"
      },
      {
        "key": "C",
        "text": "mô"
      },
      {
        "key": "D",
        "text": "phương thẳng đứng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "lương thực",
    "explanationSimple": "'lương thực' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 372,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q012",
    "lessonId": 10,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'food' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "thực phẩm",
    "answerText": "thực phẩm",
    "explanationSimple": "'food' tương ứng với 'thực phẩm' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 373,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q013",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'nutrition'?",
    "options": [
      {
        "key": "A",
        "text": "pha Mặt Trăng"
      },
      {
        "key": "B",
        "text": "dinh dưỡng"
      },
      {
        "key": "C",
        "text": "trọng lượng"
      },
      {
        "key": "D",
        "text": "đơn vị"
      }
    ],
    "correctAnswer": "B",
    "answerText": "dinh dưỡng",
    "explanationSimple": "'dinh dưỡng' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 374,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q014",
    "lessonId": 10,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'protein' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "chất đạm",
    "answerText": "chất đạm",
    "explanationSimple": "'protein' tương ứng với 'chất đạm' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 375,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q015",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'vitamin'?",
    "options": [
      {
        "key": "A",
        "text": "kính hiển vi"
      },
      {
        "key": "B",
        "text": "thực hành"
      },
      {
        "key": "C",
        "text": "thế năng"
      },
      {
        "key": "D",
        "text": "vitamin"
      }
    ],
    "correctAnswer": "D",
    "answerText": "vitamin",
    "explanationSimple": "'vitamin' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 376,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q016",
    "lessonId": 10,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Lương thực, thực phẩm và dinh dưỡng'.",
    "options": null,
    "correctAnswer": "vitamin",
    "answerText": "vitamin",
    "explanationSimple": "Một từ khóa đúng là 'vitamin'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 377,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q017",
    "lessonId": 10,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Lương thực, thực phẩm và dinh dưỡng'.",
    "options": null,
    "correctAnswer": "chất đạm",
    "answerText": "chất đạm",
    "explanationSimple": "Một từ khóa đúng là 'chất đạm'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 378,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q018",
    "lessonId": 10,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Lương thực, thực phẩm và dinh dưỡng'.",
    "options": null,
    "correctAnswer": "dinh dưỡng",
    "answerText": "dinh dưỡng",
    "explanationSimple": "Một từ khóa đúng là 'dinh dưỡng'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 379,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q019",
    "lessonId": 10,
    "questionType": "true_false",
    "questionText": "Lương thực thường cung cấp tinh bột chính như gạo, ngô, khoai, mì.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 380,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q020",
    "lessonId": 10,
    "questionType": "true_false",
    "questionText": "Thực phẩm cung cấp chất dinh dưỡng cho cơ thể.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 381,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q021",
    "lessonId": 10,
    "questionType": "true_false",
    "questionText": "Bữa ăn hợp lý cần đa dạng nhóm chất: bột đường, đạm, béo, vitamin, khoáng chất và nước.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 382,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q022",
    "lessonId": 10,
    "questionType": "true_false",
    "questionText": "Cần chọn, bảo quản và chế biến thực phẩm an toàn.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 383,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q023",
    "lessonId": 10,
    "questionType": "true_false",
    "questionText": "Ăn lệch một nhóm chất.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 384,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q024",
    "lessonId": 10,
    "questionType": "true_false",
    "questionText": "Dùng thực phẩm mốc/hết hạn.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 385,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q025",
    "lessonId": 10,
    "questionType": "true_false",
    "questionText": "Nhầm lương thực với tất cả thực phẩm.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 386,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q026",
    "lessonId": 10,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lương thực, thực phẩm và dinh dưỡng', hãy nêu một thuật ngữ liên quan đến ý: Bữa ăn hợp lý cần đa dạng nhóm chất: bột đường, đạm, béo, vitamin, khoáng chất và nước.",
    "options": null,
    "correctAnswer": "lương thực",
    "answerText": "lương thực",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'lương thực' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 387,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q027",
    "lessonId": 10,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lương thực, thực phẩm và dinh dưỡng', hãy nêu một thuật ngữ liên quan đến ý: Cần chọn, bảo quản và chế biến thực phẩm an toàn.",
    "options": null,
    "correctAnswer": "vitamin",
    "answerText": "vitamin",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vitamin' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 388,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q028",
    "lessonId": 10,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lương thực, thực phẩm và dinh dưỡng', hãy nêu một thuật ngữ liên quan đến ý: Cần chọn, bảo quản và chế biến thực phẩm an toàn.",
    "options": null,
    "correctAnswer": "thực phẩm",
    "answerText": "thực phẩm",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thực phẩm' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 389,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q029",
    "lessonId": 10,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lương thực, thực phẩm và dinh dưỡng', hãy nêu một thuật ngữ liên quan đến ý: Lương thực thường cung cấp tinh bột chính như gạo, ngô, khoai, mì.",
    "options": null,
    "correctAnswer": "thực phẩm",
    "answerText": "thực phẩm",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thực phẩm' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 390,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q030",
    "lessonId": 10,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lương thực, thực phẩm và dinh dưỡng', hãy nêu một thuật ngữ liên quan đến ý: Thực phẩm cung cấp chất dinh dưỡng cho cơ thể.",
    "options": null,
    "correctAnswer": "dinh dưỡng",
    "answerText": "dinh dưỡng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'dinh dưỡng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 391,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q031",
    "lessonId": 10,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lương thực, thực phẩm và dinh dưỡng', hãy nêu một thuật ngữ liên quan đến ý: Bữa ăn hợp lý cần đa dạng nhóm chất: bột đường, đạm, béo, vitamin, khoáng chất và nước.",
    "options": null,
    "correctAnswer": "vitamin",
    "answerText": "vitamin",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vitamin' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 392,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q032",
    "lessonId": 10,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lương thực, thực phẩm và dinh dưỡng', hãy nêu một thuật ngữ liên quan đến ý: Lương thực thường cung cấp tinh bột chính như gạo, ngô, khoai, mì.",
    "options": null,
    "correctAnswer": "vitamin",
    "answerText": "vitamin",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vitamin' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 393,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q033",
    "lessonId": 10,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lương thực, thực phẩm và dinh dưỡng', hãy nêu một thuật ngữ liên quan đến ý: Bữa ăn hợp lý cần đa dạng nhóm chất: bột đường, đạm, béo, vitamin, khoáng chất và nước.",
    "options": null,
    "correctAnswer": "dinh dưỡng",
    "answerText": "dinh dưỡng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'dinh dưỡng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 394,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q034",
    "lessonId": 10,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lương thực, thực phẩm và dinh dưỡng', hãy nêu một thuật ngữ liên quan đến ý: Lương thực thường cung cấp tinh bột chính như gạo, ngô, khoai, mì.",
    "options": null,
    "correctAnswer": "chất đạm",
    "answerText": "chất đạm",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'chất đạm' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 395,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q035",
    "lessonId": 10,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Lương thực, thực phẩm và dinh dưỡng', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Ăn lệch một nhóm chất."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Thực phẩm cung cấp chất dinh dưỡng cho cơ thể."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Thực phẩm cung cấp chất dinh dưỡng cho cơ thể.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 396,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q036",
    "lessonId": 10,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Cơm cung cấp nhiều tinh bột.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm lương thực với tất cả thực phẩm."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 397,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q037",
    "lessonId": 10,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Cơm cung cấp nhiều tinh bột.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Thực phẩm cung cấp chất dinh dưỡng cho cơ thể."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Dùng thực phẩm mốc/hết hạn."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Thực phẩm cung cấp chất dinh dưỡng cho cơ thể.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 398,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q038",
    "lessonId": 10,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Rau quả cung cấp vitamin và chất xơ.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Dùng thực phẩm mốc/hết hạn."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 399,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q039",
    "lessonId": 10,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Rau quả cung cấp vitamin và chất xơ.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Nhầm lương thực với tất cả thực phẩm."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Thực phẩm cung cấp chất dinh dưỡng cho cơ thể."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Thực phẩm cung cấp chất dinh dưỡng cho cơ thể.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 400,
    "sourceId": "sci6-b2-l10-luong-thuc-thuc-pham-va-dinh-duong-q040",
    "lessonId": 10,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Rau quả cung cấp vitamin và chất xơ.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Ăn lệch một nhóm chất."
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 401,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q001",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Hỗn hợp và dung dịch'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Nhận biết hỗn hợp."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nhận biết hỗn hợp.",
    "explanationSimple": "Bài này hướng tới: Nhận biết hỗn hợp.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 402,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q002",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Hỗn hợp và dung dịch'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "B",
        "text": "Phân biệt đồng nhất/không đồng nhất."
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Phân biệt đồng nhất/không đồng nhất.",
    "explanationSimple": "Bài này hướng tới: Phân biệt đồng nhất/không đồng nhất.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 403,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q003",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Hỗn hợp và dung dịch'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Hiểu dung dịch, chất tan, dung môi."
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Hiểu dung dịch, chất tan, dung môi.",
    "explanationSimple": "Bài này hướng tới: Hiểu dung dịch, chất tan, dung môi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 404,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q004",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Hỗn hợp và dung dịch'?",
    "options": [
      {
        "key": "A",
        "text": "Hỗn hợp đồng nhất có thành phần giống nhau ở mọi vị trí; hỗn hợp không đồng nhất có thể phân biệt thành phần."
      },
      {
        "key": "B",
        "text": "Không phân biệt chất tan và dung môi."
      },
      {
        "key": "C",
        "text": "Cho rằng mọi hỗn hợp đều đồng nhất."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Hỗn hợp đồng nhất có thành phần giống nhau ở mọi vị trí; hỗn hợp không đồng nhất có thể phân biệt thành phần.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 405,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q005",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Hỗn hợp và dung dịch'?",
    "options": [
      {
        "key": "A",
        "text": "Không phải hỗn hợp nào cũng là dung dịch."
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Cho rằng mọi hỗn hợp đều đồng nhất."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Không phải hỗn hợp nào cũng là dung dịch.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 406,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q006",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Hỗn hợp và dung dịch'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm dung dịch với chất tinh khiết."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Hỗn hợp gồm hai hay nhiều chất trộn lẫn với nhau."
      },
      {
        "key": "D",
        "text": "Cho rằng mọi hỗn hợp đều đồng nhất."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Hỗn hợp gồm hai hay nhiều chất trộn lẫn với nhau.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 407,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q007",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Hỗn hợp và dung dịch'?",
    "options": [
      {
        "key": "A",
        "text": "Hỗn hợp đồng nhất có thành phần giống nhau ở mọi vị trí; hỗn hợp không đồng nhất có thể phân biệt thành phần."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Không phân biệt chất tan và dung môi."
      },
      {
        "key": "D",
        "text": "Nhầm dung dịch với chất tinh khiết."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Hỗn hợp đồng nhất có thành phần giống nhau ở mọi vị trí; hỗn hợp không đồng nhất có thể phân biệt thành phần.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 408,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q008",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Hỗn hợp và dung dịch'?",
    "options": [
      {
        "key": "A",
        "text": "Dung dịch là hỗn hợp đồng nhất của chất tan và dung môi."
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Cho rằng mọi hỗn hợp đều đồng nhất."
      },
      {
        "key": "D",
        "text": "Nhầm dung dịch với chất tinh khiết."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Dung dịch là hỗn hợp đồng nhất của chất tan và dung môi.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 409,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q009",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Hỗn hợp và dung dịch'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Cho rằng mọi hỗn hợp đều đồng nhất."
      },
      {
        "key": "C",
        "text": "Không phân biệt chất tan và dung môi."
      },
      {
        "key": "D",
        "text": "Hỗn hợp đồng nhất có thành phần giống nhau ở mọi vị trí; hỗn hợp không đồng nhất có thể phân biệt thành phần."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Hỗn hợp đồng nhất có thành phần giống nhau ở mọi vị trí; hỗn hợp không đồng nhất có thể phân biệt thành phần.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 410,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q010",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Hỗn hợp và dung dịch'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm dung dịch với chất tinh khiết."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Không phân biệt chất tan và dung môi."
      },
      {
        "key": "D",
        "text": "Không phải hỗn hợp nào cũng là dung dịch."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Không phải hỗn hợp nào cũng là dung dịch.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 411,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q011",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'mixture'?",
    "options": [
      {
        "key": "A",
        "text": "hỗn hợp"
      },
      {
        "key": "B",
        "text": "trao đổi chất"
      },
      {
        "key": "C",
        "text": "kéo"
      },
      {
        "key": "D",
        "text": "nam châm"
      }
    ],
    "correctAnswer": "A",
    "answerText": "hỗn hợp",
    "explanationSimple": "'hỗn hợp' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 412,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q012",
    "lessonId": 11,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'solution' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "dung dịch",
    "answerText": "dung dịch",
    "explanationSimple": "'solution' tương ứng với 'dung dịch' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 413,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q013",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'solute'?",
    "options": [
      {
        "key": "A",
        "text": "thiên hà"
      },
      {
        "key": "B",
        "text": "vitamin"
      },
      {
        "key": "C",
        "text": "thể lỏng"
      },
      {
        "key": "D",
        "text": "chất tan"
      }
    ],
    "correctAnswer": "D",
    "answerText": "chất tan",
    "explanationSimple": "'chất tan' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 414,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q014",
    "lessonId": 11,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'solvent' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "dung môi",
    "answerText": "dung môi",
    "explanationSimple": "'solvent' tương ứng với 'dung môi' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 415,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q015",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'homogeneous'?",
    "options": [
      {
        "key": "A",
        "text": "trọng lực"
      },
      {
        "key": "B",
        "text": "đồng nhất"
      },
      {
        "key": "C",
        "text": "lắng gạn"
      },
      {
        "key": "D",
        "text": "vệ tinh"
      }
    ],
    "correctAnswer": "B",
    "answerText": "đồng nhất",
    "explanationSimple": "'đồng nhất' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 416,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q016",
    "lessonId": 11,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Hỗn hợp và dung dịch'.",
    "options": null,
    "correctAnswer": "hỗn hợp",
    "answerText": "hỗn hợp",
    "explanationSimple": "Một từ khóa đúng là 'hỗn hợp'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 417,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q017",
    "lessonId": 11,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Hỗn hợp và dung dịch'.",
    "options": null,
    "correctAnswer": "dung môi",
    "answerText": "dung môi",
    "explanationSimple": "Một từ khóa đúng là 'dung môi'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 418,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q018",
    "lessonId": 11,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Hỗn hợp và dung dịch'.",
    "options": null,
    "correctAnswer": "hỗn hợp",
    "answerText": "hỗn hợp",
    "explanationSimple": "Một từ khóa đúng là 'hỗn hợp'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 419,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q019",
    "lessonId": 11,
    "questionType": "true_false",
    "questionText": "Hỗn hợp gồm hai hay nhiều chất trộn lẫn với nhau.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 420,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q020",
    "lessonId": 11,
    "questionType": "true_false",
    "questionText": "Hỗn hợp đồng nhất có thành phần giống nhau ở mọi vị trí; hỗn hợp không đồng nhất có thể phân biệt thành phần.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 421,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q021",
    "lessonId": 11,
    "questionType": "true_false",
    "questionText": "Dung dịch là hỗn hợp đồng nhất của chất tan và dung môi.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 422,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q022",
    "lessonId": 11,
    "questionType": "true_false",
    "questionText": "Không phải hỗn hợp nào cũng là dung dịch.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 423,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q023",
    "lessonId": 11,
    "questionType": "true_false",
    "questionText": "Nhầm dung dịch với chất tinh khiết.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 424,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q024",
    "lessonId": 11,
    "questionType": "true_false",
    "questionText": "Cho rằng mọi hỗn hợp đều đồng nhất.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 425,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q025",
    "lessonId": 11,
    "questionType": "true_false",
    "questionText": "Không phân biệt chất tan và dung môi.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 426,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q026",
    "lessonId": 11,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hỗn hợp và dung dịch', hãy nêu một thuật ngữ liên quan đến ý: Dung dịch là hỗn hợp đồng nhất của chất tan và dung môi.",
    "options": null,
    "correctAnswer": "hỗn hợp",
    "answerText": "hỗn hợp",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'hỗn hợp' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 427,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q027",
    "lessonId": 11,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hỗn hợp và dung dịch', hãy nêu một thuật ngữ liên quan đến ý: Dung dịch là hỗn hợp đồng nhất của chất tan và dung môi.",
    "options": null,
    "correctAnswer": "dung dịch",
    "answerText": "dung dịch",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'dung dịch' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 428,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q028",
    "lessonId": 11,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hỗn hợp và dung dịch', hãy nêu một thuật ngữ liên quan đến ý: Dung dịch là hỗn hợp đồng nhất của chất tan và dung môi.",
    "options": null,
    "correctAnswer": "dung môi",
    "answerText": "dung môi",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'dung môi' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 429,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q029",
    "lessonId": 11,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hỗn hợp và dung dịch', hãy nêu một thuật ngữ liên quan đến ý: Không phải hỗn hợp nào cũng là dung dịch.",
    "options": null,
    "correctAnswer": "chất tan",
    "answerText": "chất tan",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'chất tan' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 430,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q030",
    "lessonId": 11,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hỗn hợp và dung dịch', hãy nêu một thuật ngữ liên quan đến ý: Hỗn hợp đồng nhất có thành phần giống nhau ở mọi vị trí; hỗn hợp không đồng nhất có thể phân biệt thành phần.",
    "options": null,
    "correctAnswer": "dung môi",
    "answerText": "dung môi",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'dung môi' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 431,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q031",
    "lessonId": 11,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hỗn hợp và dung dịch', hãy nêu một thuật ngữ liên quan đến ý: Không phải hỗn hợp nào cũng là dung dịch.",
    "options": null,
    "correctAnswer": "chất tan",
    "answerText": "chất tan",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'chất tan' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 432,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q032",
    "lessonId": 11,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hỗn hợp và dung dịch', hãy nêu một thuật ngữ liên quan đến ý: Dung dịch là hỗn hợp đồng nhất của chất tan và dung môi.",
    "options": null,
    "correctAnswer": "chất tan",
    "answerText": "chất tan",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'chất tan' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 433,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q033",
    "lessonId": 11,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hỗn hợp và dung dịch', hãy nêu một thuật ngữ liên quan đến ý: Hỗn hợp đồng nhất có thành phần giống nhau ở mọi vị trí; hỗn hợp không đồng nhất có thể phân biệt thành phần.",
    "options": null,
    "correctAnswer": "đồng nhất",
    "answerText": "đồng nhất",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'đồng nhất' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 434,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q034",
    "lessonId": 11,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hỗn hợp và dung dịch', hãy nêu một thuật ngữ liên quan đến ý: Không phải hỗn hợp nào cũng là dung dịch.",
    "options": null,
    "correctAnswer": "đồng nhất",
    "answerText": "đồng nhất",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'đồng nhất' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 435,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q035",
    "lessonId": 11,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Cát trộn sỏi là hỗn hợp không đồng nhất.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Dung dịch là hỗn hợp đồng nhất của chất tan và dung môi."
      },
      {
        "key": "D",
        "text": "Nhầm dung dịch với chất tinh khiết."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Dung dịch là hỗn hợp đồng nhất của chất tan và dung môi.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 436,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q036",
    "lessonId": 11,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Cát trộn sỏi là hỗn hợp không đồng nhất.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Không phân biệt chất tan và dung môi."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 437,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q037",
    "lessonId": 11,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Nước muối là dung dịch.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm dung dịch với chất tinh khiết."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Hỗn hợp đồng nhất có thành phần giống nhau ở mọi vị trí; hỗn hợp không đồng nhất có thể phân biệt thành phần."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Hỗn hợp đồng nhất có thành phần giống nhau ở mọi vị trí; hỗn hợp không đồng nhất có thể phân biệt thành phần.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 438,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q038",
    "lessonId": 11,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Hỗn hợp và dung dịch', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Không phân biệt chất tan và dung môi."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 439,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q039",
    "lessonId": 11,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Nước muối là dung dịch.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Hỗn hợp đồng nhất có thành phần giống nhau ở mọi vị trí; hỗn hợp không đồng nhất có thể phân biệt thành phần."
      },
      {
        "key": "D",
        "text": "Không phân biệt chất tan và dung môi."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Hỗn hợp đồng nhất có thành phần giống nhau ở mọi vị trí; hỗn hợp không đồng nhất có thể phân biệt thành phần.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 440,
    "sourceId": "sci6-b2-l11-hon-hop-va-dung-dich-q040",
    "lessonId": 11,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Cát trộn sỏi là hỗn hợp không đồng nhất.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Nhầm dung dịch với chất tinh khiết."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 441,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q001",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Tách chất ra khỏi hỗn hợp'?",
    "options": [
      {
        "key": "A",
        "text": "Chọn phương pháp tách phù hợp."
      },
      {
        "key": "B",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "C",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Chọn phương pháp tách phù hợp.",
    "explanationSimple": "Bài này hướng tới: Chọn phương pháp tách phù hợp.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 442,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q002",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Tách chất ra khỏi hỗn hợp'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần quan sát"
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Giải thích vì sao dùng phương pháp đó."
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Giải thích vì sao dùng phương pháp đó.",
    "explanationSimple": "Bài này hướng tới: Giải thích vì sao dùng phương pháp đó.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 443,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q003",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Tách chất ra khỏi hỗn hợp'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "B",
        "text": "Vận dụng vào tình huống đời sống."
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Vận dụng vào tình huống đời sống.",
    "explanationSimple": "Bài này hướng tới: Vận dụng vào tình huống đời sống.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 444,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q004",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tách chất ra khỏi hỗn hợp'?",
    "options": [
      {
        "key": "A",
        "text": "Dùng một phương pháp cho mọi hỗn hợp."
      },
      {
        "key": "B",
        "text": "Không xác định tính chất khác nhau."
      },
      {
        "key": "C",
        "text": "Nhầm lọc với cô cạn."
      },
      {
        "key": "D",
        "text": "Có thể phối hợp nhiều phương pháp để tách hỗn hợp phức tạp."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Có thể phối hợp nhiều phương pháp để tách hỗn hợp phức tạp.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 445,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q005",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tách chất ra khỏi hỗn hợp'?",
    "options": [
      {
        "key": "A",
        "text": "Tách chất dựa trên sự khác nhau về tính chất của các chất trong hỗn hợp."
      },
      {
        "key": "B",
        "text": "Không xác định tính chất khác nhau."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Dùng một phương pháp cho mọi hỗn hợp."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tách chất dựa trên sự khác nhau về tính chất của các chất trong hỗn hợp.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 446,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q006",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tách chất ra khỏi hỗn hợp'?",
    "options": [
      {
        "key": "A",
        "text": "Chọn phương pháp phụ thuộc vào kích thước hạt, tính tan, từ tính, nhiệt độ sôi hoặc khối lượng riêng."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Không xác định tính chất khác nhau."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Chọn phương pháp phụ thuộc vào kích thước hạt, tính tan, từ tính, nhiệt độ sôi hoặc khối lượng riêng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 447,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q007",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tách chất ra khỏi hỗn hợp'?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "B",
        "text": "Chọn phương pháp phụ thuộc vào kích thước hạt, tính tan, từ tính, nhiệt độ sôi hoặc khối lượng riêng."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Dùng một phương pháp cho mọi hỗn hợp."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chọn phương pháp phụ thuộc vào kích thước hạt, tính tan, từ tính, nhiệt độ sôi hoặc khối lượng riêng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 448,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q008",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tách chất ra khỏi hỗn hợp'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Nhầm lọc với cô cạn."
      },
      {
        "key": "C",
        "text": "Dùng một phương pháp cho mọi hỗn hợp."
      },
      {
        "key": "D",
        "text": "Tách chất dựa trên sự khác nhau về tính chất của các chất trong hỗn hợp."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tách chất dựa trên sự khác nhau về tính chất của các chất trong hỗn hợp.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 449,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q009",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tách chất ra khỏi hỗn hợp'?",
    "options": [
      {
        "key": "A",
        "text": "Một số phương pháp: lọc, lắng gạn, cô cạn, chiết, dùng nam châm."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Dùng một phương pháp cho mọi hỗn hợp."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Một số phương pháp: lọc, lắng gạn, cô cạn, chiết, dùng nam châm.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 450,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q010",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tách chất ra khỏi hỗn hợp'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Tách chất dựa trên sự khác nhau về tính chất của các chất trong hỗn hợp."
      },
      {
        "key": "C",
        "text": "Không xác định tính chất khác nhau."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tách chất dựa trên sự khác nhau về tính chất của các chất trong hỗn hợp.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 451,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q011",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'filtration'?",
    "options": [
      {
        "key": "A",
        "text": "thực phẩm"
      },
      {
        "key": "B",
        "text": "lọc"
      },
      {
        "key": "C",
        "text": "Khoa học tự nhiên"
      },
      {
        "key": "D",
        "text": "đơn bào"
      }
    ],
    "correctAnswer": "B",
    "answerText": "lọc",
    "explanationSimple": "'lọc' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 452,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q012",
    "lessonId": 12,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'decantation' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "lắng gạn",
    "answerText": "lắng gạn",
    "explanationSimple": "'decantation' tương ứng với 'lắng gạn' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 453,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q013",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'evaporation'?",
    "options": [
      {
        "key": "A",
        "text": "Mặt Trăng"
      },
      {
        "key": "B",
        "text": "cô cạn"
      },
      {
        "key": "C",
        "text": "vệ sinh"
      },
      {
        "key": "D",
        "text": "thể lỏng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "cô cạn",
    "explanationSimple": "'cô cạn' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 454,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q014",
    "lessonId": 12,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'separation funnel' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "chiết",
    "answerText": "chiết",
    "explanationSimple": "'separation funnel' tương ứng với 'chiết' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 455,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q015",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'magnet'?",
    "options": [
      {
        "key": "A",
        "text": "chất tan"
      },
      {
        "key": "B",
        "text": "thể rắn"
      },
      {
        "key": "C",
        "text": "sinh sản"
      },
      {
        "key": "D",
        "text": "nam châm"
      }
    ],
    "correctAnswer": "D",
    "answerText": "nam châm",
    "explanationSimple": "'nam châm' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 456,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q016",
    "lessonId": 12,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Tách chất ra khỏi hỗn hợp'.",
    "options": null,
    "correctAnswer": "lọc",
    "answerText": "lọc",
    "explanationSimple": "Một từ khóa đúng là 'lọc'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 457,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q017",
    "lessonId": 12,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Tách chất ra khỏi hỗn hợp'.",
    "options": null,
    "correctAnswer": "cô cạn",
    "answerText": "cô cạn",
    "explanationSimple": "Một từ khóa đúng là 'cô cạn'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 458,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q018",
    "lessonId": 12,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Tách chất ra khỏi hỗn hợp'.",
    "options": null,
    "correctAnswer": "nam châm",
    "answerText": "nam châm",
    "explanationSimple": "Một từ khóa đúng là 'nam châm'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 459,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q019",
    "lessonId": 12,
    "questionType": "true_false",
    "questionText": "Tách chất dựa trên sự khác nhau về tính chất của các chất trong hỗn hợp.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 460,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q020",
    "lessonId": 12,
    "questionType": "true_false",
    "questionText": "Một số phương pháp: lọc, lắng gạn, cô cạn, chiết, dùng nam châm.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 461,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q021",
    "lessonId": 12,
    "questionType": "true_false",
    "questionText": "Chọn phương pháp phụ thuộc vào kích thước hạt, tính tan, từ tính, nhiệt độ sôi hoặc khối lượng riêng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 462,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q022",
    "lessonId": 12,
    "questionType": "true_false",
    "questionText": "Có thể phối hợp nhiều phương pháp để tách hỗn hợp phức tạp.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 463,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q023",
    "lessonId": 12,
    "questionType": "true_false",
    "questionText": "Dùng một phương pháp cho mọi hỗn hợp.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 464,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q024",
    "lessonId": 12,
    "questionType": "true_false",
    "questionText": "Không xác định tính chất khác nhau.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 465,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q025",
    "lessonId": 12,
    "questionType": "true_false",
    "questionText": "Nhầm lọc với cô cạn.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 466,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q026",
    "lessonId": 12,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tách chất ra khỏi hỗn hợp', hãy nêu một thuật ngữ liên quan đến ý: Có thể phối hợp nhiều phương pháp để tách hỗn hợp phức tạp.",
    "options": null,
    "correctAnswer": "chiết",
    "answerText": "chiết",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'chiết' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 467,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q027",
    "lessonId": 12,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tách chất ra khỏi hỗn hợp', hãy nêu một thuật ngữ liên quan đến ý: Tách chất dựa trên sự khác nhau về tính chất của các chất trong hỗn hợp.",
    "options": null,
    "correctAnswer": "chiết",
    "answerText": "chiết",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'chiết' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 468,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q028",
    "lessonId": 12,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tách chất ra khỏi hỗn hợp', hãy nêu một thuật ngữ liên quan đến ý: Có thể phối hợp nhiều phương pháp để tách hỗn hợp phức tạp.",
    "options": null,
    "correctAnswer": "lọc",
    "answerText": "lọc",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'lọc' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 469,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q029",
    "lessonId": 12,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tách chất ra khỏi hỗn hợp', hãy nêu một thuật ngữ liên quan đến ý: Một số phương pháp: lọc, lắng gạn, cô cạn, chiết, dùng nam châm.",
    "options": null,
    "correctAnswer": "cô cạn",
    "answerText": "cô cạn",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'cô cạn' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 470,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q030",
    "lessonId": 12,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tách chất ra khỏi hỗn hợp', hãy nêu một thuật ngữ liên quan đến ý: Tách chất dựa trên sự khác nhau về tính chất của các chất trong hỗn hợp.",
    "options": null,
    "correctAnswer": "lắng gạn",
    "answerText": "lắng gạn",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'lắng gạn' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 471,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q031",
    "lessonId": 12,
    "questionType": "fill_text",
    "questionText": "Tách cát khỏi nước nên dùng phương pháp nào?",
    "options": null,
    "correctAnswer": "lọc",
    "answerText": "lọc",
    "explanationSimple": "Cát không tan và hạt đủ lớn nên dùng lọc.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 472,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q032",
    "lessonId": 12,
    "questionType": "fill_text",
    "questionText": "Tách muối khỏi nước muối nên dùng phương pháp nào?",
    "options": null,
    "correctAnswer": "cô cạn",
    "answerText": "cô cạn",
    "explanationSimple": "Nước bay hơi, muối còn lại.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 473,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q033",
    "lessonId": 12,
    "questionType": "fill_text",
    "questionText": "Tách vụn sắt khỏi cát nên dùng dụng cụ nào?",
    "options": null,
    "correctAnswer": "nam châm",
    "answerText": "nam châm",
    "explanationSimple": "Sắt bị nam châm hút.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 474,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q034",
    "lessonId": 12,
    "questionType": "fill_text",
    "questionText": "Tách dầu ăn khỏi nước có thể dùng phương pháp nào?",
    "options": null,
    "correctAnswer": "chiết",
    "answerText": "chiết",
    "explanationSimple": "Dầu và nước không trộn đều, có thể tách lớp.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 475,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q035",
    "lessonId": 12,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Tách muối khỏi nước muối bằng cô cạn.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Không xác định tính chất khác nhau."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Có thể phối hợp nhiều phương pháp để tách hỗn hợp phức tạp."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Có thể phối hợp nhiều phương pháp để tách hỗn hợp phức tạp.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 476,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q036",
    "lessonId": 12,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Tách cát khỏi nước bằng lọc.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Nhầm lọc với cô cạn."
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 477,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q037",
    "lessonId": 12,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Tách muối khỏi nước muối bằng cô cạn.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Dùng một phương pháp cho mọi hỗn hợp."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Tách chất dựa trên sự khác nhau về tính chất của các chất trong hỗn hợp."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tách chất dựa trên sự khác nhau về tính chất của các chất trong hỗn hợp.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 478,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q038",
    "lessonId": 12,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Tách cát khỏi nước bằng lọc.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Nhầm lọc với cô cạn."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 479,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q039",
    "lessonId": 12,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Tách chất ra khỏi hỗn hợp', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Tách chất dựa trên sự khác nhau về tính chất của các chất trong hỗn hợp."
      },
      {
        "key": "C",
        "text": "Dùng một phương pháp cho mọi hỗn hợp."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tách chất dựa trên sự khác nhau về tính chất của các chất trong hỗn hợp.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 480,
    "sourceId": "sci6-b2-l12-tach-chat-ra-khoi-hon-hop-q040",
    "lessonId": 12,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Tách muối khỏi nước muối bằng cô cạn.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Nhầm lọc với cô cạn."
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 481,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q001",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Tế bào là đơn vị cơ bản của sự sống'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "B",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Hiểu vai trò của tế bào."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Hiểu vai trò của tế bào.",
    "explanationSimple": "Bài này hướng tới: Hiểu vai trò của tế bào.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 482,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q002",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Tế bào là đơn vị cơ bản của sự sống'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "B",
        "text": "Không cần quan sát"
      },
      {
        "key": "C",
        "text": "Phân biệt cơ thể đơn bào/đa bào ở mức đầu."
      },
      {
        "key": "D",
        "text": "Học thuộc tất cả số liệu"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Phân biệt cơ thể đơn bào/đa bào ở mức đầu.",
    "explanationSimple": "Bài này hướng tới: Phân biệt cơ thể đơn bào/đa bào ở mức đầu.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 483,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q003",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Tế bào là đơn vị cơ bản của sự sống'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Nêu ví dụ tế bào."
      },
      {
        "key": "C",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nêu ví dụ tế bào.",
    "explanationSimple": "Bài này hướng tới: Nêu ví dụ tế bào.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 484,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q004",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tế bào là đơn vị cơ bản của sự sống'?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "B",
        "text": "Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể sống."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể sống.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 485,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q005",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tế bào là đơn vị cơ bản của sự sống'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Tế bào thực hiện các hoạt động sống như trao đổi chất, lớn lên và sinh sản."
      },
      {
        "key": "C",
        "text": "Cho rằng tế bào luôn nhìn thấy bằng mắt thường."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tế bào thực hiện các hoạt động sống như trao đổi chất, lớn lên và sinh sản.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 486,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q006",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tế bào là đơn vị cơ bản của sự sống'?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ tế bào chỉ có ở động vật."
      },
      {
        "key": "B",
        "text": "Nhầm tế bào với mô/cơ quan."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể sống."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể sống.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 487,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q007",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tế bào là đơn vị cơ bản của sự sống'?",
    "options": [
      {
        "key": "A",
        "text": "Tế bào thường rất nhỏ, cần kính hiển vi để quan sát."
      },
      {
        "key": "B",
        "text": "Nghĩ tế bào chỉ có ở động vật."
      },
      {
        "key": "C",
        "text": "Nhầm tế bào với mô/cơ quan."
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tế bào thường rất nhỏ, cần kính hiển vi để quan sát.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 488,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q008",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tế bào là đơn vị cơ bản của sự sống'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Nghĩ tế bào chỉ có ở động vật."
      },
      {
        "key": "D",
        "text": "Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể sống."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể sống.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 489,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q009",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tế bào là đơn vị cơ bản của sự sống'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Nhầm tế bào với mô/cơ quan."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể sống."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể sống.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 490,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q010",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tế bào là đơn vị cơ bản của sự sống'?",
    "options": [
      {
        "key": "A",
        "text": "Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể sống."
      },
      {
        "key": "B",
        "text": "Nghĩ tế bào chỉ có ở động vật."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể sống.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 491,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q011",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'cell'?",
    "options": [
      {
        "key": "A",
        "text": "lắng gạn"
      },
      {
        "key": "B",
        "text": "Ngân Hà"
      },
      {
        "key": "C",
        "text": "tế bào"
      },
      {
        "key": "D",
        "text": "trao đổi chất"
      }
    ],
    "correctAnswer": "C",
    "answerText": "tế bào",
    "explanationSimple": "'tế bào' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 492,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q012",
    "lessonId": 13,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'living organism' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "cơ thể sống",
    "answerText": "cơ thể sống",
    "explanationSimple": "'living organism' tương ứng với 'cơ thể sống' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 493,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q013",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'basic unit'?",
    "options": [
      {
        "key": "A",
        "text": "đơn vị cơ bản"
      },
      {
        "key": "B",
        "text": "sao"
      },
      {
        "key": "C",
        "text": "thay thế"
      },
      {
        "key": "D",
        "text": "lớn lên"
      }
    ],
    "correctAnswer": "A",
    "answerText": "đơn vị cơ bản",
    "explanationSimple": "'đơn vị cơ bản' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 494,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q014",
    "lessonId": 13,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'metabolism' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "trao đổi chất",
    "answerText": "trao đổi chất",
    "explanationSimple": "'metabolism' tương ứng với 'trao đổi chất' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 495,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q015",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'reproduction'?",
    "options": [
      {
        "key": "A",
        "text": "Hệ Mặt Trời"
      },
      {
        "key": "B",
        "text": "sinh sản"
      },
      {
        "key": "C",
        "text": "mô"
      },
      {
        "key": "D",
        "text": "oxygen"
      }
    ],
    "correctAnswer": "B",
    "answerText": "sinh sản",
    "explanationSimple": "'sinh sản' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 496,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q016",
    "lessonId": 13,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Tế bào là đơn vị cơ bản của sự sống'.",
    "options": null,
    "correctAnswer": "trao đổi chất",
    "answerText": "trao đổi chất",
    "explanationSimple": "Một từ khóa đúng là 'trao đổi chất'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 497,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q017",
    "lessonId": 13,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Tế bào là đơn vị cơ bản của sự sống'.",
    "options": null,
    "correctAnswer": "sinh sản",
    "answerText": "sinh sản",
    "explanationSimple": "Một từ khóa đúng là 'sinh sản'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 498,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q018",
    "lessonId": 13,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Tế bào là đơn vị cơ bản của sự sống'.",
    "options": null,
    "correctAnswer": "sinh sản",
    "answerText": "sinh sản",
    "explanationSimple": "Một từ khóa đúng là 'sinh sản'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 499,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q019",
    "lessonId": 13,
    "questionType": "true_false",
    "questionText": "Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể sống.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 500,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q020",
    "lessonId": 13,
    "questionType": "true_false",
    "questionText": "Mọi cơ thể sống đều được cấu tạo từ một hoặc nhiều tế bào.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 501,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q021",
    "lessonId": 13,
    "questionType": "true_false",
    "questionText": "Tế bào thường rất nhỏ, cần kính hiển vi để quan sát.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 502,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q022",
    "lessonId": 13,
    "questionType": "true_false",
    "questionText": "Tế bào thực hiện các hoạt động sống như trao đổi chất, lớn lên và sinh sản.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 503,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q023",
    "lessonId": 13,
    "questionType": "true_false",
    "questionText": "Nghĩ tế bào chỉ có ở động vật.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 504,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q024",
    "lessonId": 13,
    "questionType": "true_false",
    "questionText": "Cho rằng tế bào luôn nhìn thấy bằng mắt thường.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 505,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q025",
    "lessonId": 13,
    "questionType": "true_false",
    "questionText": "Nhầm tế bào với mô/cơ quan.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 506,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q026",
    "lessonId": 13,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tế bào là đơn vị cơ bản của sự sống', hãy nêu một thuật ngữ liên quan đến ý: Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể sống.",
    "options": null,
    "correctAnswer": "cơ thể sống",
    "answerText": "cơ thể sống",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'cơ thể sống' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 507,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q027",
    "lessonId": 13,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tế bào là đơn vị cơ bản của sự sống', hãy nêu một thuật ngữ liên quan đến ý: Tế bào thường rất nhỏ, cần kính hiển vi để quan sát.",
    "options": null,
    "correctAnswer": "tế bào",
    "answerText": "tế bào",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tế bào' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 508,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q028",
    "lessonId": 13,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tế bào là đơn vị cơ bản của sự sống', hãy nêu một thuật ngữ liên quan đến ý: Tế bào thường rất nhỏ, cần kính hiển vi để quan sát.",
    "options": null,
    "correctAnswer": "cơ thể sống",
    "answerText": "cơ thể sống",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'cơ thể sống' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 509,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q029",
    "lessonId": 13,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tế bào là đơn vị cơ bản của sự sống', hãy nêu một thuật ngữ liên quan đến ý: Mọi cơ thể sống đều được cấu tạo từ một hoặc nhiều tế bào.",
    "options": null,
    "correctAnswer": "tế bào",
    "answerText": "tế bào",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tế bào' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 510,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q030",
    "lessonId": 13,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tế bào là đơn vị cơ bản của sự sống', hãy nêu một thuật ngữ liên quan đến ý: Tế bào thực hiện các hoạt động sống như trao đổi chất, lớn lên và sinh sản.",
    "options": null,
    "correctAnswer": "cơ thể sống",
    "answerText": "cơ thể sống",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'cơ thể sống' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 511,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q031",
    "lessonId": 13,
    "questionType": "fill_text",
    "questionText": "Dụng cụ thường dùng để quan sát tế bào là gì?",
    "options": null,
    "correctAnswer": "kính hiển vi",
    "answerText": "kính hiển vi",
    "explanationSimple": "Tế bào thường rất nhỏ nên cần kính hiển vi.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 512,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q032",
    "lessonId": 13,
    "questionType": "fill_text",
    "questionText": "Thành phần điều khiển hoạt động của tế bào thường là gì?",
    "options": null,
    "correctAnswer": "nhân",
    "answerText": "nhân",
    "explanationSimple": "Nhân tế bào điều khiển nhiều hoạt động của tế bào.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 513,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q033",
    "lessonId": 13,
    "questionType": "fill_text",
    "questionText": "Tế bào thực vật có lục lạp giúp thực hiện quá trình gì?",
    "options": null,
    "correctAnswer": "quang hợp",
    "answerText": "quang hợp",
    "explanationSimple": "Lục lạp giúp tế bào thực vật quang hợp.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 514,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q034",
    "lessonId": 13,
    "questionType": "fill_text",
    "questionText": "Cơ thể lớn lên nhờ tế bào tăng kích thước và tăng gì?",
    "options": null,
    "correctAnswer": "số lượng",
    "answerText": "số lượng",
    "explanationSimple": "Cơ thể lớn lên do tế bào lớn lên và phân chia.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 515,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q035",
    "lessonId": 13,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Tế bào là đơn vị cơ bản của sự sống', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Nghĩ tế bào chỉ có ở động vật."
      },
      {
        "key": "C",
        "text": "Tế bào thực hiện các hoạt động sống như trao đổi chất, lớn lên và sinh sản."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tế bào thực hiện các hoạt động sống như trao đổi chất, lớn lên và sinh sản.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 516,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q036",
    "lessonId": 13,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Vi khuẩn là cơ thể đơn bào.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Nhầm tế bào với mô/cơ quan."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 517,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q037",
    "lessonId": 13,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Tế bào là đơn vị cơ bản của sự sống', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Tế bào thực hiện các hoạt động sống như trao đổi chất, lớn lên và sinh sản."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Nhầm tế bào với mô/cơ quan."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tế bào thực hiện các hoạt động sống như trao đổi chất, lớn lên và sinh sản.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 518,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q038",
    "lessonId": 13,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Cơ thể người gồm rất nhiều tế bào.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Nhầm tế bào với mô/cơ quan."
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 519,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q039",
    "lessonId": 13,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Vi khuẩn là cơ thể đơn bào.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Mọi cơ thể sống đều được cấu tạo từ một hoặc nhiều tế bào."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Nhầm tế bào với mô/cơ quan."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Mọi cơ thể sống đều được cấu tạo từ một hoặc nhiều tế bào.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 520,
    "sourceId": "sci6-b2-l13-te-bao-la-don-vi-co-ban-cua-su-song-q040",
    "lessonId": 13,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Cơ thể người gồm rất nhiều tế bào.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Cho rằng tế bào luôn nhìn thấy bằng mắt thường."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 521,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q001",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Cấu tạo tế bào và chức năng'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "B",
        "text": "Kể tên thành phần chính của tế bào."
      },
      {
        "key": "C",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Kể tên thành phần chính của tế bào.",
    "explanationSimple": "Bài này hướng tới: Kể tên thành phần chính của tế bào.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 522,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q002",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Cấu tạo tế bào và chức năng'?",
    "options": [
      {
        "key": "A",
        "text": "Nêu chức năng cơ bản."
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "D",
        "text": "Học thuộc tất cả số liệu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nêu chức năng cơ bản.",
    "explanationSimple": "Bài này hướng tới: Nêu chức năng cơ bản.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 523,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q003",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Cấu tạo tế bào và chức năng'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Không cần quan sát"
      },
      {
        "key": "C",
        "text": "Phân biệt tế bào thực vật và động vật."
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Phân biệt tế bào thực vật và động vật.",
    "explanationSimple": "Bài này hướng tới: Phân biệt tế bào thực vật và động vật.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 524,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q004",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cấu tạo tế bào và chức năng'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Tế bào thực vật có thành tế bào, không bào lớn và lục lạp; tế bào động vật không có thành tế bào."
      },
      {
        "key": "C",
        "text": "Cho rằng mọi tế bào đều có lục lạp."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tế bào thực vật có thành tế bào, không bào lớn và lục lạp; tế bào động vật không có thành tế bào.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 525,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q005",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cấu tạo tế bào và chức năng'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Không phân biệt tế bào động vật/thực vật."
      },
      {
        "key": "C",
        "text": "Màng tế bào bao bọc và kiểm soát trao đổi chất với môi trường."
      },
      {
        "key": "D",
        "text": "Nhầm màng tế bào và thành tế bào."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Màng tế bào bao bọc và kiểm soát trao đổi chất với môi trường.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 526,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q006",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cấu tạo tế bào và chức năng'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm màng tế bào và thành tế bào."
      },
      {
        "key": "B",
        "text": "Tế bào thường có màng tế bào, chất tế bào và nhân hoặc vùng nhân."
      },
      {
        "key": "C",
        "text": "Cho rằng mọi tế bào đều có lục lạp."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tế bào thường có màng tế bào, chất tế bào và nhân hoặc vùng nhân.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 527,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q007",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cấu tạo tế bào và chức năng'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Nhầm màng tế bào và thành tế bào."
      },
      {
        "key": "C",
        "text": "Tế bào thường có màng tế bào, chất tế bào và nhân hoặc vùng nhân."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tế bào thường có màng tế bào, chất tế bào và nhân hoặc vùng nhân.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 528,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q008",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cấu tạo tế bào và chức năng'?",
    "options": [
      {
        "key": "A",
        "text": "Không phân biệt tế bào động vật/thực vật."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Chất tế bào là nơi diễn ra nhiều hoạt động sống."
      },
      {
        "key": "D",
        "text": "Cho rằng mọi tế bào đều có lục lạp."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chất tế bào là nơi diễn ra nhiều hoạt động sống.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 529,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q009",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cấu tạo tế bào và chức năng'?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "B",
        "text": "Không phân biệt tế bào động vật/thực vật."
      },
      {
        "key": "C",
        "text": "Tế bào thường có màng tế bào, chất tế bào và nhân hoặc vùng nhân."
      },
      {
        "key": "D",
        "text": "Cho rằng mọi tế bào đều có lục lạp."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tế bào thường có màng tế bào, chất tế bào và nhân hoặc vùng nhân.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 530,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q010",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cấu tạo tế bào và chức năng'?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "B",
        "text": "Chất tế bào là nơi diễn ra nhiều hoạt động sống."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Không phân biệt tế bào động vật/thực vật."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chất tế bào là nơi diễn ra nhiều hoạt động sống.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 531,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q011",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'cell membrane'?",
    "options": [
      {
        "key": "A",
        "text": "bảo vệ"
      },
      {
        "key": "B",
        "text": "màng tế bào"
      },
      {
        "key": "C",
        "text": "khối lượng"
      },
      {
        "key": "D",
        "text": "chất tan"
      }
    ],
    "correctAnswer": "B",
    "answerText": "màng tế bào",
    "explanationSimple": "'màng tế bào' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 532,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q012",
    "lessonId": 14,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'cytoplasm' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "chất tế bào",
    "answerText": "chất tế bào",
    "explanationSimple": "'cytoplasm' tương ứng với 'chất tế bào' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 533,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q013",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'nucleus'?",
    "options": [
      {
        "key": "A",
        "text": "nhân"
      },
      {
        "key": "B",
        "text": "dung dịch"
      },
      {
        "key": "C",
        "text": "Ngân Hà"
      },
      {
        "key": "D",
        "text": "công dụng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "nhân",
    "explanationSimple": "'nhân' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 534,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q014",
    "lessonId": 14,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'cell wall' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "thành tế bào",
    "answerText": "thành tế bào",
    "explanationSimple": "'cell wall' tương ứng với 'thành tế bào' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 535,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q015",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'chloroplast'?",
    "options": [
      {
        "key": "A",
        "text": "lục lạp"
      },
      {
        "key": "B",
        "text": "lương thực"
      },
      {
        "key": "C",
        "text": "phân giải"
      },
      {
        "key": "D",
        "text": "Khoa học tự nhiên"
      }
    ],
    "correctAnswer": "A",
    "answerText": "lục lạp",
    "explanationSimple": "'lục lạp' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 536,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q016",
    "lessonId": 14,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Cấu tạo tế bào và chức năng'.",
    "options": null,
    "correctAnswer": "lục lạp",
    "answerText": "lục lạp",
    "explanationSimple": "Một từ khóa đúng là 'lục lạp'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 537,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q017",
    "lessonId": 14,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Cấu tạo tế bào và chức năng'.",
    "options": null,
    "correctAnswer": "nhân",
    "answerText": "nhân",
    "explanationSimple": "Một từ khóa đúng là 'nhân'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 538,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q018",
    "lessonId": 14,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Cấu tạo tế bào và chức năng'.",
    "options": null,
    "correctAnswer": "nhân",
    "answerText": "nhân",
    "explanationSimple": "Một từ khóa đúng là 'nhân'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 539,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q019",
    "lessonId": 14,
    "questionType": "true_false",
    "questionText": "Tế bào thường có màng tế bào, chất tế bào và nhân hoặc vùng nhân.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 540,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q020",
    "lessonId": 14,
    "questionType": "true_false",
    "questionText": "Màng tế bào bao bọc và kiểm soát trao đổi chất với môi trường.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 541,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q021",
    "lessonId": 14,
    "questionType": "true_false",
    "questionText": "Chất tế bào là nơi diễn ra nhiều hoạt động sống.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 542,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q022",
    "lessonId": 14,
    "questionType": "true_false",
    "questionText": "Tế bào thực vật có thành tế bào, không bào lớn và lục lạp; tế bào động vật không có thành tế bào.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 543,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q023",
    "lessonId": 14,
    "questionType": "true_false",
    "questionText": "Nhầm màng tế bào và thành tế bào.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 544,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q024",
    "lessonId": 14,
    "questionType": "true_false",
    "questionText": "Cho rằng mọi tế bào đều có lục lạp.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 545,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q025",
    "lessonId": 14,
    "questionType": "true_false",
    "questionText": "Không phân biệt tế bào động vật/thực vật.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 546,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q026",
    "lessonId": 14,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cấu tạo tế bào và chức năng', hãy nêu một thuật ngữ liên quan đến ý: Màng tế bào bao bọc và kiểm soát trao đổi chất với môi trường.",
    "options": null,
    "correctAnswer": "nhân",
    "answerText": "nhân",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nhân' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 547,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q027",
    "lessonId": 14,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cấu tạo tế bào và chức năng', hãy nêu một thuật ngữ liên quan đến ý: Màng tế bào bao bọc và kiểm soát trao đổi chất với môi trường.",
    "options": null,
    "correctAnswer": "chất tế bào",
    "answerText": "chất tế bào",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'chất tế bào' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 548,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q028",
    "lessonId": 14,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cấu tạo tế bào và chức năng', hãy nêu một thuật ngữ liên quan đến ý: Màng tế bào bao bọc và kiểm soát trao đổi chất với môi trường.",
    "options": null,
    "correctAnswer": "chất tế bào",
    "answerText": "chất tế bào",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'chất tế bào' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 549,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q029",
    "lessonId": 14,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cấu tạo tế bào và chức năng', hãy nêu một thuật ngữ liên quan đến ý: Màng tế bào bao bọc và kiểm soát trao đổi chất với môi trường.",
    "options": null,
    "correctAnswer": "màng tế bào",
    "answerText": "màng tế bào",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'màng tế bào' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 550,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q030",
    "lessonId": 14,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cấu tạo tế bào và chức năng', hãy nêu một thuật ngữ liên quan đến ý: Tế bào thường có màng tế bào, chất tế bào và nhân hoặc vùng nhân.",
    "options": null,
    "correctAnswer": "lục lạp",
    "answerText": "lục lạp",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'lục lạp' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 551,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q031",
    "lessonId": 14,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cấu tạo tế bào và chức năng', hãy nêu một thuật ngữ liên quan đến ý: Tế bào thực vật có thành tế bào, không bào lớn và lục lạp; tế bào động vật không có thành tế bào.",
    "options": null,
    "correctAnswer": "màng tế bào",
    "answerText": "màng tế bào",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'màng tế bào' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 552,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q032",
    "lessonId": 14,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cấu tạo tế bào và chức năng', hãy nêu một thuật ngữ liên quan đến ý: Tế bào thường có màng tế bào, chất tế bào và nhân hoặc vùng nhân.",
    "options": null,
    "correctAnswer": "thành tế bào",
    "answerText": "thành tế bào",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thành tế bào' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 553,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q033",
    "lessonId": 14,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cấu tạo tế bào và chức năng', hãy nêu một thuật ngữ liên quan đến ý: Chất tế bào là nơi diễn ra nhiều hoạt động sống.",
    "options": null,
    "correctAnswer": "chất tế bào",
    "answerText": "chất tế bào",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'chất tế bào' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 554,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q034",
    "lessonId": 14,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cấu tạo tế bào và chức năng', hãy nêu một thuật ngữ liên quan đến ý: Tế bào thường có màng tế bào, chất tế bào và nhân hoặc vùng nhân.",
    "options": null,
    "correctAnswer": "nhân",
    "answerText": "nhân",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nhân' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 555,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q035",
    "lessonId": 14,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Thành tế bào giúp tế bào thực vật có hình dạng ổn định.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Cho rằng mọi tế bào đều có lục lạp."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Tế bào thường có màng tế bào, chất tế bào và nhân hoặc vùng nhân."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tế bào thường có màng tế bào, chất tế bào và nhân hoặc vùng nhân.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 556,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q036",
    "lessonId": 14,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Lục lạp giúp tế bào thực vật quang hợp.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Không phân biệt tế bào động vật/thực vật."
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 557,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q037",
    "lessonId": 14,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Lục lạp giúp tế bào thực vật quang hợp.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Chất tế bào là nơi diễn ra nhiều hoạt động sống."
      },
      {
        "key": "C",
        "text": "Cho rằng mọi tế bào đều có lục lạp."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chất tế bào là nơi diễn ra nhiều hoạt động sống.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 558,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q038",
    "lessonId": 14,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Thành tế bào giúp tế bào thực vật có hình dạng ổn định.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Nhầm màng tế bào và thành tế bào."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 559,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q039",
    "lessonId": 14,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Lục lạp giúp tế bào thực vật quang hợp.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Màng tế bào bao bọc và kiểm soát trao đổi chất với môi trường."
      },
      {
        "key": "B",
        "text": "Không phân biệt tế bào động vật/thực vật."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Màng tế bào bao bọc và kiểm soát trao đổi chất với môi trường.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 560,
    "sourceId": "sci6-b2-l14-cau-tao-te-bao-va-chuc-nang-q040",
    "lessonId": 14,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Cấu tạo tế bào và chức năng', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Không phân biệt tế bào động vật/thực vật."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 561,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q001",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Sự lớn lên và sinh sản của tế bào'?",
    "options": [
      {
        "key": "A",
        "text": "Mô tả tế bào lớn lên."
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Mô tả tế bào lớn lên.",
    "explanationSimple": "Bài này hướng tới: Mô tả tế bào lớn lên.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 562,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q002",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Sự lớn lên và sinh sản của tế bào'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "B",
        "text": "Không cần quan sát"
      },
      {
        "key": "C",
        "text": "Hiểu phân chia tế bào."
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Hiểu phân chia tế bào.",
    "explanationSimple": "Bài này hướng tới: Hiểu phân chia tế bào.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 563,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q003",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Sự lớn lên và sinh sản của tế bào'?",
    "options": [
      {
        "key": "A",
        "text": "Liên hệ với cơ thể lớn lên và phục hồi."
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Liên hệ với cơ thể lớn lên và phục hồi.",
    "explanationSimple": "Bài này hướng tới: Liên hệ với cơ thể lớn lên và phục hồi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 564,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q004",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Sự lớn lên và sinh sản của tế bào'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Tế bào lớn lên nhờ tăng kích thước và tích lũy chất."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Nghĩ cơ thể lớn lên chỉ vì tế bào to lên."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tế bào lớn lên nhờ tăng kích thước và tích lũy chất.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 565,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q005",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Sự lớn lên và sinh sản của tế bào'?",
    "options": [
      {
        "key": "A",
        "text": "Cho rằng tế bào không sinh sản."
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Nhầm lớn lên của tế bào với lớn lên của cơ thể."
      },
      {
        "key": "D",
        "text": "Phân chia tế bào giúp cơ thể lớn lên, phục hồi và thay thế tế bào già."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Phân chia tế bào giúp cơ thể lớn lên, phục hồi và thay thế tế bào già.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 566,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q006",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Sự lớn lên và sinh sản của tế bào'?",
    "options": [
      {
        "key": "A",
        "text": "Cho rằng tế bào không sinh sản."
      },
      {
        "key": "B",
        "text": "Tế bào sinh sản bằng cách phân chia tạo tế bào mới."
      },
      {
        "key": "C",
        "text": "Nhầm lớn lên của tế bào với lớn lên của cơ thể."
      },
      {
        "key": "D",
        "text": "Nghĩ cơ thể lớn lên chỉ vì tế bào to lên."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tế bào sinh sản bằng cách phân chia tạo tế bào mới.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 567,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q007",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Sự lớn lên và sinh sản của tế bào'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm lớn lên của tế bào với lớn lên của cơ thể."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Phân chia tế bào giúp cơ thể lớn lên, phục hồi và thay thế tế bào già."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Phân chia tế bào giúp cơ thể lớn lên, phục hồi và thay thế tế bào già.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 568,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q008",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Sự lớn lên và sinh sản của tế bào'?",
    "options": [
      {
        "key": "A",
        "text": "Tế bào lớn lên nhờ tăng kích thước và tích lũy chất."
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Nghĩ cơ thể lớn lên chỉ vì tế bào to lên."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tế bào lớn lên nhờ tăng kích thước và tích lũy chất.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 569,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q009",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Sự lớn lên và sinh sản của tế bào'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Nghĩ cơ thể lớn lên chỉ vì tế bào to lên."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Tế bào lớn lên nhờ tăng kích thước và tích lũy chất."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tế bào lớn lên nhờ tăng kích thước và tích lũy chất.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 570,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q010",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Sự lớn lên và sinh sản của tế bào'?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ cơ thể lớn lên chỉ vì tế bào to lên."
      },
      {
        "key": "B",
        "text": "Tế bào lớn lên nhờ tăng kích thước và tích lũy chất."
      },
      {
        "key": "C",
        "text": "Cho rằng tế bào không sinh sản."
      },
      {
        "key": "D",
        "text": "Nhầm lớn lên của tế bào với lớn lên của cơ thể."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tế bào lớn lên nhờ tăng kích thước và tích lũy chất.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 571,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q011",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'growth'?",
    "options": [
      {
        "key": "A",
        "text": "lớn lên"
      },
      {
        "key": "B",
        "text": "dung môi"
      },
      {
        "key": "C",
        "text": "động năng"
      },
      {
        "key": "D",
        "text": "sinh sản"
      }
    ],
    "correctAnswer": "A",
    "answerText": "lớn lên",
    "explanationSimple": "'lớn lên' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 572,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q012",
    "lessonId": 15,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'division' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "phân chia",
    "answerText": "phân chia",
    "explanationSimple": "'division' tương ứng với 'phân chia' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 573,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q013",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'new cell'?",
    "options": [
      {
        "key": "A",
        "text": "vi khuẩn"
      },
      {
        "key": "B",
        "text": "hành tinh"
      },
      {
        "key": "C",
        "text": "thành tế bào"
      },
      {
        "key": "D",
        "text": "tế bào mới"
      }
    ],
    "correctAnswer": "D",
    "answerText": "tế bào mới",
    "explanationSimple": "'tế bào mới' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 574,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q014",
    "lessonId": 15,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'repair' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "phục hồi",
    "answerText": "phục hồi",
    "explanationSimple": "'repair' tương ứng với 'phục hồi' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 575,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q015",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'replacement'?",
    "options": [
      {
        "key": "A",
        "text": "lực"
      },
      {
        "key": "B",
        "text": "lớn lên"
      },
      {
        "key": "C",
        "text": "virus"
      },
      {
        "key": "D",
        "text": "thay thế"
      }
    ],
    "correctAnswer": "D",
    "answerText": "thay thế",
    "explanationSimple": "'thay thế' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 576,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q016",
    "lessonId": 15,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Sự lớn lên và sinh sản của tế bào'.",
    "options": null,
    "correctAnswer": "phân chia",
    "answerText": "phân chia",
    "explanationSimple": "Một từ khóa đúng là 'phân chia'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 577,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q017",
    "lessonId": 15,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Sự lớn lên và sinh sản của tế bào'.",
    "options": null,
    "correctAnswer": "phân chia",
    "answerText": "phân chia",
    "explanationSimple": "Một từ khóa đúng là 'phân chia'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 578,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q018",
    "lessonId": 15,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Sự lớn lên và sinh sản của tế bào'.",
    "options": null,
    "correctAnswer": "lớn lên",
    "answerText": "lớn lên",
    "explanationSimple": "Một từ khóa đúng là 'lớn lên'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 579,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q019",
    "lessonId": 15,
    "questionType": "true_false",
    "questionText": "Tế bào lớn lên nhờ tăng kích thước và tích lũy chất.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 580,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q020",
    "lessonId": 15,
    "questionType": "true_false",
    "questionText": "Tế bào sinh sản bằng cách phân chia tạo tế bào mới.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 581,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q021",
    "lessonId": 15,
    "questionType": "true_false",
    "questionText": "Cơ thể lớn lên do tế bào tăng kích thước và tăng số lượng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 582,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q022",
    "lessonId": 15,
    "questionType": "true_false",
    "questionText": "Phân chia tế bào giúp cơ thể lớn lên, phục hồi và thay thế tế bào già.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 583,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q023",
    "lessonId": 15,
    "questionType": "true_false",
    "questionText": "Nghĩ cơ thể lớn lên chỉ vì tế bào to lên.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 584,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q024",
    "lessonId": 15,
    "questionType": "true_false",
    "questionText": "Cho rằng tế bào không sinh sản.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 585,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q025",
    "lessonId": 15,
    "questionType": "true_false",
    "questionText": "Nhầm lớn lên của tế bào với lớn lên của cơ thể.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 586,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q026",
    "lessonId": 15,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Sự lớn lên và sinh sản của tế bào', hãy nêu một thuật ngữ liên quan đến ý: Cơ thể lớn lên do tế bào tăng kích thước và tăng số lượng.",
    "options": null,
    "correctAnswer": "phân chia",
    "answerText": "phân chia",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'phân chia' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 587,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q027",
    "lessonId": 15,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Sự lớn lên và sinh sản của tế bào', hãy nêu một thuật ngữ liên quan đến ý: Cơ thể lớn lên do tế bào tăng kích thước và tăng số lượng.",
    "options": null,
    "correctAnswer": "thay thế",
    "answerText": "thay thế",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thay thế' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 588,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q028",
    "lessonId": 15,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Sự lớn lên và sinh sản của tế bào', hãy nêu một thuật ngữ liên quan đến ý: Phân chia tế bào giúp cơ thể lớn lên, phục hồi và thay thế tế bào già.",
    "options": null,
    "correctAnswer": "tế bào mới",
    "answerText": "tế bào mới",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tế bào mới' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 589,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q029",
    "lessonId": 15,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Sự lớn lên và sinh sản của tế bào', hãy nêu một thuật ngữ liên quan đến ý: Tế bào sinh sản bằng cách phân chia tạo tế bào mới.",
    "options": null,
    "correctAnswer": "thay thế",
    "answerText": "thay thế",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thay thế' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 590,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q030",
    "lessonId": 15,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Sự lớn lên và sinh sản của tế bào', hãy nêu một thuật ngữ liên quan đến ý: Cơ thể lớn lên do tế bào tăng kích thước và tăng số lượng.",
    "options": null,
    "correctAnswer": "lớn lên",
    "answerText": "lớn lên",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'lớn lên' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 591,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q031",
    "lessonId": 15,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Sự lớn lên và sinh sản của tế bào', hãy nêu một thuật ngữ liên quan đến ý: Tế bào sinh sản bằng cách phân chia tạo tế bào mới.",
    "options": null,
    "correctAnswer": "phục hồi",
    "answerText": "phục hồi",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'phục hồi' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 592,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q032",
    "lessonId": 15,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Sự lớn lên và sinh sản của tế bào', hãy nêu một thuật ngữ liên quan đến ý: Cơ thể lớn lên do tế bào tăng kích thước và tăng số lượng.",
    "options": null,
    "correctAnswer": "phân chia",
    "answerText": "phân chia",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'phân chia' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 593,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q033",
    "lessonId": 15,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Sự lớn lên và sinh sản của tế bào', hãy nêu một thuật ngữ liên quan đến ý: Cơ thể lớn lên do tế bào tăng kích thước và tăng số lượng.",
    "options": null,
    "correctAnswer": "tế bào mới",
    "answerText": "tế bào mới",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tế bào mới' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 594,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q034",
    "lessonId": 15,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Sự lớn lên và sinh sản của tế bào', hãy nêu một thuật ngữ liên quan đến ý: Cơ thể lớn lên do tế bào tăng kích thước và tăng số lượng.",
    "options": null,
    "correctAnswer": "phục hồi",
    "answerText": "phục hồi",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'phục hồi' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 595,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q035",
    "lessonId": 15,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Cây con lớn lên nhờ tế bào tăng số lượng và kích thước.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Cho rằng tế bào không sinh sản."
      },
      {
        "key": "C",
        "text": "Tế bào sinh sản bằng cách phân chia tạo tế bào mới."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tế bào sinh sản bằng cách phân chia tạo tế bào mới.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 596,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q036",
    "lessonId": 15,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Vết thương nhỏ liền lại nhờ tế bào mới thay thế.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Nhầm lớn lên của tế bào với lớn lên của cơ thể."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 597,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q037",
    "lessonId": 15,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Vết thương nhỏ liền lại nhờ tế bào mới thay thế.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Cơ thể lớn lên do tế bào tăng kích thước và tăng số lượng."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Cho rằng tế bào không sinh sản."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cơ thể lớn lên do tế bào tăng kích thước và tăng số lượng.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 598,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q038",
    "lessonId": 15,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Cây con lớn lên nhờ tế bào tăng số lượng và kích thước.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Cho rằng tế bào không sinh sản."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 599,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q039",
    "lessonId": 15,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Sự lớn lên và sinh sản của tế bào', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Nghĩ cơ thể lớn lên chỉ vì tế bào to lên."
      },
      {
        "key": "C",
        "text": "Cơ thể lớn lên do tế bào tăng kích thước và tăng số lượng."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Cơ thể lớn lên do tế bào tăng kích thước và tăng số lượng.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 600,
    "sourceId": "sci6-b2-l15-su-lon-len-va-sinh-san-cua-te-bao-q040",
    "lessonId": 15,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Cây con lớn lên nhờ tế bào tăng số lượng và kích thước.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Nghĩ cơ thể lớn lên chỉ vì tế bào to lên."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 601,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q001",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Cơ thể đơn bào và đa bào'?",
    "options": [
      {
        "key": "A",
        "text": "Phân biệt đơn bào và đa bào."
      },
      {
        "key": "B",
        "text": "Không cần quan sát"
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Học thuộc tất cả số liệu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Phân biệt đơn bào và đa bào.",
    "explanationSimple": "Bài này hướng tới: Phân biệt đơn bào và đa bào.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 602,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q002",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Cơ thể đơn bào và đa bào'?",
    "options": [
      {
        "key": "A",
        "text": "Nêu ví dụ."
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nêu ví dụ.",
    "explanationSimple": "Bài này hướng tới: Nêu ví dụ.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 603,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q003",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Cơ thể đơn bào và đa bào'?",
    "options": [
      {
        "key": "A",
        "text": "Tránh đánh giá chỉ bằng kích thước."
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Học thuộc tất cả số liệu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tránh đánh giá chỉ bằng kích thước.",
    "explanationSimple": "Bài này hướng tới: Tránh đánh giá chỉ bằng kích thước.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 604,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q004",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cơ thể đơn bào và đa bào'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm tế bào với cơ thể đơn bào."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Nghĩ đơn bào là không sống đầy đủ."
      },
      {
        "key": "D",
        "text": "Cơ thể đa bào gồm nhiều tế bào, các tế bào có thể chuyên hóa chức năng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Cơ thể đa bào gồm nhiều tế bào, các tế bào có thể chuyên hóa chức năng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 605,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q005",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cơ thể đơn bào và đa bào'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm tế bào với cơ thể đơn bào."
      },
      {
        "key": "B",
        "text": "Cơ thể đơn bào được cấu tạo từ một tế bào nhưng vẫn thực hiện đủ hoạt động sống."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Cho rằng sinh vật nhỏ đều đơn bào."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Cơ thể đơn bào được cấu tạo từ một tế bào nhưng vẫn thực hiện đủ hoạt động sống.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 606,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q006",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cơ thể đơn bào và đa bào'?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ đơn bào là không sống đầy đủ."
      },
      {
        "key": "B",
        "text": "Cơ thể đa bào gồm nhiều tế bào, các tế bào có thể chuyên hóa chức năng."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Nhầm tế bào với cơ thể đơn bào."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Cơ thể đa bào gồm nhiều tế bào, các tế bào có thể chuyên hóa chức năng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 607,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q007",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cơ thể đơn bào và đa bào'?",
    "options": [
      {
        "key": "A",
        "text": "Cơ thể đa bào gồm nhiều tế bào, các tế bào có thể chuyên hóa chức năng."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Nghĩ đơn bào là không sống đầy đủ."
      },
      {
        "key": "D",
        "text": "Nhầm tế bào với cơ thể đơn bào."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cơ thể đa bào gồm nhiều tế bào, các tế bào có thể chuyên hóa chức năng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 608,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q008",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cơ thể đơn bào và đa bào'?",
    "options": [
      {
        "key": "A",
        "text": "Không phải sinh vật nhỏ nào cũng là đơn bào."
      },
      {
        "key": "B",
        "text": "Nghĩ đơn bào là không sống đầy đủ."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Nhầm tế bào với cơ thể đơn bào."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Không phải sinh vật nhỏ nào cũng là đơn bào.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 609,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q009",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cơ thể đơn bào và đa bào'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Cơ thể đa bào gồm nhiều tế bào, các tế bào có thể chuyên hóa chức năng."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Nhầm tế bào với cơ thể đơn bào."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Cơ thể đa bào gồm nhiều tế bào, các tế bào có thể chuyên hóa chức năng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 610,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q010",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cơ thể đơn bào và đa bào'?",
    "options": [
      {
        "key": "A",
        "text": "Cho rằng sinh vật nhỏ đều đơn bào."
      },
      {
        "key": "B",
        "text": "Cơ thể đơn bào được cấu tạo từ một tế bào nhưng vẫn thực hiện đủ hoạt động sống."
      },
      {
        "key": "C",
        "text": "Nhầm tế bào với cơ thể đơn bào."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Cơ thể đơn bào được cấu tạo từ một tế bào nhưng vẫn thực hiện đủ hoạt động sống.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 611,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q011",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'unicellular'?",
    "options": [
      {
        "key": "A",
        "text": "thực phẩm"
      },
      {
        "key": "B",
        "text": "đơn bào"
      },
      {
        "key": "C",
        "text": "cơ thể"
      },
      {
        "key": "D",
        "text": "màng tế bào"
      }
    ],
    "correctAnswer": "B",
    "answerText": "đơn bào",
    "explanationSimple": "'đơn bào' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 612,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q012",
    "lessonId": 16,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'multicellular' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "đa bào",
    "answerText": "đa bào",
    "explanationSimple": "'multicellular' tương ứng với 'đa bào' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 613,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q013",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'specialization'?",
    "options": [
      {
        "key": "A",
        "text": "chuyên hóa"
      },
      {
        "key": "B",
        "text": "cơ quan"
      },
      {
        "key": "C",
        "text": "vật thể"
      },
      {
        "key": "D",
        "text": "thiên hà"
      }
    ],
    "correctAnswer": "A",
    "answerText": "chuyên hóa",
    "explanationSimple": "'chuyên hóa' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 614,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q014",
    "lessonId": 16,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'organism' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "sinh vật",
    "answerText": "sinh vật",
    "explanationSimple": "'organism' tương ứng với 'sinh vật' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 615,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q015",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'life processes'?",
    "options": [
      {
        "key": "A",
        "text": "tiêu bản"
      },
      {
        "key": "B",
        "text": "newton"
      },
      {
        "key": "C",
        "text": "hoạt động sống"
      },
      {
        "key": "D",
        "text": "hành tinh"
      }
    ],
    "correctAnswer": "C",
    "answerText": "hoạt động sống",
    "explanationSimple": "'hoạt động sống' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 616,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q016",
    "lessonId": 16,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Cơ thể đơn bào và đa bào'.",
    "options": null,
    "correctAnswer": "đơn bào",
    "answerText": "đơn bào",
    "explanationSimple": "Một từ khóa đúng là 'đơn bào'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 617,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q017",
    "lessonId": 16,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Cơ thể đơn bào và đa bào'.",
    "options": null,
    "correctAnswer": "đơn bào",
    "answerText": "đơn bào",
    "explanationSimple": "Một từ khóa đúng là 'đơn bào'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 618,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q018",
    "lessonId": 16,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Cơ thể đơn bào và đa bào'.",
    "options": null,
    "correctAnswer": "chuyên hóa",
    "answerText": "chuyên hóa",
    "explanationSimple": "Một từ khóa đúng là 'chuyên hóa'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 619,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q019",
    "lessonId": 16,
    "questionType": "true_false",
    "questionText": "Cơ thể đơn bào được cấu tạo từ một tế bào nhưng vẫn thực hiện đủ hoạt động sống.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 620,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q020",
    "lessonId": 16,
    "questionType": "true_false",
    "questionText": "Cơ thể đa bào gồm nhiều tế bào, các tế bào có thể chuyên hóa chức năng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 621,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q021",
    "lessonId": 16,
    "questionType": "true_false",
    "questionText": "Không phải sinh vật nhỏ nào cũng là đơn bào.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 622,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q022",
    "lessonId": 16,
    "questionType": "true_false",
    "questionText": "Ở cơ thể đa bào, nhiều tế bào phối hợp giúp cơ thể hoạt động hiệu quả.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 623,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q023",
    "lessonId": 16,
    "questionType": "true_false",
    "questionText": "Nghĩ đơn bào là không sống đầy đủ.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 624,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q024",
    "lessonId": 16,
    "questionType": "true_false",
    "questionText": "Cho rằng sinh vật nhỏ đều đơn bào.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 625,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q025",
    "lessonId": 16,
    "questionType": "true_false",
    "questionText": "Nhầm tế bào với cơ thể đơn bào.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 626,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q026",
    "lessonId": 16,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cơ thể đơn bào và đa bào', hãy nêu một thuật ngữ liên quan đến ý: Ở cơ thể đa bào, nhiều tế bào phối hợp giúp cơ thể hoạt động hiệu quả.",
    "options": null,
    "correctAnswer": "đơn bào",
    "answerText": "đơn bào",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'đơn bào' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 627,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q027",
    "lessonId": 16,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cơ thể đơn bào và đa bào', hãy nêu một thuật ngữ liên quan đến ý: Không phải sinh vật nhỏ nào cũng là đơn bào.",
    "options": null,
    "correctAnswer": "đơn bào",
    "answerText": "đơn bào",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'đơn bào' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 628,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q028",
    "lessonId": 16,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cơ thể đơn bào và đa bào', hãy nêu một thuật ngữ liên quan đến ý: Cơ thể đơn bào được cấu tạo từ một tế bào nhưng vẫn thực hiện đủ hoạt động sống.",
    "options": null,
    "correctAnswer": "sinh vật",
    "answerText": "sinh vật",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'sinh vật' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 629,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q029",
    "lessonId": 16,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cơ thể đơn bào và đa bào', hãy nêu một thuật ngữ liên quan đến ý: Cơ thể đa bào gồm nhiều tế bào, các tế bào có thể chuyên hóa chức năng.",
    "options": null,
    "correctAnswer": "đa bào",
    "answerText": "đa bào",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'đa bào' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 630,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q030",
    "lessonId": 16,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cơ thể đơn bào và đa bào', hãy nêu một thuật ngữ liên quan đến ý: Cơ thể đa bào gồm nhiều tế bào, các tế bào có thể chuyên hóa chức năng.",
    "options": null,
    "correctAnswer": "sinh vật",
    "answerText": "sinh vật",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'sinh vật' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 631,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q031",
    "lessonId": 16,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cơ thể đơn bào và đa bào', hãy nêu một thuật ngữ liên quan đến ý: Ở cơ thể đa bào, nhiều tế bào phối hợp giúp cơ thể hoạt động hiệu quả.",
    "options": null,
    "correctAnswer": "hoạt động sống",
    "answerText": "hoạt động sống",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'hoạt động sống' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 632,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q032",
    "lessonId": 16,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cơ thể đơn bào và đa bào', hãy nêu một thuật ngữ liên quan đến ý: Cơ thể đơn bào được cấu tạo từ một tế bào nhưng vẫn thực hiện đủ hoạt động sống.",
    "options": null,
    "correctAnswer": "đa bào",
    "answerText": "đa bào",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'đa bào' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 633,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q033",
    "lessonId": 16,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cơ thể đơn bào và đa bào', hãy nêu một thuật ngữ liên quan đến ý: Không phải sinh vật nhỏ nào cũng là đơn bào.",
    "options": null,
    "correctAnswer": "chuyên hóa",
    "answerText": "chuyên hóa",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'chuyên hóa' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 634,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q034",
    "lessonId": 16,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Cơ thể đơn bào và đa bào', hãy nêu một thuật ngữ liên quan đến ý: Cơ thể đa bào gồm nhiều tế bào, các tế bào có thể chuyên hóa chức năng.",
    "options": null,
    "correctAnswer": "đa bào",
    "answerText": "đa bào",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'đa bào' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 635,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q035",
    "lessonId": 16,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Cây phượng và con người là cơ thể đa bào.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Không phải sinh vật nhỏ nào cũng là đơn bào."
      },
      {
        "key": "B",
        "text": "Cho rằng sinh vật nhỏ đều đơn bào."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Không phải sinh vật nhỏ nào cũng là đơn bào.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 636,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q036",
    "lessonId": 16,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Cơ thể đơn bào và đa bào', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Nghĩ đơn bào là không sống đầy đủ."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 637,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q037",
    "lessonId": 16,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Vi khuẩn là cơ thể đơn bào.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Nghĩ đơn bào là không sống đầy đủ."
      },
      {
        "key": "D",
        "text": "Ở cơ thể đa bào, nhiều tế bào phối hợp giúp cơ thể hoạt động hiệu quả."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Ở cơ thể đa bào, nhiều tế bào phối hợp giúp cơ thể hoạt động hiệu quả.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 638,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q038",
    "lessonId": 16,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Cây phượng và con người là cơ thể đa bào.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ đơn bào là không sống đầy đủ."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 639,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q039",
    "lessonId": 16,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Cơ thể đơn bào và đa bào', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Ở cơ thể đa bào, nhiều tế bào phối hợp giúp cơ thể hoạt động hiệu quả."
      },
      {
        "key": "C",
        "text": "Cho rằng sinh vật nhỏ đều đơn bào."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Ở cơ thể đa bào, nhiều tế bào phối hợp giúp cơ thể hoạt động hiệu quả.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 640,
    "sourceId": "sci6-b2-l16-co-the-don-bao-va-da-bao-q040",
    "lessonId": 16,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Cây phượng và con người là cơ thể đa bào.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Cho rằng sinh vật nhỏ đều đơn bào."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 641,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q001",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Sắp xếp đúng cấp tổ chức."
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Sắp xếp đúng cấp tổ chức.",
    "explanationSimple": "Bài này hướng tới: Sắp xếp đúng cấp tổ chức.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 642,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q002",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Không cần quan sát"
      },
      {
        "key": "C",
        "text": "Phân biệt mô, cơ quan, hệ cơ quan."
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Phân biệt mô, cơ quan, hệ cơ quan.",
    "explanationSimple": "Bài này hướng tới: Phân biệt mô, cơ quan, hệ cơ quan.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 643,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q003",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan'?",
    "options": [
      {
        "key": "A",
        "text": "Nêu ví dụ ở người và cây."
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nêu ví dụ ở người và cây.",
    "explanationSimple": "Bài này hướng tới: Nêu ví dụ ở người và cây.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 644,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q004",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Sắp xếp sai cấp độ."
      },
      {
        "key": "C",
        "text": "Cơ thể đa bào có các cấp tổ chức: tế bào → mô → cơ quan → hệ cơ quan → cơ thể."
      },
      {
        "key": "D",
        "text": "Cho rằng hệ cơ quan chỉ có ở động vật."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Cơ thể đa bào có các cấp tổ chức: tế bào → mô → cơ quan → hệ cơ quan → cơ thể.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 645,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q005",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan'?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "B",
        "text": "Cơ quan gồm nhiều mô phối hợp thực hiện chức năng nhất định."
      },
      {
        "key": "C",
        "text": "Cho rằng hệ cơ quan chỉ có ở động vật."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Cơ quan gồm nhiều mô phối hợp thực hiện chức năng nhất định.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 646,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q006",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan'?",
    "options": [
      {
        "key": "A",
        "text": "Cơ quan gồm nhiều mô phối hợp thực hiện chức năng nhất định."
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Cho rằng hệ cơ quan chỉ có ở động vật."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cơ quan gồm nhiều mô phối hợp thực hiện chức năng nhất định.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 647,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q007",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Mô là nhóm tế bào có cấu tạo giống nhau và cùng thực hiện chức năng."
      },
      {
        "key": "C",
        "text": "Nhầm mô với cơ quan."
      },
      {
        "key": "D",
        "text": "Sắp xếp sai cấp độ."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Mô là nhóm tế bào có cấu tạo giống nhau và cùng thực hiện chức năng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 648,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q008",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan'?",
    "options": [
      {
        "key": "A",
        "text": "Sắp xếp sai cấp độ."
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Cơ quan gồm nhiều mô phối hợp thực hiện chức năng nhất định."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Cơ quan gồm nhiều mô phối hợp thực hiện chức năng nhất định.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 649,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q009",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan'?",
    "options": [
      {
        "key": "A",
        "text": "Cơ thể đa bào có các cấp tổ chức: tế bào → mô → cơ quan → hệ cơ quan → cơ thể."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Sắp xếp sai cấp độ."
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cơ thể đa bào có các cấp tổ chức: tế bào → mô → cơ quan → hệ cơ quan → cơ thể.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 650,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q010",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm mô với cơ quan."
      },
      {
        "key": "B",
        "text": "Cơ quan gồm nhiều mô phối hợp thực hiện chức năng nhất định."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Cho rằng hệ cơ quan chỉ có ở động vật."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Cơ quan gồm nhiều mô phối hợp thực hiện chức năng nhất định.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 651,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q011",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'tissue'?",
    "options": [
      {
        "key": "A",
        "text": "đơn vị"
      },
      {
        "key": "B",
        "text": "động năng"
      },
      {
        "key": "C",
        "text": "mô"
      },
      {
        "key": "D",
        "text": "tiêu bản"
      }
    ],
    "correctAnswer": "C",
    "answerText": "mô",
    "explanationSimple": "'mô' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 652,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q012",
    "lessonId": 17,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'organ' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "cơ quan",
    "answerText": "cơ quan",
    "explanationSimple": "'organ' tương ứng với 'cơ quan' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 653,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q013",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'organ system'?",
    "options": [
      {
        "key": "A",
        "text": "chất"
      },
      {
        "key": "B",
        "text": "chiết"
      },
      {
        "key": "C",
        "text": "bề mặt"
      },
      {
        "key": "D",
        "text": "hệ cơ quan"
      }
    ],
    "correctAnswer": "D",
    "answerText": "hệ cơ quan",
    "explanationSimple": "'hệ cơ quan' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 654,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q014",
    "lessonId": 17,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'body' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "cơ thể",
    "answerText": "cơ thể",
    "explanationSimple": "'body' tương ứng với 'cơ thể' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 655,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q015",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'level of organization'?",
    "options": [
      {
        "key": "A",
        "text": "nhân"
      },
      {
        "key": "B",
        "text": "cấp tổ chức"
      },
      {
        "key": "C",
        "text": "dung môi"
      },
      {
        "key": "D",
        "text": "lực"
      }
    ],
    "correctAnswer": "B",
    "answerText": "cấp tổ chức",
    "explanationSimple": "'cấp tổ chức' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 656,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q016",
    "lessonId": 17,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan'.",
    "options": null,
    "correctAnswer": "cơ thể",
    "answerText": "cơ thể",
    "explanationSimple": "Một từ khóa đúng là 'cơ thể'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 657,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q017",
    "lessonId": 17,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan'.",
    "options": null,
    "correctAnswer": "cấp tổ chức",
    "answerText": "cấp tổ chức",
    "explanationSimple": "Một từ khóa đúng là 'cấp tổ chức'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 658,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q018",
    "lessonId": 17,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan'.",
    "options": null,
    "correctAnswer": "cấp tổ chức",
    "answerText": "cấp tổ chức",
    "explanationSimple": "Một từ khóa đúng là 'cấp tổ chức'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 659,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q019",
    "lessonId": 17,
    "questionType": "true_false",
    "questionText": "Cơ thể đa bào có các cấp tổ chức: tế bào → mô → cơ quan → hệ cơ quan → cơ thể.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 660,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q020",
    "lessonId": 17,
    "questionType": "true_false",
    "questionText": "Mô là nhóm tế bào có cấu tạo giống nhau và cùng thực hiện chức năng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 661,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q021",
    "lessonId": 17,
    "questionType": "true_false",
    "questionText": "Cơ quan gồm nhiều mô phối hợp thực hiện chức năng nhất định.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 662,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q022",
    "lessonId": 17,
    "questionType": "true_false",
    "questionText": "Hệ cơ quan gồm nhiều cơ quan phối hợp để thực hiện chức năng sống.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 663,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q023",
    "lessonId": 17,
    "questionType": "true_false",
    "questionText": "Nhầm mô với cơ quan.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 664,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q024",
    "lessonId": 17,
    "questionType": "true_false",
    "questionText": "Sắp xếp sai cấp độ.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 665,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q025",
    "lessonId": 17,
    "questionType": "true_false",
    "questionText": "Cho rằng hệ cơ quan chỉ có ở động vật.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 666,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q026",
    "lessonId": 17,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan', hãy nêu một thuật ngữ liên quan đến ý: Cơ thể đa bào có các cấp tổ chức: tế bào → mô → cơ quan → hệ cơ quan → cơ thể.",
    "options": null,
    "correctAnswer": "hệ cơ quan",
    "answerText": "hệ cơ quan",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'hệ cơ quan' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 667,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q027",
    "lessonId": 17,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan', hãy nêu một thuật ngữ liên quan đến ý: Mô là nhóm tế bào có cấu tạo giống nhau và cùng thực hiện chức năng.",
    "options": null,
    "correctAnswer": "hệ cơ quan",
    "answerText": "hệ cơ quan",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'hệ cơ quan' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 668,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q028",
    "lessonId": 17,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan', hãy nêu một thuật ngữ liên quan đến ý: Hệ cơ quan gồm nhiều cơ quan phối hợp để thực hiện chức năng sống.",
    "options": null,
    "correctAnswer": "cơ thể",
    "answerText": "cơ thể",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'cơ thể' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 669,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q029",
    "lessonId": 17,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan', hãy nêu một thuật ngữ liên quan đến ý: Mô là nhóm tế bào có cấu tạo giống nhau và cùng thực hiện chức năng.",
    "options": null,
    "correctAnswer": "hệ cơ quan",
    "answerText": "hệ cơ quan",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'hệ cơ quan' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 670,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q030",
    "lessonId": 17,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan', hãy nêu một thuật ngữ liên quan đến ý: Hệ cơ quan gồm nhiều cơ quan phối hợp để thực hiện chức năng sống.",
    "options": null,
    "correctAnswer": "mô",
    "answerText": "mô",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'mô' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 671,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q031",
    "lessonId": 17,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan', hãy nêu một thuật ngữ liên quan đến ý: Hệ cơ quan gồm nhiều cơ quan phối hợp để thực hiện chức năng sống.",
    "options": null,
    "correctAnswer": "cơ quan",
    "answerText": "cơ quan",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'cơ quan' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 672,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q032",
    "lessonId": 17,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan', hãy nêu một thuật ngữ liên quan đến ý: Cơ thể đa bào có các cấp tổ chức: tế bào → mô → cơ quan → hệ cơ quan → cơ thể.",
    "options": null,
    "correctAnswer": "cơ quan",
    "answerText": "cơ quan",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'cơ quan' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 673,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q033",
    "lessonId": 17,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan', hãy nêu một thuật ngữ liên quan đến ý: Cơ quan gồm nhiều mô phối hợp thực hiện chức năng nhất định.",
    "options": null,
    "correctAnswer": "cơ thể",
    "answerText": "cơ thể",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'cơ thể' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 674,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q034",
    "lessonId": 17,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Từ tế bào đến mô, cơ quan, hệ cơ quan', hãy nêu một thuật ngữ liên quan đến ý: Hệ cơ quan gồm nhiều cơ quan phối hợp để thực hiện chức năng sống.",
    "options": null,
    "correctAnswer": "cấp tổ chức",
    "answerText": "cấp tổ chức",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'cấp tổ chức' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 675,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q035",
    "lessonId": 17,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Lá là cơ quan của cây.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Mô là nhóm tế bào có cấu tạo giống nhau và cùng thực hiện chức năng."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Cho rằng hệ cơ quan chỉ có ở động vật."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Mô là nhóm tế bào có cấu tạo giống nhau và cùng thực hiện chức năng.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 676,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q036",
    "lessonId": 17,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Lá là cơ quan của cây.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Sắp xếp sai cấp độ."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 677,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q037",
    "lessonId": 17,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Tế bào cơ → mô cơ → tim → hệ tuần hoàn.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Cơ thể đa bào có các cấp tổ chức: tế bào → mô → cơ quan → hệ cơ quan → cơ thể."
      },
      {
        "key": "C",
        "text": "Sắp xếp sai cấp độ."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Cơ thể đa bào có các cấp tổ chức: tế bào → mô → cơ quan → hệ cơ quan → cơ thể.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 678,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q038",
    "lessonId": 17,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Tế bào cơ → mô cơ → tim → hệ tuần hoàn.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Sắp xếp sai cấp độ."
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 679,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q039",
    "lessonId": 17,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Lá là cơ quan của cây.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Sắp xếp sai cấp độ."
      },
      {
        "key": "B",
        "text": "Cơ quan gồm nhiều mô phối hợp thực hiện chức năng nhất định."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Cơ quan gồm nhiều mô phối hợp thực hiện chức năng nhất định.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 680,
    "sourceId": "sci6-b2-l17-tu-te-bao-den-mo-co-quan-he-co-quan-q040",
    "lessonId": 17,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Lá là cơ quan của cây.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Nhầm mô với cơ quan."
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 681,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q001",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Phân loại sinh vật và khóa lưỡng phân'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần quan sát"
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Hiểu mục đích phân loại."
      },
      {
        "key": "D",
        "text": "Học thuộc tất cả số liệu"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Hiểu mục đích phân loại.",
    "explanationSimple": "Bài này hướng tới: Hiểu mục đích phân loại.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 682,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q002",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Phân loại sinh vật và khóa lưỡng phân'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Biết khóa lưỡng phân là gì."
      },
      {
        "key": "D",
        "text": "Học thuộc tất cả số liệu"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Biết khóa lưỡng phân là gì.",
    "explanationSimple": "Bài này hướng tới: Biết khóa lưỡng phân là gì.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 683,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q003",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Phân loại sinh vật và khóa lưỡng phân'?",
    "options": [
      {
        "key": "A",
        "text": "Dùng đặc điểm để phân loại đơn giản."
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Dùng đặc điểm để phân loại đơn giản.",
    "explanationSimple": "Bài này hướng tới: Dùng đặc điểm để phân loại đơn giản.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 684,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q004",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Phân loại sinh vật và khóa lưỡng phân'?",
    "options": [
      {
        "key": "A",
        "text": "Có thể phân loại dựa vào cấu tạo, dinh dưỡng, sinh sản, môi trường sống."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Dùng đặc điểm không ổn định."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Có thể phân loại dựa vào cấu tạo, dinh dưỡng, sinh sản, môi trường sống.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 685,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q005",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Phân loại sinh vật và khóa lưỡng phân'?",
    "options": [
      {
        "key": "A",
        "text": "Dùng đặc điểm không ổn định."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Phân loại theo cảm tính đẹp/xấu."
      },
      {
        "key": "D",
        "text": "Có thể phân loại dựa vào cấu tạo, dinh dưỡng, sinh sản, môi trường sống."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Có thể phân loại dựa vào cấu tạo, dinh dưỡng, sinh sản, môi trường sống.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 686,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q006",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Phân loại sinh vật và khóa lưỡng phân'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Sinh vật rất đa dạng nên cần phân loại để dễ nghiên cứu và nhận biết."
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Sinh vật rất đa dạng nên cần phân loại để dễ nghiên cứu và nhận biết.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 687,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q007",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Phân loại sinh vật và khóa lưỡng phân'?",
    "options": [
      {
        "key": "A",
        "text": "Có thể phân loại dựa vào cấu tạo, dinh dưỡng, sinh sản, môi trường sống."
      },
      {
        "key": "B",
        "text": "Bỏ qua bước trong khóa."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Có thể phân loại dựa vào cấu tạo, dinh dưỡng, sinh sản, môi trường sống.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 688,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q008",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Phân loại sinh vật và khóa lưỡng phân'?",
    "options": [
      {
        "key": "A",
        "text": "Khóa lưỡng phân dùng các cặp đặc điểm đối lập để nhận dạng sinh vật."
      },
      {
        "key": "B",
        "text": "Phân loại theo cảm tính đẹp/xấu."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Khóa lưỡng phân dùng các cặp đặc điểm đối lập để nhận dạng sinh vật.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 689,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q009",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Phân loại sinh vật và khóa lưỡng phân'?",
    "options": [
      {
        "key": "A",
        "text": "Phân loại theo cảm tính đẹp/xấu."
      },
      {
        "key": "B",
        "text": "Sinh vật rất đa dạng nên cần phân loại để dễ nghiên cứu và nhận biết."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Sinh vật rất đa dạng nên cần phân loại để dễ nghiên cứu và nhận biết.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 690,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q010",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Phân loại sinh vật và khóa lưỡng phân'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua bước trong khóa."
      },
      {
        "key": "B",
        "text": "Khi dùng khóa cần quan sát đặc điểm rõ ràng và đi theo từng bước."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Khi dùng khóa cần quan sát đặc điểm rõ ràng và đi theo từng bước.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 691,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q011",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'classification'?",
    "options": [
      {
        "key": "A",
        "text": "kim loại"
      },
      {
        "key": "B",
        "text": "mô"
      },
      {
        "key": "C",
        "text": "phân loại"
      },
      {
        "key": "D",
        "text": "chuyển động"
      }
    ],
    "correctAnswer": "C",
    "answerText": "phân loại",
    "explanationSimple": "'phân loại' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 692,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q012",
    "lessonId": 18,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'dichotomous key' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "khóa lưỡng phân",
    "answerText": "khóa lưỡng phân",
    "explanationSimple": "'dichotomous key' tương ứng với 'khóa lưỡng phân' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 693,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q013",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'characteristic'?",
    "options": [
      {
        "key": "A",
        "text": "phương thẳng đứng"
      },
      {
        "key": "B",
        "text": "tính chất"
      },
      {
        "key": "C",
        "text": "đặc điểm"
      },
      {
        "key": "D",
        "text": "đa bào"
      }
    ],
    "correctAnswer": "C",
    "answerText": "đặc điểm",
    "explanationSimple": "'đặc điểm' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 694,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q014",
    "lessonId": 18,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'identification' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "nhận dạng",
    "answerText": "nhận dạng",
    "explanationSimple": "'identification' tương ứng với 'nhận dạng' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 695,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q015",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'organism'?",
    "options": [
      {
        "key": "A",
        "text": "đẩy"
      },
      {
        "key": "B",
        "text": "công dụng"
      },
      {
        "key": "C",
        "text": "sinh vật"
      },
      {
        "key": "D",
        "text": "ôn tập"
      }
    ],
    "correctAnswer": "C",
    "answerText": "sinh vật",
    "explanationSimple": "'sinh vật' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 696,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q016",
    "lessonId": 18,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Phân loại sinh vật và khóa lưỡng phân'.",
    "options": null,
    "correctAnswer": "khóa lưỡng phân",
    "answerText": "khóa lưỡng phân",
    "explanationSimple": "Một từ khóa đúng là 'khóa lưỡng phân'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 697,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q017",
    "lessonId": 18,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Phân loại sinh vật và khóa lưỡng phân'.",
    "options": null,
    "correctAnswer": "sinh vật",
    "answerText": "sinh vật",
    "explanationSimple": "Một từ khóa đúng là 'sinh vật'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 698,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q018",
    "lessonId": 18,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Phân loại sinh vật và khóa lưỡng phân'.",
    "options": null,
    "correctAnswer": "phân loại",
    "answerText": "phân loại",
    "explanationSimple": "Một từ khóa đúng là 'phân loại'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 699,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q019",
    "lessonId": 18,
    "questionType": "true_false",
    "questionText": "Sinh vật rất đa dạng nên cần phân loại để dễ nghiên cứu và nhận biết.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 700,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q020",
    "lessonId": 18,
    "questionType": "true_false",
    "questionText": "Có thể phân loại dựa vào cấu tạo, dinh dưỡng, sinh sản, môi trường sống.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 701,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q021",
    "lessonId": 18,
    "questionType": "true_false",
    "questionText": "Khóa lưỡng phân dùng các cặp đặc điểm đối lập để nhận dạng sinh vật.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 702,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q022",
    "lessonId": 18,
    "questionType": "true_false",
    "questionText": "Khi dùng khóa cần quan sát đặc điểm rõ ràng và đi theo từng bước.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 703,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q023",
    "lessonId": 18,
    "questionType": "true_false",
    "questionText": "Phân loại theo cảm tính đẹp/xấu.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 704,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q024",
    "lessonId": 18,
    "questionType": "true_false",
    "questionText": "Bỏ qua bước trong khóa.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 705,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q025",
    "lessonId": 18,
    "questionType": "true_false",
    "questionText": "Dùng đặc điểm không ổn định.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 706,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q026",
    "lessonId": 18,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Phân loại sinh vật và khóa lưỡng phân', hãy nêu một thuật ngữ liên quan đến ý: Khóa lưỡng phân dùng các cặp đặc điểm đối lập để nhận dạng sinh vật.",
    "options": null,
    "correctAnswer": "sinh vật",
    "answerText": "sinh vật",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'sinh vật' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 707,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q027",
    "lessonId": 18,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Phân loại sinh vật và khóa lưỡng phân', hãy nêu một thuật ngữ liên quan đến ý: Khi dùng khóa cần quan sát đặc điểm rõ ràng và đi theo từng bước.",
    "options": null,
    "correctAnswer": "nhận dạng",
    "answerText": "nhận dạng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nhận dạng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 708,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q028",
    "lessonId": 18,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Phân loại sinh vật và khóa lưỡng phân', hãy nêu một thuật ngữ liên quan đến ý: Khi dùng khóa cần quan sát đặc điểm rõ ràng và đi theo từng bước.",
    "options": null,
    "correctAnswer": "nhận dạng",
    "answerText": "nhận dạng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nhận dạng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 709,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q029",
    "lessonId": 18,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Phân loại sinh vật và khóa lưỡng phân', hãy nêu một thuật ngữ liên quan đến ý: Sinh vật rất đa dạng nên cần phân loại để dễ nghiên cứu và nhận biết.",
    "options": null,
    "correctAnswer": "nhận dạng",
    "answerText": "nhận dạng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nhận dạng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 710,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q030",
    "lessonId": 18,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Phân loại sinh vật và khóa lưỡng phân', hãy nêu một thuật ngữ liên quan đến ý: Có thể phân loại dựa vào cấu tạo, dinh dưỡng, sinh sản, môi trường sống.",
    "options": null,
    "correctAnswer": "đặc điểm",
    "answerText": "đặc điểm",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'đặc điểm' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 711,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q031",
    "lessonId": 18,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Phân loại sinh vật và khóa lưỡng phân', hãy nêu một thuật ngữ liên quan đến ý: Khi dùng khóa cần quan sát đặc điểm rõ ràng và đi theo từng bước.",
    "options": null,
    "correctAnswer": "sinh vật",
    "answerText": "sinh vật",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'sinh vật' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 712,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q032",
    "lessonId": 18,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Phân loại sinh vật và khóa lưỡng phân', hãy nêu một thuật ngữ liên quan đến ý: Có thể phân loại dựa vào cấu tạo, dinh dưỡng, sinh sản, môi trường sống.",
    "options": null,
    "correctAnswer": "khóa lưỡng phân",
    "answerText": "khóa lưỡng phân",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'khóa lưỡng phân' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 713,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q033",
    "lessonId": 18,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Phân loại sinh vật và khóa lưỡng phân', hãy nêu một thuật ngữ liên quan đến ý: Khóa lưỡng phân dùng các cặp đặc điểm đối lập để nhận dạng sinh vật.",
    "options": null,
    "correctAnswer": "phân loại",
    "answerText": "phân loại",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'phân loại' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 714,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q034",
    "lessonId": 18,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Phân loại sinh vật và khóa lưỡng phân', hãy nêu một thuật ngữ liên quan đến ý: Khóa lưỡng phân dùng các cặp đặc điểm đối lập để nhận dạng sinh vật.",
    "options": null,
    "correctAnswer": "khóa lưỡng phân",
    "answerText": "khóa lưỡng phân",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'khóa lưỡng phân' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 715,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q035",
    "lessonId": 18,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Dùng đặc điểm có hoa/không hoa để phân loại thực vật.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Sinh vật rất đa dạng nên cần phân loại để dễ nghiên cứu và nhận biết."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Bỏ qua bước trong khóa."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Sinh vật rất đa dạng nên cần phân loại để dễ nghiên cứu và nhận biết.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 716,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q036",
    "lessonId": 18,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Phân loại sinh vật và khóa lưỡng phân', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Dùng đặc điểm không ổn định."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 717,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q037",
    "lessonId": 18,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Phân loại sinh vật và khóa lưỡng phân', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Phân loại theo cảm tính đẹp/xấu."
      },
      {
        "key": "B",
        "text": "Sinh vật rất đa dạng nên cần phân loại để dễ nghiên cứu và nhận biết."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Sinh vật rất đa dạng nên cần phân loại để dễ nghiên cứu và nhận biết.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 718,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q038",
    "lessonId": 18,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Phân loại sinh vật và khóa lưỡng phân', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Bỏ qua bước trong khóa."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 719,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q039",
    "lessonId": 18,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Dùng đặc điểm có hoa/không hoa để phân loại thực vật.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Phân loại theo cảm tính đẹp/xấu."
      },
      {
        "key": "C",
        "text": "Khi dùng khóa cần quan sát đặc điểm rõ ràng và đi theo từng bước."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Khi dùng khóa cần quan sát đặc điểm rõ ràng và đi theo từng bước.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 720,
    "sourceId": "sci6-b2-l18-phan-loai-sinh-vat-va-khoa-luong-phan-q040",
    "lessonId": 18,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Dùng đặc điểm có hoa/không hoa để phân loại thực vật.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Phân loại theo cảm tính đẹp/xấu."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 721,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q001",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Vi khuẩn và virus'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "B",
        "text": "Phân biệt vi khuẩn và virus ở mức cơ bản."
      },
      {
        "key": "C",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Phân biệt vi khuẩn và virus ở mức cơ bản.",
    "explanationSimple": "Bài này hướng tới: Phân biệt vi khuẩn và virus ở mức cơ bản.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 722,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q002",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Vi khuẩn và virus'?",
    "options": [
      {
        "key": "A",
        "text": "Nêu vai trò có ích/có hại."
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nêu vai trò có ích/có hại.",
    "explanationSimple": "Bài này hướng tới: Nêu vai trò có ích/có hại.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 723,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q003",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Vi khuẩn và virus'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần quan sát"
      },
      {
        "key": "B",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "C",
        "text": "Chọn cách phòng bệnh phù hợp."
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chọn cách phòng bệnh phù hợp.",
    "explanationSimple": "Bài này hướng tới: Chọn cách phòng bệnh phù hợp.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 724,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q004",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Vi khuẩn và virus'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Không phải mọi vi khuẩn đều có hại."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Không phải mọi vi khuẩn đều có hại.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 725,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q005",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Vi khuẩn và virus'?",
    "options": [
      {
        "key": "A",
        "text": "Vi khuẩn là sinh vật rất nhỏ, có loại có ích và có loại gây bệnh."
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Tự dùng thuốc khi chưa có hướng dẫn."
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Vi khuẩn là sinh vật rất nhỏ, có loại có ích và có loại gây bệnh.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 726,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q006",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Vi khuẩn và virus'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm virus với vi khuẩn."
      },
      {
        "key": "B",
        "text": "Cho rằng mọi vi khuẩn đều có hại."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Không phải mọi vi khuẩn đều có hại."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Không phải mọi vi khuẩn đều có hại.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 727,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q007",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Vi khuẩn và virus'?",
    "options": [
      {
        "key": "A",
        "text": "Virus rất nhỏ, chưa có cấu tạo tế bào hoàn chỉnh và chỉ nhân lên trong tế bào sống."
      },
      {
        "key": "B",
        "text": "Nhầm virus với vi khuẩn."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Virus rất nhỏ, chưa có cấu tạo tế bào hoàn chỉnh và chỉ nhân lên trong tế bào sống.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 728,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q008",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Vi khuẩn và virus'?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "B",
        "text": "Virus rất nhỏ, chưa có cấu tạo tế bào hoàn chỉnh và chỉ nhân lên trong tế bào sống."
      },
      {
        "key": "C",
        "text": "Cho rằng mọi vi khuẩn đều có hại."
      },
      {
        "key": "D",
        "text": "Tự dùng thuốc khi chưa có hướng dẫn."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Virus rất nhỏ, chưa có cấu tạo tế bào hoàn chỉnh và chỉ nhân lên trong tế bào sống.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 729,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q009",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Vi khuẩn và virus'?",
    "options": [
      {
        "key": "A",
        "text": "Không phải mọi vi khuẩn đều có hại."
      },
      {
        "key": "B",
        "text": "Cho rằng mọi vi khuẩn đều có hại."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Tự dùng thuốc khi chưa có hướng dẫn."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Không phải mọi vi khuẩn đều có hại.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 730,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q010",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Vi khuẩn và virus'?",
    "options": [
      {
        "key": "A",
        "text": "Cho rằng mọi vi khuẩn đều có hại."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Tự dùng thuốc khi chưa có hướng dẫn."
      },
      {
        "key": "D",
        "text": "Vi khuẩn là sinh vật rất nhỏ, có loại có ích và có loại gây bệnh."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Vi khuẩn là sinh vật rất nhỏ, có loại có ích và có loại gây bệnh.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 731,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q011",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'bacteria'?",
    "options": [
      {
        "key": "A",
        "text": "vi khuẩn"
      },
      {
        "key": "B",
        "text": "tiêu bản"
      },
      {
        "key": "C",
        "text": "bảo hộ"
      },
      {
        "key": "D",
        "text": "vệ tinh"
      }
    ],
    "correctAnswer": "A",
    "answerText": "vi khuẩn",
    "explanationSimple": "'vi khuẩn' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 732,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q012",
    "lessonId": 19,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'virus' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "virus",
    "answerText": "virus",
    "explanationSimple": "'virus' tương ứng với 'virus' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 733,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q013",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'cause disease'?",
    "options": [
      {
        "key": "A",
        "text": "vật thể"
      },
      {
        "key": "B",
        "text": "tế bào"
      },
      {
        "key": "C",
        "text": "gây bệnh"
      },
      {
        "key": "D",
        "text": "thực phẩm"
      }
    ],
    "correctAnswer": "C",
    "answerText": "gây bệnh",
    "explanationSimple": "'gây bệnh' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 734,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q014",
    "lessonId": 19,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'hygiene' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "vệ sinh",
    "answerText": "vệ sinh",
    "explanationSimple": "'hygiene' tương ứng với 'vệ sinh' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 735,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q015",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'vaccination'?",
    "options": [
      {
        "key": "A",
        "text": "sự cố"
      },
      {
        "key": "B",
        "text": "công dụng"
      },
      {
        "key": "C",
        "text": "tiêm phòng"
      },
      {
        "key": "D",
        "text": "biến đổi"
      }
    ],
    "correctAnswer": "C",
    "answerText": "tiêm phòng",
    "explanationSimple": "'tiêm phòng' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 736,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q016",
    "lessonId": 19,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Vi khuẩn và virus'.",
    "options": null,
    "correctAnswer": "tiêm phòng",
    "answerText": "tiêm phòng",
    "explanationSimple": "Một từ khóa đúng là 'tiêm phòng'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 737,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q017",
    "lessonId": 19,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Vi khuẩn và virus'.",
    "options": null,
    "correctAnswer": "virus",
    "answerText": "virus",
    "explanationSimple": "Một từ khóa đúng là 'virus'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 738,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q018",
    "lessonId": 19,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Vi khuẩn và virus'.",
    "options": null,
    "correctAnswer": "vệ sinh",
    "answerText": "vệ sinh",
    "explanationSimple": "Một từ khóa đúng là 'vệ sinh'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 739,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q019",
    "lessonId": 19,
    "questionType": "true_false",
    "questionText": "Vi khuẩn là sinh vật rất nhỏ, có loại có ích và có loại gây bệnh.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 740,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q020",
    "lessonId": 19,
    "questionType": "true_false",
    "questionText": "Virus rất nhỏ, chưa có cấu tạo tế bào hoàn chỉnh và chỉ nhân lên trong tế bào sống.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 741,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q021",
    "lessonId": 19,
    "questionType": "true_false",
    "questionText": "Không phải mọi vi khuẩn đều có hại.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 742,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q022",
    "lessonId": 19,
    "questionType": "true_false",
    "questionText": "Phòng bệnh cần giữ vệ sinh, ăn uống an toàn, tiêm phòng khi phù hợp và nghe hướng dẫn y tế.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 743,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q023",
    "lessonId": 19,
    "questionType": "true_false",
    "questionText": "Cho rằng mọi vi khuẩn đều có hại.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 744,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q024",
    "lessonId": 19,
    "questionType": "true_false",
    "questionText": "Nhầm virus với vi khuẩn.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 745,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q025",
    "lessonId": 19,
    "questionType": "true_false",
    "questionText": "Tự dùng thuốc khi chưa có hướng dẫn.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 746,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q026",
    "lessonId": 19,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vi khuẩn và virus', hãy nêu một thuật ngữ liên quan đến ý: Phòng bệnh cần giữ vệ sinh, ăn uống an toàn, tiêm phòng khi phù hợp và nghe hướng dẫn y tế.",
    "options": null,
    "correctAnswer": "virus",
    "answerText": "virus",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'virus' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 747,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q027",
    "lessonId": 19,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vi khuẩn và virus', hãy nêu một thuật ngữ liên quan đến ý: Không phải mọi vi khuẩn đều có hại.",
    "options": null,
    "correctAnswer": "virus",
    "answerText": "virus",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'virus' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 748,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q028",
    "lessonId": 19,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vi khuẩn và virus', hãy nêu một thuật ngữ liên quan đến ý: Không phải mọi vi khuẩn đều có hại.",
    "options": null,
    "correctAnswer": "tiêm phòng",
    "answerText": "tiêm phòng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tiêm phòng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 749,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q029",
    "lessonId": 19,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vi khuẩn và virus', hãy nêu một thuật ngữ liên quan đến ý: Vi khuẩn là sinh vật rất nhỏ, có loại có ích và có loại gây bệnh.",
    "options": null,
    "correctAnswer": "tiêm phòng",
    "answerText": "tiêm phòng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tiêm phòng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 750,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q030",
    "lessonId": 19,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vi khuẩn và virus', hãy nêu một thuật ngữ liên quan đến ý: Không phải mọi vi khuẩn đều có hại.",
    "options": null,
    "correctAnswer": "vi khuẩn",
    "answerText": "vi khuẩn",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vi khuẩn' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 751,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q031",
    "lessonId": 19,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vi khuẩn và virus', hãy nêu một thuật ngữ liên quan đến ý: Virus rất nhỏ, chưa có cấu tạo tế bào hoàn chỉnh và chỉ nhân lên trong tế bào sống.",
    "options": null,
    "correctAnswer": "vệ sinh",
    "answerText": "vệ sinh",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vệ sinh' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 752,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q032",
    "lessonId": 19,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vi khuẩn và virus', hãy nêu một thuật ngữ liên quan đến ý: Vi khuẩn là sinh vật rất nhỏ, có loại có ích và có loại gây bệnh.",
    "options": null,
    "correctAnswer": "tiêm phòng",
    "answerText": "tiêm phòng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tiêm phòng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 753,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q033",
    "lessonId": 19,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vi khuẩn và virus', hãy nêu một thuật ngữ liên quan đến ý: Vi khuẩn là sinh vật rất nhỏ, có loại có ích và có loại gây bệnh.",
    "options": null,
    "correctAnswer": "tiêm phòng",
    "answerText": "tiêm phòng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tiêm phòng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 754,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q034",
    "lessonId": 19,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Vi khuẩn và virus', hãy nêu một thuật ngữ liên quan đến ý: Không phải mọi vi khuẩn đều có hại.",
    "options": null,
    "correctAnswer": "vệ sinh",
    "answerText": "vệ sinh",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vệ sinh' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 755,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q035",
    "lessonId": 19,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Vi khuẩn và virus', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Nhầm virus với vi khuẩn."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Virus rất nhỏ, chưa có cấu tạo tế bào hoàn chỉnh và chỉ nhân lên trong tế bào sống."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Virus rất nhỏ, chưa có cấu tạo tế bào hoàn chỉnh và chỉ nhân lên trong tế bào sống.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 756,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q036",
    "lessonId": 19,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Vi khuẩn và virus', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Cho rằng mọi vi khuẩn đều có hại."
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 757,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q037",
    "lessonId": 19,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Một số virus gây bệnh đường hô hấp.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Nhầm virus với vi khuẩn."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Phòng bệnh cần giữ vệ sinh, ăn uống an toàn, tiêm phòng khi phù hợp và nghe hướng dẫn y tế."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Phòng bệnh cần giữ vệ sinh, ăn uống an toàn, tiêm phòng khi phù hợp và nghe hướng dẫn y tế.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 758,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q038",
    "lessonId": 19,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Vi khuẩn và virus', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Cho rằng mọi vi khuẩn đều có hại."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 759,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q039",
    "lessonId": 19,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Vi khuẩn lactic dùng làm sữa chua.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Phòng bệnh cần giữ vệ sinh, ăn uống an toàn, tiêm phòng khi phù hợp và nghe hướng dẫn y tế."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Nhầm virus với vi khuẩn."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Phòng bệnh cần giữ vệ sinh, ăn uống an toàn, tiêm phòng khi phù hợp và nghe hướng dẫn y tế.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 760,
    "sourceId": "sci6-b2-l19-vi-khuan-va-virus-q040",
    "lessonId": 19,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Vi khuẩn lactic dùng làm sữa chua.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Tự dùng thuốc khi chưa có hướng dẫn."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 761,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q001",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Nguyên sinh vật và nấm'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Không cần quan sát"
      },
      {
        "key": "C",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "D",
        "text": "Nhận biết nguyên sinh vật và nấm."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nhận biết nguyên sinh vật và nấm.",
    "explanationSimple": "Bài này hướng tới: Nhận biết nguyên sinh vật và nấm.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 762,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q002",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Nguyên sinh vật và nấm'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "B",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "C",
        "text": "Nêu vai trò lợi/hại."
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nêu vai trò lợi/hại.",
    "explanationSimple": "Bài này hướng tới: Nêu vai trò lợi/hại.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 763,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q003",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Nguyên sinh vật và nấm'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Biết lưu ý an toàn với nấm và thực phẩm mốc."
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Biết lưu ý an toàn với nấm và thực phẩm mốc.",
    "explanationSimple": "Bài này hướng tới: Biết lưu ý an toàn với nấm và thực phẩm mốc.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 764,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q004",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nguyên sinh vật và nấm'?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "B",
        "text": "Không ăn nấm lạ ngoài tự nhiên khi không có chuyên gia xác định."
      },
      {
        "key": "C",
        "text": "Ăn nấm lạ."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Không ăn nấm lạ ngoài tự nhiên khi không có chuyên gia xác định.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 765,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q005",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nguyên sinh vật và nấm'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Nguyên sinh vật thường sống ở môi trường nước hoặc ẩm, có loài có ích và có loài gây bệnh."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Cho rằng nấm là thực vật."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nguyên sinh vật thường sống ở môi trường nước hoặc ẩm, có loài có ích và có loài gây bệnh.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 766,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q006",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nguyên sinh vật và nấm'?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "B",
        "text": "Cho rằng nấm là thực vật."
      },
      {
        "key": "C",
        "text": "Nấm gồm nấm men, nấm mốc, nấm lớn."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nấm gồm nấm men, nấm mốc, nấm lớn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 767,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q007",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nguyên sinh vật và nấm'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Nguyên sinh vật thường sống ở môi trường nước hoặc ẩm, có loài có ích và có loài gây bệnh."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Cho rằng nấm là thực vật."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nguyên sinh vật thường sống ở môi trường nước hoặc ẩm, có loài có ích và có loài gây bệnh.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 768,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q008",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nguyên sinh vật và nấm'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Cho rằng nấm là thực vật."
      },
      {
        "key": "D",
        "text": "Nấm có vai trò phân giải, làm thực phẩm, lên men nhưng cũng có thể gây bệnh hoặc làm hỏng thức ăn."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nấm có vai trò phân giải, làm thực phẩm, lên men nhưng cũng có thể gây bệnh hoặc làm hỏng thức ăn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 769,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q009",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nguyên sinh vật và nấm'?",
    "options": [
      {
        "key": "A",
        "text": "Ăn nấm lạ."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Nguyên sinh vật thường sống ở môi trường nước hoặc ẩm, có loài có ích và có loài gây bệnh."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nguyên sinh vật thường sống ở môi trường nước hoặc ẩm, có loài có ích và có loài gây bệnh.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 770,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q010",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nguyên sinh vật và nấm'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Không ăn nấm lạ ngoài tự nhiên khi không có chuyên gia xác định."
      },
      {
        "key": "C",
        "text": "Ăn nấm lạ."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Không ăn nấm lạ ngoài tự nhiên khi không có chuyên gia xác định.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 771,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q011",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'protist'?",
    "options": [
      {
        "key": "A",
        "text": "thế năng"
      },
      {
        "key": "B",
        "text": "nguyên sinh vật"
      },
      {
        "key": "C",
        "text": "nhiệt độ"
      },
      {
        "key": "D",
        "text": "kim loại"
      }
    ],
    "correctAnswer": "B",
    "answerText": "nguyên sinh vật",
    "explanationSimple": "'nguyên sinh vật' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 772,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q012",
    "lessonId": 20,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'fungus' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "nấm",
    "answerText": "nấm",
    "explanationSimple": "'fungus' tương ứng với 'nấm' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 773,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q013",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'yeast'?",
    "options": [
      {
        "key": "A",
        "text": "chuyên hóa"
      },
      {
        "key": "B",
        "text": "nấm men"
      },
      {
        "key": "C",
        "text": "khóa lưỡng phân"
      },
      {
        "key": "D",
        "text": "hệ cơ quan"
      }
    ],
    "correctAnswer": "B",
    "answerText": "nấm men",
    "explanationSimple": "'nấm men' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 774,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q014",
    "lessonId": 20,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'mold' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "nấm mốc",
    "answerText": "nấm mốc",
    "explanationSimple": "'mold' tương ứng với 'nấm mốc' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 775,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q015",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'decomposition'?",
    "options": [
      {
        "key": "A",
        "text": "màng tế bào"
      },
      {
        "key": "B",
        "text": "virus"
      },
      {
        "key": "C",
        "text": "thành tế bào"
      },
      {
        "key": "D",
        "text": "phân giải"
      }
    ],
    "correctAnswer": "D",
    "answerText": "phân giải",
    "explanationSimple": "'phân giải' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 776,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q016",
    "lessonId": 20,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Nguyên sinh vật và nấm'.",
    "options": null,
    "correctAnswer": "nấm",
    "answerText": "nấm",
    "explanationSimple": "Một từ khóa đúng là 'nấm'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 777,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q017",
    "lessonId": 20,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Nguyên sinh vật và nấm'.",
    "options": null,
    "correctAnswer": "nấm men",
    "answerText": "nấm men",
    "explanationSimple": "Một từ khóa đúng là 'nấm men'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 778,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q018",
    "lessonId": 20,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Nguyên sinh vật và nấm'.",
    "options": null,
    "correctAnswer": "nấm",
    "answerText": "nấm",
    "explanationSimple": "Một từ khóa đúng là 'nấm'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 779,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q019",
    "lessonId": 20,
    "questionType": "true_false",
    "questionText": "Nguyên sinh vật thường sống ở môi trường nước hoặc ẩm, có loài có ích và có loài gây bệnh.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 780,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q020",
    "lessonId": 20,
    "questionType": "true_false",
    "questionText": "Nấm gồm nấm men, nấm mốc, nấm lớn.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 781,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q021",
    "lessonId": 20,
    "questionType": "true_false",
    "questionText": "Nấm có vai trò phân giải, làm thực phẩm, lên men nhưng cũng có thể gây bệnh hoặc làm hỏng thức ăn.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 782,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q022",
    "lessonId": 20,
    "questionType": "true_false",
    "questionText": "Không ăn nấm lạ ngoài tự nhiên khi không có chuyên gia xác định.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 783,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q023",
    "lessonId": 20,
    "questionType": "true_false",
    "questionText": "Ăn nấm lạ.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 784,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q024",
    "lessonId": 20,
    "questionType": "true_false",
    "questionText": "Cho rằng nấm là thực vật.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 785,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q025",
    "lessonId": 20,
    "questionType": "true_false",
    "questionText": "Dùng thực phẩm mốc vì nghĩ cắt bỏ phần mốc là đủ an toàn.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 786,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q026",
    "lessonId": 20,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên sinh vật và nấm', hãy nêu một thuật ngữ liên quan đến ý: Không ăn nấm lạ ngoài tự nhiên khi không có chuyên gia xác định.",
    "options": null,
    "correctAnswer": "nấm",
    "answerText": "nấm",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nấm' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 787,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q027",
    "lessonId": 20,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên sinh vật và nấm', hãy nêu một thuật ngữ liên quan đến ý: Không ăn nấm lạ ngoài tự nhiên khi không có chuyên gia xác định.",
    "options": null,
    "correctAnswer": "nấm men",
    "answerText": "nấm men",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nấm men' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 788,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q028",
    "lessonId": 20,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên sinh vật và nấm', hãy nêu một thuật ngữ liên quan đến ý: Nguyên sinh vật thường sống ở môi trường nước hoặc ẩm, có loài có ích và có loài gây bệnh.",
    "options": null,
    "correctAnswer": "phân giải",
    "answerText": "phân giải",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'phân giải' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 789,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q029",
    "lessonId": 20,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên sinh vật và nấm', hãy nêu một thuật ngữ liên quan đến ý: Nấm gồm nấm men, nấm mốc, nấm lớn.",
    "options": null,
    "correctAnswer": "phân giải",
    "answerText": "phân giải",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'phân giải' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 790,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q030",
    "lessonId": 20,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên sinh vật và nấm', hãy nêu một thuật ngữ liên quan đến ý: Nấm gồm nấm men, nấm mốc, nấm lớn.",
    "options": null,
    "correctAnswer": "phân giải",
    "answerText": "phân giải",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'phân giải' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 791,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q031",
    "lessonId": 20,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên sinh vật và nấm', hãy nêu một thuật ngữ liên quan đến ý: Nấm có vai trò phân giải, làm thực phẩm, lên men nhưng cũng có thể gây bệnh hoặc làm hỏng thức ăn.",
    "options": null,
    "correctAnswer": "nấm",
    "answerText": "nấm",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nấm' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 792,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q032",
    "lessonId": 20,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên sinh vật và nấm', hãy nêu một thuật ngữ liên quan đến ý: Không ăn nấm lạ ngoài tự nhiên khi không có chuyên gia xác định.",
    "options": null,
    "correctAnswer": "nấm men",
    "answerText": "nấm men",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nấm men' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 793,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q033",
    "lessonId": 20,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên sinh vật và nấm', hãy nêu một thuật ngữ liên quan đến ý: Nguyên sinh vật thường sống ở môi trường nước hoặc ẩm, có loài có ích và có loài gây bệnh.",
    "options": null,
    "correctAnswer": "nấm mốc",
    "answerText": "nấm mốc",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nấm mốc' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 794,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q034",
    "lessonId": 20,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Nguyên sinh vật và nấm', hãy nêu một thuật ngữ liên quan đến ý: Nấm có vai trò phân giải, làm thực phẩm, lên men nhưng cũng có thể gây bệnh hoặc làm hỏng thức ăn.",
    "options": null,
    "correctAnswer": "nấm",
    "answerText": "nấm",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nấm' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 795,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q035",
    "lessonId": 20,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Nấm men dùng làm bánh mì.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Cho rằng nấm là thực vật."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Nấm có vai trò phân giải, làm thực phẩm, lên men nhưng cũng có thể gây bệnh hoặc làm hỏng thức ăn."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nấm có vai trò phân giải, làm thực phẩm, lên men nhưng cũng có thể gây bệnh hoặc làm hỏng thức ăn.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 796,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q036",
    "lessonId": 20,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Nấm mốc có thể làm hỏng thức ăn.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Cho rằng nấm là thực vật."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 797,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q037",
    "lessonId": 20,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Nấm mốc có thể làm hỏng thức ăn.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Nấm gồm nấm men, nấm mốc, nấm lớn."
      },
      {
        "key": "C",
        "text": "Cho rằng nấm là thực vật."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nấm gồm nấm men, nấm mốc, nấm lớn.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 798,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q038",
    "lessonId": 20,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Nấm men dùng làm bánh mì.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Ăn nấm lạ."
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 799,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q039",
    "lessonId": 20,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Nguyên sinh vật và nấm', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Cho rằng nấm là thực vật."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Không ăn nấm lạ ngoài tự nhiên khi không có chuyên gia xác định."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Không ăn nấm lạ ngoài tự nhiên khi không có chuyên gia xác định.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 800,
    "sourceId": "sci6-b2-l20-nguyen-sinh-vat-va-nam-q040",
    "lessonId": 20,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Nấm men dùng làm bánh mì.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Dùng thực phẩm mốc vì nghĩ cắt bỏ phần mốc là đủ an toàn."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 801,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q001",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Thực vật, động vật và đa dạng sinh học'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Nêu vai trò của thực vật/động vật."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nêu vai trò của thực vật/động vật.",
    "explanationSimple": "Bài này hướng tới: Nêu vai trò của thực vật/động vật.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 802,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q002",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Thực vật, động vật và đa dạng sinh học'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "B",
        "text": "Không cần quan sát"
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Hiểu đa dạng sinh học."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Hiểu đa dạng sinh học.",
    "explanationSimple": "Bài này hướng tới: Hiểu đa dạng sinh học.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 803,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q003",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Thực vật, động vật và đa dạng sinh học'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "B",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "C",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "D",
        "text": "Chọn hành động bảo vệ sinh vật."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Chọn hành động bảo vệ sinh vật.",
    "explanationSimple": "Bài này hướng tới: Chọn hành động bảo vệ sinh vật.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 804,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q004",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Thực vật, động vật và đa dạng sinh học'?",
    "options": [
      {
        "key": "A",
        "text": "Đa dạng sinh học là sự phong phú về loài, hệ sinh thái và nguồn gen."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Xem loài nhỏ là không có vai trò."
      },
      {
        "key": "D",
        "text": "Chỉ loài quý hiếm mới cần bảo vệ."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Đa dạng sinh học là sự phong phú về loài, hệ sinh thái và nguồn gen.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 805,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q005",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Thực vật, động vật và đa dạng sinh học'?",
    "options": [
      {
        "key": "A",
        "text": "Thả sinh vật ngoại lai bừa bãi."
      },
      {
        "key": "B",
        "text": "Đa dạng sinh học là sự phong phú về loài, hệ sinh thái và nguồn gen."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Xem loài nhỏ là không có vai trò."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Đa dạng sinh học là sự phong phú về loài, hệ sinh thái và nguồn gen.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 806,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q006",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Thực vật, động vật và đa dạng sinh học'?",
    "options": [
      {
        "key": "A",
        "text": "Xem loài nhỏ là không có vai trò."
      },
      {
        "key": "B",
        "text": "Thực vật cung cấp oxygen, thức ăn, nơi sống và góp phần cân bằng môi trường."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Thực vật cung cấp oxygen, thức ăn, nơi sống và góp phần cân bằng môi trường.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 807,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q007",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Thực vật, động vật và đa dạng sinh học'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Đa dạng sinh học là sự phong phú về loài, hệ sinh thái và nguồn gen."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Thả sinh vật ngoại lai bừa bãi."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Đa dạng sinh học là sự phong phú về loài, hệ sinh thái và nguồn gen.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 808,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q008",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Thực vật, động vật và đa dạng sinh học'?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "B",
        "text": "Xem loài nhỏ là không có vai trò."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Động vật đa dạng về cấu tạo, môi trường sống, cách di chuyển và dinh dưỡng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Động vật đa dạng về cấu tạo, môi trường sống, cách di chuyển và dinh dưỡng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 809,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q009",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Thực vật, động vật và đa dạng sinh học'?",
    "options": [
      {
        "key": "A",
        "text": "Thả sinh vật ngoại lai bừa bãi."
      },
      {
        "key": "B",
        "text": "Động vật đa dạng về cấu tạo, môi trường sống, cách di chuyển và dinh dưỡng."
      },
      {
        "key": "C",
        "text": "Xem loài nhỏ là không có vai trò."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Động vật đa dạng về cấu tạo, môi trường sống, cách di chuyển và dinh dưỡng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 810,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q010",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Thực vật, động vật và đa dạng sinh học'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Thả sinh vật ngoại lai bừa bãi."
      },
      {
        "key": "D",
        "text": "Thực vật cung cấp oxygen, thức ăn, nơi sống và góp phần cân bằng môi trường."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Thực vật cung cấp oxygen, thức ăn, nơi sống và góp phần cân bằng môi trường.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 811,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q011",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'plant'?",
    "options": [
      {
        "key": "A",
        "text": "ngưng tụ"
      },
      {
        "key": "B",
        "text": "Mặt Trời"
      },
      {
        "key": "C",
        "text": "đẩy"
      },
      {
        "key": "D",
        "text": "thực vật"
      }
    ],
    "correctAnswer": "D",
    "answerText": "thực vật",
    "explanationSimple": "'thực vật' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 812,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q012",
    "lessonId": 21,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'animal' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "động vật",
    "answerText": "động vật",
    "explanationSimple": "'animal' tương ứng với 'động vật' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 813,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q013",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'biodiversity'?",
    "options": [
      {
        "key": "A",
        "text": "cháy nổ"
      },
      {
        "key": "B",
        "text": "dự đoán"
      },
      {
        "key": "C",
        "text": "đa dạng sinh học"
      },
      {
        "key": "D",
        "text": "newton"
      }
    ],
    "correctAnswer": "C",
    "answerText": "đa dạng sinh học",
    "explanationSimple": "'đa dạng sinh học' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 814,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q014",
    "lessonId": 21,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'ecosystem' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "hệ sinh thái",
    "answerText": "hệ sinh thái",
    "explanationSimple": "'ecosystem' tương ứng với 'hệ sinh thái' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 815,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q015",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'protect'?",
    "options": [
      {
        "key": "A",
        "text": "cơ thể sống"
      },
      {
        "key": "B",
        "text": "biến dạng"
      },
      {
        "key": "C",
        "text": "bảo vệ"
      },
      {
        "key": "D",
        "text": "lương thực"
      }
    ],
    "correctAnswer": "C",
    "answerText": "bảo vệ",
    "explanationSimple": "'bảo vệ' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 816,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q016",
    "lessonId": 21,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Thực vật, động vật và đa dạng sinh học'.",
    "options": null,
    "correctAnswer": "thực vật",
    "answerText": "thực vật",
    "explanationSimple": "Một từ khóa đúng là 'thực vật'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 817,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q017",
    "lessonId": 21,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Thực vật, động vật và đa dạng sinh học'.",
    "options": null,
    "correctAnswer": "đa dạng sinh học",
    "answerText": "đa dạng sinh học",
    "explanationSimple": "Một từ khóa đúng là 'đa dạng sinh học'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 818,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q018",
    "lessonId": 21,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Thực vật, động vật và đa dạng sinh học'.",
    "options": null,
    "correctAnswer": "bảo vệ",
    "answerText": "bảo vệ",
    "explanationSimple": "Một từ khóa đúng là 'bảo vệ'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 819,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q019",
    "lessonId": 21,
    "questionType": "true_false",
    "questionText": "Thực vật cung cấp oxygen, thức ăn, nơi sống và góp phần cân bằng môi trường.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 820,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q020",
    "lessonId": 21,
    "questionType": "true_false",
    "questionText": "Động vật đa dạng về cấu tạo, môi trường sống, cách di chuyển và dinh dưỡng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 821,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q021",
    "lessonId": 21,
    "questionType": "true_false",
    "questionText": "Đa dạng sinh học là sự phong phú về loài, hệ sinh thái và nguồn gen.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 822,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q022",
    "lessonId": 21,
    "questionType": "true_false",
    "questionText": "Bảo vệ đa dạng sinh học giúp giữ cân bằng tự nhiên và lợi ích lâu dài cho con người.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 823,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q023",
    "lessonId": 21,
    "questionType": "true_false",
    "questionText": "Chỉ loài quý hiếm mới cần bảo vệ.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 824,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q024",
    "lessonId": 21,
    "questionType": "true_false",
    "questionText": "Xem loài nhỏ là không có vai trò.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 825,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q025",
    "lessonId": 21,
    "questionType": "true_false",
    "questionText": "Thả sinh vật ngoại lai bừa bãi.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 826,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q026",
    "lessonId": 21,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Thực vật, động vật và đa dạng sinh học', hãy nêu một thuật ngữ liên quan đến ý: Bảo vệ đa dạng sinh học giúp giữ cân bằng tự nhiên và lợi ích lâu dài cho con người.",
    "options": null,
    "correctAnswer": "đa dạng sinh học",
    "answerText": "đa dạng sinh học",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'đa dạng sinh học' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 827,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q027",
    "lessonId": 21,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Thực vật, động vật và đa dạng sinh học', hãy nêu một thuật ngữ liên quan đến ý: Đa dạng sinh học là sự phong phú về loài, hệ sinh thái và nguồn gen.",
    "options": null,
    "correctAnswer": "thực vật",
    "answerText": "thực vật",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thực vật' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 828,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q028",
    "lessonId": 21,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Thực vật, động vật và đa dạng sinh học', hãy nêu một thuật ngữ liên quan đến ý: Thực vật cung cấp oxygen, thức ăn, nơi sống và góp phần cân bằng môi trường.",
    "options": null,
    "correctAnswer": "thực vật",
    "answerText": "thực vật",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thực vật' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 829,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q029",
    "lessonId": 21,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Thực vật, động vật và đa dạng sinh học', hãy nêu một thuật ngữ liên quan đến ý: Bảo vệ đa dạng sinh học giúp giữ cân bằng tự nhiên và lợi ích lâu dài cho con người.",
    "options": null,
    "correctAnswer": "động vật",
    "answerText": "động vật",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'động vật' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 830,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q030",
    "lessonId": 21,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Thực vật, động vật và đa dạng sinh học', hãy nêu một thuật ngữ liên quan đến ý: Thực vật cung cấp oxygen, thức ăn, nơi sống và góp phần cân bằng môi trường.",
    "options": null,
    "correctAnswer": "động vật",
    "answerText": "động vật",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'động vật' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 831,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q031",
    "lessonId": 21,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Thực vật, động vật và đa dạng sinh học', hãy nêu một thuật ngữ liên quan đến ý: Động vật đa dạng về cấu tạo, môi trường sống, cách di chuyển và dinh dưỡng.",
    "options": null,
    "correctAnswer": "hệ sinh thái",
    "answerText": "hệ sinh thái",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'hệ sinh thái' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 832,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q032",
    "lessonId": 21,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Thực vật, động vật và đa dạng sinh học', hãy nêu một thuật ngữ liên quan đến ý: Động vật đa dạng về cấu tạo, môi trường sống, cách di chuyển và dinh dưỡng.",
    "options": null,
    "correctAnswer": "bảo vệ",
    "answerText": "bảo vệ",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'bảo vệ' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 833,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q033",
    "lessonId": 21,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Thực vật, động vật và đa dạng sinh học', hãy nêu một thuật ngữ liên quan đến ý: Thực vật cung cấp oxygen, thức ăn, nơi sống và góp phần cân bằng môi trường.",
    "options": null,
    "correctAnswer": "thực vật",
    "answerText": "thực vật",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thực vật' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 834,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q034",
    "lessonId": 21,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Thực vật, động vật và đa dạng sinh học', hãy nêu một thuật ngữ liên quan đến ý: Đa dạng sinh học là sự phong phú về loài, hệ sinh thái và nguồn gen.",
    "options": null,
    "correctAnswer": "bảo vệ",
    "answerText": "bảo vệ",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'bảo vệ' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 835,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q035",
    "lessonId": 21,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Rừng là nơi sống của nhiều loài.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Chỉ loài quý hiếm mới cần bảo vệ."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Động vật đa dạng về cấu tạo, môi trường sống, cách di chuyển và dinh dưỡng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Động vật đa dạng về cấu tạo, môi trường sống, cách di chuyển và dinh dưỡng.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 836,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q036",
    "lessonId": 21,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Thực vật, động vật và đa dạng sinh học', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Thả sinh vật ngoại lai bừa bãi."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 837,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q037",
    "lessonId": 21,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Ong giúp thụ phấn cho cây.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Thực vật cung cấp oxygen, thức ăn, nơi sống và góp phần cân bằng môi trường."
      },
      {
        "key": "D",
        "text": "Chỉ loài quý hiếm mới cần bảo vệ."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Thực vật cung cấp oxygen, thức ăn, nơi sống và góp phần cân bằng môi trường.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 838,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q038",
    "lessonId": 21,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Thực vật, động vật và đa dạng sinh học', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Thả sinh vật ngoại lai bừa bãi."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 839,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q039",
    "lessonId": 21,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Rừng là nơi sống của nhiều loài.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Thực vật cung cấp oxygen, thức ăn, nơi sống và góp phần cân bằng môi trường."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Thả sinh vật ngoại lai bừa bãi."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Thực vật cung cấp oxygen, thức ăn, nơi sống và góp phần cân bằng môi trường.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 840,
    "sourceId": "sci6-b2-l21-thuc-vat-dong-vat-va-da-dang-sinh-hoc-q040",
    "lessonId": 21,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Rừng là nơi sống của nhiều loài.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Xem loài nhỏ là không có vai trò."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 841,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q001",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Lực và tác dụng của lực'?",
    "options": [
      {
        "key": "A",
        "text": "Hiểu lực là gì."
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Hiểu lực là gì.",
    "explanationSimple": "Bài này hướng tới: Hiểu lực là gì.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 842,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q002",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Lực và tác dụng của lực'?",
    "options": [
      {
        "key": "A",
        "text": "Nhận biết tác dụng của lực."
      },
      {
        "key": "B",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "C",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nhận biết tác dụng của lực.",
    "explanationSimple": "Bài này hướng tới: Nhận biết tác dụng của lực.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 843,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q003",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Lực và tác dụng của lực'?",
    "options": [
      {
        "key": "A",
        "text": "Biểu diễn lực ở mức đơn giản."
      },
      {
        "key": "B",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Biểu diễn lực ở mức đơn giản.",
    "explanationSimple": "Bài này hướng tới: Biểu diễn lực ở mức đơn giản.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 844,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q004",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lực và tác dụng của lực'?",
    "options": [
      {
        "key": "A",
        "text": "Lực là tác dụng đẩy hoặc kéo của vật này lên vật khác."
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Chỉ nghĩ có lực khi vật chuyển động."
      },
      {
        "key": "D",
        "text": "Vẽ mũi tên lực sai điểm đặt."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Lực là tác dụng đẩy hoặc kéo của vật này lên vật khác.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 845,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q005",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lực và tác dụng của lực'?",
    "options": [
      {
        "key": "A",
        "text": "Không phân biệt phương và chiều."
      },
      {
        "key": "B",
        "text": "Vẽ mũi tên lực sai điểm đặt."
      },
      {
        "key": "C",
        "text": "Lực được biểu diễn bằng mũi tên có điểm đặt, phương, chiều và độ lớn tương đối."
      },
      {
        "key": "D",
        "text": "Chỉ nghĩ có lực khi vật chuyển động."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Lực được biểu diễn bằng mũi tên có điểm đặt, phương, chiều và độ lớn tương đối.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 846,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q006",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lực và tác dụng của lực'?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Không phân biệt phương và chiều."
      },
      {
        "key": "D",
        "text": "Đơn vị lực là newton, kí hiệu N."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Đơn vị lực là newton, kí hiệu N.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 847,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q007",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lực và tác dụng của lực'?",
    "options": [
      {
        "key": "A",
        "text": "Vẽ mũi tên lực sai điểm đặt."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Lực là tác dụng đẩy hoặc kéo của vật này lên vật khác."
      },
      {
        "key": "D",
        "text": "Chỉ nghĩ có lực khi vật chuyển động."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Lực là tác dụng đẩy hoặc kéo của vật này lên vật khác.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 848,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q008",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lực và tác dụng của lực'?",
    "options": [
      {
        "key": "A",
        "text": "Không phân biệt phương và chiều."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Lực là tác dụng đẩy hoặc kéo của vật này lên vật khác."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Lực là tác dụng đẩy hoặc kéo của vật này lên vật khác.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 849,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q009",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lực và tác dụng của lực'?",
    "options": [
      {
        "key": "A",
        "text": "Vẽ mũi tên lực sai điểm đặt."
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Lực được biểu diễn bằng mũi tên có điểm đặt, phương, chiều và độ lớn tương đối."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Lực được biểu diễn bằng mũi tên có điểm đặt, phương, chiều và độ lớn tương đối.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 850,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q010",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lực và tác dụng của lực'?",
    "options": [
      {
        "key": "A",
        "text": "Không phân biệt phương và chiều."
      },
      {
        "key": "B",
        "text": "Lực có thể làm vật thay đổi tốc độ, hướng chuyển động hoặc biến dạng."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Chỉ nghĩ có lực khi vật chuyển động."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Lực có thể làm vật thay đổi tốc độ, hướng chuyển động hoặc biến dạng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 851,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q011",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'force'?",
    "options": [
      {
        "key": "A",
        "text": "tiết kiệm"
      },
      {
        "key": "B",
        "text": "lực"
      },
      {
        "key": "C",
        "text": "thiên hà"
      },
      {
        "key": "D",
        "text": "lương thực"
      }
    ],
    "correctAnswer": "B",
    "answerText": "lực",
    "explanationSimple": "'lực' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 852,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q012",
    "lessonId": 22,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'push' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "đẩy",
    "answerText": "đẩy",
    "explanationSimple": "'push' tương ứng với 'đẩy' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 853,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q013",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'pull'?",
    "options": [
      {
        "key": "A",
        "text": "kéo"
      },
      {
        "key": "B",
        "text": "Mặt Trăng"
      },
      {
        "key": "C",
        "text": "dung môi"
      },
      {
        "key": "D",
        "text": "Mặt Trời"
      }
    ],
    "correctAnswer": "A",
    "answerText": "kéo",
    "explanationSimple": "'kéo' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 854,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q014",
    "lessonId": 22,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'deformation' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "biến dạng",
    "answerText": "biến dạng",
    "explanationSimple": "'deformation' tương ứng với 'biến dạng' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 855,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q015",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'newton'?",
    "options": [
      {
        "key": "A",
        "text": "chất"
      },
      {
        "key": "B",
        "text": "đa dạng sinh học"
      },
      {
        "key": "C",
        "text": "truyền năng lượng"
      },
      {
        "key": "D",
        "text": "newton"
      }
    ],
    "correctAnswer": "D",
    "answerText": "newton",
    "explanationSimple": "'newton' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 856,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q016",
    "lessonId": 22,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Lực và tác dụng của lực'.",
    "options": null,
    "correctAnswer": "kéo",
    "answerText": "kéo",
    "explanationSimple": "Một từ khóa đúng là 'kéo'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 857,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q017",
    "lessonId": 22,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Lực và tác dụng của lực'.",
    "options": null,
    "correctAnswer": "đẩy",
    "answerText": "đẩy",
    "explanationSimple": "Một từ khóa đúng là 'đẩy'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 858,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q018",
    "lessonId": 22,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Lực và tác dụng của lực'.",
    "options": null,
    "correctAnswer": "biến dạng",
    "answerText": "biến dạng",
    "explanationSimple": "Một từ khóa đúng là 'biến dạng'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 859,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q019",
    "lessonId": 22,
    "questionType": "true_false",
    "questionText": "Lực là tác dụng đẩy hoặc kéo của vật này lên vật khác.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 860,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q020",
    "lessonId": 22,
    "questionType": "true_false",
    "questionText": "Lực có thể làm vật thay đổi tốc độ, hướng chuyển động hoặc biến dạng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 861,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q021",
    "lessonId": 22,
    "questionType": "true_false",
    "questionText": "Lực được biểu diễn bằng mũi tên có điểm đặt, phương, chiều và độ lớn tương đối.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 862,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q022",
    "lessonId": 22,
    "questionType": "true_false",
    "questionText": "Đơn vị lực là newton, kí hiệu N.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 863,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q023",
    "lessonId": 22,
    "questionType": "true_false",
    "questionText": "Chỉ nghĩ có lực khi vật chuyển động.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 864,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q024",
    "lessonId": 22,
    "questionType": "true_false",
    "questionText": "Không phân biệt phương và chiều.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 865,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q025",
    "lessonId": 22,
    "questionType": "true_false",
    "questionText": "Vẽ mũi tên lực sai điểm đặt.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 866,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q026",
    "lessonId": 22,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lực và tác dụng của lực', hãy nêu một thuật ngữ liên quan đến ý: Lực là tác dụng đẩy hoặc kéo của vật này lên vật khác.",
    "options": null,
    "correctAnswer": "đẩy",
    "answerText": "đẩy",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'đẩy' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 867,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q027",
    "lessonId": 22,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lực và tác dụng của lực', hãy nêu một thuật ngữ liên quan đến ý: Lực có thể làm vật thay đổi tốc độ, hướng chuyển động hoặc biến dạng.",
    "options": null,
    "correctAnswer": "biến dạng",
    "answerText": "biến dạng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'biến dạng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 868,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q028",
    "lessonId": 22,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lực và tác dụng của lực', hãy nêu một thuật ngữ liên quan đến ý: Lực là tác dụng đẩy hoặc kéo của vật này lên vật khác.",
    "options": null,
    "correctAnswer": "kéo",
    "answerText": "kéo",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'kéo' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 869,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q029",
    "lessonId": 22,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lực và tác dụng của lực', hãy nêu một thuật ngữ liên quan đến ý: Lực là tác dụng đẩy hoặc kéo của vật này lên vật khác.",
    "options": null,
    "correctAnswer": "lực",
    "answerText": "lực",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'lực' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 870,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q030",
    "lessonId": 22,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lực và tác dụng của lực', hãy nêu một thuật ngữ liên quan đến ý: Lực là tác dụng đẩy hoặc kéo của vật này lên vật khác.",
    "options": null,
    "correctAnswer": "lực",
    "answerText": "lực",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'lực' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 871,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q031",
    "lessonId": 22,
    "questionType": "fill_text",
    "questionText": "Đơn vị của lực là gì?",
    "options": null,
    "correctAnswer": "newton",
    "answerText": "newton",
    "explanationSimple": "Đơn vị lực là newton, kí hiệu N.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 872,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q032",
    "lessonId": 22,
    "questionType": "fill_text",
    "questionText": "Lực có thể làm vật thay đổi chuyển động hoặc gì?",
    "options": null,
    "correctAnswer": "biến dạng",
    "answerText": "biến dạng",
    "explanationSimple": "Một tác dụng của lực là làm vật biến dạng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 873,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q033",
    "lessonId": 22,
    "questionType": "fill_text",
    "questionText": "Trọng lực có chiều hướng về đâu?",
    "options": null,
    "correctAnswer": "phía Trái Đất",
    "answerText": "phía Trái Đất",
    "explanationSimple": "Trọng lực hướng về phía Trái Đất.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 874,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q034",
    "lessonId": 22,
    "questionType": "fill_text",
    "questionText": "Ma sát có phải luôn có hại không?",
    "options": null,
    "correctAnswer": "không",
    "answerText": "không",
    "explanationSimple": "Ma sát có thể có lợi như giúp đi lại, phanh xe.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 875,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q035",
    "lessonId": 22,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Đá bóng làm bóng đổi hướng.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Không phân biệt phương và chiều."
      },
      {
        "key": "D",
        "text": "Lực là tác dụng đẩy hoặc kéo của vật này lên vật khác."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Lực là tác dụng đẩy hoặc kéo của vật này lên vật khác.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 876,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q036",
    "lessonId": 22,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Lực và tác dụng của lực', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Không phân biệt phương và chiều."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 877,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q037",
    "lessonId": 22,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Đá bóng làm bóng đổi hướng.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Chỉ nghĩ có lực khi vật chuyển động."
      },
      {
        "key": "C",
        "text": "Lực được biểu diễn bằng mũi tên có điểm đặt, phương, chiều và độ lớn tương đối."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Lực được biểu diễn bằng mũi tên có điểm đặt, phương, chiều và độ lớn tương đối.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 878,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q038",
    "lessonId": 22,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Bóp lò xo làm lò xo biến dạng.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Chỉ nghĩ có lực khi vật chuyển động."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 879,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q039",
    "lessonId": 22,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Đá bóng làm bóng đổi hướng.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Không phân biệt phương và chiều."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Lực có thể làm vật thay đổi tốc độ, hướng chuyển động hoặc biến dạng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Lực có thể làm vật thay đổi tốc độ, hướng chuyển động hoặc biến dạng.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 880,
    "sourceId": "sci6-b2-l22-luc-va-tac-dung-cua-luc-q040",
    "lessonId": 22,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Bóp lò xo làm lò xo biến dạng.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Chỉ nghĩ có lực khi vật chuyển động."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 881,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q001",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Trọng lực, lực hấp dẫn và khối lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Nêu được trọng lực."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nêu được trọng lực.",
    "explanationSimple": "Bài này hướng tới: Nêu được trọng lực.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 882,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q002",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Trọng lực, lực hấp dẫn và khối lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Phân biệt khối lượng và trọng lượng ở mức cơ bản."
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Phân biệt khối lượng và trọng lượng ở mức cơ bản.",
    "explanationSimple": "Bài này hướng tới: Phân biệt khối lượng và trọng lượng ở mức cơ bản.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 883,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q003",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Trọng lực, lực hấp dẫn và khối lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Nhận biết lực hấp dẫn."
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nhận biết lực hấp dẫn.",
    "explanationSimple": "Bài này hướng tới: Nhận biết lực hấp dẫn.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 884,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q004",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trọng lực, lực hấp dẫn và khối lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Trọng lực là lực hút của Trái Đất tác dụng lên vật."
      },
      {
        "key": "B",
        "text": "Nghĩ chỉ Trái Đất mới có lực hấp dẫn."
      },
      {
        "key": "C",
        "text": "Cho rằng vật rơi xuống vì nó nặng theo nghĩa cảm tính."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Trọng lực là lực hút của Trái Đất tác dụng lên vật.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 885,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q005",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trọng lực, lực hấp dẫn và khối lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "B",
        "text": "Nghĩ chỉ Trái Đất mới có lực hấp dẫn."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Lực hấp dẫn là lực hút giữa các vật có khối lượng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Lực hấp dẫn là lực hút giữa các vật có khối lượng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 886,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q006",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trọng lực, lực hấp dẫn và khối lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm khối lượng với trọng lượng."
      },
      {
        "key": "B",
        "text": "Trọng lực có phương thẳng đứng, chiều hướng về phía Trái Đất."
      },
      {
        "key": "C",
        "text": "Nghĩ chỉ Trái Đất mới có lực hấp dẫn."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Trọng lực có phương thẳng đứng, chiều hướng về phía Trái Đất.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 887,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q007",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trọng lực, lực hấp dẫn và khối lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Lực hấp dẫn là lực hút giữa các vật có khối lượng."
      },
      {
        "key": "C",
        "text": "Cho rằng vật rơi xuống vì nó nặng theo nghĩa cảm tính."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Lực hấp dẫn là lực hút giữa các vật có khối lượng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 888,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q008",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trọng lực, lực hấp dẫn và khối lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Khối lượng cho biết lượng chất chứa trong vật; trọng lượng là độ lớn của trọng lực tác dụng lên vật."
      },
      {
        "key": "C",
        "text": "Nhầm khối lượng với trọng lượng."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Khối lượng cho biết lượng chất chứa trong vật; trọng lượng là độ lớn của trọng lực tác dụng lên vật.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 889,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q009",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trọng lực, lực hấp dẫn và khối lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Cho rằng vật rơi xuống vì nó nặng theo nghĩa cảm tính."
      },
      {
        "key": "C",
        "text": "Trọng lực có phương thẳng đứng, chiều hướng về phía Trái Đất."
      },
      {
        "key": "D",
        "text": "Nghĩ chỉ Trái Đất mới có lực hấp dẫn."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Trọng lực có phương thẳng đứng, chiều hướng về phía Trái Đất.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 890,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q010",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trọng lực, lực hấp dẫn và khối lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Trọng lực có phương thẳng đứng, chiều hướng về phía Trái Đất."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Nhầm khối lượng với trọng lượng."
      },
      {
        "key": "D",
        "text": "Cho rằng vật rơi xuống vì nó nặng theo nghĩa cảm tính."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Trọng lực có phương thẳng đứng, chiều hướng về phía Trái Đất.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 891,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q011",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'gravity'?",
    "options": [
      {
        "key": "A",
        "text": "trọng lực"
      },
      {
        "key": "B",
        "text": "hiện tượng"
      },
      {
        "key": "C",
        "text": "thay thế"
      },
      {
        "key": "D",
        "text": "chuyên hóa"
      }
    ],
    "correctAnswer": "A",
    "answerText": "trọng lực",
    "explanationSimple": "'trọng lực' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 892,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q012",
    "lessonId": 23,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'gravitational force' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "lực hấp dẫn",
    "answerText": "lực hấp dẫn",
    "explanationSimple": "'gravitational force' tương ứng với 'lực hấp dẫn' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 893,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q013",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'mass'?",
    "options": [
      {
        "key": "A",
        "text": "chuyển động"
      },
      {
        "key": "B",
        "text": "khối lượng"
      },
      {
        "key": "C",
        "text": "đơn vị"
      },
      {
        "key": "D",
        "text": "thay thế"
      }
    ],
    "correctAnswer": "B",
    "answerText": "khối lượng",
    "explanationSimple": "'khối lượng' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 894,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q014",
    "lessonId": 23,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'weight' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "trọng lượng",
    "answerText": "trọng lượng",
    "explanationSimple": "'weight' tương ứng với 'trọng lượng' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 895,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q015",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'vertical direction'?",
    "options": [
      {
        "key": "A",
        "text": "khối lượng"
      },
      {
        "key": "B",
        "text": "lọc"
      },
      {
        "key": "C",
        "text": "thể khí"
      },
      {
        "key": "D",
        "text": "phương thẳng đứng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "phương thẳng đứng",
    "explanationSimple": "'phương thẳng đứng' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 896,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q016",
    "lessonId": 23,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Trọng lực, lực hấp dẫn và khối lượng'.",
    "options": null,
    "correctAnswer": "phương thẳng đứng",
    "answerText": "phương thẳng đứng",
    "explanationSimple": "Một từ khóa đúng là 'phương thẳng đứng'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 897,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q017",
    "lessonId": 23,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Trọng lực, lực hấp dẫn và khối lượng'.",
    "options": null,
    "correctAnswer": "khối lượng",
    "answerText": "khối lượng",
    "explanationSimple": "Một từ khóa đúng là 'khối lượng'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 898,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q018",
    "lessonId": 23,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Trọng lực, lực hấp dẫn và khối lượng'.",
    "options": null,
    "correctAnswer": "phương thẳng đứng",
    "answerText": "phương thẳng đứng",
    "explanationSimple": "Một từ khóa đúng là 'phương thẳng đứng'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 899,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q019",
    "lessonId": 23,
    "questionType": "true_false",
    "questionText": "Trọng lực là lực hút của Trái Đất tác dụng lên vật.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 900,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q020",
    "lessonId": 23,
    "questionType": "true_false",
    "questionText": "Trọng lực có phương thẳng đứng, chiều hướng về phía Trái Đất.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 901,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q021",
    "lessonId": 23,
    "questionType": "true_false",
    "questionText": "Khối lượng cho biết lượng chất chứa trong vật; trọng lượng là độ lớn của trọng lực tác dụng lên vật.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 902,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q022",
    "lessonId": 23,
    "questionType": "true_false",
    "questionText": "Lực hấp dẫn là lực hút giữa các vật có khối lượng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 903,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q023",
    "lessonId": 23,
    "questionType": "true_false",
    "questionText": "Nhầm khối lượng với trọng lượng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 904,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q024",
    "lessonId": 23,
    "questionType": "true_false",
    "questionText": "Nghĩ chỉ Trái Đất mới có lực hấp dẫn.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 905,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q025",
    "lessonId": 23,
    "questionType": "true_false",
    "questionText": "Cho rằng vật rơi xuống vì nó nặng theo nghĩa cảm tính.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 906,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q026",
    "lessonId": 23,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trọng lực, lực hấp dẫn và khối lượng', hãy nêu một thuật ngữ liên quan đến ý: Khối lượng cho biết lượng chất chứa trong vật; trọng lượng là độ lớn của trọng lực tác dụng lên vật.",
    "options": null,
    "correctAnswer": "khối lượng",
    "answerText": "khối lượng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'khối lượng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 907,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q027",
    "lessonId": 23,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trọng lực, lực hấp dẫn và khối lượng', hãy nêu một thuật ngữ liên quan đến ý: Khối lượng cho biết lượng chất chứa trong vật; trọng lượng là độ lớn của trọng lực tác dụng lên vật.",
    "options": null,
    "correctAnswer": "khối lượng",
    "answerText": "khối lượng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'khối lượng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 908,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q028",
    "lessonId": 23,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trọng lực, lực hấp dẫn và khối lượng', hãy nêu một thuật ngữ liên quan đến ý: Trọng lực có phương thẳng đứng, chiều hướng về phía Trái Đất.",
    "options": null,
    "correctAnswer": "lực hấp dẫn",
    "answerText": "lực hấp dẫn",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'lực hấp dẫn' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 909,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q029",
    "lessonId": 23,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trọng lực, lực hấp dẫn và khối lượng', hãy nêu một thuật ngữ liên quan đến ý: Lực hấp dẫn là lực hút giữa các vật có khối lượng.",
    "options": null,
    "correctAnswer": "lực hấp dẫn",
    "answerText": "lực hấp dẫn",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'lực hấp dẫn' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 910,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q030",
    "lessonId": 23,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trọng lực, lực hấp dẫn và khối lượng', hãy nêu một thuật ngữ liên quan đến ý: Khối lượng cho biết lượng chất chứa trong vật; trọng lượng là độ lớn của trọng lực tác dụng lên vật.",
    "options": null,
    "correctAnswer": "phương thẳng đứng",
    "answerText": "phương thẳng đứng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'phương thẳng đứng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 911,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q031",
    "lessonId": 23,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trọng lực, lực hấp dẫn và khối lượng', hãy nêu một thuật ngữ liên quan đến ý: Khối lượng cho biết lượng chất chứa trong vật; trọng lượng là độ lớn của trọng lực tác dụng lên vật.",
    "options": null,
    "correctAnswer": "phương thẳng đứng",
    "answerText": "phương thẳng đứng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'phương thẳng đứng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 912,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q032",
    "lessonId": 23,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trọng lực, lực hấp dẫn và khối lượng', hãy nêu một thuật ngữ liên quan đến ý: Trọng lực có phương thẳng đứng, chiều hướng về phía Trái Đất.",
    "options": null,
    "correctAnswer": "phương thẳng đứng",
    "answerText": "phương thẳng đứng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'phương thẳng đứng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 913,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q033",
    "lessonId": 23,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trọng lực, lực hấp dẫn và khối lượng', hãy nêu một thuật ngữ liên quan đến ý: Khối lượng cho biết lượng chất chứa trong vật; trọng lượng là độ lớn của trọng lực tác dụng lên vật.",
    "options": null,
    "correctAnswer": "lực hấp dẫn",
    "answerText": "lực hấp dẫn",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'lực hấp dẫn' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 914,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q034",
    "lessonId": 23,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trọng lực, lực hấp dẫn và khối lượng', hãy nêu một thuật ngữ liên quan đến ý: Trọng lực là lực hút của Trái Đất tác dụng lên vật.",
    "options": null,
    "correctAnswer": "khối lượng",
    "answerText": "khối lượng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'khối lượng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 915,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q035",
    "lessonId": 23,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Quả bóng rơi xuống do trọng lực.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Nhầm khối lượng với trọng lượng."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Lực hấp dẫn là lực hút giữa các vật có khối lượng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Lực hấp dẫn là lực hút giữa các vật có khối lượng.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 916,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q036",
    "lessonId": 23,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Mọi vật có khối lượng đều hút nhau bằng lực hấp dẫn.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ chỉ Trái Đất mới có lực hấp dẫn."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 917,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q037",
    "lessonId": 23,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Mọi vật có khối lượng đều hút nhau bằng lực hấp dẫn.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Khối lượng cho biết lượng chất chứa trong vật; trọng lượng là độ lớn của trọng lực tác dụng lên vật."
      },
      {
        "key": "D",
        "text": "Nghĩ chỉ Trái Đất mới có lực hấp dẫn."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Khối lượng cho biết lượng chất chứa trong vật; trọng lượng là độ lớn của trọng lực tác dụng lên vật.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 918,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q038",
    "lessonId": 23,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Trọng lực, lực hấp dẫn và khối lượng', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Nghĩ chỉ Trái Đất mới có lực hấp dẫn."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 919,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q039",
    "lessonId": 23,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Mọi vật có khối lượng đều hút nhau bằng lực hấp dẫn.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Lực hấp dẫn là lực hút giữa các vật có khối lượng."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Cho rằng vật rơi xuống vì nó nặng theo nghĩa cảm tính."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Lực hấp dẫn là lực hút giữa các vật có khối lượng.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 920,
    "sourceId": "sci6-b2-l23-trong-luc-luc-hap-dan-va-khoi-luong-q040",
    "lessonId": 23,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Quả bóng rơi xuống do trọng lực.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Nhầm khối lượng với trọng lượng."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 921,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q001",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Lực ma sát và lực cản của môi trường'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần quan sát"
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Nhận biết lực ma sát."
      },
      {
        "key": "D",
        "text": "Học thuộc tất cả số liệu"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nhận biết lực ma sát.",
    "explanationSimple": "Bài này hướng tới: Nhận biết lực ma sát.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 922,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q002",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Lực ma sát và lực cản của môi trường'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "B",
        "text": "Nêu ví dụ ma sát có lợi/có hại."
      },
      {
        "key": "C",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nêu ví dụ ma sát có lợi/có hại.",
    "explanationSimple": "Bài này hướng tới: Nêu ví dụ ma sát có lợi/có hại.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 923,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q003",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Lực ma sát và lực cản của môi trường'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "B",
        "text": "Không cần quan sát"
      },
      {
        "key": "C",
        "text": "Hiểu lực cản của nước/không khí."
      },
      {
        "key": "D",
        "text": "Học thuộc tất cả số liệu"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Hiểu lực cản của nước/không khí.",
    "explanationSimple": "Bài này hướng tới: Hiểu lực cản của nước/không khí.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 924,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q004",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lực ma sát và lực cản của môi trường'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua lực cản không khí."
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Có thể tăng/giảm ma sát bằng thay đổi bề mặt, vật liệu hoặc bôi trơn."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Có thể tăng/giảm ma sát bằng thay đổi bề mặt, vật liệu hoặc bôi trơn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 925,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q005",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lực ma sát và lực cản của môi trường'?",
    "options": [
      {
        "key": "A",
        "text": "Cho rằng ma sát luôn có hại."
      },
      {
        "key": "B",
        "text": "Ma sát có thể có lợi hoặc có hại tùy tình huống."
      },
      {
        "key": "C",
        "text": "Nhầm ma sát với trọng lực."
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Ma sát có thể có lợi hoặc có hại tùy tình huống.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 926,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q006",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lực ma sát và lực cản của môi trường'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Cho rằng ma sát luôn có hại."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Có thể tăng/giảm ma sát bằng thay đổi bề mặt, vật liệu hoặc bôi trơn."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Có thể tăng/giảm ma sát bằng thay đổi bề mặt, vật liệu hoặc bôi trơn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 927,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q007",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lực ma sát và lực cản của môi trường'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua lực cản không khí."
      },
      {
        "key": "B",
        "text": "Nhầm ma sát với trọng lực."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Có thể tăng/giảm ma sát bằng thay đổi bề mặt, vật liệu hoặc bôi trơn."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Có thể tăng/giảm ma sát bằng thay đổi bề mặt, vật liệu hoặc bôi trơn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 928,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q008",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lực ma sát và lực cản của môi trường'?",
    "options": [
      {
        "key": "A",
        "text": "Ma sát có thể có lợi hoặc có hại tùy tình huống."
      },
      {
        "key": "B",
        "text": "Nhầm ma sát với trọng lực."
      },
      {
        "key": "C",
        "text": "Cho rằng ma sát luôn có hại."
      },
      {
        "key": "D",
        "text": "Bỏ qua lực cản không khí."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Ma sát có thể có lợi hoặc có hại tùy tình huống.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 929,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q009",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lực ma sát và lực cản của môi trường'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Cho rằng ma sát luôn có hại."
      },
      {
        "key": "C",
        "text": "Có thể tăng/giảm ma sát bằng thay đổi bề mặt, vật liệu hoặc bôi trơn."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Có thể tăng/giảm ma sát bằng thay đổi bề mặt, vật liệu hoặc bôi trơn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 930,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q010",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Lực ma sát và lực cản của môi trường'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm ma sát với trọng lực."
      },
      {
        "key": "B",
        "text": "Cho rằng ma sát luôn có hại."
      },
      {
        "key": "C",
        "text": "Có thể tăng/giảm ma sát bằng thay đổi bề mặt, vật liệu hoặc bôi trơn."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Có thể tăng/giảm ma sát bằng thay đổi bề mặt, vật liệu hoặc bôi trơn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 931,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q011",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'friction'?",
    "options": [
      {
        "key": "A",
        "text": "mặt trời"
      },
      {
        "key": "B",
        "text": "ma sát"
      },
      {
        "key": "C",
        "text": "đặc điểm"
      },
      {
        "key": "D",
        "text": "chất đạm"
      }
    ],
    "correctAnswer": "B",
    "answerText": "ma sát",
    "explanationSimple": "'ma sát' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 932,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q012",
    "lessonId": 24,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'drag' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "lực cản",
    "answerText": "lực cản",
    "explanationSimple": "'drag' tương ứng với 'lực cản' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 933,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q013",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'surface'?",
    "options": [
      {
        "key": "A",
        "text": "tế bào mới"
      },
      {
        "key": "B",
        "text": "nhiệt độ"
      },
      {
        "key": "C",
        "text": "bề mặt"
      },
      {
        "key": "D",
        "text": "bảo vệ"
      }
    ],
    "correctAnswer": "C",
    "answerText": "bề mặt",
    "explanationSimple": "'bề mặt' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 934,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q014",
    "lessonId": 24,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'lubrication' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "bôi trơn",
    "answerText": "bôi trơn",
    "explanationSimple": "'lubrication' tương ứng với 'bôi trơn' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 935,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q015",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'motion'?",
    "options": [
      {
        "key": "A",
        "text": "cô cạn"
      },
      {
        "key": "B",
        "text": "cao su"
      },
      {
        "key": "C",
        "text": "chuyển động"
      },
      {
        "key": "D",
        "text": "vitamin"
      }
    ],
    "correctAnswer": "C",
    "answerText": "chuyển động",
    "explanationSimple": "'chuyển động' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 936,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q016",
    "lessonId": 24,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Lực ma sát và lực cản của môi trường'.",
    "options": null,
    "correctAnswer": "bôi trơn",
    "answerText": "bôi trơn",
    "explanationSimple": "Một từ khóa đúng là 'bôi trơn'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 937,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q017",
    "lessonId": 24,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Lực ma sát và lực cản của môi trường'.",
    "options": null,
    "correctAnswer": "ma sát",
    "answerText": "ma sát",
    "explanationSimple": "Một từ khóa đúng là 'ma sát'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 938,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q018",
    "lessonId": 24,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Lực ma sát và lực cản của môi trường'.",
    "options": null,
    "correctAnswer": "ma sát",
    "answerText": "ma sát",
    "explanationSimple": "Một từ khóa đúng là 'ma sát'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 939,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q019",
    "lessonId": 24,
    "questionType": "true_false",
    "questionText": "Lực ma sát xuất hiện khi bề mặt tiếp xúc cản trở chuyển động hoặc xu hướng chuyển động.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 940,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q020",
    "lessonId": 24,
    "questionType": "true_false",
    "questionText": "Ma sát có thể có lợi hoặc có hại tùy tình huống.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 941,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q021",
    "lessonId": 24,
    "questionType": "true_false",
    "questionText": "Lực cản của không khí hoặc nước làm vật chuyển động chậm lại trong môi trường đó.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 942,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q022",
    "lessonId": 24,
    "questionType": "true_false",
    "questionText": "Có thể tăng/giảm ma sát bằng thay đổi bề mặt, vật liệu hoặc bôi trơn.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 943,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q023",
    "lessonId": 24,
    "questionType": "true_false",
    "questionText": "Cho rằng ma sát luôn có hại.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 944,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q024",
    "lessonId": 24,
    "questionType": "true_false",
    "questionText": "Bỏ qua lực cản không khí.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 945,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q025",
    "lessonId": 24,
    "questionType": "true_false",
    "questionText": "Nhầm ma sát với trọng lực.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 946,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q026",
    "lessonId": 24,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lực ma sát và lực cản của môi trường', hãy nêu một thuật ngữ liên quan đến ý: Ma sát có thể có lợi hoặc có hại tùy tình huống.",
    "options": null,
    "correctAnswer": "bôi trơn",
    "answerText": "bôi trơn",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'bôi trơn' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 947,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q027",
    "lessonId": 24,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lực ma sát và lực cản của môi trường', hãy nêu một thuật ngữ liên quan đến ý: Có thể tăng/giảm ma sát bằng thay đổi bề mặt, vật liệu hoặc bôi trơn.",
    "options": null,
    "correctAnswer": "chuyển động",
    "answerText": "chuyển động",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'chuyển động' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 948,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q028",
    "lessonId": 24,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lực ma sát và lực cản của môi trường', hãy nêu một thuật ngữ liên quan đến ý: Ma sát có thể có lợi hoặc có hại tùy tình huống.",
    "options": null,
    "correctAnswer": "ma sát",
    "answerText": "ma sát",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'ma sát' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 949,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q029",
    "lessonId": 24,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lực ma sát và lực cản của môi trường', hãy nêu một thuật ngữ liên quan đến ý: Có thể tăng/giảm ma sát bằng thay đổi bề mặt, vật liệu hoặc bôi trơn.",
    "options": null,
    "correctAnswer": "chuyển động",
    "answerText": "chuyển động",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'chuyển động' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 950,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q030",
    "lessonId": 24,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Lực ma sát và lực cản của môi trường', hãy nêu một thuật ngữ liên quan đến ý: Ma sát có thể có lợi hoặc có hại tùy tình huống.",
    "options": null,
    "correctAnswer": "bề mặt",
    "answerText": "bề mặt",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'bề mặt' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 951,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q031",
    "lessonId": 24,
    "questionType": "fill_text",
    "questionText": "Đơn vị của lực là gì?",
    "options": null,
    "correctAnswer": "newton",
    "answerText": "newton",
    "explanationSimple": "Đơn vị lực là newton, kí hiệu N.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 952,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q032",
    "lessonId": 24,
    "questionType": "fill_text",
    "questionText": "Lực có thể làm vật thay đổi chuyển động hoặc gì?",
    "options": null,
    "correctAnswer": "biến dạng",
    "answerText": "biến dạng",
    "explanationSimple": "Một tác dụng của lực là làm vật biến dạng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 953,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q033",
    "lessonId": 24,
    "questionType": "fill_text",
    "questionText": "Trọng lực có chiều hướng về đâu?",
    "options": null,
    "correctAnswer": "phía Trái Đất",
    "answerText": "phía Trái Đất",
    "explanationSimple": "Trọng lực hướng về phía Trái Đất.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 954,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q034",
    "lessonId": 24,
    "questionType": "fill_text",
    "questionText": "Ma sát có phải luôn có hại không?",
    "options": null,
    "correctAnswer": "không",
    "answerText": "không",
    "explanationSimple": "Ma sát có thể có lợi như giúp đi lại, phanh xe.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 955,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q035",
    "lessonId": 24,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Phanh xe hoạt động nhờ ma sát.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Lực cản của không khí hoặc nước làm vật chuyển động chậm lại trong môi trường đó."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Bỏ qua lực cản không khí."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Lực cản của không khí hoặc nước làm vật chuyển động chậm lại trong môi trường đó.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 956,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q036",
    "lessonId": 24,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Bơi trong nước khó hơn đi trên cạn vì có lực cản.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Cho rằng ma sát luôn có hại."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 957,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q037",
    "lessonId": 24,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Phanh xe hoạt động nhờ ma sát.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Ma sát có thể có lợi hoặc có hại tùy tình huống."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Nhầm ma sát với trọng lực."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Ma sát có thể có lợi hoặc có hại tùy tình huống.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 958,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q038",
    "lessonId": 24,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Bơi trong nước khó hơn đi trên cạn vì có lực cản.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Cho rằng ma sát luôn có hại."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 959,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q039",
    "lessonId": 24,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Lực ma sát và lực cản của môi trường', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua lực cản không khí."
      },
      {
        "key": "D",
        "text": "Ma sát có thể có lợi hoặc có hại tùy tình huống."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Ma sát có thể có lợi hoặc có hại tùy tình huống.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 960,
    "sourceId": "sci6-b2-l24-luc-ma-sat-va-luc-can-cua-moi-truong-q040",
    "lessonId": 24,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Bơi trong nước khó hơn đi trên cạn vì có lực cản.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Bỏ qua lực cản không khí."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 961,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q001",
    "lessonId": 25,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Năng lượng và sự truyền năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần quan sát"
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Hiểu khái niệm năng lượng."
      },
      {
        "key": "D",
        "text": "Học thuộc tất cả số liệu"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Hiểu khái niệm năng lượng.",
    "explanationSimple": "Bài này hướng tới: Hiểu khái niệm năng lượng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 962,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q002",
    "lessonId": 25,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Năng lượng và sự truyền năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "B",
        "text": "Nhận biết truyền năng lượng."
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nhận biết truyền năng lượng.",
    "explanationSimple": "Bài này hướng tới: Nhận biết truyền năng lượng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 963,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q003",
    "lessonId": 25,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Năng lượng và sự truyền năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "B",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "C",
        "text": "Nêu dấu hiệu vật nhận năng lượng."
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nêu dấu hiệu vật nhận năng lượng.",
    "explanationSimple": "Bài này hướng tới: Nêu dấu hiệu vật nhận năng lượng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 964,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q004",
    "lessonId": 25,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Năng lượng và sự truyền năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "B",
        "text": "Nhầm năng lượng với lực."
      },
      {
        "key": "C",
        "text": "Không nhận ra năng lượng truyền qua ánh sáng/nhiệt."
      },
      {
        "key": "D",
        "text": "Năng lượng là khả năng gây ra sự biến đổi hoặc thực hiện công."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Năng lượng là khả năng gây ra sự biến đổi hoặc thực hiện công.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 965,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q005",
    "lessonId": 25,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Năng lượng và sự truyền năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Năng lượng là khả năng gây ra sự biến đổi hoặc thực hiện công."
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Năng lượng là khả năng gây ra sự biến đổi hoặc thực hiện công.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 966,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q006",
    "lessonId": 25,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Năng lượng và sự truyền năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Năng lượng là khả năng gây ra sự biến đổi hoặc thực hiện công."
      },
      {
        "key": "B",
        "text": "Không nhận ra năng lượng truyền qua ánh sáng/nhiệt."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Năng lượng là khả năng gây ra sự biến đổi hoặc thực hiện công.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 967,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q007",
    "lessonId": 25,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Năng lượng và sự truyền năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm năng lượng với lực."
      },
      {
        "key": "B",
        "text": "Không nhận ra năng lượng truyền qua ánh sáng/nhiệt."
      },
      {
        "key": "C",
        "text": "Nghĩ năng lượng chỉ là điện."
      },
      {
        "key": "D",
        "text": "Cần xác định nguồn năng lượng, vật nhận năng lượng và sự biến đổi xảy ra."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Cần xác định nguồn năng lượng, vật nhận năng lượng và sự biến đổi xảy ra.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 968,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q008",
    "lessonId": 25,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Năng lượng và sự truyền năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ năng lượng chỉ là điện."
      },
      {
        "key": "B",
        "text": "Cần xác định nguồn năng lượng, vật nhận năng lượng và sự biến đổi xảy ra."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Nhầm năng lượng với lực."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Cần xác định nguồn năng lượng, vật nhận năng lượng và sự biến đổi xảy ra.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 969,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q009",
    "lessonId": 25,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Năng lượng và sự truyền năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Cần xác định nguồn năng lượng, vật nhận năng lượng và sự biến đổi xảy ra."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Nghĩ năng lượng chỉ là điện."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cần xác định nguồn năng lượng, vật nhận năng lượng và sự biến đổi xảy ra.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 970,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q010",
    "lessonId": 25,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Năng lượng và sự truyền năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Cần xác định nguồn năng lượng, vật nhận năng lượng và sự biến đổi xảy ra."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Nghĩ năng lượng chỉ là điện."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Cần xác định nguồn năng lượng, vật nhận năng lượng và sự biến đổi xảy ra.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 971,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q011",
    "lessonId": 25,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'energy'?",
    "options": [
      {
        "key": "A",
        "text": "đồng nhất"
      },
      {
        "key": "B",
        "text": "tổng hợp"
      },
      {
        "key": "C",
        "text": "biến dạng"
      },
      {
        "key": "D",
        "text": "năng lượng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "năng lượng",
    "explanationSimple": "'năng lượng' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 972,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q012",
    "lessonId": 25,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'energy transfer' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "truyền năng lượng",
    "answerText": "truyền năng lượng",
    "explanationSimple": "'energy transfer' tương ứng với 'truyền năng lượng' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 973,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q013",
    "lessonId": 25,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'energy source'?",
    "options": [
      {
        "key": "A",
        "text": "kéo"
      },
      {
        "key": "B",
        "text": "thấu kính"
      },
      {
        "key": "C",
        "text": "pha Mặt Trăng"
      },
      {
        "key": "D",
        "text": "nguồn năng lượng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "nguồn năng lượng",
    "explanationSimple": "'nguồn năng lượng' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 974,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q014",
    "lessonId": 25,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'change' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "biến đổi",
    "answerText": "biến đổi",
    "explanationSimple": "'change' tương ứng với 'biến đổi' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 975,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q015",
    "lessonId": 25,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'heat'?",
    "options": [
      {
        "key": "A",
        "text": "quan sát"
      },
      {
        "key": "B",
        "text": "phóng đại"
      },
      {
        "key": "C",
        "text": "bảo hộ"
      },
      {
        "key": "D",
        "text": "nhiệt"
      }
    ],
    "correctAnswer": "D",
    "answerText": "nhiệt",
    "explanationSimple": "'nhiệt' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 976,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q016",
    "lessonId": 25,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Năng lượng và sự truyền năng lượng'.",
    "options": null,
    "correctAnswer": "năng lượng",
    "answerText": "năng lượng",
    "explanationSimple": "Một từ khóa đúng là 'năng lượng'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 977,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q017",
    "lessonId": 25,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Năng lượng và sự truyền năng lượng'.",
    "options": null,
    "correctAnswer": "biến đổi",
    "answerText": "biến đổi",
    "explanationSimple": "Một từ khóa đúng là 'biến đổi'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 978,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q018",
    "lessonId": 25,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Năng lượng và sự truyền năng lượng'.",
    "options": null,
    "correctAnswer": "nhiệt",
    "answerText": "nhiệt",
    "explanationSimple": "Một từ khóa đúng là 'nhiệt'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 979,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q019",
    "lessonId": 25,
    "questionType": "true_false",
    "questionText": "Năng lượng là khả năng gây ra sự biến đổi hoặc thực hiện công.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 980,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q020",
    "lessonId": 25,
    "questionType": "true_false",
    "questionText": "Năng lượng có thể truyền từ vật này sang vật khác qua nhiệt, ánh sáng, điện, cơ học.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 981,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q021",
    "lessonId": 25,
    "questionType": "true_false",
    "questionText": "Dấu hiệu nhận biết vật nhận năng lượng: nóng lên, phát sáng, chuyển động, phát âm, biến dạng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 982,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q022",
    "lessonId": 25,
    "questionType": "true_false",
    "questionText": "Cần xác định nguồn năng lượng, vật nhận năng lượng và sự biến đổi xảy ra.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 983,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q023",
    "lessonId": 25,
    "questionType": "true_false",
    "questionText": "Nhầm năng lượng với lực.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 984,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q024",
    "lessonId": 25,
    "questionType": "true_false",
    "questionText": "Nghĩ năng lượng chỉ là điện.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 985,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q025",
    "lessonId": 25,
    "questionType": "true_false",
    "questionText": "Không nhận ra năng lượng truyền qua ánh sáng/nhiệt.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 986,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q026",
    "lessonId": 25,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Năng lượng và sự truyền năng lượng', hãy nêu một thuật ngữ liên quan đến ý: Năng lượng là khả năng gây ra sự biến đổi hoặc thực hiện công.",
    "options": null,
    "correctAnswer": "nhiệt",
    "answerText": "nhiệt",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nhiệt' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 987,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q027",
    "lessonId": 25,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Năng lượng và sự truyền năng lượng', hãy nêu một thuật ngữ liên quan đến ý: Cần xác định nguồn năng lượng, vật nhận năng lượng và sự biến đổi xảy ra.",
    "options": null,
    "correctAnswer": "nhiệt",
    "answerText": "nhiệt",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nhiệt' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 988,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q028",
    "lessonId": 25,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Năng lượng và sự truyền năng lượng', hãy nêu một thuật ngữ liên quan đến ý: Năng lượng có thể truyền từ vật này sang vật khác qua nhiệt, ánh sáng, điện, cơ học.",
    "options": null,
    "correctAnswer": "truyền năng lượng",
    "answerText": "truyền năng lượng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'truyền năng lượng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 989,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q029",
    "lessonId": 25,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Năng lượng và sự truyền năng lượng', hãy nêu một thuật ngữ liên quan đến ý: Cần xác định nguồn năng lượng, vật nhận năng lượng và sự biến đổi xảy ra.",
    "options": null,
    "correctAnswer": "nguồn năng lượng",
    "answerText": "nguồn năng lượng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'nguồn năng lượng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 990,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q030",
    "lessonId": 25,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Năng lượng và sự truyền năng lượng', hãy nêu một thuật ngữ liên quan đến ý: Cần xác định nguồn năng lượng, vật nhận năng lượng và sự biến đổi xảy ra.",
    "options": null,
    "correctAnswer": "biến đổi",
    "answerText": "biến đổi",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'biến đổi' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 991,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q031",
    "lessonId": 25,
    "questionType": "fill_text",
    "questionText": "Đèn pin chuyển điện năng chủ yếu thành dạng năng lượng nào?",
    "options": null,
    "correctAnswer": "quang năng",
    "answerText": "quang năng",
    "explanationSimple": "Đèn pin phát sáng nên tạo quang năng, kèm nhiệt năng hao phí.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 992,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q032",
    "lessonId": 25,
    "questionType": "fill_text",
    "questionText": "Pin là nguồn cung cấp dạng năng lượng nào cho đèn pin?",
    "options": null,
    "correctAnswer": "điện năng",
    "answerText": "điện năng",
    "explanationSimple": "Pin cung cấp điện năng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 993,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q033",
    "lessonId": 25,
    "questionType": "fill_text",
    "questionText": "Tắt đèn khi ra khỏi phòng là hành động gì?",
    "options": null,
    "correctAnswer": "tiết kiệm năng lượng",
    "answerText": "tiết kiệm năng lượng",
    "explanationSimple": "Tắt thiết bị không dùng giúp tiết kiệm năng lượng.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 994,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q034",
    "lessonId": 25,
    "questionType": "fill_text",
    "questionText": "Năng lượng mặt trời thuộc nhóm năng lượng nào?",
    "options": null,
    "correctAnswer": "năng lượng tái tạo",
    "answerText": "năng lượng tái tạo",
    "explanationSimple": "Mặt trời là nguồn năng lượng tái tạo phổ biến.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "specific"
    ],
    "isActive": 1
  },
  {
    "id": 995,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q035",
    "lessonId": 25,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Pin cung cấp năng lượng điện cho đèn pin.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Dấu hiệu nhận biết vật nhận năng lượng: nóng lên, phát sáng, chuyển động, phát âm, biến dạng."
      },
      {
        "key": "C",
        "text": "Nhầm năng lượng với lực."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Dấu hiệu nhận biết vật nhận năng lượng: nóng lên, phát sáng, chuyển động, phát âm, biến dạng.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 996,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q036",
    "lessonId": 25,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Pin cung cấp năng lượng điện cho đèn pin.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Nghĩ năng lượng chỉ là điện."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 997,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q037",
    "lessonId": 25,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Pin cung cấp năng lượng điện cho đèn pin.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Năng lượng có thể truyền từ vật này sang vật khác qua nhiệt, ánh sáng, điện, cơ học."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Nghĩ năng lượng chỉ là điện."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Năng lượng có thể truyền từ vật này sang vật khác qua nhiệt, ánh sáng, điện, cơ học.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 998,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q038",
    "lessonId": 25,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Bếp truyền nhiệt làm nước nóng lên.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Không nhận ra năng lượng truyền qua ánh sáng/nhiệt."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 999,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q039",
    "lessonId": 25,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Bếp truyền nhiệt làm nước nóng lên.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Cần xác định nguồn năng lượng, vật nhận năng lượng và sự biến đổi xảy ra."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Nhầm năng lượng với lực."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cần xác định nguồn năng lượng, vật nhận năng lượng và sự biến đổi xảy ra.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1000,
    "sourceId": "sci6-b2-l25-nang-luong-va-su-truyen-nang-luong-q040",
    "lessonId": 25,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Bếp truyền nhiệt làm nước nóng lên.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Nghĩ năng lượng chỉ là điện."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1001,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q001",
    "lessonId": 26,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Các dạng năng lượng và chuyển hóa năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần quan sát"
      },
      {
        "key": "B",
        "text": "Kể tên một số dạng năng lượng."
      },
      {
        "key": "C",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "D",
        "text": "Học thuộc tất cả số liệu"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Kể tên một số dạng năng lượng.",
    "explanationSimple": "Bài này hướng tới: Kể tên một số dạng năng lượng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 1002,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q002",
    "lessonId": 26,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Các dạng năng lượng và chuyển hóa năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Nhận biết chuyển hóa năng lượng."
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Học thuộc tất cả số liệu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nhận biết chuyển hóa năng lượng.",
    "explanationSimple": "Bài này hướng tới: Nhận biết chuyển hóa năng lượng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 1003,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q003",
    "lessonId": 26,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Các dạng năng lượng và chuyển hóa năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần quan sát"
      },
      {
        "key": "B",
        "text": "Phân biệt năng lượng hữu ích và hao phí."
      },
      {
        "key": "C",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "D",
        "text": "Học thuộc tất cả số liệu"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Phân biệt năng lượng hữu ích và hao phí.",
    "explanationSimple": "Bài này hướng tới: Phân biệt năng lượng hữu ích và hao phí.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 1004,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q004",
    "lessonId": 26,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Các dạng năng lượng và chuyển hóa năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Nhận biết dạng năng lượng chính và năng lượng hao phí giúp sử dụng hiệu quả hơn."
      },
      {
        "key": "B",
        "text": "Không phân biệt dạng năng lượng chính/phụ."
      },
      {
        "key": "C",
        "text": "Nghĩ năng lượng hao phí biến mất."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nhận biết dạng năng lượng chính và năng lượng hao phí giúp sử dụng hiệu quả hơn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1005,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q005",
    "lessonId": 26,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Các dạng năng lượng và chuyển hóa năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ năng lượng hao phí biến mất."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Năng lượng có thể chuyển hóa từ dạng này sang dạng khác."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Năng lượng có thể chuyển hóa từ dạng này sang dạng khác.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1006,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q006",
    "lessonId": 26,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Các dạng năng lượng và chuyển hóa năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ năng lượng hao phí biến mất."
      },
      {
        "key": "B",
        "text": "Cho rằng một thiết bị chỉ có một dạng năng lượng."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Một số dạng năng lượng: động năng, thế năng, nhiệt năng, quang năng, điện năng, hóa năng, âm năng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Một số dạng năng lượng: động năng, thế năng, nhiệt năng, quang năng, điện năng, hóa năng, âm năng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1007,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q007",
    "lessonId": 26,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Các dạng năng lượng và chuyển hóa năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Một số dạng năng lượng: động năng, thế năng, nhiệt năng, quang năng, điện năng, hóa năng, âm năng."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Không phân biệt dạng năng lượng chính/phụ."
      },
      {
        "key": "D",
        "text": "Cho rằng một thiết bị chỉ có một dạng năng lượng."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Một số dạng năng lượng: động năng, thế năng, nhiệt năng, quang năng, điện năng, hóa năng, âm năng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1008,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q008",
    "lessonId": 26,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Các dạng năng lượng và chuyển hóa năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ năng lượng hao phí biến mất."
      },
      {
        "key": "B",
        "text": "Năng lượng có thể chuyển hóa từ dạng này sang dạng khác."
      },
      {
        "key": "C",
        "text": "Không phân biệt dạng năng lượng chính/phụ."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Năng lượng có thể chuyển hóa từ dạng này sang dạng khác.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1009,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q009",
    "lessonId": 26,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Các dạng năng lượng và chuyển hóa năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Không phân biệt dạng năng lượng chính/phụ."
      },
      {
        "key": "C",
        "text": "Năng lượng có thể chuyển hóa từ dạng này sang dạng khác."
      },
      {
        "key": "D",
        "text": "Cho rằng một thiết bị chỉ có một dạng năng lượng."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Năng lượng có thể chuyển hóa từ dạng này sang dạng khác.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1010,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q010",
    "lessonId": 26,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Các dạng năng lượng và chuyển hóa năng lượng'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Không phân biệt dạng năng lượng chính/phụ."
      },
      {
        "key": "C",
        "text": "Cho rằng một thiết bị chỉ có một dạng năng lượng."
      },
      {
        "key": "D",
        "text": "Một số dạng năng lượng: động năng, thế năng, nhiệt năng, quang năng, điện năng, hóa năng, âm năng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Một số dạng năng lượng: động năng, thế năng, nhiệt năng, quang năng, điện năng, hóa năng, âm năng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1011,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q011",
    "lessonId": 26,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'kinetic energy'?",
    "options": [
      {
        "key": "A",
        "text": "dung dịch"
      },
      {
        "key": "B",
        "text": "bề mặt"
      },
      {
        "key": "C",
        "text": "động năng"
      },
      {
        "key": "D",
        "text": "dinh dưỡng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "động năng",
    "explanationSimple": "'động năng' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1012,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q012",
    "lessonId": 26,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'potential energy' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "thế năng",
    "answerText": "thế năng",
    "explanationSimple": "'potential energy' tương ứng với 'thế năng' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1013,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q013",
    "lessonId": 26,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'electrical energy'?",
    "options": [
      {
        "key": "A",
        "text": "điện năng"
      },
      {
        "key": "B",
        "text": "ô nhiễm"
      },
      {
        "key": "C",
        "text": "trọng lượng"
      },
      {
        "key": "D",
        "text": "vệ sinh"
      }
    ],
    "correctAnswer": "A",
    "answerText": "điện năng",
    "explanationSimple": "'điện năng' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1014,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q014",
    "lessonId": 26,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'light energy' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "quang năng",
    "answerText": "quang năng",
    "explanationSimple": "'light energy' tương ứng với 'quang năng' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1015,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q015",
    "lessonId": 26,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'waste'?",
    "options": [
      {
        "key": "A",
        "text": "hao phí"
      },
      {
        "key": "B",
        "text": "tiết kiệm"
      },
      {
        "key": "C",
        "text": "mô"
      },
      {
        "key": "D",
        "text": "thể lỏng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "hao phí",
    "explanationSimple": "'hao phí' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1016,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q016",
    "lessonId": 26,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Các dạng năng lượng và chuyển hóa năng lượng'.",
    "options": null,
    "correctAnswer": "động năng",
    "answerText": "động năng",
    "explanationSimple": "Một từ khóa đúng là 'động năng'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1017,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q017",
    "lessonId": 26,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Các dạng năng lượng và chuyển hóa năng lượng'.",
    "options": null,
    "correctAnswer": "hao phí",
    "answerText": "hao phí",
    "explanationSimple": "Một từ khóa đúng là 'hao phí'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1018,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q018",
    "lessonId": 26,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Các dạng năng lượng và chuyển hóa năng lượng'.",
    "options": null,
    "correctAnswer": "quang năng",
    "answerText": "quang năng",
    "explanationSimple": "Một từ khóa đúng là 'quang năng'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1019,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q019",
    "lessonId": 26,
    "questionType": "true_false",
    "questionText": "Một số dạng năng lượng: động năng, thế năng, nhiệt năng, quang năng, điện năng, hóa năng, âm năng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1020,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q020",
    "lessonId": 26,
    "questionType": "true_false",
    "questionText": "Năng lượng có thể chuyển hóa từ dạng này sang dạng khác.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1021,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q021",
    "lessonId": 26,
    "questionType": "true_false",
    "questionText": "Trong quá trình chuyển hóa thường có năng lượng hao phí.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1022,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q022",
    "lessonId": 26,
    "questionType": "true_false",
    "questionText": "Nhận biết dạng năng lượng chính và năng lượng hao phí giúp sử dụng hiệu quả hơn.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1023,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q023",
    "lessonId": 26,
    "questionType": "true_false",
    "questionText": "Nghĩ năng lượng hao phí biến mất.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 1024,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q024",
    "lessonId": 26,
    "questionType": "true_false",
    "questionText": "Không phân biệt dạng năng lượng chính/phụ.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 1025,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q025",
    "lessonId": 26,
    "questionType": "true_false",
    "questionText": "Cho rằng một thiết bị chỉ có một dạng năng lượng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 1026,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q026",
    "lessonId": 26,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các dạng năng lượng và chuyển hóa năng lượng', hãy nêu một thuật ngữ liên quan đến ý: Năng lượng có thể chuyển hóa từ dạng này sang dạng khác.",
    "options": null,
    "correctAnswer": "động năng",
    "answerText": "động năng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'động năng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1027,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q027",
    "lessonId": 26,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các dạng năng lượng và chuyển hóa năng lượng', hãy nêu một thuật ngữ liên quan đến ý: Năng lượng có thể chuyển hóa từ dạng này sang dạng khác.",
    "options": null,
    "correctAnswer": "điện năng",
    "answerText": "điện năng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'điện năng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1028,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q028",
    "lessonId": 26,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các dạng năng lượng và chuyển hóa năng lượng', hãy nêu một thuật ngữ liên quan đến ý: Trong quá trình chuyển hóa thường có năng lượng hao phí.",
    "options": null,
    "correctAnswer": "thế năng",
    "answerText": "thế năng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thế năng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1029,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q029",
    "lessonId": 26,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các dạng năng lượng và chuyển hóa năng lượng', hãy nêu một thuật ngữ liên quan đến ý: Một số dạng năng lượng: động năng, thế năng, nhiệt năng, quang năng, điện năng, hóa năng, âm năng.",
    "options": null,
    "correctAnswer": "động năng",
    "answerText": "động năng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'động năng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1030,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q030",
    "lessonId": 26,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các dạng năng lượng và chuyển hóa năng lượng', hãy nêu một thuật ngữ liên quan đến ý: Một số dạng năng lượng: động năng, thế năng, nhiệt năng, quang năng, điện năng, hóa năng, âm năng.",
    "options": null,
    "correctAnswer": "động năng",
    "answerText": "động năng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'động năng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1031,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q031",
    "lessonId": 26,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các dạng năng lượng và chuyển hóa năng lượng', hãy nêu một thuật ngữ liên quan đến ý: Nhận biết dạng năng lượng chính và năng lượng hao phí giúp sử dụng hiệu quả hơn.",
    "options": null,
    "correctAnswer": "hao phí",
    "answerText": "hao phí",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'hao phí' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1032,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q032",
    "lessonId": 26,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các dạng năng lượng và chuyển hóa năng lượng', hãy nêu một thuật ngữ liên quan đến ý: Một số dạng năng lượng: động năng, thế năng, nhiệt năng, quang năng, điện năng, hóa năng, âm năng.",
    "options": null,
    "correctAnswer": "hao phí",
    "answerText": "hao phí",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'hao phí' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1033,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q033",
    "lessonId": 26,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các dạng năng lượng và chuyển hóa năng lượng', hãy nêu một thuật ngữ liên quan đến ý: Nhận biết dạng năng lượng chính và năng lượng hao phí giúp sử dụng hiệu quả hơn.",
    "options": null,
    "correctAnswer": "hao phí",
    "answerText": "hao phí",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'hao phí' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1034,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q034",
    "lessonId": 26,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Các dạng năng lượng và chuyển hóa năng lượng', hãy nêu một thuật ngữ liên quan đến ý: Trong quá trình chuyển hóa thường có năng lượng hao phí.",
    "options": null,
    "correctAnswer": "điện năng",
    "answerText": "điện năng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'điện năng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1035,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q035",
    "lessonId": 26,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Đèn pin chuyển điện năng thành quang năng và nhiệt năng.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Không phân biệt dạng năng lượng chính/phụ."
      },
      {
        "key": "B",
        "text": "Trong quá trình chuyển hóa thường có năng lượng hao phí."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Trong quá trình chuyển hóa thường có năng lượng hao phí.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1036,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q036",
    "lessonId": 26,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Quạt điện chuyển điện năng thành động năng của cánh quạt.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Không phân biệt dạng năng lượng chính/phụ."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1037,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q037",
    "lessonId": 26,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Quạt điện chuyển điện năng thành động năng của cánh quạt.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Năng lượng có thể chuyển hóa từ dạng này sang dạng khác."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Không phân biệt dạng năng lượng chính/phụ."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Năng lượng có thể chuyển hóa từ dạng này sang dạng khác.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1038,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q038",
    "lessonId": 26,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Các dạng năng lượng và chuyển hóa năng lượng', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Cho rằng một thiết bị chỉ có một dạng năng lượng."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1039,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q039",
    "lessonId": 26,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Các dạng năng lượng và chuyển hóa năng lượng', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Nhận biết dạng năng lượng chính và năng lượng hao phí giúp sử dụng hiệu quả hơn."
      },
      {
        "key": "D",
        "text": "Nghĩ năng lượng hao phí biến mất."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nhận biết dạng năng lượng chính và năng lượng hao phí giúp sử dụng hiệu quả hơn.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1040,
    "sourceId": "sci6-b2-l26-cac-dang-nang-luong-va-chuyen-hoa-nang-luong-q040",
    "lessonId": 26,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Quạt điện chuyển điện năng thành động năng của cánh quạt.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Cho rằng một thiết bị chỉ có một dạng năng lượng."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1041,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q001",
    "lessonId": 27,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Tiết kiệm năng lượng và năng lượng tái tạo'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Nêu cách tiết kiệm năng lượng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nêu cách tiết kiệm năng lượng.",
    "explanationSimple": "Bài này hướng tới: Nêu cách tiết kiệm năng lượng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 1042,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q002",
    "lessonId": 27,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Tiết kiệm năng lượng và năng lượng tái tạo'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Không cần quan sát"
      },
      {
        "key": "C",
        "text": "Nhận biết năng lượng tái tạo."
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nhận biết năng lượng tái tạo.",
    "explanationSimple": "Bài này hướng tới: Nhận biết năng lượng tái tạo.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 1043,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q003",
    "lessonId": 27,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Tiết kiệm năng lượng và năng lượng tái tạo'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần quan sát"
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Chọn hành động sử dụng năng lượng hợp lý."
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chọn hành động sử dụng năng lượng hợp lý.",
    "explanationSimple": "Bài này hướng tới: Chọn hành động sử dụng năng lượng hợp lý.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 1044,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q004",
    "lessonId": 27,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tiết kiệm năng lượng và năng lượng tái tạo'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Năng lượng tái tạo gồm năng lượng mặt trời, gió, nước, sinh khối ở mức phổ thông."
      },
      {
        "key": "C",
        "text": "Để thiết bị chờ cả ngày."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Năng lượng tái tạo gồm năng lượng mặt trời, gió, nước, sinh khối ở mức phổ thông.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1045,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q005",
    "lessonId": 27,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tiết kiệm năng lượng và năng lượng tái tạo'?",
    "options": [
      {
        "key": "A",
        "text": "Học sinh có thể tiết kiệm năng lượng bằng hành động nhỏ như tắt thiết bị khi không dùng."
      },
      {
        "key": "B",
        "text": "Để thiết bị chờ cả ngày."
      },
      {
        "key": "C",
        "text": "Nghĩ năng lượng tái tạo không có bất kỳ tác động nào."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Học sinh có thể tiết kiệm năng lượng bằng hành động nhỏ như tắt thiết bị khi không dùng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1046,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q006",
    "lessonId": 27,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tiết kiệm năng lượng và năng lượng tái tạo'?",
    "options": [
      {
        "key": "A",
        "text": "Tiết kiệm là không dùng gì cả."
      },
      {
        "key": "B",
        "text": "Nhiên liệu hóa thạch có hạn và có thể gây ô nhiễm khi sử dụng nhiều."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Để thiết bị chờ cả ngày."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nhiên liệu hóa thạch có hạn và có thể gây ô nhiễm khi sử dụng nhiều.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1047,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q007",
    "lessonId": 27,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tiết kiệm năng lượng và năng lượng tái tạo'?",
    "options": [
      {
        "key": "A",
        "text": "Để thiết bị chờ cả ngày."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Tiết kiệm là không dùng gì cả."
      },
      {
        "key": "D",
        "text": "Học sinh có thể tiết kiệm năng lượng bằng hành động nhỏ như tắt thiết bị khi không dùng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Học sinh có thể tiết kiệm năng lượng bằng hành động nhỏ như tắt thiết bị khi không dùng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1048,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q008",
    "lessonId": 27,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tiết kiệm năng lượng và năng lượng tái tạo'?",
    "options": [
      {
        "key": "A",
        "text": "Năng lượng tái tạo gồm năng lượng mặt trời, gió, nước, sinh khối ở mức phổ thông."
      },
      {
        "key": "B",
        "text": "Để thiết bị chờ cả ngày."
      },
      {
        "key": "C",
        "text": "Tiết kiệm là không dùng gì cả."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Năng lượng tái tạo gồm năng lượng mặt trời, gió, nước, sinh khối ở mức phổ thông.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1049,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q009",
    "lessonId": 27,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tiết kiệm năng lượng và năng lượng tái tạo'?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ năng lượng tái tạo không có bất kỳ tác động nào."
      },
      {
        "key": "B",
        "text": "Để thiết bị chờ cả ngày."
      },
      {
        "key": "C",
        "text": "Học sinh có thể tiết kiệm năng lượng bằng hành động nhỏ như tắt thiết bị khi không dùng."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Học sinh có thể tiết kiệm năng lượng bằng hành động nhỏ như tắt thiết bị khi không dùng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1050,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q010",
    "lessonId": 27,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tiết kiệm năng lượng và năng lượng tái tạo'?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ năng lượng tái tạo không có bất kỳ tác động nào."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Học sinh có thể tiết kiệm năng lượng bằng hành động nhỏ như tắt thiết bị khi không dùng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Học sinh có thể tiết kiệm năng lượng bằng hành động nhỏ như tắt thiết bị khi không dùng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1051,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q011",
    "lessonId": 27,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'save'?",
    "options": [
      {
        "key": "A",
        "text": "tổng hợp"
      },
      {
        "key": "B",
        "text": "sinh sản"
      },
      {
        "key": "C",
        "text": "tiết kiệm"
      },
      {
        "key": "D",
        "text": "hao phí"
      }
    ],
    "correctAnswer": "C",
    "answerText": "tiết kiệm",
    "explanationSimple": "'tiết kiệm' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1052,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q012",
    "lessonId": 27,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'renewable energy' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "năng lượng tái tạo",
    "answerText": "năng lượng tái tạo",
    "explanationSimple": "'renewable energy' tương ứng với 'năng lượng tái tạo' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1053,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q013",
    "lessonId": 27,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'solar'?",
    "options": [
      {
        "key": "A",
        "text": "nguồn năng lượng"
      },
      {
        "key": "B",
        "text": "mặt trời"
      },
      {
        "key": "C",
        "text": "thời gian"
      },
      {
        "key": "D",
        "text": "bề mặt"
      }
    ],
    "correctAnswer": "B",
    "answerText": "mặt trời",
    "explanationSimple": "'mặt trời' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1054,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q014",
    "lessonId": 27,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'wind' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "gió",
    "answerText": "gió",
    "explanationSimple": "'wind' tương ứng với 'gió' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1055,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q015",
    "lessonId": 27,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'fossil fuel'?",
    "options": [
      {
        "key": "A",
        "text": "nhiên liệu hóa thạch"
      },
      {
        "key": "B",
        "text": "kính hiển vi"
      },
      {
        "key": "C",
        "text": "hành tinh"
      },
      {
        "key": "D",
        "text": "phục hồi"
      }
    ],
    "correctAnswer": "A",
    "answerText": "nhiên liệu hóa thạch",
    "explanationSimple": "'nhiên liệu hóa thạch' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1056,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q016",
    "lessonId": 27,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Tiết kiệm năng lượng và năng lượng tái tạo'.",
    "options": null,
    "correctAnswer": "nhiên liệu hóa thạch",
    "answerText": "nhiên liệu hóa thạch",
    "explanationSimple": "Một từ khóa đúng là 'nhiên liệu hóa thạch'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1057,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q017",
    "lessonId": 27,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Tiết kiệm năng lượng và năng lượng tái tạo'.",
    "options": null,
    "correctAnswer": "nhiên liệu hóa thạch",
    "answerText": "nhiên liệu hóa thạch",
    "explanationSimple": "Một từ khóa đúng là 'nhiên liệu hóa thạch'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1058,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q018",
    "lessonId": 27,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Tiết kiệm năng lượng và năng lượng tái tạo'.",
    "options": null,
    "correctAnswer": "tiết kiệm",
    "answerText": "tiết kiệm",
    "explanationSimple": "Một từ khóa đúng là 'tiết kiệm'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1059,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q019",
    "lessonId": 27,
    "questionType": "true_false",
    "questionText": "Tiết kiệm năng lượng là dùng năng lượng hợp lý, tránh lãng phí.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1060,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q020",
    "lessonId": 27,
    "questionType": "true_false",
    "questionText": "Năng lượng tái tạo gồm năng lượng mặt trời, gió, nước, sinh khối ở mức phổ thông.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1061,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q021",
    "lessonId": 27,
    "questionType": "true_false",
    "questionText": "Nhiên liệu hóa thạch có hạn và có thể gây ô nhiễm khi sử dụng nhiều.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1062,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q022",
    "lessonId": 27,
    "questionType": "true_false",
    "questionText": "Học sinh có thể tiết kiệm năng lượng bằng hành động nhỏ như tắt thiết bị khi không dùng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1063,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q023",
    "lessonId": 27,
    "questionType": "true_false",
    "questionText": "Tiết kiệm là không dùng gì cả.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 1064,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q024",
    "lessonId": 27,
    "questionType": "true_false",
    "questionText": "Nghĩ năng lượng tái tạo không có bất kỳ tác động nào.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 1065,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q025",
    "lessonId": 27,
    "questionType": "true_false",
    "questionText": "Để thiết bị chờ cả ngày.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 1066,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q026",
    "lessonId": 27,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tiết kiệm năng lượng và năng lượng tái tạo', hãy nêu một thuật ngữ liên quan đến ý: Học sinh có thể tiết kiệm năng lượng bằng hành động nhỏ như tắt thiết bị khi không dùng.",
    "options": null,
    "correctAnswer": "mặt trời",
    "answerText": "mặt trời",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'mặt trời' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1067,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q027",
    "lessonId": 27,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tiết kiệm năng lượng và năng lượng tái tạo', hãy nêu một thuật ngữ liên quan đến ý: Năng lượng tái tạo gồm năng lượng mặt trời, gió, nước, sinh khối ở mức phổ thông.",
    "options": null,
    "correctAnswer": "gió",
    "answerText": "gió",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'gió' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1068,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q028",
    "lessonId": 27,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tiết kiệm năng lượng và năng lượng tái tạo', hãy nêu một thuật ngữ liên quan đến ý: Tiết kiệm năng lượng là dùng năng lượng hợp lý, tránh lãng phí.",
    "options": null,
    "correctAnswer": "tiết kiệm",
    "answerText": "tiết kiệm",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tiết kiệm' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1069,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q029",
    "lessonId": 27,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tiết kiệm năng lượng và năng lượng tái tạo', hãy nêu một thuật ngữ liên quan đến ý: Học sinh có thể tiết kiệm năng lượng bằng hành động nhỏ như tắt thiết bị khi không dùng.",
    "options": null,
    "correctAnswer": "năng lượng tái tạo",
    "answerText": "năng lượng tái tạo",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'năng lượng tái tạo' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1070,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q030",
    "lessonId": 27,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tiết kiệm năng lượng và năng lượng tái tạo', hãy nêu một thuật ngữ liên quan đến ý: Nhiên liệu hóa thạch có hạn và có thể gây ô nhiễm khi sử dụng nhiều.",
    "options": null,
    "correctAnswer": "tiết kiệm",
    "answerText": "tiết kiệm",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tiết kiệm' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1071,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q031",
    "lessonId": 27,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tiết kiệm năng lượng và năng lượng tái tạo', hãy nêu một thuật ngữ liên quan đến ý: Nhiên liệu hóa thạch có hạn và có thể gây ô nhiễm khi sử dụng nhiều.",
    "options": null,
    "correctAnswer": "gió",
    "answerText": "gió",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'gió' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1072,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q032",
    "lessonId": 27,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tiết kiệm năng lượng và năng lượng tái tạo', hãy nêu một thuật ngữ liên quan đến ý: Năng lượng tái tạo gồm năng lượng mặt trời, gió, nước, sinh khối ở mức phổ thông.",
    "options": null,
    "correctAnswer": "gió",
    "answerText": "gió",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'gió' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1073,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q033",
    "lessonId": 27,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tiết kiệm năng lượng và năng lượng tái tạo', hãy nêu một thuật ngữ liên quan đến ý: Năng lượng tái tạo gồm năng lượng mặt trời, gió, nước, sinh khối ở mức phổ thông.",
    "options": null,
    "correctAnswer": "năng lượng tái tạo",
    "answerText": "năng lượng tái tạo",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'năng lượng tái tạo' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1074,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q034",
    "lessonId": 27,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Tiết kiệm năng lượng và năng lượng tái tạo', hãy nêu một thuật ngữ liên quan đến ý: Tiết kiệm năng lượng là dùng năng lượng hợp lý, tránh lãng phí.",
    "options": null,
    "correctAnswer": "tiết kiệm",
    "answerText": "tiết kiệm",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tiết kiệm' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1075,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q035",
    "lessonId": 27,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Dùng bình nước nóng năng lượng mặt trời.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Để thiết bị chờ cả ngày."
      },
      {
        "key": "B",
        "text": "Tiết kiệm năng lượng là dùng năng lượng hợp lý, tránh lãng phí."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tiết kiệm năng lượng là dùng năng lượng hợp lý, tránh lãng phí.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1076,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q036",
    "lessonId": 27,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Tắt đèn khi ra khỏi phòng.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Nghĩ năng lượng tái tạo không có bất kỳ tác động nào."
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1077,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q037",
    "lessonId": 27,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Dùng bình nước nóng năng lượng mặt trời.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Nhiên liệu hóa thạch có hạn và có thể gây ô nhiễm khi sử dụng nhiều."
      },
      {
        "key": "C",
        "text": "Để thiết bị chờ cả ngày."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nhiên liệu hóa thạch có hạn và có thể gây ô nhiễm khi sử dụng nhiều.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1078,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q038",
    "lessonId": 27,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Tắt đèn khi ra khỏi phòng.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Nghĩ năng lượng tái tạo không có bất kỳ tác động nào."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1079,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q039",
    "lessonId": 27,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Dùng bình nước nóng năng lượng mặt trời.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Tiết kiệm là không dùng gì cả."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Học sinh có thể tiết kiệm năng lượng bằng hành động nhỏ như tắt thiết bị khi không dùng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Học sinh có thể tiết kiệm năng lượng bằng hành động nhỏ như tắt thiết bị khi không dùng.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1080,
    "sourceId": "sci6-b2-l27-tiet-kiem-nang-luong-va-nang-luong-tai-tao-q040",
    "lessonId": 27,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Tiết kiệm năng lượng và năng lượng tái tạo', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Tiết kiệm là không dùng gì cả."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1081,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q001",
    "lessonId": 28,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Trái Đất, Mặt Trời và Mặt Trăng'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Nêu mối quan hệ Trái Đất - Mặt Trời - Mặt Trăng."
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nêu mối quan hệ Trái Đất - Mặt Trời - Mặt Trăng.",
    "explanationSimple": "Bài này hướng tới: Nêu mối quan hệ Trái Đất - Mặt Trời - Mặt Trăng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 1082,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q002",
    "lessonId": 28,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Trái Đất, Mặt Trời và Mặt Trăng'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần quan sát"
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Giải thích vì sao thấy Mặt Trăng."
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Giải thích vì sao thấy Mặt Trăng.",
    "explanationSimple": "Bài này hướng tới: Giải thích vì sao thấy Mặt Trăng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 1083,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q003",
    "lessonId": 28,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Trái Đất, Mặt Trời và Mặt Trăng'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "B",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "C",
        "text": "Nhận biết pha Mặt Trăng ở mức cơ bản."
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nhận biết pha Mặt Trăng ở mức cơ bản.",
    "explanationSimple": "Bài này hướng tới: Nhận biết pha Mặt Trăng ở mức cơ bản.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 1084,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q004",
    "lessonId": 28,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trái Đất, Mặt Trời và Mặt Trăng'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm sao và hành tinh."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Chuyển động nhìn thấy của Mặt Trời trên bầu trời là kết quả quan sát từ Trái Đất."
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chuyển động nhìn thấy của Mặt Trời trên bầu trời là kết quả quan sát từ Trái Đất.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1085,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q005",
    "lessonId": 28,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trái Đất, Mặt Trời và Mặt Trăng'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm sao và hành tinh."
      },
      {
        "key": "B",
        "text": "Nghĩ Mặt Trăng tự phát sáng."
      },
      {
        "key": "C",
        "text": "Chuyển động nhìn thấy của Mặt Trời trên bầu trời là kết quả quan sát từ Trái Đất."
      },
      {
        "key": "D",
        "text": "Giải thích Mặt Trời quay quanh Trái Đất theo nghĩa tuyệt đối."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chuyển động nhìn thấy của Mặt Trời trên bầu trời là kết quả quan sát từ Trái Đất.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1086,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q006",
    "lessonId": 28,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trái Đất, Mặt Trời và Mặt Trăng'?",
    "options": [
      {
        "key": "A",
        "text": "Mặt Trăng là vệ tinh tự nhiên của Trái Đất và phản xạ ánh sáng Mặt Trời."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Giải thích Mặt Trời quay quanh Trái Đất theo nghĩa tuyệt đối."
      },
      {
        "key": "D",
        "text": "Nghĩ Mặt Trăng tự phát sáng."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Mặt Trăng là vệ tinh tự nhiên của Trái Đất và phản xạ ánh sáng Mặt Trời.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1087,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q007",
    "lessonId": 28,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trái Đất, Mặt Trời và Mặt Trăng'?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ Mặt Trăng tự phát sáng."
      },
      {
        "key": "B",
        "text": "Chuyển động nhìn thấy của Mặt Trời trên bầu trời là kết quả quan sát từ Trái Đất."
      },
      {
        "key": "C",
        "text": "Nhầm sao và hành tinh."
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chuyển động nhìn thấy của Mặt Trời trên bầu trời là kết quả quan sát từ Trái Đất.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1088,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q008",
    "lessonId": 28,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trái Đất, Mặt Trời và Mặt Trăng'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Mặt Trăng là vệ tinh tự nhiên của Trái Đất và phản xạ ánh sáng Mặt Trời."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Nhầm sao và hành tinh."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Mặt Trăng là vệ tinh tự nhiên của Trái Đất và phản xạ ánh sáng Mặt Trời.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1089,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q009",
    "lessonId": 28,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trái Đất, Mặt Trời và Mặt Trăng'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "B",
        "text": "Nghĩ Mặt Trăng tự phát sáng."
      },
      {
        "key": "C",
        "text": "Hình dạng phần sáng của Mặt Trăng thay đổi theo vị trí tương đối giữa Mặt Trời, Trái Đất và Mặt Trăng."
      },
      {
        "key": "D",
        "text": "Nhầm sao và hành tinh."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Hình dạng phần sáng của Mặt Trăng thay đổi theo vị trí tương đối giữa Mặt Trời, Trái Đất và Mặt Trăng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1090,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q010",
    "lessonId": 28,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trái Đất, Mặt Trời và Mặt Trăng'?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ Mặt Trăng tự phát sáng."
      },
      {
        "key": "B",
        "text": "Giải thích Mặt Trời quay quanh Trái Đất theo nghĩa tuyệt đối."
      },
      {
        "key": "C",
        "text": "Nhầm sao và hành tinh."
      },
      {
        "key": "D",
        "text": "Hình dạng phần sáng của Mặt Trăng thay đổi theo vị trí tương đối giữa Mặt Trời, Trái Đất và Mặt Trăng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Hình dạng phần sáng của Mặt Trăng thay đổi theo vị trí tương đối giữa Mặt Trời, Trái Đất và Mặt Trăng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1091,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q011",
    "lessonId": 28,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'Earth'?",
    "options": [
      {
        "key": "A",
        "text": "Trái Đất"
      },
      {
        "key": "B",
        "text": "kính hiển vi"
      },
      {
        "key": "C",
        "text": "ôn tập"
      },
      {
        "key": "D",
        "text": "quan sát"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Trái Đất",
    "explanationSimple": "'Trái Đất' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1092,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q012",
    "lessonId": 28,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'Sun' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "Mặt Trời",
    "answerText": "Mặt Trời",
    "explanationSimple": "'Sun' tương ứng với 'Mặt Trời' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1093,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q013",
    "lessonId": 28,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'Moon'?",
    "options": [
      {
        "key": "A",
        "text": "Mặt Trăng"
      },
      {
        "key": "B",
        "text": "trao đổi chất"
      },
      {
        "key": "C",
        "text": "nam châm"
      },
      {
        "key": "D",
        "text": "đa dạng sinh học"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Mặt Trăng",
    "explanationSimple": "'Mặt Trăng' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1094,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q014",
    "lessonId": 28,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'satellite' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "vệ tinh",
    "answerText": "vệ tinh",
    "explanationSimple": "'satellite' tương ứng với 'vệ tinh' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1095,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q015",
    "lessonId": 28,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'Moon phase'?",
    "options": [
      {
        "key": "A",
        "text": "nhiên liệu hóa thạch"
      },
      {
        "key": "B",
        "text": "chuyên hóa"
      },
      {
        "key": "C",
        "text": "sinh vật"
      },
      {
        "key": "D",
        "text": "pha Mặt Trăng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "pha Mặt Trăng",
    "explanationSimple": "'pha Mặt Trăng' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1096,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q016",
    "lessonId": 28,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Trái Đất, Mặt Trời và Mặt Trăng'.",
    "options": null,
    "correctAnswer": "Mặt Trời",
    "answerText": "Mặt Trời",
    "explanationSimple": "Một từ khóa đúng là 'Mặt Trời'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1097,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q017",
    "lessonId": 28,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Trái Đất, Mặt Trời và Mặt Trăng'.",
    "options": null,
    "correctAnswer": "pha Mặt Trăng",
    "answerText": "pha Mặt Trăng",
    "explanationSimple": "Một từ khóa đúng là 'pha Mặt Trăng'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1098,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q018",
    "lessonId": 28,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Trái Đất, Mặt Trời và Mặt Trăng'.",
    "options": null,
    "correctAnswer": "pha Mặt Trăng",
    "answerText": "pha Mặt Trăng",
    "explanationSimple": "Một từ khóa đúng là 'pha Mặt Trăng'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1099,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q019",
    "lessonId": 28,
    "questionType": "true_false",
    "questionText": "Mặt Trời là nguồn ánh sáng và nhiệt quan trọng cho Trái Đất.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1100,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q020",
    "lessonId": 28,
    "questionType": "true_false",
    "questionText": "Mặt Trăng là vệ tinh tự nhiên của Trái Đất và phản xạ ánh sáng Mặt Trời.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1101,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q021",
    "lessonId": 28,
    "questionType": "true_false",
    "questionText": "Hình dạng phần sáng của Mặt Trăng thay đổi theo vị trí tương đối giữa Mặt Trời, Trái Đất và Mặt Trăng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1102,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q022",
    "lessonId": 28,
    "questionType": "true_false",
    "questionText": "Chuyển động nhìn thấy của Mặt Trời trên bầu trời là kết quả quan sát từ Trái Đất.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1103,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q023",
    "lessonId": 28,
    "questionType": "true_false",
    "questionText": "Nghĩ Mặt Trăng tự phát sáng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 1104,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q024",
    "lessonId": 28,
    "questionType": "true_false",
    "questionText": "Nhầm sao và hành tinh.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 1105,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q025",
    "lessonId": 28,
    "questionType": "true_false",
    "questionText": "Giải thích Mặt Trời quay quanh Trái Đất theo nghĩa tuyệt đối.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 1106,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q026",
    "lessonId": 28,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trái Đất, Mặt Trời và Mặt Trăng', hãy nêu một thuật ngữ liên quan đến ý: Mặt Trời là nguồn ánh sáng và nhiệt quan trọng cho Trái Đất.",
    "options": null,
    "correctAnswer": "Mặt Trời",
    "answerText": "Mặt Trời",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'Mặt Trời' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1107,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q027",
    "lessonId": 28,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trái Đất, Mặt Trời và Mặt Trăng', hãy nêu một thuật ngữ liên quan đến ý: Mặt Trời là nguồn ánh sáng và nhiệt quan trọng cho Trái Đất.",
    "options": null,
    "correctAnswer": "vệ tinh",
    "answerText": "vệ tinh",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vệ tinh' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1108,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q028",
    "lessonId": 28,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trái Đất, Mặt Trời và Mặt Trăng', hãy nêu một thuật ngữ liên quan đến ý: Chuyển động nhìn thấy của Mặt Trời trên bầu trời là kết quả quan sát từ Trái Đất.",
    "options": null,
    "correctAnswer": "vệ tinh",
    "answerText": "vệ tinh",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vệ tinh' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1109,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q029",
    "lessonId": 28,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trái Đất, Mặt Trời và Mặt Trăng', hãy nêu một thuật ngữ liên quan đến ý: Mặt Trời là nguồn ánh sáng và nhiệt quan trọng cho Trái Đất.",
    "options": null,
    "correctAnswer": "Trái Đất",
    "answerText": "Trái Đất",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'Trái Đất' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1110,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q030",
    "lessonId": 28,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trái Đất, Mặt Trời và Mặt Trăng', hãy nêu một thuật ngữ liên quan đến ý: Mặt Trăng là vệ tinh tự nhiên của Trái Đất và phản xạ ánh sáng Mặt Trời.",
    "options": null,
    "correctAnswer": "Trái Đất",
    "answerText": "Trái Đất",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'Trái Đất' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1111,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q031",
    "lessonId": 28,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trái Đất, Mặt Trời và Mặt Trăng', hãy nêu một thuật ngữ liên quan đến ý: Hình dạng phần sáng của Mặt Trăng thay đổi theo vị trí tương đối giữa Mặt Trời, Trái Đất và Mặt Trăng.",
    "options": null,
    "correctAnswer": "vệ tinh",
    "answerText": "vệ tinh",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'vệ tinh' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1112,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q032",
    "lessonId": 28,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trái Đất, Mặt Trời và Mặt Trăng', hãy nêu một thuật ngữ liên quan đến ý: Mặt Trời là nguồn ánh sáng và nhiệt quan trọng cho Trái Đất.",
    "options": null,
    "correctAnswer": "Mặt Trời",
    "answerText": "Mặt Trời",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'Mặt Trời' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1113,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q033",
    "lessonId": 28,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trái Đất, Mặt Trời và Mặt Trăng', hãy nêu một thuật ngữ liên quan đến ý: Hình dạng phần sáng của Mặt Trăng thay đổi theo vị trí tương đối giữa Mặt Trời, Trái Đất và Mặt Trăng.",
    "options": null,
    "correctAnswer": "Mặt Trời",
    "answerText": "Mặt Trời",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'Mặt Trời' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1114,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q034",
    "lessonId": 28,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Trái Đất, Mặt Trời và Mặt Trăng', hãy nêu một thuật ngữ liên quan đến ý: Chuyển động nhìn thấy của Mặt Trời trên bầu trời là kết quả quan sát từ Trái Đất.",
    "options": null,
    "correctAnswer": "Mặt Trăng",
    "answerText": "Mặt Trăng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'Mặt Trăng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1115,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q035",
    "lessonId": 28,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Trái Đất, Mặt Trời và Mặt Trăng', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ Mặt Trăng tự phát sáng."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Chuyển động nhìn thấy của Mặt Trời trên bầu trời là kết quả quan sát từ Trái Đất."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Chuyển động nhìn thấy của Mặt Trời trên bầu trời là kết quả quan sát từ Trái Đất.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1116,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q036",
    "lessonId": 28,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Ta thấy Mặt Trăng vì nó phản chiếu ánh sáng Mặt Trời.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Nghĩ Mặt Trăng tự phát sáng."
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1117,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q037",
    "lessonId": 28,
    "questionType": "scenario_choice",
    "questionText": "Khi quan sát hiện tượng: Trăng tròn là một pha quan sát được.. Bước đúng tiếp theo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Hình dạng phần sáng của Mặt Trăng thay đổi theo vị trí tương đối giữa Mặt Trời, Trái Đất và Mặt Trăng."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Nhầm sao và hành tinh."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Hình dạng phần sáng của Mặt Trăng thay đổi theo vị trí tương đối giữa Mặt Trời, Trái Đất và Mặt Trăng.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1118,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q038",
    "lessonId": 28,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Ta thấy Mặt Trăng vì nó phản chiếu ánh sáng Mặt Trời.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Giải thích Mặt Trời quay quanh Trái Đất theo nghĩa tuyệt đối."
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1119,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q039",
    "lessonId": 28,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Trái Đất, Mặt Trời và Mặt Trăng', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ Mặt Trăng tự phát sáng."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Mặt Trời là nguồn ánh sáng và nhiệt quan trọng cho Trái Đất."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Mặt Trời là nguồn ánh sáng và nhiệt quan trọng cho Trái Đất.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1120,
    "sourceId": "sci6-b2-l28-trai-dat-mat-troi-va-mat-trang-q040",
    "lessonId": 28,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Trái Đất, Mặt Trời và Mặt Trăng', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Giải thích Mặt Trời quay quanh Trái Đất theo nghĩa tuyệt đối."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1121,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q001",
    "lessonId": 29,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Hệ Mặt Trời và Ngân Hà'?",
    "options": [
      {
        "key": "A",
        "text": "Nhận biết Hệ Mặt Trời."
      },
      {
        "key": "B",
        "text": "Không cần quan sát"
      },
      {
        "key": "C",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "D",
        "text": "Chỉ nhớ tên bài"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nhận biết Hệ Mặt Trời.",
    "explanationSimple": "Bài này hướng tới: Nhận biết Hệ Mặt Trời.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 1122,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q002",
    "lessonId": 29,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Hệ Mặt Trời và Ngân Hà'?",
    "options": [
      {
        "key": "A",
        "text": "Phân biệt sao/hành tinh/vệ tinh/thiên hà."
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Phân biệt sao/hành tinh/vệ tinh/thiên hà.",
    "explanationSimple": "Bài này hướng tới: Phân biệt sao/hành tinh/vệ tinh/thiên hà.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 1123,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q003",
    "lessonId": 29,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Hệ Mặt Trời và Ngân Hà'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "B",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "C",
        "text": "Hiểu vị trí khái quát của Trái Đất."
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Hiểu vị trí khái quát của Trái Đất.",
    "explanationSimple": "Bài này hướng tới: Hiểu vị trí khái quát của Trái Đất.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 1124,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q004",
    "lessonId": 29,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Hệ Mặt Trời và Ngân Hà'?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "B",
        "text": "Cho rằng Trái Đất đứng yên ở trung tâm vũ trụ."
      },
      {
        "key": "C",
        "text": "Hệ Mặt Trời gồm Mặt Trời và các thiên thể chuyển động quanh nó."
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Hệ Mặt Trời gồm Mặt Trời và các thiên thể chuyển động quanh nó.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1125,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q005",
    "lessonId": 29,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Hệ Mặt Trời và Ngân Hà'?",
    "options": [
      {
        "key": "A",
        "text": "Trái Đất là một hành tinh trong Hệ Mặt Trời."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Cho rằng Trái Đất đứng yên ở trung tâm vũ trụ."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Trái Đất là một hành tinh trong Hệ Mặt Trời.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1126,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q006",
    "lessonId": 29,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Hệ Mặt Trời và Ngân Hà'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "B",
        "text": "Trái Đất là một hành tinh trong Hệ Mặt Trời."
      },
      {
        "key": "C",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Trái Đất là một hành tinh trong Hệ Mặt Trời.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1127,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q007",
    "lessonId": 29,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Hệ Mặt Trời và Ngân Hà'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm Hệ Mặt Trời với Ngân Hà."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Ngân Hà là thiên hà chứa Hệ Mặt Trời của chúng ta."
      },
      {
        "key": "D",
        "text": "Nghĩ Mặt Trời là hành tinh."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Ngân Hà là thiên hà chứa Hệ Mặt Trời của chúng ta.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1128,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q008",
    "lessonId": 29,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Hệ Mặt Trời và Ngân Hà'?",
    "options": [
      {
        "key": "A",
        "text": "Cần phân biệt sao, hành tinh, vệ tinh và thiên hà ở mức cơ bản."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Nhầm Hệ Mặt Trời với Ngân Hà."
      },
      {
        "key": "D",
        "text": "Cho rằng Trái Đất đứng yên ở trung tâm vũ trụ."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cần phân biệt sao, hành tinh, vệ tinh và thiên hà ở mức cơ bản.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1129,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q009",
    "lessonId": 29,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Hệ Mặt Trời và Ngân Hà'?",
    "options": [
      {
        "key": "A",
        "text": "Ngân Hà là thiên hà chứa Hệ Mặt Trời của chúng ta."
      },
      {
        "key": "B",
        "text": "Cho rằng Trái Đất đứng yên ở trung tâm vũ trụ."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Ngân Hà là thiên hà chứa Hệ Mặt Trời của chúng ta.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1130,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q010",
    "lessonId": 29,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Hệ Mặt Trời và Ngân Hà'?",
    "options": [
      {
        "key": "A",
        "text": "Cần phân biệt sao, hành tinh, vệ tinh và thiên hà ở mức cơ bản."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Nghĩ Mặt Trời là hành tinh."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cần phân biệt sao, hành tinh, vệ tinh và thiên hà ở mức cơ bản.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1131,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q011",
    "lessonId": 29,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'Solar System'?",
    "options": [
      {
        "key": "A",
        "text": "Hệ Mặt Trời"
      },
      {
        "key": "B",
        "text": "thủy tinh"
      },
      {
        "key": "C",
        "text": "sao"
      },
      {
        "key": "D",
        "text": "hỗn hợp"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Hệ Mặt Trời",
    "explanationSimple": "'Hệ Mặt Trời' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1132,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q012",
    "lessonId": 29,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'Milky Way' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "Ngân Hà",
    "answerText": "Ngân Hà",
    "explanationSimple": "'Milky Way' tương ứng với 'Ngân Hà' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1133,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q013",
    "lessonId": 29,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'planet'?",
    "options": [
      {
        "key": "A",
        "text": "mô"
      },
      {
        "key": "B",
        "text": "biến dạng"
      },
      {
        "key": "C",
        "text": "hành tinh"
      },
      {
        "key": "D",
        "text": "kéo"
      }
    ],
    "correctAnswer": "C",
    "answerText": "hành tinh",
    "explanationSimple": "'hành tinh' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1134,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q014",
    "lessonId": 29,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'star' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "sao",
    "answerText": "sao",
    "explanationSimple": "'star' tương ứng với 'sao' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1135,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q015",
    "lessonId": 29,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'galaxy'?",
    "options": [
      {
        "key": "A",
        "text": "sự cố"
      },
      {
        "key": "B",
        "text": "màng tế bào"
      },
      {
        "key": "C",
        "text": "quang năng"
      },
      {
        "key": "D",
        "text": "thiên hà"
      }
    ],
    "correctAnswer": "D",
    "answerText": "thiên hà",
    "explanationSimple": "'thiên hà' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1136,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q016",
    "lessonId": 29,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Hệ Mặt Trời và Ngân Hà'.",
    "options": null,
    "correctAnswer": "hành tinh",
    "answerText": "hành tinh",
    "explanationSimple": "Một từ khóa đúng là 'hành tinh'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1137,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q017",
    "lessonId": 29,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Hệ Mặt Trời và Ngân Hà'.",
    "options": null,
    "correctAnswer": "Hệ Mặt Trời",
    "answerText": "Hệ Mặt Trời",
    "explanationSimple": "Một từ khóa đúng là 'Hệ Mặt Trời'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1138,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q018",
    "lessonId": 29,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Hệ Mặt Trời và Ngân Hà'.",
    "options": null,
    "correctAnswer": "thiên hà",
    "answerText": "thiên hà",
    "explanationSimple": "Một từ khóa đúng là 'thiên hà'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1139,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q019",
    "lessonId": 29,
    "questionType": "true_false",
    "questionText": "Hệ Mặt Trời gồm Mặt Trời và các thiên thể chuyển động quanh nó.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1140,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q020",
    "lessonId": 29,
    "questionType": "true_false",
    "questionText": "Trái Đất là một hành tinh trong Hệ Mặt Trời.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1141,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q021",
    "lessonId": 29,
    "questionType": "true_false",
    "questionText": "Ngân Hà là thiên hà chứa Hệ Mặt Trời của chúng ta.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1142,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q022",
    "lessonId": 29,
    "questionType": "true_false",
    "questionText": "Cần phân biệt sao, hành tinh, vệ tinh và thiên hà ở mức cơ bản.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1143,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q023",
    "lessonId": 29,
    "questionType": "true_false",
    "questionText": "Nghĩ Mặt Trời là hành tinh.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 1144,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q024",
    "lessonId": 29,
    "questionType": "true_false",
    "questionText": "Nhầm Hệ Mặt Trời với Ngân Hà.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 1145,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q025",
    "lessonId": 29,
    "questionType": "true_false",
    "questionText": "Cho rằng Trái Đất đứng yên ở trung tâm vũ trụ.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 1146,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q026",
    "lessonId": 29,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hệ Mặt Trời và Ngân Hà', hãy nêu một thuật ngữ liên quan đến ý: Trái Đất là một hành tinh trong Hệ Mặt Trời.",
    "options": null,
    "correctAnswer": "thiên hà",
    "answerText": "thiên hà",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thiên hà' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1147,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q027",
    "lessonId": 29,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hệ Mặt Trời và Ngân Hà', hãy nêu một thuật ngữ liên quan đến ý: Trái Đất là một hành tinh trong Hệ Mặt Trời.",
    "options": null,
    "correctAnswer": "thiên hà",
    "answerText": "thiên hà",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thiên hà' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1148,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q028",
    "lessonId": 29,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hệ Mặt Trời và Ngân Hà', hãy nêu một thuật ngữ liên quan đến ý: Cần phân biệt sao, hành tinh, vệ tinh và thiên hà ở mức cơ bản.",
    "options": null,
    "correctAnswer": "Ngân Hà",
    "answerText": "Ngân Hà",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'Ngân Hà' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1149,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q029",
    "lessonId": 29,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hệ Mặt Trời và Ngân Hà', hãy nêu một thuật ngữ liên quan đến ý: Ngân Hà là thiên hà chứa Hệ Mặt Trời của chúng ta.",
    "options": null,
    "correctAnswer": "hành tinh",
    "answerText": "hành tinh",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'hành tinh' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1150,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q030",
    "lessonId": 29,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hệ Mặt Trời và Ngân Hà', hãy nêu một thuật ngữ liên quan đến ý: Cần phân biệt sao, hành tinh, vệ tinh và thiên hà ở mức cơ bản.",
    "options": null,
    "correctAnswer": "sao",
    "answerText": "sao",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'sao' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1151,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q031",
    "lessonId": 29,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hệ Mặt Trời và Ngân Hà', hãy nêu một thuật ngữ liên quan đến ý: Hệ Mặt Trời gồm Mặt Trời và các thiên thể chuyển động quanh nó.",
    "options": null,
    "correctAnswer": "sao",
    "answerText": "sao",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'sao' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1152,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q032",
    "lessonId": 29,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hệ Mặt Trời và Ngân Hà', hãy nêu một thuật ngữ liên quan đến ý: Trái Đất là một hành tinh trong Hệ Mặt Trời.",
    "options": null,
    "correctAnswer": "Hệ Mặt Trời",
    "answerText": "Hệ Mặt Trời",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'Hệ Mặt Trời' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1153,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q033",
    "lessonId": 29,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hệ Mặt Trời và Ngân Hà', hãy nêu một thuật ngữ liên quan đến ý: Ngân Hà là thiên hà chứa Hệ Mặt Trời của chúng ta.",
    "options": null,
    "correctAnswer": "thiên hà",
    "answerText": "thiên hà",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thiên hà' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1154,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q034",
    "lessonId": 29,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Hệ Mặt Trời và Ngân Hà', hãy nêu một thuật ngữ liên quan đến ý: Cần phân biệt sao, hành tinh, vệ tinh và thiên hà ở mức cơ bản.",
    "options": null,
    "correctAnswer": "sao",
    "answerText": "sao",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'sao' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1155,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q035",
    "lessonId": 29,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Trái Đất chuyển động quanh Mặt Trời.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Cần phân biệt sao, hành tinh, vệ tinh và thiên hà ở mức cơ bản."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Nhầm Hệ Mặt Trời với Ngân Hà."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cần phân biệt sao, hành tinh, vệ tinh và thiên hà ở mức cơ bản.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1156,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q036",
    "lessonId": 29,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Hệ Mặt Trời và Ngân Hà', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Nhầm Hệ Mặt Trời với Ngân Hà."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1157,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q037",
    "lessonId": 29,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Trái Đất chuyển động quanh Mặt Trời.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Hệ Mặt Trời gồm Mặt Trời và các thiên thể chuyển động quanh nó."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Nghĩ Mặt Trời là hành tinh."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Hệ Mặt Trời gồm Mặt Trời và các thiên thể chuyển động quanh nó.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1158,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q038",
    "lessonId": 29,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Hệ Mặt Trời và Ngân Hà', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Nghĩ Mặt Trời là hành tinh."
      },
      {
        "key": "D",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1159,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q039",
    "lessonId": 29,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Hệ Mặt Trời và Ngân Hà', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ Mặt Trời là hành tinh."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Trái Đất là một hành tinh trong Hệ Mặt Trời."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Trái Đất là một hành tinh trong Hệ Mặt Trời.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1160,
    "sourceId": "sci6-b2-l29-he-mat-troi-va-ngan-ha-q040",
    "lessonId": 29,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Mặt Trời là ngôi sao trung tâm của Hệ Mặt Trời.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩ Mặt Trời là hành tinh."
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1161,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q001",
    "lessonId": 30,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Ôn tập thực hành KHTN Lớp 6'?",
    "options": [
      {
        "key": "A",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "B",
        "text": "Hệ thống hóa KHTN 6."
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Không cần quan sát"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Hệ thống hóa KHTN 6.",
    "explanationSimple": "Bài này hướng tới: Hệ thống hóa KHTN 6.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 1162,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q002",
    "lessonId": 30,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Ôn tập thực hành KHTN Lớp 6'?",
    "options": [
      {
        "key": "A",
        "text": "Luyện câu hỏi tổng hợp."
      },
      {
        "key": "B",
        "text": "Học thuộc tất cả số liệu"
      },
      {
        "key": "C",
        "text": "Không cần quan sát"
      },
      {
        "key": "D",
        "text": "Bỏ qua ví dụ đời sống"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Luyện câu hỏi tổng hợp.",
    "explanationSimple": "Bài này hướng tới: Luyện câu hỏi tổng hợp.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 1163,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q003",
    "lessonId": 30,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Ôn tập thực hành KHTN Lớp 6'?",
    "options": [
      {
        "key": "A",
        "text": "Tự kiểm tra lỗi và an toàn thực hành."
      },
      {
        "key": "B",
        "text": "Bỏ qua ví dụ đời sống"
      },
      {
        "key": "C",
        "text": "Chỉ nhớ tên bài"
      },
      {
        "key": "D",
        "text": "Học thuộc tất cả số liệu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tự kiểm tra lỗi và an toàn thực hành.",
    "explanationSimple": "Bài này hướng tới: Tự kiểm tra lỗi và an toàn thực hành.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 1164,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q004",
    "lessonId": 30,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Ôn tập thực hành KHTN Lớp 6'?",
    "options": [
      {
        "key": "A",
        "text": "Học từng bài rời rạc."
      },
      {
        "key": "B",
        "text": "Quên an toàn khi thực hành."
      },
      {
        "key": "C",
        "text": "Cần đọc kỹ đề, xác định hiện tượng thuộc mảng nào rồi chọn kiến thức phù hợp."
      },
      {
        "key": "D",
        "text": "Không cần bằng chứng khi kết luận"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Cần đọc kỹ đề, xác định hiện tượng thuộc mảng nào rồi chọn kiến thức phù hợp.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1165,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q005",
    "lessonId": 30,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Ôn tập thực hành KHTN Lớp 6'?",
    "options": [
      {
        "key": "A",
        "text": "Cần đọc kỹ đề, xác định hiện tượng thuộc mảng nào rồi chọn kiến thức phù hợp."
      },
      {
        "key": "B",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Học từng bài rời rạc."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cần đọc kỹ đề, xác định hiện tượng thuộc mảng nào rồi chọn kiến thức phù hợp.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1166,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q006",
    "lessonId": 30,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Ôn tập thực hành KHTN Lớp 6'?",
    "options": [
      {
        "key": "A",
        "text": "Học từng bài rời rạc."
      },
      {
        "key": "B",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "C",
        "text": "Cần đọc kỹ đề, xác định hiện tượng thuộc mảng nào rồi chọn kiến thức phù hợp."
      },
      {
        "key": "D",
        "text": "Không đọc kỹ tình huống."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Cần đọc kỹ đề, xác định hiện tượng thuộc mảng nào rồi chọn kiến thức phù hợp.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1167,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q007",
    "lessonId": 30,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Ôn tập thực hành KHTN Lớp 6'?",
    "options": [
      {
        "key": "A",
        "text": "Không đọc kỹ tình huống."
      },
      {
        "key": "B",
        "text": "Câu hỏi tổng hợp thường yêu cầu phân loại, chọn phương pháp, giải thích hiện tượng hoặc xử lý tình huống."
      },
      {
        "key": "C",
        "text": "Không cần bằng chứng khi kết luận"
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Câu hỏi tổng hợp thường yêu cầu phân loại, chọn phương pháp, giải thích hiện tượng hoặc xử lý tình huống.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1168,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q008",
    "lessonId": 30,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Ôn tập thực hành KHTN Lớp 6'?",
    "options": [
      {
        "key": "A",
        "text": "Quên an toàn khi thực hành."
      },
      {
        "key": "B",
        "text": "Bài thực hành cần chú ý an toàn, ghi kết quả và giải thích bằng bằng chứng."
      },
      {
        "key": "C",
        "text": "Mọi hiện tượng đều giống nhau"
      },
      {
        "key": "D",
        "text": "Chỉ cần học thuộc tên khái niệm"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Bài thực hành cần chú ý an toàn, ghi kết quả và giải thích bằng bằng chứng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1169,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q009",
    "lessonId": 30,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Ôn tập thực hành KHTN Lớp 6'?",
    "options": [
      {
        "key": "A",
        "text": "Quên an toàn khi thực hành."
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Học từng bài rời rạc."
      },
      {
        "key": "D",
        "text": "Ôn tập KHTN cần kết nối kiến thức quan sát, chất, tế bào, sinh vật, lực, năng lượng và bầu trời."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Ôn tập KHTN cần kết nối kiến thức quan sát, chất, tế bào, sinh vật, lực, năng lượng và bầu trời.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1170,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q010",
    "lessonId": 30,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Ôn tập thực hành KHTN Lớp 6'?",
    "options": [
      {
        "key": "A",
        "text": "Học từng bài rời rạc."
      },
      {
        "key": "B",
        "text": "Chỉ cần học thuộc tên khái niệm"
      },
      {
        "key": "C",
        "text": "Ôn tập KHTN cần kết nối kiến thức quan sát, chất, tế bào, sinh vật, lực, năng lượng và bầu trời."
      },
      {
        "key": "D",
        "text": "Mọi hiện tượng đều giống nhau"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Ôn tập KHTN cần kết nối kiến thức quan sát, chất, tế bào, sinh vật, lực, năng lượng và bầu trời.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 1171,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q011",
    "lessonId": 30,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'review'?",
    "options": [
      {
        "key": "A",
        "text": "Hệ Mặt Trời"
      },
      {
        "key": "B",
        "text": "ôn tập"
      },
      {
        "key": "C",
        "text": "lực cản"
      },
      {
        "key": "D",
        "text": "phương thẳng đứng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "ôn tập",
    "explanationSimple": "'ôn tập' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1172,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q012",
    "lessonId": 30,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'practice' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "thực hành",
    "answerText": "thực hành",
    "explanationSimple": "'practice' tương ứng với 'thực hành' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1173,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q013",
    "lessonId": 30,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'evidence'?",
    "options": [
      {
        "key": "A",
        "text": "hệ sinh thái"
      },
      {
        "key": "B",
        "text": "phục hồi"
      },
      {
        "key": "C",
        "text": "bằng chứng"
      },
      {
        "key": "D",
        "text": "biến đổi"
      }
    ],
    "correctAnswer": "C",
    "answerText": "bằng chứng",
    "explanationSimple": "'bằng chứng' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1174,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q014",
    "lessonId": 30,
    "questionType": "fill_text",
    "questionText": "Điền thuật ngữ phù hợp: 'phenomenon' trong bài này thường tương ứng với thuật ngữ tiếng Việt nào?",
    "options": null,
    "correctAnswer": "hiện tượng",
    "answerText": "hiện tượng",
    "explanationSimple": "'phenomenon' tương ứng với 'hiện tượng' trong ngữ cảnh bài học.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1175,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q015",
    "lessonId": 30,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'integrated'?",
    "options": [
      {
        "key": "A",
        "text": "pha Mặt Trăng"
      },
      {
        "key": "B",
        "text": "tổng hợp"
      },
      {
        "key": "C",
        "text": "thế năng"
      },
      {
        "key": "D",
        "text": "thể rắn"
      }
    ],
    "correctAnswer": "B",
    "answerText": "tổng hợp",
    "explanationSimple": "'tổng hợp' là từ khóa phù hợp.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1176,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q016",
    "lessonId": 30,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Ôn tập thực hành KHTN Lớp 6'.",
    "options": null,
    "correctAnswer": "hiện tượng",
    "answerText": "hiện tượng",
    "explanationSimple": "Một từ khóa đúng là 'hiện tượng'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1177,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q017",
    "lessonId": 30,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Ôn tập thực hành KHTN Lớp 6'.",
    "options": null,
    "correctAnswer": "tổng hợp",
    "answerText": "tổng hợp",
    "explanationSimple": "Một từ khóa đúng là 'tổng hợp'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1178,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q018",
    "lessonId": 30,
    "questionType": "fill_text",
    "questionText": "Hãy điền một từ khóa quan trọng của bài 'Ôn tập thực hành KHTN Lớp 6'.",
    "options": null,
    "correctAnswer": "tổng hợp",
    "answerText": "tổng hợp",
    "explanationSimple": "Một từ khóa đúng là 'tổng hợp'.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 1179,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q019",
    "lessonId": 30,
    "questionType": "true_false",
    "questionText": "Ôn tập KHTN cần kết nối kiến thức quan sát, chất, tế bào, sinh vật, lực, năng lượng và bầu trời.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1180,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q020",
    "lessonId": 30,
    "questionType": "true_false",
    "questionText": "Bài thực hành cần chú ý an toàn, ghi kết quả và giải thích bằng bằng chứng.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1181,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q021",
    "lessonId": 30,
    "questionType": "true_false",
    "questionText": "Câu hỏi tổng hợp thường yêu cầu phân loại, chọn phương pháp, giải thích hiện tượng hoặc xử lý tình huống.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1182,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q022",
    "lessonId": 30,
    "questionType": "true_false",
    "questionText": "Cần đọc kỹ đề, xác định hiện tượng thuộc mảng nào rồi chọn kiến thức phù hợp.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "A",
    "answerText": "true",
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi của bài.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 1183,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q023",
    "lessonId": 30,
    "questionType": "true_false",
    "questionText": "Học từng bài rời rạc.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 1184,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q024",
    "lessonId": 30,
    "questionType": "true_false",
    "questionText": "Không đọc kỹ tình huống.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 1185,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q025",
    "lessonId": 30,
    "questionType": "true_false",
    "questionText": "Quên an toàn khi thực hành.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      }
    ],
    "correctAnswer": "B",
    "answerText": "false",
    "explanationSimple": "Đây là lỗi/hành vi hiểu sai cần tránh, không phải kết luận đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 1186,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q026",
    "lessonId": 30,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Ôn tập thực hành KHTN Lớp 6', hãy nêu một thuật ngữ liên quan đến ý: Câu hỏi tổng hợp thường yêu cầu phân loại, chọn phương pháp, giải thích hiện tượng hoặc xử lý tình huống.",
    "options": null,
    "correctAnswer": "bằng chứng",
    "answerText": "bằng chứng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'bằng chứng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1187,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q027",
    "lessonId": 30,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Ôn tập thực hành KHTN Lớp 6', hãy nêu một thuật ngữ liên quan đến ý: Ôn tập KHTN cần kết nối kiến thức quan sát, chất, tế bào, sinh vật, lực, năng lượng và bầu trời.",
    "options": null,
    "correctAnswer": "thực hành",
    "answerText": "thực hành",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thực hành' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1188,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q028",
    "lessonId": 30,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Ôn tập thực hành KHTN Lớp 6', hãy nêu một thuật ngữ liên quan đến ý: Câu hỏi tổng hợp thường yêu cầu phân loại, chọn phương pháp, giải thích hiện tượng hoặc xử lý tình huống.",
    "options": null,
    "correctAnswer": "hiện tượng",
    "answerText": "hiện tượng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'hiện tượng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1189,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q029",
    "lessonId": 30,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Ôn tập thực hành KHTN Lớp 6', hãy nêu một thuật ngữ liên quan đến ý: Câu hỏi tổng hợp thường yêu cầu phân loại, chọn phương pháp, giải thích hiện tượng hoặc xử lý tình huống.",
    "options": null,
    "correctAnswer": "ôn tập",
    "answerText": "ôn tập",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'ôn tập' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1190,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q030",
    "lessonId": 30,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Ôn tập thực hành KHTN Lớp 6', hãy nêu một thuật ngữ liên quan đến ý: Ôn tập KHTN cần kết nối kiến thức quan sát, chất, tế bào, sinh vật, lực, năng lượng và bầu trời.",
    "options": null,
    "correctAnswer": "hiện tượng",
    "answerText": "hiện tượng",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'hiện tượng' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1191,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q031",
    "lessonId": 30,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Ôn tập thực hành KHTN Lớp 6', hãy nêu một thuật ngữ liên quan đến ý: Câu hỏi tổng hợp thường yêu cầu phân loại, chọn phương pháp, giải thích hiện tượng hoặc xử lý tình huống.",
    "options": null,
    "correctAnswer": "ôn tập",
    "answerText": "ôn tập",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'ôn tập' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1192,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q032",
    "lessonId": 30,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Ôn tập thực hành KHTN Lớp 6', hãy nêu một thuật ngữ liên quan đến ý: Câu hỏi tổng hợp thường yêu cầu phân loại, chọn phương pháp, giải thích hiện tượng hoặc xử lý tình huống.",
    "options": null,
    "correctAnswer": "tổng hợp",
    "answerText": "tổng hợp",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tổng hợp' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1193,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q033",
    "lessonId": 30,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Ôn tập thực hành KHTN Lớp 6', hãy nêu một thuật ngữ liên quan đến ý: Bài thực hành cần chú ý an toàn, ghi kết quả và giải thích bằng bằng chứng.",
    "options": null,
    "correctAnswer": "thực hành",
    "answerText": "thực hành",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'thực hành' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1194,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q034",
    "lessonId": 30,
    "questionType": "fill_text",
    "questionText": "Trong bài 'Ôn tập thực hành KHTN Lớp 6', hãy nêu một thuật ngữ liên quan đến ý: Bài thực hành cần chú ý an toàn, ghi kết quả và giải thích bằng bằng chứng.",
    "options": null,
    "correctAnswer": "tổng hợp",
    "answerText": "tổng hợp",
    "explanationSimple": "Có thể trả lời bằng từ khóa 'tổng hợp' hoặc thuật ngữ tương đương nếu giáo viên chấp nhận.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "short_answer"
    ],
    "isActive": 1
  },
  {
    "id": 1195,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q035",
    "lessonId": 30,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Ôn tập thực hành KHTN Lớp 6', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Học từng bài rời rạc."
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Ôn tập KHTN cần kết nối kiến thức quan sát, chất, tế bào, sinh vật, lực, năng lượng và bầu trời."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Ôn tập KHTN cần kết nối kiến thức quan sát, chất, tế bào, sinh vật, lực, năng lượng và bầu trời.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1196,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q036",
    "lessonId": 30,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Tách muối khỏi nước muối cần cô cạn.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "C",
        "text": "Không đọc kỹ tình huống."
      },
      {
        "key": "D",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1197,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q037",
    "lessonId": 30,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Tách muối khỏi nước muối cần cô cạn.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Học từng bài rời rạc."
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "D",
        "text": "Câu hỏi tổng hợp thường yêu cầu phân loại, chọn phương pháp, giải thích hiện tượng hoặc xử lý tình huống."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Câu hỏi tổng hợp thường yêu cầu phân loại, chọn phương pháp, giải thích hiện tượng hoặc xử lý tình huống.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1198,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q038",
    "lessonId": 30,
    "questionType": "scenario_choice",
    "questionText": "Trong đời sống có ví dụ: Quan sát tế bào cần kính hiển vi.. Kết luận nào hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "B",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "C",
        "text": "Quên an toàn khi thực hành."
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1199,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q039",
    "lessonId": 30,
    "questionType": "scenario_choice",
    "questionText": "Nếu làm bài thực hành liên quan đến 'Ôn tập thực hành KHTN Lớp 6', lựa chọn nào an toàn/hợp lý nhất?",
    "options": [
      {
        "key": "A",
        "text": "Kết luận ngay mà không cần kiểm tra"
      },
      {
        "key": "B",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "C",
        "text": "Câu hỏi tổng hợp thường yêu cầu phân loại, chọn phương pháp, giải thích hiện tượng hoặc xử lý tình huống."
      },
      {
        "key": "D",
        "text": "Học từng bài rời rạc."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Câu hỏi tổng hợp thường yêu cầu phân loại, chọn phương pháp, giải thích hiện tượng hoặc xử lý tình huống.",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  },
  {
    "id": 1200,
    "sourceId": "sci6-b2-l30-on-tap-thuc-hanh-khtn-lop-6-q040",
    "lessonId": 30,
    "questionType": "scenario_choice",
    "questionText": "Một bạn gặp tình huống: Quan sát tế bào cần kính hiển vi.. Bạn ấy nên dùng kiến thức nào để giải thích?",
    "options": [
      {
        "key": "A",
        "text": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng"
      },
      {
        "key": "B",
        "text": "Học từng bài rời rạc."
      },
      {
        "key": "C",
        "text": "Bỏ qua hiện tượng vì không quan trọng"
      },
      {
        "key": "D",
        "text": "Kết luận ngay mà không cần kiểm tra"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Quan sát, ghi nhận bằng chứng rồi kết luận thận trọng",
    "explanationSimple": "Cần dựa vào kiến thức cốt lõi và bằng chứng quan sát/thực hành, không đoán mò.",
    "difficulty": "hard",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "application"
    ],
    "isActive": 1
  }
];
