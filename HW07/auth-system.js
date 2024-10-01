class AuthSystem {
  constructor() {
    this.users = new Map();
  }

  register(username, password, name, email) {
    if (this.users.has(username)) {
      console.log(`Пользователь с логином ${username} уже существует.`);
      return;
    }

    this.users.set(username, { password, name, email });
    console.log(`Пользователь ${name} успешно зарегистрирован.`);
  }

  login(username, password) {
    if (!this.users.has(username)) {
      return `Ошибка: пользователь с логином ${username} не найден.`;
    }

    const user = this.users.get(username);
    if (user.password === password) {
      return `Успешная авторизация. Добро пожаловать, ${user.name}!`;
    } else {
      return `Ошибка: неверный пароль для пользователя ${username}.`;
    }
  }

  getUserInfo(username) {
    if (!this.users.has(username)) {
      return `Пользователь с логином ${username} не найден.`;
    }

    const { name, email } = this.users.get(username);
    return `Имя: ${name}, Email: ${email}`;
  }
}

const authSystem = new AuthSystem();

authSystem.register("user1", "password123", "Alice", "alice@example.com");
authSystem.register("user2", "mypassword", "Bob", "bob@example.com");
authSystem.register("user1", "newpassword", "Alice", "alice_new@example.com");

console.log(authSystem.login("user1", "password123"));
console.log(authSystem.login("user2", "wrongpassword"));
console.log(authSystem.login("user3", "somepassword"));
console.log(authSystem.getUserInfo("user1"));
console.log(authSystem.getUserInfo("user3"));
