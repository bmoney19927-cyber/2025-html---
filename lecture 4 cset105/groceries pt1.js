// Grocery list search program
const prompt = require('prompt-sync')();

// Ask for number of grocery items
const n = parseInt(prompt('How many grocery items do you have? '));
let groceries = [];

// Collect grocery items
for (let i = 0; i < n; i++) {
	const item = prompt(`Enter item ${i + 1}: `);
	groceries.push(item);
}

// Search loop
while (true) {
	const searchItem = prompt('Search for an item (or type "quit" to exit): ');
	if (searchItem.toLowerCase() === 'quit') {
		break;
	}
	//
	const found = groceries.some(item => item.toLowerCase() === searchItem.toLowerCase());
	if (found) {
		console.log('Found');
	} else {
		console.log('Not found');
	}
}

