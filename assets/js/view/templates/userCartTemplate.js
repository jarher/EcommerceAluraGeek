const userCartTemplate = (userProducts, total) => {
    const menu_user_cart = document.createElement("div");
    menu_user_cart.setAttribute("class","menu__user-cart");

    const template = `
    <div class="menu__user__header">
        <span class="menu__user__title">Mis productos</span>
        <span class="material-symbols-rounded" data-type="menuUser">
            cancel
        </span>
    </div>
    
    <div class="menu__products">
        ${userProducts}
    </div>
    <div class="menu__total">Total: $${total}</div>
    <div class="menu__buttons">
        <button>Comprar</button>
        <button data-type="cancelPurchase">Cancelar compra</button>
    </div>
    <span data-type="logout" class="menu__logout">Cerrar sesión</span>
    `;

    menu_user_cart.innerHTML = template;
    return menu_user_cart;
};

const menu_product = ({
  imgUrl,
  imgAlt,
  productTitle,
  productPrice,
  quantity,
}) => `
<div class="menu__product">
    <img src="${imgUrl}" alt="${imgAlt}">
    <div class="menu__desc">
        <span class="menu__desc__title">${productTitle}</span>
        <span class="menu__desc__price">Precio: $ ${productPrice}</span>
        <span class="menu__desc__quantity">Cantidad: $ ${quantity}</span>
    </div>
</div>`;

const renderUserCart = (userData, total) => {
    let userProducts = userData.products.map((product) => menu_product(product));
    document.querySelector(".menu").append(userCartTemplate(userProducts, total));
}

export default renderUserCart;