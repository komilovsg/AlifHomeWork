// Создание объекта user
const user = {
  username: "komilovsg",
  email: "komilovsg@gmail.com",
  age: 29,
};

const { username, email, age, country = "Not specified" } = user;

console.log(`Username: ${username}`);
console.log(`Email: ${email}`);
console.log(`Age: ${age}`);
console.log(`Country: ${country}`);
