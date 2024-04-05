import axios from 'axios';

export function enviarDadosProjeto(values) {
    return axios.post('https://backendportfolio-umvr.onrender.com/routes/uploadProjeto/register', values)
        .then(response => {
            console.log('Dados inseridos com sucesso:', response);
            return response.data; 
        })
        .catch(error => {
            console.error('Erro ao inserir os dados:', error);
            console.log('Tentando a segunda URL...');
            return axios.post('http://localhost:3001/routes/uploadProjeto/register', values)
                .then(response => {
                    console.log('Dados inseridos com sucesso (segunda tentativa):', response);
                    return response.data;
                })
                .catch(error => {
                    console.error('Erro ao inserir os dados na segunda URL:', error);
                    throw error;
                });
        });
}

export function BuscarDadosProjeto() {
    return axios.get('https://backendportfolio-umvr.onrender.com/routes/uploadProjeto/buscar')
        .then(response => {
            console.log('Dados do projeto:', response.data);
            return response.data;
        })
        .catch(error => {
            console.error('Erro ao buscar os dados do projeto:', error);
            console.log('Tentando a segunda URL...');
            return axios.get('http://localhost:3001/routes/uploadProjeto/buscar')
                .then(response => {
                    console.log('Dados do projeto (segunda tentativa):', response.data);
                    return response.data;
                })
                .catch(error => {
                    console.error('Erro ao buscar os dados do projeto na segunda URL:', error);
                    throw error;
                });
        });
}

export function ApagarProjetoCard(nomeProjeto) {
    return axios.delete(`https://backendportfolio-umvr.onrender.com/routes/uploadProjeto/deletar/${nomeProjeto}`)
        .then(response => {
            console.log('Projeto deletado com sucesso:', response);
            return response.data;
        })
        .catch(error => {
            console.error('Erro ao deletar o projeto:', error);
            console.log('Tentando a segunda URL...');
            return axios.delete(`http://localhost:3001/routes/uploadProjeto/deletar/${nomeProjeto}`)
                .then(response => {
                    console.log('Projeto deletado com sucesso (segunda tentativa):', response);
                    return response.data;
                })
                .catch(error => {
                    console.error('Erro ao deletar o projeto na segunda URL:', error);
                    throw error;
                });
        });
}

export function AtualizarProjetoCard(nomeProjeto, values) {
    return axios.put(`http://localhost:3001/routes/uploadProjeto/atualizar/${nomeProjeto}`, values)
        .then(response => {
            console.log('Projeto atualizado com sucesso:', response);
            return response.data;
        })
        .catch(error => {
            console.error('Erro ao atualizar o projeto:', error);
            console.log('Tentando a segunda URL...');
            return axios.put(`http://localhost:3001/routes/uploadProjeto/atualizar/${nomeProjeto}`, values)
                .then(response => {
                    console.log('Projeto atualizado com sucesso (segunda tentativa):', response);
                    return response.data;
                })
                .catch(error => {
                    console.error('Erro ao atualizar o projeto na segunda URL:', error);
                    throw error;
                });
        });
}

