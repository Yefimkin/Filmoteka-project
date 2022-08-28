import { FilmApiService } from "./filmApiService";
import generateCards from "./renderCards";
import { paginationProp, initPagination } from "./pagePagination";

const refs = {
    filmsList: document.querySelector('.films-list'),
}
const filmApiService = new FilmApiService();

async function showTrandingFilms() {
    filmApiService.resetPage();

    const responceGenres = await filmApiService.fetchGenres();
    const responceTrending = await filmApiService.fetchTrending();
    const genresArray = responceGenres.genres
    const filmsArray = responceTrending.results;
    const { page, total_results } = responceTrending;

    // properties for pagination
    paginationProp.page = page;
    paginationProp.totalItems = total_results;
    console.log(filmsArray)

    // init pagination
    initPagination(paginationProp);
    const content = generateCards(filmsArray, genresArray);
    refs.filmsList.insertAdjacentHTML('beforeend', content);
}

showTrandingFilms();