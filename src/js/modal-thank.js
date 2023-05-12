(() => {
  const refs = {
    openModalBtn: document.querySelector("[thanks-data-modal-open]"),
    closeModalBtn: document.querySelector("[thanks-data-modal-close]"),
    modal: document.querySelector("[thanks-data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("thanks-is-hidden");
  }
})();