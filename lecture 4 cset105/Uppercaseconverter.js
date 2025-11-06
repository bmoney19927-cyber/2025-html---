const prompt = require('prompt-sync')();
// Uppercaseconverter.js
function toUppercase(str) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);
        //
		if (code >= 97 && code <= 122) {
			result += String.fromCharCode(code - 32); // Convert to uppercase
		} else {
			result += str[i]; // Leave other characters unchanged
		}
	}
	return result;
}

// Take input from user using prompt-sync
const input = prompt('Enter a string to convert to uppercase: ');
console.log(toUppercase(input));
// toUppercase is converting everything to uppercase correctly


