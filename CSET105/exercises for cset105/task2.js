const prompt = require("prompt-sync")();
function inputNumber()
{
    let input = prompt("Enter a number");
    let number1 = Number(input);
    while(isNaN(number1))
    {
        console.log("Invalid number");
        input = prompt("Enter a number");
        number1 = Number(input);
    }
    return number1;
}
let ask = inputNumber();
let red = inputNumber();
console.log(ask * ask - red * red)


inputNumber()