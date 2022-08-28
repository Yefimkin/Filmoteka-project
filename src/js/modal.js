import { BasicLightBox } from "basiclightbox";

const refs = {
    filmsList: document.querySelector('.films-list'),
}

refs.filmsList.addEventListener('click', onClickFilm);

async function onClickFilm(e) {
    console.log(e)
}