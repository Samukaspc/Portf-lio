import axios from 'axios'; 
export function enviarDadosProjeto(values) {
    return axios.post('http://localhost:3001/routes/uploadProjeto/register', values)
        .then(response => {
            console.log('Dados inseridos com sucesso:', response);
            return response.data; // Retorna os dados da resposta para uso posterior, se necessário
        })
        .catch(error => {
            console.error('Erro ao inserir os dados:', error);
            throw error; // Lança o erro novamente para tratamento em um nível superior
        });
}

export function BuscarDadosProjeto() {
    return axios.get('http://localhost:3001/routes/uploadProjeto/buscar')
        .then(response => {
            console.log('Dados do projeto:', response.data);
            return response.data; // Retorna os dados do projeto para uso posterior, se necessário
        })
        .catch(error => {
            console.error('Erro ao buscar os dados do projeto:', error);
            throw error; // Lança o erro novamente para tratamento em um nível superior
        });
}

    // export function enviarDadosProjeto(values) {
    //     return axios.post('https://backendportfolio-umvr.onrender.com/routes/uploadProjeto/register', values)
    //         .then(response => {
    //             console.log('Dados inseridos com sucesso:', response);
    //         })
    //         .catch(error => {
    //             return axios.post('http://localhost:3001/routes/uploadProjeto/register', values)
    //                 .then(response => {
    //                     return response.data;
    //                 })
    //                 .catch(error => {
    //                     console.log('Erro ao inserir os dados:', error);
    //                     throw error;
    //                 });
    //         });
    // }