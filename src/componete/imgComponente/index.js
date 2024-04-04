import { Button } from 'antd';
import './style.css';

export default function ImgComponente({ dados, width,height }) {
    return (
        <div className="body-image-projeto">
            {dados.map((projeto, index) => (
                <a key={index} href={projeto.urlProjeto} target='_blank' rel='noopener noreferrer'>
                    <img src={projeto.urlImagem} alt={projeto.nomeProjeto} width={400} height={250} />
                    <div className='' style={{display: 'flex',position: 'absolute'}}>
                    <Button width={200} type="primary" className="button-projeto">Ver Projeto</Button>
                    </div>
                </a>
            ))}
        </div>
    );
}
