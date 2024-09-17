function conversionBoolean(value) {
  return Boolean(value);
}

function explicitConversionBoolean(value) {
  return !!value;
}

const values = [
  true,
  false,
  1,
  0,
  -1,
  "",
  "Hello",
  null,
  undefined,
  {},
  [],
  NaN,
];

values.forEach((value) => {
  console.log(
    `Значение: ${value}, Boolean(): ${conversionBoolean(
      value
    )}, !!: ${explicitConversionBoolean(value)}`
  );
});

/*
Объяснение:
Преобразование через Boolean():

Явное преобразование значения в тип boolean. Если значение является "ложным" 
(например, 0, '', null, undefined, NaN), результатом будет false. Все остальные 
значения, включая непустые строки, числа (кроме 0), объекты и массивы, преобразуются в true.
Преобразование через двойное логическое отрицание !!:

Двойное отрицание сначала преобразует значение в логическое через отрицание 
(!), а затем снова в исходное логическое через второе отрицание. Результат 
аналогичен вызову функции Boolean().
Почему некоторые значения становятся true или false:

Ложные значения: false, 0, '' (пустая строка), null, undefined, NaN — 
это "falsy" значения, которые при преобразовании становятся false.
Истинные значения: Все остальные значения (например, true, любое ненулевое 
число, непустые строки, объекты и массивы) считаются "truthy" и преобразуются в true.
*/
