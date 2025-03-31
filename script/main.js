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

function checkPlayerInput() {
  const playerInput = userInput.value.toString().toLowerCase();
  if (
    playerInput !== "rock" &&
    playerInput !== "paper" &&
    playerInput !== "scissors"
  ) {
    userInput.style.border = "2px solid red";
    return false;
  } else {
    userInput.style.border = "none";
    return true;
  }
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

function gameLogic() {
  const isInputValid = checkPlayerInput();
  if (isInputValid) {
    decideWinner();
  }
}

submitBtn.addEventListener("click", gameLogic);

const footerText = document.getElementById("footer-text");
const year = new Date().getFullYear();
footerText.innerHTML = `<p>&#169; Bernard Ossama - ${year}</p>`;
