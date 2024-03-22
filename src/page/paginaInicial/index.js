import React, { useEffect, useState } from 'react';
import './style.css';
import logo from '../../img/mundo.gif';
import ButtonComponente from '../../componete/buttonComponente';
import axios from 'axios';

export default function PaginaInicial({ paginaAtal }) {

  const [nomePortifolio, setNomePortifolio] = useState('');
  console.log('Nome do portifolio:', nomePortifolio);

  const buscarDadosPortifolio = async () => {
    try {
      const response = await axios.get('http://localhost:3001/routes/portifolio/buscarPortifolio');
      console.log('Dados do portifolio:', response.data);
      setNomePortifolio(response.data[0].nome);
    } catch (error) {
      console.log('Erro ao buscar os dados:', error);
    }
  };
  useEffect(() => {buscarDadosPortifolio()},[]);

  return (
    <div id="pagina1">
      <div className='header-container'>
        <img className='header-img' width={80} height={70} src={logo} alt='' />
        <div className='header-text'>
          <ButtonComponente text='Início' onClick={() => paginaAtal('pagina1')} />
          <ButtonComponente text='Sobre mim' onClick={() => paginaAtal('pagina2')} />
          <ButtonComponente text='Habilidades' onClick={() => paginaAtal('pagina3')} />
          <ButtonComponente text='Projetos' onClick={() => paginaAtal('pagina4')} />
          <ButtonComponente text='Login' onClick={() => paginaAtal('login')} />

        </div>
      </div>
      <div className='body'>
        <div className='body-text'>
          <p className='texto-animado'>Olá, seja bem vindo, meu nome é</p>
          <div className='titulo-animado' >
            <h1>{nomePortifolio ? nomePortifolio : 'Samuel Spinola da Cruz'}</h1>
            <p>Desenvolvedor full-stack</p>
          </div>
        </div>
      </div>
    </div>
  );
}
