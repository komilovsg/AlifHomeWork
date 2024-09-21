const person = {
  name: "Alice",
  age: 30,
};

Object.defineProperty(person, "age", {
  writable: false,
  enumerable: false,
  configurable: false,
});

const ageDescriptor = Object.getOwnPropertyDescriptor(person, "age");
console.log(ageDescriptor);

person.age = 35;
console.log(person.age);

console.log(Object.keys(person));
