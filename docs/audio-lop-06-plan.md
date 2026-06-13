# Audio/TTS Plan Cho App Lớp 6
API-key-TTS=AIzaSyCbzB0Az7plR2SixwtVT4yC6lNI25JvfEo

**Mục tiêu tài liệu:** ghi lại cách repo Học cấp 1 đang làm audio/TTS, rồi chuyển thành kế hoạch áp dụng cho app Lớp 6 theo hướng **static mp3 + manifest**, không gọi TTS runtime trong frontend.

## 1) Audit nhanh repo cấp 1: cách audio/TTS đang chạy

Các file mình đã đọc ở repo cấp 1:

- `PLAN_TTS_STATIC_2_VOICES_EXECUTION.md`
- `TTS_SCOPE_STATUS.md`
- `english-lesson-tts-catalog.md`
- `english-lesson-tts-catalog.json`
- `english-lesson-tts-catalog.csv`
- `english-lesson-tts-generate-plan.md`
- `english-lesson-tts-generate-plan.json`
- `english-lesson-tts-generate-report.json`
- `english-lesson-tts-generate-report.md`
- `english-lesson-tts-r2-upload-report.json`
- `scripts/export-english-lesson-tts-catalog.mjs`
- `scripts/generate-english-lesson-tts-google.mjs`
- `scripts/upload-english-lesson-tts-to-r2.mjs`
- `scripts/generate-static-tts-catalog.ts`
- `scripts/audit-content-audio.ts`
- `src/shared/services/tts/staticTtsManifest.ts`
- `src/shared/services/tts/ttsAssetKeys.ts`
- `src/shared/services/tts/staticAudioPack.ts`
- `src/shared/services/tts/ttsRuntime.ts`
- `src/shared/services/tts/desktopAudioPack.ts`
- `src/shared/services/tts/ttsClient.ts`
- `src/shared/services/tts/localAudioCache.ts`
- `src/shared/services/tts/ttsNarration.ts`
- `src/shared/services/tts/ttsVoiceProfiles.ts`
- `public/audio/tts/manifest.json`

### 1.1 Pipeline thật của cấp 1

**Tư duy chính:** audio không sinh ở runtime trong frontend. Hệ thống dùng quy trình 3 bước:

1. **Tạo catalog** từ nội dung lesson/card/question đã có sẵn.
2. **Sinh mp3 hàng loạt** ở local bằng Google TTS hoặc worker tương đương.
3. **Upload mp3 lên R2** và để app map lại bằng manifest.

### 1.2 Catalog được tạo từ đâu

Catalog cấp 1 được build từ dữ liệu học liệu đã có:

- `seedLessons`
- `seedLessonCards`
- `seedQuestions`

Script catalog sẽ:

- lọc lesson active theo grade/subject
- lấy text của card/câu hỏi
- chuẩn hoá text bằng hàm narration
- sinh object key và URL public

### 1.3 Schema catalog của cấp 1

Catalog cấp 1 có cấu trúc một item kiểu:

- `grade`
- `lessonId`
- `cardId` hoặc `questionId`
- `subject`
- `lessonTitle`
- `text`
- `profile`
- `expectedObjectKey`
- `expectedR2Url`
- `r2Status`
- `r2ContentType`
- `r2Exists`
- `r2Playable`
- `shouldGenerate`
- `flags`

Các field tổng hợp ở file JSON/MD còn có:

- `generatedAt`
- `mode`
- `probeMode`
- `scope`
- `metrics`
- `items`

### 1.4 Tên file audio và R2 path của cấp 1

Pattern chính đang dùng:

- `audio/tts/assets/<profileId>/lesson-card-<cardId>.mp3`
- `audio/tts/assets/<profileId>/question-<questionId>.mp3`

Ví dụ public URL:

- `https://pub-...r2.dev/audio/tts/assets/en-v1/lesson-card-123.mp3`

### 1.5 App map audio bằng manifest thế nào

`public/audio/tts/manifest.json` là lớp map chính. Manifest có:

- `meta`
- `summary`
- `entries`

Mỗi entry có:

- `key`
- `assetPath`
- `lang`
- `usage`
- `profileId`
- `contentVersion`
- `available`
- `textHash`

