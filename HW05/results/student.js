const student = {
  name: "Shakhron",
  age: 29,
  major: "Middle Frontend Developer",
  gpa: 4.8,
};

const keys = Object.keys(student);

console.log(`Количество свойств: ${keys.length}`);

keys.forEach((key) => {
  console.log(`${key}: ${student[key]}`);
});
