const computerPlay = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

const getPlayerSelection = (choices, round) => {
  let playerSelection = null;

  while (playerSelection === null || !choices.includes(playerSelection)) {
    playerSelection = prompt(`Round ${round}: Enter your choice (${choices.join(", ")}):`);

    if (playerSelection === null) {
      if (confirmCancel()) {
        return null;
      }
    } else {
      playerSelection = playerSelection.trim().toLowerCase();
      if (!choices.includes(playerSelection)) {
        alertInvalidChoice(choices, playerSelection);
      }
    }
  }

  return playerSelection;
};

const confirmCancel = () => {
  return confirm("Are you sure you want to cancel the game?");
};

const alertInvalidChoice = (choices, playerSelection) => {
  alert(`Invalid choice: ${playerSelection}. Please choose from ${choices.join(", ")}.`);
};

const playRound = (playerSelection, computerSelection, choices) => {
  playerSelection = playerSelection.trim().toLowerCase();

  if (!choices.includes(playerSelection)) {
    return `Invalid choice: ${playerSelection}.`;
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

const updateScore = (result, scores) => {
  if (result.startsWith("You win!")) {
    scores.player++;
  } else if (result.startsWith("You lose!")) {
    scores.computer++;
  }
};

const printFinalScore = (scores) => {
  if (scores.player > scores.computer) {
    console.log(`You win the game! Final score: ${scores.player}-${scores.computer}`);
  } else if (scores.computer > scores.player) {
    console.log(`You lose the game! Final score: ${scores.player}-${scores.computer}`);
  } else {
    console.log(`It's a tie! Final score: ${scores.player}-${scores.computer}`);
  }
};

const playGame = (rounds, choices) => {
  let scores = { player: 0, computer: 0 };

  for (let i = 1; i <= rounds; i++) {
    let playerSelection = getPlayerSelection(choices, i);

    if (playerSelection === null) {
      return;
    }

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection, choices);
    console.log(result);

    updateScore(result, scores);
  }

  printFinalScore(scores);
};

const game = () => {
  const choices = ["rock", "paper", "scissors"];
  const rounds = 5;

  alert("Welcome to Rock Paper Scissors!\n\nYou play against the computer for 5 rounds. Choose 'rock', 'paper', or 'scissors' each round to try to win.\n\nGood luck!");

  playGame(rounds, choices);
};

game();
