import { useState } from "react";
import EditarInformacaoDesenvolvedor from "./editarInformacaoDesenvolvedor";
import EditarProjeto from "./editar";

export default function Gestor() {
    const [paginaAtual, setPaginaAtual] = useState('pagina1');

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
