// import {sumar} from './function_math.js';


// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// console.log(i);

// console.log(sumar(4,8));
///////////////////////////////////////////////////////
/*
// Only change code below this line
class Thermostat {
  constructor(fahrenheit){
    this.fahrenheit = fahrenheit;
  }
  get temperature(){
    return (5/9 * (this.fahrenheit - 32)) + ' °c';
  }
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0 / 5 + 32);
    // this.fahrenheit = celsius;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
*/


// var total = [1, 2, 3, 4, 5].reduce(
//   (previous,_ , current) => previous + current, 0);

// console.log(total);

// function factorialize(num) {
//   return num < 0 ? 1 :
//     new Array(num)
//       .fill(undefined)
//       .reduce((product, _, index) => product * (index + 1), 1);
// }
// factorialize(5);
function alphabeticalOrder(arr) {
  // let i = 0;
  return arr.sort((a, b) => {
    // i++;
    // console.log(a,b,i);
    // console.log(a === b ? 0 : (a > b ? 1 : -1));
    return a === b ? 0 : (a > b ? 1 : -1);
  });
}

console.log(alphabeticalOrder(["a", "d", "c","ac", "ac"]));
// console.log(alphabeticalOrder(["a", "d", "c","ac", "ac", "z", "g","ab"]));

let array = [45,2,14,65,3,14,11];

function bubbleSort (arr) {
  let nArr = arr.slice();
  for (let i = 0; i < nArr.length -1 ; i++){
		for(let j = 0; j < nArr.length - 1; j++) {
			if (nArr[j] > nArr[j+1]){
				// let aux = arr[j]
				// arr[j] = arr[j+1]
				// arr[j+1] = aux
        [nArr[j],nArr[j+1]] = [nArr[j+1],nArr[j]]
			};
		};
	};
  return nArr;	
};


console.log(bubbleSort(array));
console.log(array);