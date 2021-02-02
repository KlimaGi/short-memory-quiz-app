var quizNumEl = document.getElementById("quiz-num");
var numLengthEl = document.getElementById("num-length");
var inputNumEl = document.getElementById("inputMain");

var submitMainEl = document.getElementById("submitMain");

function generateNum(n = 4) {
  let sum = "";
  for (let i = 0; i < n; i++) {
    var skRand = Math.floor(Math.random() * 10);
    sum += skRand;
  }
  return sum;
}
numLengthEl.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    var num = generateNum(numLengthEl.value);
    quizNumEl.innerHTML = num;
  }
});

function check() {
  var checkText =
    quizNumEl.textContent == inputNumEl.value
      ? `<i class="fas fa-check-circle green"></i>`
      : `<i class="fas fa-times-circle red"></i>`;

  document.getElementById("check").innerHTML = checkText;
  return checkText;
}

function numLengthDependency() {
  if (true) {
  }
}

inputMain.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    check();
  }
});
submitMain.addEventListener("click", (e) => {
  e.preventDefault();
  check();
});
