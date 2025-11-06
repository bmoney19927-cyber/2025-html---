const prompt = require("prompt-sync")();

function generateQuestion() {
    const operators = ['+', '-', '*', '/'];
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2=  Math.floor(Math.random() * 10) + 1;
    let operator = operators[Math.floor(Math.random() * operators.length)];


    if (operator === '/') {
        num2 = Math.floor(Math.random() * 9) + 1;
        num1 = num2 * (Math.floor(Math.random() * 10) + 1);
    }

    let question = `${num1} ${operator} ${num2} = ?`;
    let correctanswer;

    switch (operator) {
    case'+':
        correctanswer = num1 + num2;
        break;
    case'-':
    correctanswer = num1 - num2;
         break;
    case'*':
    correctanswer = num1 * num2;
         break;
    case'/':
    correctanswer = num1 / num2;
         break;
 }
 return { question, correctanswer};
}
function playMaxScoreMode(){}

        let score = 0;
        const totalQuestions = 20;
        console.log("Welcome to the 'Max score' model");
        console.log("");




        let wrongQuestions = 0;
        for(let i = 1; i <= totalQuestions; i++) {
            const { question, correctanswer } = generateQuestion();
            console.log(`\nQuestion ${i}: ${question}`);

            let attempts = 3;
            let answeredCorrectly = false;
            while(attempts > 0 && !answeredCorrectly) {
                const userAnswer = prompt(`Your answer (or type 'skip') [Attempts left: ${attempts}]: `);
                if(userAnswer.toLowerCase() === "skip") {
                    console.log("You chose to skip this question. No points were gained or lost.");
                    break;
                }
                const playerAnswer = parseInt(userAnswer, 10);
                if (!isNaN(playerAnswer) && playerAnswer === correctanswer) {
                    score += 10;
                    console.log("Correct! You earned 10 points.");
                    answeredCorrectly = true;
                } else {
                    attempts--;
                    score -= 5;
                    console.log(`Incorrect. You lost a life and 5 points.`);
                    if (attempts === 0) {
                        console.log(`Out of attempts! The correct answer was ${correctanswer}.`);
                        wrongQuestions++;
                        if (wrongQuestions >= 3) {
                            console.log("\nGame Over! You got 3 questions wrong.");
                            console.log(`Your final score is: ${score} out of a possible ${totalQuestions * 10} points.`);
                            return;
                        }
                    }
                }
            }
            console.log(`Current Score: ${score}`);
        }

        console.log(`\nGame Over! Your final socre is: ${score} our of a possible ${totalQuestions * 10} points.`);
