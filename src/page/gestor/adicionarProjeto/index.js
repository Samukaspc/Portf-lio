import { Button, Form, Input, message, Image } from "antd";
import './style.css';
import { AtualizarProjetoCard, enviarDadosProjeto } from "../../../routers/uploadProjetoRouters";
import CardProjeto from "../cardProjeto";
import { useState } from "react";


export default function AdicionarProjeto({ paginaAtual }) {
    const [form] = Form.useForm();
    const [atualizarCard, setAtualizarCard] = useState(undefined)
    const [atualizarCardProjeto, setAtualizarCardProjeto] = useState(undefined)
    const [renderizarImagem, setRenderizarImagem] = useState(undefined)


    const onFinish = async (values) => {

        if (atualizarCardProjeto) projetoAtualizado(values)

        else {
            enviarDadosProjeto(values).then(() => {
                message.success('Dados carregados com sucesso')
                form.resetFields();
                setAtualizarCard(!atualizarCard)
            })
        }
    }

    const projetoAtualizado = (values) => {
        AtualizarProjetoCard(values.nomeProjeto, values).then(() => {
            message.success('Projeto atualizado com sucesso')
            // form.resetFields();
            // setAtualizarCard(!atualizarCard)
            // setAtualizarCardProjeto(false)
        })
    }

    const editarProjeto = (projeto) => {
        setRenderizarImagem(projeto?.urlImagem)
        if (projeto) {
            form.setFieldsValue(projeto)
            setAtualizarCardProjeto(true)
        }
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
                        <Input  placeholder="Url do projeto" />
                    </Form.Item>
                    <Form.Item
                        label="Nome do projeto"
                        name="nomeProjeto"
                    >
                        <Input maxLength={50} placeholder="Nome do projeto" />
                    </Form.Item>
                    <Form.Item
                        label="Url da imagem"
                        name="urlImagem"
                    >
                        <Input placeholder="Url da imagem" />
                    </Form.Item>
                    {renderizarImagem &&
                        <Image width={300} height={200} preview={false} src={form.getFieldValue('urlImagem')} alt="" />
                    }

                    <Form.Item>
                        <Button type={atualizarCardProjeto ? 'default' : 'primary'} htmlType="submit">
                            {atualizarCardProjeto ? 'Atualizar' : 'Adicionar'}
                        </Button>
                        <Button type="primary" onClick={() => paginaAtual('pagina1')}>
                            Voltar
                        </Button>

                    </Form.Item>
                </Form>
            </div>
            <div className="container-editar-projeto">
                <CardProjeto editarProjeto={editarProjeto} atualizarCard={atualizarCard} />
            </div>
        </div>
    );
}
