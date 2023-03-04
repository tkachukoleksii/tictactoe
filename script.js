"use strict";

const sqAll = document.querySelectorAll(".sq");
const xAll = document.querySelectorAll(".x");
const oAll = document.querySelectorAll(".o");

const gameStatus = document.querySelector(".status");
const btnNew = document.querySelector(".btn--new");
const author = document.querySelector(".author");

let field = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
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

const winState = function () {
  gameStatus.textContent = `${activePlayer === "x" ? "X" : "O"} wins! 🍾`;
  document.querySelector("body").style.transition = "all, 0.3s";
  document.querySelector("body").style.backgroundColor = "#8CFBDE";
  btnNew.style.color = "#8CFBDE";
  gameStateOn = false;
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

const checkDiagonal = function () {
  let toRight = true;
  let toLeft = true;
  let winSquaresToRight = [];
  let winSquaresToLeft = [];

  for (let row = 0; row < field.length; row++) {
    toRight &&= !document
      .querySelector(`.sq${field[row][row]}--${activePlayer}`)
      .classList.contains("hidden");

    if (toRight) winSquaresToRight.push(field[row][row]);

    toLeft &&= !document
      .querySelector(
        `.sq${field[field.length - row - 1][row]}--${activePlayer}`
      )
      .classList.contains("hidden");

    if (toLeft) winSquaresToLeft.push(field[field.length - row - 1][row]);
  }

  if (toRight) {
    for (const square of winSquaresToRight) {
      document.querySelector(`.sq--${square}`).style.backgroundColor =
        "#8CFBDE";
    }
    return true;
  } else if (toLeft) {
    for (const square of winSquaresToLeft) {
      document.querySelector(`.sq--${square}`).style.backgroundColor =
        "#8CFBDE";
    }
    return true;
  } else {
    return false;
  }
};

const checkRowsCols = function () {
  for (let row = 0; row < field.length; row++) {
    let rows = true;
    let cols = true;
    let winSquaresRows = [];
    let winSquaresCols = [];

    for (let col = 0; col < field.length; col++) {
      rows &&= !document
        .querySelector(`.sq${field[row][col]}--${activePlayer}`)
        .classList.contains("hidden");

      if (rows) winSquaresRows.push(field[row][col]);

      cols &&= !document
        .querySelector(`.sq${field[col][row]}--${activePlayer}`)
        .classList.contains("hidden");

      if (cols) winSquaresCols.push(field[col][row]);
    }

    if (rows) {
      for (const square of winSquaresRows) {
        document.querySelector(`.sq--${square}`).style.backgroundColor =
          "#8CFBDE";
      }
      return true;
    } else if (cols) {
      for (const square of winSquaresCols) {
        document.querySelector(`.sq--${square}`).style.backgroundColor =
          "#8CFBDE";
      }
      return true;
    }
  }

  return false;
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

for (const square of sqAll) {
  square.addEventListener("click", function () {
    if (gameStateOn) {
      activeSquare = square.className.slice(-1);
      if (isIconHidden(activeSquare)) {
        showIcon();
        if (checkDiagonal() || checkRowsCols()) {
          winState();
        } else {
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
