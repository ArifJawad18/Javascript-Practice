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
const.log(studentObj);