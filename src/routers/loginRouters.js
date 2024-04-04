import axios from "axios";

export function  FazerLogin(values) {
    return axios.post('https://backendportfolio-umvr.onrender.com/routes/usuario/login', values)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log('Erro ao buscar os dados na primeira URL. Tentando a segunda URL...', error);
        return axios.post('http://localhost:3001/routes/usuario/login', values)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log('Erro ao buscar os dados na segunda URL:', error);
                throw error;
            });
    });
}