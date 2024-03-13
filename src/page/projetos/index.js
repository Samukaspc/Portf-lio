import ButtonComponente from "../../componete/buttonComponente";
import './style.css'
import emBreve from '../../img/embreve.jpg'
import ImgComponente from "../../componete/imgComponente";
import React from 'react';

export default function Projetos({ paginaAtal }) {
    console.log('paginaAtal', paginaAtal)
    const [quantidadeProjeto, setQuantidadeProjeto] = React.useState(3)

    return (
        <div className="container-projeto">
            <div className="header-conatiner"  >
                <h1>Projetos</h1>
            </div>
            <ImgComponente src={emBreve} width={'400px'} quantidade={quantidadeProjeto} />
            <div className="button-style-projeto" >
                <ButtonComponente text='Ver mais' onClick={() => {
                    setQuantidadeProjeto(quantidadeProjeto + 3)
                } } />
            {quantidadeProjeto > 3 &&  
                <ButtonComponente text='Resetar' onClick={() => {
                    setQuantidadeProjeto(3)
                } } />
            }
            </div>
        </div>
    );
}