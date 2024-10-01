class TaxiOperator {
  constructor() {
    this.orders = [];
  }

  addOrder(order) {
    this.orders.push(order);
    console.log(`Добавлен заказ: ${order}`);
  }

  removeOrder(index) {
    if (index >= 0 && index < this.orders.length) {
      const removedOrder = this.orders.splice(index, 1);
      console.log(`Удален заказ: ${removedOrder}`);
    } else {
      console.log("Ошибка: Неверный индекс заказа.");
    }
  }

  getLastOrders(count) {
    return this.orders.slice(-count);
  }

  getOrders() {
    return this.orders;
  }
}

const taxiOperator = new TaxiOperator();

taxiOperator.addOrder("Заказ от Анвар, маршрут: А -> В");
taxiOperator.addOrder("Заказ от Насиба, маршрут: С -> D");
taxiOperator.addOrder("Заказ от Шахром, маршрут: Е -> F");

taxiOperator.removeOrder(1);
console.log("Последние 2 заказа:", taxiOperator.getLastOrders(2));
console.log("Текущий список заказов:", taxiOperator.getOrders());
