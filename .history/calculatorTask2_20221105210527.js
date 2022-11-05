function equals(num1, num2) {
  let num1 = document.querySelector("#number-1");
  let num2 = document.querySelector("#number-2");

  num1 = +num1.value;
  num2 = +num2.value;

  let result = "";

  let operator = document.getElementById;
  ("#operator");

  const output = document.querySelector(".result");
  output.innerText = result;
}

const btn = document.querySelector("#calculate");
btn.addEventListener("click", equals);
