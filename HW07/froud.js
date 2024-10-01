class FraudDetector {
  constructor() {
    this.transactions = [];
  }

  addTransaction(amount, type) {
    if (type !== "credit" && type !== "debit") {
      throw new Error('Тип транзакции должен быть "credit" или "debit".');
    }

    const transaction = {
      amount: amount,
      type: type,
      isFlagged: false,
    };

    this.transactions.push(transaction);
  }

  flagLargeTransactions(limit) {
    this.transactions.forEach((transaction) => {
      if (transaction.amount > limit) {
        transaction.isFlagged = true;
      }
    });
  }

  getFlaggedTransactions() {
    return this.transactions.filter((transaction) => transaction.isFlagged);
  }
}

const fraudDetector = new FraudDetector();

fraudDetector.addTransaction(500, "debit");
fraudDetector.addTransaction(1500, "credit");
fraudDetector.addTransaction(2500, "debit");
fraudDetector.addTransaction(800, "credit");
fraudDetector.addTransaction(1200, "debit");

const limit = 1000;
fraudDetector.flagLargeTransactions(limit);

const flagged = fraudDetector.getFlaggedTransactions();
console.log("Подозрительные транзакции:", flagged);
