# Lớp 6 giai đoạn 1 ổn định

## Thông tin bản
- Commit hiện tại: `4080aaf`
- Live URL: http://app.hochungkhoi.site/lop-06/
- Deploy hiện tại: build local -> SCP VPS `140.245.202.65` -> `/var/www/apps/lop-06`
- Không dùng Git deploy
- Không push GitHub do đang chờ Student Pack

## 8 môn đã mở
1. Toán
2. Tiếng Anh
3. Khoa học tự nhiên
4. Ngữ văn
5. Lịch sử & Địa lí
6. Tin học
7. Công nghệ
8. GDCD

## Số liệu nội dung

| Môn | Lessons | Cards | Questions |
| --- | ---: | ---: | ---: |
| Toán | 38 | 304 | 1520 |
| Tiếng Anh | 19 | 152 | 760 |
| Khoa học tự nhiên | 19 | 152 | 760 |
| Ngữ văn | 32 | 256 | 1280 |
| Lịch sử & Địa lí | 32 | 256 | 1280 |
| Tin học | 19 | 152 | 760 |
| Công nghệ | 19 | 152 | 760 |
| GDCD | 16 | 128 | 640 |

## Checks và build
- `checkGdcdData.mjs`: pass
- `checkCongNgheData.mjs`: pass
- `checkTinHocData.mjs`: pass
- `checkLichSuDiaLiData.mjs`: pass
- `checkNguVanData.mjs`: pass
- `checkKhtnData.mjs`: pass
- `checkEnglishData.mjs`: pass
- `npm run build`: pass

## Phần còn placeholder
- Tài khoản
- Gói học
- Kích hoạt key
- Dopi credit
- Thanh toán
- Lưu tiến độ cloud

## Checklist QA tay mobile cho 8 môn
- Dashboard mở đúng 8 môn
- Bấm từng môn vào đúng module
- Nút quay lại dashboard hoạt động
- Danh sách bài hiển thị gọn trên màn nhỏ
- Màn chi tiết bài không tràn ngang
- Màn luyện tập có thể chọn câu và làm bài
- Câu đúng/sai có phản hồi rõ ràng
- Câu gợi ý/tham khảo không tính đúng ảo
- Theme và âm thanh vẫn giữ được trạng thái
- Thành tích/huy hiệu vẫn mở và xem lại được

## Roadmap sau phase 1
1. Auth/key/license
2. Lưu tiến độ
3. Polish mobile
4. Lớp tiếp theo

## Ghi chú
- Bản này được xem là mốc nội dung giai đoạn 1 ổn định cho lớp 6.
- Hướng tiếp theo là hoàn thiện phần sản phẩm quanh nội dung học, không mở rộng thêm môn ở phase này.
