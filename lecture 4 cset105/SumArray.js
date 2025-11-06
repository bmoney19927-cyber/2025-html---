const prompt = require("prompt-sync")();
let n = Number(prompt("How many numbers?"));
let arr = [];
let sum = 0;

for (let i =0; i < n; i++){
    let num = Number(prompt(`Enter number ${i + 1}: `));
    arr.push(num);
    sum += num;
}

console.log(`The sum of the array is ${sum}`);