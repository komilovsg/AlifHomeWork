function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const person1 = new Person("Shakhron", "Komilov");
console.log(person1.getFullName());

const student = Object.create(person1);
student.major = "SomeBody else";

student.getMajor = function () {
  return this.major;
};

console.log(student.getFullName());
console.log(student.getMajor());
