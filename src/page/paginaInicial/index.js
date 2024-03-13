import React from 'react';
import './style.css';
import logo from '../../img/logo.png';
import ButtonComponente from '../../componete/buttonComponente';

export default function PaginaInicial({paginaAtal}) {
  console.log('paginaAtal',paginaAtal)
  return (
    <>
      <div className='header-container'>
        <img className='header-img' width={80} height={70} src={logo} alt='' />
        <div className='header-text'>
          <ButtonComponente text='Início'/>
          <ButtonComponente text='Sobre min' />
          <ButtonComponente text='Projetos' />
          <ButtonComponente text='Contato' />
        </div>
      </div>
      <div className='body' >
        <div className='body-text'>
          <h3>Olá sejá bem vindo meu nome é </h3>
          <h1>Samuel Spinola da Cruz.</h1>
          <h1>Desenvolvedor full-stack</h1>
        </div>
        </div>
    </>
  );
}
