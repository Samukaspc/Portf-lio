import AdicionarProjeto from "../adicionarProjeto/index";
import './style.css';

export default function EditarProjeto({ paginaAtual }) {
    return (
     <div className="container-gestao">
            <h1>Editor: Página de projeto </h1>
            <div className='retangulo-gestao-editar'>
                <AdicionarProjeto paginaAtual={paginaAtual} />
            </div>
        </div>
    )
}