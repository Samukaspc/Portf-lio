import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message, Spin, Image } from 'antd';
import './style.css';
import { BuscarDadosPortifolio, InserirDadosPortifolio } from '../../../routers/portifolioRouters';
import { GrChapterNext } from 'react-icons/gr';
import { CiEdit } from 'react-icons/ci';
import { VscDebugRestart } from 'react-icons/vsc';

export default function EditarInformacaoDesenvolvedor({ paginaAtual }) {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const onFinish = async (values) => {
        InserirDadosPortifolio(values).then(() => {
            message.success('Os dados foram alterados com sucesso!');
        })
    };

    const initialValues = {
        nome: data[0]?.nome ? data[0].nome : '',
        urlImagemDev: data[0]?.urlImagemDev ? data[0].urlImagemDev : '',
        informacaoDev: data[0]?.informacaoDev ? data[0].informacaoDev : ''
    };

    useEffect(() => {
        BuscarDadosPortifolio()
            .then(data => {
                form.setFieldsValue(data[0]);
                setData(data);
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
                            initialValues={initialValues}
                        >
                            <Form.Item
                                label="Nome do desenvolvedor"
                                name="nome"
                                rules={[{ required: true, message: 'Por favor, insira o nome do desenvolvedor!' }]}
                            >
                                <Input placeholder="Nome" />
                            </Form.Item>
                            <Form.Item
                                label="Url da imagem do desenvolvedor"
                                name="urlImagemDev"
                                rules={[{ required: true, message: 'Por favor, insira o nome do desenvolvedor!' }]}
                            >
                                <Input placeholder="Url da imagem do desenvolvedor" />
                            </Form.Item>
                            <Image width={300} src={form.getFieldValue('urlImagemDev') ? form.getFieldValue('urlImagemDev') : data[0]?.urlImagemDev} alt='' />

                            <Form.Item
                                label="Informação do desenvolvedor"
                                name="informacaoDev"
                                rules={[{ required: true, message: 'Por favor, insira a informação do desenvolvedor!' }]}
                            >
                                <Input.TextArea rows={5} placeholder="Informação" />
                            </Form.Item>


                            <Form.Item>
                                <Button icon={<CiEdit size={13} />} type="primary" htmlType="submit">Alterar Dados</Button>
                                <Button icon={<GrChapterNext size={11} />} type="primary" onClick={() => {
                                    paginaAtual('pagina2')
                                }} >Pagina</Button>
                                <Button icon={<VscDebugRestart size={12} />} type="primary" htmlType="submit" onClick={() => window.location.href = '/'} >Voltar</Button>

                            </Form.Item>
                        </Form>
                    </Spin>
                </div>
            </div>
        </div>
    );
}
