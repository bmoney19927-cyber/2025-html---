const prompt = require("prompt-sync")();
let input = prompt("Enter a number: ");
let num = Number(input);

if (num !== num) {
 console.log("You did not enter a valid number");
}else{
 console.log("You entered:", num)
}