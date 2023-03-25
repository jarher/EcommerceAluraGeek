import validate from "../service/validateForm.js";

const validateInputs = () => {
  document.querySelectorAll("input").forEach((input) =>
    input.addEventListener("blur", (input) => {
      validate(input.target);
    })
  );

  document.querySelector("textarea").addEventListener("blur", (textarea) => {
    validate(textarea.target);
  });
};

export default validateInputs;
