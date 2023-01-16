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

class WorkingHours extends Restorant {
  constructor(restorantName, cuisineType, openHours) {
    super(restorantName, cuisineType);

    this.openHours = openHours;
  }

  sayOpenHours() {
    document.write(`We are open every day from/to ${this.openHours}`);
  }
}

let WorkingHours1 = new WorkingHours("O'Nell", "French", "10am - 11pm");
WorkingHours1.restorantName;
WorkingHours1.cuisineType;
WorkingHours1.openHours;
