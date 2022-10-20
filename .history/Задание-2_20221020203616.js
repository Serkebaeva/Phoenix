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

let distance1 = 3 * 80;
let distance2 = 2 * 90;
let distanceTotal = distance1 + distance2;
let totalHours = 3 + 2;

function averageSpeed(result = distanceTotal / totalHours) {
  console.log(result);
}
averageSpeed();
