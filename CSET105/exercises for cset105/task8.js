const prompt = require("prompt-sync")();

function hcf(a, b) {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}
const num1 = 32;
const num2 = 60;

console.log(`The HCF of ${num1} and ${num2} is: ${hcf(num1, num2)}`);