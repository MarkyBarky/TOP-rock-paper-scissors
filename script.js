function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playGame() {
  const rock = document.querySelector(".rock");
  const paper = document.querySelector(".paper");
  const scissors = document.querySelector(".scissors");
  const scoreboard = document.querySelector(".score");

  let humanScore = 0;
  let computerScore = 0;
  let round = 0;

  function showRound(score) {
    scoreboard.textContent = score;
  }
  function showScore(humanScore, computerScore) {
    scoreboard.textContent = `Player Score: ${humanScore} Computer Score ${computerScore}`;
  }
  function playRound(humanChoice, computerChoice) {
    let humanWin =
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper");
    if (humanChoice === computerChoice) {
      return "You have tied!";
    } else if (humanWin) {
      humanScore++;
      return "You have won!";
    } else {
      computerScore++;
      return "You have lost!";
    }
  }
  function rpsClick(playerSelection) {
    round++;
    const computerSelection = getComputerChoice();
    const score = playRound(playerSelection, computerSelection);
    showRound(score);

    if (round === 5) {
      showScore(humanScore, computerScore);
    }
  }

  rock.addEventListener("click", () => rpsClick("rock"));
  paper.addEventListener("click", () => rpsClick("paper"));
  scissors.addEventListener("click", () => rpsClick("scissors"));
}

playGame();
