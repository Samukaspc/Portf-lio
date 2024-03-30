import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import './style.css';

export default function UploadImagem() {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log('Imagem selecionada:', values.imagemDev[0]); 
    };

    return (
        <div className="container-upload-imagem">
            <Form
                onFinish={onFinish}
                form={form}
                layout="inline"
            >
                <Form.Item
                    label="url do projeto"
                    name="urlProjeto"
                >
                    <Input placeholder="url do projeto" />
                </Form.Item>
                <Form.Item
                    label="Imagem do desenvolvedor"
                    name="imagemDev"
                >
                    <Upload accept='image/*'>
                        <Button type="dashed" icon={<UploadOutlined />}>Enviar imagem</Button>
                    </Upload>
                </Form.Item>
            </Form>
        </div>
    );
}
