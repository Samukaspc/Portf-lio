import axios from 'axios';

export function BuscarDadosPortifolio() {
    return axios.get('https://backendportfolio-umvr.onrender.com/routes/portifolio/buscarPortifolio')
        .then(response => {
            const url = process.env.URL_LOCAL
            console.log('URL:', url);
            return response.data;
        })
        .catch(error => {
            console.log('Erro ao buscar os dados na primeira URL. Tentando a segunda URL...', error);
            return axios.get('http://localhost:3001/routes/portifolio/buscarPortifolio')
                .then(response => {
                    return response.data;
                })
                .catch(error => {
                    console.log('Erro ao buscar os dados na segunda URL:', error);
                    throw error;
                });
        });
}

export function InserirDadosPortifolio(values) {
    return axios.post('https://backendportfolio-umvr.onrender.com/routes/portifolio/inserirDadosPortifolio', values)
        .then(response => {
            console.log('Dados inseridos com sucesso:', response);
        })
        .catch(error => {
            return axios.post('http://localhost:3001/routes/portifolio/inserirDadosPortifolio', error)
                .then(response => {
                    return response.data;
                })
                .catch(error => {
                    console.log('Erro ao inserir os dados:', error);
                    throw error;
                });
        });
}