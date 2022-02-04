let computerOptions = ["rock", "paper", "scissors"];
let playerOptions = prompt("Please select rock, paper or scissors");
let playerOption = playerOptions.toLowerCase();
let computerOption = computerPlay();
let userScore = 0;
let computerScore = 0;
let numberOfRounds = 0;

// null toLowerCase isn't an object and returns a type error

// The function that randomly selects the computer option from the computerOptions array
function computerPlay() {
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

// The function for playing a round
function playRound(playerSelection, computerSelection) {
  if (
    (playerOption === "rock" && computerOption === "rock") ||
    (playerOption === "paper" && computerOption === "paper") ||
    (playerOption === "scissors" && computerOption === "scissors")
  ) {
    return `Draw! ${playerOption} equals ${computerOption}`;
  } else if (
    (playerOption === "rock" && computerOption === "scissors") ||
    (playerOption === "paper" && computerOption === "rock") ||
    (playerOption === "scissors" && computerOption === "paper")
  ) {
    return `You win! ${playerOption} beats ${computerOption}`;
  } else if (
    (playerOption === "rock" && computerOption === "paper") ||
    (playerOption === "paper" && computerOption === "scissors") ||
    (playerOption === "scissors" && computerOption === "rock")
  ) {
    return `You lose! ${computerOption} beats ${playerOption}`;
  } else {
    return "Please input rock, paper or scissors";
  }
}

// console.log(playRound(playerOption, computerOption));

function game() {
  while (numberOfRounds <= 5) {
    playRound(playerOption, computerOption);
    if (playRound() === `You win! ${playerOption} beats ${computerOption}`) {
      userScore++;
      numberOfRounds++;
      computerScore += 0;
      return numberOfRounds;
    } else if (
      playRound() === `You lose! ${computerOption} beats ${playerOption}`
    ) {
      userScore += 0;
      numberOfRounds++;
      computerScore++;
      return numberOfRounds;
    } else if (
      playRound() === `Draw! ${playerOption} equals ${computerOption}`
    ) {
      userScore += 0;
      numberOfRounds++;
      computerScore += 0;
      return numberOfRounds;
    } else {
    }

    if (numberOfRounds === 5 && userScore > computerScore) {
      console.log(`You win`);
    } else if (numberOfRounds === 5 && userScore < computerScore) {
      console.log(`You lose`);
    } else if (numberOfRounds === 5 && userScore === computerScore) {
      console.log(`tie`);
    } else {
    }
  }
}

game();
