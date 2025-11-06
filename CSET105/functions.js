const prompt = require("prompt-sync")();
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Byron");
function oneplusAvg(x,y) {
    return 1+ (x+y)/2
}
let a = 1;
let b = 3;
let c = 4;

console.log("One plus Average of a and b is",oneplusAvg(a,b));
console.log("One plus Average of b and c is",oneplusAvg(b,c));
console.log("One plus Average of a and a is",oneplusAvg(a,c));
function getArea(radius=2) {
    return 3.14*radius*radius;
}
console.log(getArea(5));
console.log(getArea());

function login(username){
    console.log(`${username}Logged in successfully.`);
}
login(`John`);
// calling the function

function login(username){
    console.log(`${username}, Logged in successfully.`);
    // not possible to reuse for other user(hard core).
}
login(`John`);
// user-John

function login(username){
    // logic (receiving parameters)
    console.log(`${username}, Logged in successfully.`);
}
login(`John`);
login(`Jane`); // 2nd User (can able to reuse for any number.)

function login(username){
    console.log(`${username}, Logged in successfully.`);
}
login(`John`);
login(`Jane`);


number1 = inputnumber();
console.log("Thank you!!");
number2 = inputnumber();
console.log(number1 * number1 - number2 * number2);

function inputnumber()
{
    let input = prompt("Enter a number");
    let number1 = Number(input);
    while(isNaN(number1));
    {
        input = prompt("Enter a number");
        number1 = Number(input);
    }
    return number1;
}

let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
    //v60
}
//y is not visible here
console.log(x + z);
// 40
const halve = function(n){
    return n / 2;
};

let n = 10;
console.log(halve(100));
// 50
console.log(n);
//10
const square1 = (x) => { return x * x; };
const square2 = x => x * x;

const horn = () => {
    console.log("Toot");
};
function login(username = "Guest", password) {
    console.log(password);
    console.log(`${username}, Logged in successfully.`);
}

login();
login(`John`, `secret`);
login(`Jane`);

function power(base, exponet) {
    let result = 1

    for(let i = 0; i < exponet; i++){
        result = result * base;
    }

    return result;
}

console.log(power(2,3));

function power(base, exponet = 2) {
    let result = 1;
    for (let count = 0; count < exponet; count++) {
        result *= base;
    }
    return result;
}

console.log(power(4));
console.log(power(2, 6));