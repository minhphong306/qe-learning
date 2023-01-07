Part 1: Giới thiệu về Jenkins

###Lý thuyết
Giới thiệu tổng quan:
    1. Là một automation platform được viết bằng Java
    2. Giúp chúng ta thực hiện các công việc như là build, test và deploy code qua pipeline. Ngoài ra, jenkins còn giúp tự động hoá được nhiều các task khác không chỉ dừng lại ở những việc kể trên.
    3. Để setup jenkins LTS hoặc mới nhất thì cần sử dụng java 11 hoặc 17.

Cấu trúc và workflow của Jenkins:
    1. Master server - là server jenkins dashboard với mục đích dùng để control pipline, schedule build ...
    2.Agents (hay ở cty gọi là slave) - là server thực hiện việc build, chạy test ... Có 2 loại agents:
        - Permanent agent: là những con server linux hay windows cần đc cài sẵn java, ssh hay nói chung là server vật lý. 
        - Cloud agent: những con server cloud VD như aws, kubernetes hay docker
    3. Dev, QE commit code sẽ trigger pipeline, master server sẽ phân phối build, test đến những con slave để tiến hành build hoặc chạy test trên đó.

Các kiểu build trên jenkins
    1. Freestyle: cách đơn giản nhất để tạo 1 job trên jenkins. Trigger tạo build, test dựa trên 1 event cụ thể được chỉ định, VD sau mỗi lần commit -> tự động build hoặc chạy test trên jenkins
    2. Pipelines: Sử dụng Jenkinsfile được viết dựa trên Groovy Syntax ta có thể config được các giai đoạn, bước thực hiện (stage) một cách bài bản tường minh. VD: một pipelines có 5 stages
    Clone repro -> Build -> test -> package -> deploy. 
    Chúng ta có thể config chi tiết những gì xảy ra bên trong mỗi stage.

=> Jenkins hỗ trợ tự động hoá những công việc mà dev ko muốn làm lặp đi lặp lại 

##Thực chiến
Cài đặt Jenkins cho các môi trường:

Bước 1: Truy cập trang chủ jenkins.io để download bản cài theo môi trường mong muốn (recommend LTS)

Bước 2: Chạy file vừa tải về chọn đường dẫn cài đặt mong muốn

Bước 3: Vào thư mục đã cài đặt mở file jenkins.err.log và lưu lại password để tiếp tục cài jenkins server

Bước 4: Mở cmd/git/power shell .... quyền admin

Bước 5: (Cần cài sẵn java 11 hoặc 17)  Ta gõ lệnh "java -jar path/to/jenkins.war" (lệnh này dùng đc hầu hết các môi trường -> cài đặt jenkins ở các môi trường tương đối giống nhau)

Bước 6: Mở browser và nhập địa chỉ "localhost:8080"

Bước 7: Lúc này sẽ thấy 1 bảng yêu cầu nhập password mới được tiếp tục -> Nhập password đã lưu ở bước 3

Bước 8: Chọn Install with suggested plugins và chờ quá trình install hoàn tất

Bước 9: Sau khi cài đặt xong sẽ tới Jenkins dashboard