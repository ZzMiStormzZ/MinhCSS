--> LESSON 6:
1)  Dùng border, border-radius tạo khung đẹp: dùng thẻ style trong html của css
- border:   Tạo đường viền dày  kiểu liền 
+ border: 2px solid red; viền dày 2px và có màu đỏ
- border-radius: Bo tròn khung viền
+ border-radius: 15px; bo tròn khung 15 px
- padding: khoảng cách từ nội dung đến khung ( độ rộng khung)
- margin: Khoảng cách từ khung này đến lề trên
2) Phân biệt position: relative / absolute / fixed
- position trong CSS : quyết định phần tử đặt ở vị trí trên màn hình bố cục
+ static (mặc định)
+ crelative
+ absolute
+ fixed
+ sticky
- relative → Định vị trí tuyệt đối cho các thành phần, không gây ảnh hưởng tới vị trí ban đầu hay các thành phần khác.
+ eg :  .tên thẻ mình đặt {
            position: relative;
        }
- absolute → Các phần tử được định vị tuyệt đối sẽ bị loại bỏ khỏi luồng thông thường và có thể CHỒNG lên các phần tử khác.
+ eg:  .tên mình đặt {
            position: absolute;
            top: 80px; lên  trên 80 px
            border: 3px solid orange; ( tạo độ dày viền 3px và có màu cam)
        }
- fixed → gắn cố định vào màn hình
+ eg: .tên mình đặt {
            position: fixed;
        }
- relative: Vị trí tương đối với chính chỗ cũ của nó, có thể dịch chuyển nhưng vẫn giữ chỗ.
- absolute: Vị trí tuyệt đối so với phần tử cha gần nhất có position (hoặc so với màn hình nếu không có), không giữ chỗ. có thể chồng lên các thẻ khác
- fixed: Cố định trên màn hình, cuộn trang không di chuyển, không giữ chỗ
3) Các cách canh giữa theo chiều ngang & dọc (flex, position)
- Flex:
+ Dùng display: flex; justify-content: center; align-items: center; để canh giữa ngang và dọc trong khung cha.
+ eg:          .tao-khung {
            display: flex; (Biến thẻ div thành flexbox )
            justify-content: center; (Canh giữa theo chiều ngang )
            align-items: center;( Canh giữa theo chiều dọc)
            width: 400px;(Chiều rộng khung )
            height: 300px;(Chiều cao khung )
            background: gray;
            }
            .khung-con {
                background: pink;
                 padding: 20px;

          
- Position:
+ Dùng position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); để đặt phần tử nằm giữa ngang và dọc so với phần tử cha (hoặc màn hình nếu dùng fixed).
+  .khung-to {
      position: relative;         
      width: 400px;
      height: 300px;
      background: lightblue;
    }

    .khung-be {
      position: absolute;            Thoát khỏi luồng bố cục bình thường 
      top: 50%;                      Dịch xuống 50% chiều cao của cha 
      left: 50%;                     Dịch sang phải 50% chiều ngang của cha 
      transform: translate(-50%, -50%);  Dịch ngược lại đúng giữa 
      background: gold;
      padding: 20px;
    }

