let scoreS = 0;
let scoreL = 0;
let numOfPressedL = document.createElement("p");
let numOfPressedS = document.createElement("p");
let inputVal = document.querySelector("input");
const submitBTn = document.getElementById("submit");
const parentS = document.getElementById("s-parent");
const parentL = document.getElementById("l-parent");

console.log(parentL);

function stop() {
  if (parseInt(numOfPressedS.innerText) > parseInt(numOfPressedL.innerText)) {
    numOfPressedS.innerText = "You Win!";
    numOfPressedL.innerText = "You Failed";
  } else {
    numOfPressedS.innerText = "You Failed!";
    numOfPressedL.innerText = "You Win";
  }
}

function startGame() {
  numOfPressedS.innerText = parseInt(inputVal.value) + scoreS;
  numOfPressedL.innerText = parseInt(inputVal.value) + scoreL;
  parentL.appendChild(numOfPressedL);
  parentS.appendChild(numOfPressedS);
  let myTimeout = setTimeout(() => {
    stop();
    // alert("stop!");
    clearTimeout(myTimeout);
  }, 3000);
}

function keyBoardEvents(e) {
  numOfPressedS.innerText = scoreS;
  numOfPressedL.innerText = scoreL;
  if (e.keyCode === 115) {
    scoreS++;
    console.log(scoreS);
  } else if (e.keyCode === 108) {
    scoreL++;
    console.log(scoreL);
  }
  startGame();
}

document.addEventListener("keypress", keyBoardEvents);
submitBTn.addEventListener("click", startGame);
