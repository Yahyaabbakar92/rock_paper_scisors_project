# rock_paper_scissors_project

I will write down the steps I took to fullfil this project on this README.md file
live site: https://yahyaabbakar92.github.io/rock_paper_scisors_project/

# The Challenge

- The project asks that I create the simple rock, paper, scissors game that returns results in the console.
- The game should first be played for 1 round and declare a win or loss for the user
- The game should play for 5 rounds and should record and the results of each round and report either a win or a loss for the user
- The game should prompt the user for an input

# My Process

    - Understanding the problem:
        1) For the first step, I'll create a function called computerPlay() that randomly returns the strings
            "Rock", "Paper", or "Scissors"
        2) Next I'll write another function called playRound(playerSelection,computerSelection) that plays a single round of
            of the rock, paper, scissors and this function will return a string declaring the winner of the round
        3) For this step I'll write a function called game() that uses the function playRound() to play(loop or call) a 5 rounds
            and store the results of each round and finally reports a winner or loser
        4) Use prompt to get input from the user
    - Planning
        1) how to return random string from array of strings
        2) how to make input case insensitive
        3) write logic for the game
            a) Break down the logic to simpler steps

# What I learned

- I need to simply my problem.
- null toLowerCase isn't an object and returns a type error
- Read other code to try and come up with the logic otherwise I'll spend a long time.

# Continued Development

- I need to still fix up the game as it loops 5 times but if the scores are both equal, the game over statement either runs before a round statement

# Useful Resources
