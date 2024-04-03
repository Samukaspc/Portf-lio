import axios from 'axios'; 
export function enviarDadosProjeto(values) {
    return axios.post('http://localhost:3001/routes/uploadProjeto/register', values)
        .then(response => {
            console.log('Dados inseridos com sucesso:', response);
            return response.data; 
        })
        .catch(error => {
            console.error('Erro ao inserir os dados:', error);
            throw error; 
        });
}

export function BuscarDadosProjeto() {
    return axios.get('http://localhost:3001/routes/uploadProjeto/buscar')
        .then(response => {
            console.log('Dados do projeto:', response.data);
            return response.data;
        })
        .catch(error => {
            console.error('Erro ao buscar os dados do projeto:', error);
            throw error; 
        });
}

 