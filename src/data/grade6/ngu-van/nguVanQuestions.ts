// Auto-generated from local Ngữ văn learning data. Do not edit counts by hand.
import type { NguVanPracticeQuestionCountChoice, NguVanPracticeQuestionCountOption, NguVanQuestion } from './nguVanTypes';

export const NGU_VAN_PRACTICE_QUESTION_COUNT_OPTIONS: NguVanPracticeQuestionCountChoice[] = [
  {
    "value": 10,
    "title": "Khởi động",
    "label": "10 câu",
    "description": "Ôn nhanh khái niệm, chi tiết và cách hiểu văn bản."
  },
  {
    "value": 12,
    "title": "Vừa sức",
    "label": "12 câu",
    "description": "Phù hợp cho một phiên học ngắn nhưng đủ chắc."
  },
  {
    "value": 20,
    "title": "Ôn sâu",
    "label": "20 câu",
    "description": "Luyện thêm đọc hiểu, tiếng Việt và vận dụng."
  },
  {
    "value": 40,
    "title": "Toàn bộ bài",
    "label": "40 câu",
    "description": "Dành cho lúc muốn rà lại hết câu hỏi của bài."
  }
];
export const DEFAULT_NGU_VAN_PRACTICE_QUESTION_COUNT: NguVanPracticeQuestionCountOption = 12;
export function isNguVanPracticeQuestionCountOption(value: number): value is NguVanPracticeQuestionCountOption {
  return NGU_VAN_PRACTICE_QUESTION_COUNT_OPTIONS.some((option) => option.value === value);
}
export const nguVanQuestions: NguVanQuestion[] = [
  {
    "id": 1,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q001",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Tôi và các bạn'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Nhận biết nhân vật và chi tiết tiêu biểu."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nhận biết nhân vật và chi tiết tiêu biểu.",
    "explanationSimple": "Bài này hướng tới: Nhận biết nhân vật và chi tiết tiêu biểu.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 2,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q002",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Tôi và các bạn'?",
    "options": [
      {
        "key": "A",
        "text": "Nêu được thông điệp về tình bạn."
      },
      {
        "key": "B",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nêu được thông điệp về tình bạn.",
    "explanationSimple": "Bài này hướng tới: Nêu được thông điệp về tình bạn.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 3,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q003",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Tôi và các bạn'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Viết đoạn ngắn liên hệ bản thân."
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Viết đoạn ngắn liên hệ bản thân.",
    "explanationSimple": "Bài này hướng tới: Viết đoạn ngắn liên hệ bản thân.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 4,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q004",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tôi và các bạn'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "B",
        "text": "Đánh giá nhân vật chỉ bằng một hành động đơn lẻ."
      },
      {
        "key": "C",
        "text": "Chủ đề tình bạn thường gắn với sự tôn trọng khác biệt, biết lắng nghe và sửa lỗi."
      },
      {
        "key": "D",
        "text": "Chỉ cần kể lại thật dài"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chủ đề tình bạn thường gắn với sự tôn trọng khác biệt, biết lắng nghe và sửa lỗi.",
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
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q005",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tôi và các bạn'?",
    "options": [
      {
        "key": "A",
        "text": "Kể lại cốt truyện nhưng không nêu được ý nghĩa."
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Khi đọc truyện cần chú ý nhân vật, hành động, lời nói, suy nghĩ và sự thay đổi của nhân vật."
      },
      {
        "key": "D",
        "text": "Đánh giá nhân vật chỉ bằng một hành động đơn lẻ."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Khi đọc truyện cần chú ý nhân vật, hành động, lời nói, suy nghĩ và sự thay đổi của nhân vật.",
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
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q006",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tôi và các bạn'?",
    "options": [
      {
        "key": "A",
        "text": "Liên hệ bản thân quá dài và xa văn bản."
      },
      {
        "key": "B",
        "text": "Kể lại cốt truyện nhưng không nêu được ý nghĩa."
      },
      {
        "key": "C",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "D",
        "text": "Khi đọc truyện cần chú ý nhân vật, hành động, lời nói, suy nghĩ và sự thay đổi của nhân vật."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Khi đọc truyện cần chú ý nhân vật, hành động, lời nói, suy nghĩ và sự thay đổi của nhân vật.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 7,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q007",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tôi và các bạn'?",
    "options": [
      {
        "key": "A",
        "text": "Khi đọc truyện cần chú ý nhân vật, hành động, lời nói, suy nghĩ và sự thay đổi của nhân vật."
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Liên hệ bản thân quá dài và xa văn bản."
      },
      {
        "key": "D",
        "text": "Không cần căn cứ văn bản"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Khi đọc truyện cần chú ý nhân vật, hành động, lời nói, suy nghĩ và sự thay đổi của nhân vật.",
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
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q008",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Tôi và các bạn'?",
    "options": [
      {
        "key": "A",
        "text": "Chi tiết tiêu biểu giúp nhận ra tính cách nhân vật và thông điệp của văn bản."
      },
      {
        "key": "B",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "C",
        "text": "Kể lại cốt truyện nhưng không nêu được ý nghĩa."
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Chi tiết tiêu biểu giúp nhận ra tính cách nhân vật và thông điệp của văn bản.",
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
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q009",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'character'?",
    "options": [
      {
        "key": "A",
        "text": "nhân vật"
      },
      {
        "key": "B",
        "text": "truyền thuyết"
      },
      {
        "key": "C",
        "text": "chú thích"
      },
      {
        "key": "D",
        "text": "nguyên nhân"
      }
    ],
    "correctAnswer": "A",
    "answerText": "nhân vật",
    "explanationSimple": "'nhân vật' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 10,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q010",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'key detail'?",
    "options": [
      {
        "key": "A",
        "text": "trải nghiệm"
      },
      {
        "key": "B",
        "text": "phần phụ"
      },
      {
        "key": "C",
        "text": "chi tiết tiêu biểu"
      },
      {
        "key": "D",
        "text": "du kí"
      }
    ],
    "correctAnswer": "C",
    "answerText": "chi tiết tiêu biểu",
    "explanationSimple": "'chi tiết tiêu biểu' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 11,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q011",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'friendship'?",
    "options": [
      {
        "key": "A",
        "text": "cảm nghĩ"
      },
      {
        "key": "B",
        "text": "tình bạn"
      },
      {
        "key": "C",
        "text": "sự việc chính"
      },
      {
        "key": "D",
        "text": "trình tự thời gian"
      }
    ],
    "correctAnswer": "B",
    "answerText": "tình bạn",
    "explanationSimple": "'tình bạn' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 12,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q012",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'message'?",
    "options": [
      {
        "key": "A",
        "text": "quan sát"
      },
      {
        "key": "B",
        "text": "người kể chuyện"
      },
      {
        "key": "C",
        "text": "ý trọn vẹn"
      },
      {
        "key": "D",
        "text": "thông điệp"
      }
    ],
    "correctAnswer": "D",
    "answerText": "thông điệp",
    "explanationSimple": "'thông điệp' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 13,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q013",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'personal connection'?",
    "options": [
      {
        "key": "A",
        "text": "nghĩa chuyển"
      },
      {
        "key": "B",
        "text": "thông điệp nhân ái"
      },
      {
        "key": "C",
        "text": "lắng nghe"
      },
      {
        "key": "D",
        "text": "liên hệ bản thân"
      }
    ],
    "correctAnswer": "D",
    "answerText": "liên hệ bản thân",
    "explanationSimple": "'liên hệ bản thân' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 14,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q014",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'liên hệ bản thân' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "liên hệ bản thân: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "liên hệ bản thân: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 15,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q015",
    "lessonId": 1,
    "questionType": "true_false",
    "questionText": "Khi đọc truyện cần chú ý nhân vật, hành động, lời nói, suy nghĩ và sự thay đổi của nhân vật.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 16,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q016",
    "lessonId": 1,
    "questionType": "true_false",
    "questionText": "Chủ đề tình bạn thường gắn với sự tôn trọng khác biệt, biết lắng nghe và sửa lỗi.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 17,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q017",
    "lessonId": 1,
    "questionType": "true_false",
    "questionText": "Chi tiết tiêu biểu giúp nhận ra tính cách nhân vật và thông điệp của văn bản.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 18,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q018",
    "lessonId": 1,
    "questionType": "true_false",
    "questionText": "Liên hệ bản thân cần vừa đủ, bám vào văn bản và không biến thành kể chuyện riêng quá dài.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 19,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q019",
    "lessonId": 1,
    "questionType": "true_false",
    "questionText": "Kể lại cốt truyện nhưng không nêu được ý nghĩa.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 20,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q020",
    "lessonId": 1,
    "questionType": "true_false",
    "questionText": "Đánh giá nhân vật chỉ bằng một hành động đơn lẻ.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 21,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q021",
    "lessonId": 1,
    "questionType": "true_false",
    "questionText": "Liên hệ bản thân quá dài và xa văn bản.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 22,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q022",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Ngày đầu vào lớp 6, An ngồi im ở cuối lớp vì sợ nói sai. Giờ ra chơi, Minh đặt lên bàn An một tờ giấy nhỏ: 'Nếu cậu chưa quen ai, tụi mình có thể bắt đầu bằng một trận cờ ca-rô.' An bật cười. Từ hôm đó, góc cuối lớp bớt im lặng. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 23,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q023",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Ngày đầu vào lớp 6, An ngồi im ở cuối lớp vì sợ nói sai. Giờ ra chơi, Minh đặt lên bàn An một tờ giấy nhỏ: 'Nếu cậu chưa quen ai, tụi mình có thể bắt đầu bằng một trận cờ ca-rô.' An bật cười. Từ hôm đó, góc cuối lớp bớt im lặng. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 24,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q024",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Ngày đầu vào lớp 6, An ngồi im ở cuối lớp vì sợ nói sai. Giờ ra chơi, Minh đặt lên bàn An một tờ giấy nhỏ: 'Nếu cậu chưa quen ai, tụi mình có thể bắt đầu bằng một trận cờ ca-rô.' An bật cười. Từ hôm đó, góc cuối lớp bớt im lặng. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 25,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q025",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: nhân vật ; chi tiết tiêu biểu ; thông điệp.",
    "options": null,
    "correctAnswer": "nhân vật -> người/vật tham gia câu chuyện | chi tiết tiêu biểu -> chi tiết giúp hiểu ý nghĩa | thông điệp -> điều văn bản gửi gắm",
    "answerText": "nhân vật -> người/vật tham gia câu chuyện | chi tiết tiêu biểu -> chi tiết giúp hiểu ý nghĩa | thông điệp -> điều văn bản gửi gắm",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 26,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q026",
    "lessonId": 1,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 27,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q027",
    "lessonId": 1,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 28,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q028",
    "lessonId": 1,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 29,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q029",
    "lessonId": 1,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 30,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q030",
    "lessonId": 1,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 31,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q031",
    "lessonId": 1,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 32,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q032",
    "lessonId": 1,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 33,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q033",
    "lessonId": 1,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Tôi và các bạn'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 34,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q034",
    "lessonId": 1,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 35,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q035",
    "lessonId": 1,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Tôi và các bạn'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 36,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q036",
    "lessonId": 1,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 37,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q037",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Tôi và các bạn' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Kể lại cốt truyện nhưng không nêu được ý nghĩa.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Kể lại cốt truyện nhưng không nêu được ý nghĩa.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 38,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q038",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Tôi và các bạn' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Kể lại cốt truyện nhưng không nêu được ý nghĩa.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Kể lại cốt truyện nhưng không nêu được ý nghĩa.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 39,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q039",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Tôi và các bạn' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Kể lại cốt truyện nhưng không nêu được ý nghĩa.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Kể lại cốt truyện nhưng không nêu được ý nghĩa.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 40,
    "sourceId": "lit6-b2-l01-toi-va-cac-ban-q040",
    "lessonId": 1,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Tôi và các bạn' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Kể lại cốt truyện nhưng không nêu được ý nghĩa.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Kể lại cốt truyện nhưng không nêu được ý nghĩa.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 41,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q001",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Gõ cửa trái tim'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Nhận biết hình ảnh thơ."
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nhận biết hình ảnh thơ.",
    "explanationSimple": "Bài này hướng tới: Nhận biết hình ảnh thơ.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 42,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q002",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Gõ cửa trái tim'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Nêu cảm xúc được gợi ra từ từ ngữ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nêu cảm xúc được gợi ra từ từ ngữ.",
    "explanationSimple": "Bài này hướng tới: Nêu cảm xúc được gợi ra từ từ ngữ.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 43,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q003",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Gõ cửa trái tim'?",
    "options": [
      {
        "key": "A",
        "text": "Viết vài câu cảm nhận có dẫn chứng."
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Viết càng dài càng tốt"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Viết vài câu cảm nhận có dẫn chứng.",
    "explanationSimple": "Bài này hướng tới: Viết vài câu cảm nhận có dẫn chứng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 44,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q004",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Gõ cửa trái tim'?",
    "options": [
      {
        "key": "A",
        "text": "Cảm nhận thơ cần có từ ngữ/dòng thơ làm căn cứ."
      },
      {
        "key": "B",
        "text": "Diễn xuôi thơ quá khô."
      },
      {
        "key": "C",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "D",
        "text": "Nói bài thơ hay nhưng không chỉ ra hay ở đâu."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cảm nhận thơ cần có từ ngữ/dòng thơ làm căn cứ.",
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
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q005",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Gõ cửa trái tim'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "B",
        "text": "Cảm nhận thơ cần có từ ngữ/dòng thơ làm căn cứ."
      },
      {
        "key": "C",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "D",
        "text": "Diễn xuôi thơ quá khô."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Cảm nhận thơ cần có từ ngữ/dòng thơ làm căn cứ.",
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
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q006",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Gõ cửa trái tim'?",
    "options": [
      {
        "key": "A",
        "text": "Diễn xuôi thơ quá khô."
      },
      {
        "key": "B",
        "text": "Nói bài thơ hay nhưng không chỉ ra hay ở đâu."
      },
      {
        "key": "C",
        "text": "Đọc thơ cần chú ý hình ảnh, nhịp điệu, từ ngữ gợi cảm xúc và nhân vật trữ tình."
      },
      {
        "key": "D",
        "text": "Chỉ tìm vần mà quên hình ảnh và cảm xúc."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Đọc thơ cần chú ý hình ảnh, nhịp điệu, từ ngữ gợi cảm xúc và nhân vật trữ tình.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 47,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q007",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Gõ cửa trái tim'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Nói bài thơ hay nhưng không chỉ ra hay ở đâu."
      },
      {
        "key": "C",
        "text": "Diễn xuôi thơ quá khô."
      },
      {
        "key": "D",
        "text": "Cảm xúc trong thơ thường được gợi qua chi tiết nhỏ, không chỉ qua lời nói trực tiếp."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Cảm xúc trong thơ thường được gợi qua chi tiết nhỏ, không chỉ qua lời nói trực tiếp.",
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
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q008",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Gõ cửa trái tim'?",
    "options": [
      {
        "key": "A",
        "text": "Đọc thơ cần chú ý hình ảnh, nhịp điệu, từ ngữ gợi cảm xúc và nhân vật trữ tình."
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Diễn xuôi thơ quá khô."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Đọc thơ cần chú ý hình ảnh, nhịp điệu, từ ngữ gợi cảm xúc và nhân vật trữ tình.",
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
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q009",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'poetic image'?",
    "options": [
      {
        "key": "A",
        "text": "liên hệ bản thân"
      },
      {
        "key": "B",
        "text": "hình ảnh thơ"
      },
      {
        "key": "C",
        "text": "thông điệp nhân ái"
      },
      {
        "key": "D",
        "text": "giới thiệu sách"
      }
    ],
    "correctAnswer": "B",
    "answerText": "hình ảnh thơ",
    "explanationSimple": "'hình ảnh thơ' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 50,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q010",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'lyrical speaker'?",
    "options": [
      {
        "key": "A",
        "text": "nhân vật trữ tình"
      },
      {
        "key": "B",
        "text": "hình ảnh thơ"
      },
      {
        "key": "C",
        "text": "vị ngữ"
      },
      {
        "key": "D",
        "text": "ngữ cảnh"
      }
    ],
    "correctAnswer": "A",
    "answerText": "nhân vật trữ tình",
    "explanationSimple": "'nhân vật trữ tình' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 51,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q011",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'emotion'?",
    "options": [
      {
        "key": "A",
        "text": "quê hương"
      },
      {
        "key": "B",
        "text": "cảm xúc"
      },
      {
        "key": "C",
        "text": "chi tiết tiêu biểu"
      },
      {
        "key": "D",
        "text": "thông điệp nhân ái"
      }
    ],
    "correctAnswer": "B",
    "answerText": "cảm xúc",
    "explanationSimple": "'cảm xúc' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 52,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q012",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'rhythm'?",
    "options": [
      {
        "key": "A",
        "text": "phản biện"
      },
      {
        "key": "B",
        "text": "nhịp thơ"
      },
      {
        "key": "C",
        "text": "bài học"
      },
      {
        "key": "D",
        "text": "từ ngữ gợi cảm"
      }
    ],
    "correctAnswer": "B",
    "answerText": "nhịp thơ",
    "explanationSimple": "'nhịp thơ' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 53,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q013",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'expressive words'?",
    "options": [
      {
        "key": "A",
        "text": "gợi hình"
      },
      {
        "key": "B",
        "text": "từ ngữ gợi cảm"
      },
      {
        "key": "C",
        "text": "đoạn văn"
      },
      {
        "key": "D",
        "text": "từ ghép"
      }
    ],
    "correctAnswer": "B",
    "answerText": "từ ngữ gợi cảm",
    "explanationSimple": "'từ ngữ gợi cảm' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 54,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q014",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'cảm xúc' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "cảm xúc: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "cảm xúc: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 55,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q015",
    "lessonId": 2,
    "questionType": "true_false",
    "questionText": "Đọc thơ cần chú ý hình ảnh, nhịp điệu, từ ngữ gợi cảm xúc và nhân vật trữ tình.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 56,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q016",
    "lessonId": 2,
    "questionType": "true_false",
    "questionText": "Cảm xúc trong thơ thường được gợi qua chi tiết nhỏ, không chỉ qua lời nói trực tiếp.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 57,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q017",
    "lessonId": 2,
    "questionType": "true_false",
    "questionText": "Hình ảnh thơ có thể vừa tả sự vật vừa gửi gắm tình cảm.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 58,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q018",
    "lessonId": 2,
    "questionType": "true_false",
    "questionText": "Cảm nhận thơ cần có từ ngữ/dòng thơ làm căn cứ.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 59,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q019",
    "lessonId": 2,
    "questionType": "true_false",
    "questionText": "Diễn xuôi thơ quá khô.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 60,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q020",
    "lessonId": 2,
    "questionType": "true_false",
    "questionText": "Chỉ tìm vần mà quên hình ảnh và cảm xúc.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 61,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q021",
    "lessonId": 2,
    "questionType": "true_false",
    "questionText": "Nói bài thơ hay nhưng không chỉ ra hay ở đâu.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 62,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q022",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Mẹ hong áo bên thềm / gió thơm mùi nắng mới / con cất vào trang vở / một khoảng trời bình yên. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 63,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q023",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Mẹ hong áo bên thềm / gió thơm mùi nắng mới / con cất vào trang vở / một khoảng trời bình yên. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 64,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q024",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Mẹ hong áo bên thềm / gió thơm mùi nắng mới / con cất vào trang vở / một khoảng trời bình yên. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 65,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q025",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: hình ảnh thơ ; nhịp thơ ; nhân vật trữ tình.",
    "options": null,
    "correctAnswer": "hình ảnh thơ -> hình ảnh gợi cảm xúc | nhịp thơ -> cách ngắt nhịp tạo giọng điệu | nhân vật trữ tình -> người bộc lộ cảm xúc",
    "answerText": "hình ảnh thơ -> hình ảnh gợi cảm xúc | nhịp thơ -> cách ngắt nhịp tạo giọng điệu | nhân vật trữ tình -> người bộc lộ cảm xúc",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 66,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q026",
    "lessonId": 2,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 67,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q027",
    "lessonId": 2,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 68,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q028",
    "lessonId": 2,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 69,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q029",
    "lessonId": 2,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 70,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q030",
    "lessonId": 2,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 71,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q031",
    "lessonId": 2,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 72,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q032",
    "lessonId": 2,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 73,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q033",
    "lessonId": 2,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Gõ cửa trái tim'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 74,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q034",
    "lessonId": 2,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 75,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q035",
    "lessonId": 2,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Gõ cửa trái tim'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 76,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q036",
    "lessonId": 2,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 77,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q037",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Gõ cửa trái tim' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Diễn xuôi thơ quá khô.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Diễn xuôi thơ quá khô.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 78,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q038",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Gõ cửa trái tim' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Diễn xuôi thơ quá khô.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Diễn xuôi thơ quá khô.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 79,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q039",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Gõ cửa trái tim' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Diễn xuôi thơ quá khô.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Diễn xuôi thơ quá khô.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 80,
    "sourceId": "lit6-b2-l02-go-cua-trai-tim-q040",
    "lessonId": 2,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Gõ cửa trái tim' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Diễn xuôi thơ quá khô.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Diễn xuôi thơ quá khô.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 81,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q001",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Yêu thương và chia sẻ'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "B",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Tìm chi tiết thể hiện sự sẻ chia."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tìm chi tiết thể hiện sự sẻ chia.",
    "explanationSimple": "Bài này hướng tới: Tìm chi tiết thể hiện sự sẻ chia.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 82,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q002",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Yêu thương và chia sẻ'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Nhận xét phẩm chất nhân vật."
      },
      {
        "key": "D",
        "text": "Viết càng dài càng tốt"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nhận xét phẩm chất nhân vật.",
    "explanationSimple": "Bài này hướng tới: Nhận xét phẩm chất nhân vật.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 83,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q003",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Yêu thương và chia sẻ'?",
    "options": [
      {
        "key": "A",
        "text": "Nêu thông điệp nhân ái bằng lời riêng."
      },
      {
        "key": "B",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nêu thông điệp nhân ái bằng lời riêng.",
    "explanationSimple": "Bài này hướng tới: Nêu thông điệp nhân ái bằng lời riêng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 84,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q004",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Yêu thương và chia sẻ'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "C",
        "text": "Yêu thương trong văn bản thường thể hiện bằng hành động cụ thể, lời nói, thái độ và sự thấu hiểu."
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Yêu thương trong văn bản thường thể hiện bằng hành động cụ thể, lời nói, thái độ và sự thấu hiểu.",
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
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q005",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Yêu thương và chia sẻ'?",
    "options": [
      {
        "key": "A",
        "text": "Tình huống truyện làm bộc lộ phẩm chất nhân vật."
      },
      {
        "key": "B",
        "text": "Bỏ qua hoàn cảnh của nhân vật."
      },
      {
        "key": "C",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "D",
        "text": "Biến bài đọc thành lời khuyên chung chung."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tình huống truyện làm bộc lộ phẩm chất nhân vật.",
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
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q006",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Yêu thương và chia sẻ'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Không phân biệt hành động nhân ái thật và hành động làm vì hình thức."
      },
      {
        "key": "C",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "D",
        "text": "Khi rút thông điệp cần tránh khẩu hiệu chung chung."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Khi rút thông điệp cần tránh khẩu hiệu chung chung.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 87,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q007",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Yêu thương và chia sẻ'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua hoàn cảnh của nhân vật."
      },
      {
        "key": "B",
        "text": "Biến bài đọc thành lời khuyên chung chung."
      },
      {
        "key": "C",
        "text": "Khi rút thông điệp cần tránh khẩu hiệu chung chung."
      },
      {
        "key": "D",
        "text": "Không cần căn cứ văn bản"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Khi rút thông điệp cần tránh khẩu hiệu chung chung.",
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
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q008",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Yêu thương và chia sẻ'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "B",
        "text": "Bỏ qua hoàn cảnh của nhân vật."
      },
      {
        "key": "C",
        "text": "Yêu thương trong văn bản thường thể hiện bằng hành động cụ thể, lời nói, thái độ và sự thấu hiểu."
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Yêu thương trong văn bản thường thể hiện bằng hành động cụ thể, lời nói, thái độ và sự thấu hiểu.",
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
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q009",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'compassion'?",
    "options": [
      {
        "key": "A",
        "text": "yêu thương"
      },
      {
        "key": "B",
        "text": "so sánh"
      },
      {
        "key": "C",
        "text": "câu triển khai"
      },
      {
        "key": "D",
        "text": "sự việc chính"
      }
    ],
    "correctAnswer": "A",
    "answerText": "yêu thương",
    "explanationSimple": "'yêu thương' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 90,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q010",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'sharing'?",
    "options": [
      {
        "key": "A",
        "text": "địa danh"
      },
      {
        "key": "B",
        "text": "hình ảnh thơ"
      },
      {
        "key": "C",
        "text": "ý chính"
      },
      {
        "key": "D",
        "text": "chia sẻ"
      }
    ],
    "correctAnswer": "D",
    "answerText": "chia sẻ",
    "explanationSimple": "'chia sẻ' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 91,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q011",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'story situation'?",
    "options": [
      {
        "key": "A",
        "text": "câu"
      },
      {
        "key": "B",
        "text": "tình huống truyện"
      },
      {
        "key": "C",
        "text": "anh hùng"
      },
      {
        "key": "D",
        "text": "tình bạn"
      }
    ],
    "correctAnswer": "B",
    "answerText": "tình huống truyện",
    "explanationSimple": "'tình huống truyện' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 92,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q012",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'quality'?",
    "options": [
      {
        "key": "A",
        "text": "tóm tắt"
      },
      {
        "key": "B",
        "text": "cảm xúc"
      },
      {
        "key": "C",
        "text": "phẩm chất"
      },
      {
        "key": "D",
        "text": "giọng điệu"
      }
    ],
    "correctAnswer": "C",
    "answerText": "phẩm chất",
    "explanationSimple": "'phẩm chất' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 93,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q013",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'humanistic message'?",
    "options": [
      {
        "key": "A",
        "text": "giác quan"
      },
      {
        "key": "B",
        "text": "thông điệp nhân ái"
      },
      {
        "key": "C",
        "text": "luận điểm"
      },
      {
        "key": "D",
        "text": "phần phụ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "thông điệp nhân ái",
    "explanationSimple": "'thông điệp nhân ái' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 94,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q014",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'yêu thương' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "yêu thương: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "yêu thương: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 95,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q015",
    "lessonId": 3,
    "questionType": "true_false",
    "questionText": "Yêu thương trong văn bản thường thể hiện bằng hành động cụ thể, lời nói, thái độ và sự thấu hiểu.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 96,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q016",
    "lessonId": 3,
    "questionType": "true_false",
    "questionText": "Tình huống truyện làm bộc lộ phẩm chất nhân vật.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 97,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q017",
    "lessonId": 3,
    "questionType": "true_false",
    "questionText": "Một chi tiết nhỏ có thể mang ý nghĩa lớn nếu đặt đúng hoàn cảnh.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 98,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q018",
    "lessonId": 3,
    "questionType": "true_false",
    "questionText": "Khi rút thông điệp cần tránh khẩu hiệu chung chung.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 99,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q019",
    "lessonId": 3,
    "questionType": "true_false",
    "questionText": "Biến bài đọc thành lời khuyên chung chung.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 100,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q020",
    "lessonId": 3,
    "questionType": "true_false",
    "questionText": "Không phân biệt hành động nhân ái thật và hành động làm vì hình thức.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 101,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q021",
    "lessonId": 3,
    "questionType": "true_false",
    "questionText": "Bỏ qua hoàn cảnh của nhân vật.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 102,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q022",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Lan quên hộp màu đúng hôm lớp vẽ tranh. Tưởng phải ngồi nhìn, Lan bất ngờ thấy mỗi bạn trong tổ đặt lên bàn một cây màu. Bức tranh hôm ấy không đều màu, nhưng Lan nói đó là bức tranh ấm nhất. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 103,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q023",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Lan quên hộp màu đúng hôm lớp vẽ tranh. Tưởng phải ngồi nhìn, Lan bất ngờ thấy mỗi bạn trong tổ đặt lên bàn một cây màu. Bức tranh hôm ấy không đều màu, nhưng Lan nói đó là bức tranh ấm nhất. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 104,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q024",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Lan quên hộp màu đúng hôm lớp vẽ tranh. Tưởng phải ngồi nhìn, Lan bất ngờ thấy mỗi bạn trong tổ đặt lên bàn một cây màu. Bức tranh hôm ấy không đều màu, nhưng Lan nói đó là bức tranh ấm nhất. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 105,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q025",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: nhân vật ; chi tiết tiêu biểu ; thông điệp.",
    "options": null,
    "correctAnswer": "nhân vật -> người/vật tham gia câu chuyện | chi tiết tiêu biểu -> chi tiết giúp hiểu ý nghĩa | thông điệp -> điều văn bản gửi gắm",
    "answerText": "nhân vật -> người/vật tham gia câu chuyện | chi tiết tiêu biểu -> chi tiết giúp hiểu ý nghĩa | thông điệp -> điều văn bản gửi gắm",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 106,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q026",
    "lessonId": 3,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 107,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q027",
    "lessonId": 3,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 108,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q028",
    "lessonId": 3,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 109,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q029",
    "lessonId": 3,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 110,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q030",
    "lessonId": 3,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 111,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q031",
    "lessonId": 3,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 112,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q032",
    "lessonId": 3,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 113,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q033",
    "lessonId": 3,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Yêu thương và chia sẻ'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 114,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q034",
    "lessonId": 3,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 115,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q035",
    "lessonId": 3,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Yêu thương và chia sẻ'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 116,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q036",
    "lessonId": 3,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 117,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q037",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Yêu thương và chia sẻ' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Biến bài đọc thành lời khuyên chung chung.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Biến bài đọc thành lời khuyên chung chung.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 118,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q038",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Yêu thương và chia sẻ' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Biến bài đọc thành lời khuyên chung chung.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Biến bài đọc thành lời khuyên chung chung.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 119,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q039",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Yêu thương và chia sẻ' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Biến bài đọc thành lời khuyên chung chung.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Biến bài đọc thành lời khuyên chung chung.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 120,
    "sourceId": "lit6-b2-l03-yeu-thuong-va-chia-se-q040",
    "lessonId": 3,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Yêu thương và chia sẻ' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Biến bài đọc thành lời khuyên chung chung.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Biến bài đọc thành lời khuyên chung chung.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 121,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q001",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Quê hương yêu dấu'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Nhận ra chi tiết gợi quê hương."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nhận ra chi tiết gợi quê hương.",
    "explanationSimple": "Bài này hướng tới: Nhận ra chi tiết gợi quê hương.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 122,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q002",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Quê hương yêu dấu'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Phân tích cảm xúc trong hình ảnh."
      },
      {
        "key": "C",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "D",
        "text": "Bỏ qua chi tiết văn bản"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Phân tích cảm xúc trong hình ảnh.",
    "explanationSimple": "Bài này hướng tới: Phân tích cảm xúc trong hình ảnh.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 123,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q003",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Quê hương yêu dấu'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Viết đoạn tả một góc quê/địa phương."
      },
      {
        "key": "D",
        "text": "Viết càng dài càng tốt"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Viết đoạn tả một góc quê/địa phương.",
    "explanationSimple": "Bài này hướng tới: Viết đoạn tả một góc quê/địa phương.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 124,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q004",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Quê hương yêu dấu'?",
    "options": [
      {
        "key": "A",
        "text": "Văn tả quê hương cần chi tiết cụ thể, không chỉ dùng tính từ chung chung."
      },
      {
        "key": "B",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "C",
        "text": "Không phân biệt tả cảnh và bộc lộ tình cảm."
      },
      {
        "key": "D",
        "text": "Chỉ cần kể lại thật dài"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Văn tả quê hương cần chi tiết cụ thể, không chỉ dùng tính từ chung chung.",
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
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q005",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Quê hương yêu dấu'?",
    "options": [
      {
        "key": "A",
        "text": "Tình yêu quê hương thường được thể hiện qua hình ảnh thiên nhiên, âm thanh, màu sắc, mùi vị và kỷ niệm."
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Tả quê hương bằng công thức sáo rỗng."
      },
      {
        "key": "D",
        "text": "Không cần căn cứ văn bản"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tình yêu quê hương thường được thể hiện qua hình ảnh thiên nhiên, âm thanh, màu sắc, mùi vị và kỷ niệm.",
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
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q006",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Quê hương yêu dấu'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Tả quê hương bằng công thức sáo rỗng."
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Tình yêu quê hương thường được thể hiện qua hình ảnh thiên nhiên, âm thanh, màu sắc, mùi vị và kỷ niệm."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tình yêu quê hương thường được thể hiện qua hình ảnh thiên nhiên, âm thanh, màu sắc, mùi vị và kỷ niệm.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 127,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q007",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Quê hương yêu dấu'?",
    "options": [
      {
        "key": "A",
        "text": "Văn tả quê hương cần chi tiết cụ thể, không chỉ dùng tính từ chung chung."
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Dùng nhiều tính từ nhưng thiếu chi tiết cụ thể."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Văn tả quê hương cần chi tiết cụ thể, không chỉ dùng tính từ chung chung.",
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
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q008",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Quê hương yêu dấu'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Dùng nhiều tính từ nhưng thiếu chi tiết cụ thể."
      },
      {
        "key": "C",
        "text": "Cảm xúc của người viết có thể xen trong miêu tả cảnh vật."
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Cảm xúc của người viết có thể xen trong miêu tả cảnh vật.",
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
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q009",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'homeland'?",
    "options": [
      {
        "key": "A",
        "text": "hành động cụ thể"
      },
      {
        "key": "B",
        "text": "nhân hóa"
      },
      {
        "key": "C",
        "text": "quê hương"
      },
      {
        "key": "D",
        "text": "câu chủ đề"
      }
    ],
    "correctAnswer": "C",
    "answerText": "quê hương",
    "explanationSimple": "'quê hương' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 130,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q010",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'description'?",
    "options": [
      {
        "key": "A",
        "text": "chú thích"
      },
      {
        "key": "B",
        "text": "miêu tả"
      },
      {
        "key": "C",
        "text": "hậu quả"
      },
      {
        "key": "D",
        "text": "truyền thuyết"
      }
    ],
    "correctAnswer": "B",
    "answerText": "miêu tả",
    "explanationSimple": "'miêu tả' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 131,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q011",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'nature image'?",
    "options": [
      {
        "key": "A",
        "text": "cảm xúc"
      },
      {
        "key": "B",
        "text": "hậu quả"
      },
      {
        "key": "C",
        "text": "hình ảnh thiên nhiên"
      },
      {
        "key": "D",
        "text": "yếu tố thần kì"
      }
    ],
    "correctAnswer": "C",
    "answerText": "hình ảnh thiên nhiên",
    "explanationSimple": "'hình ảnh thiên nhiên' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 132,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q012",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'memory'?",
    "options": [
      {
        "key": "A",
        "text": "nghĩa gốc"
      },
      {
        "key": "B",
        "text": "dẫn chứng"
      },
      {
        "key": "C",
        "text": "nghĩa của từ"
      },
      {
        "key": "D",
        "text": "kỷ niệm"
      }
    ],
    "correctAnswer": "D",
    "answerText": "kỷ niệm",
    "explanationSimple": "'kỷ niệm' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 133,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q013",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'emotion'?",
    "options": [
      {
        "key": "A",
        "text": "cảm xúc"
      },
      {
        "key": "B",
        "text": "sự việc chính"
      },
      {
        "key": "C",
        "text": "đoạn văn"
      },
      {
        "key": "D",
        "text": "yêu thương"
      }
    ],
    "correctAnswer": "A",
    "answerText": "cảm xúc",
    "explanationSimple": "'cảm xúc' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 134,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q014",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'miêu tả' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "miêu tả: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "miêu tả: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 135,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q015",
    "lessonId": 4,
    "questionType": "true_false",
    "questionText": "Tình yêu quê hương thường được thể hiện qua hình ảnh thiên nhiên, âm thanh, màu sắc, mùi vị và kỷ niệm.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 136,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q016",
    "lessonId": 4,
    "questionType": "true_false",
    "questionText": "Văn tả quê hương cần chi tiết cụ thể, không chỉ dùng tính từ chung chung.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 137,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q017",
    "lessonId": 4,
    "questionType": "true_false",
    "questionText": "Cảm xúc của người viết có thể xen trong miêu tả cảnh vật.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 138,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q018",
    "lessonId": 4,
    "questionType": "true_false",
    "questionText": "Liên hệ địa phương giúp bài học gần gũi hơn.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 139,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q019",
    "lessonId": 4,
    "questionType": "true_false",
    "questionText": "Tả quê hương bằng công thức sáo rỗng.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 140,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q020",
    "lessonId": 4,
    "questionType": "true_false",
    "questionText": "Dùng nhiều tính từ nhưng thiếu chi tiết cụ thể.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 141,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q021",
    "lessonId": 4,
    "questionType": "true_false",
    "questionText": "Không phân biệt tả cảnh và bộc lộ tình cảm.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 142,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q022",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Con đường về nhà tôi mùa mưa có mùi bùn non và tiếng ếch gọi nhau ngoài ruộng. Bà bảo, chỉ cần nghe tiếng ấy là biết lúa đang lớn. Tôi đi xa, nhiều khi nhớ quê bắt đầu từ một âm thanh rất nhỏ. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 143,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q023",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Con đường về nhà tôi mùa mưa có mùi bùn non và tiếng ếch gọi nhau ngoài ruộng. Bà bảo, chỉ cần nghe tiếng ấy là biết lúa đang lớn. Tôi đi xa, nhiều khi nhớ quê bắt đầu từ một âm thanh rất nhỏ. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 144,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q024",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Con đường về nhà tôi mùa mưa có mùi bùn non và tiếng ếch gọi nhau ngoài ruộng. Bà bảo, chỉ cần nghe tiếng ấy là biết lúa đang lớn. Tôi đi xa, nhiều khi nhớ quê bắt đầu từ một âm thanh rất nhỏ. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 145,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q025",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: hình ảnh thơ ; nhịp thơ ; nhân vật trữ tình.",
    "options": null,
    "correctAnswer": "hình ảnh thơ -> hình ảnh gợi cảm xúc | nhịp thơ -> cách ngắt nhịp tạo giọng điệu | nhân vật trữ tình -> người bộc lộ cảm xúc",
    "answerText": "hình ảnh thơ -> hình ảnh gợi cảm xúc | nhịp thơ -> cách ngắt nhịp tạo giọng điệu | nhân vật trữ tình -> người bộc lộ cảm xúc",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 146,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q026",
    "lessonId": 4,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 147,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q027",
    "lessonId": 4,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 148,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q028",
    "lessonId": 4,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 149,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q029",
    "lessonId": 4,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 150,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q030",
    "lessonId": 4,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 151,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q031",
    "lessonId": 4,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 152,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q032",
    "lessonId": 4,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 153,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q033",
    "lessonId": 4,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Quê hương yêu dấu'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 154,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q034",
    "lessonId": 4,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 155,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q035",
    "lessonId": 4,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Quê hương yêu dấu'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 156,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q036",
    "lessonId": 4,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 157,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q037",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Quê hương yêu dấu' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Tả quê hương bằng công thức sáo rỗng.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Tả quê hương bằng công thức sáo rỗng.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 158,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q038",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Quê hương yêu dấu' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Tả quê hương bằng công thức sáo rỗng.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Tả quê hương bằng công thức sáo rỗng.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 159,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q039",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Quê hương yêu dấu' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Tả quê hương bằng công thức sáo rỗng.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Tả quê hương bằng công thức sáo rỗng.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 160,
    "sourceId": "lit6-b2-l04-que-huong-yeu-dau-q040",
    "lessonId": 4,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Quê hương yêu dấu' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Tả quê hương bằng công thức sáo rỗng.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Tả quê hương bằng công thức sáo rỗng.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 161,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q001",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Những nẻo đường xứ sở'?",
    "options": [
      {
        "key": "A",
        "text": "Phân biệt yếu tố thông tin và cảm xúc."
      },
      {
        "key": "B",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Phân biệt yếu tố thông tin và cảm xúc.",
    "explanationSimple": "Bài này hướng tới: Phân biệt yếu tố thông tin và cảm xúc.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 162,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q002",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Những nẻo đường xứ sở'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Tìm ý chính trong văn bản địa danh."
      },
      {
        "key": "D",
        "text": "Viết càng dài càng tốt"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tìm ý chính trong văn bản địa danh.",
    "explanationSimple": "Bài này hướng tới: Tìm ý chính trong văn bản địa danh.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 163,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q003",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Những nẻo đường xứ sở'?",
    "options": [
      {
        "key": "A",
        "text": "Viết đoạn giới thiệu một nơi em biết."
      },
      {
        "key": "B",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Viết đoạn giới thiệu một nơi em biết.",
    "explanationSimple": "Bài này hướng tới: Viết đoạn giới thiệu một nơi em biết.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 164,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q004",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Những nẻo đường xứ sở'?",
    "options": [
      {
        "key": "A",
        "text": "Khi đọc về địa danh cần chú ý vị trí, đặc điểm nổi bật và cảm nhận của người viết."
      },
      {
        "key": "B",
        "text": "Nhầm cảm xúc của người viết với số liệu khách quan."
      },
      {
        "key": "C",
        "text": "Chỉ liệt kê cảnh vật mà không nêu ý chính."
      },
      {
        "key": "D",
        "text": "Chỉ cần kể lại thật dài"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Khi đọc về địa danh cần chú ý vị trí, đặc điểm nổi bật và cảm nhận của người viết.",
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
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q005",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Những nẻo đường xứ sở'?",
    "options": [
      {
        "key": "A",
        "text": "Khi đọc về địa danh cần chú ý vị trí, đặc điểm nổi bật và cảm nhận của người viết."
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Bỏ qua tiêu đề phụ/chú thích."
      },
      {
        "key": "D",
        "text": "Nhầm cảm xúc của người viết với số liệu khách quan."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Khi đọc về địa danh cần chú ý vị trí, đặc điểm nổi bật và cảm nhận của người viết.",
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
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q006",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Những nẻo đường xứ sở'?",
    "options": [
      {
        "key": "A",
        "text": "Văn bản thông tin cần đọc theo nhan đề, đề tài, ý chính, chi tiết và chú thích."
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Nhầm cảm xúc của người viết với số liệu khách quan."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Văn bản thông tin cần đọc theo nhan đề, đề tài, ý chính, chi tiết và chú thích.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 167,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q007",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Những nẻo đường xứ sở'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "B",
        "text": "Nhầm cảm xúc của người viết với số liệu khách quan."
      },
      {
        "key": "C",
        "text": "Văn bản thông tin cần đọc theo nhan đề, đề tài, ý chính, chi tiết và chú thích."
      },
      {
        "key": "D",
        "text": "Không cần căn cứ văn bản"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Văn bản thông tin cần đọc theo nhan đề, đề tài, ý chính, chi tiết và chú thích.",
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
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q008",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Những nẻo đường xứ sở'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ liệt kê cảnh vật mà không nêu ý chính."
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Kí/du kí thường ghi lại hành trình, cảnh vật, con người và cảm xúc của người viết."
      },
      {
        "key": "D",
        "text": "Bỏ qua tiêu đề phụ/chú thích."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Kí/du kí thường ghi lại hành trình, cảnh vật, con người và cảm xúc của người viết.",
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
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q009",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'travel writing'?",
    "options": [
      {
        "key": "A",
        "text": "bài nói"
      },
      {
        "key": "B",
        "text": "du kí"
      },
      {
        "key": "C",
        "text": "yếu tố thần kì"
      },
      {
        "key": "D",
        "text": "người kể chuyện"
      }
    ],
    "correctAnswer": "B",
    "answerText": "du kí",
    "explanationSimple": "'du kí' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 170,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q010",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'informational text'?",
    "options": [
      {
        "key": "A",
        "text": "cái thiện"
      },
      {
        "key": "B",
        "text": "văn bản thông tin"
      },
      {
        "key": "C",
        "text": "ẩn dụ"
      },
      {
        "key": "D",
        "text": "cảm nghĩ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "văn bản thông tin",
    "explanationSimple": "'văn bản thông tin' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 171,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q011",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'place name'?",
    "options": [
      {
        "key": "A",
        "text": "ý trọn vẹn"
      },
      {
        "key": "B",
        "text": "địa danh"
      },
      {
        "key": "C",
        "text": "câu"
      },
      {
        "key": "D",
        "text": "câu triển khai"
      }
    ],
    "correctAnswer": "B",
    "answerText": "địa danh",
    "explanationSimple": "'địa danh' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 172,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q012",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'main idea'?",
    "options": [
      {
        "key": "A",
        "text": "ý chính"
      },
      {
        "key": "B",
        "text": "giác quan"
      },
      {
        "key": "C",
        "text": "quan sát"
      },
      {
        "key": "D",
        "text": "trình tự"
      }
    ],
    "correctAnswer": "A",
    "answerText": "ý chính",
    "explanationSimple": "'ý chính' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 173,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q013",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'caption'?",
    "options": [
      {
        "key": "A",
        "text": "yếu tố kì ảo"
      },
      {
        "key": "B",
        "text": "chú thích"
      },
      {
        "key": "C",
        "text": "trình tự"
      },
      {
        "key": "D",
        "text": "gợi hình"
      }
    ],
    "correctAnswer": "B",
    "answerText": "chú thích",
    "explanationSimple": "'chú thích' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 174,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q014",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'ý chính' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "ý chính: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "ý chính: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 175,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q015",
    "lessonId": 5,
    "questionType": "true_false",
    "questionText": "Kí/du kí thường ghi lại hành trình, cảnh vật, con người và cảm xúc của người viết.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 176,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q016",
    "lessonId": 5,
    "questionType": "true_false",
    "questionText": "Văn bản thông tin cần đọc theo nhan đề, đề tài, ý chính, chi tiết và chú thích.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 177,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q017",
    "lessonId": 5,
    "questionType": "true_false",
    "questionText": "Khi đọc về địa danh cần chú ý vị trí, đặc điểm nổi bật và cảm nhận của người viết.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 178,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q018",
    "lessonId": 5,
    "questionType": "true_false",
    "questionText": "Không nên đọc văn bản thông tin như truyện hư cấu.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 179,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q019",
    "lessonId": 5,
    "questionType": "true_false",
    "questionText": "Bỏ qua tiêu đề phụ/chú thích.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 180,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q020",
    "lessonId": 5,
    "questionType": "true_false",
    "questionText": "Nhầm cảm xúc của người viết với số liệu khách quan.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 181,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q021",
    "lessonId": 5,
    "questionType": "true_false",
    "questionText": "Chỉ liệt kê cảnh vật mà không nêu ý chính.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 182,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q022",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Từ bến sông, con đường dẫn vào làng gốm nhỏ và đỏ màu đất nung. Người thợ già xoay bàn gốm chậm rãi, bàn tay ông như biết trò chuyện với đất. Du khách đến đây không chỉ mua một chiếc bình, họ mang về câu chuyện của lửa và đất. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 183,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q023",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Từ bến sông, con đường dẫn vào làng gốm nhỏ và đỏ màu đất nung. Người thợ già xoay bàn gốm chậm rãi, bàn tay ông như biết trò chuyện với đất. Du khách đến đây không chỉ mua một chiếc bình, họ mang về câu chuyện của lửa và đất. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 184,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q024",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Từ bến sông, con đường dẫn vào làng gốm nhỏ và đỏ màu đất nung. Người thợ già xoay bàn gốm chậm rãi, bàn tay ông như biết trò chuyện với đất. Du khách đến đây không chỉ mua một chiếc bình, họ mang về câu chuyện của lửa và đất. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 185,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q025",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: ý chính ; dẫn chứng ; liên hệ.",
    "options": null,
    "correctAnswer": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "answerText": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 186,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q026",
    "lessonId": 5,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 187,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q027",
    "lessonId": 5,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 188,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q028",
    "lessonId": 5,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 189,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q029",
    "lessonId": 5,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 190,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q030",
    "lessonId": 5,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 191,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q031",
    "lessonId": 5,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 192,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q032",
    "lessonId": 5,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 193,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q033",
    "lessonId": 5,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Những nẻo đường xứ sở'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 194,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q034",
    "lessonId": 5,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 195,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q035",
    "lessonId": 5,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Những nẻo đường xứ sở'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 196,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q036",
    "lessonId": 5,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 197,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q037",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Những nẻo đường xứ sở' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Bỏ qua tiêu đề phụ/chú thích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Bỏ qua tiêu đề phụ/chú thích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 198,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q038",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Những nẻo đường xứ sở' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Bỏ qua tiêu đề phụ/chú thích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Bỏ qua tiêu đề phụ/chú thích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 199,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q039",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Những nẻo đường xứ sở' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Bỏ qua tiêu đề phụ/chú thích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Bỏ qua tiêu đề phụ/chú thích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 200,
    "sourceId": "lit6-b2-l05-nhung-neo-duong-xu-so-q040",
    "lessonId": 5,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Những nẻo đường xứ sở' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Bỏ qua tiêu đề phụ/chú thích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Bỏ qua tiêu đề phụ/chú thích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 201,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q001",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Chuyện kể về những người anh hùng'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Nhận biết đặc điểm truyền thuyết."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nhận biết đặc điểm truyền thuyết.",
    "explanationSimple": "Bài này hướng tới: Nhận biết đặc điểm truyền thuyết.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 202,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q002",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Chuyện kể về những người anh hùng'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Tìm yếu tố kì ảo."
      },
      {
        "key": "C",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "D",
        "text": "Bỏ qua chi tiết văn bản"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tìm yếu tố kì ảo.",
    "explanationSimple": "Bài này hướng tới: Tìm yếu tố kì ảo.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 203,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q003",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Chuyện kể về những người anh hùng'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Nêu ý nghĩa biểu tượng của nhân vật/hành động."
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nêu ý nghĩa biểu tượng của nhân vật/hành động.",
    "explanationSimple": "Bài này hướng tới: Nêu ý nghĩa biểu tượng của nhân vật/hành động.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 204,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q004",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Chuyện kể về những người anh hùng'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ kể chiến công mà không phân tích phẩm chất."
      },
      {
        "key": "B",
        "text": "Xem truyền thuyết như bản ghi lịch sử chính xác tuyệt đối."
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Yếu tố kì ảo làm câu chuyện giàu tính biểu tượng, không nên hiểu máy móc như sự kiện lịch sử chính xác."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Yếu tố kì ảo làm câu chuyện giàu tính biểu tượng, không nên hiểu máy móc như sự kiện lịch sử chính xác.",
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
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q005",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Chuyện kể về những người anh hùng'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "B",
        "text": "Bỏ qua ý nghĩa biểu tượng của chi tiết kì ảo."
      },
      {
        "key": "C",
        "text": "Yếu tố kì ảo làm câu chuyện giàu tính biểu tượng, không nên hiểu máy móc như sự kiện lịch sử chính xác."
      },
      {
        "key": "D",
        "text": "Xem truyền thuyết như bản ghi lịch sử chính xác tuyệt đối."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Yếu tố kì ảo làm câu chuyện giàu tính biểu tượng, không nên hiểu máy móc như sự kiện lịch sử chính xác.",
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
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q006",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Chuyện kể về những người anh hùng'?",
    "options": [
      {
        "key": "A",
        "text": "Yếu tố kì ảo làm câu chuyện giàu tính biểu tượng, không nên hiểu máy móc như sự kiện lịch sử chính xác."
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Bỏ qua ý nghĩa biểu tượng của chi tiết kì ảo."
      },
      {
        "key": "D",
        "text": "Xem truyền thuyết như bản ghi lịch sử chính xác tuyệt đối."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Yếu tố kì ảo làm câu chuyện giàu tính biểu tượng, không nên hiểu máy móc như sự kiện lịch sử chính xác.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 207,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q007",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Chuyện kể về những người anh hùng'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "B",
        "text": "Yếu tố kì ảo làm câu chuyện giàu tính biểu tượng, không nên hiểu máy móc như sự kiện lịch sử chính xác."
      },
      {
        "key": "C",
        "text": "Bỏ qua ý nghĩa biểu tượng của chi tiết kì ảo."
      },
      {
        "key": "D",
        "text": "Xem truyền thuyết như bản ghi lịch sử chính xác tuyệt đối."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Yếu tố kì ảo làm câu chuyện giàu tính biểu tượng, không nên hiểu máy móc như sự kiện lịch sử chính xác.",
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
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q008",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Chuyện kể về những người anh hùng'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua ý nghĩa biểu tượng của chi tiết kì ảo."
      },
      {
        "key": "B",
        "text": "Cần phân biệt sự thật lịch sử, chi tiết hư cấu và giá trị biểu tượng."
      },
      {
        "key": "C",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "D",
        "text": "Chỉ kể chiến công mà không phân tích phẩm chất."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Cần phân biệt sự thật lịch sử, chi tiết hư cấu và giá trị biểu tượng.",
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
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q009",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'legend'?",
    "options": [
      {
        "key": "A",
        "text": "truyền thuyết"
      },
      {
        "key": "B",
        "text": "từ đơn"
      },
      {
        "key": "C",
        "text": "nhân vật"
      },
      {
        "key": "D",
        "text": "nhân vật trữ tình"
      }
    ],
    "correctAnswer": "A",
    "answerText": "truyền thuyết",
    "explanationSimple": "'truyền thuyết' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 210,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q010",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'hero'?",
    "options": [
      {
        "key": "A",
        "text": "nhân hóa"
      },
      {
        "key": "B",
        "text": "liên hệ bản thân"
      },
      {
        "key": "C",
        "text": "chú thích"
      },
      {
        "key": "D",
        "text": "anh hùng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "anh hùng",
    "explanationSimple": "'anh hùng' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 211,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q011",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'fantastic element'?",
    "options": [
      {
        "key": "A",
        "text": "nghĩa gốc"
      },
      {
        "key": "B",
        "text": "yếu tố kì ảo"
      },
      {
        "key": "C",
        "text": "liên kết"
      },
      {
        "key": "D",
        "text": "giải pháp"
      }
    ],
    "correctAnswer": "B",
    "answerText": "yếu tố kì ảo",
    "explanationSimple": "'yếu tố kì ảo' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 212,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q012",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'symbol'?",
    "options": [
      {
        "key": "A",
        "text": "câu kết"
      },
      {
        "key": "B",
        "text": "dẫn chứng"
      },
      {
        "key": "C",
        "text": "bối cảnh"
      },
      {
        "key": "D",
        "text": "biểu tượng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "biểu tượng",
    "explanationSimple": "'biểu tượng' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 213,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q013",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'community'?",
    "options": [
      {
        "key": "A",
        "text": "câu"
      },
      {
        "key": "B",
        "text": "nghĩa của từ"
      },
      {
        "key": "C",
        "text": "kí"
      },
      {
        "key": "D",
        "text": "cộng đồng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "cộng đồng",
    "explanationSimple": "'cộng đồng' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 214,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q014",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'truyền thuyết' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "truyền thuyết: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "truyền thuyết: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 215,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q015",
    "lessonId": 6,
    "questionType": "true_false",
    "questionText": "Truyền thuyết thường có yếu tố lịch sử, yếu tố tưởng tượng kì ảo và ý nghĩa cộng đồng.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 216,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q016",
    "lessonId": 6,
    "questionType": "true_false",
    "questionText": "Nhân vật anh hùng thường có phẩm chất nổi bật, hành động lớn, gắn với lợi ích chung.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 217,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q017",
    "lessonId": 6,
    "questionType": "true_false",
    "questionText": "Yếu tố kì ảo làm câu chuyện giàu tính biểu tượng, không nên hiểu máy móc như sự kiện lịch sử chính xác.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 218,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q018",
    "lessonId": 6,
    "questionType": "true_false",
    "questionText": "Cần phân biệt sự thật lịch sử, chi tiết hư cấu và giá trị biểu tượng.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 219,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q019",
    "lessonId": 6,
    "questionType": "true_false",
    "questionText": "Xem truyền thuyết như bản ghi lịch sử chính xác tuyệt đối.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 220,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q020",
    "lessonId": 6,
    "questionType": "true_false",
    "questionText": "Bỏ qua ý nghĩa biểu tượng của chi tiết kì ảo.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 221,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q021",
    "lessonId": 6,
    "questionType": "true_false",
    "questionText": "Chỉ kể chiến công mà không phân tích phẩm chất.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 222,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q022",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Người làng kể rằng khi giặc đến, cậu bé chăn trâu bỗng nghe tiếng núi gọi. Cậu nhổ cây tre bên đường, vung lên thành ngọn giáo sáng rực. Sau trận ấy, trên đồi mọc một rừng tre thẳng như lời thề giữ làng. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 223,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q023",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Người làng kể rằng khi giặc đến, cậu bé chăn trâu bỗng nghe tiếng núi gọi. Cậu nhổ cây tre bên đường, vung lên thành ngọn giáo sáng rực. Sau trận ấy, trên đồi mọc một rừng tre thẳng như lời thề giữ làng. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 224,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q024",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Người làng kể rằng khi giặc đến, cậu bé chăn trâu bỗng nghe tiếng núi gọi. Cậu nhổ cây tre bên đường, vung lên thành ngọn giáo sáng rực. Sau trận ấy, trên đồi mọc một rừng tre thẳng như lời thề giữ làng. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 225,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q025",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: nhân vật ; chi tiết tiêu biểu ; thông điệp.",
    "options": null,
    "correctAnswer": "nhân vật -> người/vật tham gia câu chuyện | chi tiết tiêu biểu -> chi tiết giúp hiểu ý nghĩa | thông điệp -> điều văn bản gửi gắm",
    "answerText": "nhân vật -> người/vật tham gia câu chuyện | chi tiết tiêu biểu -> chi tiết giúp hiểu ý nghĩa | thông điệp -> điều văn bản gửi gắm",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 226,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q026",
    "lessonId": 6,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 227,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q027",
    "lessonId": 6,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 228,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q028",
    "lessonId": 6,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 229,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q029",
    "lessonId": 6,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 230,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q030",
    "lessonId": 6,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 231,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q031",
    "lessonId": 6,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 232,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q032",
    "lessonId": 6,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 233,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q033",
    "lessonId": 6,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Chuyện kể về những người anh hùng'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 234,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q034",
    "lessonId": 6,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 235,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q035",
    "lessonId": 6,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Chuyện kể về những người anh hùng'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 236,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q036",
    "lessonId": 6,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 237,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q037",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Chuyện kể về những người anh hùng' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Xem truyền thuyết như bản ghi lịch sử chính xác tuyệt đối.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Xem truyền thuyết như bản ghi lịch sử chính xác tuyệt đối.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 238,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q038",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Chuyện kể về những người anh hùng' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Xem truyền thuyết như bản ghi lịch sử chính xác tuyệt đối.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Xem truyền thuyết như bản ghi lịch sử chính xác tuyệt đối.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 239,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q039",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Chuyện kể về những người anh hùng' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Xem truyền thuyết như bản ghi lịch sử chính xác tuyệt đối.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Xem truyền thuyết như bản ghi lịch sử chính xác tuyệt đối.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 240,
    "sourceId": "lit6-b2-l06-chuyen-ke-ve-nhung-nguoi-anh-hung-q040",
    "lessonId": 6,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Chuyện kể về những người anh hùng' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Xem truyền thuyết như bản ghi lịch sử chính xác tuyệt đối.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Xem truyền thuyết như bản ghi lịch sử chính xác tuyệt đối.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 241,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q001",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Thế giới cổ tích'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Nhận biết đặc điểm truyện cổ tích."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nhận biết đặc điểm truyện cổ tích.",
    "explanationSimple": "Bài này hướng tới: Nhận biết đặc điểm truyện cổ tích.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 242,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q002",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Thế giới cổ tích'?",
    "options": [
      {
        "key": "A",
        "text": "Phân tích nhân vật qua thử thách."
      },
      {
        "key": "B",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "C",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "D",
        "text": "Bỏ qua chi tiết văn bản"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Phân tích nhân vật qua thử thách.",
    "explanationSimple": "Bài này hướng tới: Phân tích nhân vật qua thử thách.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 243,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q003",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Thế giới cổ tích'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Nêu bài học nhân văn."
      },
      {
        "key": "C",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "D",
        "text": "Viết càng dài càng tốt"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nêu bài học nhân văn.",
    "explanationSimple": "Bài này hướng tới: Nêu bài học nhân văn.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 244,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q004",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Thế giới cổ tích'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "B",
        "text": "Chỉ kể yếu tố thần kì mà không nêu ý nghĩa."
      },
      {
        "key": "C",
        "text": "Nhân vật cổ tích thường có nét tính cách nổi bật, dễ nhận biết."
      },
      {
        "key": "D",
        "text": "Đánh giá nhân vật không dựa vào chi tiết."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nhân vật cổ tích thường có nét tính cách nổi bật, dễ nhận biết.",
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
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q005",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Thế giới cổ tích'?",
    "options": [
      {
        "key": "A",
        "text": "Yếu tố thần kì giúp giải quyết mâu thuẫn và thể hiện ước mơ của nhân dân."
      },
      {
        "key": "B",
        "text": "Chỉ kể yếu tố thần kì mà không nêu ý nghĩa."
      },
      {
        "key": "C",
        "text": "Đánh giá nhân vật không dựa vào chi tiết."
      },
      {
        "key": "D",
        "text": "Nhầm cổ tích với truyền thuyết."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Yếu tố thần kì giúp giải quyết mâu thuẫn và thể hiện ước mơ của nhân dân.",
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
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q006",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Thế giới cổ tích'?",
    "options": [
      {
        "key": "A",
        "text": "Đánh giá nhân vật không dựa vào chi tiết."
      },
      {
        "key": "B",
        "text": "Truyện cổ tích thường phản ánh ước mơ công bằng, niềm tin cái thiện thắng cái ác và khát vọng hạnh phúc."
      },
      {
        "key": "C",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "D",
        "text": "Nhầm cổ tích với truyền thuyết."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Truyện cổ tích thường phản ánh ước mơ công bằng, niềm tin cái thiện thắng cái ác và khát vọng hạnh phúc.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 247,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q007",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Thế giới cổ tích'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ kể yếu tố thần kì mà không nêu ý nghĩa."
      },
      {
        "key": "B",
        "text": "Truyện cổ tích thường phản ánh ước mơ công bằng, niềm tin cái thiện thắng cái ác và khát vọng hạnh phúc."
      },
      {
        "key": "C",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "D",
        "text": "Đánh giá nhân vật không dựa vào chi tiết."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Truyện cổ tích thường phản ánh ước mơ công bằng, niềm tin cái thiện thắng cái ác và khát vọng hạnh phúc.",
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
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q008",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Thế giới cổ tích'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "B",
        "text": "Nhầm cổ tích với truyền thuyết."
      },
      {
        "key": "C",
        "text": "Yếu tố thần kì giúp giải quyết mâu thuẫn và thể hiện ước mơ của nhân dân."
      },
      {
        "key": "D",
        "text": "Đánh giá nhân vật không dựa vào chi tiết."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Yếu tố thần kì giúp giải quyết mâu thuẫn và thể hiện ước mơ của nhân dân.",
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
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q009",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'fairy tale'?",
    "options": [
      {
        "key": "A",
        "text": "cổ tích"
      },
      {
        "key": "B",
        "text": "ẩn dụ"
      },
      {
        "key": "C",
        "text": "chủ ngữ"
      },
      {
        "key": "D",
        "text": "kết luận"
      }
    ],
    "correctAnswer": "A",
    "answerText": "cổ tích",
    "explanationSimple": "'cổ tích' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 250,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q010",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'magical element'?",
    "options": [
      {
        "key": "A",
        "text": "nghĩa chuyển"
      },
      {
        "key": "B",
        "text": "yếu tố thần kì"
      },
      {
        "key": "C",
        "text": "luận điểm"
      },
      {
        "key": "D",
        "text": "nhân vật trữ tình"
      }
    ],
    "correctAnswer": "B",
    "answerText": "yếu tố thần kì",
    "explanationSimple": "'yếu tố thần kì' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 251,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q011",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'challenge'?",
    "options": [
      {
        "key": "A",
        "text": "khác biệt"
      },
      {
        "key": "B",
        "text": "thử thách"
      },
      {
        "key": "C",
        "text": "hồi kí"
      },
      {
        "key": "D",
        "text": "từ phức"
      }
    ],
    "correctAnswer": "B",
    "answerText": "thử thách",
    "explanationSimple": "'thử thách' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 252,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q012",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'goodness'?",
    "options": [
      {
        "key": "A",
        "text": "cái thiện"
      },
      {
        "key": "B",
        "text": "tình huống truyện"
      },
      {
        "key": "C",
        "text": "dấu câu"
      },
      {
        "key": "D",
        "text": "gợi cảm"
      }
    ],
    "correctAnswer": "A",
    "answerText": "cái thiện",
    "explanationSimple": "'cái thiện' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 253,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q013",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'lesson'?",
    "options": [
      {
        "key": "A",
        "text": "bài học"
      },
      {
        "key": "B",
        "text": "tác giả"
      },
      {
        "key": "C",
        "text": "trải nghiệm"
      },
      {
        "key": "D",
        "text": "chủ ngữ"
      }
    ],
    "correctAnswer": "A",
    "answerText": "bài học",
    "explanationSimple": "'bài học' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 254,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q014",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'cái thiện' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "cái thiện: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "cái thiện: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 255,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q015",
    "lessonId": 7,
    "questionType": "true_false",
    "questionText": "Truyện cổ tích thường phản ánh ước mơ công bằng, niềm tin cái thiện thắng cái ác và khát vọng hạnh phúc.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 256,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q016",
    "lessonId": 7,
    "questionType": "true_false",
    "questionText": "Cần chú ý kiểu nhân vật, thử thách, phần thưởng/trừng phạt và yếu tố thần kì.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 257,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q017",
    "lessonId": 7,
    "questionType": "true_false",
    "questionText": "Nhân vật cổ tích thường có nét tính cách nổi bật, dễ nhận biết.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 258,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q018",
    "lessonId": 7,
    "questionType": "true_false",
    "questionText": "Yếu tố thần kì giúp giải quyết mâu thuẫn và thể hiện ước mơ của nhân dân.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 259,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q019",
    "lessonId": 7,
    "questionType": "true_false",
    "questionText": "Nhầm cổ tích với truyền thuyết.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 260,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q020",
    "lessonId": 7,
    "questionType": "true_false",
    "questionText": "Chỉ kể yếu tố thần kì mà không nêu ý nghĩa.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 261,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q021",
    "lessonId": 7,
    "questionType": "true_false",
    "questionText": "Đánh giá nhân vật không dựa vào chi tiết.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 262,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q022",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Cô bé nghèo nhặt được hạt giống lấp lánh dưới gốc đa. Cô không giữ riêng mà gieo ở giữa làng. Sáng hôm sau, cây mọc đầy quả thơm, ai đói cũng được hái. Từ ấy, dân làng gọi nó là cây của lòng tốt. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 263,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q023",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Cô bé nghèo nhặt được hạt giống lấp lánh dưới gốc đa. Cô không giữ riêng mà gieo ở giữa làng. Sáng hôm sau, cây mọc đầy quả thơm, ai đói cũng được hái. Từ ấy, dân làng gọi nó là cây của lòng tốt. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 264,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q024",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Cô bé nghèo nhặt được hạt giống lấp lánh dưới gốc đa. Cô không giữ riêng mà gieo ở giữa làng. Sáng hôm sau, cây mọc đầy quả thơm, ai đói cũng được hái. Từ ấy, dân làng gọi nó là cây của lòng tốt. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 265,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q025",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: nhân vật ; chi tiết tiêu biểu ; thông điệp.",
    "options": null,
    "correctAnswer": "nhân vật -> người/vật tham gia câu chuyện | chi tiết tiêu biểu -> chi tiết giúp hiểu ý nghĩa | thông điệp -> điều văn bản gửi gắm",
    "answerText": "nhân vật -> người/vật tham gia câu chuyện | chi tiết tiêu biểu -> chi tiết giúp hiểu ý nghĩa | thông điệp -> điều văn bản gửi gắm",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 266,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q026",
    "lessonId": 7,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 267,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q027",
    "lessonId": 7,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 268,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q028",
    "lessonId": 7,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 269,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q029",
    "lessonId": 7,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 270,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q030",
    "lessonId": 7,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 271,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q031",
    "lessonId": 7,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 272,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q032",
    "lessonId": 7,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 273,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q033",
    "lessonId": 7,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Thế giới cổ tích'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 274,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q034",
    "lessonId": 7,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 275,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q035",
    "lessonId": 7,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Thế giới cổ tích'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 276,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q036",
    "lessonId": 7,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 277,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q037",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Thế giới cổ tích' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nhầm cổ tích với truyền thuyết.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nhầm cổ tích với truyền thuyết.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 278,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q038",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Thế giới cổ tích' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nhầm cổ tích với truyền thuyết.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nhầm cổ tích với truyền thuyết.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 279,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q039",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Thế giới cổ tích' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nhầm cổ tích với truyền thuyết.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nhầm cổ tích với truyền thuyết.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 280,
    "sourceId": "lit6-b2-l07-the-gioi-co-tich-q040",
    "lessonId": 7,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Thế giới cổ tích' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nhầm cổ tích với truyền thuyết.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nhầm cổ tích với truyền thuyết.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 281,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q001",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Khác biệt và gần gũi'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "B",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Nhận biết luận điểm, lí lẽ, bằng chứng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nhận biết luận điểm, lí lẽ, bằng chứng.",
    "explanationSimple": "Bài này hướng tới: Nhận biết luận điểm, lí lẽ, bằng chứng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 282,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q002",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Khác biệt và gần gũi'?",
    "options": [
      {
        "key": "A",
        "text": "Trình bày ý kiến về tôn trọng khác biệt."
      },
      {
        "key": "B",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Trình bày ý kiến về tôn trọng khác biệt.",
    "explanationSimple": "Bài này hướng tới: Trình bày ý kiến về tôn trọng khác biệt.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 283,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q003",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Khác biệt và gần gũi'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "B",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Phản hồi lịch sự trong thảo luận."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Phản hồi lịch sự trong thảo luận.",
    "explanationSimple": "Bài này hướng tới: Phản hồi lịch sự trong thảo luận.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 284,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q004",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Khác biệt và gần gũi'?",
    "options": [
      {
        "key": "A",
        "text": "Văn bản nghị luận thường có luận điểm, lí lẽ và bằng chứng."
      },
      {
        "key": "B",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "C",
        "text": "Phản biện bằng công kích cá nhân."
      },
      {
        "key": "D",
        "text": "Không cần căn cứ văn bản"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Văn bản nghị luận thường có luận điểm, lí lẽ và bằng chứng.",
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
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q005",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Khác biệt và gần gũi'?",
    "options": [
      {
        "key": "A",
        "text": "Phản biện nên tập trung vào vấn đề, không công kích cá nhân."
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Nêu ý kiến mà không có lí lẽ."
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Phản biện nên tập trung vào vấn đề, không công kích cá nhân.",
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
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q006",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Khác biệt và gần gũi'?",
    "options": [
      {
        "key": "A",
        "text": "Phản biện nên tập trung vào vấn đề, không công kích cá nhân."
      },
      {
        "key": "B",
        "text": "Đồng nhất khác biệt với sai trái."
      },
      {
        "key": "C",
        "text": "Phản biện bằng công kích cá nhân."
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Phản biện nên tập trung vào vấn đề, không công kích cá nhân.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 287,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q007",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Khác biệt và gần gũi'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "C",
        "text": "Một ý kiến thuyết phục cần có lí do và ví dụ cụ thể."
      },
      {
        "key": "D",
        "text": "Không cần căn cứ văn bản"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Một ý kiến thuyết phục cần có lí do và ví dụ cụ thể.",
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
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q008",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Khác biệt và gần gũi'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "B",
        "text": "Văn bản nghị luận thường có luận điểm, lí lẽ và bằng chứng."
      },
      {
        "key": "C",
        "text": "Nêu ý kiến mà không có lí lẽ."
      },
      {
        "key": "D",
        "text": "Không cần căn cứ văn bản"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Văn bản nghị luận thường có luận điểm, lí lẽ và bằng chứng.",
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
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q009",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'claim'?",
    "options": [
      {
        "key": "A",
        "text": "từ láy"
      },
      {
        "key": "B",
        "text": "tình bạn"
      },
      {
        "key": "C",
        "text": "trình tự"
      },
      {
        "key": "D",
        "text": "luận điểm"
      }
    ],
    "correctAnswer": "D",
    "answerText": "luận điểm",
    "explanationSimple": "'luận điểm' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 290,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q010",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'reason'?",
    "options": [
      {
        "key": "A",
        "text": "lí lẽ"
      },
      {
        "key": "B",
        "text": "vị ngữ"
      },
      {
        "key": "C",
        "text": "từ trung tâm"
      },
      {
        "key": "D",
        "text": "từ ngữ gợi cảm"
      }
    ],
    "correctAnswer": "A",
    "answerText": "lí lẽ",
    "explanationSimple": "'lí lẽ' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 291,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q011",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'evidence'?",
    "options": [
      {
        "key": "A",
        "text": "dấu câu"
      },
      {
        "key": "B",
        "text": "nguyên nhân"
      },
      {
        "key": "C",
        "text": "bằng chứng"
      },
      {
        "key": "D",
        "text": "phản biện"
      }
    ],
    "correctAnswer": "C",
    "answerText": "bằng chứng",
    "explanationSimple": "'bằng chứng' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 292,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q012",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'difference'?",
    "options": [
      {
        "key": "A",
        "text": "khác biệt"
      },
      {
        "key": "B",
        "text": "người kể chuyện"
      },
      {
        "key": "C",
        "text": "phần phụ"
      },
      {
        "key": "D",
        "text": "miêu tả"
      }
    ],
    "correctAnswer": "A",
    "answerText": "khác biệt",
    "explanationSimple": "'khác biệt' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 293,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q013",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'response'?",
    "options": [
      {
        "key": "A",
        "text": "trình tự"
      },
      {
        "key": "B",
        "text": "gợi cảm"
      },
      {
        "key": "C",
        "text": "luận điểm"
      },
      {
        "key": "D",
        "text": "phản biện"
      }
    ],
    "correctAnswer": "D",
    "answerText": "phản biện",
    "explanationSimple": "'phản biện' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 294,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q014",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'lí lẽ' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "lí lẽ: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "lí lẽ: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 295,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q015",
    "lessonId": 8,
    "questionType": "true_false",
    "questionText": "Văn bản nghị luận thường có luận điểm, lí lẽ và bằng chứng.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 296,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q016",
    "lessonId": 8,
    "questionType": "true_false",
    "questionText": "Tôn trọng khác biệt không có nghĩa là đồng ý mọi điều, mà là biết lắng nghe và phản hồi văn minh.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 297,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q017",
    "lessonId": 8,
    "questionType": "true_false",
    "questionText": "Một ý kiến thuyết phục cần có lí do và ví dụ cụ thể.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 298,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q018",
    "lessonId": 8,
    "questionType": "true_false",
    "questionText": "Phản biện nên tập trung vào vấn đề, không công kích cá nhân.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 299,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q019",
    "lessonId": 8,
    "questionType": "true_false",
    "questionText": "Nêu ý kiến mà không có lí lẽ.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 300,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q020",
    "lessonId": 8,
    "questionType": "true_false",
    "questionText": "Đồng nhất khác biệt với sai trái.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 301,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q021",
    "lessonId": 8,
    "questionType": "true_false",
    "questionText": "Phản biện bằng công kích cá nhân.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 302,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q022",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Trong một lớp học, có bạn thích đọc sách, có bạn mê bóng đá, có bạn chỉ muốn yên tĩnh vẽ tranh. Sự khác nhau ấy không làm lớp rời rạc nếu mỗi người biết lắng nghe. Một tập thể mạnh không phải vì ai cũng giống nhau, mà vì biết cùng làm việc dù mỗi người có màu sắc riêng. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 303,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q023",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Trong một lớp học, có bạn thích đọc sách, có bạn mê bóng đá, có bạn chỉ muốn yên tĩnh vẽ tranh. Sự khác nhau ấy không làm lớp rời rạc nếu mỗi người biết lắng nghe. Một tập thể mạnh không phải vì ai cũng giống nhau, mà vì biết cùng làm việc dù mỗi người có màu sắc riêng. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 304,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q024",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Trong một lớp học, có bạn thích đọc sách, có bạn mê bóng đá, có bạn chỉ muốn yên tĩnh vẽ tranh. Sự khác nhau ấy không làm lớp rời rạc nếu mỗi người biết lắng nghe. Một tập thể mạnh không phải vì ai cũng giống nhau, mà vì biết cùng làm việc dù mỗi người có màu sắc riêng. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 305,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q025",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: ý chính ; dẫn chứng ; liên hệ.",
    "options": null,
    "correctAnswer": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "answerText": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 306,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q026",
    "lessonId": 8,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 307,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q027",
    "lessonId": 8,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 308,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q028",
    "lessonId": 8,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 309,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q029",
    "lessonId": 8,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 310,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q030",
    "lessonId": 8,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 311,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q031",
    "lessonId": 8,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 312,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q032",
    "lessonId": 8,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 313,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q033",
    "lessonId": 8,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Khác biệt và gần gũi'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 314,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q034",
    "lessonId": 8,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 315,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q035",
    "lessonId": 8,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Khác biệt và gần gũi'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 316,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q036",
    "lessonId": 8,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 317,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q037",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Khác biệt và gần gũi' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nêu ý kiến mà không có lí lẽ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nêu ý kiến mà không có lí lẽ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 318,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q038",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Khác biệt và gần gũi' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nêu ý kiến mà không có lí lẽ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nêu ý kiến mà không có lí lẽ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 319,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q039",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Khác biệt và gần gũi' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nêu ý kiến mà không có lí lẽ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nêu ý kiến mà không có lí lẽ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 320,
    "sourceId": "lit6-b2-l08-khac-biet-va-gan-gui-q040",
    "lessonId": 8,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Khác biệt và gần gũi' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nêu ý kiến mà không có lí lẽ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nêu ý kiến mà không có lí lẽ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 321,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q001",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Trái Đất - ngôi nhà chung'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Xác định vấn đề môi trường."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Xác định vấn đề môi trường.",
    "explanationSimple": "Bài này hướng tới: Xác định vấn đề môi trường.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 322,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q002",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Trái Đất - ngôi nhà chung'?",
    "options": [
      {
        "key": "A",
        "text": "Phân biệt nguyên nhân, hậu quả, giải pháp."
      },
      {
        "key": "B",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Phân biệt nguyên nhân, hậu quả, giải pháp.",
    "explanationSimple": "Bài này hướng tới: Phân biệt nguyên nhân, hậu quả, giải pháp.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 323,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q003",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Trái Đất - ngôi nhà chung'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Viết đoạn kêu gọi hành động cụ thể."
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Viết đoạn kêu gọi hành động cụ thể.",
    "explanationSimple": "Bài này hướng tới: Viết đoạn kêu gọi hành động cụ thể.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 324,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q004",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trái Đất - ngôi nhà chung'?",
    "options": [
      {
        "key": "A",
        "text": "Văn bản môi trường thường nêu vấn đề, nguyên nhân, hậu quả và giải pháp."
      },
      {
        "key": "B",
        "text": "Đổ lỗi chung chung, không thấy trách nhiệm cá nhân."
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Nêu vấn đề quá rộng nhưng không có hành động cụ thể."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Văn bản môi trường thường nêu vấn đề, nguyên nhân, hậu quả và giải pháp.",
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
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q005",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trái Đất - ngôi nhà chung'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "B",
        "text": "Đổ lỗi chung chung, không thấy trách nhiệm cá nhân."
      },
      {
        "key": "C",
        "text": "Cần đọc số liệu/thông tin nếu có và phân biệt với ý kiến bình luận."
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Cần đọc số liệu/thông tin nếu có và phân biệt với ý kiến bình luận.",
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
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q006",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trái Đất - ngôi nhà chung'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "B",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "C",
        "text": "Văn bản môi trường thường nêu vấn đề, nguyên nhân, hậu quả và giải pháp."
      },
      {
        "key": "D",
        "text": "Đổ lỗi chung chung, không thấy trách nhiệm cá nhân."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Văn bản môi trường thường nêu vấn đề, nguyên nhân, hậu quả và giải pháp.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 327,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q007",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trái Đất - ngôi nhà chung'?",
    "options": [
      {
        "key": "A",
        "text": "Nêu vấn đề quá rộng nhưng không có hành động cụ thể."
      },
      {
        "key": "B",
        "text": "Văn bản môi trường thường nêu vấn đề, nguyên nhân, hậu quả và giải pháp."
      },
      {
        "key": "C",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Văn bản môi trường thường nêu vấn đề, nguyên nhân, hậu quả và giải pháp.",
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
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q008",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Trái Đất - ngôi nhà chung'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Cần đọc số liệu/thông tin nếu có và phân biệt với ý kiến bình luận."
      },
      {
        "key": "C",
        "text": "Đổ lỗi chung chung, không thấy trách nhiệm cá nhân."
      },
      {
        "key": "D",
        "text": "Không cần căn cứ văn bản"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Cần đọc số liệu/thông tin nếu có và phân biệt với ý kiến bình luận.",
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
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q009",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'environment'?",
    "options": [
      {
        "key": "A",
        "text": "chú thích"
      },
      {
        "key": "B",
        "text": "môi trường"
      },
      {
        "key": "C",
        "text": "người kể chuyện"
      },
      {
        "key": "D",
        "text": "gợi hình"
      }
    ],
    "correctAnswer": "B",
    "answerText": "môi trường",
    "explanationSimple": "'môi trường' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 330,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q010",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'cause'?",
    "options": [
      {
        "key": "A",
        "text": "môi trường"
      },
      {
        "key": "B",
        "text": "quan sát"
      },
      {
        "key": "C",
        "text": "nghĩa chuyển"
      },
      {
        "key": "D",
        "text": "nguyên nhân"
      }
    ],
    "correctAnswer": "D",
    "answerText": "nguyên nhân",
    "explanationSimple": "'nguyên nhân' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 331,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q011",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'effect'?",
    "options": [
      {
        "key": "A",
        "text": "phản hồi"
      },
      {
        "key": "B",
        "text": "hình ảnh thiên nhiên"
      },
      {
        "key": "C",
        "text": "hậu quả"
      },
      {
        "key": "D",
        "text": "bằng chứng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "hậu quả",
    "explanationSimple": "'hậu quả' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 332,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q012",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'solution'?",
    "options": [
      {
        "key": "A",
        "text": "đề tài"
      },
      {
        "key": "B",
        "text": "giải pháp"
      },
      {
        "key": "C",
        "text": "gợi hình"
      },
      {
        "key": "D",
        "text": "nhân vật trữ tình"
      }
    ],
    "correctAnswer": "B",
    "answerText": "giải pháp",
    "explanationSimple": "'giải pháp' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 333,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q013",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'specific action'?",
    "options": [
      {
        "key": "A",
        "text": "phẩm chất"
      },
      {
        "key": "B",
        "text": "từ ngữ gợi cảm"
      },
      {
        "key": "C",
        "text": "hậu quả"
      },
      {
        "key": "D",
        "text": "hành động cụ thể"
      }
    ],
    "correctAnswer": "D",
    "answerText": "hành động cụ thể",
    "explanationSimple": "'hành động cụ thể' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 334,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q014",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'nguyên nhân' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "nguyên nhân: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "nguyên nhân: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 335,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q015",
    "lessonId": 9,
    "questionType": "true_false",
    "questionText": "Văn bản môi trường thường nêu vấn đề, nguyên nhân, hậu quả và giải pháp.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 336,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q016",
    "lessonId": 9,
    "questionType": "true_false",
    "questionText": "Cần đọc số liệu/thông tin nếu có và phân biệt với ý kiến bình luận.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 337,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q017",
    "lessonId": 9,
    "questionType": "true_false",
    "questionText": "Hành động bảo vệ môi trường nên cụ thể, vừa sức và có thể thực hiện.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 338,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q018",
    "lessonId": 9,
    "questionType": "true_false",
    "questionText": "Không nên viết khẩu hiệu chung chung mà thiếu ví dụ.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 339,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q019",
    "lessonId": 9,
    "questionType": "true_false",
    "questionText": "Nêu vấn đề quá rộng nhưng không có hành động cụ thể.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 340,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q020",
    "lessonId": 9,
    "questionType": "true_false",
    "questionText": "Dùng số liệu mà không hiểu ý nghĩa.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 341,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q021",
    "lessonId": 9,
    "questionType": "true_false",
    "questionText": "Đổ lỗi chung chung, không thấy trách nhiệm cá nhân.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 342,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q022",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Sau buổi liên hoan, sân trường còn đầy ly nhựa. Nhóm trực nhật mất gần một giờ để nhặt rác. Từ tuần sau, lớp 6B mang bình nước cá nhân và đặt một hộp thu gom giấy vụn. Sân trường không sạch ngay lập tức, nhưng mỗi ngày bớt đi một túi rác. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 343,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q023",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Sau buổi liên hoan, sân trường còn đầy ly nhựa. Nhóm trực nhật mất gần một giờ để nhặt rác. Từ tuần sau, lớp 6B mang bình nước cá nhân và đặt một hộp thu gom giấy vụn. Sân trường không sạch ngay lập tức, nhưng mỗi ngày bớt đi một túi rác. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 344,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q024",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Sau buổi liên hoan, sân trường còn đầy ly nhựa. Nhóm trực nhật mất gần một giờ để nhặt rác. Từ tuần sau, lớp 6B mang bình nước cá nhân và đặt một hộp thu gom giấy vụn. Sân trường không sạch ngay lập tức, nhưng mỗi ngày bớt đi một túi rác. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 345,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q025",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: ý chính ; dẫn chứng ; liên hệ.",
    "options": null,
    "correctAnswer": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "answerText": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 346,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q026",
    "lessonId": 9,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 347,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q027",
    "lessonId": 9,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 348,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q028",
    "lessonId": 9,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 349,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q029",
    "lessonId": 9,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 350,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q030",
    "lessonId": 9,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 351,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q031",
    "lessonId": 9,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 352,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q032",
    "lessonId": 9,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 353,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q033",
    "lessonId": 9,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Trái Đất - ngôi nhà chung'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 354,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q034",
    "lessonId": 9,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 355,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q035",
    "lessonId": 9,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Trái Đất - ngôi nhà chung'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 356,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q036",
    "lessonId": 9,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 357,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q037",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Trái Đất - ngôi nhà chung' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nêu vấn đề quá rộng nhưng không có hành động cụ thể.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nêu vấn đề quá rộng nhưng không có hành động cụ thể.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 358,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q038",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Trái Đất - ngôi nhà chung' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nêu vấn đề quá rộng nhưng không có hành động cụ thể.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nêu vấn đề quá rộng nhưng không có hành động cụ thể.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 359,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q039",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Trái Đất - ngôi nhà chung' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nêu vấn đề quá rộng nhưng không có hành động cụ thể.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nêu vấn đề quá rộng nhưng không có hành động cụ thể.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 360,
    "sourceId": "lit6-b2-l09-trai-dat-ngoi-nha-chung-q040",
    "lessonId": 9,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Trái Đất - ngôi nhà chung' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nêu vấn đề quá rộng nhưng không có hành động cụ thể.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nêu vấn đề quá rộng nhưng không có hành động cụ thể.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 361,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q001",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Cuốn sách tôi yêu'?",
    "options": [
      {
        "key": "A",
        "text": "Biết khung giới thiệu sách."
      },
      {
        "key": "B",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Biết khung giới thiệu sách.",
    "explanationSimple": "Bài này hướng tới: Biết khung giới thiệu sách.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 362,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q002",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Cuốn sách tôi yêu'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "B",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "C",
        "text": "Viết đoạn cảm nghĩ về sách."
      },
      {
        "key": "D",
        "text": "Bỏ qua chi tiết văn bản"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Viết đoạn cảm nghĩ về sách.",
    "explanationSimple": "Bài này hướng tới: Viết đoạn cảm nghĩ về sách.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 363,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q003",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Cuốn sách tôi yêu'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Nói ngắn gọn về cuốn sách yêu thích."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nói ngắn gọn về cuốn sách yêu thích.",
    "explanationSimple": "Bài này hướng tới: Nói ngắn gọn về cuốn sách yêu thích.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 364,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q004",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cuốn sách tôi yêu'?",
    "options": [
      {
        "key": "A",
        "text": "Giới thiệu sách cần nêu tên sách, tác giả nếu có, chủ đề, điểm hấp dẫn và lí do yêu thích."
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "D",
        "text": "Khen sách chung chung."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Giới thiệu sách cần nêu tên sách, tác giả nếu có, chủ đề, điểm hấp dẫn và lí do yêu thích.",
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
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q005",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cuốn sách tôi yêu'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Không nên kể hết nội dung sách; chỉ chọn chi tiết tiêu biểu."
      },
      {
        "key": "D",
        "text": "Không nói rõ tên/chủ đề sách."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Không nên kể hết nội dung sách; chỉ chọn chi tiết tiêu biểu.",
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
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q006",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cuốn sách tôi yêu'?",
    "options": [
      {
        "key": "A",
        "text": "Tóm tắt quá dài, thiếu cảm nhận cá nhân."
      },
      {
        "key": "B",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "C",
        "text": "Không nói rõ tên/chủ đề sách."
      },
      {
        "key": "D",
        "text": "Có thể trình bày bằng đoạn văn, poster, nhật ký đọc sách hoặc bài nói ngắn."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Có thể trình bày bằng đoạn văn, poster, nhật ký đọc sách hoặc bài nói ngắn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 367,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q007",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cuốn sách tôi yêu'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Cảm nghĩ về sách cần có trải nghiệm đọc và điều bản thân nhận ra."
      },
      {
        "key": "C",
        "text": "Không nói rõ tên/chủ đề sách."
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Cảm nghĩ về sách cần có trải nghiệm đọc và điều bản thân nhận ra.",
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
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q008",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cuốn sách tôi yêu'?",
    "options": [
      {
        "key": "A",
        "text": "Cảm nghĩ về sách cần có trải nghiệm đọc và điều bản thân nhận ra."
      },
      {
        "key": "B",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "C",
        "text": "Không nói rõ tên/chủ đề sách."
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cảm nghĩ về sách cần có trải nghiệm đọc và điều bản thân nhận ra.",
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
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q009",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'book introduction'?",
    "options": [
      {
        "key": "A",
        "text": "giới thiệu sách"
      },
      {
        "key": "B",
        "text": "kỷ niệm"
      },
      {
        "key": "C",
        "text": "cổ tích"
      },
      {
        "key": "D",
        "text": "phẩm chất"
      }
    ],
    "correctAnswer": "A",
    "answerText": "giới thiệu sách",
    "explanationSimple": "'giới thiệu sách' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 370,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q010",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'author'?",
    "options": [
      {
        "key": "A",
        "text": "du kí"
      },
      {
        "key": "B",
        "text": "từ ngữ gợi cảm"
      },
      {
        "key": "C",
        "text": "gợi hình"
      },
      {
        "key": "D",
        "text": "tác giả"
      }
    ],
    "correctAnswer": "D",
    "answerText": "tác giả",
    "explanationSimple": "'tác giả' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 371,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q011",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'theme'?",
    "options": [
      {
        "key": "A",
        "text": "câu triển khai"
      },
      {
        "key": "B",
        "text": "chủ đề"
      },
      {
        "key": "C",
        "text": "đề tài"
      },
      {
        "key": "D",
        "text": "bài nói"
      }
    ],
    "correctAnswer": "B",
    "answerText": "chủ đề",
    "explanationSimple": "'chủ đề' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 372,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q012",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'reflection'?",
    "options": [
      {
        "key": "A",
        "text": "giải pháp"
      },
      {
        "key": "B",
        "text": "miêu tả"
      },
      {
        "key": "C",
        "text": "bài học"
      },
      {
        "key": "D",
        "text": "cảm nghĩ"
      }
    ],
    "correctAnswer": "D",
    "answerText": "cảm nghĩ",
    "explanationSimple": "'cảm nghĩ' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 373,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q013",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'key detail'?",
    "options": [
      {
        "key": "A",
        "text": "câu"
      },
      {
        "key": "B",
        "text": "so sánh"
      },
      {
        "key": "C",
        "text": "quan sát"
      },
      {
        "key": "D",
        "text": "chi tiết tiêu biểu"
      }
    ],
    "correctAnswer": "D",
    "answerText": "chi tiết tiêu biểu",
    "explanationSimple": "'chi tiết tiêu biểu' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 374,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q014",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'chủ đề' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "chủ đề: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "chủ đề: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 375,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q015",
    "lessonId": 10,
    "questionType": "true_false",
    "questionText": "Giới thiệu sách cần nêu tên sách, tác giả nếu có, chủ đề, điểm hấp dẫn và lí do yêu thích.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 376,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q016",
    "lessonId": 10,
    "questionType": "true_false",
    "questionText": "Không nên kể hết nội dung sách; chỉ chọn chi tiết tiêu biểu.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 377,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q017",
    "lessonId": 10,
    "questionType": "true_false",
    "questionText": "Cảm nghĩ về sách cần có trải nghiệm đọc và điều bản thân nhận ra.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 378,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q018",
    "lessonId": 10,
    "questionType": "true_false",
    "questionText": "Có thể trình bày bằng đoạn văn, poster, nhật ký đọc sách hoặc bài nói ngắn.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 379,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q019",
    "lessonId": 10,
    "questionType": "true_false",
    "questionText": "Tóm tắt quá dài, thiếu cảm nhận cá nhân.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 380,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q020",
    "lessonId": 10,
    "questionType": "true_false",
    "questionText": "Khen sách chung chung.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 381,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q021",
    "lessonId": 10,
    "questionType": "true_false",
    "questionText": "Không nói rõ tên/chủ đề sách.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 382,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q022",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Tôi thích cuốn sách nhỏ về một cậu bé trồng cây trên sân thượng. Cậu không làm điều gì vĩ đại, chỉ tưới nước đều đặn và ghi lại từng chiếc lá mới. Đọc xong, tôi hiểu rằng sự kiên nhẫn đôi khi bắt đầu từ một chậu cây rất bé. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 383,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q023",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Tôi thích cuốn sách nhỏ về một cậu bé trồng cây trên sân thượng. Cậu không làm điều gì vĩ đại, chỉ tưới nước đều đặn và ghi lại từng chiếc lá mới. Đọc xong, tôi hiểu rằng sự kiên nhẫn đôi khi bắt đầu từ một chậu cây rất bé. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 384,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q024",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Tôi thích cuốn sách nhỏ về một cậu bé trồng cây trên sân thượng. Cậu không làm điều gì vĩ đại, chỉ tưới nước đều đặn và ghi lại từng chiếc lá mới. Đọc xong, tôi hiểu rằng sự kiên nhẫn đôi khi bắt đầu từ một chậu cây rất bé. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 385,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q025",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: ý chính ; dẫn chứng ; liên hệ.",
    "options": null,
    "correctAnswer": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "answerText": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 386,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q026",
    "lessonId": 10,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 387,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q027",
    "lessonId": 10,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 388,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q028",
    "lessonId": 10,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 389,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q029",
    "lessonId": 10,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 390,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q030",
    "lessonId": 10,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 391,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q031",
    "lessonId": 10,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 392,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q032",
    "lessonId": 10,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 393,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q033",
    "lessonId": 10,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Cuốn sách tôi yêu'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 394,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q034",
    "lessonId": 10,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 395,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q035",
    "lessonId": 10,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Cuốn sách tôi yêu'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 396,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q036",
    "lessonId": 10,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 397,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q037",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Cuốn sách tôi yêu' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Tóm tắt quá dài, thiếu cảm nhận cá nhân.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Tóm tắt quá dài, thiếu cảm nhận cá nhân.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 398,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q038",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Cuốn sách tôi yêu' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Tóm tắt quá dài, thiếu cảm nhận cá nhân.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Tóm tắt quá dài, thiếu cảm nhận cá nhân.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 399,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q039",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Cuốn sách tôi yêu' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Tóm tắt quá dài, thiếu cảm nhận cá nhân.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Tóm tắt quá dài, thiếu cảm nhận cá nhân.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 400,
    "sourceId": "lit6-b2-l10-cuon-sach-toi-yeu-q040",
    "lessonId": 10,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Cuốn sách tôi yêu' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Tóm tắt quá dài, thiếu cảm nhận cá nhân.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Tóm tắt quá dài, thiếu cảm nhận cá nhân.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 401,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q001",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Đọc hiểu truyện'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Tìm sự việc chính."
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tìm sự việc chính.",
    "explanationSimple": "Bài này hướng tới: Tìm sự việc chính.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 402,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q002",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Đọc hiểu truyện'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "C",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "D",
        "text": "Nhận xét nhân vật có dẫn chứng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nhận xét nhân vật có dẫn chứng.",
    "explanationSimple": "Bài này hướng tới: Nhận xét nhân vật có dẫn chứng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 403,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q003",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Đọc hiểu truyện'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "B",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "C",
        "text": "Nêu thông điệp dựa vào chi tiết."
      },
      {
        "key": "D",
        "text": "Bỏ qua chi tiết văn bản"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nêu thông điệp dựa vào chi tiết.",
    "explanationSimple": "Bài này hướng tới: Nêu thông điệp dựa vào chi tiết.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 404,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q004",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu truyện'?",
    "options": [
      {
        "key": "A",
        "text": "Kể lại truyện thay cho phân tích."
      },
      {
        "key": "B",
        "text": "Kết luận về nhân vật không có dẫn chứng."
      },
      {
        "key": "C",
        "text": "Bỏ qua người kể chuyện."
      },
      {
        "key": "D",
        "text": "Thông điệp truyện cần rút ra từ văn bản, không áp đặt quá xa."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Thông điệp truyện cần rút ra từ văn bản, không áp đặt quá xa.",
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
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q005",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu truyện'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "B",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "C",
        "text": "Nhân vật được thể hiện qua ngoại hình, lời nói, hành động, suy nghĩ và quan hệ với nhân vật khác."
      },
      {
        "key": "D",
        "text": "Kể lại truyện thay cho phân tích."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nhân vật được thể hiện qua ngoại hình, lời nói, hành động, suy nghĩ và quan hệ với nhân vật khác.",
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
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q006",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu truyện'?",
    "options": [
      {
        "key": "A",
        "text": "Chi tiết tiêu biểu giúp hiểu tính cách, tình huống hoặc thông điệp."
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Bỏ qua người kể chuyện."
      },
      {
        "key": "D",
        "text": "Kết luận về nhân vật không có dẫn chứng."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Chi tiết tiêu biểu giúp hiểu tính cách, tình huống hoặc thông điệp.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 407,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q007",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu truyện'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Kết luận về nhân vật không có dẫn chứng."
      },
      {
        "key": "D",
        "text": "Thông điệp truyện cần rút ra từ văn bản, không áp đặt quá xa."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Thông điệp truyện cần rút ra từ văn bản, không áp đặt quá xa.",
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
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q008",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu truyện'?",
    "options": [
      {
        "key": "A",
        "text": "Nhân vật được thể hiện qua ngoại hình, lời nói, hành động, suy nghĩ và quan hệ với nhân vật khác."
      },
      {
        "key": "B",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "C",
        "text": "Bỏ qua người kể chuyện."
      },
      {
        "key": "D",
        "text": "Kể lại truyện thay cho phân tích."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nhân vật được thể hiện qua ngoại hình, lời nói, hành động, suy nghĩ và quan hệ với nhân vật khác.",
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
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q009",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'plot'?",
    "options": [
      {
        "key": "A",
        "text": "hồi kí"
      },
      {
        "key": "B",
        "text": "cốt truyện"
      },
      {
        "key": "C",
        "text": "tác dụng"
      },
      {
        "key": "D",
        "text": "nhân vật trữ tình"
      }
    ],
    "correctAnswer": "B",
    "answerText": "cốt truyện",
    "explanationSimple": "'cốt truyện' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 410,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q010",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'setting'?",
    "options": [
      {
        "key": "A",
        "text": "nhân vật"
      },
      {
        "key": "B",
        "text": "cổ tích"
      },
      {
        "key": "C",
        "text": "cảm xúc"
      },
      {
        "key": "D",
        "text": "bối cảnh"
      }
    ],
    "correctAnswer": "D",
    "answerText": "bối cảnh",
    "explanationSimple": "'bối cảnh' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 411,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q011",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'narrator'?",
    "options": [
      {
        "key": "A",
        "text": "lắng nghe"
      },
      {
        "key": "B",
        "text": "người kể chuyện"
      },
      {
        "key": "C",
        "text": "giới thiệu sách"
      },
      {
        "key": "D",
        "text": "anh hùng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "người kể chuyện",
    "explanationSimple": "'người kể chuyện' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 412,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q012",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'main event'?",
    "options": [
      {
        "key": "A",
        "text": "nghĩa chuyển"
      },
      {
        "key": "B",
        "text": "ngữ cảnh"
      },
      {
        "key": "C",
        "text": "hình ảnh thơ"
      },
      {
        "key": "D",
        "text": "sự việc chính"
      }
    ],
    "correctAnswer": "D",
    "answerText": "sự việc chính",
    "explanationSimple": "'sự việc chính' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 413,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q013",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'evidence'?",
    "options": [
      {
        "key": "A",
        "text": "dẫn chứng"
      },
      {
        "key": "B",
        "text": "bằng chứng"
      },
      {
        "key": "C",
        "text": "hồi kí"
      },
      {
        "key": "D",
        "text": "giọng điệu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "dẫn chứng",
    "explanationSimple": "'dẫn chứng' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 414,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q014",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'bối cảnh' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "bối cảnh: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "bối cảnh: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 415,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q015",
    "lessonId": 11,
    "questionType": "true_false",
    "questionText": "Đọc truyện cần xác định cốt truyện, bối cảnh, nhân vật, sự việc chính và người kể chuyện.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 416,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q016",
    "lessonId": 11,
    "questionType": "true_false",
    "questionText": "Nhân vật được thể hiện qua ngoại hình, lời nói, hành động, suy nghĩ và quan hệ với nhân vật khác.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 417,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q017",
    "lessonId": 11,
    "questionType": "true_false",
    "questionText": "Chi tiết tiêu biểu giúp hiểu tính cách, tình huống hoặc thông điệp.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 418,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q018",
    "lessonId": 11,
    "questionType": "true_false",
    "questionText": "Thông điệp truyện cần rút ra từ văn bản, không áp đặt quá xa.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 419,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q019",
    "lessonId": 11,
    "questionType": "true_false",
    "questionText": "Kể lại truyện thay cho phân tích.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 420,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q020",
    "lessonId": 11,
    "questionType": "true_false",
    "questionText": "Bỏ qua người kể chuyện.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 421,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q021",
    "lessonId": 11,
    "questionType": "true_false",
    "questionText": "Kết luận về nhân vật không có dẫn chứng.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 422,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q022",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Bình luôn nhận phần dễ trong nhóm. Đến khi bạn bị ốm, Bình phải thuyết trình thay. Cậu run đến mức quên lời, nhưng cả nhóm vẫn vỗ tay động viên. Từ hôm ấy, Bình tự nhận thêm việc chuẩn bị tranh minh họa. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 423,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q023",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Bình luôn nhận phần dễ trong nhóm. Đến khi bạn bị ốm, Bình phải thuyết trình thay. Cậu run đến mức quên lời, nhưng cả nhóm vẫn vỗ tay động viên. Từ hôm ấy, Bình tự nhận thêm việc chuẩn bị tranh minh họa. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 424,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q024",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Bình luôn nhận phần dễ trong nhóm. Đến khi bạn bị ốm, Bình phải thuyết trình thay. Cậu run đến mức quên lời, nhưng cả nhóm vẫn vỗ tay động viên. Từ hôm ấy, Bình tự nhận thêm việc chuẩn bị tranh minh họa. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 425,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q025",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: ý chính ; dẫn chứng ; liên hệ.",
    "options": null,
    "correctAnswer": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "answerText": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 426,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q026",
    "lessonId": 11,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 427,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q027",
    "lessonId": 11,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 428,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q028",
    "lessonId": 11,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 429,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q029",
    "lessonId": 11,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 430,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q030",
    "lessonId": 11,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 431,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q031",
    "lessonId": 11,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 432,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q032",
    "lessonId": 11,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 433,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q033",
    "lessonId": 11,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Đọc hiểu truyện'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 434,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q034",
    "lessonId": 11,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 435,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q035",
    "lessonId": 11,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Đọc hiểu truyện'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 436,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q036",
    "lessonId": 11,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 437,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q037",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Đọc hiểu truyện' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Kể lại truyện thay cho phân tích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Kể lại truyện thay cho phân tích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 438,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q038",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Đọc hiểu truyện' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Kể lại truyện thay cho phân tích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Kể lại truyện thay cho phân tích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 439,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q039",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Đọc hiểu truyện' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Kể lại truyện thay cho phân tích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Kể lại truyện thay cho phân tích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 440,
    "sourceId": "lit6-b2-l11-doc-hieu-truyen-q040",
    "lessonId": 11,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Đọc hiểu truyện' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Kể lại truyện thay cho phân tích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Kể lại truyện thay cho phân tích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 441,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q001",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Đọc hiểu thơ'?",
    "options": [
      {
        "key": "A",
        "text": "Tìm hình ảnh thơ."
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Viết càng dài càng tốt"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tìm hình ảnh thơ.",
    "explanationSimple": "Bài này hướng tới: Tìm hình ảnh thơ.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 442,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q002",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Đọc hiểu thơ'?",
    "options": [
      {
        "key": "A",
        "text": "Nêu tác dụng của từ ngữ gợi cảm."
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Bỏ qua chi tiết văn bản"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nêu tác dụng của từ ngữ gợi cảm.",
    "explanationSimple": "Bài này hướng tới: Nêu tác dụng của từ ngữ gợi cảm.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 443,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q003",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Đọc hiểu thơ'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "C",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "D",
        "text": "Viết cảm nhận ngắn."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Viết cảm nhận ngắn.",
    "explanationSimple": "Bài này hướng tới: Viết cảm nhận ngắn.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 444,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q004",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu thơ'?",
    "options": [
      {
        "key": "A",
        "text": "Hình ảnh thơ có thể vừa tả sự vật vừa gửi gắm cảm xúc."
      },
      {
        "key": "B",
        "text": "Chỉ đếm số dòng mà quên cảm xúc."
      },
      {
        "key": "C",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "D",
        "text": "Không nêu từ ngữ làm căn cứ."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Hình ảnh thơ có thể vừa tả sự vật vừa gửi gắm cảm xúc.",
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
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q005",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu thơ'?",
    "options": [
      {
        "key": "A",
        "text": "Hình ảnh thơ có thể vừa tả sự vật vừa gửi gắm cảm xúc."
      },
      {
        "key": "B",
        "text": "Chỉ đếm số dòng mà quên cảm xúc."
      },
      {
        "key": "C",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "D",
        "text": "Không nêu từ ngữ làm căn cứ."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Hình ảnh thơ có thể vừa tả sự vật vừa gửi gắm cảm xúc.",
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
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q006",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu thơ'?",
    "options": [
      {
        "key": "A",
        "text": "Diễn giải thơ máy móc."
      },
      {
        "key": "B",
        "text": "Thơ thường gợi cảm xúc cô đọng hơn là kể dài."
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Chỉ đếm số dòng mà quên cảm xúc."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Thơ thường gợi cảm xúc cô đọng hơn là kể dài.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 447,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q007",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu thơ'?",
    "options": [
      {
        "key": "A",
        "text": "Diễn giải thơ máy móc."
      },
      {
        "key": "B",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "C",
        "text": "Hình ảnh thơ có thể vừa tả sự vật vừa gửi gắm cảm xúc."
      },
      {
        "key": "D",
        "text": "Chỉ đếm số dòng mà quên cảm xúc."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Hình ảnh thơ có thể vừa tả sự vật vừa gửi gắm cảm xúc.",
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
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q008",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu thơ'?",
    "options": [
      {
        "key": "A",
        "text": "Không nêu từ ngữ làm căn cứ."
      },
      {
        "key": "B",
        "text": "Đọc thơ cần chú ý hình ảnh, nhịp, vần, từ ngữ gợi cảm, giọng điệu và nhân vật trữ tình."
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Không cần căn cứ văn bản"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Đọc thơ cần chú ý hình ảnh, nhịp, vần, từ ngữ gợi cảm, giọng điệu và nhân vật trữ tình.",
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
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q009",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'rhyme'?",
    "options": [
      {
        "key": "A",
        "text": "hậu quả"
      },
      {
        "key": "B",
        "text": "vần"
      },
      {
        "key": "C",
        "text": "thông điệp nhân ái"
      },
      {
        "key": "D",
        "text": "câu chủ đề"
      }
    ],
    "correctAnswer": "B",
    "answerText": "vần",
    "explanationSimple": "'vần' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 450,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q010",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'tone'?",
    "options": [
      {
        "key": "A",
        "text": "vần"
      },
      {
        "key": "B",
        "text": "đoạn văn"
      },
      {
        "key": "C",
        "text": "giọng điệu"
      },
      {
        "key": "D",
        "text": "sự việc chính"
      }
    ],
    "correctAnswer": "C",
    "answerText": "giọng điệu",
    "explanationSimple": "'giọng điệu' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 451,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q011",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'visual'?",
    "options": [
      {
        "key": "A",
        "text": "câu chủ đề"
      },
      {
        "key": "B",
        "text": "nhân hóa"
      },
      {
        "key": "C",
        "text": "chủ đề"
      },
      {
        "key": "D",
        "text": "gợi hình"
      }
    ],
    "correctAnswer": "D",
    "answerText": "gợi hình",
    "explanationSimple": "'gợi hình' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 452,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q012",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'emotional'?",
    "options": [
      {
        "key": "A",
        "text": "câu kết"
      },
      {
        "key": "B",
        "text": "gợi cảm"
      },
      {
        "key": "C",
        "text": "ý chính"
      },
      {
        "key": "D",
        "text": "hậu quả"
      }
    ],
    "correctAnswer": "B",
    "answerText": "gợi cảm",
    "explanationSimple": "'gợi cảm' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 453,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q013",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'response'?",
    "options": [
      {
        "key": "A",
        "text": "giác quan"
      },
      {
        "key": "B",
        "text": "cảm nhận"
      },
      {
        "key": "C",
        "text": "trình tự thời gian"
      },
      {
        "key": "D",
        "text": "vị ngữ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "cảm nhận",
    "explanationSimple": "'cảm nhận' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 454,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q014",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'vần' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "vần: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "vần: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 455,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q015",
    "lessonId": 12,
    "questionType": "true_false",
    "questionText": "Đọc thơ cần chú ý hình ảnh, nhịp, vần, từ ngữ gợi cảm, giọng điệu và nhân vật trữ tình.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 456,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q016",
    "lessonId": 12,
    "questionType": "true_false",
    "questionText": "Thơ thường gợi cảm xúc cô đọng hơn là kể dài.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 457,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q017",
    "lessonId": 12,
    "questionType": "true_false",
    "questionText": "Hình ảnh thơ có thể vừa tả sự vật vừa gửi gắm cảm xúc.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 458,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q018",
    "lessonId": 12,
    "questionType": "true_false",
    "questionText": "Cảm nhận thơ nên có dẫn chứng từ từ ngữ hoặc hình ảnh.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 459,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q019",
    "lessonId": 12,
    "questionType": "true_false",
    "questionText": "Chỉ đếm số dòng mà quên cảm xúc.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 460,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q020",
    "lessonId": 12,
    "questionType": "true_false",
    "questionText": "Diễn giải thơ máy móc.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 461,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q021",
    "lessonId": 12,
    "questionType": "true_false",
    "questionText": "Không nêu từ ngữ làm căn cứ.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 462,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q022",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Tiếng ve rơi mỏng trên sân / phượng nghiêng đốm lửa cuối lần chia tay / trang lưu bút khép trong tay / mà nghe mùa hạ vẫn bay ngoài trời. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 463,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q023",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Tiếng ve rơi mỏng trên sân / phượng nghiêng đốm lửa cuối lần chia tay / trang lưu bút khép trong tay / mà nghe mùa hạ vẫn bay ngoài trời. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 464,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q024",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Tiếng ve rơi mỏng trên sân / phượng nghiêng đốm lửa cuối lần chia tay / trang lưu bút khép trong tay / mà nghe mùa hạ vẫn bay ngoài trời. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 465,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q025",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: ý chính ; dẫn chứng ; liên hệ.",
    "options": null,
    "correctAnswer": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "answerText": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 466,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q026",
    "lessonId": 12,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 467,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q027",
    "lessonId": 12,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 468,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q028",
    "lessonId": 12,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 469,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q029",
    "lessonId": 12,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 470,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q030",
    "lessonId": 12,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 471,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q031",
    "lessonId": 12,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 472,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q032",
    "lessonId": 12,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 473,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q033",
    "lessonId": 12,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Đọc hiểu thơ'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 474,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q034",
    "lessonId": 12,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 475,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q035",
    "lessonId": 12,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Đọc hiểu thơ'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 476,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q036",
    "lessonId": 12,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 477,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q037",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Đọc hiểu thơ' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Chỉ đếm số dòng mà quên cảm xúc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Chỉ đếm số dòng mà quên cảm xúc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 478,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q038",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Đọc hiểu thơ' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Chỉ đếm số dòng mà quên cảm xúc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Chỉ đếm số dòng mà quên cảm xúc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 479,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q039",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Đọc hiểu thơ' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Chỉ đếm số dòng mà quên cảm xúc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Chỉ đếm số dòng mà quên cảm xúc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 480,
    "sourceId": "lit6-b2-l12-doc-hieu-tho-q040",
    "lessonId": 12,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Đọc hiểu thơ' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Chỉ đếm số dòng mà quên cảm xúc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Chỉ đếm số dòng mà quên cảm xúc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 481,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q001",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Đọc hiểu kí, du kí và hồi kí'?",
    "options": [
      {
        "key": "A",
        "text": "Nhận biết đặc điểm kí/du kí/hồi kí."
      },
      {
        "key": "B",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nhận biết đặc điểm kí/du kí/hồi kí.",
    "explanationSimple": "Bài này hướng tới: Nhận biết đặc điểm kí/du kí/hồi kí.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 482,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q002",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Đọc hiểu kí, du kí và hồi kí'?",
    "options": [
      {
        "key": "A",
        "text": "Tìm chi tiết quan sát."
      },
      {
        "key": "B",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tìm chi tiết quan sát.",
    "explanationSimple": "Bài này hướng tới: Tìm chi tiết quan sát.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 483,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q003",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Đọc hiểu kí, du kí và hồi kí'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "B",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Phân biệt thông tin và cảm xúc."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Phân biệt thông tin và cảm xúc.",
    "explanationSimple": "Bài này hướng tới: Phân biệt thông tin và cảm xúc.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 484,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q004",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu kí, du kí và hồi kí'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm kí với truyện hư cấu hoàn toàn."
      },
      {
        "key": "B",
        "text": "Bỏ qua cảm xúc của người viết."
      },
      {
        "key": "C",
        "text": "Cần chú ý người kể, thời gian, không gian, chi tiết quan sát và cảm xúc/nhận xét."
      },
      {
        "key": "D",
        "text": "Không cần căn cứ văn bản"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Cần chú ý người kể, thời gian, không gian, chi tiết quan sát và cảm xúc/nhận xét.",
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
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q005",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu kí, du kí và hồi kí'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ liệt kê cảnh vật mà không thấy hành trình."
      },
      {
        "key": "B",
        "text": "Hồi kí thường nhìn lại kỷ niệm hoặc sự việc đã qua."
      },
      {
        "key": "C",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "D",
        "text": "Nhầm kí với truyện hư cấu hoàn toàn."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Hồi kí thường nhìn lại kỷ niệm hoặc sự việc đã qua.",
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
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q006",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu kí, du kí và hồi kí'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua cảm xúc của người viết."
      },
      {
        "key": "B",
        "text": "Chỉ liệt kê cảnh vật mà không thấy hành trình."
      },
      {
        "key": "C",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "D",
        "text": "Cần chú ý người kể, thời gian, không gian, chi tiết quan sát và cảm xúc/nhận xét."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Cần chú ý người kể, thời gian, không gian, chi tiết quan sát và cảm xúc/nhận xét.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 487,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q007",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu kí, du kí và hồi kí'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "C",
        "text": "Nhầm kí với truyện hư cấu hoàn toàn."
      },
      {
        "key": "D",
        "text": "Kí, du kí, hồi kí thường ghi lại sự việc, con người, cảnh vật có liên hệ với trải nghiệm người viết."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Kí, du kí, hồi kí thường ghi lại sự việc, con người, cảnh vật có liên hệ với trải nghiệm người viết.",
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
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q008",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu kí, du kí và hồi kí'?",
    "options": [
      {
        "key": "A",
        "text": "Hồi kí thường nhìn lại kỷ niệm hoặc sự việc đã qua."
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Nhầm kí với truyện hư cấu hoàn toàn."
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Hồi kí thường nhìn lại kỷ niệm hoặc sự việc đã qua.",
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
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q009",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'nonfiction narrative'?",
    "options": [
      {
        "key": "A",
        "text": "kí"
      },
      {
        "key": "B",
        "text": "lắng nghe"
      },
      {
        "key": "C",
        "text": "hình ảnh thơ"
      },
      {
        "key": "D",
        "text": "truyền thuyết"
      }
    ],
    "correctAnswer": "A",
    "answerText": "kí",
    "explanationSimple": "'kí' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 490,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q010",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'travel writing'?",
    "options": [
      {
        "key": "A",
        "text": "du kí"
      },
      {
        "key": "B",
        "text": "chi tiết đặc sắc"
      },
      {
        "key": "C",
        "text": "từ trung tâm"
      },
      {
        "key": "D",
        "text": "nguyên nhân"
      }
    ],
    "correctAnswer": "A",
    "answerText": "du kí",
    "explanationSimple": "'du kí' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 491,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q011",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'memoir'?",
    "options": [
      {
        "key": "A",
        "text": "câu triển khai"
      },
      {
        "key": "B",
        "text": "hồi kí"
      },
      {
        "key": "C",
        "text": "ý kiến"
      },
      {
        "key": "D",
        "text": "nhân vật trữ tình"
      }
    ],
    "correctAnswer": "B",
    "answerText": "hồi kí",
    "explanationSimple": "'hồi kí' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 492,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q012",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'experience'?",
    "options": [
      {
        "key": "A",
        "text": "trải nghiệm"
      },
      {
        "key": "B",
        "text": "môi trường"
      },
      {
        "key": "C",
        "text": "thông tin phụ"
      },
      {
        "key": "D",
        "text": "trình tự thời gian"
      }
    ],
    "correctAnswer": "A",
    "answerText": "trải nghiệm",
    "explanationSimple": "'trải nghiệm' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 493,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q013",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'observation'?",
    "options": [
      {
        "key": "A",
        "text": "quan sát"
      },
      {
        "key": "B",
        "text": "câu"
      },
      {
        "key": "C",
        "text": "bối cảnh"
      },
      {
        "key": "D",
        "text": "quê hương"
      }
    ],
    "correctAnswer": "A",
    "answerText": "quan sát",
    "explanationSimple": "'quan sát' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 494,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q014",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'quan sát' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "quan sát: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "quan sát: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 495,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q015",
    "lessonId": 13,
    "questionType": "true_false",
    "questionText": "Kí, du kí, hồi kí thường ghi lại sự việc, con người, cảnh vật có liên hệ với trải nghiệm người viết.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 496,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q016",
    "lessonId": 13,
    "questionType": "true_false",
    "questionText": "Cần chú ý người kể, thời gian, không gian, chi tiết quan sát và cảm xúc/nhận xét.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 497,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q017",
    "lessonId": 13,
    "questionType": "true_false",
    "questionText": "Du kí thường gắn với hành trình và cảnh sắc vùng đất.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 498,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q018",
    "lessonId": 13,
    "questionType": "true_false",
    "questionText": "Hồi kí thường nhìn lại kỷ niệm hoặc sự việc đã qua.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 499,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q019",
    "lessonId": 13,
    "questionType": "true_false",
    "questionText": "Nhầm kí với truyện hư cấu hoàn toàn.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 500,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q020",
    "lessonId": 13,
    "questionType": "true_false",
    "questionText": "Bỏ qua cảm xúc của người viết.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 501,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q021",
    "lessonId": 13,
    "questionType": "true_false",
    "questionText": "Chỉ liệt kê cảnh vật mà không thấy hành trình.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 502,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q022",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Tôi đến bến cá lúc trời chưa sáng. Những ngọn đèn vàng lắc lư trên mặt nước, còn tiếng máy thuyền nổ giòn như đánh thức cả xóm biển. Người bán cá cười rất nhanh, tay cân cá, miệng hỏi khách quen bằng giọng thân tình. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 503,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q023",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Tôi đến bến cá lúc trời chưa sáng. Những ngọn đèn vàng lắc lư trên mặt nước, còn tiếng máy thuyền nổ giòn như đánh thức cả xóm biển. Người bán cá cười rất nhanh, tay cân cá, miệng hỏi khách quen bằng giọng thân tình. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 504,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q024",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Tôi đến bến cá lúc trời chưa sáng. Những ngọn đèn vàng lắc lư trên mặt nước, còn tiếng máy thuyền nổ giòn như đánh thức cả xóm biển. Người bán cá cười rất nhanh, tay cân cá, miệng hỏi khách quen bằng giọng thân tình. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 505,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q025",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: ý chính ; dẫn chứng ; liên hệ.",
    "options": null,
    "correctAnswer": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "answerText": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 506,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q026",
    "lessonId": 13,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 507,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q027",
    "lessonId": 13,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 508,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q028",
    "lessonId": 13,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 509,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q029",
    "lessonId": 13,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 510,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q030",
    "lessonId": 13,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 511,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q031",
    "lessonId": 13,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 512,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q032",
    "lessonId": 13,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 513,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q033",
    "lessonId": 13,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Đọc hiểu kí, du kí và hồi kí'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 514,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q034",
    "lessonId": 13,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 515,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q035",
    "lessonId": 13,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Đọc hiểu kí, du kí và hồi kí'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 516,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q036",
    "lessonId": 13,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 517,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q037",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Đọc hiểu kí, du kí và hồi kí' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nhầm kí với truyện hư cấu hoàn toàn.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nhầm kí với truyện hư cấu hoàn toàn.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 518,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q038",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Đọc hiểu kí, du kí và hồi kí' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nhầm kí với truyện hư cấu hoàn toàn.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nhầm kí với truyện hư cấu hoàn toàn.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 519,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q039",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Đọc hiểu kí, du kí và hồi kí' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nhầm kí với truyện hư cấu hoàn toàn.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nhầm kí với truyện hư cấu hoàn toàn.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 520,
    "sourceId": "lit6-b2-l13-doc-hieu-ki-du-ki-va-hoi-ki-q040",
    "lessonId": 13,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Đọc hiểu kí, du kí và hồi kí' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nhầm kí với truyện hư cấu hoàn toàn.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nhầm kí với truyện hư cấu hoàn toàn.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 521,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q001",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Đọc hiểu văn bản thông tin'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "C",
        "text": "Tìm ý chính."
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tìm ý chính.",
    "explanationSimple": "Bài này hướng tới: Tìm ý chính.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 522,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q002",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Đọc hiểu văn bản thông tin'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "B",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Phân biệt thông tin chính/phụ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Phân biệt thông tin chính/phụ.",
    "explanationSimple": "Bài này hướng tới: Phân biệt thông tin chính/phụ.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 523,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q003",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Đọc hiểu văn bản thông tin'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "B",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Tóm tắt văn bản ngắn."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tóm tắt văn bản ngắn.",
    "explanationSimple": "Bài này hướng tới: Tóm tắt văn bản ngắn.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 524,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q004",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu văn bản thông tin'?",
    "options": [
      {
        "key": "A",
        "text": "Không phân biệt số liệu với nhận xét."
      },
      {
        "key": "B",
        "text": "Bỏ qua nhan đề/chú thích."
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Cần phân biệt thông tin chính, thông tin phụ và ý kiến bình luận nếu có."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Cần phân biệt thông tin chính, thông tin phụ và ý kiến bình luận nếu có.",
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
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q005",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu văn bản thông tin'?",
    "options": [
      {
        "key": "A",
        "text": "Cần phân biệt thông tin chính, thông tin phụ và ý kiến bình luận nếu có."
      },
      {
        "key": "B",
        "text": "Tóm tắt lan man."
      },
      {
        "key": "C",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "D",
        "text": "Bỏ qua nhan đề/chú thích."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cần phân biệt thông tin chính, thông tin phụ và ý kiến bình luận nếu có.",
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
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q006",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu văn bản thông tin'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "B",
        "text": "Khi đọc cần xác định nhan đề, đề tài, ý chính, các phần, chi tiết, số liệu, hình ảnh và chú thích."
      },
      {
        "key": "C",
        "text": "Tóm tắt lan man."
      },
      {
        "key": "D",
        "text": "Bỏ qua nhan đề/chú thích."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Khi đọc cần xác định nhan đề, đề tài, ý chính, các phần, chi tiết, số liệu, hình ảnh và chú thích.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 527,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q007",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu văn bản thông tin'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Cần phân biệt thông tin chính, thông tin phụ và ý kiến bình luận nếu có."
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Bỏ qua nhan đề/chú thích."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Cần phân biệt thông tin chính, thông tin phụ và ý kiến bình luận nếu có.",
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
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q008",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Đọc hiểu văn bản thông tin'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Không phân biệt số liệu với nhận xét."
      },
      {
        "key": "C",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "D",
        "text": "Cần phân biệt thông tin chính, thông tin phụ và ý kiến bình luận nếu có."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Cần phân biệt thông tin chính, thông tin phụ và ý kiến bình luận nếu có.",
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
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q009",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'title'?",
    "options": [
      {
        "key": "A",
        "text": "nhan đề"
      },
      {
        "key": "B",
        "text": "câu"
      },
      {
        "key": "C",
        "text": "từ ghép"
      },
      {
        "key": "D",
        "text": "cốt truyện"
      }
    ],
    "correctAnswer": "A",
    "answerText": "nhan đề",
    "explanationSimple": "'nhan đề' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 530,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q010",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'topic'?",
    "options": [
      {
        "key": "A",
        "text": "giọng điệu"
      },
      {
        "key": "B",
        "text": "đề tài"
      },
      {
        "key": "C",
        "text": "chủ ngữ"
      },
      {
        "key": "D",
        "text": "tóm tắt"
      }
    ],
    "correctAnswer": "B",
    "answerText": "đề tài",
    "explanationSimple": "'đề tài' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 531,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q011",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'main idea'?",
    "options": [
      {
        "key": "A",
        "text": "sự việc chính"
      },
      {
        "key": "B",
        "text": "nhịp thơ"
      },
      {
        "key": "C",
        "text": "sắc thái"
      },
      {
        "key": "D",
        "text": "ý chính"
      }
    ],
    "correctAnswer": "D",
    "answerText": "ý chính",
    "explanationSimple": "'ý chính' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 532,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q012",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'supporting detail'?",
    "options": [
      {
        "key": "A",
        "text": "thông tin phụ"
      },
      {
        "key": "B",
        "text": "giác quan"
      },
      {
        "key": "C",
        "text": "cụm tính từ"
      },
      {
        "key": "D",
        "text": "cảm nghĩ"
      }
    ],
    "correctAnswer": "A",
    "answerText": "thông tin phụ",
    "explanationSimple": "'thông tin phụ' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 533,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q013",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'summary'?",
    "options": [
      {
        "key": "A",
        "text": "dẫn chứng"
      },
      {
        "key": "B",
        "text": "câu chủ đề"
      },
      {
        "key": "C",
        "text": "ẩn dụ"
      },
      {
        "key": "D",
        "text": "tóm tắt"
      }
    ],
    "correctAnswer": "D",
    "answerText": "tóm tắt",
    "explanationSimple": "'tóm tắt' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 534,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q014",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'thông tin phụ' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "thông tin phụ: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "thông tin phụ: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 535,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q015",
    "lessonId": 14,
    "questionType": "true_false",
    "questionText": "Văn bản thông tin cung cấp tri thức về sự vật, hiện tượng hoặc vấn đề.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 536,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q016",
    "lessonId": 14,
    "questionType": "true_false",
    "questionText": "Khi đọc cần xác định nhan đề, đề tài, ý chính, các phần, chi tiết, số liệu, hình ảnh và chú thích.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 537,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q017",
    "lessonId": 14,
    "questionType": "true_false",
    "questionText": "Cần phân biệt thông tin chính, thông tin phụ và ý kiến bình luận nếu có.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 538,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q018",
    "lessonId": 14,
    "questionType": "true_false",
    "questionText": "Tóm tắt văn bản thông tin cần ngắn gọn, đúng trọng tâm.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 539,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q019",
    "lessonId": 14,
    "questionType": "true_false",
    "questionText": "Bỏ qua nhan đề/chú thích.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 540,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q020",
    "lessonId": 14,
    "questionType": "true_false",
    "questionText": "Không phân biệt số liệu với nhận xét.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 541,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q021",
    "lessonId": 14,
    "questionType": "true_false",
    "questionText": "Tóm tắt lan man.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 542,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q022",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Tre là loài cây quen thuộc ở nhiều vùng quê Việt Nam. Thân tre rỗng, chia đốt, có độ dẻo và bền. Tre được dùng làm đồ gia dụng, vật liệu xây dựng nhẹ, nhạc cụ và nhiều sản phẩm thủ công. Ngày nay, tre còn được chú ý vì có thể thay thế một số vật liệu khó phân hủy. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 543,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q023",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Tre là loài cây quen thuộc ở nhiều vùng quê Việt Nam. Thân tre rỗng, chia đốt, có độ dẻo và bền. Tre được dùng làm đồ gia dụng, vật liệu xây dựng nhẹ, nhạc cụ và nhiều sản phẩm thủ công. Ngày nay, tre còn được chú ý vì có thể thay thế một số vật liệu khó phân hủy. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 544,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q024",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Tre là loài cây quen thuộc ở nhiều vùng quê Việt Nam. Thân tre rỗng, chia đốt, có độ dẻo và bền. Tre được dùng làm đồ gia dụng, vật liệu xây dựng nhẹ, nhạc cụ và nhiều sản phẩm thủ công. Ngày nay, tre còn được chú ý vì có thể thay thế một số vật liệu khó phân hủy. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 545,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q025",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: ý chính ; dẫn chứng ; liên hệ.",
    "options": null,
    "correctAnswer": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "answerText": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 546,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q026",
    "lessonId": 14,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 547,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q027",
    "lessonId": 14,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 548,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q028",
    "lessonId": 14,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 549,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q029",
    "lessonId": 14,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 550,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q030",
    "lessonId": 14,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 551,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q031",
    "lessonId": 14,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 552,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q032",
    "lessonId": 14,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 553,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q033",
    "lessonId": 14,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Đọc hiểu văn bản thông tin'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 554,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q034",
    "lessonId": 14,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 555,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q035",
    "lessonId": 14,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Đọc hiểu văn bản thông tin'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 556,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q036",
    "lessonId": 14,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 557,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q037",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Đọc hiểu văn bản thông tin' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Bỏ qua nhan đề/chú thích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Bỏ qua nhan đề/chú thích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 558,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q038",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Đọc hiểu văn bản thông tin' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Bỏ qua nhan đề/chú thích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Bỏ qua nhan đề/chú thích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 559,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q039",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Đọc hiểu văn bản thông tin' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Bỏ qua nhan đề/chú thích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Bỏ qua nhan đề/chú thích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 560,
    "sourceId": "lit6-b2-l14-doc-hieu-van-ban-thong-tin-q040",
    "lessonId": 14,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Đọc hiểu văn bản thông tin' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Bỏ qua nhan đề/chú thích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Bỏ qua nhan đề/chú thích.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 561,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q001",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Từ đơn, từ phức, từ ghép và từ láy'?",
    "options": [
      {
        "key": "A",
        "text": "Phân biệt từ đơn/từ phức."
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Viết càng dài càng tốt"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Phân biệt từ đơn/từ phức.",
    "explanationSimple": "Bài này hướng tới: Phân biệt từ đơn/từ phức.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 562,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q002",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Từ đơn, từ phức, từ ghép và từ láy'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "C",
        "text": "Nhận biết từ ghép và từ láy."
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nhận biết từ ghép và từ láy.",
    "explanationSimple": "Bài này hướng tới: Nhận biết từ ghép và từ láy.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 563,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q003",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Từ đơn, từ phức, từ ghép và từ láy'?",
    "options": [
      {
        "key": "A",
        "text": "Dùng từ phù hợp trong câu."
      },
      {
        "key": "B",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Dùng từ phù hợp trong câu.",
    "explanationSimple": "Bài này hướng tới: Dùng từ phù hợp trong câu.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 564,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q004",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Từ đơn, từ phức, từ ghép và từ láy'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Từ ghép được tạo bằng cách ghép các tiếng có quan hệ nghĩa."
      },
      {
        "key": "C",
        "text": "Nhầm từ ghép có tiếng giống âm với từ láy."
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Từ ghép được tạo bằng cách ghép các tiếng có quan hệ nghĩa.",
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
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q005",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Từ đơn, từ phức, từ ghép và từ láy'?",
    "options": [
      {
        "key": "A",
        "text": "Cứ hai tiếng là cho rằng từ láy."
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Cần xét cả âm và nghĩa để phân biệt từ ghép với từ láy."
      },
      {
        "key": "D",
        "text": "Không cần căn cứ văn bản"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Cần xét cả âm và nghĩa để phân biệt từ ghép với từ láy.",
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
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q006",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Từ đơn, từ phức, từ ghép và từ láy'?",
    "options": [
      {
        "key": "A",
        "text": "Từ ghép được tạo bằng cách ghép các tiếng có quan hệ nghĩa."
      },
      {
        "key": "B",
        "text": "Cứ hai tiếng là cho rằng từ láy."
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Tách từ sai trong câu."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Từ ghép được tạo bằng cách ghép các tiếng có quan hệ nghĩa.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 567,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q007",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Từ đơn, từ phức, từ ghép và từ láy'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Từ ghép được tạo bằng cách ghép các tiếng có quan hệ nghĩa."
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Không cần căn cứ văn bản"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Từ ghép được tạo bằng cách ghép các tiếng có quan hệ nghĩa.",
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
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q008",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Từ đơn, từ phức, từ ghép và từ láy'?",
    "options": [
      {
        "key": "A",
        "text": "Cứ hai tiếng là cho rằng từ láy."
      },
      {
        "key": "B",
        "text": "Tách từ sai trong câu."
      },
      {
        "key": "C",
        "text": "Từ ghép được tạo bằng cách ghép các tiếng có quan hệ nghĩa."
      },
      {
        "key": "D",
        "text": "Nhầm từ ghép có tiếng giống âm với từ láy."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Từ ghép được tạo bằng cách ghép các tiếng có quan hệ nghĩa.",
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
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q009",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'simple word'?",
    "options": [
      {
        "key": "A",
        "text": "chủ ngữ"
      },
      {
        "key": "B",
        "text": "từ ngữ gợi cảm"
      },
      {
        "key": "C",
        "text": "yếu tố thần kì"
      },
      {
        "key": "D",
        "text": "từ đơn"
      }
    ],
    "correctAnswer": "D",
    "answerText": "từ đơn",
    "explanationSimple": "'từ đơn' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 570,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q010",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'complex word'?",
    "options": [
      {
        "key": "A",
        "text": "yêu thương"
      },
      {
        "key": "B",
        "text": "chủ ngữ"
      },
      {
        "key": "C",
        "text": "từ phức"
      },
      {
        "key": "D",
        "text": "quê hương"
      }
    ],
    "correctAnswer": "C",
    "answerText": "từ phức",
    "explanationSimple": "'từ phức' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 571,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q011",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'compound word'?",
    "options": [
      {
        "key": "A",
        "text": "môi trường"
      },
      {
        "key": "B",
        "text": "ẩn dụ"
      },
      {
        "key": "C",
        "text": "cái thiện"
      },
      {
        "key": "D",
        "text": "từ ghép"
      }
    ],
    "correctAnswer": "D",
    "answerText": "từ ghép",
    "explanationSimple": "'từ ghép' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 572,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q012",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'reduplicative word'?",
    "options": [
      {
        "key": "A",
        "text": "câu chủ đề"
      },
      {
        "key": "B",
        "text": "từ láy"
      },
      {
        "key": "C",
        "text": "hậu quả"
      },
      {
        "key": "D",
        "text": "hồi kí"
      }
    ],
    "correctAnswer": "B",
    "answerText": "từ láy",
    "explanationSimple": "'từ láy' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 573,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q013",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'semantic relation'?",
    "options": [
      {
        "key": "A",
        "text": "chú thích"
      },
      {
        "key": "B",
        "text": "quan hệ nghĩa"
      },
      {
        "key": "C",
        "text": "câu triển khai"
      },
      {
        "key": "D",
        "text": "điệp từ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "quan hệ nghĩa",
    "explanationSimple": "'quan hệ nghĩa' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 574,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q014",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'quan hệ nghĩa' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "quan hệ nghĩa: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "quan hệ nghĩa: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 575,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q015",
    "lessonId": 15,
    "questionType": "true_false",
    "questionText": "Từ đơn là từ có một tiếng; từ phức có hai tiếng trở lên.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 576,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q016",
    "lessonId": 15,
    "questionType": "true_false",
    "questionText": "Từ ghép được tạo bằng cách ghép các tiếng có quan hệ nghĩa.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 577,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q017",
    "lessonId": 15,
    "questionType": "true_false",
    "questionText": "Từ láy có sự lặp lại âm, vần hoặc cả âm và vần giữa các tiếng.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 578,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q018",
    "lessonId": 15,
    "questionType": "true_false",
    "questionText": "Cần xét cả âm và nghĩa để phân biệt từ ghép với từ láy.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 579,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q019",
    "lessonId": 15,
    "questionType": "true_false",
    "questionText": "Cứ hai tiếng là cho rằng từ láy.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 580,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q020",
    "lessonId": 15,
    "questionType": "true_false",
    "questionText": "Nhầm từ ghép có tiếng giống âm với từ láy.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 581,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q021",
    "lessonId": 15,
    "questionType": "true_false",
    "questionText": "Tách từ sai trong câu.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 582,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q022",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Sân trường buổi sáng rộn ràng. Nắng vàng trải nhẹ trên hàng ghế đá, còn tiếng cười học trò vang vang dưới tán phượng. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 583,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q023",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Sân trường buổi sáng rộn ràng. Nắng vàng trải nhẹ trên hàng ghế đá, còn tiếng cười học trò vang vang dưới tán phượng. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 584,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q024",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Sân trường buổi sáng rộn ràng. Nắng vàng trải nhẹ trên hàng ghế đá, còn tiếng cười học trò vang vang dưới tán phượng. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 585,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q025",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: từ đơn ; từ phức ; từ ghép.",
    "options": null,
    "correctAnswer": "từ đơn -> simple word | từ phức -> complex word | từ ghép -> compound word",
    "answerText": "từ đơn -> simple word | từ phức -> complex word | từ ghép -> compound word",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 586,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q026",
    "lessonId": 15,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 587,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q027",
    "lessonId": 15,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 588,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q028",
    "lessonId": 15,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 589,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q029",
    "lessonId": 15,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 590,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q030",
    "lessonId": 15,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 591,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q031",
    "lessonId": 15,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 592,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q032",
    "lessonId": 15,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 593,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q033",
    "lessonId": 15,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Từ đơn, từ phức, từ ghép và từ láy'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 594,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q034",
    "lessonId": 15,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 595,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q035",
    "lessonId": 15,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Từ đơn, từ phức, từ ghép và từ láy'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 596,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q036",
    "lessonId": 15,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 597,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q037",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Từ đơn, từ phức, từ ghép và từ láy' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Cứ hai tiếng là cho rằng từ láy.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Cứ hai tiếng là cho rằng từ láy.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 598,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q038",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Từ đơn, từ phức, từ ghép và từ láy' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Cứ hai tiếng là cho rằng từ láy.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Cứ hai tiếng là cho rằng từ láy.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 599,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q039",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Từ đơn, từ phức, từ ghép và từ láy' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Cứ hai tiếng là cho rằng từ láy.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Cứ hai tiếng là cho rằng từ láy.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 600,
    "sourceId": "lit6-b2-l15-tu-don-tu-phuc-tu-ghep-va-tu-lay-q040",
    "lessonId": 15,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Từ đơn, từ phức, từ ghép và từ láy' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Cứ hai tiếng là cho rằng từ láy.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Cứ hai tiếng là cho rằng từ láy.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 601,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q001",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Nghĩa của từ và lựa chọn từ ngữ'?",
    "options": [
      {
        "key": "A",
        "text": "Giải thích nghĩa từ theo ngữ cảnh."
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Viết càng dài càng tốt"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Giải thích nghĩa từ theo ngữ cảnh.",
    "explanationSimple": "Bài này hướng tới: Giải thích nghĩa từ theo ngữ cảnh.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 602,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q002",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Nghĩa của từ và lựa chọn từ ngữ'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "C",
        "text": "Phân biệt nghĩa gốc và nghĩa chuyển."
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Phân biệt nghĩa gốc và nghĩa chuyển.",
    "explanationSimple": "Bài này hướng tới: Phân biệt nghĩa gốc và nghĩa chuyển.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 603,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q003",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Nghĩa của từ và lựa chọn từ ngữ'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "B",
        "text": "Chọn từ phù hợp sắc thái."
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Bỏ qua chi tiết văn bản"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chọn từ phù hợp sắc thái.",
    "explanationSimple": "Bài này hướng tới: Chọn từ phù hợp sắc thái.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 604,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q004",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nghĩa của từ và lựa chọn từ ngữ'?",
    "options": [
      {
        "key": "A",
        "text": "Một số từ có nghĩa gốc và nghĩa chuyển; cần hiểu theo ngữ cảnh."
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Dùng từ không hợp văn cảnh."
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Một số từ có nghĩa gốc và nghĩa chuyển; cần hiểu theo ngữ cảnh.",
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
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q005",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nghĩa của từ và lựa chọn từ ngữ'?",
    "options": [
      {
        "key": "A",
        "text": "Nghĩa của từ là nội dung mà từ biểu thị."
      },
      {
        "key": "B",
        "text": "Dùng từ không hợp văn cảnh."
      },
      {
        "key": "C",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "D",
        "text": "Chỉ cần kể lại thật dài"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nghĩa của từ là nội dung mà từ biểu thị.",
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
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q006",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nghĩa của từ và lựa chọn từ ngữ'?",
    "options": [
      {
        "key": "A",
        "text": "Dùng từ không hợp văn cảnh."
      },
      {
        "key": "B",
        "text": "Khi gặp từ khó có thể dựa vào ngữ cảnh, cấu tạo từ hoặc tra từ điển."
      },
      {
        "key": "C",
        "text": "Hiểu từ theo một nghĩa duy nhất."
      },
      {
        "key": "D",
        "text": "Lạm dụng từ hoa mỹ làm câu khó hiểu."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Khi gặp từ khó có thể dựa vào ngữ cảnh, cấu tạo từ hoặc tra từ điển.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 607,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q007",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nghĩa của từ và lựa chọn từ ngữ'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "B",
        "text": "Lạm dụng từ hoa mỹ làm câu khó hiểu."
      },
      {
        "key": "C",
        "text": "Khi gặp từ khó có thể dựa vào ngữ cảnh, cấu tạo từ hoặc tra từ điển."
      },
      {
        "key": "D",
        "text": "Không cần căn cứ văn bản"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Khi gặp từ khó có thể dựa vào ngữ cảnh, cấu tạo từ hoặc tra từ điển.",
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
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q008",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nghĩa của từ và lựa chọn từ ngữ'?",
    "options": [
      {
        "key": "A",
        "text": "Dùng từ không hợp văn cảnh."
      },
      {
        "key": "B",
        "text": "Khi gặp từ khó có thể dựa vào ngữ cảnh, cấu tạo từ hoặc tra từ điển."
      },
      {
        "key": "C",
        "text": "Hiểu từ theo một nghĩa duy nhất."
      },
      {
        "key": "D",
        "text": "Lạm dụng từ hoa mỹ làm câu khó hiểu."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Khi gặp từ khó có thể dựa vào ngữ cảnh, cấu tạo từ hoặc tra từ điển.",
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
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q009",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'word meaning'?",
    "options": [
      {
        "key": "A",
        "text": "cảm nhận"
      },
      {
        "key": "B",
        "text": "vần"
      },
      {
        "key": "C",
        "text": "ý kiến"
      },
      {
        "key": "D",
        "text": "nghĩa của từ"
      }
    ],
    "correctAnswer": "D",
    "answerText": "nghĩa của từ",
    "explanationSimple": "'nghĩa của từ' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 610,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q010",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'literal meaning'?",
    "options": [
      {
        "key": "A",
        "text": "câu kết"
      },
      {
        "key": "B",
        "text": "nghĩa gốc"
      },
      {
        "key": "C",
        "text": "phần phụ"
      },
      {
        "key": "D",
        "text": "chủ đề"
      }
    ],
    "correctAnswer": "B",
    "answerText": "nghĩa gốc",
    "explanationSimple": "'nghĩa gốc' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 611,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q011",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'figurative meaning'?",
    "options": [
      {
        "key": "A",
        "text": "từ trung tâm"
      },
      {
        "key": "B",
        "text": "vị ngữ"
      },
      {
        "key": "C",
        "text": "câu chủ đề"
      },
      {
        "key": "D",
        "text": "nghĩa chuyển"
      }
    ],
    "correctAnswer": "D",
    "answerText": "nghĩa chuyển",
    "explanationSimple": "'nghĩa chuyển' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 612,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q012",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'context'?",
    "options": [
      {
        "key": "A",
        "text": "ý trọn vẹn"
      },
      {
        "key": "B",
        "text": "gợi hình"
      },
      {
        "key": "C",
        "text": "cảm nhận"
      },
      {
        "key": "D",
        "text": "ngữ cảnh"
      }
    ],
    "correctAnswer": "D",
    "answerText": "ngữ cảnh",
    "explanationSimple": "'ngữ cảnh' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 613,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q013",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'nuance'?",
    "options": [
      {
        "key": "A",
        "text": "sắc thái"
      },
      {
        "key": "B",
        "text": "gợi cảm"
      },
      {
        "key": "C",
        "text": "hình ảnh thiên nhiên"
      },
      {
        "key": "D",
        "text": "lắng nghe"
      }
    ],
    "correctAnswer": "A",
    "answerText": "sắc thái",
    "explanationSimple": "'sắc thái' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 614,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q014",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'nghĩa gốc' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "nghĩa gốc: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "nghĩa gốc: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 615,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q015",
    "lessonId": 16,
    "questionType": "true_false",
    "questionText": "Nghĩa của từ là nội dung mà từ biểu thị.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 616,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q016",
    "lessonId": 16,
    "questionType": "true_false",
    "questionText": "Một số từ có nghĩa gốc và nghĩa chuyển; cần hiểu theo ngữ cảnh.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 617,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q017",
    "lessonId": 16,
    "questionType": "true_false",
    "questionText": "Lựa chọn từ ngữ phù hợp giúp câu văn rõ nghĩa, đúng sắc thái và giàu biểu cảm.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 618,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q018",
    "lessonId": 16,
    "questionType": "true_false",
    "questionText": "Khi gặp từ khó có thể dựa vào ngữ cảnh, cấu tạo từ hoặc tra từ điển.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 619,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q019",
    "lessonId": 16,
    "questionType": "true_false",
    "questionText": "Hiểu từ theo một nghĩa duy nhất.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 620,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q020",
    "lessonId": 16,
    "questionType": "true_false",
    "questionText": "Dùng từ không hợp văn cảnh.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 621,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q021",
    "lessonId": 16,
    "questionType": "true_false",
    "questionText": "Lạm dụng từ hoa mỹ làm câu khó hiểu.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 622,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q022",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Con đường làng ôm lấy cánh đồng rồi chạy ra bến sông. Bà tôi bảo, đường cũng có ký ức vì nó giữ dấu chân của bao người đi xa rồi trở về. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 623,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q023",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Con đường làng ôm lấy cánh đồng rồi chạy ra bến sông. Bà tôi bảo, đường cũng có ký ức vì nó giữ dấu chân của bao người đi xa rồi trở về. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 624,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q024",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Con đường làng ôm lấy cánh đồng rồi chạy ra bến sông. Bà tôi bảo, đường cũng có ký ức vì nó giữ dấu chân của bao người đi xa rồi trở về. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 625,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q025",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: nghĩa của từ ; nghĩa gốc ; nghĩa chuyển.",
    "options": null,
    "correctAnswer": "nghĩa của từ -> word meaning | nghĩa gốc -> literal meaning | nghĩa chuyển -> figurative meaning",
    "answerText": "nghĩa của từ -> word meaning | nghĩa gốc -> literal meaning | nghĩa chuyển -> figurative meaning",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 626,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q026",
    "lessonId": 16,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 627,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q027",
    "lessonId": 16,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 628,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q028",
    "lessonId": 16,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 629,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q029",
    "lessonId": 16,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 630,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q030",
    "lessonId": 16,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 631,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q031",
    "lessonId": 16,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 632,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q032",
    "lessonId": 16,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 633,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q033",
    "lessonId": 16,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Nghĩa của từ và lựa chọn từ ngữ'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 634,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q034",
    "lessonId": 16,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 635,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q035",
    "lessonId": 16,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Nghĩa của từ và lựa chọn từ ngữ'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 636,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q036",
    "lessonId": 16,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 637,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q037",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Nghĩa của từ và lựa chọn từ ngữ' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Hiểu từ theo một nghĩa duy nhất.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Hiểu từ theo một nghĩa duy nhất.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 638,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q038",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Nghĩa của từ và lựa chọn từ ngữ' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Hiểu từ theo một nghĩa duy nhất.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Hiểu từ theo một nghĩa duy nhất.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 639,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q039",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Nghĩa của từ và lựa chọn từ ngữ' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Hiểu từ theo một nghĩa duy nhất.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Hiểu từ theo một nghĩa duy nhất.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 640,
    "sourceId": "lit6-b2-l16-nghia-cua-tu-va-lua-chon-tu-ngu-q040",
    "lessonId": 16,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Nghĩa của từ và lựa chọn từ ngữ' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Hiểu từ theo một nghĩa duy nhất.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Hiểu từ theo một nghĩa duy nhất.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 641,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q001",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Biện pháp tu từ cơ bản'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Nhận diện biện pháp tu từ."
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nhận diện biện pháp tu từ.",
    "explanationSimple": "Bài này hướng tới: Nhận diện biện pháp tu từ.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 642,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q002",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Biện pháp tu từ cơ bản'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "B",
        "text": "Nêu tác dụng bằng lời rõ ràng."
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Bỏ qua chi tiết văn bản"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nêu tác dụng bằng lời rõ ràng.",
    "explanationSimple": "Bài này hướng tới: Nêu tác dụng bằng lời rõ ràng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 643,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q003",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Biện pháp tu từ cơ bản'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Viết câu có tu từ đơn giản."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Viết câu có tu từ đơn giản.",
    "explanationSimple": "Bài này hướng tới: Viết câu có tu từ đơn giản.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 644,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q004",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Biện pháp tu từ cơ bản'?",
    "options": [
      {
        "key": "A",
        "text": "Thấy vật được gọi tên là cho rằng luôn có nhân hóa."
      },
      {
        "key": "B",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "C",
        "text": "Biện pháp tu từ giúp cách diễn đạt sinh động, gợi hình, gợi cảm."
      },
      {
        "key": "D",
        "text": "Chỉ cần kể lại thật dài"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Biện pháp tu từ giúp cách diễn đạt sinh động, gợi hình, gợi cảm.",
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
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q005",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Biện pháp tu từ cơ bản'?",
    "options": [
      {
        "key": "A",
        "text": "Thấy vật được gọi tên là cho rằng luôn có nhân hóa."
      },
      {
        "key": "B",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "C",
        "text": "Khi phân tích cần nêu tên biện pháp, hình ảnh/từ ngữ và tác dụng."
      },
      {
        "key": "D",
        "text": "Nhầm so sánh với ẩn dụ."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Khi phân tích cần nêu tên biện pháp, hình ảnh/từ ngữ và tác dụng.",
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
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q006",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Biện pháp tu từ cơ bản'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm so sánh với ẩn dụ."
      },
      {
        "key": "B",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "C",
        "text": "Thấy vật được gọi tên là cho rằng luôn có nhân hóa."
      },
      {
        "key": "D",
        "text": "Biện pháp tu từ giúp cách diễn đạt sinh động, gợi hình, gợi cảm."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Biện pháp tu từ giúp cách diễn đạt sinh động, gợi hình, gợi cảm.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 647,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q007",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Biện pháp tu từ cơ bản'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ ghi tên biện pháp mà không nêu tác dụng."
      },
      {
        "key": "B",
        "text": "Thấy vật được gọi tên là cho rằng luôn có nhân hóa."
      },
      {
        "key": "C",
        "text": "Lớp 6 thường gặp so sánh, nhân hóa, ẩn dụ, điệp từ/điệp ngữ ở mức cơ bản."
      },
      {
        "key": "D",
        "text": "Nhầm so sánh với ẩn dụ."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Lớp 6 thường gặp so sánh, nhân hóa, ẩn dụ, điệp từ/điệp ngữ ở mức cơ bản.",
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
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q008",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Biện pháp tu từ cơ bản'?",
    "options": [
      {
        "key": "A",
        "text": "Không chỉ gọi tên biện pháp, phải chỉ ra câu văn hay hơn ra sao."
      },
      {
        "key": "B",
        "text": "Nhầm so sánh với ẩn dụ."
      },
      {
        "key": "C",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "D",
        "text": "Chỉ ghi tên biện pháp mà không nêu tác dụng."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Không chỉ gọi tên biện pháp, phải chỉ ra câu văn hay hơn ra sao.",
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
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q009",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'simile'?",
    "options": [
      {
        "key": "A",
        "text": "cốt truyện"
      },
      {
        "key": "B",
        "text": "chi tiết tiêu biểu"
      },
      {
        "key": "C",
        "text": "truyền thuyết"
      },
      {
        "key": "D",
        "text": "so sánh"
      }
    ],
    "correctAnswer": "D",
    "answerText": "so sánh",
    "explanationSimple": "'so sánh' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 650,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q010",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'personification'?",
    "options": [
      {
        "key": "A",
        "text": "người kể chuyện"
      },
      {
        "key": "B",
        "text": "giới thiệu sách"
      },
      {
        "key": "C",
        "text": "từ ngữ gợi cảm"
      },
      {
        "key": "D",
        "text": "nhân hóa"
      }
    ],
    "correctAnswer": "D",
    "answerText": "nhân hóa",
    "explanationSimple": "'nhân hóa' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 651,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q011",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'metaphor'?",
    "options": [
      {
        "key": "A",
        "text": "truyền thuyết"
      },
      {
        "key": "B",
        "text": "chi tiết tiêu biểu"
      },
      {
        "key": "C",
        "text": "trải nghiệm"
      },
      {
        "key": "D",
        "text": "ẩn dụ"
      }
    ],
    "correctAnswer": "D",
    "answerText": "ẩn dụ",
    "explanationSimple": "'ẩn dụ' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 652,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q012",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'repetition'?",
    "options": [
      {
        "key": "A",
        "text": "điệp từ"
      },
      {
        "key": "B",
        "text": "cái thiện"
      },
      {
        "key": "C",
        "text": "người kể chuyện"
      },
      {
        "key": "D",
        "text": "cộng đồng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "điệp từ",
    "explanationSimple": "'điệp từ' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 653,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q013",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'effect'?",
    "options": [
      {
        "key": "A",
        "text": "liên kết"
      },
      {
        "key": "B",
        "text": "ngữ cảnh"
      },
      {
        "key": "C",
        "text": "cái thiện"
      },
      {
        "key": "D",
        "text": "tác dụng"
      }
    ],
    "correctAnswer": "D",
    "answerText": "tác dụng",
    "explanationSimple": "'tác dụng' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 654,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q014",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'nhân hóa' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "nhân hóa: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "nhân hóa: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 655,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q015",
    "lessonId": 17,
    "questionType": "true_false",
    "questionText": "Biện pháp tu từ giúp cách diễn đạt sinh động, gợi hình, gợi cảm.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 656,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q016",
    "lessonId": 17,
    "questionType": "true_false",
    "questionText": "Lớp 6 thường gặp so sánh, nhân hóa, ẩn dụ, điệp từ/điệp ngữ ở mức cơ bản.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 657,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q017",
    "lessonId": 17,
    "questionType": "true_false",
    "questionText": "Khi phân tích cần nêu tên biện pháp, hình ảnh/từ ngữ và tác dụng.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 658,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q018",
    "lessonId": 17,
    "questionType": "true_false",
    "questionText": "Không chỉ gọi tên biện pháp, phải chỉ ra câu văn hay hơn ra sao.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 659,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q019",
    "lessonId": 17,
    "questionType": "true_false",
    "questionText": "Chỉ ghi tên biện pháp mà không nêu tác dụng.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 660,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q020",
    "lessonId": 17,
    "questionType": "true_false",
    "questionText": "Nhầm so sánh với ẩn dụ.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 661,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q021",
    "lessonId": 17,
    "questionType": "true_false",
    "questionText": "Thấy vật được gọi tên là cho rằng luôn có nhân hóa.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 662,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q022",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Dòng sông thức dậy sau màn sương. Nó vươn vai, lấp lánh những mảnh nắng đầu ngày như chiếc khăn bạc ai vừa trải xuống. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 663,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q023",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Dòng sông thức dậy sau màn sương. Nó vươn vai, lấp lánh những mảnh nắng đầu ngày như chiếc khăn bạc ai vừa trải xuống. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 664,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q024",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Dòng sông thức dậy sau màn sương. Nó vươn vai, lấp lánh những mảnh nắng đầu ngày như chiếc khăn bạc ai vừa trải xuống. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 665,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q025",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: so sánh ; nhân hóa ; ẩn dụ.",
    "options": null,
    "correctAnswer": "so sánh -> simile | nhân hóa -> personification | ẩn dụ -> metaphor",
    "answerText": "so sánh -> simile | nhân hóa -> personification | ẩn dụ -> metaphor",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 666,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q026",
    "lessonId": 17,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 667,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q027",
    "lessonId": 17,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 668,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q028",
    "lessonId": 17,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 669,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q029",
    "lessonId": 17,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 670,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q030",
    "lessonId": 17,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 671,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q031",
    "lessonId": 17,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 672,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q032",
    "lessonId": 17,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 673,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q033",
    "lessonId": 17,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Biện pháp tu từ cơ bản'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 674,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q034",
    "lessonId": 17,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 675,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q035",
    "lessonId": 17,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Biện pháp tu từ cơ bản'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 676,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q036",
    "lessonId": 17,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 677,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q037",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Biện pháp tu từ cơ bản' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Chỉ ghi tên biện pháp mà không nêu tác dụng.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Chỉ ghi tên biện pháp mà không nêu tác dụng.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 678,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q038",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Biện pháp tu từ cơ bản' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Chỉ ghi tên biện pháp mà không nêu tác dụng.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Chỉ ghi tên biện pháp mà không nêu tác dụng.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 679,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q039",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Biện pháp tu từ cơ bản' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Chỉ ghi tên biện pháp mà không nêu tác dụng.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Chỉ ghi tên biện pháp mà không nêu tác dụng.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 680,
    "sourceId": "lit6-b2-l17-bien-phap-tu-tu-co-ban-q040",
    "lessonId": 17,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Biện pháp tu từ cơ bản' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Chỉ ghi tên biện pháp mà không nêu tác dụng.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Chỉ ghi tên biện pháp mà không nêu tác dụng.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 681,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q001",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Cụm danh từ, cụm động từ và cụm tính từ'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "C",
        "text": "Xác định từ trung tâm."
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Xác định từ trung tâm.",
    "explanationSimple": "Bài này hướng tới: Xác định từ trung tâm.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 682,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q002",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Cụm danh từ, cụm động từ và cụm tính từ'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "B",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Phân biệt cụm danh/động/tính."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Phân biệt cụm danh/động/tính.",
    "explanationSimple": "Bài này hướng tới: Phân biệt cụm danh/động/tính.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 683,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q003",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Cụm danh từ, cụm động từ và cụm tính từ'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "B",
        "text": "Mở rộng cụm từ đơn giản."
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Bỏ qua chi tiết văn bản"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Mở rộng cụm từ đơn giản.",
    "explanationSimple": "Bài này hướng tới: Mở rộng cụm từ đơn giản.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 684,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q004",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cụm danh từ, cụm động từ và cụm tính từ'?",
    "options": [
      {
        "key": "A",
        "text": "Cụm danh từ có danh từ làm trung tâm; cụm động từ có động từ làm trung tâm; cụm tính từ có tính từ làm trung tâm."
      },
      {
        "key": "B",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "C",
        "text": "Cắt cụm từ quá ngắn hoặc quá dài."
      },
      {
        "key": "D",
        "text": "Không tìm từ trung tâm."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cụm danh từ có danh từ làm trung tâm; cụm động từ có động từ làm trung tâm; cụm tính từ có tính từ làm trung tâm.",
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
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q005",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cụm danh từ, cụm động từ và cụm tính từ'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm cụm từ với câu hoàn chỉnh."
      },
      {
        "key": "B",
        "text": "Không tìm từ trung tâm."
      },
      {
        "key": "C",
        "text": "Cụm từ giúp câu văn cụ thể và giàu thông tin hơn."
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Cụm từ giúp câu văn cụ thể và giàu thông tin hơn.",
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
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q006",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cụm danh từ, cụm động từ và cụm tính từ'?",
    "options": [
      {
        "key": "A",
        "text": "Cụm từ giúp câu văn cụ thể và giàu thông tin hơn."
      },
      {
        "key": "B",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "C",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "D",
        "text": "Không tìm từ trung tâm."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cụm từ giúp câu văn cụ thể và giàu thông tin hơn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 687,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q007",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cụm danh từ, cụm động từ và cụm tính từ'?",
    "options": [
      {
        "key": "A",
        "text": "Cụm danh từ có danh từ làm trung tâm; cụm động từ có động từ làm trung tâm; cụm tính từ có tính từ làm trung tâm."
      },
      {
        "key": "B",
        "text": "Cắt cụm từ quá ngắn hoặc quá dài."
      },
      {
        "key": "C",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cụm danh từ có danh từ làm trung tâm; cụm động từ có động từ làm trung tâm; cụm tính từ có tính từ làm trung tâm.",
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
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q008",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Cụm danh từ, cụm động từ và cụm tính từ'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "B",
        "text": "Nhầm cụm từ với câu hoàn chỉnh."
      },
      {
        "key": "C",
        "text": "Muốn phân tích cụm từ cần tìm từ trung tâm trước."
      },
      {
        "key": "D",
        "text": "Chỉ cần kể lại thật dài"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Muốn phân tích cụm từ cần tìm từ trung tâm trước.",
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
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q009",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'noun phrase'?",
    "options": [
      {
        "key": "A",
        "text": "chia sẻ"
      },
      {
        "key": "B",
        "text": "giải pháp"
      },
      {
        "key": "C",
        "text": "liên kết"
      },
      {
        "key": "D",
        "text": "cụm danh từ"
      }
    ],
    "correctAnswer": "D",
    "answerText": "cụm danh từ",
    "explanationSimple": "'cụm danh từ' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 690,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q010",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'verb phrase'?",
    "options": [
      {
        "key": "A",
        "text": "cổ tích"
      },
      {
        "key": "B",
        "text": "cảm nghĩ"
      },
      {
        "key": "C",
        "text": "cụm động từ"
      },
      {
        "key": "D",
        "text": "chi tiết đặc sắc"
      }
    ],
    "correctAnswer": "C",
    "answerText": "cụm động từ",
    "explanationSimple": "'cụm động từ' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 691,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q011",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'adjective phrase'?",
    "options": [
      {
        "key": "A",
        "text": "phần phụ"
      },
      {
        "key": "B",
        "text": "cụm tính từ"
      },
      {
        "key": "C",
        "text": "môi trường"
      },
      {
        "key": "D",
        "text": "yếu tố kì ảo"
      }
    ],
    "correctAnswer": "B",
    "answerText": "cụm tính từ",
    "explanationSimple": "'cụm tính từ' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 692,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q012",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'head word'?",
    "options": [
      {
        "key": "A",
        "text": "từ trung tâm"
      },
      {
        "key": "B",
        "text": "yếu tố kì ảo"
      },
      {
        "key": "C",
        "text": "cụm danh từ"
      },
      {
        "key": "D",
        "text": "câu kết"
      }
    ],
    "correctAnswer": "A",
    "answerText": "từ trung tâm",
    "explanationSimple": "'từ trung tâm' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 693,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q013",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'modifier'?",
    "options": [
      {
        "key": "A",
        "text": "liên hệ bản thân"
      },
      {
        "key": "B",
        "text": "phần phụ"
      },
      {
        "key": "C",
        "text": "yếu tố thần kì"
      },
      {
        "key": "D",
        "text": "chủ ngữ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "phần phụ",
    "explanationSimple": "'phần phụ' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 694,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q014",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'cụm tính từ' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "cụm tính từ: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "cụm tính từ: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 695,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q015",
    "lessonId": 18,
    "questionType": "true_false",
    "questionText": "Cụm từ là tổ hợp từ có một từ trung tâm và các từ phụ bổ sung ý nghĩa.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 696,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q016",
    "lessonId": 18,
    "questionType": "true_false",
    "questionText": "Cụm danh từ có danh từ làm trung tâm; cụm động từ có động từ làm trung tâm; cụm tính từ có tính từ làm trung tâm.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 697,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q017",
    "lessonId": 18,
    "questionType": "true_false",
    "questionText": "Muốn phân tích cụm từ cần tìm từ trung tâm trước.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 698,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q018",
    "lessonId": 18,
    "questionType": "true_false",
    "questionText": "Cụm từ giúp câu văn cụ thể và giàu thông tin hơn.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 699,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q019",
    "lessonId": 18,
    "questionType": "true_false",
    "questionText": "Không tìm từ trung tâm.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 700,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q020",
    "lessonId": 18,
    "questionType": "true_false",
    "questionText": "Nhầm cụm từ với câu hoàn chỉnh.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 701,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q021",
    "lessonId": 18,
    "questionType": "true_false",
    "questionText": "Cắt cụm từ quá ngắn hoặc quá dài.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 702,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q022",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Những chiếc lá non đang rung nhẹ trong cơn gió sớm. Cả khu vườn rất yên tĩnh và trong trẻo. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 703,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q023",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Những chiếc lá non đang rung nhẹ trong cơn gió sớm. Cả khu vườn rất yên tĩnh và trong trẻo. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 704,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q024",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Những chiếc lá non đang rung nhẹ trong cơn gió sớm. Cả khu vườn rất yên tĩnh và trong trẻo. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 705,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q025",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: cụm danh từ ; cụm động từ ; cụm tính từ.",
    "options": null,
    "correctAnswer": "cụm danh từ -> noun phrase | cụm động từ -> verb phrase | cụm tính từ -> adjective phrase",
    "answerText": "cụm danh từ -> noun phrase | cụm động từ -> verb phrase | cụm tính từ -> adjective phrase",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 706,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q026",
    "lessonId": 18,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 707,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q027",
    "lessonId": 18,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 708,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q028",
    "lessonId": 18,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 709,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q029",
    "lessonId": 18,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 710,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q030",
    "lessonId": 18,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 711,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q031",
    "lessonId": 18,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 712,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q032",
    "lessonId": 18,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 713,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q033",
    "lessonId": 18,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Cụm danh từ, cụm động từ và cụm tính từ'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 714,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q034",
    "lessonId": 18,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 715,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q035",
    "lessonId": 18,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Cụm danh từ, cụm động từ và cụm tính từ'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 716,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q036",
    "lessonId": 18,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 717,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q037",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Cụm danh từ, cụm động từ và cụm tính từ' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Không tìm từ trung tâm.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Không tìm từ trung tâm.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 718,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q038",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Cụm danh từ, cụm động từ và cụm tính từ' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Không tìm từ trung tâm.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Không tìm từ trung tâm.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 719,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q039",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Cụm danh từ, cụm động từ và cụm tính từ' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Không tìm từ trung tâm.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Không tìm từ trung tâm.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 720,
    "sourceId": "lit6-b2-l18-cum-danh-tu-cum-dong-tu-va-cum-tinh-tu-q040",
    "lessonId": 18,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Cụm danh từ, cụm động từ và cụm tính từ' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Không tìm từ trung tâm.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Không tìm từ trung tâm.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 721,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q001",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Câu và thành phần chính của câu'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Tìm chủ ngữ và vị ngữ."
      },
      {
        "key": "D",
        "text": "Viết càng dài càng tốt"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tìm chủ ngữ và vị ngữ.",
    "explanationSimple": "Bài này hướng tới: Tìm chủ ngữ và vị ngữ.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 722,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q002",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Câu và thành phần chính của câu'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "B",
        "text": "Nhận biết câu thiếu thành phần."
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Viết càng dài càng tốt"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Nhận biết câu thiếu thành phần.",
    "explanationSimple": "Bài này hướng tới: Nhận biết câu thiếu thành phần.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 723,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q003",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Câu và thành phần chính của câu'?",
    "options": [
      {
        "key": "A",
        "text": "Sửa câu cho rõ nghĩa."
      },
      {
        "key": "B",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Sửa câu cho rõ nghĩa.",
    "explanationSimple": "Bài này hướng tới: Sửa câu cho rõ nghĩa.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 724,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q004",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Câu và thành phần chính của câu'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Chủ ngữ nêu người, vật, sự việc được nói đến; vị ngữ nêu hoạt động, trạng thái, đặc điểm."
      },
      {
        "key": "C",
        "text": "Viết câu thiếu vị ngữ."
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chủ ngữ nêu người, vật, sự việc được nói đến; vị ngữ nêu hoạt động, trạng thái, đặc điểm.",
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
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q005",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Câu và thành phần chính của câu'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Viết câu cần đủ ý, đúng dấu câu và phù hợp ngữ cảnh."
      },
      {
        "key": "C",
        "text": "Dùng dấu phẩy thay cho dấu chấm khiến câu kéo dài."
      },
      {
        "key": "D",
        "text": "Viết câu thiếu vị ngữ."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Viết câu cần đủ ý, đúng dấu câu và phù hợp ngữ cảnh.",
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
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q006",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Câu và thành phần chính của câu'?",
    "options": [
      {
        "key": "A",
        "text": "Nhầm chủ ngữ với từ đứng đầu câu trong mọi trường hợp."
      },
      {
        "key": "B",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "C",
        "text": "Câu là đơn vị dùng để diễn đạt một ý tương đối trọn vẹn."
      },
      {
        "key": "D",
        "text": "Chỉ cần kể lại thật dài"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Câu là đơn vị dùng để diễn đạt một ý tương đối trọn vẹn.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 727,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q007",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Câu và thành phần chính của câu'?",
    "options": [
      {
        "key": "A",
        "text": "Thành phần chính thường gồm chủ ngữ và vị ngữ."
      },
      {
        "key": "B",
        "text": "Viết câu thiếu vị ngữ."
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Không cần căn cứ văn bản"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Thành phần chính thường gồm chủ ngữ và vị ngữ.",
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
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q008",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Câu và thành phần chính của câu'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Nhầm chủ ngữ với từ đứng đầu câu trong mọi trường hợp."
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Viết câu cần đủ ý, đúng dấu câu và phù hợp ngữ cảnh."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Viết câu cần đủ ý, đúng dấu câu và phù hợp ngữ cảnh.",
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
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q009",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'sentence'?",
    "options": [
      {
        "key": "A",
        "text": "câu"
      },
      {
        "key": "B",
        "text": "từ phức"
      },
      {
        "key": "C",
        "text": "điệp từ"
      },
      {
        "key": "D",
        "text": "miêu tả"
      }
    ],
    "correctAnswer": "A",
    "answerText": "câu",
    "explanationSimple": "'câu' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 730,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q010",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'subject'?",
    "options": [
      {
        "key": "A",
        "text": "du kí"
      },
      {
        "key": "B",
        "text": "dẫn chứng"
      },
      {
        "key": "C",
        "text": "chia sẻ"
      },
      {
        "key": "D",
        "text": "chủ ngữ"
      }
    ],
    "correctAnswer": "D",
    "answerText": "chủ ngữ",
    "explanationSimple": "'chủ ngữ' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 731,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q011",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'predicate'?",
    "options": [
      {
        "key": "A",
        "text": "cụm danh từ"
      },
      {
        "key": "B",
        "text": "vị ngữ"
      },
      {
        "key": "C",
        "text": "quan hệ nghĩa"
      },
      {
        "key": "D",
        "text": "thông điệp"
      }
    ],
    "correctAnswer": "B",
    "answerText": "vị ngữ",
    "explanationSimple": "'vị ngữ' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 732,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q012",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'punctuation'?",
    "options": [
      {
        "key": "A",
        "text": "câu kết"
      },
      {
        "key": "B",
        "text": "liên kết"
      },
      {
        "key": "C",
        "text": "dấu câu"
      },
      {
        "key": "D",
        "text": "trình tự thời gian"
      }
    ],
    "correctAnswer": "C",
    "answerText": "dấu câu",
    "explanationSimple": "'dấu câu' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 733,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q013",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'complete meaning'?",
    "options": [
      {
        "key": "A",
        "text": "nhân vật"
      },
      {
        "key": "B",
        "text": "ý trọn vẹn"
      },
      {
        "key": "C",
        "text": "điệp từ"
      },
      {
        "key": "D",
        "text": "dẫn chứng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "ý trọn vẹn",
    "explanationSimple": "'ý trọn vẹn' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 734,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q014",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'dấu câu' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "dấu câu: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "dấu câu: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 735,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q015",
    "lessonId": 19,
    "questionType": "true_false",
    "questionText": "Câu là đơn vị dùng để diễn đạt một ý tương đối trọn vẹn.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 736,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q016",
    "lessonId": 19,
    "questionType": "true_false",
    "questionText": "Thành phần chính thường gồm chủ ngữ và vị ngữ.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 737,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q017",
    "lessonId": 19,
    "questionType": "true_false",
    "questionText": "Chủ ngữ nêu người, vật, sự việc được nói đến; vị ngữ nêu hoạt động, trạng thái, đặc điểm.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 738,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q018",
    "lessonId": 19,
    "questionType": "true_false",
    "questionText": "Viết câu cần đủ ý, đúng dấu câu và phù hợp ngữ cảnh.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 739,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q019",
    "lessonId": 19,
    "questionType": "true_false",
    "questionText": "Viết câu thiếu vị ngữ.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 740,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q020",
    "lessonId": 19,
    "questionType": "true_false",
    "questionText": "Nhầm chủ ngữ với từ đứng đầu câu trong mọi trường hợp.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 741,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q021",
    "lessonId": 19,
    "questionType": "true_false",
    "questionText": "Dùng dấu phẩy thay cho dấu chấm khiến câu kéo dài.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 742,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q022",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Buổi sáng, sân trường rộn rã tiếng nói cười. Những hàng cây xanh mướt che bóng cho lối đi. Chúng em bước vào lớp với niềm vui nhỏ. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 743,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q023",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Buổi sáng, sân trường rộn rã tiếng nói cười. Những hàng cây xanh mướt che bóng cho lối đi. Chúng em bước vào lớp với niềm vui nhỏ. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 744,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q024",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Buổi sáng, sân trường rộn rã tiếng nói cười. Những hàng cây xanh mướt che bóng cho lối đi. Chúng em bước vào lớp với niềm vui nhỏ. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 745,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q025",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: câu ; chủ ngữ ; vị ngữ.",
    "options": null,
    "correctAnswer": "câu -> sentence | chủ ngữ -> subject | vị ngữ -> predicate",
    "answerText": "câu -> sentence | chủ ngữ -> subject | vị ngữ -> predicate",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 746,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q026",
    "lessonId": 19,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 747,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q027",
    "lessonId": 19,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 748,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q028",
    "lessonId": 19,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 749,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q029",
    "lessonId": 19,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 750,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q030",
    "lessonId": 19,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 751,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q031",
    "lessonId": 19,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 752,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q032",
    "lessonId": 19,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 753,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q033",
    "lessonId": 19,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Câu và thành phần chính của câu'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 754,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q034",
    "lessonId": 19,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 755,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q035",
    "lessonId": 19,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Câu và thành phần chính của câu'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 756,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q036",
    "lessonId": 19,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 757,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q037",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Câu và thành phần chính của câu' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Viết câu thiếu vị ngữ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Viết câu thiếu vị ngữ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 758,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q038",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Câu và thành phần chính của câu' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Viết câu thiếu vị ngữ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Viết câu thiếu vị ngữ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 759,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q039",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Câu và thành phần chính của câu' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Viết câu thiếu vị ngữ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Viết câu thiếu vị ngữ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 760,
    "sourceId": "lit6-b2-l19-cau-va-thanh-phan-chinh-cua-cau-q040",
    "lessonId": 19,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Câu và thành phần chính của câu' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Viết câu thiếu vị ngữ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Viết câu thiếu vị ngữ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 761,
    "sourceId": "lit6-b2-l20-viet-doan-van-q001",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Viết đoạn văn'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Xác định câu chủ đề."
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Xác định câu chủ đề.",
    "explanationSimple": "Bài này hướng tới: Xác định câu chủ đề.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 762,
    "sourceId": "lit6-b2-l20-viet-doan-van-q002",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Viết đoạn văn'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "C",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "D",
        "text": "Viết đoạn 5-8 câu có ý chính."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Viết đoạn 5-8 câu có ý chính.",
    "explanationSimple": "Bài này hướng tới: Viết đoạn 5-8 câu có ý chính.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 763,
    "sourceId": "lit6-b2-l20-viet-doan-van-q003",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Viết đoạn văn'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "B",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Dùng liên kết câu đơn giản."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Dùng liên kết câu đơn giản.",
    "explanationSimple": "Bài này hướng tới: Dùng liên kết câu đơn giản.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 764,
    "sourceId": "lit6-b2-l20-viet-doan-van-q004",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Viết đoạn văn'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Mỗi câu nói một ý rời rạc."
      },
      {
        "key": "C",
        "text": "Viết quá dài nhưng không phát triển ý chính."
      },
      {
        "key": "D",
        "text": "Độ dài đoạn cần phù hợp yêu cầu, thường 5-8 câu ở mức lớp 6."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Độ dài đoạn cần phù hợp yêu cầu, thường 5-8 câu ở mức lớp 6.",
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
    "sourceId": "lit6-b2-l20-viet-doan-van-q005",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Viết đoạn văn'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "B",
        "text": "Mỗi câu nói một ý rời rạc."
      },
      {
        "key": "C",
        "text": "Viết quá dài nhưng không phát triển ý chính."
      },
      {
        "key": "D",
        "text": "Độ dài đoạn cần phù hợp yêu cầu, thường 5-8 câu ở mức lớp 6."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Độ dài đoạn cần phù hợp yêu cầu, thường 5-8 câu ở mức lớp 6.",
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
    "sourceId": "lit6-b2-l20-viet-doan-van-q006",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Viết đoạn văn'?",
    "options": [
      {
        "key": "A",
        "text": "Độ dài đoạn cần phù hợp yêu cầu, thường 5-8 câu ở mức lớp 6."
      },
      {
        "key": "B",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "C",
        "text": "Không có câu chủ đề."
      },
      {
        "key": "D",
        "text": "Mỗi câu nói một ý rời rạc."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Độ dài đoạn cần phù hợp yêu cầu, thường 5-8 câu ở mức lớp 6.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 767,
    "sourceId": "lit6-b2-l20-viet-doan-van-q007",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Viết đoạn văn'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "B",
        "text": "Một đoạn tốt có câu chủ đề, các câu triển khai và câu kết nếu cần."
      },
      {
        "key": "C",
        "text": "Mỗi câu nói một ý rời rạc."
      },
      {
        "key": "D",
        "text": "Chỉ cần kể lại thật dài"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Một đoạn tốt có câu chủ đề, các câu triển khai và câu kết nếu cần.",
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
    "sourceId": "lit6-b2-l20-viet-doan-van-q008",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Viết đoạn văn'?",
    "options": [
      {
        "key": "A",
        "text": "Không có câu chủ đề."
      },
      {
        "key": "B",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "C",
        "text": "Mỗi câu nói một ý rời rạc."
      },
      {
        "key": "D",
        "text": "Độ dài đoạn cần phù hợp yêu cầu, thường 5-8 câu ở mức lớp 6."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Độ dài đoạn cần phù hợp yêu cầu, thường 5-8 câu ở mức lớp 6.",
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
    "sourceId": "lit6-b2-l20-viet-doan-van-q009",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'paragraph'?",
    "options": [
      {
        "key": "A",
        "text": "tóm tắt"
      },
      {
        "key": "B",
        "text": "biểu tượng"
      },
      {
        "key": "C",
        "text": "phản hồi"
      },
      {
        "key": "D",
        "text": "đoạn văn"
      }
    ],
    "correctAnswer": "D",
    "answerText": "đoạn văn",
    "explanationSimple": "'đoạn văn' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 770,
    "sourceId": "lit6-b2-l20-viet-doan-van-q010",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'topic sentence'?",
    "options": [
      {
        "key": "A",
        "text": "từ ngữ gợi cảm"
      },
      {
        "key": "B",
        "text": "ý trọn vẹn"
      },
      {
        "key": "C",
        "text": "câu chủ đề"
      },
      {
        "key": "D",
        "text": "nghĩa chuyển"
      }
    ],
    "correctAnswer": "C",
    "answerText": "câu chủ đề",
    "explanationSimple": "'câu chủ đề' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 771,
    "sourceId": "lit6-b2-l20-viet-doan-van-q011",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'supporting sentence'?",
    "options": [
      {
        "key": "A",
        "text": "giải pháp"
      },
      {
        "key": "B",
        "text": "thông điệp"
      },
      {
        "key": "C",
        "text": "câu triển khai"
      },
      {
        "key": "D",
        "text": "hồi kí"
      }
    ],
    "correctAnswer": "C",
    "answerText": "câu triển khai",
    "explanationSimple": "'câu triển khai' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 772,
    "sourceId": "lit6-b2-l20-viet-doan-van-q012",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'cohesion'?",
    "options": [
      {
        "key": "A",
        "text": "liên kết"
      },
      {
        "key": "B",
        "text": "chia sẻ"
      },
      {
        "key": "C",
        "text": "tình huống truyện"
      },
      {
        "key": "D",
        "text": "liên hệ bản thân"
      }
    ],
    "correctAnswer": "A",
    "answerText": "liên kết",
    "explanationSimple": "'liên kết' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 773,
    "sourceId": "lit6-b2-l20-viet-doan-van-q013",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'concluding sentence'?",
    "options": [
      {
        "key": "A",
        "text": "sắc thái"
      },
      {
        "key": "B",
        "text": "cụm tính từ"
      },
      {
        "key": "C",
        "text": "văn bản thông tin"
      },
      {
        "key": "D",
        "text": "câu kết"
      }
    ],
    "correctAnswer": "D",
    "answerText": "câu kết",
    "explanationSimple": "'câu kết' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 774,
    "sourceId": "lit6-b2-l20-viet-doan-van-q014",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'câu chủ đề' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "câu chủ đề: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "câu chủ đề: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 775,
    "sourceId": "lit6-b2-l20-viet-doan-van-q015",
    "lessonId": 20,
    "questionType": "true_false",
    "questionText": "Đoạn văn thường xoay quanh một ý chính.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 776,
    "sourceId": "lit6-b2-l20-viet-doan-van-q016",
    "lessonId": 20,
    "questionType": "true_false",
    "questionText": "Một đoạn tốt có câu chủ đề, các câu triển khai và câu kết nếu cần.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 777,
    "sourceId": "lit6-b2-l20-viet-doan-van-q017",
    "lessonId": 20,
    "questionType": "true_false",
    "questionText": "Câu trong đoạn phải liên kết với nhau bằng từ nối, lặp từ hợp lí, thay thế hoặc trình tự ý.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 778,
    "sourceId": "lit6-b2-l20-viet-doan-van-q018",
    "lessonId": 20,
    "questionType": "true_false",
    "questionText": "Độ dài đoạn cần phù hợp yêu cầu, thường 5-8 câu ở mức lớp 6.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 779,
    "sourceId": "lit6-b2-l20-viet-doan-van-q019",
    "lessonId": 20,
    "questionType": "true_false",
    "questionText": "Mỗi câu nói một ý rời rạc.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 780,
    "sourceId": "lit6-b2-l20-viet-doan-van-q020",
    "lessonId": 20,
    "questionType": "true_false",
    "questionText": "Không có câu chủ đề.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 781,
    "sourceId": "lit6-b2-l20-viet-doan-van-q021",
    "lessonId": 20,
    "questionType": "true_false",
    "questionText": "Viết quá dài nhưng không phát triển ý chính.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 782,
    "sourceId": "lit6-b2-l20-viet-doan-van-q022",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Một đoạn văn tốt giống một chùm đèn nhỏ: có một bóng sáng chính và nhiều tia sáng phụ cùng chiếu về một hướng. Nếu mỗi câu chạy một nơi, đoạn văn sẽ rời rạc. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 783,
    "sourceId": "lit6-b2-l20-viet-doan-van-q023",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Một đoạn văn tốt giống một chùm đèn nhỏ: có một bóng sáng chính và nhiều tia sáng phụ cùng chiếu về một hướng. Nếu mỗi câu chạy một nơi, đoạn văn sẽ rời rạc. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 784,
    "sourceId": "lit6-b2-l20-viet-doan-van-q024",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Một đoạn văn tốt giống một chùm đèn nhỏ: có một bóng sáng chính và nhiều tia sáng phụ cùng chiếu về một hướng. Nếu mỗi câu chạy một nơi, đoạn văn sẽ rời rạc. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 785,
    "sourceId": "lit6-b2-l20-viet-doan-van-q025",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: ý chính ; dẫn chứng ; liên hệ.",
    "options": null,
    "correctAnswer": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "answerText": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 786,
    "sourceId": "lit6-b2-l20-viet-doan-van-q026",
    "lessonId": 20,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 787,
    "sourceId": "lit6-b2-l20-viet-doan-van-q027",
    "lessonId": 20,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 788,
    "sourceId": "lit6-b2-l20-viet-doan-van-q028",
    "lessonId": 20,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 789,
    "sourceId": "lit6-b2-l20-viet-doan-van-q029",
    "lessonId": 20,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 790,
    "sourceId": "lit6-b2-l20-viet-doan-van-q030",
    "lessonId": 20,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 791,
    "sourceId": "lit6-b2-l20-viet-doan-van-q031",
    "lessonId": 20,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 792,
    "sourceId": "lit6-b2-l20-viet-doan-van-q032",
    "lessonId": 20,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 793,
    "sourceId": "lit6-b2-l20-viet-doan-van-q033",
    "lessonId": 20,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Viết đoạn văn'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 794,
    "sourceId": "lit6-b2-l20-viet-doan-van-q034",
    "lessonId": 20,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 795,
    "sourceId": "lit6-b2-l20-viet-doan-van-q035",
    "lessonId": 20,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Viết đoạn văn'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 796,
    "sourceId": "lit6-b2-l20-viet-doan-van-q036",
    "lessonId": 20,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 797,
    "sourceId": "lit6-b2-l20-viet-doan-van-q037",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Viết đoạn văn' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Mỗi câu nói một ý rời rạc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Mỗi câu nói một ý rời rạc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 798,
    "sourceId": "lit6-b2-l20-viet-doan-van-q038",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Viết đoạn văn' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Mỗi câu nói một ý rời rạc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Mỗi câu nói một ý rời rạc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 799,
    "sourceId": "lit6-b2-l20-viet-doan-van-q039",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Viết đoạn văn' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Mỗi câu nói một ý rời rạc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Mỗi câu nói một ý rời rạc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 800,
    "sourceId": "lit6-b2-l20-viet-doan-van-q040",
    "lessonId": 20,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Viết đoạn văn' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Mỗi câu nói một ý rời rạc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Mỗi câu nói một ý rời rạc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 801,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q001",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Kể lại một trải nghiệm'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Lập dàn ý trải nghiệm."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Lập dàn ý trải nghiệm.",
    "explanationSimple": "Bài này hướng tới: Lập dàn ý trải nghiệm.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 802,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q002",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Kể lại một trải nghiệm'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Kể theo trình tự rõ ràng."
      },
      {
        "key": "D",
        "text": "Bỏ qua chi tiết văn bản"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Kể theo trình tự rõ ràng.",
    "explanationSimple": "Bài này hướng tới: Kể theo trình tự rõ ràng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 803,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q003",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Kể lại một trải nghiệm'?",
    "options": [
      {
        "key": "A",
        "text": "Thêm cảm xúc và bài học."
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Viết càng dài càng tốt"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Thêm cảm xúc và bài học.",
    "explanationSimple": "Bài này hướng tới: Thêm cảm xúc và bài học.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 804,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q004",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Kể lại một trải nghiệm'?",
    "options": [
      {
        "key": "A",
        "text": "Lẫn lộn ngôi kể hoặc thời gian kể."
      },
      {
        "key": "B",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Trình tự thường theo thời gian: trước, trong và sau sự việc."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Trình tự thường theo thời gian: trước, trong và sau sự việc.",
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
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q005",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Kể lại một trải nghiệm'?",
    "options": [
      {
        "key": "A",
        "text": "Thiếu cảm xúc và bài học."
      },
      {
        "key": "B",
        "text": "Trình tự thường theo thời gian: trước, trong và sau sự việc."
      },
      {
        "key": "C",
        "text": "Lẫn lộn ngôi kể hoặc thời gian kể."
      },
      {
        "key": "D",
        "text": "Chỉ cần kể lại thật dài"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Trình tự thường theo thời gian: trước, trong và sau sự việc.",
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
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q006",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Kể lại một trải nghiệm'?",
    "options": [
      {
        "key": "A",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "B",
        "text": "Thiếu cảm xúc và bài học."
      },
      {
        "key": "C",
        "text": "Trình tự thường theo thời gian: trước, trong và sau sự việc."
      },
      {
        "key": "D",
        "text": "Lẫn lộn ngôi kể hoặc thời gian kể."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Trình tự thường theo thời gian: trước, trong và sau sự việc.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 807,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q007",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Kể lại một trải nghiệm'?",
    "options": [
      {
        "key": "A",
        "text": "Cần chọn chi tiết tiêu biểu, không kể mọi thứ vụn vặt."
      },
      {
        "key": "B",
        "text": "Biến bài kể thành liệt kê sự việc."
      },
      {
        "key": "C",
        "text": "Thiếu cảm xúc và bài học."
      },
      {
        "key": "D",
        "text": "Lẫn lộn ngôi kể hoặc thời gian kể."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Cần chọn chi tiết tiêu biểu, không kể mọi thứ vụn vặt.",
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
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q008",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Kể lại một trải nghiệm'?",
    "options": [
      {
        "key": "A",
        "text": "Phần kết nên nêu điều em nhận ra hoặc cảm xúc sau trải nghiệm."
      },
      {
        "key": "B",
        "text": "Thiếu cảm xúc và bài học."
      },
      {
        "key": "C",
        "text": "Biến bài kể thành liệt kê sự việc."
      },
      {
        "key": "D",
        "text": "Lẫn lộn ngôi kể hoặc thời gian kể."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Phần kết nên nêu điều em nhận ra hoặc cảm xúc sau trải nghiệm.",
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
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q009",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'experience'?",
    "options": [
      {
        "key": "A",
        "text": "hình ảnh thơ"
      },
      {
        "key": "B",
        "text": "trải nghiệm"
      },
      {
        "key": "C",
        "text": "ngôi kể"
      },
      {
        "key": "D",
        "text": "đoạn văn"
      }
    ],
    "correctAnswer": "B",
    "answerText": "trải nghiệm",
    "explanationSimple": "'trải nghiệm' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 810,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q010",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'narrative voice'?",
    "options": [
      {
        "key": "A",
        "text": "ngôi kể"
      },
      {
        "key": "B",
        "text": "địa danh"
      },
      {
        "key": "C",
        "text": "gợi cảm"
      },
      {
        "key": "D",
        "text": "liên hệ bản thân"
      }
    ],
    "correctAnswer": "A",
    "answerText": "ngôi kể",
    "explanationSimple": "'ngôi kể' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 811,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q011",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'chronological order'?",
    "options": [
      {
        "key": "A",
        "text": "yếu tố thần kì"
      },
      {
        "key": "B",
        "text": "tình huống truyện"
      },
      {
        "key": "C",
        "text": "tác giả"
      },
      {
        "key": "D",
        "text": "trình tự thời gian"
      }
    ],
    "correctAnswer": "D",
    "answerText": "trình tự thời gian",
    "explanationSimple": "'trình tự thời gian' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 812,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q012",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'key detail'?",
    "options": [
      {
        "key": "A",
        "text": "cộng đồng"
      },
      {
        "key": "B",
        "text": "kí"
      },
      {
        "key": "C",
        "text": "giọng điệu"
      },
      {
        "key": "D",
        "text": "chi tiết tiêu biểu"
      }
    ],
    "correctAnswer": "D",
    "answerText": "chi tiết tiêu biểu",
    "explanationSimple": "'chi tiết tiêu biểu' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 813,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q013",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'lesson'?",
    "options": [
      {
        "key": "A",
        "text": "hành động cụ thể"
      },
      {
        "key": "B",
        "text": "nghĩa gốc"
      },
      {
        "key": "C",
        "text": "nhân vật"
      },
      {
        "key": "D",
        "text": "bài học"
      }
    ],
    "correctAnswer": "D",
    "answerText": "bài học",
    "explanationSimple": "'bài học' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 814,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q014",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'trình tự thời gian' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "trình tự thời gian: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "trình tự thời gian: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 815,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q015",
    "lessonId": 21,
    "questionType": "true_false",
    "questionText": "Bài kể trải nghiệm cần có sự việc, thời gian, nơi chốn, nhân vật tham gia và cảm xúc của người kể.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 816,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q016",
    "lessonId": 21,
    "questionType": "true_false",
    "questionText": "Trình tự thường theo thời gian: trước, trong và sau sự việc.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 817,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q017",
    "lessonId": 21,
    "questionType": "true_false",
    "questionText": "Cần chọn chi tiết tiêu biểu, không kể mọi thứ vụn vặt.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 818,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q018",
    "lessonId": 21,
    "questionType": "true_false",
    "questionText": "Phần kết nên nêu điều em nhận ra hoặc cảm xúc sau trải nghiệm.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 819,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q019",
    "lessonId": 21,
    "questionType": "true_false",
    "questionText": "Biến bài kể thành liệt kê sự việc.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 820,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q020",
    "lessonId": 21,
    "questionType": "true_false",
    "questionText": "Thiếu cảm xúc và bài học.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 821,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q021",
    "lessonId": 21,
    "questionType": "true_false",
    "questionText": "Lẫn lộn ngôi kể hoặc thời gian kể.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 822,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q022",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Lần đầu thuyết trình trước lớp, tôi quên mất câu mở đầu. Nhưng khi nhìn thấy bạn cùng bàn giơ ngón tay động viên, tôi hít một hơi và bắt đầu lại. Bài nói hôm ấy không hoàn hảo, nhưng tôi học được cách bình tĩnh. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 823,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q023",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Lần đầu thuyết trình trước lớp, tôi quên mất câu mở đầu. Nhưng khi nhìn thấy bạn cùng bàn giơ ngón tay động viên, tôi hít một hơi và bắt đầu lại. Bài nói hôm ấy không hoàn hảo, nhưng tôi học được cách bình tĩnh. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 824,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q024",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Lần đầu thuyết trình trước lớp, tôi quên mất câu mở đầu. Nhưng khi nhìn thấy bạn cùng bàn giơ ngón tay động viên, tôi hít một hơi và bắt đầu lại. Bài nói hôm ấy không hoàn hảo, nhưng tôi học được cách bình tĩnh. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 825,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q025",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: ý chính ; dẫn chứng ; liên hệ.",
    "options": null,
    "correctAnswer": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "answerText": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 826,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q026",
    "lessonId": 21,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 827,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q027",
    "lessonId": 21,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 828,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q028",
    "lessonId": 21,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 829,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q029",
    "lessonId": 21,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 830,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q030",
    "lessonId": 21,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 831,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q031",
    "lessonId": 21,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 832,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q032",
    "lessonId": 21,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 833,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q033",
    "lessonId": 21,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Kể lại một trải nghiệm'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 834,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q034",
    "lessonId": 21,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 835,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q035",
    "lessonId": 21,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Kể lại một trải nghiệm'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 836,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q036",
    "lessonId": 21,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 837,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q037",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Kể lại một trải nghiệm' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Biến bài kể thành liệt kê sự việc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Biến bài kể thành liệt kê sự việc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 838,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q038",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Kể lại một trải nghiệm' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Biến bài kể thành liệt kê sự việc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Biến bài kể thành liệt kê sự việc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 839,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q039",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Kể lại một trải nghiệm' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Biến bài kể thành liệt kê sự việc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Biến bài kể thành liệt kê sự việc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 840,
    "sourceId": "lit6-b2-l21-ke-lai-mot-trai-nghiem-q040",
    "lessonId": 21,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Kể lại một trải nghiệm' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Biến bài kể thành liệt kê sự việc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Biến bài kể thành liệt kê sự việc.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 841,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q001",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Viết bài văn miêu tả'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "B",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "C",
        "text": "Chọn chi tiết miêu tả cụ thể."
      },
      {
        "key": "D",
        "text": "Viết càng dài càng tốt"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chọn chi tiết miêu tả cụ thể.",
    "explanationSimple": "Bài này hướng tới: Chọn chi tiết miêu tả cụ thể.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 842,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q002",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Viết bài văn miêu tả'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "B",
        "text": "Tả theo trình tự hợp lý."
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Bỏ qua chi tiết văn bản"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tả theo trình tự hợp lý.",
    "explanationSimple": "Bài này hướng tới: Tả theo trình tự hợp lý.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 843,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q003",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Viết bài văn miêu tả'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Kết hợp cảm xúc của người viết."
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Kết hợp cảm xúc của người viết.",
    "explanationSimple": "Bài này hướng tới: Kết hợp cảm xúc của người viết.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 844,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q004",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Viết bài văn miêu tả'?",
    "options": [
      {
        "key": "A",
        "text": "Có thể tả theo trình tự không gian, thời gian hoặc từ khái quát đến chi tiết."
      },
      {
        "key": "B",
        "text": "Không kết hợp cảm xúc của người viết."
      },
      {
        "key": "C",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Có thể tả theo trình tự không gian, thời gian hoặc từ khái quát đến chi tiết.",
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
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q005",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Viết bài văn miêu tả'?",
    "options": [
      {
        "key": "A",
        "text": "Không kết hợp cảm xúc của người viết."
      },
      {
        "key": "B",
        "text": "Dùng nhiều tính từ chung chung."
      },
      {
        "key": "C",
        "text": "Cần quan sát bằng nhiều giác quan: mắt, tai, mũi, xúc giác và cảm xúc."
      },
      {
        "key": "D",
        "text": "Thiếu trình tự tả."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Cần quan sát bằng nhiều giác quan: mắt, tai, mũi, xúc giác và cảm xúc.",
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
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q006",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Viết bài văn miêu tả'?",
    "options": [
      {
        "key": "A",
        "text": "Dùng nhiều tính từ chung chung."
      },
      {
        "key": "B",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "C",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "D",
        "text": "Văn miêu tả giúp người đọc hình dung sự vật, cảnh vật, con người bằng chi tiết cụ thể."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Văn miêu tả giúp người đọc hình dung sự vật, cảnh vật, con người bằng chi tiết cụ thể.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 847,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q007",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Viết bài văn miêu tả'?",
    "options": [
      {
        "key": "A",
        "text": "Có thể tả theo trình tự không gian, thời gian hoặc từ khái quát đến chi tiết."
      },
      {
        "key": "B",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "C",
        "text": "Không kết hợp cảm xúc của người viết."
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Có thể tả theo trình tự không gian, thời gian hoặc từ khái quát đến chi tiết.",
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
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q008",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Viết bài văn miêu tả'?",
    "options": [
      {
        "key": "A",
        "text": "Không kết hợp cảm xúc của người viết."
      },
      {
        "key": "B",
        "text": "Thiếu trình tự tả."
      },
      {
        "key": "C",
        "text": "Cần quan sát bằng nhiều giác quan: mắt, tai, mũi, xúc giác và cảm xúc."
      },
      {
        "key": "D",
        "text": "Không cần căn cứ văn bản"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Cần quan sát bằng nhiều giác quan: mắt, tai, mũi, xúc giác và cảm xúc.",
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
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q009",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'description'?",
    "options": [
      {
        "key": "A",
        "text": "miêu tả"
      },
      {
        "key": "B",
        "text": "kết luận"
      },
      {
        "key": "C",
        "text": "biểu tượng"
      },
      {
        "key": "D",
        "text": "phẩm chất"
      }
    ],
    "correctAnswer": "A",
    "answerText": "miêu tả",
    "explanationSimple": "'miêu tả' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 850,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q010",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'senses'?",
    "options": [
      {
        "key": "A",
        "text": "quan hệ nghĩa"
      },
      {
        "key": "B",
        "text": "người kể chuyện"
      },
      {
        "key": "C",
        "text": "giác quan"
      },
      {
        "key": "D",
        "text": "câu triển khai"
      }
    ],
    "correctAnswer": "C",
    "answerText": "giác quan",
    "explanationSimple": "'giác quan' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 851,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q011",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'order'?",
    "options": [
      {
        "key": "A",
        "text": "trình tự"
      },
      {
        "key": "B",
        "text": "tình huống truyện"
      },
      {
        "key": "C",
        "text": "cụm tính từ"
      },
      {
        "key": "D",
        "text": "từ láy"
      }
    ],
    "correctAnswer": "A",
    "answerText": "trình tự",
    "explanationSimple": "'trình tự' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 852,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q012",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'striking detail'?",
    "options": [
      {
        "key": "A",
        "text": "nhân vật"
      },
      {
        "key": "B",
        "text": "luận điểm"
      },
      {
        "key": "C",
        "text": "chi tiết đặc sắc"
      },
      {
        "key": "D",
        "text": "nhân hóa"
      }
    ],
    "correctAnswer": "C",
    "answerText": "chi tiết đặc sắc",
    "explanationSimple": "'chi tiết đặc sắc' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 853,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q013",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'emotion'?",
    "options": [
      {
        "key": "A",
        "text": "kỷ niệm"
      },
      {
        "key": "B",
        "text": "cảm xúc"
      },
      {
        "key": "C",
        "text": "điệp từ"
      },
      {
        "key": "D",
        "text": "nhịp thơ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "cảm xúc",
    "explanationSimple": "'cảm xúc' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 854,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q014",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'chi tiết đặc sắc' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "chi tiết đặc sắc: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "chi tiết đặc sắc: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 855,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q015",
    "lessonId": 22,
    "questionType": "true_false",
    "questionText": "Văn miêu tả giúp người đọc hình dung sự vật, cảnh vật, con người bằng chi tiết cụ thể.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 856,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q016",
    "lessonId": 22,
    "questionType": "true_false",
    "questionText": "Cần quan sát bằng nhiều giác quan: mắt, tai, mũi, xúc giác và cảm xúc.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 857,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q017",
    "lessonId": 22,
    "questionType": "true_false",
    "questionText": "Có thể tả theo trình tự không gian, thời gian hoặc từ khái quát đến chi tiết.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 858,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q018",
    "lessonId": 22,
    "questionType": "true_false",
    "questionText": "Miêu tả tốt cần chọn chi tiết đặc sắc, tránh liệt kê khô.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 859,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q019",
    "lessonId": 22,
    "questionType": "true_false",
    "questionText": "Dùng nhiều tính từ chung chung.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 860,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q020",
    "lessonId": 22,
    "questionType": "true_false",
    "questionText": "Thiếu trình tự tả.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 861,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q021",
    "lessonId": 22,
    "questionType": "true_false",
    "questionText": "Không kết hợp cảm xúc của người viết.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 862,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q022",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Góc học tập của tôi nằm cạnh cửa sổ. Buổi chiều, nắng nghiêng qua rèm, đậu thành những vệt vàng trên trang vở. Chiếc kệ nhỏ lúc nào cũng có mùi giấy mới và tiếng bút chì chạm nhẹ vào hộp gỗ. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 863,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q023",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Góc học tập của tôi nằm cạnh cửa sổ. Buổi chiều, nắng nghiêng qua rèm, đậu thành những vệt vàng trên trang vở. Chiếc kệ nhỏ lúc nào cũng có mùi giấy mới và tiếng bút chì chạm nhẹ vào hộp gỗ. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 864,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q024",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Góc học tập của tôi nằm cạnh cửa sổ. Buổi chiều, nắng nghiêng qua rèm, đậu thành những vệt vàng trên trang vở. Chiếc kệ nhỏ lúc nào cũng có mùi giấy mới và tiếng bút chì chạm nhẹ vào hộp gỗ. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 865,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q025",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: ý chính ; dẫn chứng ; liên hệ.",
    "options": null,
    "correctAnswer": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "answerText": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 866,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q026",
    "lessonId": 22,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 867,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q027",
    "lessonId": 22,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 868,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q028",
    "lessonId": 22,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 869,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q029",
    "lessonId": 22,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 870,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q030",
    "lessonId": 22,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 871,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q031",
    "lessonId": 22,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 872,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q032",
    "lessonId": 22,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 873,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q033",
    "lessonId": 22,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Viết bài văn miêu tả'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 874,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q034",
    "lessonId": 22,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 875,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q035",
    "lessonId": 22,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Viết bài văn miêu tả'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 876,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q036",
    "lessonId": 22,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 877,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q037",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Viết bài văn miêu tả' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Dùng nhiều tính từ chung chung.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Dùng nhiều tính từ chung chung.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 878,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q038",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Viết bài văn miêu tả' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Dùng nhiều tính từ chung chung.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Dùng nhiều tính từ chung chung.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 879,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q039",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Viết bài văn miêu tả' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Dùng nhiều tính từ chung chung.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Dùng nhiều tính từ chung chung.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 880,
    "sourceId": "lit6-b2-l22-viet-bai-van-mieu-ta-q040",
    "lessonId": 22,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Viết bài văn miêu tả' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Dùng nhiều tính từ chung chung.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Dùng nhiều tính từ chung chung.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 881,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q001",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Viết bài trình bày ý kiến'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Nêu ý kiến rõ ràng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nêu ý kiến rõ ràng.",
    "explanationSimple": "Bài này hướng tới: Nêu ý kiến rõ ràng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 882,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q002",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Viết bài trình bày ý kiến'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "C",
        "text": "Đưa lí lẽ và bằng chứng."
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Đưa lí lẽ và bằng chứng.",
    "explanationSimple": "Bài này hướng tới: Đưa lí lẽ và bằng chứng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 883,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q003",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Viết bài trình bày ý kiến'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Viết đoạn nghị luận ngắn."
      },
      {
        "key": "D",
        "text": "Bỏ qua chi tiết văn bản"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Viết đoạn nghị luận ngắn.",
    "explanationSimple": "Bài này hướng tới: Viết đoạn nghị luận ngắn.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 884,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q004",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Viết bài trình bày ý kiến'?",
    "options": [
      {
        "key": "A",
        "text": "Ý kiến phải được giải thích bằng lí do cụ thể, không chỉ nói thích/không thích."
      },
      {
        "key": "B",
        "text": "Nêu ý kiến nhưng không có lí lẽ."
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Không cần căn cứ văn bản"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Ý kiến phải được giải thích bằng lí do cụ thể, không chỉ nói thích/không thích.",
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
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q005",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Viết bài trình bày ý kiến'?",
    "options": [
      {
        "key": "A",
        "text": "Dùng lời lẽ gay gắt khi phản đối."
      },
      {
        "key": "B",
        "text": "Lí lẽ lặp lại, thiếu ví dụ."
      },
      {
        "key": "C",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "D",
        "text": "Ý kiến phải được giải thích bằng lí do cụ thể, không chỉ nói thích/không thích."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Ý kiến phải được giải thích bằng lí do cụ thể, không chỉ nói thích/không thích.",
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
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q006",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Viết bài trình bày ý kiến'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Bài trình bày ý kiến cần nêu rõ vấn đề, ý kiến của người viết, lí lẽ và bằng chứng."
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Dùng lời lẽ gay gắt khi phản đối."
      }
    ],
    "correctAnswer": "B",
    "answerText": "Bài trình bày ý kiến cần nêu rõ vấn đề, ý kiến của người viết, lí lẽ và bằng chứng.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 887,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q007",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Viết bài trình bày ý kiến'?",
    "options": [
      {
        "key": "A",
        "text": "Nêu ý kiến nhưng không có lí lẽ."
      },
      {
        "key": "B",
        "text": "Kết bài nên khẳng định lại ý kiến và gợi hành động/suy nghĩ."
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Không cần căn cứ văn bản"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Kết bài nên khẳng định lại ý kiến và gợi hành động/suy nghĩ.",
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
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q008",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Viết bài trình bày ý kiến'?",
    "options": [
      {
        "key": "A",
        "text": "Lí lẽ lặp lại, thiếu ví dụ."
      },
      {
        "key": "B",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "C",
        "text": "Không cần căn cứ văn bản"
      },
      {
        "key": "D",
        "text": "Kết bài nên khẳng định lại ý kiến và gợi hành động/suy nghĩ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Kết bài nên khẳng định lại ý kiến và gợi hành động/suy nghĩ.",
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
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q009",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'opinion'?",
    "options": [
      {
        "key": "A",
        "text": "ý kiến"
      },
      {
        "key": "B",
        "text": "từ trung tâm"
      },
      {
        "key": "C",
        "text": "điệp từ"
      },
      {
        "key": "D",
        "text": "ý chính"
      }
    ],
    "correctAnswer": "A",
    "answerText": "ý kiến",
    "explanationSimple": "'ý kiến' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 890,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q010",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'issue'?",
    "options": [
      {
        "key": "A",
        "text": "từ đơn"
      },
      {
        "key": "B",
        "text": "vấn đề"
      },
      {
        "key": "C",
        "text": "trình tự"
      },
      {
        "key": "D",
        "text": "ý chính"
      }
    ],
    "correctAnswer": "B",
    "answerText": "vấn đề",
    "explanationSimple": "'vấn đề' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 891,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q011",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'reason'?",
    "options": [
      {
        "key": "A",
        "text": "khác biệt"
      },
      {
        "key": "B",
        "text": "ngữ cảnh"
      },
      {
        "key": "C",
        "text": "tóm tắt"
      },
      {
        "key": "D",
        "text": "lí lẽ"
      }
    ],
    "correctAnswer": "D",
    "answerText": "lí lẽ",
    "explanationSimple": "'lí lẽ' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 892,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q012",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'evidence'?",
    "options": [
      {
        "key": "A",
        "text": "hình ảnh thơ"
      },
      {
        "key": "B",
        "text": "bằng chứng"
      },
      {
        "key": "C",
        "text": "địa danh"
      },
      {
        "key": "D",
        "text": "cảm nhận"
      }
    ],
    "correctAnswer": "B",
    "answerText": "bằng chứng",
    "explanationSimple": "'bằng chứng' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 893,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q013",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'conclusion'?",
    "options": [
      {
        "key": "A",
        "text": "kết luận"
      },
      {
        "key": "B",
        "text": "thông tin phụ"
      },
      {
        "key": "C",
        "text": "thông điệp nhân ái"
      },
      {
        "key": "D",
        "text": "người kể chuyện"
      }
    ],
    "correctAnswer": "A",
    "answerText": "kết luận",
    "explanationSimple": "'kết luận' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 894,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q014",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'kết luận' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "kết luận: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "kết luận: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 895,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q015",
    "lessonId": 23,
    "questionType": "true_false",
    "questionText": "Bài trình bày ý kiến cần nêu rõ vấn đề, ý kiến của người viết, lí lẽ và bằng chứng.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 896,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q016",
    "lessonId": 23,
    "questionType": "true_false",
    "questionText": "Ý kiến phải được giải thích bằng lí do cụ thể, không chỉ nói thích/không thích.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 897,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q017",
    "lessonId": 23,
    "questionType": "true_false",
    "questionText": "Bằng chứng có thể là ví dụ đời sống, trải nghiệm, chi tiết từ văn bản hoặc thông tin đáng tin.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 898,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q018",
    "lessonId": 23,
    "questionType": "true_false",
    "questionText": "Kết bài nên khẳng định lại ý kiến và gợi hành động/suy nghĩ.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 899,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q019",
    "lessonId": 23,
    "questionType": "true_false",
    "questionText": "Nêu ý kiến nhưng không có lí lẽ.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 900,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q020",
    "lessonId": 23,
    "questionType": "true_false",
    "questionText": "Lí lẽ lặp lại, thiếu ví dụ.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 901,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q021",
    "lessonId": 23,
    "questionType": "true_false",
    "questionText": "Dùng lời lẽ gay gắt khi phản đối.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 902,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q022",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Theo em, học sinh nên đọc sách mỗi ngày, dù chỉ mười phút. Đọc sách giúp vốn từ phong phú hơn, mở rộng hiểu biết và rèn sự tập trung. Một bạn đọc đều đặn sẽ dễ viết câu rõ ràng hơn khi làm văn. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 903,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q023",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Theo em, học sinh nên đọc sách mỗi ngày, dù chỉ mười phút. Đọc sách giúp vốn từ phong phú hơn, mở rộng hiểu biết và rèn sự tập trung. Một bạn đọc đều đặn sẽ dễ viết câu rõ ràng hơn khi làm văn. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 904,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q024",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Theo em, học sinh nên đọc sách mỗi ngày, dù chỉ mười phút. Đọc sách giúp vốn từ phong phú hơn, mở rộng hiểu biết và rèn sự tập trung. Một bạn đọc đều đặn sẽ dễ viết câu rõ ràng hơn khi làm văn. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 905,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q025",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: ý chính ; dẫn chứng ; liên hệ.",
    "options": null,
    "correctAnswer": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "answerText": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 906,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q026",
    "lessonId": 23,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 907,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q027",
    "lessonId": 23,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 908,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q028",
    "lessonId": 23,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 909,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q029",
    "lessonId": 23,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 910,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q030",
    "lessonId": 23,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 911,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q031",
    "lessonId": 23,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 912,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q032",
    "lessonId": 23,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 913,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q033",
    "lessonId": 23,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Viết bài trình bày ý kiến'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 914,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q034",
    "lessonId": 23,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 915,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q035",
    "lessonId": 23,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Viết bài trình bày ý kiến'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 916,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q036",
    "lessonId": 23,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 917,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q037",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Viết bài trình bày ý kiến' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nêu ý kiến nhưng không có lí lẽ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nêu ý kiến nhưng không có lí lẽ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 918,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q038",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Viết bài trình bày ý kiến' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nêu ý kiến nhưng không có lí lẽ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nêu ý kiến nhưng không có lí lẽ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 919,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q039",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Viết bài trình bày ý kiến' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nêu ý kiến nhưng không có lí lẽ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nêu ý kiến nhưng không có lí lẽ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 920,
    "sourceId": "lit6-b2-l23-viet-bai-trinh-bay-y-kien-q040",
    "lessonId": 23,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Viết bài trình bày ý kiến' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Nêu ý kiến nhưng không có lí lẽ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Nêu ý kiến nhưng không có lí lẽ.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 921,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q001",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Nói và nghe'?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "B",
        "text": "Chuẩn bị ý chính cho bài nói."
      },
      {
        "key": "C",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "D",
        "text": "Viết càng dài càng tốt"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chuẩn bị ý chính cho bài nói.",
    "explanationSimple": "Bài này hướng tới: Chuẩn bị ý chính cho bài nói.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 922,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q002",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Nói và nghe'?",
    "options": [
      {
        "key": "A",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "B",
        "text": "Chỉ học thuộc văn mẫu"
      },
      {
        "key": "C",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "D",
        "text": "Lắng nghe và ghi ý quan trọng."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Lắng nghe và ghi ý quan trọng.",
    "explanationSimple": "Bài này hướng tới: Lắng nghe và ghi ý quan trọng.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 923,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q003",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Mục tiêu nào phù hợp nhất với bài 'Nói và nghe'?",
    "options": [
      {
        "key": "A",
        "text": "Phản hồi lịch sự, có căn cứ."
      },
      {
        "key": "B",
        "text": "Bỏ qua chi tiết văn bản"
      },
      {
        "key": "C",
        "text": "Viết càng dài càng tốt"
      },
      {
        "key": "D",
        "text": "Chỉ học thuộc văn mẫu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Phản hồi lịch sự, có căn cứ.",
    "explanationSimple": "Bài này hướng tới: Phản hồi lịch sự, có căn cứ.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "objective"
    ],
    "isActive": 1
  },
  {
    "id": 924,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q004",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nói và nghe'?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần kể lại thật dài"
      },
      {
        "key": "B",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "C",
        "text": "Khi nói cần chuẩn bị ý chính, nói rõ ràng, nhìn người nghe, dùng giọng điệu phù hợp."
      },
      {
        "key": "D",
        "text": "Nói quá nhỏ hoặc quá nhanh."
      }
    ],
    "correctAnswer": "C",
    "answerText": "Khi nói cần chuẩn bị ý chính, nói rõ ràng, nhìn người nghe, dùng giọng điệu phù hợp.",
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
    "sourceId": "lit6-b2-l24-noi-va-nghe-q005",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nói và nghe'?",
    "options": [
      {
        "key": "A",
        "text": "Đọc nguyên văn bài viết khi thuyết trình."
      },
      {
        "key": "B",
        "text": "Nói quá nhỏ hoặc quá nhanh."
      },
      {
        "key": "C",
        "text": "Nói và nghe giúp học sinh trình bày ý tưởng, lắng nghe người khác và phản hồi phù hợp."
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Nói và nghe giúp học sinh trình bày ý tưởng, lắng nghe người khác và phản hồi phù hợp.",
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
    "sourceId": "lit6-b2-l24-noi-va-nghe-q006",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nói và nghe'?",
    "options": [
      {
        "key": "A",
        "text": "Đọc nguyên văn bài viết khi thuyết trình."
      },
      {
        "key": "B",
        "text": "Nói quá nhỏ hoặc quá nhanh."
      },
      {
        "key": "C",
        "text": "Ngắt lời, chê bai thay vì góp ý."
      },
      {
        "key": "D",
        "text": "Nói và nghe giúp học sinh trình bày ý tưởng, lắng nghe người khác và phản hồi phù hợp."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Nói và nghe giúp học sinh trình bày ý tưởng, lắng nghe người khác và phản hồi phù hợp.",
    "explanationSimple": "Đây là kiến thức cốt lõi của bài.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "concept"
    ],
    "isActive": 1
  },
  {
    "id": 927,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q007",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nói và nghe'?",
    "options": [
      {
        "key": "A",
        "text": "Khi nói cần chuẩn bị ý chính, nói rõ ràng, nhìn người nghe, dùng giọng điệu phù hợp."
      },
      {
        "key": "B",
        "text": "Ngắt lời, chê bai thay vì góp ý."
      },
      {
        "key": "C",
        "text": "Đọc nguyên văn bài viết khi thuyết trình."
      },
      {
        "key": "D",
        "text": "Không cần đọc nhan đề"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Khi nói cần chuẩn bị ý chính, nói rõ ràng, nhìn người nghe, dùng giọng điệu phù hợp.",
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
    "sourceId": "lit6-b2-l24-noi-va-nghe-q008",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Ý nào đúng với bài 'Nói và nghe'?",
    "options": [
      {
        "key": "A",
        "text": "Nói và nghe giúp học sinh trình bày ý tưởng, lắng nghe người khác và phản hồi phù hợp."
      },
      {
        "key": "B",
        "text": "Ngắt lời, chê bai thay vì góp ý."
      },
      {
        "key": "C",
        "text": "Không cần đọc nhan đề"
      },
      {
        "key": "D",
        "text": "Đọc nguyên văn bài viết khi thuyết trình."
      }
    ],
    "correctAnswer": "A",
    "answerText": "Nói và nghe giúp học sinh trình bày ý tưởng, lắng nghe người khác và phản hồi phù hợp.",
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
    "sourceId": "lit6-b2-l24-noi-va-nghe-q009",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'presentation'?",
    "options": [
      {
        "key": "A",
        "text": "tác dụng"
      },
      {
        "key": "B",
        "text": "miêu tả"
      },
      {
        "key": "C",
        "text": "từ đơn"
      },
      {
        "key": "D",
        "text": "bài nói"
      }
    ],
    "correctAnswer": "D",
    "answerText": "bài nói",
    "explanationSimple": "'bài nói' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 930,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q010",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'listening'?",
    "options": [
      {
        "key": "A",
        "text": "tình huống truyện"
      },
      {
        "key": "B",
        "text": "bằng chứng"
      },
      {
        "key": "C",
        "text": "hồi kí"
      },
      {
        "key": "D",
        "text": "lắng nghe"
      }
    ],
    "correctAnswer": "D",
    "answerText": "lắng nghe",
    "explanationSimple": "'lắng nghe' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 931,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q011",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'feedback'?",
    "options": [
      {
        "key": "A",
        "text": "phản hồi"
      },
      {
        "key": "B",
        "text": "chi tiết đặc sắc"
      },
      {
        "key": "C",
        "text": "lí lẽ"
      },
      {
        "key": "D",
        "text": "giọng điệu"
      }
    ],
    "correctAnswer": "A",
    "answerText": "phản hồi",
    "explanationSimple": "'phản hồi' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 932,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q012",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'main point'?",
    "options": [
      {
        "key": "A",
        "text": "giải pháp"
      },
      {
        "key": "B",
        "text": "ý chính"
      },
      {
        "key": "C",
        "text": "giọng điệu"
      },
      {
        "key": "D",
        "text": "chia sẻ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "ý chính",
    "explanationSimple": "'ý chính' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 933,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q013",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Từ khóa nào gần nhất với nghĩa 'tone'?",
    "options": [
      {
        "key": "A",
        "text": "từ đơn"
      },
      {
        "key": "B",
        "text": "giọng điệu"
      },
      {
        "key": "C",
        "text": "kí"
      },
      {
        "key": "D",
        "text": "đề tài"
      }
    ],
    "correctAnswer": "B",
    "answerText": "giọng điệu",
    "explanationSimple": "'giọng điệu' là từ khóa phù hợp trong bài này.",
    "difficulty": "easy",
    "skillTag": "vocab",
    "tags": [
      "keyword"
    ],
    "isActive": 1
  },
  {
    "id": 934,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q014",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Giải thích ngắn từ khóa 'giọng điệu' theo cách hiểu của em.",
    "options": null,
    "correctAnswer": "giọng điệu: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "answerText": "giọng điệu: học sinh giải thích đúng trọng tâm theo ngữ cảnh bài học.",
    "explanationSimple": "Câu trả lời mở, cần đúng trọng tâm và có thể kèm ví dụ.",
    "difficulty": "medium",
    "skillTag": "vocab",
    "tags": [
      "keyword_explain"
    ],
    "isActive": 1
  },
  {
    "id": 935,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q015",
    "lessonId": 24,
    "questionType": "true_false",
    "questionText": "Nói và nghe giúp học sinh trình bày ý tưởng, lắng nghe người khác và phản hồi phù hợp.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 936,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q016",
    "lessonId": 24,
    "questionType": "true_false",
    "questionText": "Khi nói cần chuẩn bị ý chính, nói rõ ràng, nhìn người nghe, dùng giọng điệu phù hợp.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 937,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q017",
    "lessonId": 24,
    "questionType": "true_false",
    "questionText": "Khi nghe cần chú ý nội dung chính, ghi nhanh ý quan trọng, không ngắt lời tùy tiện.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 938,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q018",
    "lessonId": 24,
    "questionType": "true_false",
    "questionText": "Phản hồi nên lịch sự, có căn cứ, tập trung vào nội dung chứ không công kích người nói.",
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
    "explanationSimple": "Phát biểu này đúng theo kiến thức cốt lõi.",
    "difficulty": "easy",
    "skillTag": "concept",
    "tags": [
      "true_false_core"
    ],
    "isActive": 1
  },
  {
    "id": 939,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q019",
    "lessonId": 24,
    "questionType": "true_false",
    "questionText": "Đọc nguyên văn bài viết khi thuyết trình.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 940,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q020",
    "lessonId": 24,
    "questionType": "true_false",
    "questionText": "Nói quá nhỏ hoặc quá nhanh.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 941,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q021",
    "lessonId": 24,
    "questionType": "true_false",
    "questionText": "Ngắt lời, chê bai thay vì góp ý.",
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
    "explanationSimple": "Đây là lỗi cần tránh, không phải cách làm đúng.",
    "difficulty": "medium",
    "skillTag": "concept",
    "tags": [
      "common_mistake"
    ],
    "isActive": 1
  },
  {
    "id": 942,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q022",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Trong buổi giới thiệu sách, Huy nói hơi nhanh ở phần đầu. Khi góp ý, Mai không chê bạn 'nói dở' mà nói: 'Nếu cậu dừng một chút sau mỗi ý, người nghe sẽ theo kịp hơn.' Huy gật đầu và thử lại. Hãy nêu ý chính của ngữ liệu.",
    "options": null,
    "correctAnswer": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "answerText": "Học sinh nêu đúng ý chính, bám vào nhân vật/hình ảnh/vấn đề trong ngữ liệu.",
    "explanationSimple": "Ý chính cần ngắn gọn, đúng trọng tâm và dựa vào ngữ liệu.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_main_idea"
    ],
    "isActive": 1
  },
  {
    "id": 943,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q023",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Trong buổi giới thiệu sách, Huy nói hơi nhanh ở phần đầu. Khi góp ý, Mai không chê bạn 'nói dở' mà nói: 'Nếu cậu dừng một chút sau mỗi ý, người nghe sẽ theo kịp hơn.' Huy gật đầu và thử lại. Chọn một chi tiết em thấy quan trọng và giải thích vì sao.",
    "options": null,
    "correctAnswer": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "answerText": "Học sinh chọn được một chi tiết cụ thể và nêu tác dụng/ý nghĩa của chi tiết đó.",
    "explanationSimple": "Câu trả lời cần có chi tiết cụ thể, không nói chung chung.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "reading_detail"
    ],
    "isActive": 1
  },
  {
    "id": 944,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q024",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Đọc ngữ liệu: Trong buổi giới thiệu sách, Huy nói hơi nhanh ở phần đầu. Khi góp ý, Mai không chê bạn 'nói dở' mà nói: 'Nếu cậu dừng một chút sau mỗi ý, người nghe sẽ theo kịp hơn.' Huy gật đầu và thử lại. Ngữ liệu gợi cho em cảm xúc hoặc suy nghĩ gì?",
    "options": null,
    "correctAnswer": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "answerText": "Học sinh nêu cảm xúc/suy nghĩ phù hợp và có căn cứ từ ngữ liệu.",
    "explanationSimple": "Cảm nhận cần vừa sức, không áp đặt quá xa văn bản.",
    "difficulty": "medium",
    "skillTag": "reading",
    "tags": [
      "personal_response"
    ],
    "isActive": 1
  },
  {
    "id": 945,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q025",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Ghép đúng các cặp: ý chính ; dẫn chứng ; liên hệ.",
    "options": null,
    "correctAnswer": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "answerText": "ý chính -> nội dung quan trọng nhất | dẫn chứng -> căn cứ từ văn bản | liên hệ -> kết nối với bản thân/đời sống",
    "explanationSimple": "Ghép khái niệm với cách hiểu đúng.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "matching"
    ],
    "isActive": 1
  },
  {
    "id": 946,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q026",
    "lessonId": 24,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      },
      {
        "key": "D",
        "text": "Không cần sửa vì miễn có chữ là được"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 947,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q027",
    "lessonId": 24,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "B",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 948,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q028",
    "lessonId": 24,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "B",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 949,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q029",
    "lessonId": 24,
    "questionType": "scenario_choice",
    "questionText": "Bạn muốn nêu cảm nhận nhưng không có dẫn chứng. Nên làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Tìm một từ ngữ, hình ảnh hoặc chi tiết trong ngữ liệu làm căn cứ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 950,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q030",
    "lessonId": 24,
    "questionType": "scenario_choice",
    "questionText": "Bạn chỉ kể lại toàn bộ văn bản mà không nêu ý nghĩa. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó."
      },
      {
        "key": "B",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "C",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "D",
        "text": "Viết dài hơn là đủ"
      }
    ],
    "correctAnswer": "A",
    "answerText": "Chọn chi tiết tiêu biểu rồi giải thích ý nghĩa của chi tiết đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 951,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q031",
    "lessonId": 24,
    "questionType": "scenario_choice",
    "questionText": "Bạn phản biện ý kiến của bạn khác bằng lời chê bai. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "B",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "C",
        "text": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ."
      },
      {
        "key": "D",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      }
    ],
    "correctAnswer": "C",
    "answerText": "Tập trung vào vấn đề, dùng lời lịch sự và có lí lẽ.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 952,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q032",
    "lessonId": 24,
    "questionType": "scenario_choice",
    "questionText": "Bạn viết đoạn văn mỗi câu một ý khác nhau. Nên sửa thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không cần sửa vì miễn có chữ là được"
      },
      {
        "key": "B",
        "text": "Viết dài hơn là đủ"
      },
      {
        "key": "C",
        "text": "Bỏ qua văn bản và kể chuyện riêng"
      },
      {
        "key": "D",
        "text": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó."
      }
    ],
    "correctAnswer": "D",
    "answerText": "Xác định một ý chính rồi viết các câu cùng triển khai ý đó.",
    "explanationSimple": "Cách làm đúng cần bám văn bản, có căn cứ và diễn đạt rõ.",
    "difficulty": "medium",
    "skillTag": "real_life",
    "tags": [
      "scenario",
      "skill_fix"
    ],
    "isActive": 1
  },
  {
    "id": 953,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q033",
    "lessonId": 24,
    "questionType": "writing_prompt",
    "questionText": "Viết đoạn 5-7 câu trình bày điều em hiểu sau bài 'Nói và nghe'.",
    "options": null,
    "correctAnswer": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "answerText": "Đoạn văn cần có ý chính, ví dụ/căn cứ và câu kết ngắn.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 954,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q034",
    "lessonId": 24,
    "questionType": "writing_prompt",
    "questionText": "Dựa vào ngữ liệu trong bài, viết 3-5 câu nêu cảm nhận của em.",
    "options": null,
    "correctAnswer": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "answerText": "Cần nhắc tới một chi tiết cụ thể trong ngữ liệu.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 955,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q035",
    "lessonId": 24,
    "questionType": "writing_prompt",
    "questionText": "Lập dàn ý ngắn cho một đoạn văn liên quan đến chủ đề 'Nói và nghe'.",
    "options": null,
    "correctAnswer": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "answerText": "Dàn ý gồm câu chủ đề, 2-3 ý triển khai và câu kết.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 956,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q036",
    "lessonId": 24,
    "questionType": "writing_prompt",
    "questionText": "Đặt một câu hỏi đọc hiểu cho ngữ liệu trong bài và tự trả lời.",
    "options": null,
    "correctAnswer": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "answerText": "Câu hỏi cần bám ngữ liệu và câu trả lời có căn cứ.",
    "explanationSimple": "Đây là câu mở, cần chấm bằng rubric mềm thay vì so khớp tuyệt đối.",
    "difficulty": "hard",
    "skillTag": "production",
    "tags": [
      "writing",
      "open_response"
    ],
    "isActive": 1
  },
  {
    "id": 957,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q037",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Nói và nghe' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Đọc nguyên văn bài viết khi thuyết trình.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Đọc nguyên văn bài viết khi thuyết trình.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "medium",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 958,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q038",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Nói và nghe' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Đọc nguyên văn bài viết khi thuyết trình.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Đọc nguyên văn bài viết khi thuyết trình.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 959,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q039",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Nói và nghe' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Đọc nguyên văn bài viết khi thuyết trình.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Đọc nguyên văn bài viết khi thuyết trình.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  },
  {
    "id": 960,
    "sourceId": "lit6-b2-l24-noi-va-nghe-q040",
    "lessonId": 24,
    "questionType": "single_choice",
    "questionText": "Nêu một lỗi cần tránh khi học bài 'Nói và nghe' và cách sửa.",
    "options": null,
    "correctAnswer": "Lỗi ví dụ: Đọc nguyên văn bài viết khi thuyết trình.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "answerText": "Lỗi ví dụ: Đọc nguyên văn bài viết khi thuyết trình.. Cách sửa: bám vào kiến thức và ngữ liệu của bài.",
    "explanationSimple": "Câu trả lời cần nêu rõ lỗi và cách sửa cụ thể.",
    "difficulty": "hard",
    "skillTag": "practice",
    "tags": [
      "common_mistake_fix"
    ],
    "isActive": 1
  }
];
