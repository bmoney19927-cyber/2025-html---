const prompt = require("prompt-sync")();

function fibonacciseries(a) {
    let b = 1;
    let c = 1;

    console.log(b);
    if ( a > 1) console.log (b);

    let next;
    for (let i = 3; i <= a; i++) {
        next = b + c;
        console.log(next);
        b = c;
        c = next;
    }
}
fibonacciseries(9);