import axios from "axios";

const api= axios.create({
    baseURL:"https://api.github.com/users/Gustavotp443/"
});

export default api;
