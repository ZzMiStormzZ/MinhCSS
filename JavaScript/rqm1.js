// var: function scope, có thể khai báo lại và gán lại đc
function demoVar() {
    if(true) {
        var a = 10; // khai báo lại được nhiều lần
        var a = 20; // gán lại đc bằng giá trị khác
        a = 30
        console.log(a);
    }
    
}
demoVar();

// let: block scope, k đc khai báo lại trong cùng block, gán lại đc
function demoLet() {
    if(true) {
        let b = 10; 
        // let b = 20; // lỗi: không thể tồn tại nhiều b ở trong cùng 1 block nếu như sử dụng let
        b = 30
        console.log(b);
    }
}
demoLet();

// const: block scope, k khai báo lại, k gán lại đc
function demoConst() {
    if(true) {
        const c = 10; 
        // c = 20; //: Lỗi: k gán lại đc
        // const c = 30; // Lỗi: k khai báo lại trong cùng block
        console.log(c);
    }
    // console.log(c); // Lỗi: c is not defined ngoài block
}
demoConst();
