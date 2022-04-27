let dealerScore = document.querySelector(".dealer-score");
let playerScore = document.querySelector(".player-score");

let playerTotal = 0;
let dealerTotal = Math.floor(Math.random() * 14 + 2);
dealerScore.innerHTML = dealerTotal;

/*
let player1Total = 0;
let player2Total = 0;
let player3Total = 0;
let player4Total = 0;
let player5Total = 0;

detta är varför man användrr variabler istället för den där uppe
let players = [ 0, 0, 0, 0, 0 ];
*/

const hitButton = document.querySelector(".hit-btn");
const stayButton = document.querySelector(".stay-btn");
const restartButton = document.querySelector(".restart-btn");
const playStatusText = document.querySelector(".play-status");

hitButton.addEventListener("click", hitMe);
stayButton.addEventListener("click", stayB);

function hitMe() {
  playerTotal += Math.floor(Math.random() * 14 + 2);
  playerScore.innerHTML = playerTotal;
  if (playerTotal == 21) {
    hitButton.disabled = true;
    stayButton.disabled = true;
    playStatusText.innerHTML = "You won!";
  } else if (playerTotal > 21) {
    hitButton.disabled = true;
    stayButton.disabled = true;
    playStatusText.innerHTML = "You lost!";
  }
}

function stayB() {
  dealerTotal += Math.floor(Math.random() * 14 + 2);
  dealerScore.innerHTML = dealerTotal;
  hitButton.disabled = true;
  if (dealerTotal >= playerTotal && dealerTotal <= 21) {
    hitButton.disabled = true;
    playStatusText.innerHTML = "You lost!";
    stayButton.disabled = true;
  } else if (dealerTotal == 21) {
    hitButton.disabled = true;
    stayButton.disabled = true;
    playStatusText.innerHTML = "You lost!";
  } else {
    //lägg koden nedanför i else if
    dealerTotal > 21;
    hitButton.disabled = true;
    stayButton.disabled = true;
    playStatusText.innerHTML = "You won!";
  }
  dealerScore.innerHTML = dealerTotal;
  document.querySelector(".player-score").innerHTML = playerTotal;
}

/*
function stayB() {
  dealerTotal += Math.floor(Math.random() * 14 + 2);
  dealerScore.innerHTML = dealerTotal;
  document.querySelector(".player-score").innerHTML = playerTotal;

  if (dealerTotal > playerTotal) {
    hitButton.disabled = true;
    stayButton.disabled = true;
    playStatusText.innerHTML = "You lost all your hard earned money!";
  } else if (dealerTotal > 21) {
    hitButton.disabled = true;
    stayButton.disabled = true;
    playStatusText.innerHTML = "You Won!!!!";
  }
  dealerScore.innerHTML = dealerTotal;
  document.querySelector(".player-score").innerHTML = playerTotal;
}

function restartB() {
  playerTotal = 0;
  dealerTotal = 0;
}
*/
