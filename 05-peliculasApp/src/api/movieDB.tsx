import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '1b81e26d094dcb9dccaf59eb7e0a09b9',
        language: 'es-ES'
    }
});

export default movieDB;