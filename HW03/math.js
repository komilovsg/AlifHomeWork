function maxValue(numbers) {
  return Math.max(...numbers);
}

function minValue(numbers) {
  return Math.min(...numbers);
}

function roundedd(number) {
  return Math.round(number);
}

function roundUp(number) {
  return Math.ceil(number);
}

function roundDown(number) {
  return Math.floor(number);
}

function squareRoot(number) {
  return Math.sqrt(number);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Output examples
console.log("Максимум:", maxValue([10, 20, 30, 40]));
console.log("Минимум:", minValue([10, 20, 30, 40]));
console.log("Округление:", roundedd(20.49));
console.log("Округление в большую сторону:", roundUp(20.01));
console.log("Округление в меньшую сторону:", roundDown(20.99));
console.log("Квадратный корень:", squareRoot(16));
console.log("Рандомный номер (от 1 - до 100):", randomNumber(1, 100));
