### Задача: Проверка, начинается ли строка с заглавной буквы

**Описание**:  
Создайте функцию, которая проверяет, начинается ли данная строка с заглавной буквы. Используйте регулярные выражения и символьные классы для решения задачи.

### Входные данные:
- Строка, которую нужно проверить.

### Ожидаемый результат:
- Функция должна возвращать `true`, если строка начинается с заглавной буквы, и `false` в противном случае.

### Пример использования:

```javascript

function startsWithCapitalLetter(str) {
    // Тут код должен быть
}

// Примеры строк
const strings = [
    'Hello world',   // начинается с заглавной буквы
    'hello world',   // не начинается с заглавной буквы
    'JavaScript is fun', // начинается с заглавной буквы
    '123abc',        // не начинается с заглавной буквы
    'Good Morning!',  // начинается с заглавной буквы
    '',              // пустая строка
];

// Проверка строк
strings.forEach(s => {
    console.log(`Строка: "${s}", Начинается с заглавной буквы: ${startsWithCapitalLetter(s)}`);
});