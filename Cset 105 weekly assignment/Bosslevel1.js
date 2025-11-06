const prompt = require("prompt-sync")();

console.log("pick your mode")

let pick = Number(prompt("1 Max score or 2 Three lives: "));

if(pick === 1){
    maxScore();
}
else{
    threeLives();
}

function threeLives () {
    console.log("You have 3 attempts per question!")
    let score = 0;
const totalQuestions =20;
console.log("Welcome to the 'Three lives' mode1");
console.log("");

for(let i = 1; i <= totalQuestions; i++){
    const{ question, correctanswer } = generateQuestion();
    console.log(`\nQuestion ${i}: ${question}`);
   let attempts = 3;
   let answeredCorrectly = false;
   while (attempts > 0 && !answeredCorrectly) {
    const userAnswer = prompt(`Your answer (or type 'skip') [Attempts left: ${attempts}]: `);
    if(userAnswer.toLowerCase() === "skip") {
        console.log("You choose to skip this question. No points were gained or lost.");
        
            break;
        
    
    }
}
    const playerAnswer = parseInt(userAnswer, 10);
    if (!isNaN(playerAnswer) && playerAnswer === correctanswer) {
        score += 10;
        console.log("Correct! you earned 10 points.");
        answeredCorrectly = true;
    } else {
        attempts--;
        score -= 5;
        console.log(`Incorrect. You lost a life and 5 points.`);
        if(attempts === 0) {
            console.log(`Out of attempts! The correct answer was ${correctanswer}.`);
        }
    }

console.log(`Current Score: ${score}`);
}
if(totalQuestions === 20){
    console.log(`\nGameover! Your finals score is: ${score} out of a possible ${totalQuestions * 10} points.`);
}


}
function generateQuestion() {
    const operators = ['+','-','*'];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let question = `${num1} ${operator} ${num2} = ?`;
    let correctanswer;

    switch (operator) {
        case '+':
            correctanswer = num1 + num2
            break;
        case'-':
        correctanswer = num1 - num2
        break;
        case'*':
        correctanswer = num1 * num2
        break;
    }
    return{ question, correctanswer};
}

function maxScore(){

let score = 0;
const totalQuestions = 0;
console.log("Welcoome to the 'Max Score' mode1");
console.log("");

for(let i = 1; i <= 20; i++){
    const{ question, correctanswer } = generateQuestion();
    console.log(`\nQuestion ${i}: ${question}`);
   let answeredCorrectly = false;
   while (totalQuestions <=20 && !answeredCorrectly) {
    const userAnswer = prompt(`Your answer (or type 'skip')`);
    if(userAnswer.toLowerCase() === "skip") {
        console.log("You choose to skip this question. No points were gained or lost.");
        break;

    }
    const playerAnswer = parseInt(userAnswer, 10);
    if (!isNaN(playerAnswer) && playerAnswer === correctanswer) {
        score += 10;
        console.log("Correct! you earned 10 points.");
        answeredCorrectly = true;
    } else {
        totalQuestions = totalQuestions +1;
        score -= 5;
        console.log(`Incorrect. You lost a life and 5 points.`);
        if(totalQuestions === 20) {
            console.log("Game Over");
        }
    }
}
console.log(`Current Score: ${score}`);
}

console.log(`\nGameover! Your finals score is: ${score} out of a possible ${totalQuestions * 10} points.`);
}
function generateQuestion() {
    const operators = ['+','-','*'];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let question = `${num1} ${operator} ${num2} = ?`;
    let correctanswer;

    switch (operator) {
        case '+':
            correctanswer = num1 + num2
            break;
        case'-':
        correctanswer = num1 - num2
        break;
        case'*':
        correctanswer = num1 * num2
        break;
    }
    return{ question, correctanswer};
}

function threeLives(){
    let score = 0;
const totalQuestions =20;
console.log("Welcoome to the 'Max Score' mode1");
console.log("");

for(let i = 1; i <= totalQuestions; i++){
    const{ question, correctanswer } = generateQuestion();
    console.log(`\nQuestion ${i}: ${question}`);
   let attempts = 3;
   let answeredCorrectly = false;
   while (attempts > 0 && !answeredCorrectly) {
    const userAnswer = prompt(`Your answer (or type 'skip') [Attempts left: ${attempts}]: `);
    if(userAnswer.toLowerCase() === "skip") {
        console.log("You choose to skip this question. No points were gained or lost.");
        break;

    }
    const playerAnswer = parseInt(userAnswer, 10);
    if (!isNaN(playerAnswer) && playerAnswer === correctanswer) {
        score += 10;
        console.log("Correct! you earned 10 points.");
        answeredCorrectly = true;
    } else {
        attempts--;
        score -= 5;
        console.log(`Incorrect. You lost a life and 5 points.`);
        if(attempts === 0) {
            console.log(`Out of attempts! The correct answer was ${correctanswer}.`);
        }
    }
}
console.log(`Current Score: ${score}`);
}

console.log(`\nGameover! Your finals score is: ${score} out of a possible ${totalQuestions * 10} points.`);


}