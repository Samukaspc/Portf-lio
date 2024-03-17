import InputComponente from '../../componete/inputComponente';
import './style.css';
export default function Gestor() {
    return (
        <div className="container-gestao" >
        <h1>Gestor</h1>
        <div className="retangulo-gestao" >
            <h1>Pagina Inicial</h1>
            <InputComponente type='text' name='Nome do portifolio:' />
        </div>
        </div>
    );
}