-->  LESSON 2
1) Phân biệt các loại input(text,pasword,email,check box,radio,vv,....)
- Thẻ <input> : là loại thẻ xác định loại giao diện và điểu khiển hiện thị trên from
+ Điều khiển text : <input type="text"> : tạo điều khiển nhập văn bản có 1 dòng 
+ Hộp văn bản dạng pasword : <INPUT type=”PASSWORD” name=”tenpass”>: là ô nhập dữ liệu cho mật khẩu , khi người dùng gõ vào kí tự sẽ hiện *** để bảo mật
+ Thẻ <input type="checkbox"> là một ô chọn kiểu tích vào (dạng hình vuông nhỏ).
* Người dùng có thể tích chọn hoặc bỏ chọn.
* Có thể chọn một hoặc nhiều ô cùng lúc.
+ Thẻ <input type="email"> : nhập địa chỉ email.
Nó sẽ tự kiểm tra dữ liệu nhập vào có đúng định dạng email hay không (ví dụ phải có dấu @ và dấu .)
+ Thẻ radio : <input type="radio"> : là ô hình tròn cho phép người dùng chọn 1 trong các ô đó chỉ được chọn 1 ô
+ Thẻ <input type="button"> cũng dùng để tạo một nút bấm, nhưng khác với <button> là nó không có nội dung giữa thẻ mà nội dung hiển thị nằm ở thuộc tính value
2) Cách dùng label đúng cách :
- Tag <label> định nghĩa nhãn cho thành phần <input />.
- Tag <label> không hiển thị bất cứ gì đặc biệt cho người dùng, tuy nhiên nó cung cấp một cải thiện cho người sử dụng chuột, nếu click chuột vào nhãn, sẽ đưa con trỏ chuột vào vùng <input />.
- Muốn sử dụng hiệu quả <label>, cần thiết phải cho giá trị id của <input /> và giá trị for của <label>, hai giá trị này phải trùng nhau
- tôi không hiểu lý thuyết phần này lắm tôi hiểu là label này nó có liên kết đến phần input như ví dụ tôi lấy là liên kết với input id 
- Validate đơn giản: dùng các thứ có sẵn của html để kiểm tra dữ liệu mà không cần viết code JavaScript
- Validate trong HTML có nghĩa là kiểm tra dữ liệu người dùng nhập vào ô input trước khi gửi form.