Part 2: Jenkins sử dụng Docker  & Update jenkins

Tại sao cần Docker (hay container nói chung)?
    1. Container sẽ giúp tối ưu việc quản lý cũng như vận hành jenkins nhanh và tiện lợi.
    2. Vì jenkins chạy trên 1 port (thường là 8080) khá phổ biến. Nếu cài trực tiếp trên local -> có khả năng port đó sẽ đc sử dụng bởi các app khác
    3. Ngoài ra với Docker, user ko cần phải cài thêm bất kỳ tool nào mà chỉ cần tải file image về để sử dụng. VD chúng ta ko cần cài đặt jdk 11 trực tiếp vào máy để chạy jenkins. Nó được tích hợp sẵn vào file image.
    4. Docker có Docker hub khá mạnh cung cấp những file image này.

Cài đặt jenkins sử dụng Docker:
    1. Tải và cài đặt docker trên https://docs.docker.com/get-docker/
    2. Tới Docker hub truy cập vào repo chính thức có image Jenkins LTS(https://hub.docker.com/r/jenkins/jenkins/) tìm version mới nhất hoặc stable nhất muốn cài đặt
    3. Bắt đầu khởi tạo Jenkins trên docker với câu lệnh: 
    "docker run --rm --name jenkins -p 8080:8080 -p 50000:50000 jenkins_home:/var/jenkins_home jenkins/jenkins:2.375.1-jdk11"
    NOTE: - Có thể tự build image theo doc jenkins và thay vì pull từ repo jenkins/jenkins trên docker hub thì ta install image đã build.
                - Nên add volume (-v) để tiện update version jenkins và khi bật tắt có đường dẫn sẽ mở lại đúng dashboard mà mình đã setup, ko bị mất job đã tạo ...
    4. Truy cập vào localhost:8080
    5. Setup tương tự như ở Part 1

Update jenkins sử dụng Docker:
    Để update jenkins lên bản mới hoặc jdk cao hơn (jdk17) khá đơn giản:
    - Nếu tự build sẽ sửa version trong DockerFile và build lại và chạy lệnh 
    "docker run --rm --name jenkins -p 8080:8080 -p 50000:50000 jenkins_home:/var/jenkins_home jenkins-image-version-name"
    - Nếu pull từ repo jenkins/jenkins thì chỉ cần nhập lệnh:
    "docker run --rm --name jenkins -p 8080:8080 -p 50000:50000 jenkins_home:/var/jenkins_home jenkins/jenkins:latest-version-name"
    - Để kiểm tra update, refresh lại trình duyệt và đăng nhập lại vào Jenkins version của jenkins ở góc dưới cùng bên phải.