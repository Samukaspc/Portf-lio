import PaginaInicial from "./paginaInicial";
import Projetos from "./projetos";
import SobreMin from "./sobremin";
import "./style.css";

export default function Pagina() {
  const paginaAtaual = async () => {
    
  }
  return (
    <>
      <PaginaInicial paginaAtal={'pagina1'} />
      <SobreMin paginaAtal={'pagina2'} />
      <Projetos paginaAtal={'pagina3'} />
    </>
  );
}