Runtime trong `staticTtsManifest.ts` sẽ:

- tìm entry theo key
- ưu tiên public static URL / R2 URL khi có
- fallback về local/public manifest hoặc nguồn audio khác

### 1.6 Nút nghe audio đang hoạt động ra sao

Trong cấp 1, audio là **click-to-play**:

- bấm nút nghe ở lesson/card/question
- runtime đọc manifest để lấy URL audio
- phát file mp3 static

Auto-read có tồn tại trong hệ thống lớn, nhưng với hướng áp dụng cho Lớp 6 ở bước này thì **chưa cần bật runtime TTS trong frontend**.

### 1.7 Cách cấp 1 chuẩn hoá text trước khi sinh audio

`ttsNarration.ts` xử lý:

- làm sạch mojibake / ký tự bẩn
- chuẩn hoá dấu câu
- mở rộng viết tắt
- xử lý toán tử/ký hiệu
- tạo text narration riêng cho lesson card và question

Đây là bước rất đáng giữ lại cho Lớp 6 nếu sau này thật sự làm audio.

## 2) Đề xuất pipeline cho app Lớp 6

### 2.1 Nguyên tắc

- **Không gọi Google TTS thật trong frontend.**
- **Không sinh mp3 trong bước này.**
- **Không upload R2 trong bước này.**
- Chỉ chuẩn bị **catalog + manifest + plan + QA checklist**.
- Ưu tiên pilot cho **Tiếng Anh** trước.
- Sau đó mới mở sang **Ngữ văn**.
- Chưa làm full 8 môn.

### 2.2 Phạm vi pilot đề xuất

Pilot đầu tiên:

- 20 đến 50 file mp3 của **Tiếng Anh**
- ưu tiên lesson card ngắn, dễ QA
- sau khi nghe ổn mới mở rộng sang question audio

Sau pilot Tiếng Anh:

- mở rộng **Ngữ văn**
- rồi mới cân nhắc các môn khác

### 2.3 Quy trình Lớp 6 đề xuất

1. Từ data môn học, sinh **audio catalog**.
2. Catalog được QA trước khi sinh audio.
3. Local worker tạo mp3 theo batch nhỏ.
4. File local được upload lên R2.
5. Manifest được publish.
6. App Lớp 6 chỉ đọc manifest và phát audio static khi người dùng bấm.

## 3) Cấu trúc file đề xuất cho Lớp 6

### 3.1 Thư mục scripts

Đề xuất:

- `scripts/tts/`
  - `export-lop6-audio-catalog.ts`
  - `generate-lop6-audio-google.mjs`
  - `upload-lop6-audio-r2.mjs`
  - `audit-lop6-audio.ts`
  - `build-lop6-audio-manifest.ts`

### 3.2 Thư mục docs

Đề xuất:

- `docs/audio/`
  - `audio-lop-06-plan.md`  ← file này
  - `audio-lop-06-catalog.md`
  - `audio-lop-06-catalog.json`
  - `audio-lop-06-catalog.csv`
  - `audio-lop-06-generate-plan.md`
  - `audio-lop-06-generate-report.md`
  - `audio-lop-06-upload-report.md`

### 3.3 Public / manifest path

Đề xuất runtime path:

- `public/audio/tts/manifest.json`

Nếu sau này muốn tách host:

- manifest có thể nằm trên R2 hoặc CDN riêng
- app vẫn giữ fallback `public/audio/tts/manifest.json` để dev/test dễ

## 4) Schema catalog đề xuất cho Lớp 6

### 4.1 Dạng record tối thiểu

```json
{
  "grade": 6,
  "subjectCode": "english",
  "lessonId": 101,
  "cardId": 1011,
  "questionId": null,
  "usage": "lesson-card",
  "voiceProfileId": "en-v1",
  "text": "Hello, how are you?",
  "normalizedText": "Hello, how are you?",
  "fileName": "lesson-card-1011.mp3",
  "objectKey": "audio/tts/assets/en-v1/lesson-card-1011.mp3",
  "localRelativePath": "en-v1/lesson-card/lesson-card-1011.mp3",
  "r2Url": "https://.../audio/tts/assets/en-v1/lesson-card-1011.mp3",
  "sha256": "",
  "status": "planned",
  "notes": ""
}
```

