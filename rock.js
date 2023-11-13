const computerChoiceDisplay = document.getElementById("computer--choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("img"); 
let humanChoice;
let computerChoice;
let result ;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    humanChoice = e.target.id;
    console.log( e.target.id);
    generateComputerChoice()
    getResult()
  }))
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;

if(randomNumber==1){
    computerChoice = 'rock';
}else if(randomNumber==2){
    computerChoice = 'paper';
}else{
    computerChoice = 'scissors';
}
computerChoiceDisplay.innerHTML =computerChoice;
}

function getResult(){
    if(computerChoice === humanChoice){
        result = "its a draw";
    }
    else if(computerChoice === "rock" && humanChoice === "paper"){
        result = "You Win 🏆"; 
    }
    else if(computerChoice === "scissors" && humanChoice === "rock"){
        result = "You Win 🏆";
    }
    else if(computerChoice === "paper" && humanChoice === "scissors"){
        result = "You Win 🏆";
    }
    else{
        result = "You lose 💀👌";
    }
    resultDisplay.innerHTML= result;
}
