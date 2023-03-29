const loadModal = (message) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  const template = `
    <div class="modal__message">
        <div>
            <span class="material-symbols-rounded" data-type="closeModal">
            cancel
            </span>
        </div>
        <p>${message}</p>
    </div>
    `;
  modal.innerHTML = template;
  document.querySelector("body").prepend(modal);
  setTimeout(() => modal.classList.add("opacity-1"), 200);
};

export default loadModal;
