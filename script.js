// A function that plays a round of rock paper scissors
function playRound() {
  // A function that stores the players input
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

  // The logic of the game
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win this round";
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    return "You lose this round";
  } else if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    return "Its a tie";
  } else {
    return "Please select rock, paper or scissors";
  }
}

console.log(playRound());
