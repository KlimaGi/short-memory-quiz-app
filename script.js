var quizNumEl = document.getElementById("quiz-num");
var numLengthEl = document.getElementById("num-length");
var inputNumEl = document.getElementById("inputMain");
var submitNumLengthEl = document.getElementById("submitNumLength");
var submitMainEl = document.getElementById("submitMain");
var resultEl = document.getElementById("result");
// main quiz logic
var numLength = 4;

function generateNum(numLength) {
  let showNum = "";
  for (let i = 0; i < numLength; i++) {
    var skRand = Math.floor(Math.random() * 10);
    showNum += skRand;
  }
  quizNumEl.innerHTML = showNum;
  setTimeout(hide, (numLength * 1000) / 2);
}

function show(event) {
  if (numLengthEl.value == "") {
    event.preventDefault();
    generateNum(numLength);
  } else if (numLengthEl.value != "") {
    event.preventDefault();
    numLength = numLengthEl.value;
    generateNum(numLength);
  }
  inputNumEl.focus();
}

numLengthEl.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    show(event);
  }
});
submitNumLengthEl.addEventListener("click", show, false);

function check() {
  var checkText = "";
  if (quizNumEl.textContent == inputNumEl.value) {
    checkText = `<i class="fas fa-check-circle green"></i>`;
    generateNum(++numLength);
    countResult(numLength);
  } else {
    checkText = `<i class="fas fa-times-circle red"></i>`;
    generateNum(--numLength);
  }

  document.getElementById("check").innerHTML = checkText;
}

var result = 0;
function countResult(numLength) {
  if (numLength > result) {
    result = numLength;
  }
  console.log(result);
  resultEl.innerHTML = result;
}
function submitNum(event) {
  event.preventDefault();
  check();
  inputNumEl.value = "";
  quizNumEl.style.visibility = "visible";
}

inputMain.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    submitNum(event);
  }
});
submitMain.addEventListener("click", submitNum, false);
// additional quiz "features"
function hide() {
  quizNumEl.style.visibility = "hidden";
}
