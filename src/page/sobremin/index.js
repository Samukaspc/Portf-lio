import './styled.css';
import avatar from '../../img/avatar.png';
export default function SobreMin({paginaAtal}) {
  console.log('paginaAtal',paginaAtal)

  return (
    <div className='body-container' >
        <img className='body-image' src={avatar} alt='' />
      <div className='body-text'  >
        <h1>Sobre Mim</h1>
        <p>Olá, eu sou Samuel Spinola da Cruz, um entusiasta da tecnologia. Em 2017, durante o ensino médio,
          tive meu primeiro contato com programação. Embora tenha sido uma experiência promissora, foi apenas
          em 2022, quando um amigo me introduziu ao desenvolvimento web, que decidi me dedicar integralmente a
          essa área.</p>
      </div>
    </div>
  );
}