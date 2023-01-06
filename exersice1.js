// Bai 1
let user = {};
user.name = "Hoang";
user.surename = "Viet";
user.name = "Bui";
delete user.name;
console.log(user);

// Bai 2
let salaries = {
  Bui: 1200,
  Viet: 1600,
  Hoang: 1350,
};
const arrayS = Object.values(salaries);
console.log(arrayS);
function sumSalaries(arrSala) {
  return arrSala.reduce((prev, crValue) => prev + Number(crValue), 0);
}
console.log(sumSalaries(arrayS));
// Bai 3

let menu = {
  width: 200,
  height: 300,
  name: "Bui Viet Hoang",
};
function multiplyNumberic(obj) {
  for (key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}
console.log(multiplyNumberic({ ...menu }));
console.log(menu);

// Bai 4
//Tạo mảng có tên là styles với các mục “Jazz” và “Blues”.
let styles = ["Jazz", "Blue"];

//Thêm “Rock-n-Roll” vào cuối.
styles.push("Rock-n-Roll");
console.log(styles);

//Thay thế giá trị ở giữa
console.log((styles[Math.floor((styles.length - 1) / 2)] = "Classics"));

//Tách giá trị đầu tiên của mảng
styles.shift();
console.log(styles);
//Tách giá trị đầu tiên của mảng
styles.unshift("Rap", "Reggae");
console.log(styles);

//Bài 5

function camelize(str) {
  let arr = str.split("-");

  let convertStr = arr
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
  return convertStr;
}
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
console.log(camelize("background-color"));

// Bai 6
let arrays = [1, 3, 4, 5, 6, 7];
function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

console.log(filterRange(arrays, 1, 5));

//Bai 7
let initArray = [
  { name: "Bui", age: 25 },
  { name: "Viet", age: 26 },
  { name: "Hoang", age: 27 },
  { name: "Bui2" },
  { age: 20 },
  { name: "Hoang2", age: 18 },
];

let transArr = initArray.filter((key) => key.name).map((item) => item.name);
console.log(transArr);
console.log(initArray);
// Bai 8

function getAverageAge(users) {
  //Loai doi tuong khong co age
  const findAge = users.filter((item) => item.age);
  return findAge.reduce((prev, user) => prev + user.age, 0) / findAge.length;
}
console.log(getAverageAge(initArray));

// Baii 9
let flattened = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function flatten(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

let arr = [1, 2, [3, 4], [5, [6, 7]]];
console.log(flatten(flattened));

// bai 11
const rowData = [
  { name: "Hoang2", age: 25 },
  { name: "Viet a", age: 26 },
  { name: "Hoang c", age: 27 },
  { name: "Bui2 e" },
  { name: "Bui2 d", age: 20 },
  { name: "Bui b", age: 18 },
];

const listUserUppers = rowData
  .map((item) => ({ ...item, name: item.name }))
  .sort((item1, item2) => {
    const fullname1 = item1.name;
    const fullname2 = item2.name;
    const name1 = fullname1
      .split(" ")
      .filter((item) => item !== "")
      .pop();
    const name2 = fullname2
      .split(" ")
      .filter((item) => item !== "")
      .pop();
    return name2.localeCompare(name1);
  });
console.log(listUserUppers);

