const prompt = require("prompt-sync")();
let Number = [100, 200, 300, 400, 500];
function removeElementAtPosition(any, position) {
    if (position < 0 || position >= any.length) {
        throw new Error("Invalid position");
    }
     any.splice(position, 1);
    return any;
}
removeElementAtPosition(Number, 2); // Removes the element at index 2 (300)
console.log(Number); // Output: [100, 200, 400, 500]