import { FilmApiService } from "./filmApiService";
import generateCards from "./renderCards";
import { removeLoader, startLoader } from "./loader";
import { paginationProp, initPagination } from "./pagePagination";

const refs = {
    filmsList: document.querySelector('.films-list'),
}
const filmApiService = new FilmApiService();

async function showTrandingFilms() {
    
    startLoader();
    filmApiService.resetPage();

    try {        
        const responceGenres = await filmApiService.fetchGenres();
        const responceTrending = await filmApiService.fetchTrending();
        // console.log(responceTrending)
        const genresArray = responceGenres.genres;
        const filmsArray = responceTrending.results;
        const { page, total_results } = responceTrending;
        
        // properties for pagination
        paginationProp.page = page;
        paginationProp.totalItems = total_results;
        paginationProp.searchingType = 'trendingMovies';

        // init pagination
        initPagination(paginationProp);
        refs.filmsList.innerHTML = generateCards(filmsArray, genresArray);
        removeLoader();        
    } catch (error) {
        console.log(error)
    }
}

showTrandingFilms();