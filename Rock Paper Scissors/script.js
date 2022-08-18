function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("its a draw");
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    console.log("scissor wins");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("paper wins");
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    console.log("scissor wins");
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    console.log("rock wins");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("paper wins");
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    console.log("rock wins");
  } else {
    console.log("why not");
  }
}
function getComputerChoice() {
  let ar = ["paper", "rock", "scissor"];
  return ar[Math.floor(Math.random() * 3)];
}
const playerSelection = "scissor";
// const computerSelection = getComputerChoice();
game();


function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
}