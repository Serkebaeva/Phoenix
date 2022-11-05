function equals() {
  let num1 = document.querySelector("#number-1");
  let num2 = document.querySelector("#number-2");

  num1 = +num1.value;
  num2 = +num2.value;

  let result = "";

  if (option.value == "+") {
    result = num1 + num2;
  } else if (option.value == "-") {
    result = num1 - num2;
  } else if (option.value == "*") {
    result = num1 * num2;
  } else if (option.value == "/") {
    result = num1 / num2;
  }
  /*switch (result) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
  }*/

  const output = document.querySelector(".result");
  output.innerText = result;
}

const btn = document.querySelector("#calculate");
btn.addEventListener("click", equals);
