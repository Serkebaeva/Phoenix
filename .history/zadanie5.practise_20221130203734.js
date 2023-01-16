//Создать обьект у кот.ключи от 1-7 и в ключах должно содержаться дни недели..
//Вывести значения всех.ключей.

function DaysOfWeek(mon, tue, wed, thrd, fri, sat, sun) {
  this.mon = mon;
  this.tue = tue;
  this.wed = wed;
  this.thrd = thrd;
  this.fri = fri;
  this.sat = sat;
  this.sun = sun;
}

let week = new DaysOfWeek(
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье"
);

console.log(week.mon);
console.log(week);
