const prompt = require('prompt-sync')();
function Maxium(...args) {
  if (args.length === 0) {
    throw new Error("No arguments provided");
  }
  let Math = args[0];
  for (let i = 1; i < args.length; i++) {
    if (args[i] > Math) {
      Math = args[i];
    }
  }
  return Math;
}
console.log(Maxium(300, 31, 14, 11, 50, 10)); // Outputs: 300
console.log(Math.max(300, 31, 14, 11, 50, 10)); // Outputs: 300