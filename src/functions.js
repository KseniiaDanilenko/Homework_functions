function isBigger(a, b) {

return a > b;
};

function isSmaller(a, b) {
 return isBigger(b, a);
};
function getMin(...numbers) {
  let min =numbers[0];
  for(let i=0; i<numbers.length; i++){
    if(numbers[i] < min){
      min = numbers[i];
    }
  }
  return min;
}
function makeNumber(string) {
  let newString = string.replace(/[a-zа-яё]/gi, '');
  if(String(newString).length === 0){
    return '';
  }
  else{
    return String(newString);
  }
};



function countNumbers(string) {
let numbers = string.replace(/[a-zа-яё]/gi, '');
if (String(numbers).length === 0){
  return {};
}else{
let numbersArray = numbers.split("");
let keyArray = [... new Set(numbersArray)];
keyArray.sort(function(a,b){
   return a-b;
 })

let countNumbers = {};
  for(let i = 0; i< keyArray.length; i++){
      let counter = 0;
      for (let j=0; j<numbersArray.length; j++){
      
        if (keyArray[i] === numbersArray[j]){
          counter++;
        }
      }
      Object.defineProperty(countNumbers, keyArray[i], {
        value: counter,
        enumerable: true,
      })
  }
return countNumbers

}
};
function pipe(number, ...functions) {
 functions.forEach(method => {
   number = method(number)
   return number
 }, number)
 return number
};




function isLeapYear(date) {
let dateObject =new Date(date);
dateObject.setDate(29);
if(Number(dateObject.getDate())){
  dateObject.setMonth(01)
  if(dateObject.getMonth() !== 1){
    return `${dateObject.getFullYear()} is not a leap year`
  }
  else if(dateObject.getMonth() === 1){
    return `${dateObject.getFullYear()} is a leap year`
  }
}else{
  return 'Invalid Date';
}
};


module.exports = {
  isBigger,
  isSmaller,
  makeNumber,
  countNumbers,
  getMin,
  pipe,
  isLeapYear,
};
