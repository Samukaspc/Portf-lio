import React, { useState } from 'react';
import PaginaInicial from "./paginaInicial";
import Projetos from "./projetos";
import "./style.css";
import Habilidades from './habilidades';
import Login from './acessoPagina/login';
import SobreMin from './sobreMin';

export default function Pagina() {
  const [paginaAtual, setPaginaAtual] = useState('');

  const handleChangePagina = (pagina) => {
    console.log('Nova página:', pagina);
    setPaginaAtual(pagina);

    const element = document.getElementById(pagina);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {paginaAtual === 'login' ? <Login paginaAtal={handleChangePagina} /> : <>
        <PaginaInicial paginaAtal={handleChangePagina} />
        <SobreMin />
        <Habilidades />
        <Projetos />
      </>
      }
    </>
  );
}
