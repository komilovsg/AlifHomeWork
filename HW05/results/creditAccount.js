const creditAccount = {
  owner: "Alice",
  balance: 0,
  creditLimit: 1000,
  apr: 0.18,

  deposit(amount) {
    this.balance += amount;
    console.log(`Пополнение на: ${amount}. Текущий баланс: ${this.balance}`);
  },

  withdraw(amount) {
    if (this.balance - amount >= -this.creditLimit) {
      this.balance -= amount;
      console.log(`Снято: ${amount}. Текущий баланс: ${this.balance}`);
    } else {
      console.log(`Превышен кредитный лимит. Текущий баланс: ${this.balance}`);
    }
  },

  applyInterest() {
    if (this.balance < 0) {
      const interest = (this.balance * this.apr) / 12;
      this.balance += interest;
      console.log(
        `Начислены проценты: ${-interest.toFixed(
          2
        )}. Текущий баланс: ${this.balance.toFixed(2)}`
      );
    }
  },

  getBalance() {
    return this.balance;
  },

  getDebt() {
    return this.balance < 0 ? -this.balance : 0;
  },
};

creditAccount.deposit(1000);
creditAccount.withdraw(2000);
creditAccount.applyInterest();
console.log(creditAccount.getDebt());
