let currentPlayer = "X";
let winnerDeclared = false;
let winner = document.getElementById("winner");
let gameState = ["", "", "", "", "", "", "", "", ""];
let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//handle my click
function handleClick() {
  let td = event.target;
  console.log(td);
  let index = td.getAttribute("index");
  //check if empty
  if (td.innerHTML == "" && winnerDeclared == false) {
    //writing the symbol
    td.innerHTML = currentPlayer;
    gameState[index] = currentPlayer;

    //check for winner
    checkWinner();
    checkDraw();
    changePlayer();
  }
}

function changePlayer() {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
}

//check for winner

function checkWinner() {
  for (let i = 0; i < 8; i++) {
    var a = winConditions[i][0];
    var b = winConditions[i][1];
    var c = winConditions[i][2];

    if (
      gameState[a] == currentPlayer &&
      gameState[b] == currentPlayer &&
      gameState[c] == currentPlayer
    ) {
      winner.innerHTML = "Winner is " + currentPlayer;
      winnerDeclared = true;
    }
  }
}

//check for draw
function checkDraw() {
  if (!gameState.includes("") && winnerDeclared == false) {
    winner.innerHTML = "Game is tied";
  }
}

function init() {
  var tdcells = document.getElementsByTagName("td");

  for (let i = 0; i < 9; i++) {
    tdcells[i].addEventListener("click", handleClick);
  }
}

init();
