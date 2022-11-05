function equals(a, b) {
  let num1 = document.querySelector("#number-1");
  let num2 = document.querySelector("#number-2");

  num1 = +num1.value;
  num2 = +num2.value;

  let result = "";

  let operator = document.getElementById("#operator");
  let value = operator.options[e.selectedIndex].value;

  if (value == "+") {
    result = num1 + num2;
  } else if (value == "-") {
    result = num1 - num2;
  } else if (value == "*") {
    result = num1 * num2;
  } else if (value == "/") {
    result = num1 / num2;
  }

  const output = document.querySelector(".result");
  output.innerText = result;
}

const btn = document.querySelector("#calculate");
btn.addEventListener("click", equals);
