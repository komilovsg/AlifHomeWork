function strMethods(str, searchTerm) {
  const index = str.indexOf(searchTerm);
  console.log(`Индекс подстроки "${searchTerm}": ${index}`);

  const start = 2;
  const length = 5;
  const substring = str.substring(start, start + length);
  console.log(`Извлеченная подстрока: "${substring}"`);

  const contains = str.includes(searchTerm);
  console.log(`Содержит подстроку "${searchTerm}": ${contains}`);

  const formattedString = `Текущая строка: "${str}". Поиск подстроки: "${searchTerm}"`;
  console.log(`Отформатированная строка: "${formattedString}"`);

  return {
    index,
    substring,
    contains,
    formattedString,
  };
}

const result = strMethods("JavaScript is awesome", "is");
console.log(result);

/*
Объяснение:
indexOf(searchTerm): Метод ищет подстроку searchTerm в строке и возвращает её индекс. 
Если подстрока не найдена, возвращается -1.

substring(start, end): Метод возвращает подстроку, начиная с индекса start и 
заканчивая индексом end (не включая end).

includes(searchTerm): Метод проверяет, содержится ли подстрока searchTerm в строке. 
Возвращает true, если подстрока найдена, иначе false.

Форматирование строки: Используется шаблонные строки (обернутые в обратные кавычки `) 
для включения переменных в строку и создания форматированного текста.
*/
