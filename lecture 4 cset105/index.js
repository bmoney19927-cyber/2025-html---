const prompt = require("prompt-sync")();
// var groceries = ["Milk", "Eggs", "Frosted flakes", "Salami", "Juice"];
// // //console.log(groceries[1]);
// // console.log(groceries);
// // for (var i = 0; i < groceries.length; i++) {
// //     var item = groceries[i];
// //     //console.log("Item " + i + ":" + item);
// //     console.log(`Item ${i}: ${item}`);
// // }

// // groceries.unshift("Bananas");
// // groceries.push("Bread");
// // var lastitem = groceries.pop();
// // var firstitem = groceries.shift();
// // var resultIndex = groceries.indexOf("Eggs",0);
// // console.log(resultIndex); //1
// // console.log(groceries);
// // console.log([1, 2, 3, 2, 1].indexOf(2));
// // console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// // var good = ["Mario", "Luigi", "Kirby", "Yoshi"];
// // var bad = ["Bowser", "Koopa troopa", "Goomba"];
// // var goodAndBad = good.concat(bad);
// // console.log([0, 1, 2, 3, 4].slice(2, 4));
// // console.log([0, 1, 2, 3, 4].slice(2));
// // let arr = [1, 2, 3, 4];
// // let sliced = arr.slice(1, 3);
// // console.log(sliced);
// // console.log(arr)

// // let arr = [1, 2, 3, 4];
// // arr.splice(1,0,7,8,9);
// // console.log(arr);

// // let cars = ["BMW", "Audi", "Tesla", "ford"];
// // cars.splice(1,2, "Mercedes", "Toyota");
// // console.log(cars);

// // let cars1= ["BMW", "Audi", "Tesla", "Ford"];
// // cars.splice(cars1.length,0,"Toyota");
// // console.log(cars1);

// // let items = [
// //     [1, 2],
// //     [3, 4],
// //     [5, 6]
// // ];
// // console.table(items);

// // console.log(items[0][0]);
// // console.log(items[0][1]);
// // console.log(items[1][0]);
// // console.log(items[1][1]);
// // console.log(items);

// // function generateArray(N) {
// //     let arr = [ ];
// //     for (let i = 0; i < N; i++){
// //         arr.push(i);
// // }
// // return arr;
// // }


// // let N = parseInt(prompt("Enter a number: "));


// // console.log(generateArray(N));
// // let x = "HI! How you doing?"
// // console.log(x[2]);

// // console.log("coconuts".slice(4, 7));
// // console.log("coconut".indexOf("u"));

// // let sentence = "Secretarybirds specialize in stomping";
// // let words = sentence.split(" ");
// // console.log(words);
// // console.log(words.join(". "));
// // //
// // console.log("LA".repeat(3));
// // //
// // let string = "abc";
// // console.log(string.length);
// // //
// // console.log(string[1]);
// // function max(...numbers) {
// //     let result = -Infinity;
// //     for (let number of numbers) {
// //         if (number > result) result = number;
// //     }
// //     return result;
// // }
// // console.log(max(4, 1, 9, -2));
// // //
// // console.log(sumOne(5,4));

function sumOne(a,b){
    return a+b;
}
var myA = [5,4];
console.log(sumOne(...myA));

function showArgs(a, b,...args){
    // console.log("a =", a);
    // console.log("b =", b);
    console.log("Rest =",args);
}
showArgs(1,2,3,4,5);

function max(...numbers){
    return Math.max(...numbers);
}
console.log(max(4,1,9.-2));
console.log(max(100,200,20));

// function sumTwo(...args){
//     let sum =0;
//     for (const arg of args){
//         sum +=arg;
//     }
//     return sum;
// }
// console.log(sumTwo(2,3));
// console.log(sumTwo(2,3,1,4,7,8));
// let words = ["never", "fully"];
// console.log(["will", ...words, "understand"]);

// function greet(message, ...names){
//     for (let name of names){
//         console.log(`${message}, ${name}`);
//     }
// }
// greet("Hello", "Ashraf", "Awab", "Hardiyyah");
// console.log(greet);