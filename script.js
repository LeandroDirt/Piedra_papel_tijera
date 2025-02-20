function getComputerChoice() {
  const COMPUTER_CHOICE = Math.floor(Math.random() * 30) + 1;
  if (COMPUTER_CHOICE >= 1 && COMPUTER_CHOICE <= 10) {
    return "Piedra";
  } else if (COMPUTER_CHOICE >= 11 && COMPUTER_CHOICE <= 20) {
    return "Papel";
  } else {
    return "Tijera";
  }
}

function getHumanChoice() {
  const HUMAN_CHOICE = prompt("Piedra, papel o tijera?: ").toLowerCase();
  if (HUMAN_CHOICE === "piedra") {
    return "Piedra";
  } else if (HUMAN_CHOICE === "papel") {
    return "Papel";
  } else if (HUMAN_CHOICE === "tijera") {
    return "Tijera";
  } else {
    console.log("No es una opción válida");
    return getHumanChoice();
  }
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    console.log("Hay empate");
  } else if (computerChoice === "Piedra" && humanChoice === "Tijera") {
    console.log("Perdiste, Piedra le gana a Tijera");
    computerScore++;
  } else if (computerChoice === "Papel" && humanChoice === "Piedra") {
    console.log("Perdiste, Papel le gana a Piedra");
    computerScore++;
  } else if (computerChoice === "Tijera" && humanChoice === "Papel") {
    console.log("Perdiste, Tijera le gana a Papel");
    computerScore++;
  } else {
    console.log(`Ganaste, ${humanChoice} le gana a ${computerChoice}`);
    humanScore++;
  }
}

let humanScore = 0;
let computerScore = 0;
let HUMAN_SELECTION;
let COMPUTER_SELECTION;

function playGame() {
  let contador = 0;

  for (let i = 0; i <= 5; i++) {
    if (contador === 5 && humanScore === computerScore) {
      console.log(`Hay empate ${humanScore} a ${computerScore}`);
    } else if (contador === 5 && humanScore > computerScore) {
      console.log(`Ganaste ${humanScore} a ${computerScore}`);
    } else if (contador === 5 && humanScore < computerScore) {
      console.log(`Perdiste ${computerScore} a ${humanScore}`);
    } else {
      HUMAN_SELECTION = getHumanChoice();
      COMPUTER_SELECTION = getComputerChoice();
      playRound(COMPUTER_SELECTION, HUMAN_SELECTION);
    }
    contador++;
  }
}

playGame();
