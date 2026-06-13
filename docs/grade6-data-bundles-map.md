# Bản Đồ Nguồn 16 ZIP Lớp 6

Ngày audit: 2026-05-21  
Phạm vi: `artical/*.zip`  
Trạng thái: chỉ audit/map nguồn, chưa import data vào app.

## Tóm Tắt

- Tổng ZIP: 16
- Môn có đủ dot-01 + dot-02: 8 môn
- Dot-01: gói kiến thức nền, chủ yếu Markdown trong `topics/`
- Dot-02: gói app-ready, có `lessons/*.json`, seed JSON, docs import/coverage
- Tổng dot-01: 175 topic Markdown
- Tổng dot-02: 214 lesson, 1.712 card, 8.560 question

## Quy Ước Gói

| Đợt | Dấu hiệu tên file | Vai trò | Dạng nội dung chính | Trạng thái import |
|---|---|---|---|---|
| dot-01 | `*_kien_thuc_dot1.zip` | Nền kiến thức/tham khảo | `topics/*.md`, `metadata.json`, `SOURCES.md` | Chưa import |
| dot-02 | `*_dot2_app_ready.zip` | Data app-ready | `lessons/*.json`, `*_seed.json`, docs import/coverage | Chưa import |

## Bản Đồ Theo Môn

| Môn | Dot-01 ZIP | Topic dot-01 | Dot-02 ZIP | Lessons | Cards | Questions | Seed dot-02 |
|---|---:|---:|---|---:|---:|---:|---|
| Toán | `toan_lop6_kien_thuc_dot1.zip` | 21 | `toan_lop6_dot2_app_ready.zip` | 38 | 304 | 1.520 | `math_grade6_batch2_seed.json` |
| Tiếng Anh | `tieng_anh_lop6_kien_thuc_dot1.zip` | 20 | `tieng_anh_lop6_dot2_app_ready.zip` | 36 | 288 | 1.440 | `english_grade6_batch2_seed.json` |
| KHTN | `khtn_lop6_kien_thuc_dot1.zip` | 25 | `khtn_lop6_dot2_app_ready.zip` | 30 | 240 | 1.200 | `science_grade6_batch2_seed.json` |
| Lịch sử & Địa lí | `lich_su_dia_li_lop6_kien_thuc_dot1.zip` | 32 | `lich_su_dia_li_lop6_dot2_app_ready.zip` | 32 | 256 | 1.280 | `history_geography_grade6_batch2_seed.json` |
| Ngữ văn | `ngu_van_lop6_kien_thuc_dot1.zip` | 24 | `ngu_van_lop6_dot2_app_ready.zip` | 24 | 192 | 960 | `literature_grade6_batch2_seed.json` |
| Tin học | `tin_hoc_lop6_kien_thuc_dot1.zip` | 19 | `tin_hoc_lop6_dot2_app_ready.zip` | 19 | 152 | 760 | `informatics_grade6_batch2_seed.json` |
| Công nghệ | `cong_nghe_lop6_kien_thuc_dot1.zip` | 18 | `cong_nghe_lop6_dot2_app_ready.zip` | 19 | 152 | 760 | `technology_grade6_batch2_seed.json` |
| GDCD | `gdcd_lop6_kien_thuc_dot1.zip` | 16 | `gdcd_lop6_dot2_app_ready.zip` | 16 | 128 | 640 | `civics_grade6_batch2_seed.json` |

## Chi Tiết Dot-01

| ZIP | Subject trong metadata | Files chính | Topic đầu | Topic cuối |
|---|---|---:|---|---|
| `toan_lop6_kien_thuc_dot1.zip` | Toán Lớp 6 | 21 topics, `SOURCES.md`, `metadata.json` | `01_01-so-tu-nhien.md` | `21_21-on-tap-cuoi-nam.md` |
| `tieng_anh_lop6_kien_thuc_dot1.zip` | Tiếng Anh | 20 topics, `SOURCES.md`, `metadata.json` | `01_unit_01_my-new-school.md` | `20_on_tap_sau_moi_3_unit.md` |
| `khtn_lop6_kien_thuc_dot1.zip` | Khoa học tự nhiên | 25 topics, `SOURCES.md`, `metadata.json` | `01_gioi-thieu-ve-khoa-hoc-tu-nhien.md` | `25_he-mat-troi-va-ngan-ha.md` |
| `lich_su_dia_li_lop6_kien_thuc_dot1.zip` | Lịch sử & Địa lí | 32 topics, `SOURCES.md`, `metadata.json` | `01_lich-su-va-cuoc-song.md` | `32_ky-nang-doc-luoc-do-bieu-do-va-bang-so-lieu-dia-li.md` |
| `ngu_van_lop6_kien_thuc_dot1.zip` | Ngữ văn | 24 topics, `SOURCES.md`, `metadata.json` | `01_toi-va-cac-ban.md` | `24_noi-va-nghe.md` |
| `tin_hoc_lop6_kien_thuc_dot1.zip` | Tin học | 19 topics, `SOURCES.md`, `metadata.json` | `01_thong-tin-va-du-lieu.md` | `19_du-an-thuc-hanh-tin-hoc-lop-6.md` |
| `cong_nghe_lop6_kien_thuc_dot1.zip` | Công nghệ | 18 topics, `SOURCES.md`, `metadata.json` | `01_nha-o-doi-voi-con-nguoi.md` | `18_thoi-trang-va-phong-cach-ca-nhan.md` |
| `gdcd_lop6_kien_thuc_dot1.zip` | Giáo dục công dân | 16 topics, `SOURCES.md`, `metadata.json` | `01_tu-hao-ve-truyen-thong-gia-dinh-dong-ho.md` | `16_tu-danh-gia-va-lap-ke-hoach-ren-luyen.md` |

