Bài 1.
    Viết code, một dòng cho mỗi yêu cầu sau:
    Tạo một đối tượng User trống.
    Thêm thuộc tính name với giá trị Hoang.
    Thêm thuộc tính surname với giá trị Viet.
    Thay đổi giá trị của name thành Bui.
    Xóa thuộc tính name khỏi đối tượng.
Bài 2.
    let salaries = {
      Bui: 1200,
      Viet: 1600,
      Hoang: 1350
    }
    Viết code để tính tổng tất cả các khoản lương và lưu trữ trong biến tổng.
Bài 3.
    [Input]:
    let menu = {
      width: 200,
      height: 300,
      name: "Bui Viet Hoang"
    };
    Tạo function multiplyNumeric(obj) nhân tất cả các thuộc tính số của object menu với 2.
    [Output]:
    menu = {
      width: 400,
      height: 600,
      name: "Bui Viet Hoang"
    };
Bài 4.
    Tạo mảng có tên là styles với các mục “Jazz” và “Blues”.
    Thêm “Rock-n-Roll” vào cuối.
    Thay thế giá trị ở giữa bằng “Classics”. Code để tìm giá trị giữa sẽ hoạt động với bất kỳ mảng nào có độ dài lẻ.
    Tách giá trị đầu tiên của mảng và hiển thị nó.
Tách giá trị đầu tiên của mảng
    [Output]:
    Jazz, Blues
    Jazz, Blues, Rock-n-Roll
    Jazz, Classics, Rock-n-Roll
    Classics, Rock-n-Roll
    Rap, Reggae, Classics, Rock-n-Roll
Bài 5.
    Viết hàm camelize(str) để thay đổi các từ được phân tách bằng dấu gạch ngang như “my-short-string” thành “myShortString” được viết bằng camel.
    [Output]:
    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';
Bài 6.
    Viết một hàm filterRangeInPlace(arr, a, b) lấy một mảng arr và loại bỏ khỏi nó tất cả các giá trị ngoại trừ những giá trị nằm giữa a và b. Nghiệm là: a ≤ arr[i] ≤ b.
Bài 7.
    let initArray = [
        { name: "Bui", age: 25 },
        { name: "Viet", age: 26 },
        { name: "Hoang", age: 27 },
        { name: "Bui2" },
        { age: 20 },
        { name: "Hoang2", age: 18 }
    ];
    Viết code chuyển đổi sang 1 mảng chỉ chứa name.
Bài 8.
    Cùng là mảng initArray ở bài 7.
    Viết function getAverageAge(arr) trả về tuổi trung bình.
Bài 9.
    let flattened = [[1, 2], [3, 4], [5, 6]];
    Viết function trả về mảng đã được làm phẳng.
    [Output]: [1, 2, 3, 4, 5, 6]
Bài 10.
    Xây dựng chương trình có một ô input, một button. Sau khi nhập giá trị số vào ô input, click vào button thì in các số từ 1 tới giá trị của ô input ra màn hình. Nếu không nhập vào ô input, click button sẽ in số 1 + "Vui lòng nhập giá trị số vào ô input".