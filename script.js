var quizNumEl = document.getElementById("quiz-num");
var numLengthEl = document.getElementById("num-length");
var inputNumEl = document.getElementById("inputMain");
var submitMainEl = document.getElementById("submitMain");
var resultEl = document.getElementById("result");
// main quiz logic
var n = 4;
function generateNum(n) {
  let sum = "";
  for (let i = 0; i < n; i++) {
    var skRand = Math.floor(Math.random() * 10);
    sum += skRand;
  }
  quizNumEl.innerHTML = sum;
  setTimeout(hide, (n * 1000) / 2);
}
numLengthEl.addEventListener("keyup", (e) => {
  if (e.keyCode === 13 && numLengthEl.value == "") {
    e.preventDefault();
    generateNum(n);
  } else if (e.keyCode === 13 && numLengthEl.value != "") {
    e.preventDefault();
    n = numLengthEl.value;
    generateNum(n);
  }
});

function check() {
  var checkText = "";
  if (quizNumEl.textContent == inputNumEl.value) {
    checkText = `<i class="fas fa-check-circle green"></i>`;
    generateNum(++n);
  } else {
    checkText = `<i class="fas fa-times-circle red"></i>`;
    generateNum(--n);
  }

  document.getElementById("check").innerHTML = checkText;
}

inputMain.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    check();
    inputNumEl.value = "";
    quizNumEl.style.color = "black";
  }
});
submitMain.addEventListener("click", (e) => {
  e.preventDefault();
  check();
  inputNumEl.value = "";
  quizNumEl.style.color = "black";
});
// additional quiz "features"
function hide() {
  quizNumEl.style.color = "white";
}
