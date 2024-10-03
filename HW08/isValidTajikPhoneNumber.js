function isValidTajikPhoneNumber(str) {
  const regex = /^\+992\d{9}$/;
  return regex.test(str);
}

const phoneNumbers = [
  "+992123456789",
  "+992987654321",
  "992123456789",
  "+99212345",
  "+9921234567890",
  "+993123456789",
  "+99212345678abc",
];

phoneNumbers.forEach((num) => {
  console.log(
    `Номер: "${num}", Валидный таджикский номер: ${isValidTajikPhoneNumber(
      num
    )}`
  );
});
