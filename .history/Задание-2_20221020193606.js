//////////////////------------1-------------/////////////////////
/*Ваша задача состоит в том, чтобы создать 8 переменных с помощью let, которые будут представлять 8 разных типов данных. Каждую из этих переменных требуется явно преобразовать к 3-м типам: к number, boolean и string. Конечные значения выведите в консоль.*/
let userName = "Aiza";
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
let myGroup = [Aizada, Adilet, Diana, Erkin];
console.log(Number(myGroup), Boolean(myGroup), String(myGroup));
