const formTemplate = (value) => {
  if (value === "footer") {
    return footerFormTemplate;
  }
  if (value === "create") {
    return adminFormTemplate();
  }
  if (value === "menu") {
    return menuFormTemplate;
  }
  if (value === "login") {
    return loginFormTemplate();
  }
};

const footerFormTemplate = `
    <form class="form">
        <div class="form__wrapper">
      <input class="form__input" type="text" name="username" id="username" placeholder="nombre"
    data-username required>
      <label class="form__label" for="username">Nombre</label>
        </div>
        <div class="form__wrapper">
      <textarea class="form__message" name="usermessage" id="usermessage" cols="30" rows="10"
    data-usermessage placeholder="Escribe tu mensaje"></textarea>
        </div>
        <button class="form__button footer__button" type="submit">Enviar mensaje</button>
    </form>
`;

const adminFormTemplate = () => {
  const template = `
        <div class="form__wrapper">
            <input class="form__input" type="text" name="imageUrlProduct" id="imageUrlProduct" placeholder="imageUrlProduct" data-image-url required>
            <label class="form__label" for="imageUrlProduct">URL de la imagen</label>
        </div>
        <div class="form__wrapper">
            <input class="form__input" type="text" name="imageDescription" id="imageDescription" placeholder="descripción de la imagen" data-image-alt required>
            <label class="form__label" for="imageDescription">Descripción de la imagen</label>
        </div>
        <div class="form__wrapper">
            <input class="form__input" type="text" name="categoryProduct" id="categoryProduct" placeholder="categoryProduct" data-category-product required>
            <label class="form__label" for="categoryProduct">Categoría</label>
        </div>
        <div class="form__wrapper">
            <input class="form__input" type="text" name="productName" id="productName" placeholder="productName" data-product-name required>
            <label class="form__label" for="productName">Nombre del producto</label>
        </div>
        <div class="form__wrapper">
            <input class="form__input" type="text" name="productPrice" id="productPrice" placeholder="productPrice" data-product-price required>
            <label class="form__label" for="productPrice">Precio del producto</label>
        </div>
        <div class="form__wrapper">
            <textarea class="form__message" name="productDescription" id="productDescription" cols="30" rows="10" data-product-description
                placeholder="Descripción del producto"></textarea>
        </div>
        <button class="form__button create__form__button" type="submit" data-type="create-product">Agregar producto</button>
`;

  const form = document.createElement("form");
  form.setAttribute("class", "form");
  form.innerHTML = template;

  return form;
};

const menuFormTemplate = `
    <form class="menu__form" action="">
        <input class="menu__form-input" type="search" name="search" id="search" data-search
            placeholder="¿Qué deseas buscar?">
        <button class="menu__form-submit">
            <span class="material-symbols-rounded">
                search
            </span>
        </button>
    </form>
`;

const loginFormTemplate = () => {
  const template = `
    <div class="form__wrapper">
        <input type="email" class="login__input" data-login-email
            placeholder="Escriba su correo electrónico" required>
    </div>
    <div class="form__wrapper">
        <input type="password" class="login__input" data-login-password
            placeholder="Escriba su contraseña" required>
    </div>

    <button class="form__button login__button">Entrar</button>`;

  const form = document.createElement("form");
  form.setAttribute("class", "form");
  form.innerHTML = template;

  return form;
};

export default formTemplate;
