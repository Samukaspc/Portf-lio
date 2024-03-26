import './styled.css';
import avatar from '../../img/avatar2.jpg';
import { useState, useEffect } from 'react';
import { BuscarDadosPortifolio } from '../../routers/portifolioRouters';

export default function SobreMin() {
  const [informacaoDev, setInformacaoDev] = useState('');

  useEffect(() => {
    BuscarDadosPortifolio()
      .then(data => {
        setInformacaoDev(data[0].informacaoDev);
      })
  }, []);

  const formatarTexto = (texto) => {
    return texto.replace(/\./g, '.<br><br>');
  }

  return (
    <div id="pagina2" className='body-container'>
      <img className='body-image' src={avatar} alt='' />
      <div className='body-text'>
        <h1>Sobre Mim</h1>
        <p dangerouslySetInnerHTML={{__html: formatarTexto(informacaoDev)}}>
        </p>
      </div>
    </div>
  );
}
