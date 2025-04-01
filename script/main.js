const computerInput = document.getElementById("computerChoice");
const winner = document.getElementById("winnerText");

const rockButton= document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton=document.getElementById('scissors-btn');

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

function decideWinner(playerChoice) {
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

rockButton.addEventListener("click", () => {
  rockButton.classList.add('clicked');
  paperButton.classList.remove('clicked');
  scissorsButton.classList.remove('clicked');
  decideWinner("rock");
});

paperButton.addEventListener("click", () => {
  rockButton.classList.remove('clicked');
  paperButton.classList.add('clicked');
  scissorsButton.classList.remove('clicked');
  decideWinner("paper");
});

scissorsButton.addEventListener("click", () => {
  rockButton.classList.remove('clicked');
  paperButton.classList.remove('clicked');
  scissorsButton.classList.add('clicked');
  decideWinner("scissors");
});

const footerText = document.getElementById("footer-text");
const year = new Date().getFullYear();
footerText.innerHTML = `<p>&#169; Bernard Ossama - ${year}</p>`;
