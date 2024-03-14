import React from 'react';
import './style.css';
import logo from '../../img/mundo.gif';
import ButtonComponente from '../../componete/buttonComponente';

export default function PaginaInicial({ paginaAtal }) {
  return (
    <div id="pagina1">
      <div className='header-container'>
        <img className='header-img' width={80} height={70} src={logo} alt='' />
        <div className='header-text'>
          <ButtonComponente text='Início' onClick={() => paginaAtal('pagina1')} />
          <ButtonComponente text='Sobre mim' onClick={() => paginaAtal('pagina2')} />
          <ButtonComponente text='Habilidades' onClick={() => paginaAtal('pagina3')} />
          <ButtonComponente text='Projetos' onClick={() => paginaAtal('pagina4')} />
        </div>
      </div>
      <div className='body'>
        <div className='body-text'>
          <p className='texto-animado'>Olá, seja bem vindo, meu nome é</p>
          <div className='titulo-animado' >
            <h1>Samuel Spinola da Cruz.</h1>
            <p>Desenvolvedor full-stack</p>
          </div>
        </div>
      </div>
    </div>
  );
}
