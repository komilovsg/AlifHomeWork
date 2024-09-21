const shoppingCart = {
  itemName: "",
  itemPrice: 0,
  itemQuantity: 0,

  updateItem(name, price, quantity) {
    this.itemName = name;
    this.itemPrice = price;
    this.itemQuantity = quantity;
    console.log(
      `Товар обновлен: ${this.itemName}, количество: ${this.itemQuantity}, цена: ${this.itemPrice}`
    );
  },

  resetItem() {
    this.itemName = "";
    this.itemPrice = 0;
    this.itemQuantity = 0;
    console.log("Корзина сброшена.");
  },

  getTotal() {
    return this.itemPrice * this.itemQuantity;
  },

  displayCart() {
    if (this.itemQuantity > 0) {
      console.log(
        `Товар: ${this.itemName}, количество: ${this.itemQuantity}, цена: ${this.itemPrice}`
      );
    } else {
      console.log("Корзина пуста.");
    }
  },
};

shoppingCart.updateItem("Ноутбук", 1099.99, 1);
shoppingCart.displayCart();

console.log(`Общая стоимость: $${shoppingCart.getTotal()}`);

shoppingCart.resetItem();
shoppingCart.displayCart();
