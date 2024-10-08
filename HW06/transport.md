### Задача: Полиморфизм в модели транспортных средств

**Описание**:  
Создайте базовый класс `Transport`, который будет описывать общее поведение транспортных средств. Затем создайте несколько подклассов, таких как `Car` и `Bicycle`, которые будут наследовать от `Transport` и реализовывать собственные версии метода передвижения (например, метод `move()`). Используйте полиморфизм для работы с различными типами транспорта через единый интерфейс.

1. Класс `Transport` должен содержать:
   - Метод `move()`, который выводит сообщение "Транспорт движется".
   
2. Класс `Car` должен наследовать `Transport` и переопределить метод `move()`, чтобы выводить сообщение: "Машина едет по дороге".
   
3. Класс `Bicycle` должен наследовать `Transport` и переопределить метод `move()`, чтобы выводить сообщение: "Велосипед едет по тротуару".

4. Создайте функцию `startTransport()`, которая принимает транспортное средство и вызывает его метод `move()`.

### Входные данные:
- Тип транспортного средства (например, машина или велосипед).

### Ожидаемый результат:
- Программа должна корректно обрабатывать объекты разных типов транспорта, используя метод `move()`, который выводит различные сообщения в зависимости от типа транспорта.

### Пример использования:

```javascript
// Пример использования классов
const myCar = new Car();
const myBicycle = new Bicycle();

// Вызываем метод move() для каждого транспортного средства
startTransport(myCar);      // Ожидаемый вывод: Машина едет по дороге
startTransport(myBicycle);  // Ожидаемый вывод: Велосипед едет по тротуару
