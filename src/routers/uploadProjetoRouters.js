import axios from 'axios';

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


export function enviarDadosProjeto(values) {
    return axios.post('http://localhost:3001/routes/uploadProjeto/register', values)
        .then(response => {
            console.log('Dados inseridos com sucesso:', response);
        })
        .catch(error => {
            console.log('Erro ao inserir os dados:', error);
            throw error;
        });
}

export  function buscarDadosProjeto() {
    return axios.get('http://localhost:3001/routes/uploadProjeto/buscar')
        .then(response => {
            console.log('Dados do projeto', response?.data);
        })
        .catch(error => {
            console.log('Erro ao inserir os dados:', error);
            throw error;
        });
}