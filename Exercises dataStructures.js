// Use an Array to Store a Collection of Data

let yourArray = ["string", 22, 999, true, false, "another string"];
console.log(yourArray.length);

// Access an Array's Contents Using Bracket Notation

let myArray = ["a", "b", "c", "d"];

myArray[1] = "not b"

console.log(myArray);

// Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
    arr.unshift ('I', 2, 'three');
	arr.push (7, 'VIII', 9);
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));


// Remove Items from an Array with pop() and shift()

function popShift(arr) {
        let popped = arr.pop(); 
        let shifted = arr.shift(); 
        return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

// Remove Items Using splice()

function sumOfTen(arr) {
    let sum = arr.splice(1, 2)
    return arr.reduce((a,b) => a + b);
}
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

// Add Items Using splice()

function htmlColorNames(arr) {
    //removing colors and adding colors
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

// Copy Array Items Using slice()

function forecast(arr) {
      var todaysweather = [];
      todaysweather = arr.slice(2,4);
      return todaysweather;
  };
  
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


// Copy an Array with the Spread Operator

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        let obj = [...arr];
        newArr.push(obj)
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));

// Combine Arrays with the Spread Operator

