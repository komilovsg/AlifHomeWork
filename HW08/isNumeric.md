### Задача: Проверка, содержит ли строка только цифры

**Описание**:  
Создайте функцию, которая проверяет, состоит ли строка только из цифр. Используйте символьные классы регулярных выражений для решения задачи.

### Входные данные:
- Строка, которую нужно проверить.

### Ожидаемый результат:
- Функция должна возвращать `true`, если строка содержит только цифры, и `false` в противном случае.

### Пример использования:

```javascript

function containsOnlyDigits(str) {
   // Тут код должен быть
}

// Примеры строк
const strings = [
    '123456',    
    '123abc',    
    '12.34',    
    '000123',    
    '',     
];

// Проверка строк
strings.forEach(s => {
    console.log(`Строка: "${s}", Содержит только цифры: ${containsOnlyDigits(s)}`);
});