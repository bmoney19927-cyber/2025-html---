const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter a number"));
let num2 = Number(prompt("Enter a number"));
console.log(minTwo(num1, num2));

function minTwo(a,b) {
if (a > b){
    return (b) 
} else {
    return (a)
  }
} 
let num3 = Number(prompt("Enter a number"));
let num4 = Number(prompt("Enter a number"));
let num5 = Number(prompt("Enter a number"));
console.log(minThree(num3, num4, num5));

function minThree(a,b,c) {
    if ((a <= b) && (a <= c)) {
      return (a)
    } else if ((b <= a) && (b <= c)) 
    {
        return (b)
    } else { 
        return (c) 

    }
}

let num6 = Number(prompt("Enter a number"));
let num7 = Number(prompt("Enter a number"));
let num8 = Number(prompt("Enter a number"));
console.log(minThree(num6, num7, num8));

function minThree(a, b, c =None) {
    if ((a <= b) && (a <= c)) {
        return (a)
    } else if ((b <= a) && (b <= c))
    {
        return (b)
    } else {
        return (c)
    }
}

