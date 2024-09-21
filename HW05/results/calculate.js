const calculator = {
  num1: 0,
  num2: 0,

  setNumbers(a, b) {
    this.num1 = a;
    this.num2 = b;
  },

  add() {
    return this.num1 + this.num2;
  },

  subtract() {
    return this.num1 - this.num2;
  },

  multiply() {
    return this.num1 * this.num2;
  },

  // Метод для деления
  divide() {
    if (this.num2 !== 0) {
      return this.num1 / this.num2;
    } else {
      return "Ошибка: деление на ноль";
    }
  },
};

calculator.setNumbers(10, 5);
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());
