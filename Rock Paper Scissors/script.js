const playerSelection = prompt();
const computerSelection = getComputerChoice();
let playerCounter = 0;
let computerCounter = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("its a draw");
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    return (computerCounter += 1);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return (playerCounter += 1);
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return (playerCounter += 1);
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    return (computerCounter += 1);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return (computerCounter += 1);
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    return (playerCounter += 1);
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
    let cs = computerSelection;
    cs = getComputerChoice();
    playRound(playerSelection, cs);
    if (playerCounter > computerCounter) {
      console.log("Player wins");
    } else if (playerCounter < computerCounter) {
      console.log("Computer wins");
    }
  }
}
game();
if(playerCounter>computerCounter){
  console.log("Final winner player")
}
else if(playerCounter<computerCounter){
  console.log("Final winner Computer");
}