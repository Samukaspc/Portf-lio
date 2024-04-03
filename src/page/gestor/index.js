import { useState } from "react";
import EditarInformacaoDesenvolvedor from "./editarInformacaoDesenvolvedor";
import EditarProjeto from "./editar";

export default function Gestor() {
    const [paginaAtual, setPaginaAtual] = useState('pagina1');
    console.log('Pagina atual:', paginaAtual);

    const handlePagina = (pagina) => {
        setPaginaAtual(pagina);
    }

    return (
        <>
        {paginaAtual === 'pagina1' && (
            <>
            <EditarInformacaoDesenvolvedor paginaAtual={handlePagina} />
            </>
        )}
        {paginaAtual === 'pagina2' && (
            <>
            <EditarProjeto paginaAtual={handlePagina} />
            </>
        )}
        </>
    );
}
