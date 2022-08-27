import { Notify } from 'notiflix';
import { FilmApiService } from './filmApiService'
import generateCards from "./renderCards";
import { startLoader, removeLoader } from './loader'


const refs = {
    searchFormEl: document.querySelector("#search-form"),
    inputEl: document.querySelector('input[name="query"]'),
    filmsList: document.querySelector('.films-list'),
}

const filmApiService = new FilmApiService()



refs.searchFormEl.addEventListener('submit', onSubmitForm);

async function onSubmitForm(e) {
    e.preventDefault();
    
    filmApiService.query = e.target.query.value.trim()
    
        if (filmApiService.query === '') {
            Notify.info('Please, enter movie name');
            return;
    }    

    const findedMovies = await filmApiService.fetchMovies();
    console.log(findedMovies);

    if (findedMovies.results.length === 0) {
        Notify.info('We dont find this movie, please try again');
        return;
    }

    try {
        startLoader()
        clearMarkup();
        
        const moviesList = generateCards(findedMovies.results);
        refs.filmsList.insertAdjacentHTML('beforeend', moviesList);
        
        removeLoader();
        
    }
    catch (error) {
        console.log(error);
    }
}

function clearMarkup() {
    return refs.filmsList.innerHTML = ''
}