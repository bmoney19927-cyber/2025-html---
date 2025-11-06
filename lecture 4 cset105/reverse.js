const prompt = require('prompt-sync')();

function reversenum(str) {
    return str.split('').reverse().join('');
}

let input = prompt("Enter a number to reverse: ");
console.log("Reversed number:", reversenum(input));
                       