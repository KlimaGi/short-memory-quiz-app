const quizNumEl = document.getElementById("quizNum");
const quizNumVisasEl = document.getElementById("quizNumVisas");
const inputNumEl = document.getElementById("inputNum");
const submitEl = document.getElementById("submit");

function randomNum() {
  return Math.floor(Math.random() * 10);
}

var numLength = 5;

function generateNum(n = 4) {
  let generateNum = [];
  for (let i = 0; i < n; i++) {
    generateNum[i] = randomNum();
  }

  return generateNum;
}
var ms = 1000;

function sleep(ms) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < ms);
}

function later() {
  quizNumVisasEl.innerHTML = generateNum();

  for (var i = 0; i < generateNum.length; i++) {
    quizNumEl.innerHTML = generateNum[i];
    sleep(ms);
  }
}

later();

// setInterval(countdown, 1000);
// timer = setTimeout(showNum, 1000);
