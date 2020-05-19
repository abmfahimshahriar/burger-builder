import axios from 'axios';

const instance = axios.create({
    baseURL: '<your firebase api>'
});

export default instance;