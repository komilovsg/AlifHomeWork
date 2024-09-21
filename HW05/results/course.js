const course = {
  title: "JavaScript for Beginners",
  instructor: "Alice Johnson",
  duration: 10,
  price: 199,
};

const values = Object.values(course);

values.forEach((value) => {
  console.log(value);
});
