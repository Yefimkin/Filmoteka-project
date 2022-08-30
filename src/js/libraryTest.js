import { FilmApiService } from "./filmApiService";
import { readLocalStorage } from "./localStorage";
import generateCards from "./renderCards";
import onClickFilm from "./modal";
import { Notify } from "notiflix";

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
        Notify.info('Your film list is empty');
        return;
    }

    const arrayOfPromises = watchedFilms.map(async film => {
        filmApiService.ID = film;
        return await filmApiService.fetchMovieByID();
    })

    const arrayOfFilms = await Promise.all(arrayOfPromises);

    const responseGenres = await filmApiService.fetchGenres()
    const genresArray = responseGenres.genres;
    refs.filmList.innerHTML = generateCards(arrayOfFilms, genresArray);
}

showWatchedFilms();

async function showQueueFilms() {
    const watchedFilms = readLocalStorage(keyQueue);
    refs.filmList.innerHTML = '';

    if (!watchedFilms || watchedFilms.length === 0) {
        Notify.info("Your film list is empty");
        return;
    }

    const arrayOfPromises = watchedFilms.map(async film => {
        filmApiService.ID = film;
        return await filmApiService.fetchMovieByID();
    })

    const arrayOfFilms = await Promise.all(arrayOfPromises);

    const responseGenres = await filmApiService.fetchGenres();
    const genresArray = responseGenres.genres;
    refs.filmList.innerHTML = generateCards(arrayOfFilms, genresArray);

}