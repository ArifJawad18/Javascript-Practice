// function isLeapYear (year){
//      if(year % 4===0){
//           return true;
//      }
//      else{
//           return false;
//      }
// }
/////////////////////////////////////

// function addAverage(number ){

// }
// const numbers = [42.33,54,65,32,54];

// const avg = addAverage(numbers);
// console.log('average of number odd numbers:',avg);

////////////////////////////////////

// array has some duplicate element

// const names =  [aiul, yoko,adel, formil,nami]

// Swap variable, swap without temp, destructing

// let a= 7 ;
// let b= 9;
// console.log(a,b);

// ////////////////////////////////
// console.log(Math.max(1, 3, 2));

// const max = Math.max(12,1,56,44,66,96,4);
// console.log('max isuing Math.max',max);

// ///////////////multiplication to calculate ///////////////////

function woodQuantity(chair, table, bed) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairTotalWood = chairQuantity * perChairWood;
  const tableTotaleWood = tableTotaleWood * perTableWood;
  const bedTotalWood = bedQuantity * perBedWood;

  const totalWood = chairTotalWood + tableTotaleWood + bedTotalWood;

  return totalWood;
}

const wood = woodQuantity(0, 0, 1);
console.log("wood needed", wood);
