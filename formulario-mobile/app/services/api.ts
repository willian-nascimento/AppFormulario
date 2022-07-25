import axios from "axios";

const api = axios.create({
    baseURL: 'https://formulario-api-v1.herokuapp.com/',
});

export default api;