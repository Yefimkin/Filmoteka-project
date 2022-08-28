import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { FilmApiService } from './filmApiService';
import generateCards from './renderCards';
import { removeLoader, startLoader } from './loader';

const refs = {
    filmsList: document.querySelector('.films-list'),
    pagination: document.getElementById('pagination'),
}
const filmApiService = new FilmApiService();

const paginationProp = {
    searchingType: '',
    page: 1,
    totalItems: null,
    searchingQuery: '',
};

function initPagination({
    searchingType,
    page,
    totalItems,
    searchingQuery,
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
        
        if (searchingType === 'searchingMovies') {
            try {
                startLoader();
                filmApiService.query = searchingQuery;
                const responceMovies = await filmApiService.fetchMovies();
                const responceGenres = await filmApiService.fetchGenres();
                const filmsArray = responceMovies.results;
                const genresArray = responceGenres.genres;
                
                setTimeout(() => {
                    refs.filmsList.innerHTML = generateCards(filmsArray, genresArray);
                    removeLoader();
                }, 500);
                scrollToTop();
            } catch (error) {
                console.log('fetchMovies:', error);
                removeLoader();
            }
            
        }

        if (searchingType === 'trendingMovies') {
            try {
                const responceTrending = await filmApiService.fetchTrending();
                const responceGenres = await filmApiService.fetchGenres();
                const filmsArray = responceTrending.results;
                const genresArray = responceGenres.genres;
                
                setTimeout(() => {
                    refs.filmsList.innerHTML = generateCards(filmsArray, genresArray);
                    removeLoader();
                }, 500);
                scrollToTop();
            } catch (error) {
                console.log(error);
            }
        }
    });
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

export { paginationProp, initPagination };