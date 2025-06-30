// number : là các giá trị số trong js là number
function demoPhepTinh() {
    if (true) {
        let a = 5;
        let b = 10;
        let c = 15;
        console.log(a + b + c) // console ở trông if mới tính được tại hàm let có gtri ở trong khối của nó
    }
}
demoPhepTinh()

// String : là  dữ liệu văn bản có cả các ký tự đặc biệt
function demoString() {
    if (true) {
        let firstName = "Minh";
        let lastName = "Hằng";
        let fullName = firstName + " " + lastName;
        console.log(fullName); // "Minh Hằng"
    }
}
demoString()


// Boolean (Đúng / Sai) kiểu dự liệu có 2 giá trị 
function demoBoolean() {
    if (true) {
        let a = 10
        let b = 15
        console.log(a < b)
        console.log(a > b)

    }
}
demoBoolean()


// undefined :  Là giá trị mặc định của biến khi bạn tạo ra nhưng chưa gán giá trị cho nó.
function demoUndefined() {
    if (true) {
        let a;
        console.log(a) // a chưa được gán gì nên giá  trị  của nó là underfined
    }
}
demoUndefined()


// null : à một giá trị "trống" có chủ ý.
function demoNull() {
    if (true) {
        let nguyenminh = null;
        console.log(nguyenminh); // null
    }
}
demoNull()


// Object : kiểu dữ liệu lưu trữ nhiều thông tin 
function demoObject() {
    if (true) {
        let name = "Minh";
        let age = 21;
        console.log(name);
        console.log(age);
    }
}
demoObject()




function demoArray() {
    if (true) {
        let colors = ["Đỏ", "Xanh", "Vàng"];
        console.log(colors);
        console.log(colors[0]);
        console.log(colors.length);

        colors.push("Tím");
        console.log(colors);
    }
}

demoArray();

// các phép tính  +, -, *, /, %
function demoMath() {
    if (true) {
        let a = 10;
        let b = 3;

        console.log(a + b);  // 13
        console.log(a - b);  // 7
        console.log(a * b);  // 30
        console.log(a / b);  // 3.333...
        console.log(a % b);  // 1
    }
}
demoMath();


//  Viết theo phong cách của bạn (dùng function, if (true)):
function demoPrint() {
    if (true) {
        let name = "Minh";
        let age = 21;
        console.log("Tên:", name);
        console.log("Tuổi:", age);
        alert("Xin chào " + name + ", bạn " + age + " tuổi!");
    }
}
demoPrint();

