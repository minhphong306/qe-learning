> SQLite And 8+3 Filenames
- Config mặc định của SQLite giả định rằng hệ thống support file có tên dài (long filenames)
- SQLite không yêu cầu naming convention nào cho db file cả. Có thể có bất cứ đuôi nào, hoặc không có đuôi cũng vẫn ok.
- Các file cần để bổ quả sung cho quá trình rollback, write-a-headlog hoặc tmp process thì thường sẽ có thêm quả đuôi gì đó.
    - VD:
        - DB: app.db
        - Rollback file: app.db-journal
        - Write ahead log: app.db-wal
- Ở các hệ thống dính rule 8+3 thì các file bổ trợ thường sẽ không theo quy tắc trên (để tiết kiệm size)

## Changing file system
- Tốt nhất là nên upgrade lên system hỗ trợ long file name. Short file name dễ gây corrupted database.

## Adjusting SQLite to Use 8+3 Filenames
- Nếu bắt buộc phải dùng 8+3 filenames system thì đây là 1 số cách:
    - Compile thư viện