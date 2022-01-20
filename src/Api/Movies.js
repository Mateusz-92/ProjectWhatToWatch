import axios from "axios";


export const api = {
    baseURL: 'https://wtwapi.azurewebsites.net/api/',
    get: async (path, params = {}) => {
        const response = await axios({
            method: 'GET',
            url: `${api.baseURL}${path}`,
            params
        })
        return response?.data;
    }
}

export const fetchRandomMovie = () => {
    return api.get('movies/random');
}

export const fetchListMovie = () => {
    return api.get('movies/list')
}

export const getMovieByTag = tag => {
    return api.get('movies', {
        tag
    })
}
