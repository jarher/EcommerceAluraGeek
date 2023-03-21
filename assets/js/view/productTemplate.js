const productCardboxTemplate = (edit) => {
    // imgUrl, imgAlt, productTitle, productPrice, productLink;
    const editTool = `
    <div class="product__card__edit-bar">
        <button class="product__edit__button">
            <a href="" title="eliminar">
                <span class="material-symbols-rounded">
                    delete
                </span>
            </a>
        </button>
        <button class="product__edit__button">
            <a href="" title="editar">
                <span class="material-symbols-rounded">
                    edit
                </span>
            </a>
        </button>
    </div>`;

    const template = `
    ${edit ? editTool: ""}
    <div class="product__card-image">
        <img src="./assets/img/starwars-image/product_starwar_1.png" alt="">
    </div>
    <h3 class="product__card-title">Producto XYZ</h3>
    <span class="product__card-price">$60.00</span>
    <span class="product__card-link"><a href="">Ver producto</a></span>
    `;

    const cardBox = document.createElement("div");
    cardBox.setAttribute("class", "product__card__box");

    cardBox.innerHTML = template;

    return cardBox;
}

export default productCardboxTemplate;