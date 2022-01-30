import axios from "axios";


export const api = {
    // baseURL: 'https://wtwapi.azurewebsites.net/api/',
    baseURL: 'https://wtwapi.azurewebsites.net/',
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
    return api.get('movie/random');
}

export const fetchListMovie = () => {
    return api.get('lists')
}

export const getMovieByTag = tag => {
    return api.get('movies', {
        tag
    })
}
