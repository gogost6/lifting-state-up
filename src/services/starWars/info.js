import axios from "axios";
const apiUrl = 'https://swapi.dev/api';

export const getPeople = () => {
    return axios.get(`${apiUrl}/people`)
        .then(resp => resp.data)
        .catch(err => console.log(err));
}