### Задача: Удаление свойства из объекта

**Описание**:  
Создайте функцию `deleteProperty`, которая принимает объект и строку (название свойства), и удаляет это свойство из объекта.

### Входные данные:
- Объект `obj`.
- Строка `propertyName`.

### Ожидаемый результат:
- Удалить указанное свойство из объекта и вернуть обновлённый объект.

### Пример использования:

```javascript
const person = { name: "Bob", age: 40, city: "San Francisco" };

console.log(deleteProperty(person, "city")); 
// Ожидаемый вывод: { name: "Bob", age: 40 }
