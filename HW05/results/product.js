const product = {
  name: "My PC HP G4",
  price: 3000,
  category: "Electronics",
  inStock: false,
};

product.price = 3900;

product.inStock = true;
product.rating = 4.5;
delete product.category;

console.log(product);