### 4.2 Field nên có

- `grade`
- `subjectCode`
- `lessonId`
- `cardId`
- `questionId`
- `usage` (`lesson-card`, `question`)
- `voiceProfileId`
- `text`
- `normalizedText`
- `fileName`
- `objectKey`
- `localRelativePath`
- `r2Url`
- `sha256`
- `durationSec` nếu có
- `status`
- `notes`

### 4.3 Catalog format

Nên xuất đồng thời:

- `.json` cho machine
- `.csv` cho QA lọc nhanh
- `.md` cho review người đọc

## 5) Tên file audio đề xuất

### 5.1 Pattern chung

- `lesson-card-<cardId>.mp3`
- `question-<questionId>.mp3`

### 5.2 Theo profile

Ví dụ:

- `audio/tts/assets/en-v1/lesson-card-123.mp3`
- `audio/tts/assets/en-v1/question-456.mp3`
- `audio/tts/assets/vi-v1/lesson-card-789.mp3`

### 5.3 Lý do dùng pattern này

- rõ nghĩa
- dễ map từ lesson/card/question
- dễ QA thủ công
- dễ sync giữa local và R2

## 6) R2 path đề xuất

### 6.1 Path gốc

- `audio/tts/assets/<profileId>/lesson-card-<cardId>.mp3`
- `audio/tts/assets/<profileId>/question-<questionId>.mp3`

### 6.2 Gợi ý voice profile

Cho Lớp 6, ưu tiên:

- `en-v1` cho pilot Tiếng Anh
- `vi-v1` cho các môn tiếng Việt

### 6.3 Lưu ý deploy audio

- upload theo batch nhỏ
- kiểm tra 404/200 sau upload
- có sample probe URL trước khi bật rộng

## 7) Checklist QA nghe

### 7.1 QA nội dung

- text có đúng dấu tiếng Việt không
- có mojibake không
- có lỗi đọc nhầm chữ viết tắt không
- có câu quá dài làm file nghe khó chịu không

### 7.2 QA file

- file mp3 mở được
- đúng tên file
- đúng object key
- đúng URL public
- đúng profile

### 7.3 QA app

- nút nghe có hiển thị
- bấm nghe phát đúng file
- mobile không bị autoplay
- không gây lệch layout
- khi thiếu audio thì có fallback rõ ràng

### 7.4 QA pilot

- nghe 20 file đầu tiên
- nghe ngẫu nhiên 5 file giữa batch
- nghe 5 file cuối batch
- rà lại 404/403/404-like mapping

## 8) Rủi ro cần tránh

- **Chi phí**: sinh audio hàng loạt có thể tốn tiền nếu mở rộng quá nhanh.
- **Sai dấu / mojibake**: text nguồn phải được làm sạch trước khi sinh.
- **Text dài**: câu dài quá sẽ khó nghe và khó QA.
- **Mapping sai**: lesson/card/question lệch ID là lỗi rất hay gặp.
- **Mobile autoplay**: trình duyệt chặn autoplay, nên chỉ phát khi người dùng bấm.
- **Manifest stale**: upload audio xong nhưng manifest chưa cập nhật.
- **Cache sai**: CDN/R2 cũ có thể giữ file cũ nếu không version hoá tốt.

## 9) Những việc chưa làm ở bước này

- Không tạo mp3.
- Không upload R2.
- Không thêm runtime TTS vào frontend.
- Không sửa logic app lớn.
- Không đụng data 8 môn hiện có.
- Không mở rộng sang full 8 môn.

## 10) Kết luận

Kế hoạch hợp lý cho Lớp 6 là:

1. làm catalog chuẩn,
2. sinh static mp3 theo batch nhỏ,
3. upload R2 theo manifest,
4. app chỉ đọc manifest và phát audio khi bấm.

Nếu làm đúng cách này, ta giữ được:

- app nhẹ
- dễ QA
- dễ rollback
- không phụ thuộc runtime TTS
- dễ mở rộng từ Tiếng Anh sang Ngữ văn sau pilot

