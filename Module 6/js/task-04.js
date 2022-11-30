// Створити картку товару з об'єкта,
// Запушити її в container.
// оформити мінімально

const product = {
  shortName: "Сардельки «Алан»",
  price: 200,
  img: {
    url: "https://content.silpo.ua/sku/ecommerce/7/545x440wwm/72620_545x440wwm_f865a87e-2cfd-cd86-37ea-15160792313c.png",
    alt: "food",
  },
};

const container = document.querySelector(".container");

function createProductMarkup({
  shortName = "no name",
  price = 0,
  img: { url, alt = "test" } = {},
} = {}) {
  return `
    <div class='product-item'>
      <img style="width: 500px" src=${url} alt=${alt}>
      <span>${shortName}</span>
      <span>${price}</span>
    </div>
  `;
}

container.insertAdjacentHTML("beforeend", createProductMarkup());

document.querySelector(".product-item").style.display = "flex";
document.querySelector(".product-item").style.flexDirection = "column";

console.log("we continue");
