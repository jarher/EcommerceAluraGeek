const validate = (input) => {
    
  const datatype = Object.keys(input.dataset)[0];
  // if (validators[datatype]) {
  //   validators[datatype](input);
  // }

  if (input.validity.valid) {
     input.parentElement.querySelector(".form__error-mesagge").innerHTML= "";
  } else {
    input.parentElement.querySelector(".form__error-mesagge").innerHTML=
      showErrorMessage(datatype, input);
  }

  input.setCustomValidity("");
};

// const validators = {
// };

const errorTypes = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const errorMessages = {
  loginPassword: {
    valueMissing: "El campo password no puede estar vacío",
    patternMismatch: "La contraseña es errónea",
    customError: "Contraseña incorrecta",
  },
  loginEmail: {
    valueMissing: "El campo email no puede estar vacío",
    typeMismatch: "El correo electrónico no es válido",
    patternMismatch: "El correo electrónico es erróneo",
    customError: "Email incorrecto",
  },
  username: {
    valueMissing: "El campo nombre no puede estar vacío",
  },
  usermessage: {
    valueMissing: "El campo mensaje no puede estar vacío",
  },
  imageUrl: {
    valueMissing: "El campo url de imagen no puede estar vacío",
  },
  imageAlt: {
    valueMissing: "El campo de descripción de imagen no puede estar vacío",
  },
  categoryProduct: {
    valueMissing: "El campo categoría no puede estar vacío",
  },
  productName: {
    valueMissing: "El campo nombre del producto no puede estar vacío",
  },
  productPrice: {
    valueMissing: "El campo precio del producto no puede estar vacío",
  },
  productDescription: {
    valueMissing: "El campo descripción no puede estar vacío",
  },
};

const showErrorMessage = (datatype, input) => {
  let message = "";
  errorTypes.forEach((error) => {
    if (input.validity[error]) {
      message = errorMessages[datatype][error];
      document.querySelector(".form__button").setAttribute("disabled","");
    }
  });
  return message;
};

export default validate;
