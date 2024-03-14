import React, { useState } from 'react';
import PaginaInicial from "./paginaInicial";
import Projetos from "./projetos";
import SobreMin from "./sobremin";
import "./style.css";

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
      <PaginaInicial paginaAtal={handleChangePagina} />
      <SobreMin />
      <Projetos />
    </>
  );
}
