const topRight = document.getElementById("topRight");
const topCenter = document.getElementById("topCenter");
const topLeft = document.getElementById("topLeft");
const centerRight = document.getElementById("centerRight");
const centerMiddle = document.getElementById("centerMiddle");
const centerLeft = document.getElementById("centerLeft");
const bottomRight = document.getElementById("bottomRight");
const bottomMiddle = document.getElementById("bottomMiddle");
const bottomLeft = document.getElementById("bottomLeft");

let playerOneTurn = true;
let playerTwoTurn = false;

function turn(e) {
  if (playerOneTurn === true) {
    e.target.innerHTML = "X";
    playerOneTurn = false;
    playerTwoTurn = true;
  } else {
    e.target.innerHTML = "O";
    playerTwoTurn = false;
    playerOneTurn = true;
  }
}

topRight.addEventListener("click", turn);
topCenter.addEventListener("click", turn);
topLeft.addEventListener("click", turn);
centerRight.addEventListener("click", turn);
centerMiddle.addEventListener("click", turn);
centerRight.addEventListener("click", turn);
centerLeft.addEventListener("click", turn);
bottomRight.addEventListener("click", turn);
bottomMiddle.addEventListener("click", turn);
bottomLeft.addEventListener("click", turn);
