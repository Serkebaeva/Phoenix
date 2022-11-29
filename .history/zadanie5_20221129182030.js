//# Задание 5
////////////////////////////////////// 1 ////////////////////////////////////
//1 Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.

let myNum = parseInt(3);

function exponentiationToCube(numberToBeCubed) {
  return Math.pow(numberToBeCubed, 3);
}

console.log(exponentiationToCube(myNum));
