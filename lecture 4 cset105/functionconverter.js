const prompt = require('prompt-sync')();
// Function to invert the case of a string
function invertCase(inv) {
	let result = '';
	for (let i = 0; i < inv.length; i++) {
		let code = inv.charCodeAt(i);
		// If lowercase
		if (code >= 97 && code <= 122) {
			result += String.fromCharCode(code - 32);
		}
		// If uppercase
		else if (code >= 65 && code <= 90) {
			result += String.fromCharCode(code + 32);
		}
		else {
			result += inv[i];
		}
	}
	return result;
}
const input = prompt('Enter a string to invert its case: ');
console.log(invertCase(input));
