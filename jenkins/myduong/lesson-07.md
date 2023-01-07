## Lesson 7: Getting started with JOBS

- Step 1: Open Jenkins > Click button "New Item" > Nhập thông tin detail
![img](image/006-jenkins-new-job.png)

- Step 2. Trigger job remote
```http://localhost:8080/job/Jenkins/build?token=1234%20or%20/buildWithParameters?token=TOKEN_NAME```
- Step 3: chain job execution
+ Tạo job test1, test2, test3
+ Open config job test2 > Build Triggers > Build after other projects are built
![img](image/007-jenkins-build-trigger.png)
+ Post-build Actions > Build other projects
![img](image/008-jenkins-post-build-action.png)
- Step 4: Tại test1 > chọn Bulid Now => cả 3 job sẽ được chạy