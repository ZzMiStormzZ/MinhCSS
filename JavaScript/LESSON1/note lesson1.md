--> LESSON 1 : Khai báo biến với var, let, const
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
