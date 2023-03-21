import formTemplate from "./formTemplate.js";

const footerTemplate = () => {

  const template = `
          <div class="footer">
              <div class="footer__container">
                  <a class="footer__logo" href="">
                      <img src="./assets/img/Logo.png" alt="">
                  </a>
                  <ul class="footer__nav">
                      <li><a href="">Quienes somos</a></li>
                      <li><a href="">Política de privacidad</a></li>
                      <li><a href="">Programa de fidelidad</a></li>
                      <li><a href="">Nuestras tiendas</a></li>
                      <li><a href="">Quiero ser franquiciado</a></li>
                      <li><a href="">Anuncie aquí</a></li>
                  </ul>
              </div>
              <div class="footer__form__container">
                  <span class="form__title footer__form__title">Hable con nosostros</span>
                  ${formTemplate("footer")}
              </div>
          </div>
            <div class="footer__author">
              <p>Desarrollado por Jeffer Andrés Rojas</p>
              <p>&copy; 2023</p>
            </div>
    `;
  return template;
};

export default footerTemplate;
