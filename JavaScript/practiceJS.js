// Bài 1: Viết hàm testVarLetConst khai báo:
// Biến x = 5 sử dụng var
// Biến y = 10 sử dụng let
// Biến z = 15 sử dụng const
// Sau đó:
// 1. Gán lại x thành 50 và y thành 100
// 2. Thử gán lại z thành 150 và quan sát kết quả (ghi chú lỗi nếu có)
// 3. console.log giá trị của cả 3 biến x,y,z


function testVarLetConst() {
    if (true) {
        var x = 5
        let y = 10
        const z = 15
        x = 50  // hiện được giá trị này vì hàm var có thể gán lại được 
        y = 100 // hiện được giá trị này vì hàm let có thể gán lại được
        // z = 150 // do hàm const không khai báo và gán lại được nên z = 150 không tồn tại 
        console.log(x, y, z)
    }
}
testVarLetConst()

// Bài 2: Viết hàm scopeTest
// Tạo biến num = 1 (sử dụng var ở ngoài if)
// Trong if (true), khai báo lại num bằng var và gán giá trị mới = 2
// console.log(num) sau khối if
// Kết quả là bao nhiêu và giải thích vì sao

function scopeTest() {
    if (true) {
        var num = 2
        // console.log(num) // Kết quả bằng 2 tại vì hàm var gán lai được 
    }
    var num = 1
    console.log(num)
}
scopeTest()

// Bài 3: Viết hàm blockScopeTest:
// Trong if (true), khai báo biến count = 10 (sử dụng let) và log ra value
// Ngoài if, thử console.log(count)
// Hỏi result có error không ? Giải thích vì sao ?

