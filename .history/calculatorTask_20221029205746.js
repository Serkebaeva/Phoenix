/*let result = num1 + num2;

const output = document.querySelector(".result");
output.innerText = result;*/

function getSum(a, b) {
  let num1 = document.querySelector("#number-1");
  let num2 = document.querySelector("#number-2");

  num1 = +num1.value;
  num2 = +num2.value;
}

const btn = document.querySelector("#calculate");
btn.addEventListener("click", getSum);
