function getStatusMessage(status) {
  switch (status) {
    case "error":
      return "не понятная ошибка";
    case "pending":
      return "Статус в ожидании";
    case "success":
      return "Статус успешно!";
    case "feild":
      return "Статус не успешно";
    default:
      return "Неизвестный статус";
  }
}

console.log(getStatusMessage("error")); // Ожидаемый вывод: "Не известная ошибка"
console.log(getStatusMessage("pending")); // Ожидаемый вывод: "Статус в ожидании"
console.log(getStatusMessage("success")); // Ожидаемый вывод: "Статус успешно!"
console.log(getStatusMessage("feild")); // Ожидаемый вывод: "Статус не успешно"
console.log(getStatusMessage("other")); // Ожидаемый вывод: "Неизвестный статус"
