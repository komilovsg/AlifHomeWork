function convertToNumber(value) {
  return Number(value);
}

const values = [
  true,
  false,
  "42",
  "3.14",
  "",
  "Hello",
  null,
  undefined,
  {},
  [],
  "0",
  "123abc",
];

values.forEach((value) => {
  console.log(`Значение: ${value}, Number(): ${convertToNumber(value)}`);
});

console.log(values.forEach(values));

/*
Объяснение:
    Определена функция convertToNumber, которая использует метод Number() 
    для явного преобразования входного значения в числовой тип.

    Массив values содержит различные типы данных, такие как:
        Булевые значения (true, false)
        Строки (включая строки с числами и строки без чисел)
        Специальные значения (null, undefined)
        Объекты и массивы

        Цикл forEach выводит результаты преобразования каждого значения с 
        помощью функции convertToNumber.
        Итоговые значения выводятся в консоль в формате:
        Значение: значение, Number(): результат.
*/
