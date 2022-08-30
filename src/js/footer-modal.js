(() => {
  const modal = document.querySelector('.backdrop');
  const openModalBtn = document.querySelector('.link-footer');
  const closeModalBtn = document.querySelector('.footer-modal-close');

  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    e.preventDefault();
    modal.classList.toggle('is-hidden');
  }
})();
