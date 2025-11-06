
const results = {
  rock: { scissors: 1, paper: -1, rock: 0 },
  paper: { rock: 1, scissors: -1, paper: 0 },
  scissors: { paper: 1, rock: -1, scissors: 0 }
};

let playerScore = 0;
let computerScore = 0;
let round = 0;

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  const result = results[playerChoice][computerChoice];
  round++;

  let message = '';

  if (result === 1) {
    playerScore++;
    message = `You Win! ${capitalize(playerChoice)} beats ${computerChoice}.`;
  } else if (result === -1) {
    computerScore++;
    message = `You Lose! ${capitalize(computerChoice)} beats ${playerChoice}.`;
  } else {
    message = `It's a Tie! You both chose ${playerChoice}.`;
  }

  document.getElementById("result").textContent = message;

  const history = document.getElementById("history");
  const listItem = document.createElement("li");
  listItem.textContent = `${round}. You - ${capitalize(playerChoice)}, Computer - ${capitalize(computerChoice)}`;
  history.appendChild(listItem);

  document.getElementById("score").textContent =
    `Score: You - ${playerScore}, Computer - ${computerScore}`;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
