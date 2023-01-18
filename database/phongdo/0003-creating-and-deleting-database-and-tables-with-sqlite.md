## Database
- List database connection
```
.database
```
- Attach thêm database vào current connection
```
ATTACH DATABASE "test.db" as test
```

## Tables
- Tạo table
```sqlite3
CREATE TABLE student (
    id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    age INTEGER,
    student_email TEXT NOT NULL,
    class TEXT
);
```
### Data types
- https://www.sqlite.org/datatypes.html
- SQLite là typeless, nghĩa là có thể lưu bất kì data type nào vào column nào, dù có khai báo kiểu dữ liệu đi nữa.
    - Đây là feature, không phải bug
        - Vì SQLite không phải strong type database. Nếu muốn strong type, hãy chọn SQL engine khác.
- SQLite không bắt khai báo kiểu dữ liệu -> có thể giản lược đi trong câu lệnh tạo bảng
```
CREATE TABLE ex1(a, b, c);
```
- Mặc dù SQLite sẽ méo quan tâm lắm tới data type, bạn vẫn nên thêm data type vào trong câu lệnh tạo bảng, vì nó sẽ giúp các lập trình viên khác dễ dàng biết được dữ liệu, ý đồ của bạn; và trường hợp khác là bạn muốn port code sang sử dụng db khác -> data type là rất cần thiết.
- VD tạo bảng với data type
```
CREATE TABLE ex2(
    a VARCHAR(10),
    b NVARCHAR(15),
    c TEXT,
    d INTEGER,
    e FLOAT,
    f BOOLEAN,
    g CLOB,
    h BLOB,
    i TIMESTAMP,
    j NUMERIC(10,5),
    k VARYING CHARACTER (24),
    l NATIONAL VARYING CHARACTER (16)
)
```