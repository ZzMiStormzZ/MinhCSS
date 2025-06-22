3) Tạo viền cho bảng
 -   Bo viền	border: 1px solid black;	Tạo viền cho bảng và ô
 -  Ghép viền lại	border-collapse: collapse;	Ghép viền giữa các ô
 -  Canh giữa chữ	text-align: center;	Đưa chữ vào giữa ô
 -->  GIT  và GITHUB 
 - GIT là một phần mềm quản lý phiên bản :
 + có thể lưu lại lưu lại từng phiên bản của  dự án mỗi khi chỉnh 
 + quay lại phiên bản cũ 
 + Làm việc nhóm dễ dàng, ai chỉnh sửa gì, ở đâu đều biết rõ.
 + Kết hợp, phân nhánh nhiều tính năng hoặc bản thử nghiệm mà không ảnh hưởng bản chính.
 - GitHub là một trang web lưu trữ mã nguồn (source code) trực tuyến.
 + Nó giống như một kho lưu trữ code online, nơi bạn có thể đưa code của mình lên, quản lý phiên bản và làm việc nhóm với người khác.
 --> Cách sử dụng git :
 - git --version : kiem tra mk dung phien ban nao
 - git config --global user.name : khai bao ten muon su dung 
 - git config --global user.email : khai bao ten email muon su dung ( enmail sử dụng dùng cho github luôn )
 - cat ~/.gitconfig :kiểm tra lại tên kahi báo và email vừa thiết lập 
 - mkdir myproject :  khởi tạo folder
 - cd myproject : đi vào folder vừa tạo
 -  git init : khởi tạo local repository
 - git add + tên ảnh.jpg vừa tạo ở trong folder trên 