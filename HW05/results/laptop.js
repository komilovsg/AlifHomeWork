const laptop = {
  brand: "BMW",
  model: "M5 Compitition",
  year: 2022,
  price: 50999,
};

for (let key in laptop) {
  console.log(`${key}: ${laptop[key]}`);
}
