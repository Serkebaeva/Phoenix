function equals(a, b) {
  let num1 = document.querySelector("#number-1");
  let num2 = document.querySelector("#number-2");

  num1 = +num1.value;
  num2 = +num2.value;

  let result;

  switch (this.operation) {
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
  }

  const output = document.querySelector(".result");
  output.innerText = result;
}

const btn = document.querySelector("#calculate");
btn.addEventListener("click", equals());
