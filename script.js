const choices = ["rock", "paper", "scissors"];

const computerPlay = () => choices[Math.floor(Math.random() * choices.length)];

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if (!choices.includes(playerSelection)) {
    alert(`Invalid choice: ${playerSelection}.`);
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
        alert(e.message);
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
        alert(e.message);
      }
    }
  }

  if (playerScore > computerScore) {
    console.log(`You win the game! Final score: ${playerScore}-${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You lose the game! Final score: ${playerScore}-${computerScore}`);
  } else {
    console.log(`It's a tie! Final score: ${playerScore}-${computerScore}`);
  }
};

game()

