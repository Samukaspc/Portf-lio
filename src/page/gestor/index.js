import React, { useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import './style.css';
import { BuscarDadosPortifolio, InserirDadosPortifolio } from '../../routers/portifolioRouters';

export default function Gestor() {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log('Valores enviados:', values);
        InserirDadosPortifolio(values).then(() => {
            message.success('Os dados foram alterados com sucesso!');
        })
    };

    useEffect(() => {
        BuscarDadosPortifolio()
            .then(data => {
                console.log('Dados do portifolio:', data);
                form.setFieldsValue(data[0]);
            })
    });

    return (
        <div className="container-gestao">
            <h1>Editor: Página Inicial</h1>
            <div className="retangulo-gestao">
                <div className='body-editor'>
                    <Form
                        name="editorForm"
                        onFinish={onFinish}
                        form={form}
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
                            <Input.TextArea rows={7}  placeholder="Informação" />
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
