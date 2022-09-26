(() => {
  const refs = {
    openModalmodal__btn: document.querySelector('[data-modal-open]'),
    closeModalmodal__btn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalmodal__btn.addEventListener('click', toggleModal);
  refs.closeModalmodal__btn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
