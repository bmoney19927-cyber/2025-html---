const prompt = require("prompt-sync")();

function Number(a) {
    let result = 1;
    for (let i = 1; i <= a; i++) {
        result *= i;
        console.log(result);
    }
}
Number(9);

