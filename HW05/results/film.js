const createMovie = (title, director, year, genres, isWatched) => {
  return {
    title: title,
    director: director,
    year: year,
    genres: genres,
    isWatched: isWatched,
  };
};

const movie = createMovie(
  "Клятва",
  "Известная личность",
  2012,
  ["Мелодрама", "Приключение", "Роман"],
  true
);

console.log(movie);
