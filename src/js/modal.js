import * as basicLightbox from 'basiclightbox';
import { FilmApiService } from './filmApiService';
import {
  readLocalStorage,
  checkIdInLocalStorage,
  addIdToLocalStorage,
  removeIdFromLocalStorage,
} from './localStorage';

const refs = {
  filmsList: document.querySelector('.films-list'),
};
const filmApiService = new FilmApiService();

refs.filmsList.addEventListener('click', onClickFilm);

async function onClickFilm(e) {
  if (e.target.tagName !== 'IMG') return;

  const filmID = e.target.parentElement.dataset.id;
  const url = 'https://image.tmdb.org/t/p/w500/';

  try {
    filmApiService.ID = filmID;
    const responceFilmID = await filmApiService.fetchMovieByID();
    console.log(responceFilmID);
    const {
      original_title,
      genres,
      runtime,
      popularity,
      vote_average,
      vote_count,
      poster_path,
      overview,
    } = responceFilmID;
    let moviePoster = `${url}${poster_path}`;

    if (!poster_path) {
      moviePoster = posterNotFound;
    }

    const modalFilm = basicLightbox.create(
      `
            <div class="modal">
                <div class="modal-image">
                <img class="modal-image__el" src="${moviePoster}" alt="Poster for the movie" />
                </div>
                <div class="modal-post">
                    <h2 class="modal-post__title">${original_title}</h2>
                    <div class="modal-post__info">
                        <table>
                            <tr class="tr">
                                <td class="tt">Vote / Votes</td>
                                <td class="ti">
                                <span class="vote-value">${vote_average.toFixed(
                                  1
                                )}</span>
                                /
                                <span class="votes-value">${vote_count}</span>
                                </td>
                            </tr>
                            <tr class="tr">
                                <td class="tt">Popularity</td>
                                <td class="ti popularity-value">${popularity.toFixed(
                                  1
                                )}</td>
                            </tr>
                            <tr class="tr">
                                <td class="tt">Original Title</td>
                                <td class="ti original-title-value">${original_title}</td>
                            </tr>
                            <tr class="tr">
                                <td class="tt">Genre</td>
                                <td class="ti genre-value">${showGenres(
                                  genres
                                )}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="modal-post__desription">
                        <h2 class="modal-post__desription__title">About</h2>
                        <p class="modal-post__desription__item">${overview}</p>
                    </div>
                    <div class="buttons">
                        <button class="modal-btn watched" type="button">add to Watched</button>
                        <button class="modal-btn queue" type="button">add to queue</button>
                    </div>
                </div>
                <button type="button" class="modal-close" data-modal-close>
                    <a>Close<svg class="modal-close__icon">
                        <use href="./images/icons.svg#close-modal"></use>
                    </svg></a>
                </button>
            </div>`,
      {
        onShow: instance => {
          instance.element().querySelector('a').onclick = instance.close;
        },
      }
    );

    modalFilm.show();
    // ////////////////////////////////////////////////// My code Denys Zabolotskyi
    const refs = {
      modalBtnWatched: document.querySelector('.watched'),
      modalBtnQueue: document.querySelector('.queue'),
    };

    statusModalBtnWatched();
    statusModalBtnQueue();
    function statusModalBtnWatched() {
      const keyName = 'watched';
      let isInWatched = checkIdInLocalStorage(keyName, filmID);
      if (isInWatched) {
        refs.modalBtnWatched.textContent = 'remove from watched';
      } else {
        refs.modalBtnWatched.textContent = 'add to watched';
      }
    }

    function statusModalBtnQueue() {
      const keyName = 'queue';
      let isInWatched = checkIdInLocalStorage(keyName, filmID);
      if (isInWatched) {
        refs.modalBtnQueue.textContent = 'remove from queue';
      } else {
        refs.modalBtnQueue.textContent = 'add to queue';
      }
    }
    refs.modalBtnWatched.addEventListener('click', onModalBtnWatchedClick);
    refs.modalBtnQueue.addEventListener('click', onModalBtnQueueClick);

    function onModalBtnWatchedClick() {
      const keyName = 'watched';
      let isInWatched = checkIdInLocalStorage(keyName, filmID);
      if (isInWatched) {
        removeIdFromLocalStorage(keyName, filmID);
        refs.modalBtnWatched.textContent = `add to ${keyName}`;
      } else {
        addIdToLocalStorage(keyName, filmID);
        refs.modalBtnWatched.textContent = `remove from ${keyName}`;
      }
    }

    function onModalBtnQueueClick() {
      const keyName = 'queue';
      let isInQueue = checkIdInLocalStorage(keyName, filmID);
      if (isInQueue) {
        removeIdFromLocalStorage(keyName, filmID);
        refs.modalBtnQueue.textContent = `add to ${keyName}`;
      } else {
        addIdToLocalStorage(keyName, filmID);
        refs.modalBtnQueue.textContent = `remove from ${keyName}`;
      }
    }
    // ////////////////////////////////////////////////// My code Denys Zabolotskyi
  } catch (error) {
    console.log(error);
  }
}

function showGenres(genresArray) {
  if (genresArray.length > 2) {
    const genresNameArr = genresArray
      .map(genre => genre.name)
      .slice(0, 2)
      .join(', ');
    return genresNameArr + ', Other';
  } else {
    const genresNameArr = genresArray.map(genre => genre.name).join(', ');
    return genresNameArr;
  }
}
