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
    <button aria-label="close" class="modal-close footer-modal-close">
      <svg class="modal-close__svg" width="30" height="30" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="m7.975 8-.699.701 3.149 3.149 3.15 3.15-3.138 3.138L7.3 21.275l.712.713.713.712 3.137-3.137L15 16.425l3.138 3.138 3.137 3.137.713-.712.712-.713-3.137-3.137L16.425 15l3.15-3.15 3.15-3.15-.713-.712-.712-.713-3.15 3.15-3.15 3.15-3.138-3.138C10.137 8.712 8.713 7.3 8.699 7.3c-.014 0-.34.315-.724.7"
        fill-rule="evenodd"/>
      </svg>
    </button>
  </div>
  `, {
    onShow: (inst) => {
      addEventListener("keydown", checkeTheEscapeButtonToExit);
      inst.element().querySelector('.modal-close').onclick = inst.close;
    },
    onClose: () => removeEventListener("keydown", checkeTheEscapeButtonToExit)
  })

  modalTeam.show();

  function checkeTheEscapeButtonToExit(event) {
    if (event.code === "Escape") modalTeam.close();
  }
};

