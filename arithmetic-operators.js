function add(a, b) {
  return a + b;
}

function add2(a, b) {
  return a - b;
}

function add3(a, b) {
  return a * b;
}

function add4(a, b) {
  if (b === 0) {
    console.warn("Деление на ноль = ноль.");
    return null;
  }
  return a / b;
}

const num1 = 10;
const num2 = 5;
const num3 = 0;

console.log(`Сложение: ${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`Вычитание: ${num1} - ${num2} = ${add2(num1, num2)}`);
console.log(`Умножение: ${num1} * ${num2} = ${add3(num1, num2)}`);
console.log(`Деление: ${num1} / ${num2} = ${add4(num1, num2)}`);

console.log(`Деление: ${num1} / ${num3} = ${add4(num1, num3)}`);
