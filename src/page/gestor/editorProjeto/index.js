import { Button } from "antd";
import UploadImagem from "../../../componete/uploadImagem";

export default function EditarProjeto({ paginaAtual }) {
    return (
        <div className="container-gestao">
            <h1>Editor: Página de projeto </h1>
            <div className='retangulo-gestao'>
                <UploadImagem />
            <Button type="primary" onClick={() => paginaAtual('pagina1')}>Pagina 1</Button>
            </div>
        </div>
    )
}