import ButtonComponente from '../../componete/buttonComponente';
import InputComponente from '../../componete/inputComponente';
import './style.css';
export default function Login({ paginaAtal }) {
  return (
    <div >
      <div className="container-login">
        <div >
          <h1 className='header-conatiner'>Login</h1>
          <InputComponente placeholder="Usuário" type="text" name="UserName" />
          <InputComponente placeholder="Senha" type="password" name="Password" />

          <div className='button-flex' >
          <ButtonComponente width='300px' text="Entrar" />
          </div>
          <a href="#" onClick={() => { paginaAtal('pagina1') }}>Voltar</a>
        </div>

      </div>
    </div>
  );
}