const cards = document.querySelector(".cards");

async function stocks(item) {
  if (item.stocks) {
    return [
      `<div class="stocks">Акции</div>`,
      `<div class="stocks-price">${item.stocksPrice}₽</div>`,
      "style=text-decoration:line-through",
    ];
  }
  return ["", "", `style=text-decoration:none;color:#231815`];
}

async function html(item) {
  const [stockToggle, stocksPrice, priceStyle] = await stocks(item);
  return `<div class="card">
<div class="card-base" style="background-image:url(${item.image})">
${stockToggle}
    <div class="more">
        <a href="#">Подробнее</a>
    </div>
</div>
<div class="card-footer">
    <div class="name">
        Встраиваемый светильник Markt
    </div>
    <div class="card-price">
    ${stocksPrice}
        <div class="price"${priceStyle}>
            5060₽
        </div>
    </div>
</div>
</div>`;
}

export async function addToDom(item) {
  const template = document.createElement("template");
  template.innerHTML = await html(item);
  const cardElement = template.content.firstChild;
  cards.appendChild(cardElement);
}
