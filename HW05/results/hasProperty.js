const hasProperty = (obj, propertyName) => {
  return propertyName in obj;
};

const car = { brand: "Toyota", model: "Camry", year: 2021 };
const car2 = { brand: "BMW", model: "M5", year: 2023 };

console.log(hasProperty(car, "model"));
console.log(hasProperty(car, "color"));

console.log(hasProperty(car2, "model"));
console.log(hasProperty(car2, "color"));
