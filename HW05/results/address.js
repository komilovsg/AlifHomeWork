const user = {
  username: "john_doe",
  email: "john@example.com",
  age: 30,
};

const address = {
  city: "New York",
  state: "NY",
  postalCode: "10001",
};

const userProfile = Object.assign({}, user, address);

console.log(userProfile);
