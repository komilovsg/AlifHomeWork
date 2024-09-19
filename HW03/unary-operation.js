function unaryOperation(num) {
  const positive = +num;
  const negative = -num;
  let increment = num;
  let decrement = num;

  increment++;
  decrement--;

  return {
    original: num,
    positive,
    negative,
    incrementPost: increment,
    decrementPost: decrement,
    incrementPre: ++increment,
    decrementPre: --decrement,
  };
}

console.log(unaryOperation(5));

/*
Объяснение:

+num: Преобразует num в число, если это не число. Если уже число, то результат такой же.

-num: Преобразует num в отрицательное число.

++num: Инкремент (увеличение на 1) до использования.

num++: Инкремент (увеличение на 1) после использования.

--num: Декремент (уменьшение на 1) до использования.

num--: Декремент (уменьшение на 1) после использования.

*/
