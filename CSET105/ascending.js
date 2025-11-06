console.log("Numbers from 1 to 50:");
for (let i = 1; i <= 50; i++) {
    console.log(i);
}

console.log("\nNon-negative numbers less than 25:");
for (let i = 0; i < 25; i++) {
    console.log(i);
}

console.log("\nOdd numbers less than 25:");
for (let i = 1; i < 25; i += 2) {
    console.log(i);
}

console.log("\nNumbers divisible by 3 (less than 25):");
for (let i = 0; i < 25; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

console.log("\nMultiples of 2 or 3, but not both (up to 50):");
for (let i = 1; i <= 50; i++) {
    if ((i % 2 === 0 || i % 3 === 0) && !(i % 2 === 0 && i % 3 === 0)) {
        console.log(i);
    }
}

console.log("\nMultiples of 2 and 3 but not multiples of 12 (up to 100):");
for (let i = 1; i <= 100; i++) {
    if (i % 6 === 0 && i % 12 !== 0) {
        console.log(i);
    }
}