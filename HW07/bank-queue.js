class BankQueue {
  constructor() {
    this.queue = [];
  }

  addClient(name) {
    this.queue.push(name);
    console.log(`Клиент ${name} добавлен в очередь.`);
  }

  serveClient() {
    if (this.queue.length === 0) {
      console.log("Очередь пуста. Нет клиентов для обслуживания.");
      return null;
    }
    const servedClient = this.queue.shift();
    console.log(`Клиент ${servedClient} обслужен.`);
    return servedClient;
  }

  getQueue() {
    if (this.queue.length === 0) {
      console.log("Очередь пуста.");
      return [];
    }
    console.log("Текущая очередь:", this.queue);
    return this.queue;
  }
}

const bankQueue = new BankQueue();

bankQueue.addClient("Иван");
bankQueue.addClient("Анна");
bankQueue.addClient("Сергей");
bankQueue.serveClient();
bankQueue.getQueue();
bankQueue.addClient("Мария");
bankQueue.serveClient();
bankQueue.getQueue();
