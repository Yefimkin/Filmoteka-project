import { FilmApiService } from "./filmApiService";

const refs = {
    form: document.forms[0],
}

const filmApiService = new FilmApiService();

refs.form.addEventListener('submit', onSubmitForm);

async function onSubmitForm(e) {
    e.preventDefault();

    filmApiService.query = e.target.query.value;
    const responce = await filmApiService.fetchMovies();
    console.log(responce);

    const responce1 = await filmApiService.fetchGenres();
    console.log(responce1.genres)
}
