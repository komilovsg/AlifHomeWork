function getHttpStatusMessage(statusCode) {
  const statusMessages = {
    200: "OK: Запрос выполнен успешно",
    201: "Created: Ресурс был создан успешно",
    204: "No Content: Запрос выполнен успешно, но нет содержимого",
    400: "Bad Request: Неверный запрос",
    401: "Unauthorized: Неавторизованный доступ",
    403: "Forbidden: Доступ запрещен",
    404: "Not Found: Ресурс не найден",
    500: "Internal Server Error: Внутренняя ошибка сервера",
    502: "Bad Gateway: Неверный шлюз",
    503: "Service Unavailable: Сервис недоступен",
  };

  return (
    statusMessages[statusCode] || "Unknown Status Code: Неизвестный статус-код"
  );
}

console.log(getHttpStatusMessage(200));
console.log(getHttpStatusMessage(404));
console.log(getHttpStatusMessage(500));
console.log(getHttpStatusMessage(123));
