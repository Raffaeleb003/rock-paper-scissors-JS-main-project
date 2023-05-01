const choices = ["rock", "paper", "scissors"];

const computerPlay = () => choices[Math.floor(Math.random() * 3)];

const playRound = (playerSelection, computerSelection) => {
  if (!choices.includes(playerSelection)) {
    throw new Error(`Invalid choice: ${playerSelection}.`);
  }

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = "";
    while (!choices.includes(playerSelection)) {
      playerSelection = prompt(`Round ${i+1}: Enter your choice: ${choices.join(", ")}`).toLowerCase();
      try {
        playRound(playerSelection, computerPlay());
      } catch (e) {
        console.error(e.message);
      }
    }
    const computerSelection = computerPlay();
    if (playerSelection) {
      try {
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.startsWith("You win!")) {
          playerScore++;
        } else if (result.startsWith("You lose!")) {
          computerScore++;
        }
      } catch (e) {
        console.error(e.message);
      }
    }
  }

  if (playerScore > computerScore) {
    return `You win the game! Final score: ${playerScore}-${computerScore}`;
  } else if (computerScore > playerScore) {
    return `You lose the game! Final score: ${playerScore}-${computerScore}`;
  } else {
    return `It's a tie! Final score: ${playerScore}-${computerScore}`;
  }
};

console.log(game());