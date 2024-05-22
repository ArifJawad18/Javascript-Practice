// 1 JSON
const student = {
  name: "salib khan",
  age: 32,
  movies: ["King khan,Dhakar mastan"],
};
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// 2.fetch
fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));

// keys, values
const numbers = [23, 32, 87, 56, 43];
numbers, forEach((num) => console.log(num));
numbers.map(num = num * 2);

