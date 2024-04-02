import UploadImagem from "../../../componete/uploadImagem";

export default function EditarProjeto({ paginaAtual }) {
    return (
        <div className="container-gestao">
            <h1>Editor: Página de projeto </h1>
            <div className='retangulo-gestao'>
                <UploadImagem  paginaAtual={paginaAtual}/>
            </div>
        </div>
    )
}