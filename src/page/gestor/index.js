import React from 'react';
import { Form, Input, Button } from 'antd';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import axios from 'axios';
import './style.css';

export default function Gestor() {
    const onFinish = async (values) => {
        console.log('values', values);
        try {
            await axios.post('http://localhost:3001/routes/portifolio/inserirDadosPortifolio', values);
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div className="container-gestao">
            <h1>Editor: Página Inicial</h1>
            <div className="retangulo-gestao">
                <div className='body-editor'>
                    <Form
                        name="editorForm"
                        onFinish={onFinish}
                        initialValues={{ nome: '', informacaoDev: '' }}
                        layout="vertical"
                    >
                        <Form.Item
                            label="Nome do desenvolvedor"
                            name="nome"
                            rules={[{ required: true, message: 'Por favor, insira o nome do desenvolvedor!' }]}
                        >
                            <Input placeholder="Nome" width={200} />
                        </Form.Item>

                        <Form.Item
                            label="Informação do desenvolvedor"
                            name="informacaoDev"
                            rules={[{ required: true, message: 'Por favor, insira a informação do desenvolvedor!' }]}
                        >
                            <Input.TextArea rows={7} style={{ width: '450px' }} placeholder="Informação" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">Alterar</Button>
                            <a href='/'>
                                <FaArrowAltCircleLeft />
                            </a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}
