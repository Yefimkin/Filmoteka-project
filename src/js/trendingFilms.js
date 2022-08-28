import { FilmApiService } from "./filmApiService";
import { removeLoader, startLoader } from "./loader";
import generateCards from "./renderCards";
import { paginationProp, initPagination } from "./pagePagination";

const refs = {
    filmsList: document.querySelector('.films-list'),
}
const filmApiService = new FilmApiService();

async function showTrandingFilms() {
    
    startLoader();
    filmApiService.resetPage();

    const responceGenres = await filmApiService.fetchGenres();
    const responceTrending = await filmApiService.fetchTrending();
    const genresArray = responceGenres.genres;
    const filmsArray = responceTrending.results;
    const { page, total_results } = responceTrending;

    // properties for pagination
    paginationProp.page = page;
    paginationProp.totalItems = total_results;
    paginationProp.searchingType = 'trendingMovies';

    // init pagination
    initPagination(paginationProp);
    const moviesList = generateCards(filmsArray, genresArray);
    refs.filmsList.insertAdjacentHTML('beforeend', moviesList);
    removeLoader();
}

showTrandingFilms();