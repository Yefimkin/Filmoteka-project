import { Notify } from 'notiflix';
import { FilmApiService } from './filmApiService';
import generateCards from "./renderCards";
import { startLoader, removeLoader } from './loader';
import { paginationProp, initPagination } from './pagePagination';


const refs = {
    searchFormEl: document.getElementById("search-form"),
    inputEl: document.querySelector('input[name="query"]'),
    filmsList: document.querySelector('.films-list'),
}

const filmApiService = new FilmApiService();



refs.searchFormEl.addEventListener('submit', onSubmitForm);

async function onSubmitForm(e) {
    e.preventDefault();
    
    filmApiService.query = e.target.query.value.trim();
    filmApiService.resetPage();
    
    if (filmApiService.query === '') {
        Notify.info('Please, enter movie name');
        return;
    }    

    const responceMovies = await filmApiService.fetchMovies();
    const responceGenres = await filmApiService.fetchGenres();
    const moviesArray = responceMovies.results;
    const genresArray = responceGenres.genres;
    const { page, total_results } = responceMovies;

    if (moviesArray.length === 0) {
        Notify.info('We dont find this movie, please try again');
        return;
    }

    // properties for pagination
    paginationProp.searchingType = 'searchingMovies';
    paginationProp.page = page;
    paginationProp.totalItems = total_results;
    paginationProp.searchingQuery = filmApiService.query;

    try {
        startLoader();
        clearMarkup();
        
        initPagination(paginationProp);
        const moviesList = generateCards(moviesArray, genresArray);
        refs.filmsList.insertAdjacentHTML('beforeend', moviesList);
        
        removeLoader();
        
    }
    catch (error) {
        console.log(error);
        removeLoader();
    }
}

function clearMarkup() {
    return refs.filmsList.innerHTML = ''
}