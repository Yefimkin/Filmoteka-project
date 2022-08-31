// (() => {
//   const modal = document.querySelector('.backdrop');
//   const openModalBtn = document.querySelector('.link-footer');
//   const closeModalBtn = document.querySelector('.footer-modal-close');

//   openModalBtn.addEventListener('click', toggleModal);
//   closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal(e) {
//     e.preventDefault();
//     modal.classList.toggle('is-hidden');
//   }
// })();

import * as basicLightbox from "basiclightbox";
import adamovskiy from '../images/footer-modal/adamovskiy.jpg';
import arikov from '../images/footer-modal/arikov.jpg';
import hura from '../images/footer-modal/hura.jpg';
import chubenko from '../images/footer-modal/chubenko.jpg';
import kornev from '../images/footer-modal/kornev.jpg';
import monastyrskyi from '../images/footer-modal/monastyrskyi.jpg';
import rosolov from '../images/footer-modal/rosolov.jpg';
import yefimkin from '../images/footer-modal/yefimkin.jpg';
import zabolotskyi from '../images/footer-modal/zabolotskyi.jpg';

const refs = {
  modalTeam: document.querySelector('.link-footer'),
}

refs.modalTeam.addEventListener('click', onModalTeamClick);

function onModalTeamClick(e) {
  e.preventDefault();

  const modalTeam = basicLightbox.create(`
    <div class="team-modal">
    <div class="team-cards">
      <h2 class="team-cards__title">Our team!</h2>
      <div class="team-cards__first">
        <div class="team-cards_item">
          <a href="https://github.com/Yefimkin" target="blank">
            <p class="team-cards_name">Denys</p>
            <img
              class="team-cards_photo"
              src="${yefimkin}}"
              alt="profile"
            />
            <p class="team-cards_post">Team lead</p>
          </a>
        </div>
        <div class="team-cards_item">
          <p class="team-cards_name">Denys</p>
          <a href="https://github.com/DenisHura" target="blank">
            <img
              class="team-cards_photo"
              src="${hura}"
              alt="profile"
            />
            <p class="team-cards_post">Scrum master</p>
          </a>
        </div>
      </div>
      <div class="team-cards__second">
        <div class="team-cards_item">
          <p class="team-cards_name">Serhii</p>
          <a href="https://github.com/Lakei87" target="blank">
            <img
              class="team-cards_photo"
              src="${monastyrskyi}"
              alt="profile"
            />
            <p class="team-cards_post">Developer</p>
          </a>
        </div>
        <div class="team-cards_item">
          <p class="team-cards_name">Olexander</p>
          <a href="https://github.com/Alexander0k" target="blank">
            <img
              class="team-cards_photo"
              src="${adamovskiy}"
              alt="profile"
            />
            <p class="team-cards_post">Developer</p>
          </a>
        </div>
        <div class="team-cards_item">
          <p class="team-cards_name">Olexander</p>
          <a href="https://github.com/Kornev-js" target="blank">
            <img
              class="team-cards_photo"
              src="${kornev}"
              alt="profile"
            />
            <p class="team-cards_post">Developer</p>
          </a>
        </div>
      </div>
      <div class="team-cards__third">
        <div class="team-cards_item">
          <p class="team-cards_name">Artem</p>
          <a href="https://github.com/tommychubenko" target="blank">
            <img
              class="team-cards_photo"
              src="${chubenko}"
              alt="profile"
            />
            <p class="team-cards_post">Developer</p>
          </a>
        </div>
        <div class="team-cards_item">
          <p class="team-cards_name">Vitaliy</p>
          <a href="https://github.com/Racoonyaka2085" target="blank">
            <img
              class="team-cards_photo"
              src="${arikov}"
              alt="profile"
            />
            <p class="team-cards_post">Developer</p>
          </a>
        </div>
        <div class="team-cards_item">
          <p class="team-cards_name">Denys</p>
          <a href="https://github.com/Denys-Zabolotskyi" target="blank">
            <img
              class="team-cards_photo"
              src="${zabolotskyi}"
              alt="profile"
            />
            <p class="team-cards_post">Developer</p>
          </a>
        </div>
        <div class="team-cards_item">
          <p class="team-cards_name">Vladyslav</p>
          <a href="https://github.com/VladRosolov" target="blank">
            <img
              class="team-cards_photo"
              src="${rosolov}"
              alt="profile"
            />
            <p class="team-cards_post">Developer</p>
          </a>
        </div>
      </div>
    </div>
    <button aria-label="close" class="footer-modal-close">
      <svg class="footer-modal-close__icon">
        <use href="./images/icons.svg#close-modal"></use>
      </svg>
    </button>
  </div>
  `)
  modalTeam.show();
}
