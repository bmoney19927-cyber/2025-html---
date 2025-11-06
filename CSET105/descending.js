console.log("Numbers from 50 to 1:");
for (let i = 50; i >= 1; i--) {
    console.log(i);
}

console.log("\nNon-negative numbers less than 25 (descending):"); 
for (let i = 24; i >= 1; i--) {
    console.log(i);
}

console.log("\nOdd numbers less than 25 (descending):");
for (let i = 23; i >= 1; i -= 2) {
    console.log(i);
}

console.log("\nNumbers divisible by 3 (less than 25, descending):");
for (let i = 24; i >= 0; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

console.log("\nMultiples of 5 from 50 to 0:");
for (let i = 50; i >= 0; i--) {
    console.log(i);
}

console.log("\nMultiples of 2 or 3, but not both (up to 50, descending):");
for (let i = 50; i >= 1; i--) {
    if ((i % 2  === 0 || i % 3 === 0) && !(i % 2 === 0 && i % 3 === 0)) {
        console.log(i);
    }
}

console.log("\nMultiples of 2 or 3, but not both (up to 50, descending):");
for (let i = 100; i >= 1; i--) {
 if (i % 6 === 0 && i % 12 !== 0) {
        console.log(i);
    }
}
