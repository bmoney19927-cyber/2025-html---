const prompt = require("prompt-sync")();

function nthTerm(a) {
    return (2 * a * a - 2 * a + 2);
}

let a = 9; 
let Number = nthTerm(a);
console.log("The" + a + "th term is: " + Number);
console.log("The first 9 terms are:");
for (let i = 1; i <= 9; i++) {
    console.log(nthTerm(i));
}


