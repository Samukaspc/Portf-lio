import React, { useState, useEffect } from 'react';
import { Button, Card, Tooltip, Pagination } from 'antd';
import './style.css';

export default function CardComponente({ dadosProjeto, deletarProjetoCard }) {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    useEffect(() => {
        const totalPages = Math.ceil(dadosProjeto.length / pageSize);
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(totalPages);
        } else if (currentPage === 0 && totalPages > 0) {
            setCurrentPage(1);
        }
    }, [dadosProjeto, currentPage, pageSize]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const customItemRender = (page, type, originalElement) => {
        if (type === 'page') {
            return (
                <div style={{ marginTop: '-10px' }}>
                    {originalElement}
                </div>
            );
        }
        return originalElement;
    };

    const handleDelete = (nomeProjeto) => {
        deletarProjetoCard(nomeProjeto);
        const totalPages = Math.ceil((dadosProjeto.length - 1) / pageSize);
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    };

    const indexOfLastProject = currentPage * pageSize;
    const indexOfFirstProject = indexOfLastProject - pageSize;
    const currentProjects = dadosProjeto.slice(indexOfFirstProject, indexOfLastProject);

    return (
        <div>
            <div  style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {currentProjects.map((projeto, index) => (
                    <div key={index} style={{ position: 'relative', width: 155, height: 225 }}>
                        <a href={projeto.urlProjeto} target="_blank" rel="noopener noreferrer">
                            <div className='container-card-componete'>
                            <Card hoverable  cover={<img alt='../../img/embreve.jpg' src={projeto.urlImagem} />}>
                                <Tooltip title={projeto.nomeProjeto} placement="top" color="blue">
                                    <Card.Meta title={projeto.nomeProjeto}  style={{ display: 'flex', textAlign: 'center' }} />
                                </Tooltip>
                            </Card>
                            </div>
                        </a>
                        <div style={{ position: 'absolute', top: 0 }}>
                            <Button onClick={() => handleDelete(projeto.nomeProjeto)} type="primary" danger style={{ width: '100%' }}>Deletar</Button>
                        </div>
                    </div>
                ))}
            </div>
            {dadosProjeto.length > pageSize && (
                <Pagination
                    current={currentPage}
                    total={dadosProjeto.length}
                    pageSize={pageSize}
                    onChange={handlePageChange}
                    itemRender={customItemRender}
                    style={{ marginTop: '10px' }}
                />
            )}
        </div>
    );
}
