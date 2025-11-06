// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",

//     greet: function(){
//         console.log("hello " + this. firstName);
//     }
// };

// person.greet();

// let person = {
//     firstName: "john",
//     lastName: "doe",
//     age:30,
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// };
// let name = person.fullName.bind(person);
// console.log(name());

let object = JSON.parse(text);
console.log(object);
console.log(object.type);
console.log(object.model);

class person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + "years of age")
    }
}


