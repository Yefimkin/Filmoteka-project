function createCard(item) {
    const url = "https://image.tmdb.org/t/p/w500/";
    const { poster_path, id } = item;

    return `<li class="films-list__item data-id=${id}">
    <img class="films-list__img" src="${url}${poster_path}" alt="" loading="lazy">
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