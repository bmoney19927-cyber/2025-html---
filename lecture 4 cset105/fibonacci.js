const prompt = require("prompt-sync")();
let n=Number(prompt("Enter a number"));
let seq=[];

seq[0]=0;
seq[1]=1;

for(let i=2; i<=n; i++){
    seq [i]=seq[i-1]+seq[i-2];
}

console.log(`Fibonacci series up to ${seq[n]} terms:`)
