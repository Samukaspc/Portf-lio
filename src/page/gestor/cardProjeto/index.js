import { Card, Spin } from "antd";
import { useEffect, useState } from "react";
import { BuscarDadosProjeto } from "../../../routers/uploadProjetoRouters";

export default function CardProjeto() {
    const [dadosProjeto, setDadosProjeto] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { Meta } = Card;
    useEffect(() => {
        console.log('chamou')
        BuscarDadosProjeto().then((data) => {
            setDadosProjeto(data)
            setIsLoading(false)
        })
    }, [])
    return (
        <>
            <Spin spinning={isLoading} size="large" tip="Carregando...">
                <Card
                    hoverable
                    style={{ width: 175 }}
                    cover={<img alt="../../../img/embreve.jpg" src={dadosProjeto[0]?.urlImagem} />}
                >
                    <Meta title="URL do projeto" description={dadosProjeto[0]?.urlProjeto} />
                </Card>
            </Spin>
        </>
    )
}