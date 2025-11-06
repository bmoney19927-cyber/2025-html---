const person = {
  firstName: 'Byron',
  lastName: 'Ross jr',
  age: 19,
  greet() {
    return `Hi, I'm ${this.firstName} ${this.lastName}.`;
  }
};

console.log(person.firstName); 
console.log(person.greet());   
////
const animal = {
  speak() {
    return `${this.name} bit the cuz.`;
  }
};

const dog = Object.create(animal);
dog.name = 'Ceaser';
dog.bark = function() { return `${this.name} barked at the cuz.`; };

console.log(dog.speak()); 
console.log(dog.bark());  
// Ceaser is actually my dog's name!!