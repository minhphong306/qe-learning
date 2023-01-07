## Lesson 5: How to create Users + Manage + Assign Roles
### Create user
- Step 1: Manage Jenkins -> Manage Users
![img](image/002-jenkins-manage-user.png)

- Step 2: Click "Create User" > Nhập thông tin user
- Step 3: Có thể login bằng user vừa tạo
- Step 4: config user
 Chọn Configure > để thay đổi thông tin

![img](image/003-jenkins-conf-user.png)
- Step 5: Create and manage user roles
+ download Role-based Authorization Strategy plugin
+ login bằng acc admin > Manage Jenkins -> Configure Global Security -> Authorization > CHọn Role-based Strategy
+ login bằng acc user sẽ hiển thị Access Denied
- Step 6: Assign roles to users
+ Manage and Assign Roles > Manage Roles
![img](image/004-jenkins-manage-roles.png)

+ Manage and Assign Roles > Assign Roles

![img](image/005-jenkins-assign-roles.png)