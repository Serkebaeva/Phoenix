//Создать класс ресторана. Класс должен содержать 2 атрибута: название, тип кухни. В классе должен быть метод который выводит сообщение о названии и типе кухни. Добавить ещё метод который должен выводить ресторан открыт или закрыт.//

class Restorant {
  constructor(restorantName, cuisineType) {
    this.restorantName = restorantName;
    this.cuisineType = cuisineType;
  }

  sayRestorantName() {
    console.log(`The restorant Name is ${this.restorantName}`);
  }

  sayCuisineType() {
    console.log(`The cuisine is ${this.cuisineType}`);
  }
}

let restorant1 = new Restorant("O'Bell", "French");
restorant1.sayRestorantName;
restorant1.sayCuisineType;
