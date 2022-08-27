import { FilmApiService } from "./filmApiService";
import generateCards from "./renderCards";

const refs = {
    filmsList: document.querySelector('.films-list'),
}
const filmApiService = new FilmApiService();

async function showTrandingFilms() {
    filmApiService.resetPage();

    const responce = await filmApiService.fetchTrending();
    const content = generateCards(responce.results);
    refs.filmsList.insertAdjacentHTML('beforeend', content)
}

showTrandingFilms();