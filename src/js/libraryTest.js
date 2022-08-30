import { FilmApiService } from "./filmApiService";
import { readLocalStorage, checkIdInLocalStorage } from "./localStorage";
import generateCards from "./renderCards";
import onClickFilm from "./modal";


//   readLocalStorage,
//   checkIdInLocalStorage,
//   addIdToLocalStorage,
//   removeIdFromLocalStorage,

const refs = {
    filmList: document.querySelector('.films-list'),
    watchesBtn: document.querySelector('.watched-button'),
    queueBtn: document.querySelector('.queue-button'),
}

const keyWatched = 'watched';
const keyQueue = 'queue';
const filmApiService = new FilmApiService();

refs.watchesBtn.addEventListener('click', showWatchedFilms);
refs.queueBtn.addEventListener('click', showQueueFilms);
refs.filmList.addEventListener('click', onClickFilm);


async function showWatchedFilms() {
    const watchedFilms = readLocalStorage(keyWatched);
    refs.filmList.innerHTML = '';

    if (!watchedFilms || watchedFilms.length === 0) {
        console.log("You have not watched films");
        return;
    }

    const arrayOfPromises = watchedFilms.map(async film => {
        console.log(film)
        filmApiService.ID = film;
        const response = await filmApiService.fetchMovieByID();
        return response;
    })

    const users = await Promise.all(arrayOfPromises);

    const responceGenres = await filmApiService.fetchGenres()
    const genresArray = responceGenres.genres;
    refs.filmList.innerHTML = generateCards(users, genresArray);
}

showWatchedFilms();

async function showQueueFilms() {
    const watchedFilms = readLocalStorage(keyQueue);
    refs.filmList.innerHTML = '';

    if (!watchedFilms || watchedFilms.length === 0) {
        console.log("You have not watched films");
        return;
    }

    const arrayOfPromises = watchedFilms.map(async film => {
        filmApiService.ID = film;
        const response = await filmApiService.fetchMovieByID();
        return response;
    })

    const users = await Promise.all(arrayOfPromises);

    const responceGenres = await filmApiService.fetchGenres();
    const genresArray = responceGenres.genres;
    refs.filmList.innerHTML = generateCards(users, genresArray);

}