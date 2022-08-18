const playerSelection = "rock";
const computerSelection = getComputerChoice();
let playerCounter = 0;
let computerCounter = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("its a draw");
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    return computerCounter++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return playerCounter++;
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return playerCounter++;
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    return computerCounter++;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return computerCounter++;
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    return playerCounter++;
  } else {
    console.log("why not");
  }
}
function getComputerChoice() {
  let ar = ["paper", "rock", "scissor"];
  return ar[Math.floor(Math.random() * 3)];
}

function game() {
  for (let i = 0; i < 5; i++) {
    let computerSelectioa = getComputerChoice();
    playRound(playerSelection, computerSelectioa);
  }
}
game();
