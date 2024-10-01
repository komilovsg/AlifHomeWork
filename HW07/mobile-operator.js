class MobileOperator {
  constructor() {
    this.clients = [];
  }

  addClient(name, balance) {
    if (
      typeof name !== "string" ||
      typeof balance !== "number" ||
      balance < 0
    ) {
      throw new Error("Некорректные данные для добавления клиента.");
    }

    const client = {
      name: name,
      balance: balance,
    };
    this.clients.push(client);
  }
  sortClientsByBalance() {
    this.clients.sort((a, b) => a.balance - b.balance);
  }
  reverseClientList() {
    this.clients.reverse();
  }

  getClientList() {
    return this.clients.map(
      (client) => `${client.name}: ${client.balance} руб.`
    );
  }
}

const mobileOperator = new MobileOperator();

mobileOperator.addClient("Иван", 100);
mobileOperator.addClient("Анна", 200);
mobileOperator.addClient("Сергей", 50);
mobileOperator.addClient("Мария", 150);

console.log("Текущий список клиентов:");
console.log(mobileOperator.getClientList());

mobileOperator.sortClientsByBalance();
console.log("\nКлиенты после сортировки по балансу:");
console.log(mobileOperator.getClientList());

mobileOperator.reverseClientList();
console.log("\nКлиенты после переворота списка:");
console.log(mobileOperator.getClientList());

const currentClientList = mobileOperator.getClientList();
console.log("\nТекущий список клиентов с балансами:");
currentClientList.forEach((clientInfo) => console.log(clientInfo));
