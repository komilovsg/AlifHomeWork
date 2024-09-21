const employee = {
  name: "Shakhron",
  position: "Frontend Developer",
  salary: 60000,
  isFullTime: true,
};

employee.position = "Senior Frontend Developer";
employee.hireDate = "2023-01-15";

delete employee.salary;

console.log(employee);
