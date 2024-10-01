class CashRegister {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    const item = { name, price, quantity };
    this.items.push(item);
    console.log(
      `Добавлен товар: ${name}, Цена: ${price}, Количество: ${quantity}`
    );
  }

  removeItem(name) {
    const index = this.items.findIndex((item) => item.name === name);
    if (index !== -1) {
      const removedItem = this.items.splice(index, 1);
      console.log(`Удален товар: ${removedItem[0].name}`);
    } else {
      console.log(`Ошибка: Товар "${name}" не найден.`);
    }
  }

  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  getReceipt() {
    let receipt = "Чек:\n";
    this.items.forEach((item) => {
      receipt += `${item.name} - ${item.price} x ${item.quantity} = ${
        item.price * item.quantity
      }\n`;
    });
    receipt += `Общая сумма: ${this.calculateTotal()}`;
    return receipt;
  }
}

const cashRegister = new CashRegister();

cashRegister.addItem("Яблоки", 1.5, 3);
cashRegister.addItem("Бананы", 1.2, 5);
cashRegister.addItem("Апельсины", 2.0, 2);
cashRegister.removeItem("Бананы");
console.log(cashRegister.getReceipt());
