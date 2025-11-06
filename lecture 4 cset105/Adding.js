const prompt = require("prompt-sync")();
let Number = [100, 200, 300, 400, 500];
function addElementAtPosition(any, element, position) {
    if (position < 0 || position > any.length) {
        throw new Error("Invalid position");
    } 
    any.splice(position, 0, element);
    return any;
}
addElementAtPosition(Number, 250, 2); // Inserts 250 at index 2
console.log(Number); // Output: [100, 200, 250, 300, 400, 500] 