var rounds = 0;
var pScore = 0;
var cScore = 0;

function round_play(playerSelection, computerSelection, pScore, cScore) {
  if (playerSelection == "r") {
    if (computerSelection == "p") {
      let s = "Sorry, you lose.";
      cScore += 1;
      return s;
    } else if (computerSelection == "s") {
      let s = "You win!";
      pScore += 1;
      return s;
    } else if (computerSelection == "r") {
      let s = "You tied.";
      return s;
    }
  } else if (playerSelection == "p") {
    if (computerSelection == "s") {
      let s = "Sorry, you lose.";
      cScore += 1;
      return s;
    } else if (computerSelection == "r") {
      let s = "You win!";
      pScore += 1;
      return s;
    } else if (computerSelection == "p") {
      let s = "You tied.";
      return s;
    }
  } else if (playerSelection == "s") {
    if (computerSelection == "r") {
      let s = "Sorry, you lose.";
      cScore += 1;
      return s;
    } else if (computerSelection == "p") {
      let s = "You win!";
      pScore += 1;
      return s;
    } else if (computerSelection == "s") {
      let s = "You tied.";
      return s;
    }
  }
}

function rand() {
  let options = Array("r", "p", "s");
  let selection = options[Math.floor(Math.random() * options.length)];
  return selection;
}

function run() {
  let playerInput = prompt("Enter your selection ('r','s','p'):");
  let compInput = rand();
  let your = "Your Score: " + pScore;
  let comp = "Computer Score: " + cScore;
  console.log(round_play(playerInput, compInput));
  console.log(your);
  console.log(comp);
}
