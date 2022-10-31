let activities = document.getElementById("activitySelector");

function getSum(a, b) {
  let num1 = document.querySelector("#number-1");
  let num2 = document.querySelector("#number-2");

  num1 = +num1.value;
  num2 = +num2.value;

  let result = num1 + num2;

  const output = document.querySelector(".result");
  output.innerText = result;
}

function substract(a, b) {
  let num1 = document.querySelector("#number-1");
  let num2 = document.querySelector("#number-2");

  num1 = +num1.value;
  num2 = +num2.value;

  let result = num1 - num2;

  const output = document.querySelector(".result");
  output.innerText = result;
}

function divide(a, b) {
  let num1 = document.querySelector("#number-1");
  let num2 = document.querySelector("#number-2");

  num1 = +num1.value;
  num2 = +num2.value;

  let result = num1 / num2;

  const output = document.querySelector(".result");
  output.innerText = result;
}

function multiply(a, b) {
  let num1 = document.querySelector("#number-1");
  let num2 = document.querySelector("#number-2");

  num1 = +num1.value;
  num2 = +num2.value;

  let result = num1 * num2;

  const output = document.querySelector(".result");
  output.innerText = result;
}

const btn = document.querySelector("#calculate");
btn.addEventListener("click", getSum);

const select = document.querySelector("#operator");
btn.addEventListener("click", getSum);
