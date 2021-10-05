import axios from "axios";

export const fetchRandomMovie = async () => {
    try {
        return await axios({
            method: "GET",
            url: 'https://wtwapi.azurewebsites.net/api/movies/random',
        });
    }
    catch (e) {
        console.log(e);
    }
}

export const fetchListMovie = async () => {
    try {
        return await axios({
            method: "GET",
            url: 'https://wtwapi.azurewebsites.net/api/movies/list',
        });
    }
    catch (e) {
        console.log(e);
    }
}
