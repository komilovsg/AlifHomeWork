class JavaScriptCourse {
  constructor() {
    this.students = [];
  }

  addStudent(name, grades) {
    if (typeof name !== "string" || !Array.isArray(grades)) {
      throw new Error("Некорректные данные для добавления студента.");
    }

    const student = {
      name: name,
      grades: grades,
    };
    this.students.push(student);
  }

  getAverageGrades() {
    return this.students.map((student) => {
      const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
      const average = sum / student.grades.length;
      return {
        name: student.name,
        averageGrade: average,
      };
    });
  }

  getStudentsAboveAverage(threshold) {
    const averageGrades = this.getAverageGrades();
    return averageGrades.filter((student) => student.averageGrade > threshold);
  }

  allStudentsPassed(passingGrade) {
    const averageGrades = this.getAverageGrades();
    return averageGrades.every(
      (student) => student.averageGrade > passingGrade
    );
  }
}

const jsCourse = new JavaScriptCourse();

jsCourse.addStudent("Alice", [85, 90, 78]);
jsCourse.addStudent("Bob", [60, 75, 70]);
jsCourse.addStudent("Charlie", [95, 92, 88]);
jsCourse.addStudent("Diana", [80, 85, 82]);
jsCourse.addStudent("Ethan", [75, 80, 79]);

const averageGrades = jsCourse.getAverageGrades();
console.log("Средние оценки студентов:", averageGrades);

const studentsAbove80 = jsCourse.getStudentsAboveAverage(80);
console.log("Студенты с средними оценками выше 80:", studentsAbove80);

const allPassed = jsCourse.allStudentsPassed(75);
console.log("Все студенты прошли курс:", allPassed);
