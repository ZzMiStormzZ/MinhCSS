
// Viết lại bằng arrow function:
const tinhTuoi = (namSinh) => {
    if (true) {
        let namHienTai = 2025;
        let tuoi = namHienTai - namSinh;
        console.log("(Arrow) Tuổi của bạn là:", tuoi);
    }
};

tinhTuoi(2004);


const kiemTraChieuCao = (chieuCao) => {
    if (true) {
        if (chieuCao >= 140) {
            console.log("(Arrow) Bạn đủ chiều cao để chơi tàu lượn 🎢");
        } else {
            console.log("(Arrow) Bạn chưa đủ chiều cao 😢");
        }
    }
};

kiemTraChieuCao(132); // (Arrow) Bạn chưa đủ chiều cao 😢






