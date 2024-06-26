import React, { useState } from 'react';
import PaginaInicial from "./paginaInicial";
import Projetos from "./projetos";
import "./style.css";
import Habilidades from './habilidades';
import Login from './acessoPagina/login';
import SobreMin from './sobremin';

export default function Pagina() {
  const [paginaAtual, setPaginaAtual] = useState('');

  const handleChangePagina = (pagina) => {
    setPaginaAtual(pagina);

    const element = document.getElementById(pagina);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {paginaAtual === 'login' ? <Login paginaAtual={handleChangePagina} /> : <>
        <PaginaInicial paginaAtual={handleChangePagina} />
        <SobreMin />
        <Habilidades />
        <Projetos />
      </>
      }
    </>
  );
}
