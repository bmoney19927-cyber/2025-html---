const prompt = require("prompt-sync")();

function generateQuestion(difficulty) {
    let operators, num1, num2, operator;
    if (difficulty === 'easy') {
        operators = ['+', '-'];
        operator = operators[Math.floor(Math.random() * operators.length)];
        num1 = Math.floor(Math.random() * 9) + 1;
        num2 = Math.floor(Math.random() * 9) + 1;
    } else if (difficulty === 'medium') {
        operators = ['+', '-', '*', '/'];
        operator = operators[Math.floor(Math.random() * operators.length)];
        if ( operator === '+' || operator === '-') {
            num1 = Math.floor(Math.random() * 90) + 10;
            num2 = Math.floor(Math.random() * 90) + 10;
        } else {
            num1 = Math.floor(Math.random() * 9) + 1;
            num2 = Math.floor(Math.random() * 8) + 1;
            if (operator === '/') {
                num1 = num2 * (Math.floor(Math.random() * 9) + 1);
            }
        }
    } else if (difficulty === 'hard') {
        operators = ['+', '-', '*', '/'];
        operator = operators[Math.floor(Math.random() * operators.length)];
        if (operator === '+' || operator === '-') {
            num1 = Math.floor(Math.random() * 900) + 100;
            num2 = Math.floor(Math.random() * 900) + 100;
        } else{
            num1 = Math.floor(Math.random() * 90) + 10;
            num2 = Math.floor(Math.random() * 8) + 1;
            if (operator === '/') {
                num1 = num2 * (Math.floor(Math.random() * 90) + 10);
            }
        }
    } else {
        operators = ['+', '-'];
        operator = operators[Math.floor(Math.random() * operators.length)];
        num1 = Math.floor(Math.random() * 9) + 1;
        num2 = Math.floor(Math.random() * 9) + 1;
    }
    let question = `${num1} ${operator} ${num2} = ?`;
    let correctanswer;
    switch (operator) {
        case '+':
            correctanswer = num1 + num2;
            break;
            case'-':
            correctanswer = num1 - num2;
            break;
            case'*':
            correctanswer= num1 * num2;
            break;
            case'/':
           correctanswer = num1 / num2;
            break;
    }
    return { question, correctanswer};
}

let difficulty;
while(!['easy', 'medium', 'hard'].includes(difficulty)) {
    difficulty = prompt("Select difficulty (easy, medium, hard): ").toLowerCase();
}

let score = 0;
const totalQuestions = 20;
console.log(`Welcome to the 'Max Score' model - Difficulty: ${difficulty}`);
console.log("");

let wrongQuestions = 0;
for(let i = 1; 1 <= totalQuestions; i++) {
    const { question, correctanswer } = generateQuestion(difficulty);
    console.log(`\nQuestion ${i}: ${question}`);

    let attempts = 3;
    let answeredCorrectly = false;
    while (attempts > 0 && !answeredCorrectly) {
        const userAnswer = prompt(`Your answer (or type 'skip') [Attempts left: ${attempts}]: `);
        if(userAnswer.toLowerCase() === "skip") {
            console.log("You chose to skip this question. No points were gained or lost.");
            break;
        }
        const playerAnswer = parseFloat(userAnswer);
        if (!isNaN(playerAnswer) && playerAnswer === correctanswer) {
            score += 10;
            console.log("Correct! You earned 10 points.");
            answeredCorrectly = true;
        } else {
            attempts--;
            score -= 5;
            console.log(`Incorrect. You lost a life and 5 points.`);
            if ( attempts === 0) {
                console.log(`Out of attempts! The correct answer was ${correctanswer}.`);
                wrongQuestions++;
                if (wrongQuestions >= 3) {
                    console.log("\nGame Over! You got 3 questions wrong.");
                    console.log(`Your final score is: ${score} out of a possible ${totalQuestions * 10} points.`);
                    process.exit();
                }
            }
        }
    }
    console.log(`Current Score: ${score}`);
}


console.log(`\nGmae Over! Your finals score is: ${score} out of a possible ${totalQuestions * 10} points.`);
