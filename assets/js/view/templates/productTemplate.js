const productCardboxTemplate = (
  {
    id,
    imgUrl,
    imgAlt,
    productTitle,
    productPrice,
  },
  isEditable
) => {
  const editTool = `
    <div class="product__card__edit-bar">
        <button class="product__edit__button">
           <span class="material-symbols-rounded" title="eliminar" data-type="delete" data-id="${id}">
              delete
            </span>
        </button>
        <button class="product__edit__button">
            <a href="editar-producto.html?product_id=${id}" title="editar">
                <span class="material-symbols-rounded">
                    edit
                </span>
            </a>
        </button>
    </div>`;

  const template = `
    ${isEditable ? editTool : ""}
    <div class="product__card-image">
        <img src="${imgUrl}" alt="${imgAlt}">
    </div>
    <h3 class="product__card-title">${productTitle}</h3>
    <span class="product__card-price">$ ${productPrice}</span>
    <span class="product__card-link"><a href="producto.html?productId=${id}">Ver producto</a></span>
    `;

  const cardBox = document.createElement("div");
  cardBox.setAttribute("class", "product__card__box");

  cardBox.innerHTML = template;

  return cardBox;
};

export default productCardboxTemplate;
