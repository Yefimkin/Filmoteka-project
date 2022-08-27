import noPoster from '../images/poster-not-found.png'
function createCard(item) {
    const url = "https://image.tmdb.org/t/p/w500/";
    const { poster_path, id } = item;

   let moviePoster = url + poster_path;
    if (!poster_path) {
        moviePoster = noPoster;
    }
    

    return `<li class="films-list__item data-id=${id}">
    <img class="films-list__img" src="${moviePoster}" alt="" loading="lazy">
    <div class="films-list__description">
        funny friends <br> funny enemies
    </div>
    </li>`
}

export default function generateCards(images) {
    return images.reduce((acc, img) => {
        return acc + createCard(img);
    }, '')
}