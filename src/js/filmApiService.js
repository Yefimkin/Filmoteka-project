import axios from "axios";

BASE_URL = "https://api.themoviedb.org/3";
API_KEY = "api_key=5f364d2fc6b25c805674b50a1c63d59e";

export class FilmApiService {
    constructor() {
        this.query = '';
        this.ID = '';
        this.page = 1;

    }

    async fetchMovies() {
        const url = `${BASE_URL}/search/movie?${API_KEY}&query=${this.query}&page=${this.page}`;
        const responce = await axios.get(url);
        return responce.data;
    }

    async fetchTrending() {
        const url = `${BASE_URL}/trending/all/day?${API_KEY}&page=${this.page}`;
        const responce = await axios.get(url);
        return responce.data;
    }

    async fetchMovieByID() {
        const url = `${BASE_URL}/movie/${this.ID}?${API_KEY}`;
        const responce = await axios.get(url);
        return responce.data;
    }

    async fetchMovieTrailer() {
        const url = `${BASE_URL}/movie/${this.ID}/videos?${API_KEY}`;
        const responce = await axios.get(url);
        return responce.data;
    }

    async fetchGenres() {
        const url = `${BASE_URL}/genre/movie/list?${API_KEY}&language=en-US`;
        const responce = await axios.get(url);
        return responce.data;
  }
}