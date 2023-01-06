function print_number() {
  let number = document.getElementById("number").value;
  number = parseInt(number);
  let htmlError = `1 </br> Vui lòng nhập giá trị số vào ô input`;

  if (number == " " || isNaN(number) || number == null || number == undefined) {
    return (document.getElementById("result").innerHTML = htmlError);
  } else {
    let html = "";
    for (let i = 1; i <= number; i++) {
      html += i + " <br/>";
    }
    return (document.getElementById("result").innerHTML = html);
  }
}

