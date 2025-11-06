function NameCF(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}
NameCF.prototype.fullName = function() {
	return `${this.firstName} ${this.lastName}`;
};
const namo = new NameCF('Byron', 'Ross');
console.log('My name is', namo.fullName());

// 
function createCounter() {
	let count = 0;
	return {
		increment() { count += 1; return count; },
		get() { return count; }
	};
}
const counter = createCounter();
console.log('The result is', counter.increment(), counter.get());

