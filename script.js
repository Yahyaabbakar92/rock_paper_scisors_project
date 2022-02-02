let computerOptions = ["rock", "paper", "scissors"];
let playerOptions = prompt("Please select rock, paper or scissors");
let playerOption = playerOptions.toLowerCase();
// null toLowerCase isn't an object and returns a type error
let computerOption = computerPlay();

// The function that randomly selects the computer option from the computerOptions array
function computerPlay() {
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}
// console.log(computerPlay());

// The function for playing the round
