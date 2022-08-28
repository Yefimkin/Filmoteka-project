import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { FilmApiService } from './filmApiService';
import generateCards from './renderCards';

const refs = {
    filmsList: document.querySelector('.films-list'),
    pagination: document.getElementById('pagination'),
}
const filmApiService = new FilmApiService();

export const paginationProp = {
    page: 1,
    totalItems: null,
};

export function initPagination({
    page,
    totalItems,
}) {
    const options = {
        totalItems,
        itemsPerPage: 20,
        visiblePages: 5,
        page,
        centerAlign: false,
        firstItemClassName: 'tui-first-child',
        lastItemClassName: 'tui-last-child',
        template: {
            page: '<a href="#" class="tui-page-btn">{{page}}</a>',
            currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
            moveButton:
            '<a href="#" class="tui-page-btn tui-{{type}}">' +
                '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</a>',
            disabledMoveButton:
            '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</span>',
            moreButton:
            '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                '<span class="tui-ico-ellip">...</span>' +
            '</a>'
        }
    };

    const pagination = new Pagination(refs.pagination, options);

    pagination.on('afterMove', async ({ page }) => {
        filmApiService.page = page;
        
        const responceTrending = await filmApiService.fetchTrending();
        const responceGenres = await filmApiService.fetchGenres();
        const filmsArray = responceTrending.results;
        const genresArray = responceGenres.genres;
        
        refs.filmsList.innerHTML = generateCards(filmsArray, genresArray);
        
        scrollToTop();
    });
}

function scrollToTop() {
    window.scrollTo(0, 0);
}