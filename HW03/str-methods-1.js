function manipulateString(str, searchValue, newValue, delimiter) {
  const upper = str.toUpperCase();
  const lower = str.toLowerCase();
  const replaced = str.replace(searchValue, newValue);
  const split = str.split(delimiter);
  const trimmed = str.trim();

  return {
    upper,
    lower,
    replaced,
    split,
    trimmed,
  };
}

const result = manipulateString(
  "   Hello, World!   ",
  "World",
  "JavaScript",
  ","
);

console.log("Заглавные буквы:", result.upper);
console.log("Маленькие буквы:", result.lower);
console.log("Заменяем:", result.replaced);
console.log("Разделяем:", result.split);
console.log("Обрезаем:", result.trimmed);
