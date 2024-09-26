class BankAccount {
  #balance = 0;
  #transactionHistory = [];

  deposit(amount) {
    if (amount <= 0) {
      console.log("Сумма депозита должна быть положительной.");
      return;
    }
    this.#balance += amount;
    this.#recordTransaction("DEPOSIT", amount);
    console.log(
      `На счёт внесено: $${amount}. Текущий баланс: $${this.#balance}`
    );
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Сумма снятия должна быть положительной.");
      return;
    }
    if (amount > this.#balance) {
      console.log("Недостаточно средств на счёте.");
      return;
    }
    this.#balance -= amount;
    this.#recordTransaction("WITHDRAW", amount);
    console.log(
      `Со счёта снято: $${amount}. Текущий баланс: $${this.#balance}`
    );
  }

  getBalance() {
    return this.#balance;
  }

  audit() {
    if (this.#transactionHistory.length === 0) {
      console.log("История транзакций пуста.");
      return;
    }
    console.log("История транзакций:");
    this.#transactionHistory.forEach((transaction, index) => {
      console.log(`${index + 1}. ${transaction.type}: $${transaction.amount}`);
    });
  }

  #recordTransaction(type, amount) {
    this.#transactionHistory.push({ type, amount });
  }
}

const myAccount = new BankAccount();

myAccount.deposit(1000);

myAccount.withdraw(300);

console.log(`Текущий баланс: $${myAccount.getBalance()}`);

myAccount.audit();
