const singleProductTemplate = ({imgUrl, imgAlt, productTitle, productPrice, productDescription}, isUser) => {
    
    const product_container = document.createElement('div');
    product_container.setAttribute("class", "product__container");

    const template = ` 
    <div class="product__image">
        <img src="${imgUrl}" alt="${imgAlt}">
    </div>
    <div class="product__description">
        <h1 class="product__title">${productTitle}</h1>
        <span class="product__price">$${productPrice}</span>
        <p>
            ${productDescription}
        </p>
        ${(isUser)?`<div class="product__buttons">
            <button class="product__button">-</button>
            <span class="product__quantity">cantidad</span>
            <button class="product__button">+</button>
            <span class="product__button product__add">Agregar al carrito</span>
        </div>`:''}
    </div>
    
`;
product_container.innerHTML = template;

return product_container;
};

export default singleProductTemplate;