const resultDisplay = document.querySelector("#result");
const choicesDisplay = document.querySelector("#choices");
const choices = ["rock", "paper", "scissors"];
const handleClick = (e) => {
  getResults(
    e.target.innerHTML,
    choices[Math.floor(Math.random() * choices.length)]
  );
};
choices.forEach((choice) => {
  const button = document.createElement("button");
  button.innerHTML = choice;
  button.addEventListener("click", handleClick);
  choicesDisplay.appendChild(button);
});
const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      resultDisplay.innerHTML = `Senin seçimin:${userChoice} ve
       bilgisayarın seçimi:${computerChoice} ve SEN KAZANDIN`;
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      resultDisplay.innerHTML = `Senin seçimin:${userChoice} ve
       bilgisayarın seçimi:${computerChoice} ve SEN KAYBETTİN`;
      break;
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      resultDisplay.innerHTML = `Senin seçimin:${userChoice} ve 
      bilgisayarın seçimi:${computerChoice} ve BERABERESİNİZ`;
      break;
  }
};