function generateId() {
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;

  return `id-${randomNumber}`;
}

console.log(generateId());
console.log(generateId());
