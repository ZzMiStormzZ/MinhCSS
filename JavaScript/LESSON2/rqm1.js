function chaoBan(dduck) {
    console.log("Xin chào " + dduck + "!");
}

chaoBan("dduck");


chaoBan("Minh");

// Hàm cộng 2 số (add(a, b))
function add(a, b) {
    if (true) {
        let Tổng = a + b;
        console.log("Tổng là:", Tổng);
    }
}

add(3, 5);


//  Hàm kiểm tra số chẵn (isEven(n))
function isEven(n) {
    if (true) {
        if (n % 2 === 0) {
            console.log(n + " là số chẵn");
        } else {
            console.log(n + " là số lẻ");
        }
    }
}

isEven(10); // 10 là số chẵn
isEven(7);  // 7 là số lẻ

//  Hàm tính bình phương (square(n))
function square(n) {
    if (true) {
        let result = n * n;
        console.log("Bình phương của", n, "là", result);
    }
}

square(4); // Bình phương của 4 là 16


// Hàm kiểm tra độ tuổi hợp lệ (checkAge(age))
function checkAge(age) {
    if (true) {
        if (age >= 18) {
            console.log("Bạn đủ tuổi");
        } else {
            console.log("Bạn chưa đủ tuổi");
        }
    }
}

checkAge(21); // Bạn đủ tuổi
checkAge(15); // Bạn chưa đủ tuổi


//Hàm truyền tên vào và in lời chào (greet(name))
function greet(name) {
    if (true) {
        console.log("Xin chào,", name + "!");
    }
}

greet("Minh"); // Xin chào, Minh!

