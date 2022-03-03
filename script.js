const buttons = document.querySelectorAll(".btns");
const results = document.getElementById("results");
let userScore = 0;
let computerScore = 0;

// The function to start the game
buttons.forEach((button) =>
  button.addEventListener("click", function () {
    playRound(button.value, computerPlay());

    const result = document.createElement("div");
    result.classList.add("result");
    result.textContent = `User Score:${userScore}
    Computer Score:${computerScore}`;
    results.appendChild(result);
  })
);

// The function that randomly selects the computer option from the computerOptions array
function computerPlay() {
  const computerOptions = ["rock", "paper", "scissors"];
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

// The logic to play the game of rps
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    userScore += 1;

    results.textContent = `You won the round! ${playerSelection} beats ${computerSelection}`;
    if (userScore === 5) {
      disableButtons();
      results.textContent =
        "Game over! You've won. Reload the page to play again";
    }
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore += 1;

    results.textContent = `You lost the round! ${computerSelection} beats ${playerSelection}`;
    if (computerScore === 5) {
      disableButtons();
      results.textContent =
        "Game over! You've lost. Reload the page to play again";
    }
  } else {
    results.textContent = `It's a tie! ${playerSelection} equals ${computerSelection}`;
  }
}

// The function for restarting the game
function disableButtons() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}
