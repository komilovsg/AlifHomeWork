function booLean(isLoggedIn, role) {
  if (!isLoggedIn) {
    return false;
  }

  if (role === "admin") {
    return true;
  } else if (role === "user") {
    return true;
  } else {
    return false;
  }
}

// Примеры использования:
const user1 = { isLoggedIn: true, role: "admin" };
const user2 = { isLoggedIn: true, role: "user" };
const user3 = { isLoggedIn: false, role: "user" };
const user4 = { isLoggedIn: true, role: "guest" };

console.log(
  `Пользователь 1 (админ) доступ: ${booLean(user1.isLoggedIn, user1.role)}`
);
console.log(
  `Пользователь 2 (пользователь) доступ: ${booLean(
    user2.isLoggedIn,
    user2.role
  )}`
);
console.log(
  `Пользователь 3 (не вошел в систему) доступ: ${booLean(
    user3.isLoggedIn,
    user3.role
  )}`
);
console.log(
  `Пользователь 4 (гость) доступ: ${booLean(user4.isLoggedIn, user4.role)}`
);

/*

Объяснение:
Функция booLean(isLoggedIn, role):

Использует два параметра: isLoggedIn (boolean) для проверки состояния входа 
в систему и role (string) для определения роли пользователя.

Если isLoggedIn равно false, функция сразу возвращает false, запрещая доступ.
Если пользователь вошел в систему, проверяется его роль. Администраторы имеют 
полный доступ, обычные пользователи — доступ, если они авторизованы, а любые 
другие роли получают отказ в доступе.

Тип boolean и условные конструкции: isLoggedIn используется как флаг, определяющий, выполнил ли пользователь вход. 
Это логическое значение (true или false), которое проверяется с помощью условной 
конструкции if.

Проверка роли пользователя осуществляется через несколько if/else if, где каждое 
условие проверяет, соответствует ли роль пользователя допустимой для доступа.

*/
