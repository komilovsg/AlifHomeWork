function convertMinutes(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours} часов ${mins} минут`;
}

console.log(convertMinutes(130));
console.log(convertMinutes(60));
console.log(convertMinutes(45));
