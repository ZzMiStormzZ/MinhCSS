--> LESSON 1 : Biến, Kiểu Dữ Liệu, Toán Tử
1) Khai báo biến với var, let, const
- var :có thể khai báo lại và gán lại đc
- eg :  var a = 10; // khai báo lại được nhiều lần
        var a = 20; // gán lại đc bằng giá trị khác
        a = 30
- let :block scope, k đc khai báo lại trong cùng block, gán lại đc    
-  let b = 10; 
        // let b = 20; // lỗi: không thể tồn tại nhiều b ở trong cùng 1 block nếu như sử dụng let
        b = 30
        console.log(b);
- const :  block scope, k khai báo lại, k gán lại đc  
-        const c = 10; 
        // c = 20; //: Lỗi: k gán lại đc
        // const c = 30; // Lỗi: k khai báo lại trong cùng block
        console.log(c);
2)  Nhận diện và phân biệt kiểu dữ liệu cơ bản: number, string, boolean, undefined, null, object, array :
2.1) Number : là các giá trị số 
- eg : let a = 5;
       let b = 10;
       let c = 15;
- có thể dùng dấu +,-,*,/ để tính toán    
- string : là chuỗi là dữ liệu dạng văn bản  bồm gồm cả các ký tự có dấu nháy
+ Dấu nháy đơn '...'
+ Dấu nháy đôi "..."
+ Hoặc dấu ` (backtick) dùng cho template string    
+ eg:   let name = "minh";
        let message = 'dduck';
        let fullSentence = `Xin chào, tôi là ${minh}`;
2.2) String có thể chứa chữ, số, khoảng trắng, ký tự đặc biệt.
+ Có thể nối chuỗi bằng +, ví dụ:
+ eg :
        let firstName = "Minh";
        let lastName = "Hằng";
        let fullName = firstName + " " + lastName;
        console.log(fullName); // "Minh Hằng" đây sẽ là kết quả trả ra 
2.3 ) Boolean (Đúng / Sai) : là kiểu dữ liệu chỉ có 2 giá trị 
- true (đúng)
- false (sai)
--> dùng để so sánh kiểm tra điều kiện  dùng câu if  
        let  a = 10
        let  b = 15
        console.log(a<b)    //   true
        console.log(a>b)    //   false
2.4) undefined : Là giá trị mặc định của biến khi bạn tạo ra nhưng chưa gán giá trị cho nó.
- eg : 
        let a;
        console.log(a) // a chưa được gán gì nên giá  trị  của nó là underfined
2.5) null : là một giá trị "trống" có chủ ý.
- gán null khi muốn nói rõ rằng biến này không có giá trị gì cả.
- phân biệt với underfined : 
 - eg : let nguyenminh = null;
        console.log(nguyeminh); // null
- Nghĩa là: nguyenminh hiện tại không có dữ liệu, nhưng ta cố ý để trống (chứ không phải quên chưa gán như undefined).
2.6) Object (Đối tượng) : Là kiểu dữ liệu dùng để lưu trữ nhiều thông tin có liên quan trong các cặp key–value.
let name = "Minh"; // tên để trong ''  or "" thì trình mới đọc được
        let age = 21;
        console.log(name);
        console.log(age);
2.7) Array (Mảng) : Array là một danh sách có thứ tự gồm nhiều giá trị, nằm trong dấu [].
Các phần tử có thể là bất kỳ kiểu dữ liệu nào: number, string, object, boolean, v.v.
        let colors = ["Đỏ", "Xanh", "Vàng"];
        console.log(colors);         // In ra cả mảng
        console.log(colors[0]);      // "Đỏ"
        console.log(colors[1]);      // "Xanh"
        console.log(colors.length);  // Số phần tử: 3

        colors.push("Tím");          // Thêm phần tử mới vào mảng
        console.log(colors);         // ["Đỏ", "Xanh", "Vàng", "Tím"]
    }


        




