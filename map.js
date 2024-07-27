// map ==> loops through each element of the array and do the result from each operation in an array and finally returns you the array.

// const number =  [4,5,2,8,10];
// function doubleIt(num){
//      console.log('num now', num)
//      return num*2;
// }
// const result = number.map(doubleIt);
// console.log(result)

// const output = number.map(double2)
// // console.log(output);

// const output2= number.map(n=>n*2);



// // more map // //
// const numbers = [12,10, 8,15,7];
// // console.log(doubled)
// const doubled = numbers.map(num => num*2)

// 1. map
// 2. forEach
// 3.filter
// 4.find
// 5. reduce

// const numbers = [4,5,7,1,3,66];
// const total = numbers.reduce((previous,current)=> previous+current,0)
// console.log(total)


 const products=[
     {id:1,name:'lenovo', price:65000},
     {id:1,name:'dell', price:22000},
     {id:1,name:'hp', price:40000},
     {id:1,name:'lenovo', price:74000},

 ]
//  map
const names = products.map(product => product.name);
console.log(names);

// reduce
const total = products.reduce((acum, current) => acum +current.price,0)
console.log(total)