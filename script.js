"use strict";

const sqAll = document.querySelectorAll(".sq");
const xAll = document.querySelectorAll(".x");
const oAll = document.querySelectorAll(".o");

const gameStatus = document.querySelector(".status");
const btnNew = document.querySelector(".btn--new");
const author = document.querySelector(".author");

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let activePlayer;
let activeSquare;
let gameStateOn;

gameStatus.textContent = "Are you ready? 😆";

const init = function () {
  gameStateOn = true;
  activeSquare = undefined;
  activePlayer = "x";
  gameStatus.textContent = "X makes first move! 🚀";
  document.querySelector(".container").classList.add("margin-animation");
  document.querySelector("body").style.backgroundColor = "#d8dcff";
  author.style.color = "#d8dcff";
  btnNew.style.color = "#d8dcff";

  btnNew.textContent === "Start"
    ? (btnNew.textContent = "New game")
    : (btnNew.textContent = "New game");

  for (let i = 0; i < xAll.length; i++) {
    document.querySelector(`.sq${[i]}--x`).classList.add("hidden");
  }

  for (let i = 0; i < oAll.length; i++) {
    document.querySelector(`.sq${[i]}--o`).classList.add("hidden");
  }

  for (let i = 0; i < sqAll.length; i++) {
    sqAll[i].style.backgroundColor = "#aeadf0";
  }
};

const isIconHidden = function (square) {
  if (
    !document.querySelector(`.sq${square}--x`).classList.contains("hidden") ||
    !document.querySelector(`.sq${square}--o`).classList.contains("hidden")
  ) {
    return false;
  } else {
    return true;
  }
};

const showIcon = function () {
  if (isIconHidden(activeSquare)) {
    document
      .querySelector(`.sq${activeSquare}--${activePlayer}`)
      .classList.remove("hidden");
  } else {
    return;
  }
};

const switchPlayer = function () {
  if (activePlayer === "x") {
    activePlayer = "o";
    gameStatus.textContent = "O makes a move... ⏱️";
  } else {
    activePlayer = "x";
    gameStatus.textContent = "X makes a move... ⏱️";
  }
};

const winState = function () {
  gameStatus.textContent = `${activePlayer === "x" ? "X" : "O"} wins! 🍾`;
  document.querySelector("body").style.transition = "all, 0.3s";
  document.querySelector("body").style.backgroundColor = "#8CFBDE";
  btnNew.style.color = "#8CFBDE";
  gameStateOn = false;
};

const checkDraw = function () {
  let y = 0;
  for (let i = 0; i < xAll.length; i++) {
    if (!isIconHidden([i])) {
      y++;
    }

    if (y === xAll.length) return true;
  }
};

const checkWinner = function () {
  for (const combo of winCombinations) {
    if (
      !document
        .querySelector(`.sq${combo[0]}--${activePlayer}`)
        .classList.contains("hidden") &&
      !document
        .querySelector(`.sq${combo[1]}--${activePlayer}`)
        .classList.contains("hidden") &&
      !document
        .querySelector(`.sq${combo[2]}--${activePlayer}`)
        .classList.contains("hidden")
    ) {
      document.querySelector(`.sq--${combo[0]}`).style.backgroundColor =
        "#8CFBDE";
      document.querySelector(`.sq--${combo[1]}`).style.backgroundColor =
        "#8CFBDE";
      document.querySelector(`.sq--${combo[2]}`).style.backgroundColor =
        "#8CFBDE";
      winState();
      return true;
    }
  }
};

for (const square of sqAll) {
  square.addEventListener("click", function () {
    if (gameStateOn) {
      activeSquare = square.className.slice(-1);
      if (isIconHidden(activeSquare)) {
        showIcon();
        if (!checkWinner()) {
          if (checkDraw()) {
            gameStatus.textContent = `A draw. 🤷`;
            gameStateOn = false;
          } else {
            switchPlayer();
          }
        }
      }
    }
  });
}

btnNew.addEventListener("click", init);
