document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");
  const product = {
    title: "Нож Снегирь",
    available: true,
    price: "3 865 ₽",
    images: [
      "./img1.jpeg",
      "./img2.jpeg",
      "./img3.jpeg",
      "./img4.jpeg",
      "./img5.jpeg",
    ],
    options: {
      steel: ["Выбрать сталь", "Сталь 1", "Сталь 2"],
      handle: ["Выбрать рукоять", "Дерево", "Металл"],
      guard: ["Выбрать гарду и тыльник", "Тыльник 1", "Тыльник 2"],
      bladeFinish: ["Выбрать обработку клинка", "Обработка 1", "Обработка 2"],
    },
  };

  root.innerHTML = `
        <div class="product-image-section">
            <div class="product-images">
                <img src="${product.images[0]}" alt="${product.title}">
                <div class="product-images-smoll">
                ${product.images
                  .slice(1)
                  .map((img) => `<img src="${img}" alt="${product.title}">`)
                  .join("")}
                </div>
            </div>
        </div>
        <div class="product-details-section">
            <h1 class="product-title">${product.title}</h1>
            <p>${
              product.available
                ? '<span style="color: green;">В наличии</span>'
                : '<span style="color: red;">Нет в наличии</span>'
            }</p>
            <p class="product-price">${product.price}</p>

            <div class="select-options">
                <label for="steel">Сталь</label>
                <select id="steel">${product.options.steel
                  .map(
                    (option) => `<option value="${option}">${option}</option>`
                  )
                  .join("")}</select>
                
                <label for="handle">Рукоять</label>
                <select id="handle">${product.options.handle
                  .map(
                    (option) => `<option value="${option}">${option}</option>`
                  )
                  .join("")}</select>
                
                <label for="guard">Гарда и тыльник</label>
                <select id="guard">${product.options.guard
                  .map(
                    (option) => `<option value="${option}">${option}</option>`
                  )
                  .join("")}</select>
                
                <label for="bladeFinish">Обработка клинка</label>
                <select id="bladeFinish">${product.options.bladeFinish
                  .map(
                    (option) => `<option value="${option}">${option}</option>`
                  )
                  .join("")}</select>
            </div>
            
            <a href="#" class="add-to-cart">В корзину</a>
            <a href="#" class="buy-one-click">Купить в 1 клик</a>
        </div>
    `;
});
