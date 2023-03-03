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
  if (
    !document
      .querySelector(`.sq0--${activePlayer}`)
      .classList.contains("hidden") &&
    !document
      .querySelector(`.sq1--${activePlayer}`)
      .classList.contains("hidden") &&
    !document
      .querySelector(`.sq2--${activePlayer}`)
      .classList.contains("hidden")
  ) {
    winState();
    sq0.style.backgroundColor = "#8CFBDE";
    sq1.style.backgroundColor = "#8CFBDE";
    sq2.style.backgroundColor = "#8CFBDE";
  } else if (
    !document
      .querySelector(`.sq3--${activePlayer}`)
      .classList.contains("hidden") &&
    !document
      .querySelector(`.sq4--${activePlayer}`)
      .classList.contains("hidden") &&
    !document
      .querySelector(`.sq5--${activePlayer}`)
      .classList.contains("hidden")
  ) {
    winState();
    sq3.style.backgroundColor = "#8CFBDE";
    sq4.style.backgroundColor = "#8CFBDE";
    sq5.style.backgroundColor = "#8CFBDE";
  } else if (
    !document
      .querySelector(`.sq6--${activePlayer}`)
      .classList.contains("hidden") &&
    !document
      .querySelector(`.sq7--${activePlayer}`)
      .classList.contains("hidden") &&
    !document
      .querySelector(`.sq8--${activePlayer}`)
      .classList.contains("hidden")
  ) {
    winState();
    sq6.style.backgroundColor = "#8CFBDE";
    sq7.style.backgroundColor = "#8CFBDE";
    sq8.style.backgroundColor = "#8CFBDE";
  } else if (
    !document
      .querySelector(`.sq0--${activePlayer}`)
      .classList.contains("hidden") &&
    !document
      .querySelector(`.sq3--${activePlayer}`)
      .classList.contains("hidden") &&
    !document
      .querySelector(`.sq6--${activePlayer}`)
      .classList.contains("hidden")
  ) {
    winState();
    sq0.style.backgroundColor = "#8CFBDE";
    sq3.style.backgroundColor = "#8CFBDE";
    sq6.style.backgroundColor = "#8CFBDE";
  } else if (
    !document
      .querySelector(`.sq1--${activePlayer}`)
      .classList.contains("hidden") &&
    !document
      .querySelector(`.sq4--${activePlayer}`)
      .classList.contains("hidden") &&
    !document
      .querySelector(`.sq7--${activePlayer}`)
      .classList.contains("hidden")
  ) {
    winState();
    sq1.style.backgroundColor = "#8CFBDE";
    sq4.style.backgroundColor = "#8CFBDE";
    sq7.style.backgroundColor = "#8CFBDE";
  } else if (
    !document
      .querySelector(`.sq2--${activePlayer}`)
      .classList.contains("hidden") &&
    !document
      .querySelector(`.sq5--${activePlayer}`)
      .classList.contains("hidden") &&
    !document
      .querySelector(`.sq8--${activePlayer}`)
      .classList.contains("hidden")
  ) {
    winState();
    sq2.style.backgroundColor = "#8CFBDE";
    sq5.style.backgroundColor = "#8CFBDE";
    sq8.style.backgroundColor = "#8CFBDE";
  } else if (
    !document
      .querySelector(`.sq0--${activePlayer}`)
      .classList.contains("hidden") &&
    !document
      .querySelector(`.sq4--${activePlayer}`)
      .classList.contains("hidden") &&
    !document
      .querySelector(`.sq8--${activePlayer}`)
      .classList.contains("hidden")
  ) {
    winState();
    sq0.style.backgroundColor = "#8CFBDE";
    sq4.style.backgroundColor = "#8CFBDE";
    sq8.style.backgroundColor = "#8CFBDE";
  } else if (
    !document
      .querySelector(`.sq2--${activePlayer}`)
      .classList.contains("hidden") &&
    !document
      .querySelector(`.sq4--${activePlayer}`)
      .classList.contains("hidden") &&
    !document
      .querySelector(`.sq6--${activePlayer}`)
      .classList.contains("hidden")
  ) {
    winState();
    sq2.style.backgroundColor = "#8CFBDE";
    sq4.style.backgroundColor = "#8CFBDE";
    sq6.style.backgroundColor = "#8CFBDE";
  } else if (checkDraw()) {
    gameStatus.textContent = `A draw. 🤷`;
    gameStateOn = false;
  } else {
    switchPlayer();
  }
};

sq0.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "0";
    if (isIconHidden(activeSquare)) {
      showIcon();
      checkWinner();
    }
  }
});

sq1.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "1";
    if (isIconHidden(activeSquare)) {
      showIcon();
      checkWinner();
    }
  }
});

sq2.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "2";
    if (isIconHidden(activeSquare)) {
      showIcon();
      checkWinner();
    }
  }
});

sq3.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "3";
    if (isIconHidden(activeSquare)) {
      showIcon();
      checkWinner();
    }
  }
});

sq4.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "4";
    if (isIconHidden(activeSquare)) {
      showIcon();
      checkWinner();
    }
  }
});

sq5.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "5";
    if (isIconHidden(activeSquare)) {
      showIcon();
      checkWinner();
    }
  }
});

sq6.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "6";
    if (isIconHidden(activeSquare)) {
      showIcon();
      checkWinner();
    }
  }
});

sq7.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "7";
    if (isIconHidden(activeSquare)) {
      showIcon();
      checkWinner();
    }
  }
});

sq8.addEventListener("click", function () {
  if (gameStateOn) {
    activeSquare = "8";
    if (isIconHidden(activeSquare)) {
      showIcon();
      checkWinner();
    }
  }
});

btnNew.addEventListener("click", init);
