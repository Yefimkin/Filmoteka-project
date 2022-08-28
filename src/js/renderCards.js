import posterNotFound from '../images/poster-not-found.png'

function createCard(item, genre) {
    const url = "https://image.tmdb.org/t/p/w500/";
    const { poster_path, id, title, original_title, original_name, release_date, first_air_date} = item;

 let moviePoster = `${url}${poster_path}`;
   
    if (!poster_path) {
        moviePoster = posterNotFound;
    }

    return `<li class="films-list__item data-id=${id}">
    <img class="films-list__img" src="${moviePoster}" alt="" loading="lazy">
    <div class="films-list__description">
        <p class="films-list__title">${title || original_title || original_name}</p>
        <p class="films-list__genres">${genre} | ${(release_date || first_air_date).slice(0,4)}</p>
    </div>
    </li>`
}

export default function generateCards(images, genres) {
    return images.reduce((acc, img) => {
        return acc + createCard(img, generateGenres(img, genres));
    }, '')
}

function generateGenres(dataFilm, allGenres) {
    const filmsGenresNum = dataFilm.genre_ids

    const filmsGenresName = allGenres
        .filter(genre => filmsGenresNum.includes(genre.id))
        .map(genreName => genreName.name);

    if (filmsGenresName.length > 2) {
        return filmsGenresName.slice(0,2).join(', ') + ', Other...'
    } else {
        return filmsGenresName.join(', ')
    }

}