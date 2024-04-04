import './style.css'
import ImgComponente from "../../componete/imgComponente";
import React, { useEffect } from 'react';
import { BuscarDadosProjeto } from "../../routers/uploadProjetoRouters";

export default function Projetos() {
    const [dadosProjeto, setDadosProjeto] = React.useState([])

    useEffect(() => {
        BuscarDadosProjeto().then(response => {
            setDadosProjeto(response)
        })
    }, [])

    return (
        <div id="pagina4" className="container-projeto">
            <div className="header-conatiner"  >
                <h1>Projetos</h1>
            </div>
            <ImgComponente dados={dadosProjeto}  />
        </div>
    );
}