--> LESSON 2 : Function, Callback, Arrow Function
1) Tạo và gọi hàm với function truyền thống :
- Hàm là nột khối mã ( code ) được đặt tên có thể tái sử dụng nhiều lần . 
- Cách khai báo truyền thống : 
+ eg : function tenHam(thamSo1, thamSo2, ...) {          //  function + tên hàm chữ đầu viết thường từ chữ sau viết hoa chữ cái đầu 
  // phần thân hàm: chứa các câu lệnh để thực thi
}
gọi lại tên hàm ;
Cách gọi hàm (Function Call) :
-Để chạy hàm, bạn chỉ cần gọi tên hàm và truyền tham số nếu có:
+ eg : chaoBan("Minh");                                   // Kết quả: Xin chào Minh!
+ không có "" thì là tham số  còn có "" thì là giá trị biến được xác định và in ra kết quả như ví dụ trên
- các hàm cơ bàn :
+ Hàm cộng 2 số (add(a, b))
function add(a, b)
+ function square(n) {
    if (true) {
        let result = n * n;
+         Hàm kiểm tra độ tuổi hợp lệ (checkAge(age))
function checkAge(age) {
    if (true) {
        if (age >= 18) {
            console.log("Bạn đủ tuổi");
        } else {
            console.log("Bạn chưa đủ tuổi");
        }
    }
}
2) Dùng arrow function và hiểu sự khác biệt với this
- Arrow Function (hàm mũi tên) là cách viết ngắn gọn hơn so với function truyền thống, được giới thiệu từ ES6 (JavaScript hiện đại). ( tạo hàm const = tên biến + tham số  ==> ) : const ... = () =>
+ 

- const tenHam = (thamSo) => {
  if (true) {
    // code xử lý



function NguoiDungArrow() {
  this.ten = "Minh";
  setTimeout(() => {
    console.log("Arrow function:", this.ten); // ✅ Minh
  }, 1000);
}

new NguoiDungArrow();
3) Callback là một hàm được truyền vào như một tham số cho một hàm khác, để được gọi lại (call back) sau khi hoàn thành một việc gì đó.
-   Bạn có một hàm chính: lamGiDo()
-   Bạn truyền vào 1 hàm khác: inKetQua() để xử lý khi xong.
=> Đó là callback!



