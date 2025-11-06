const prompt = require("prompt-sync")();
function getthis(n,i){return Math.floor(n/(10**i))%10}
console.log (getthis( 123, 1));