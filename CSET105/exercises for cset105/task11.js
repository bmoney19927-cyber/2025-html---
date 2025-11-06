const prompt = require("prompt-sync")();

function table(){
    while (true) {
        //Take inputs
        let x = Number(prompt("Enter x (the number for the table): "));
        let a = Number(prompt("Enter a (starting multiplier): "));
        let b = Number(prompt("Enter b(ending multiplier): "));

        // Valid inputs
        if(isNaN(x) || isNaN(a) || isNaN(b) || a > b) {
            console.log("Error: invalid input. Program will end.");
            break; // exit loop
        }
        // Print multiplication table of x
        console.log(`\nMultiplication table of ${x} from ${a} to ${b}:`);
        for (let i = a; i <= b; i++){
            console.log(`${x} x ${i} - ${x * i}`);
        }
        console.log(); 
    }
}
table();