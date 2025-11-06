// console.log("Hello World!");
// let link = document.body.getElementsByTagName("a")[0];
// console.log(link.href);
// let images = document.body.getElementsByTagName("img");
// let node = document.createTextNode(images[0].alt);
// if(images[0].alt)
// images[0].parentNode.replaceChild(node,images[0]);
// var btn = document.createElement("button");
// btn.innerHTML = "Click Me";
// document.body.appendChild(btn);

// var myobj = document.getElementById("demo");
// myobj.remove();

// console.log(document.getElementsByTagName("a")[0].target === "");

// document.getElementsByTagName("a")[0].target = "_blank";

// console.log(document.getElementsByTagName("a")[0].target);

// function sayHello() {
//     let child = document.createElement("h1");
//     child.innerHTML = "Hey there! ";

//     let div = document.getElementById("div");
//     div.appendChild(child);
// }
// function whoClickedMe(thing) {
//     console.log(thing);
//     console.log(thing.id);
//     console.log(thing.attributes);
// }
// let count = 0;
// function sayHello() {
//     let child = document.createElement("h1");
//     child.innerHTML = "Hey there!" + ++count;
//     let div = document.getElementById("div");
//     div.appendChild(child);
// }
function whoClickedMe(thing) {
    console.log(thing);
    console.log(thing.id);
    console.log(thing.attributes);
    console.log(thing.value);
}
let count
function sayHello() {
    let child = document.createElement("h1");
    child.innerHTML = "Hey there!" + ++count;
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
