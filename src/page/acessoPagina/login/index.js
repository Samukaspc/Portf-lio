import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import './style.css';
import Gestor from '../../gestor';
import { FazerLogin } from '../../../routers/loginRouters';

export default function Login({ paginaAtual }) {
  const [form] = Form.useForm();
  const [loginError, setLoginError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [telaGestor, setTelaGestor] = useState(false);
  useEffect(() => {
    let timeout;
    if (loginError || loginSuccess) {
      timeout = setTimeout(() => {
        setLoginError(null);
        setLoginSuccess(false);
      }, 4000);
    }
    return () => clearTimeout(timeout);
  }, [loginError, loginSuccess]);

  const handleLogin = async (values) => {
    FazerLogin(values)
    .then(() => {
      setLoginSuccess(true);
      setLoginError(null);
      setTelaGestor(true);
    }).catch(() => {
      setLoginError('Credenciais inválidas. Por favor, tente novamente.');
      setLoginSuccess(false);
    })
  };

  return (
    <div>
      {telaGestor ? <Gestor /> : <>
        <div className="container-login">
          <div className='container-from' >
            <h1 className='header-conatiner'>Login</h1>
            <Form form={form} onFinish={handleLogin}>
              <Form.Item name="email" rules={[{ required: true, message: 'Por favor, insira seu email!' }]}>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}>
                <Input.Password placeholder="Senha" />
              </Form.Item>
              <div className='button-flex'>
                <Button type="primary" htmlType="submit" style={{ width: '300px' }}>Entrar</Button>
              </div>
            </Form>
            <a href="/" onClick={() => { paginaAtual('pagina1') }}>Voltar</a>
          </div>
        </div>
        {loginError && <Alert className="alert-right" message={loginError} type="error" closable style={{ backgroundColor: '#f5222d', color: '#fff' }} />}
        {loginSuccess && <Alert className="alert-right" message="Login bem sucedido!" type="success" closable style={{ backgroundColor: '#52c41a', color: '#fff' }} />}
      </>}
    </div >
  );
}
