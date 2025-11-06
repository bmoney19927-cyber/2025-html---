const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calculator() {
    console.log("\nPlease select an option -");
    console.log("Press 1 to add");
    console.log("Press 2 to subtract");
    console.log("Press 3 to multiply");
    console.log("Press 4 to divide");
    console.log("Press 5 to quit");

    r1.question("Enter your choice: ", function (choice) {
        if (choice === "5") {
            console.log("Goodbye!");
            r1.close();
            return;
        }
        if (!["1", "2", "3", "4"].includes(choice)) {
            console.log("Please Select a valid option");
            return calculator();
        }
        r1.question("Enter first number: ", function (number1){
            r1.question("Enter second number: ", function (number2) {
                number1 = parseFloat(number1);
                number2 = parseFloat(number2);
                let result;
                switch (choice){
                    case "1":
                        result = number1 + number2;
                        break;
                        case "2":
                            result = number1 - number2;
                            break;
                            case "3":
                                result = number1 * number2;
                                break;
                                case "4":
                                    if (number2 !== 0) {
                                        result = number1 / number2;
                                    } else {
                                        console.log("Error: Cannot divide by zero!");
                                        return calculator();
                                    }
                                    break;
                }
                console.log("Result:", result);
                calculator(); // ask again
            });
        });
    });
}
// Run calculator
calculator();