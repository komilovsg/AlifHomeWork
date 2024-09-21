const cardTransaction = {
  amount: 0,
  transactionType: "",
  transactionStatus: "pending",

  updateTransaction(amount, type, status) {
    this.amount = amount;
    this.transactionType = type;
    this.transactionStatus = status;
    console.log(
      `Транзакция обновлена: ${type} на сумму ${amount}, статус: ${status}`
    );
  },

  resetTransaction() {
    this.amount = 0;
    this.transactionType = "";
    this.transactionStatus = "pending";
    console.log("Информация о транзакции сброшена.");
  },

  getTotal(balance) {
    if (this.transactionStatus === "completed") {
      if (this.transactionType === "purchase") {
        return balance - this.amount;
      } else if (this.transactionType === "refund") {
        return balance + this.amount;
      }
    }
    return balance;
  },

  displayTransaction() {
    if (this.transactionType && this.transactionStatus !== "pending") {
      console.log(
        `Транзакция: ${this.transactionType} на сумму ${this.amount}, статус: ${this.transactionStatus}`
      );
    } else {
      console.log("Транзакция не была выполнена.");
    }
  },
};

let currentBalance = 500;

cardTransaction.updateTransaction(100, "purchase", "completed");
cardTransaction.displayTransaction();

currentBalance = cardTransaction.getTotal(currentBalance);
console.log(`Новый баланс: $${currentBalance}`);

cardTransaction.resetTransaction();
cardTransaction.displayTransaction();
