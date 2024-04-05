import axios from "axios";

export function  FazerLogin(values) {
    return axios.post('https://backendportfolio-umvr.onrender.com/routes/usuario/login', values)
    .then(response => {
        return response.data;
    })
    .catch(() => {
        return axios.post('http://localhost:3001/routes/usuario/login', values)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw error;
            });
    });
}