## Chi Tiết Dot-02 App-Ready

| ZIP | Entry count | Cấu trúc quan trọng | Docs đi kèm |
|---|---:|---|---|
| `toan_lop6_dot2_app_ready.zip` | 83 | `MANIFEST.json`, `lessons/*.json`, `math_grade6_batch2_seed.json` | `coverage_report.md`, `import_guide.md`, `question_bank_random_policy.md` |
| `tieng_anh_lop6_dot2_app_ready.zip` | 79 | `MANIFEST.json`, `lessons/*.json`, `english_grade6_batch2_seed.json` | `coverage_report.md`, `import_guide.md`, `question_bank_random_policy.md` |
| `khtn_lop6_dot2_app_ready.zip` | 67 | `MANIFEST.json`, `lessons/*.json`, `science_grade6_batch2_seed.json` | `coverage_report.md`, `import_guide.md`, `question_bank_random_policy.md` |
| `lich_su_dia_li_lop6_dot2_app_ready.zip` | 71 | `MANIFEST.json`, `lessons/*.json`, `history_geography_grade6_batch2_seed.json` | `coverage_report.md`, `import_guide.md`, `question_bank_random_policy.md` |
| `ngu_van_lop6_dot2_app_ready.zip` | 56 | `MANIFEST.json`, `lessons/*.json`, `literature_grade6_batch2_seed.json` | `coverage_report.md`, `import_guide.md`, `open_answer_rubric.md`, `question_bank_random_policy.md` |
| `tin_hoc_lop6_dot2_app_ready.zip` | 45 | `MANIFEST.json`, `lessons/*.json`, `informatics_grade6_batch2_seed.json` | `coverage_report.md`, `import_guide.md`, `question_bank_random_policy.md` |
| `cong_nghe_lop6_dot2_app_ready.zip` | 46 | `MANIFEST.json`, `lessons/*.json`, `technology_grade6_batch2_seed.json` | `coverage_report.md`, `import_guide.md`, `open_answer_rubric.md`, `question_bank_random_policy.md` |
| `gdcd_lop6_dot2_app_ready.zip` | 40 | `MANIFEST.json`, `lessons/*.json`, `civics_grade6_batch2_seed.json` | `coverage_report.md`, `import_guide.md`, `open_answer_rubric.md`, `question_bank_random_policy.md` |

## Nhận Xét Audit

1. Bộ nguồn đủ cặp dot-01 và dot-02 cho 8 môn đang nằm trong `artical`.
2. Dot-02 có data app-ready lớn hơn nhiều so với dot-01, phù hợp dùng làm nguồn import sau này.
3. Các seed dot-02 có cấu trúc nhất quán:
   - `package`
   - `createdDate`
   - `grade`
   - `subject`
   - `purpose`
   - `importantNote`
   - `lessonCount`
   - `cardCount`
   - `questionCount`
   - `recommendedRuntime`
   - `lessons`
   - `cards`
   - `questions`
4. Dot-01 nên xem là nguồn đối chiếu kiến thức và provenance; dot-02 nên xem là nguồn import kỹ thuật.
5. Chưa phát hiện thiếu cặp ZIP theo môn trong thư mục `artical`.

## Khuyến Nghị Cho Bước Sau

Chưa import trong bước này. Khi bắt đầu import, nên làm theo thứ tự:

1. Đọc `docs/import_guide.md` trong từng dot-02.
2. Đối chiếu `coverage_report.md` với blueprint hiện tại.
3. Chọn một môn ưu tiên, nên bắt đầu với Tiếng Anh hoặc Toán.
4. Tạo script import riêng, không import thủ công trực tiếp vào source.
5. Validate seed trước khi map vào model hiện tại của app Lớp 6.
6. Giữ dot-01 làm nguồn kiểm chứng nội dung nếu dot-02 có điểm cần rà lại.

## Trạng Thái

- Đã audit ZIP: có.
- Đã tạo bản đồ nguồn: có.
- Đã import data vào app: chưa.
- Đã sửa data Toán/app runtime: chưa.
