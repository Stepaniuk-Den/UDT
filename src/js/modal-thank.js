(() => {
  const refs = {
    openModalBtn: document.querySelector('[thanks-data-modal-open]'),
    closeModalBtn: document.querySelector('[thanks-data-modal-close]'),
    modal: document.querySelector('[thanks-data-modal]'),
    form: document.querySelector('.contacts-form'),
  };

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('thanks-is-hidden');
  }
  refs.form.addEventListener('submit', event => {
    event.preventDefault();
    refs.modal.classList.toggle('thanks-is-hidden');
  });
})();
