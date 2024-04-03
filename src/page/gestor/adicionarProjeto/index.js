import { Button, Form, Input, message } from "antd";
import './style.css';
import { enviarDadosProjeto } from "../../../routers/uploadProjetoRouters";
import CardProjeto from "../cardProjeto";
import { useState } from "react";


export default function AdicionarProjeto({ paginaAtual }) {
    const [form] = Form.useForm();
    const [atualizarCard, setAtualizarCard] = useState(undefined)

    const onFinish = async (values) => {

        enviarDadosProjeto(values).then(() => {
            message.success('Dados carregados com sucesso')
            form.resetFields();
            setAtualizarCard(!atualizarCard)
        })
    }

    return (
        <div className="container-upload-imagem">
            <div className="container-adicionar-projeto">
                <Form
                    form={form}
                    name="upload-imagem"
                    onFinish={onFinish}
                    layout="vertical"

                >
                    <h1>Adiconar projeto</h1>
                    <Form.Item
                        label="Url do Projeto"
                        name="urlProjeto"
                    >
                        <Input placeholder="Url do projeto" />
                    </Form.Item>
                    <Form.Item
                        label="Url da imagem"
                        name="urlImagem"
                    >
                        <Input placeholder="Url da imagem" />
                    </Form.Item>
                    <Form.Item
                        label="Nome do projeto"
                        name="nomeProjeto"
                    >
                        <Input placeholder="Nome do projeto" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="default" htmlType="submit">
                            Adicionar
                        </Button>
                        <Button type="primary" onClick={() => paginaAtual('pagina1')}>
                            Voltar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="container-editar-projeto">
                <CardProjeto atualizarCard={atualizarCard} />
            </div>
        </div>
    );
}
