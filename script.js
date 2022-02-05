// let playerOptions = prompt("Please select rock, paper or scissors");
// let playerOption = playerOptions.toLowerCase();

const computerOptions = ["rock", "paper", "scissors"];
// The function that randomly selects the computer option from the computerOptions array
function computerPlay() {
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}
let computerOption = computerPlay();
let userScore = 0;
let computerScore = 0;
let numberOfRounds = 1;

// null toLowerCase isn't an object and returns a type error

// The function for playing a round
function playRound(playerSelection, computerSelection) {
  let playerOptions = prompt("Please select rock, paper or scissors");
  let playerOption = playerOptions.toLowerCase();
  if (
    (playerOption === "rock" && computerOption === "rock") ||
    (playerOption === "paper" && computerOption === "paper") ||
    (playerOption === "scissors" && computerOption === "scissors")
  ) {
    userScore += 0;
    computerScore += 0;
    console.log(`Draw! ${playerOption} equals ${computerOption}`);
  } else if (
    (playerOption === "rock" && computerOption === "scissors") ||
    (playerOption === "paper" && computerOption === "rock") ||
    (playerOption === "scissors" && computerOption === "paper")
  ) {
    userScore++;
    computerScore += 0;
    console.log(`You win! ${playerOption} beats ${computerOption}`);
  } else if (
    (playerOption === "rock" && computerOption === "paper") ||
    (playerOption === "paper" && computerOption === "scissors") ||
    (playerOption === "scissors" && computerOption === "rock")
  ) {
    userScore += 0;
    computerScore++;
    console.log(`You lose! ${computerOption} beats ${playerOption}`);
  } else {
    console.log("Please input rock, paper or scissors");
  }
}

// playRound(playerOption, computerOption);

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
    numberOfRounds++;
    if (numberOfRounds === 5 && userScore > computerScore) {
      console.log("You win the game");
    } else if (numberOfRounds === 5 && userScore < computerScore) {
      console.log("You lose the game");
    }
  }
}
game();
