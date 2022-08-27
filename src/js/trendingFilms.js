import { FilmApiService } from "./filmApiService";
import generateCards from "./renderCards";
import {startLoader, removeLoader} from './loader'

const refs = {
    filmsList: document.querySelector('.films-list'),
}
const filmApiService = new FilmApiService();

async function showTrandingFilms() {

    try {
        startLoader()

        filmApiService.resetPage();
        const responce = await filmApiService.fetchTrending();
        const content = generateCards(responce.results);
        refs.filmsList.insertAdjacentHTML('beforeend', content)
        removeLoader()
        // console.log(respo);
    }
    catch (error) {
      console.log(error);
    }
}

showTrandingFilms();