
// Manage as its own single function
const prompt = require('prompt-sync')();

function manage() { 
	let groceries = [];
	while (true) {
		const action = prompt('Type "add", "search", "eliminate", "print", or "Exit": ').toLowerCase();
		if (action === 'Exit') {
			break;
		} else if (action === 'add') {
			const item = prompt('Enter grocery item to add: ');
			const exists = groceries.some(g => g.toLowerCase() === item.toLowerCase());
			if (exists) {
				console.log('Item is already there.');
			} else {
				groceries.push(item);
				console.log('Item added.');
			}
		} else if (action === 'search') {
			const searchItem = prompt('Enter item to search: ');
			const found = groceries.some(g => g.toLowerCase() === searchItem.toLowerCase());
			if (found) {
				console.log('Found');
			} else {
				console.log('Not found');
			}
		} else if (action === 'eliminate') {
			const removeItem = prompt('Enter a grocery to eliminate: ');
			const index = groceries.findIndex(g => g.toLowerCase() === removeItem.toLowerCase());
			if (index !== -1) {
				groceries.splice(index, 1);
				console.log('Item removed.');
			} else {
				console.log('Item does not exist.');
			}
		} else if (action === 'print') {
			if (groceries.length === 0) {
				console.log('Grocery list is empty.');
			} else {
				groceries.forEach((item, idx) => {
					console.log(`${idx + 1}. ${item}`);
				});
			}
		} else {
			console.log('Invalid action. Please type "add", "search", "remove", "print", or "quit".');
		}
	}
}

manage();
