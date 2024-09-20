function isLeapYear (year){
     if(year % 4===0){
          return true;
     }
     else{
          return false;
     }
}
const isLipi = isLeapYear(2052);
console.log(isLipi);

function addAverage(number ){

}
const numbers = [42.33,54,65,32,54];

const avg = addAverage(numbers);
console.log('average of number odd numbers:',avg);