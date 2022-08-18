function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("its a draw");
  } 
  else if (playerSelection === "paper" && computerSelection === "scissor") {
    console.log("scissor wins")
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("paper wins")
  }
  else if (playerSelection === "scissor" && computerSelection === "paper"){
    console.log("scissor wins")
  }
  else if (playerSelection === "scissor" && computerSelection === "rock"){
    console.log("rock wins")
  }
  else if (playerSelection === "rock" && computerSelection === "paper"){
    console.log("paper wins")
  }
  else if (playerSelection === "rock" && computerSelection === "scissor"){
    console.log("rock wins")
  }
  else{
    console.log("why not");
  }
}
function getComputerChoice() {
  let ar = ["paper", "rock", "scissor"];
  let random = Math.floor(Math.random() * 2);
  return ar[random];
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
