////////////////////////////////1//////////////////////////////////////////
//1. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

/*let souvenirsWeight = 75;
let accessoriesWeight = 112;

let quantityOfSouvenirs = Number(prompt("Введите колличество сувениров", "5"));
let quantityOfAccessories = Number(
  prompt("Введите колличество безделушек", "2")
);

let totalWeightOfSouvenirs = souvenirsWeight * quantityOfSouvenirs;
let totalWeightOfAccessories = accessoriesWeight * quantityOfAccessories;
let totalParselWeight = totalWeightOfAccessories + totalWeightOfSouvenirs;

console.log(
  `Общий вес сувениров - ${totalWeightOfSouvenirs}, Общий вес безделушек - ${totalWeightOfAccessories}, Общий вес посылки - ${totalParselWeight}`
);*/

/////////////////////////////////2///////////////////////////////////////////
//2. Представьте, что вы открыли в банке сберегательный счет под 4 % годовых. Проценты банк рассчитывает в конце года и добавляет к сумме счета. Напишите программу, которая запрашивает у пользователя сумму первоначального депозита, после чего рассчитывает и выводит на экран сумму на счету в конце первого, второго и третьего годов. Все суммы должны быть округлены до двух знаков после запятой.
/*let depositSum = +prompt("Внесите сумму первоначального депозита", "5000");
let firstYearInterest = (depositSum * 4) / 100;
let firstYearTotal = depositSum + firstYearInterest;
let secondYearInterest = (firstYearTotal * 4) / 100;
let secondYearTotal = firstYearTotal + secondYearInterest;
let thirdYearInterest = (secondYearTotal * 4) / 100;
let thirdYearTotal = secondYearTotal + thirdYearInterest;

console.log(`Сумма на счету в конце 1-го года - ${firstYearTotal.toFixed(2)}`);
console.log(`Сумма на счету в конце 2-го года - ${secondYearTotal.toFixed(2)}`);
console.log(`Сумма на счету в конце 3-го года - ${thirdYearTotal.toFixed(2)}`);*/

////////////////////////////////////3//////////////////////////////////////////
//3. Создайте программу, которая запрашивает у пользователя два целых числа a и b, после чего выводит на экран результаты следующих математических операций:
/*    - сумма a и b;
    - разница между a и b;
    - произведение a и b;
    - частное от деления a на b;
    - остаток от деления a на b;
    - результат возведения числа a в степень b.*/
let userNum1 = +prompt("Введите 1-е целое число", "10");
let userNum2 = +prompt("Введите 2-е целое число", "5");

if ()
