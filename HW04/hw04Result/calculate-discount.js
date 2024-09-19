const calculateDiscount = (price, discountPercentage) =>
  price * (1 - discountPercentage / 100);

console.log(calculateDiscount(1000, 15));
console.log(calculateDiscount(500, 20));
console.log(calculateDiscount(200, 5));
