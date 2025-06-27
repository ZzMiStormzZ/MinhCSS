--> Lesson 1: 
- Phân biệt thẻ inline và block , thẻ đóng và thẻ có thẻ đóng
- Thẻ p và div thường được sử dụng để phân biệt phần tử block
- Thẻ span thường được sử dụng phân biệt phần tử inline
=> Thẻ block là thẻ sẽ ăn toàn bộ chiều ngang của màn hình, thẻ inline là nó chỉ chiếm toàn bộ nội dung bên trong 
- thẻ tự đóng vs thẻ có thẻ đóng
- Thẻ tự đóng :
+ Nghĩa là thẻ tự đóng, không cần (và không được) có thẻ đóng như </hr> hay </br>
+ <br> (break) : Ngắt dòng (xuống dòng)
+ <hr> (horizontal rule) : Tạo đường kẻ ngang ngăn cách nội dung
- Thẻ có thẻ tự đóng : thẻ có thể có thẻ đóng, hoặc có thể bỏ thẻ đóng mà trình duyệt vẫn hiểu đúng có thể như là <li> hay<p>
- Cách dùng đúng cấu trức HTML :
+ ấn dấu ! sẽ cấu chúc chuẩn của định dạng HTML
+ giải thích :
+ Cặp thẻ <HTML>…</HTML>
Một tài liệu HTML luôn bắt đầu bằng <HTML> và kết thúc bằng </HTML>. Cặp thẻ này dùng để trình duyệt nhận biết đây là một tài liệu HTML. Toàn bộ nội dung, bao gồm các tag khác sẽ đƣợc chứa bên trong cặp thẻ này.
+ Thẻ <HEAD>…</HEAD>
Trong cặp thẻ <Head>…</Head> chứa tất cả phần mở đầu của một trang web. Các thẻ thƣờng nằm trong cặp thẻ Head có thể là: <title>, <style>, <meta>, <link>, <script> và
<base>. Trong cặp thẻ “Head” ta còn có thể đƣa rất nhiều thông tin vào cho browser, search engine.… Các thông tin đó sẽ đƣợc đề cập đến trong phần sau

+ Cặp thẻ <BODY>…</BODY> :Cặp thẻ này đƣợc dùng để xác định phần nội dung chính của tài liệu, tại đây ta có thể nhập vào các đoạn văn bản cùng các thẻ khác quy định về định dạng của dữ liệu lên trang web.

- Thẻ văn bản từ h1 đến h6, p , a ,img :
+ Gồm 6 mức từ H1 cho đến H6, có cỡ chữ giảm dần từ H1 đến H6
+ Thẻ <p> :Dùng để định dạng một đoạn văn bản. Cặp thẻ này tự động tạo khoảng cách giữa các đoạn trước đó và sau nó.
+ Thẻ <a> — liên kết (anchor) :Dùng để tạo liên kết đến một địa chỉ khác (trang web khác, trang trong cùng website hoặc một file tải về).Thuộc tính quan trọng: href (nơi liên kết đến) 
<a href=""></a>
+ Thẻ <img> — hình ảnh : dùng để chèn ảnh cho trang web  <img src="" alt=""> cho ảnh vào thư mục html ms lấy link được
+ thuộc tính quan trọng 
+ src (đường dẫn tới file ảnh) 
+ alt (văn bản thay thế khi ảnh không hiển thị) khi hình ảnh không hiển thị thì sẽ hiển thị nội dung của alt 