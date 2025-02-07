function getComputerChoice() {
  let choice = Math.floor(Math.random() * 30) + 1;
  if (choice >= 0 && choice <= 10) {
    return "Piedra";
  } else if (choice >= 11 && choice <= 20) {
    return "Papel";
  } else {
    return "Tijera";
  }
}

function getHumanChoice() {
  let choice = prompt("Piedra, papel o tijera?: ");
  if (choice.toLowerCase() === "piedra") {
    return "Piedra";
  } else if (choice.toLowerCase() === "papel") {
    return "Papel";
  } else if (choice.toLowerCase() === "tijera") {
    return "Tijera";
  } else {
    return getHumanChoice();
  }
}

let computerScore = 0;
let humanScore = 0;

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();

  if (computerChoice === humanChoice) {
    console.log("Empate!");
  } else if (computerChoice === "Piedra" && humanChoice === "Papel") {
    humanScore++;
    console.log("Perfecto!, te llevas un punto");
  } else if (computerChoice === "Piedra" && humanChoice === "Tijera") {
    computerScore++;
    console.log("Perdiste, punto para tu adversario");
  } else if (computerChoice === "Papel" && humanChoice === "Piedra") {
    computerScore++;
    console.log("Perdiste, punto para tu adversario");
  } else if (computerChoice === "Papel" && humanChoice === "Tijera") {
    humanScore++;
    console.log("Perfecto!, te llevas un punto");
  } else if (computerChoice === "Tijera" && humanChoice === "Piedra") {
    humanScore++;
    console.log("Perfecto!, te llevas un punto");
  } else {
    computerScore++;
    console.log("Perdiste, punto para tu adversario");
  }
}
