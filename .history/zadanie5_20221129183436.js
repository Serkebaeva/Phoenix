//# Задание 5
////////////////////////////////////// 1 ////////////////////////////////////
//1 Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.

/*let myNum = parseInt(3);

function exponentiationToCube(numberToBeCubed) {
  return Math.pow(numberToBeCubed, 3);
}

console.log(exponentiationToCube(myNum));*/

////////////////////////////////////// 2 ////////////////////////////////////
//2. Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'

let userNum = 2;

function isNegative(n) {
  let n = Math.sign;

  if (n === 1 || n === 0) {
    return console.log("+++");
  } else if (n === -1 || n === -0) {
    return console.log("---");
  }
}

isNegative(userNum);