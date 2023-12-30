const computerChoiceDisplay = document.getElementById("computer--choice");
const yourChoiceDisplay = document.getElementById("your--choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("img");
let humanChoice;
let computerChoice;
let result;
let lives = 5;
let points = 0;
let point = document.getElementById("point");
let live = document.getElementById("live");
let mainResult = document.getElementById("mainResult");

point.innerText = points;
live.innerText = lives;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    humanChoice = e.target.id;
    yourChoiceDisplay.innerText = e.target.id;
    generateComputerChoice();
    getResult();
  })
);
function generateComputerChoice() {
  mainResult.innerText = "";
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber == 1) {
    computerChoice = "rock";
  } else if (randomNumber == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

let winPoint = () => {
  points++;
  point.innerText = points;
  return "you won a point";
};

function getResult() {
  if (computerChoice === humanChoice) {
    result = "its a draw";
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    result = winPoint();
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    result = winPoint();
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    result = winPoint();
  } else {
    result = "you lost a point";
    lives--;
    live.innerText = lives;
  }
  resultDisplay.innerText = result;
  resultsDisplay();
}

function resultsDisplay() {
  if (lives == 0) {
    mainResult.innerText = "You lose 💀👌";
    lives = 5;
    points = 0;
    point.innerText = points;
    live.innerText = lives;
    resultDisplay.innerText = "";
    yourChoiceDisplay.innerText = "";
    computerChoiceDisplay.innerHTML = "";
  } else if (points == 5) {
    mainResult.innerText = "You Win 🏆";
    lives = 5;
    points = 0;
    point.innerText = points;
    live.innerText = lives;
    resultDisplay.innerText = "";
    yourChoiceDisplay.innerText = "";
    computerChoiceDisplay.innerHTML = "";
  }
}
