(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-thanks-modal-open]'),
    closeModalBtn: document.querySelector('[data-thanks-modal-close]'),
    modal: document.querySelector('[data-thanks-modal]'),
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
