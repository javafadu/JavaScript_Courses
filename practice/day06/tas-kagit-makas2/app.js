const userChoiceDisplay = document.createElement("h2");
const computerChoiceDisplay = document.createElement("h2");
const resultDisplay = document.createElement("h2");
const gameDisplay = document.getElementById("game");
gameDisplay.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);
const choices = ["rock", "paper", "scissors"];
let userChoice;
let computerChoice;
/* butona tıklandığında çalışacak method */
const handleClick = (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = `User choice: ${userChoice}`;
  generateComputerChoice();
  getResult();
};
/* computerın seçimini üreten method */
const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = randomChoice;
  computerChoiceDisplay.innerHTML = `Computer choice:${computerChoice}`;
};
/* butonları ekleme */
for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button");
  button.id = choices[i];
  button.innerHTML = choices[i];
  button.addEventListener("click", handleClick);
  gameDisplay.appendChild(button);
}
/* kimin kazandığını belilediğimiz method */
const getResult = () => {
  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      resultDisplay.innerHTML = "SEN KAZANDIN!";
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      resultDisplay.innerHTML = "KAYBETTİN!";
      break;
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      resultDisplay.innerHTML = "BERABERESİNİZ!";
      break;
  }
};