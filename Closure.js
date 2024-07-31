function greeting(person) {
  console.log(person);
}
// const name = "new one"




// function arguments pass by reference pass by value

function sum(a,b,c){
     console.log(arguments);
     const result =a+b+c;
     return result;
}
const total = sum(45, 89, 12, 45, 98, 56);
console.log(total);
