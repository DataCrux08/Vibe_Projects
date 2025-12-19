const choices = ['rock','paper','scissors'];
const resultDisplay = document.getElementById('resultDisplay');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');

function Game(playerChoice){
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if(playerChoice === computerChoice){
    result = "It's a tie!";
  }
  else{
    switch(playerChoice){
      case "rock":
        result = (computerChoice === "scissors") ? "You win" : "You Lose";
        break;
      case "paper":
        result = (computerChoice === "rock") ? "You win" : "You Lose";
        break;
      case "scissors":
        result = (computerChoice === "paper") ? "You win" : "You Lose";
        break;
    }
    console.log(result);
  }
  player.textContent = `Player: ${playerChoice}`;
  computer.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;
  resultDisplay.style.color = (result ==='You win') ? 'lime' : 'red';
}