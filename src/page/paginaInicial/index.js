import React, { useEffect, useState } from 'react';
import './style.css';
import logo from '../../img/mundo.gif';
import ButtonComponente from '../../componete/buttonComponente';
import { BuscarDadosPortifolio } from '../../routers/portifolioRouters';
import { Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

export default function PaginaInicial({ paginaAtual }) {

  const [nomePortifolio, setNomePortifolio] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.style.backgroundColor = 'white'; 
      //tem que mudar a cor do texto do h1
      document.body.style.color = 'black';
    } else {
      document.body.style.backgroundColor = '#2c2c2c'; 
      document.body.style.color = 'white';
    }
  };

  useEffect(() => {
    BuscarDadosPortifolio()
      .then(data => {
        setNomePortifolio(data[0].nome);
      })
  }, []);

  return (
    <div id="pagina1">
      <div className='header-container'>
        <img className='header-img' width={80} height={70} src={logo} alt='' />
        <div className='header-text'>
          <ButtonComponente text='Início' onClick={() => paginaAtual('pagina1')} />
          <ButtonComponente text='Sobre mim' onClick={() => paginaAtual('pagina2')} />
          <ButtonComponente text='Habilidades' onClick={() => paginaAtual('pagina3')} />
          <ButtonComponente text='Projetos' onClick={() => paginaAtual('pagina4')} />
          <ButtonComponente text='Login' onClick={() => paginaAtual('login')} />
          <Switch onClick={toggleDarkMode} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />

        </div>
      </div>
      <div className='body'>
        <div className='body-text'>
          <p className='texto-animado'>Olá, seja bem vindo, meu nome é :</p>
          <div className='titulo-animado' >
            <h1>{nomePortifolio ? nomePortifolio : 'Samuel Spinola da Cruz'}</h1>
            <p>Desenvolvedor full-stack</p>
          </div>
        </div>
      </div>
    </div>
  );
}
