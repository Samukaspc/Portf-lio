import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message, Spin } from 'antd';
import './style.css';
import { BuscarDadosPortifolio, InserirDadosPortifolio } from '../../../routers/portifolioRouters';
import { GrChapterNext } from 'react-icons/gr';
import { CiEdit } from 'react-icons/ci';
import { VscDebugRestart } from 'react-icons/vsc';

export default function EditarInformacaoDesenvolvedor({paginaAtual}) {
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
                setIsLoading(false);
            })
    }, [form]);

    return (
        <div className="container-gestao">
            <h1>Editor: Landing  página </h1>
            <div className="retangulo-gestao">
                <div className='body-editor'>
                    <Spin spinning={isLoading} size="large" tip="Carregando...">
                        <Form
                            onFinish={onFinish}
                            form={form}
                            layout="vertical"
                        >
                            <h1>Informação do desenvolvedor</h1>
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
                                <Input.TextArea rows={5} placeholder="Informação" />
                            </Form.Item>


                            <Form.Item>
                                <Button icon={<CiEdit size={13} />} type="primary" htmlType="submit">Alterar Dados</Button>
                                <Button  icon={<GrChapterNext size={11} />} type="primary" onClick={() => {
                                    paginaAtual('pagina2')
                                }} >Pagina</Button>
                                <Button  icon={<VscDebugRestart size={12} />} type="primary" htmlType="submit" onClick={() => window.location.href = '/'} >Voltar</Button>

                            </Form.Item>
                        </Form>
                    </Spin>
                </div>
               
            </div>
        </div>
    );
}
