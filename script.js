"use strict";

const sqAll = document.querySelectorAll(".sq");
const xAll = document.querySelectorAll(".x");
const oAll = document.querySelectorAll(".o");

const sq0 = document.querySelector(".sq--0");
const sq1 = document.querySelector(".sq--1");
const sq2 = document.querySelector(".sq--2");
const sq3 = document.querySelector(".sq--3");
const sq4 = document.querySelector(".sq--4");
const sq5 = document.querySelector(".sq--5");
const sq6 = document.querySelector(".sq--6");
const sq7 = document.querySelector(".sq--7");
const sq8 = document.querySelector(".sq--8");

const gameStatus = document.querySelector(".status");
const btnNew = document.querySelector(".btn--new");
const author = document.querySelector(".author");

const combinations = [
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
  for (const combo of combinations) {
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

const runResult = function () {
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
};

sq0.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "0";
    runResult();
  }
});

sq1.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "1";
    runResult();
  }
});

sq2.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "2";
    runResult();
  }
});

sq3.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "3";
    runResult();
  }
});

sq4.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "4";
    runResult();
  }
});

sq5.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "5";
    runResult();
  }
});

sq6.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "6";
    runResult();
  }
});

sq7.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "7";
    runResult();
  }
});

sq8.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "8";
    runResult();
  }
});

btnNew.addEventListener("click", init);
