import { FilmApiService } from "./filmApiService";

const refs = {
    form: document.forms[0],
}

const filmApiService = new FilmApiService();

refs.form.addEventListener('submit', onSubmitForm);

async function onSubmitForm(e) {
    e.preventDefault();

    filmApiService.query = e.target.query.value;
    const moviesArr = await filmApiService.fetchMovies();
    console.log(moviesArr);

    const genresArr = await filmApiService.fetchGenres();
    console.log(genresArr.genres)
}
