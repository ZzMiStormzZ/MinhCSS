--> LESSON 7 : media query, responsive, các size responsive
1)  Dùng @media để thay đổi style theo kích thước :
- @media: kiểm tra điều kiện kích thước màn hình
+ eg: .box {
            width: 400px;
            background-color: blue;
            padding: 20px;
            text-align: center;
            font-size: 24px;
 --> Đây là khối mặc định có màu xanh căn giữa phông chữ 24px rộng 400px
                    @media (max-width: 600px) {
            .box {
                width: 100%;
                font-size: 16px;
                background: pink;
            }

        }
 --> Khi có thẻ @media   : khi mhinh <=  600 px  thì box rộng 100% và đổi sang màu hồng với  cỡ chữ 16px      

- max-width: áp dụng khi bằng hoặc nhỏ hơn giá trị
- min-width: áp dụng khi bằng hoặc lớn hơn giá trị
2)  Áp dụng Mobile-first design :
- thiết kế cho mobile rồi mới nâng dần table bằng thẻ @media để tối ứu từ người dùng điện thoại trở lên
- Mobile-first:
+  CSS mặc định viết cho mobile.
+  Khi màn hình lớn hơn thì mới mở rộng bằng @media (min-width:...)
+ eg :        .box {
            background-color: red;
            padding: 20px;
            font-size: 16px;
            text-align: center;
        }

        @media (min-width: 600px) {
            .box {
               background-color: orange;
               font-size: 24px;
            }

        }
--> dùng min-width tư duy khi thiết kế giao diện ở mobile lên  với đoạn code này mobile sẽ hiện thị màu đỏ còn desktop sẽ màu cam         
+ ngược lại viết (max-width:...) thì là viết cho desktop 
3)  Thay đổi layout khi màn hình nhỏ hơn 768px, 1024px, v.v.
- max-width: 768px → dành cho tablet
- max-width: 1024px → dành cho laptop/desktop nhỏ
- max-width: 480px hoặc 375px → dành cho mobile 
+ eg : .box {
  width: 400px;
  background: lightblue;
  text-align: center;
  padding: 30px;
  font-size: 24px;
}

/* Khi màn hình nhỏ hơn 1024px */
@media (max-width: 1024px) {
  .box {
    background: orange;
    font-size: 20px;
    width: 300px;
  }
}

/* Khi màn hình nhỏ hơn 768px */
@media (max-width: 768px) {
  .box {
    background: lightgreen;
    font-size: 18px;
    width: 250px;
  }
}

/* Khi màn hình nhỏ hơn 480px (mobile) */
@media (max-width: 480px) {
  .box {
    background: pink;
    font-size: 16px;
    width: 100%;
  }
}
Khi màn hình lớn hơn 1024px → màu lightblue, 400px.
- Nhỏ hơn 1024px → màu cam, 300px.
- Nhỏ hơn 768px → màu xanh lá, 250px.
- Nhỏ hơn 480px → màu hồng, full ngang.
--> Cứ kéo thu hẹp trình duyệt là nó đổi màu, đổi size, đổi layout theo từng mốc.
