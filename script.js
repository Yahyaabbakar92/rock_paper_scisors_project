// Variables to store the players' score and CPUs' score
let computerScore = 0;
let playerScore = 0;
// A variable to store the number of rounds played
let numberOfRounds = 0;

// A function that plays a round of rock paper scissors
function playRound() {
  // A variable that stores the players input
  let playerInput = prompt("Please select rock, paper or scissors");
  let playerSelection = playerInput.toLowerCase();

  // A function that randomly selects an option from the array for the computer
  const computerOptions = ["rock", "raper", "scissors"];
  function computerPlay() {
    const selectOptions =
      computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return selectOptions;
  }
  let computerSelection = computerPlay();

  // The logic of the game including storing the scores for both player and CPU
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    ++playerScore;
    computerScore += 0;
    ++numberOfRounds;
    console.log(
      `You win this round. Your score is ${playerScore} and the CPU's score is ${computerScore}.`
    );
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    playerScore += 0;
    ++computerScore;
    ++numberOfRounds;
    console.log(
      `You lose this round. Your score is ${playerScore} and the CPU's score is ${computerScore}.`
    );
  } else if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    playerScore += 0;
    computerScore += 0;
    ++numberOfRounds;
    console.log(
      `Its a tie. Your score is ${playerScore} and the CPU's score is ${computerScore}.`
    );
  } else {
    return prompt("Please select rock, paper or scissors");
  }
}

// A function to play 5 rounds of the game
function game() {
  while (numberOfRounds < 5) {
    playRound();
    if (numberOfRounds === 5) {
      console.log(
        `Game Over. Your score is ${playerScore} and the CPU's score is ${computerScore}.`
      );
      break;
    }
  }
}
game();
