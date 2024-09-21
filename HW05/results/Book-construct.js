// Функция-конструктор для создания объектов книги
function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}
const book1 = new Book("1984", "George Orwell", 1949, "Dystopian");
const book2 = new Book(
  "To Kill a Mockingbird",
  "Harper Lee",
  1960,
  "Classic Fiction"
);
const book3 = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  1925,
  "Classic Literature"
);

console.log(book1);

console.log(book2);

console.log(book3);
