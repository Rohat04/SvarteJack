let playerTotal = 0;
let dealerTotal = 0;

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

hitButton.addEventListener("click", hitMe);
stayButton.addEventListener("click", stayB);

function hitMe() {
  playerTotal += Math.floor(Math.random() * 14 + 2);
  
  
  if (playerTotal == 21) {
    alert("YOU WON!!!!");
    playerTotal = 0;
  } else if (playerTotal > 21) {
    alert("you lose");
    playerTotal = 0;
  }
  document.querySelector(".player-score").innerHTML = playerTotal;
}

function stayB() {
    dealerTotal += Math.floor(Math.random() * 14 + 2);

    document.querySelector(".dealer-score").innerHTML = dealerTotal;
    document.querySelector(".player-score").innerHTML = playerTotal;

    if (playerTotal > dealerTotal){
        alert("YOU WON!!!!");
        playerTotal = 0;
        dealerTotal = 0;
    } else {
        alert("You lost!");
        playerTotal = 0;
        dealerTotal = 0;
    }
    document.querySelector(".dealer-score").innerHTML = dealerTotal;
    document.querySelector(".player-score").innerHTML = playerTotal;
  }

