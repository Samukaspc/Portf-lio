import { Button, Form, Input, Upload } from "antd";
import './style.css';
import { buscarDadosProjeto, enviarDadosProjeto } from "../../routers/uploadProjetoRouters";
import { useEffect } from "react";


export default function UploadImagem() {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log('chamou');
        enviarDadosProjeto(values)
    };
    useEffect(() => {
        console.log('chamou');
        buscarDadosProjeto()
    })

    return (
        <div className="container-upload-imagem">
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
                    name="imagemDev"
                    label="Imagem"
                    valuePropName="fileList"
                    getValueFromEvent={(e) => {
                        if (Array.isArray(e)) {
                            return e;
                        }
                        return e && e.fileList;
                    }}
                >
                    <Upload
                        listType="picture"
                        maxCount={1}
                        beforeUpload={() => false}
                        accept="image/*"
                    >
                        <Button>Selecione uma imagem</Button>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button type="default" htmlType="submit">
                        Enviar
                    </Button>
                </Form.Item>
            </Form>

           

        </div>
    );
}
