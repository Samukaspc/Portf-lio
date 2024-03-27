import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message, Spin, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './style.css';
import { BuscarDadosPortifolio, InserirDadosPortifolio } from '../../routers/portifolioRouters';

export default function Gestor() {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(true);

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
                setIsLoading(false); // Defina isLoading como falso quando os dados forem carregados
            })
    }, [form]); // Adicione form como uma dependência para evitar a renderização infinita

    return (
        <div className="container-gestao">
            <h1>Editor: Página Inicial</h1>
            <div className="retangulo-gestao">
                <div className='body-editor'>
                    <Spin spinning={isLoading} size="large" tip="Carregando...">
                        <Form
                            onFinish={onFinish}
                            form={form}
                            layout="vertical"
                        >
                            <Form.Item
                                label="Nome do desenvolvedor"
                                name="nome"
                                rules={[{ required: true, message: 'Por favor, insira o nome do desenvolvedor!' }]}
                            >
                                <Input placeholder="Nome" />
                            </Form.Item>

                            <Form.Item
                                label="Informação do desenvolvedor"
                                name="informacaoDev"
                                rules={[{ required: true, message: 'Por favor, insira a informação do desenvolvedor!' }]}
                            >
                                <Input.TextArea rows={5}  placeholder="Informação" />
                            </Form.Item>
                            
                            <Form.Item
                                label="Imagem do desenvolvedor"
                                name="imagemDev"
                                rules={[{ required: true, message: 'Por favor, insira a imagem do desenvolvedor!' }]}
                            >
                                <Upload name="logo" action="/upload.do" listType="picture">
                                    <Button icon={<UploadOutlined />} style={{ height: '60px' }}>Enviar imagem</Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">Alterar Dados</Button>
                                <Button type="primary" htmlType="submit"  onClick={() => window.location.href = '/'} >voltar</Button>
                            </Form.Item>
                        </Form>
                    </Spin>
                </div>
            </div>
        </div>
    );
}
