class BMW {
  constructor(model, color, year) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.mileage = 0;
  }

  paint(newColor) {
    this.color = newColor;
    console.log(`Цвет авто был изменени на: ${this.color}`);
  }

  drive(distance) {
    this.mileage += distance;
    console.log(
      `Авто проехал ${distance} км. Общий пробег: ${this.mileage} км.`
    );
  }

  startEngine() {
    console.log(`Двигатель авто ${this.model} запущен.`);
  }

  displayInfo() {
    console.log(`Модель: ${this.model}`);
    console.log(`Цвет: ${this.color}`);
    console.log(`Год выпуска: ${this.year}`);
    console.log(`Пробег: ${this.mileage}`);
  }
}

const myBMW = new BMW("X5", `Черный`, 2020);

myBMW.displayInfo();
myBMW.startEngine();
myBMW.paint("Синий");
myBMW.drive(120);
myBMW.displayInfo();
