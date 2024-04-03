import AdicionarProjeto from "../adicionarProjeto/index";

export default function EditarProjeto({ paginaAtual }) {
    return (
     <div className="container-gestao">
            <h1>Editor: Página de projeto </h1>
            <div className='retangulo-gestao'>
                <AdicionarProjeto paginaAtual={paginaAtual} />
            </div>
        </div>
    )
}