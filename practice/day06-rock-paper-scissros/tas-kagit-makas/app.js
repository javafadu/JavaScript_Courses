const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const butonlar = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;
butonlar.forEach((buton) => {
  buton.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  });
});
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult() {
  if (computerChoice === userChoice) {
    result = "Berabere :)";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "sen kazandın";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "kaybettin:(";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "sen kazandın";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "kaybettin:(";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "sen kazandın";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "kaybettin:(";
  }
  resultDisplay.innerHTML = result;
}
