const btnEl = document.getElementsByClassName("palette");
const title = document.querySelector("h1");
const scoreBoard = document.getElementById("score");
let score = 0;
scoreBoard.innerHTML = score;

function updateScore(num) {
  score += num;
  scoreBoard.innerHTML = score;
}

const selection = ["fire", "rock", "paper", "scissors", "water"];

for (let b of btnEl) {
  b.addEventListener("click", () => {
    let comp = selection[randomNum()];
    let fate = play(b.innerHTML, comp);
    title.innerHTML = `${fate} - we picked: ${comp}`;
    title.style.color = `var(--${b.name})`;
  });
}

function randomNum() {
  return Math.floor(Math.random() * 5);
}

function play(human, robot) {
  let yourFate = "";
  if (human === robot) {
    yourFate = "draw";
  } else {
    switch (human) {
      case "fire":
        if (robot === "water") {
          yourFate = "you lose";
          updateScore(-1);
        } else {
          yourFate = "you win";
          updateScore(1);
        }
        break;
      case "water":
        if (robot === "fire") {
          yourFate = "you win";
          updateScore(1);
        } else {
          yourFate = "you lose";
          updateScore(-1);
        }
        break;
      case "rock":
        if (robot === "fire" || robot === "paper") {
          yourFate = "you lose";
          updateScore(-1);
        } else {
          yourFate = "you win";
          updateScore(1);
        }
        break;
      case "paper":
        if (robot === "fire" || robot === "scissors") {
          yourFate = "you lose";
          updateScore(-1);
        } else {
          yourFate = "you win";
          updateScore(1);
        }
        break;
      case "scissors":
        if (robot === "fire" || robot === "rock") {
          yourFate = "you lose";
          updateScore(-1);
        } else {
          yourFate = "you win";
          updateScore(1);
        }
        break;
    }
  }

  return yourFate;
}
