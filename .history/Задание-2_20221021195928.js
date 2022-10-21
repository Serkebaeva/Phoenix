////////////////////////////------------1-------------//////////////////////////
/*Ваша задача состоит в том, чтобы создать 8 переменных с помощью let, которые будут представлять 8 разных типов данных. Каждую из этих переменных требуется явно преобразовать к 3-м типам: к number, boolean и string. Конечные значения выведите в консоль.*/
/*let userName = "Aiza";
console.log(Number(userName), Boolean(userName), String(userName));
let phoneNumber = "+996 555 555555";
console.log(Number(phoneNumber), Boolean(phoneNumber), String(phoneNumber));
let hasEmail = true;
console.log(Number(hasEmail), Boolean(hasEmail), String(hasEmail));
let myBigInt = 50025664857826652212021n;
console.log(Number(myBigInt), Boolean(myBigInt), String(myBigInt));
let someNullVariable = null;
console.log(
	Number(someNullVariable),
	Boolean(someNullVariable),
	String(someNullVariable)
);
let someUndefinedVar = undefined;
console.log(
	Number(someUndefinedVar),
	Boolean(someUndefinedVar),
  String(someUndefinedVar)
  );
let myGroup = ["Aizada", "Adilet", "Diana", "Erkin"];
console.log(Number(myGroup), Boolean(myGroup), String(myGroup));*/

////////////////////////////------------2-------------//////////////////////////
//b. Население Москвы равняется а=9000000 жителей. Население Нью-Васюков равняется b=1000 жителей. Напишите программу, которая определяет разницу в числе жителей между двумя городами. Используйте переменные величины.//
/*let MoscowHabbitats = 9000000;
let newVasukovHabbitats = 1000;

let difference = MoscowHabbitats - newVasukovHabbitats;
console.log(difference);*/

//c. В углу прямоугольного двора размером 50х30 стоит прямоугольный дом размером 20х10. Подсчитать площадь дома, свободную площадь двора и длину забора. Примечание: в углу, где дом, забора нет.
/*let yardWidth = 50;
let yardHeight = 30;
let houseWidth = 20;
let houseHeight = 10;

let houseSquare = houseHeight * houseWidth;
console.log(houseSquare);

let yardSquare = yardWidth * yardHeight;
console.log(yardSquare);

function freeYardSpace(result = yardSquare - houseSquare) {
  console.log(result);
}
freeYardSpace();

let fenceLengthTotal = yardSquare / yardWidth;
console.log(fenceLengthTotal);

let fenceLengthOfHouse = houseSquare / houseWidth;
console.log(fenceLengthOfHouse);

function fenceLength(
  fenceLengthBrutto = fenceLengthTotal - fenceLengthOfHouse
) {
  console.log(fenceLengthBrutto);
}
fenceLength();*/

//d. Автомобиль 3 часа ехал со скоростью 80 км/час и 2 часа со скоростью 90 км/час. Вычислить среднюю ско-рость автомобиля (она равна суммарному пути, деленному на суммарное время) //

/*let distance1 = 3 * 80;
console.log(distance1);
let distance2 = 2 * 90;
console.log(distance2);
let distanceTotal = distance1 + distance2;
let totalHours = 3 + 2;

function averageSpeed(result = distanceTotal / totalHours) {
  console.log(result);
}
averageSpeed();*/

//e. Напишите программу для следующей задачи: Компьютер спрашивает названия двух планет, радиусы их орбит (в миллионах километров) и скорости движения по орбите (в миллионах километров в сутки). Компьютер вы-числяет продолжительность года на планетах и выдает результат в в консоли в виде: Продолжительность года на планете Земля – 365 суток, а на планете Эоэлла – 12 суток //

/*let planet1 = Number(prompt("Назовите первую планету", "Земля"));
let radius1 = Number(prompt("Назовите радиус орбиты первой планеты", "149,6"));
let orbitalSpeed1 = Number(
  prompt("Назовите скорость движения по орбите", "29,765")
);

let planet2 = Number(prompt("Назовите Вторую планету", "Эоэлла"));
let radius2 = Number(prompt("Назовите радиус орбиты второй планеты", "12"));*/
/*let orbitalSpeed2 = Number(
  prompt("Назовите скорость движения по орбите", "29,765")
);*/

//*****T=2пr/v ******
//*****365 = 2*3,14* 149,6 / х */
//***х = 2*3,14* 149,6 / 365 ***////
//***12 =  2*3,14* 149,6 / х */
//***х = 2*3,14* 149,6 / 12 ***////
/*T=2пr/v
T-продолжительность года
п-число пи (3,14)
r-радиус орбиты
v-скорость движения по орбите
Никаких других величин нет.*/

/*let orbitalSpeed1 = (2 * Math.PI * radius1) / 365;*/
/*let orbitalSpeed2 = (2 * Math.PI * radius2) / 12;
console.log(orbitalSpeed2);*/

//f. *В браузер вводятся два числа. Если первое больше второго, то вычислить их сумму, иначе - произведение. Результат вычисления показать в консоли.*

/*let number1 = Number(prompt("Введите первое число", "2"));
let number2 = Number(prompt("Введите второе число", "5"));

if (number1 > number2) {
  console.log(number1 + number2);
} else {
  console.log(number1 * number2);
}
*/

//g. Дракон каждый год отращивает по три головы, но после того, как ему исполнится 100 лет - только по две. Сколь-ко голов и глаз у дракона, которому N лет? Результат вывести в консоли.///
/*
let dragonAge = Number(prompt("Сколько лет дракону?", "120"));

if (dragonAge < 100) {
  console.log(`У дракона ${dragonAge * 3} голов и ${dragonAge * 3 * 2} глаз`);
} else {
  function after100(hundred, beforeHundred) {
    let ageGap = dragonAge - 99;
    let headSummary = 99 * 3 + ageGap * 2;
    let eyesSummary = headSummary * 2;

    return {
      headSummary,
      eyesSummary,
    };
  }

  console.log(after100());
}*/

//h. *В браузер вводится возраст человека, узнав возраст, браузер дальнейшую беседу ведет по двум вариантам. Если возраст больше 17, то компьютер должен задать вопрос: "В каком институте ты учишься?" и получив ответ, глубокомысленно заметить "Хороший институт". Если же возраст меньше или равен 17, то соответственно - "В какой школе ты учишься?" и "Неплохая школа". После этого, каков бы ни был вариант, компьютер должен попрощаться: "До следующей встречи!"//

/*let userAge = Number(prompt("Ваш возраст?", "18"));
alert(userAge);

if (userAge > 17) {
  let univerInfo = prompt("В каком институте ты учишься?", "КГНУ");
  let univerResponse = document.querySelector(".h1");
  alert(univerInfo);
  h1.innerText = `${univerInfo} Хороший институт`;
  alert(univerResponse);
  function sayBy() {
    alert("До следующей встречи!");
  }
  sayBy();
} else {
  let schoolInfo = prompt("В какой школе ты учишься?", "61");
  let schoolResponse = document.querySelector(".h1");
  alert(schoolInfo);
  h1.innerText = `${schoolInfo} Неплохая школа`;

  alert(schoolResponse);
  function sayBy() {
    alert("До следующей встречи!");
  }
  sayBy();
}
*/

//i. Человек вводит в браузер строку, смысл которой - приветствие при встрече. Компьютер тоже должен ответить приветствием. Отвечать нужно в соответствии со следующей таблицей:

let sayHello;
