const formTemplate = (value, object) => {
  if (value === "footer") {
    return footerFormTemplate;
  }
  if (value === "create") {
    return adminCreateTemplate();
  }
  if (value === "edit") {
    return adminEditTemplate(object);
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
          <span class="form__error-message"></span>
        </div>
        <div class="form__wrapper">
          <textarea class="form__message" name="usermessage" id="usermessage" cols="30" rows="10"
          data-usermessage placeholder="Escribe tu mensaje" required></textarea>
          <span class="form__error-message"></span>
        </div>
        <button class="form__button footer__button" data-type="messageSubmit" type="submit">Enviar mensaje</button>
    </form>
`;

const adminCreateTemplate = () => {
  const template = `
        <div class="form__wrapper">
            <input class="form__input" type="text" name="imageUrlProduct" id="imageUrlProduct" placeholder="imageUrlProduct" data-image-url required>
            <label class="form__label" for="imageUrlProduct">URL de la imagen</label>
            <span class="form__error-message"></span>
        </div>
        <div class="form__wrapper">
            <input class="form__input" type="text" name="imageDescription" id="imageDescription" placeholder="descripción de la imagen" data-image-alt required>
            <label class="form__label" for="imageDescription">Descripción de la imagen</label>
            <span class="form__error-message"></span>
        </div>
        <div class="form__wrapper">
            <input class="form__input" type="text" name="categoryProduct" id="categoryProduct" placeholder="categoryProduct" data-category-product required>
            <label class="form__label" for="categoryProduct">Categoría</label>
            <span class="form__error-message"></span>
        </div>
        <div class="form__wrapper">
            <input class="form__input" type="text" name="productName" id="productName" placeholder="productName" data-product-name required>
            <label class="form__label" for="productName">Nombre del producto</label>
            <span class="form__error-message"></span>
        </div>
        <div class="form__wrapper">
            <input class="form__input" type="text" name="productPrice" id="productPrice" placeholder="productPrice" data-product-price required>
            <label class="form__label" for="productPrice">Precio del producto</label>
            <span class="form__error-message"></span>
        </div>
        <div class="form__wrapper">
            <textarea class="form__message" name="productDescription" id="productDescription" cols="30" rows="10" data-product-description
                placeholder="Descripción del producto" required></textarea>
            <span class="form__error-message"></span>
        </div>
        <button class="form__button create__form__button" type="submit" data-type="create-product">Agregar producto</button>
`;

  const form = document.createElement("form");
  form.setAttribute("class", "form");
  form.setAttribute("method","POST");
  form.innerHTML = template;

  return form;
};

const adminEditTemplate = ({
  id,
  imgUrl,
  imgAlt,
  productCategory,
  productDescription,
  productPrice,
  productTitle,
}) => {
  const template = `
        <div class="form__wrapper">
            <input class="form__input" type="text" name="imageUrlProduct" id="imageUrlProduct" placeholder="imageUrlProduct" value="${imgUrl}" data-image-url required>
            <label class="form__label" for="imageUrlProduct">URL de la imagen</label>
            <span class="form__error-message"></span>
        </div>
        <div class="form__wrapper">
            <input class="form__input" type="text" name="imageDescription" id="imageDescription" placeholder="descripción de la imagen" value="${imgAlt}" data-image-alt required>
            <label class="form__label" for="imageDescription">Descripción de la imagen</label>
            <span class="form__error-message"></span>
        </div>
        <div class="form__wrapper">
            <input class="form__input" type="text" name="categoryProduct" id="categoryProduct" placeholder="categoryProduct" value="${productCategory}" data-category-product required>
            <label class="form__label" for="categoryProduct">Categoría</label>
            <span class="form__error-message"></span>
        </div>
        <div class="form__wrapper">
            <input class="form__input" type="text" name="productName" id="productName" placeholder="productName" value="${productTitle}" data-product-name required>
            <label class="form__label" for="productName">Nombre del producto</label>
            <span class="form__error-message"></span>
        </div>
        <div class="form__wrapper">
            <input class="form__input" type="text" name="productPrice" id="productPrice" placeholder="productPrice" value="${productPrice}" data-product-price required>
            <label class="form__label" for="productPrice">Precio del producto</label>
            <span class="form__error-message"></span>
        </div>
        <div class="form__wrapper">
            <textarea class="form__message" name="productDescription" id="productDescription" cols="30" rows="10" data-product-description
                placeholder="Ingrese una descripción del producto" required>${productDescription}</textarea>
                <span class="form__error-message"></span>
        </div>
        <button class="form__button create__form__button" type="submit" data-type="edit-product" data-id=${id}>Editar producto</button>
`;

  const form = document.createElement("form");
  form.setAttribute("class", "form");
  form.setAttribute("method", "POST");
  form.innerHTML = template;

  return form;
};

const menuFormTemplate = `
    <form class="menu__form" action="">
        <input class="menu__form-input" type="search" name="search" id="search" data-search
            placeholder="¿Qué deseas buscar?">
        <button class="menu__form-submit">
            <span class="material-symbols-rounded" data-type="search">
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
        <span class="form__error-message"></span>
    </div>
    <div class="form__wrapper">
        <input type="password" class="login__input" data-login-password
            placeholder="Escriba su contraseña" required>
        <span class="form__error-message"></span>
    </div>
    <p>¿no tienes una cuenta?<a href="registro.html"> Regístrate</a></p>
    <button class="form__button login__button" data-type="loginSubmit">Entrar</button>`;

  const form = document.createElement("form");
  form.setAttribute("class", "form");
  form.innerHTML = template;

  return form;
};

export default formTemplate;
