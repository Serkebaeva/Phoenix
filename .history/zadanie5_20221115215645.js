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

let myNum = "jkn-3";

function isNegative(n) {
  let n = parseInt(n);
  let num = Math.sign(n);

  if (num === 1 || num === 0) {
	return console.log('+++');
} else if (num === -1 || num === -0) {
	return console.log('---')
}

isNegative();

////////////////////////////////////// 3 ////////////////////////////////////
//3. Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа  3  и запишите его в переменную res

////////////////////////////////////// 4 ////////////////////////////////////
