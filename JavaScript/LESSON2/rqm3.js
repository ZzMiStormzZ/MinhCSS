function tinhTongVaIn(so1, so2, callback) {
    if (true) {
        let tong = so1 + so2;
        callback(tong); // Gọi hàm callback và truyền kết quả vào
    }
}

// Hàm callback: in ra kết quả
function inKetQua(kq) {
    console.log("Kết quả là:", kq);
}

tinhTongVaIn(5, 7, inKetQua); // Kết quả là: 12
