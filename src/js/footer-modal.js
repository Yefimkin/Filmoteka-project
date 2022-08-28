const modal = document.querySelector('.backdrop');
const openModalBtn = document.querySelector('.link-footer');
const closeModalBtn = document.querySelector('.footer-modal-close');

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', openModal);
function openModal(e) {
  e.preventDefault();
  modal.classList.toggle('is-hidden');
}
