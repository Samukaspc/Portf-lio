import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import './style.css';
import axios from 'axios';

export default function Login({ paginaAtal }) {
  const [form] = Form.useForm();
  const [loginError, setLoginError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);

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
    let success = false;
    try {
      await axios.post('https://backendportfolio-umvr.onrender.com/login', values);
      success = true;
    } catch (error) {
      console.log(error); 
    }
    
    if (!success) {
      console.log('Tentando novamente com o localhost:3001/login');
      try {
        await axios.post('http://localhost:3001/login', values);
        success = true;
      } catch (error) {
        console.log(error); 
      }
    }
  
    if (success) {
      setLoginSuccess(true);
      setLoginError(null);
    } else {
      setLoginError('Credenciais inválidas. Por favor, tente novamente.');
      setLoginSuccess(false);
    }
  };
  
  
  

  return (
    <div>
      <div className="container-login">
        <div>
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
          <a href="#" onClick={() => { paginaAtal('pagina1') }}>Voltar</a>
        </div>
      </div>
      {loginError && <Alert className="alert-right" message={loginError} type="error" closable style={{ backgroundColor: '#f5222d', color: '#fff' }} />}
      {loginSuccess && <Alert className="alert-right" message="Login bem sucedido!" type="success" closable style={{ backgroundColor: '#52c41a', color: '#fff' }} />}
    </div>
  );
}
