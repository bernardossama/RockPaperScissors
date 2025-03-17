const userInput = document.getElementById("playerChoice");
const submitBtn = document.getElementById("submitBtn");
const computerInput = document.getElementById("computerChoice");
const winner = document.getElementById("winnerText");

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  let result = "";
  if (randomNumber === 1) {
    result = "rock";
  } else if (randomNumber === 2) {
    result = "paper";
  } else if (randomNumber === 3) {
    result = "scissors";
  }

  return result;
}

function decideWinner() {
  const playerChoice = userInput.value.toString().toLowerCase();
  const computerChoice = generateComputerChoice().toLowerCase();
  let gameResult = "";

  if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    gameResult = "You Lose";
  } else if (playerChoice === computerChoice) {
    gameResult = "It's a tie!";
  } else {
    gameResult = "You Win!";
  }

  computerInput.textContent = computerChoice.toLocaleUpperCase();
  winner.textContent = gameResult;
}

submitBtn.addEventListener("click", decideWinner);
