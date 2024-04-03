import { Button, Form, Input } from "antd";
import './style.css';
import { enviarDadosProjeto } from "../../../routers/uploadProjetoRouters";
import CardProjeto from "../cardProjeto";


export default function AdicionarProjeto({ paginaAtual }) {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        enviarDadosProjeto(values)
    };

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
               <CardProjeto />
            </div>



        </div>
    );
}
