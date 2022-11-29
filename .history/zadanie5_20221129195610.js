//# Задание 5
////////////////////////////////////// 1 ////////////////////////////////////
//1 Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.

/*let myNum = parseInt(4);

function exponentiationToCube(numberToBeCubed) {
  return Math.pow(numberToBeCubed, 3);
}

console.log(exponentiationToCube(myNum));*/

////////////////////////////////////// 2 ////////////////////////////////////
//2. Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'

/*let userNum = -0;

function isNegative(n) {
  let num = Math.sign(n);

  if (num === 1 || num === 0) {
    return console.log("+++");
  } else if (num === -1 || num === -0) {
    return console.log("---");
  }
}

isNegative(userNum);*/

////////////////////////////////////// 3 ////////////////////////////////////
//3. Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа  3  и запишите его в переменную res

/*let res = Cube(3);

function Cube(num) {
  return Math.pow(num, 3);
}

console.log(res);*/

/////////////////////////////////////// 4 ///////////////////////////////////
/* Сделайте функцию, которая будет принимать число, а возвращать это число прописью. Пусть функция работает с числами до 999. Смотрите пример: func(123);  выведет 'сто двадцать три' */
function number_to_string(_number) {
  var _arr_numbers = new Array();
  _arr_numbers[1] = new Array(
    "",
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
    "десять",
    "одиннадцать",
    "двенадцать",
    "тринадцать",
    "четырнадцать",
    "пятнадцать",
    "шестнадцать",
    "семнадцать",
    "восемнадцать",
    "девятнадцать"
  );
  _arr_numbers[2] = new Array(
    "",
    "",
    "двадцать",
    "тридцать",
    "сорок",
    "пятьдесят",
    "шестьдесят",
    "семьдесят",
    "восемьдесят",
    "девяносто"
  );
  _arr_numbers[3] = new Array(
    "",
    "сто",
    "двести",
    "триста",
    "четыреста",
    "пятьсот",
    "шестьсот",
    "семьсот",
    "восемьсот",
    "девятьсот"
  );
  function number_parser(_num, _desc) {
    var _string = "";
    var _num_hundred = "";
    if (_num.length == 3) {
      _num_hundred = _num.substr(0, 1);
      _num = _num.substr(1, 3);
      _string = _arr_numbers[3][_num_hundred] + " ";
    }
    if (_num < 20) _string += _arr_numbers[1][parseFloat(_num)] + " ";
    else {
      var _first_num = _num.substr(0, 1);
      var _second_num = _num.substr(1, 2);
      _string +=
        _arr_numbers[2][_first_num] + " " + _arr_numbers[1][_second_num] + " ";
    }
    switch (_desc) {
      case 0:
        var _last_num = parseFloat(_num.substr(-1));
        if (_last_num == 1) _string += "сом";
        else if (_last_num > 1 && _last_num < 5) _string += "сома";
        else _string += "сомов";
        break;
      case 1:
        var _last_num = parseFloat(_num.substr(-1));
        if (_last_num == 1) _string += "тысяча ";
        else if (_last_num > 1 && _last_num < 5) _string += "тысячи ";
        else _string += "тысяч ";
        _string = _string.replace("один ", "одна ");
        _string = _string.replace("два ", "две ");
        break;
      case 2:
        var _last_num = parseFloat(_num.substr(-1));
        if (_last_num == 1) _string += "миллион ";
        else if (_last_num > 1 && _last_num < 5) _string += "миллиона ";
        else _string += "миллионов ";
        break;
      case 3:
        var _last_num = parseFloat(_num.substr(-1));
        if (_last_num == 1) _string += "миллиард ";
        else if (_last_num > 1 && _last_num < 5) _string += "миллиарда ";
        else _string += "миллиардов ";
        break;
    }
    _string = _string.replace("  ", " ");
    return _string;
  }
  function decimals_parser(_num) {
    var _first_num = _num.substr(0, 1);
    var _second_num = parseFloat(_num.substr(1, 2));
    var _string = " " + _first_num + _second_num;
    if (_second_num == 1) _string += " тыйын";
    else if (_second_num > 1 && _second_num < 5) _string += " тыйына";
    else _string += " тыйынов";
    return _string;
  }
  if (!_number || _number == 0) return false;
  if (typeof _number !== "number") {
    _number = _number.replace(",", ".");
    _number = parseFloat(_number);
    if (isNaN(_number)) return false;
  }
  _number = _number.toFixed(2);
  if (_number.indexOf(".") != -1) {
    var _number_arr = _number.split(".");
    var _number = _number_arr[0];
    var _number_decimals = _number_arr[1];
  }
  var _number_length = _number.length;
  var _string = "";
  var _num_parser = "";
  var _count = 0;
  for (var _p = _number_length - 1; _p >= 0; _p--) {
    var _num_digit = _number.substr(_p, 1);
    _num_parser = _num_digit + _num_parser;
    if (
      (_num_parser.length == 3 || _p == 0) &&
      !isNaN(parseFloat(_num_parser))
    ) {
      _string = number_parser(_num_parser, _count) + _string;
      _num_parser = "";
      _count++;
    }
  }
  if (_number_decimals) _string += decimals_parser(_number_decimals);
  return _string;
}

console.log(`"Сумма_прописью: ${number_to_string(6952.62)}"`);
