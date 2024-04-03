import { Spin } from "antd";
import { useEffect, useState } from "react";
import { ApagarProjetoCard, BuscarDadosProjeto } from "../../../routers/uploadProjetoRouters";
import CardComponente from "../../../componete/cardComponente";

export default function CardProjeto({atualizarCard}) {
    const [dadosProjeto, setDadosProjeto] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const atulizarCardProjeto = async () => {
        setIsLoading(true)
        await BuscarDadosProjeto().then((data) => {
            setDadosProjeto(data)
            setIsLoading(false)
        })
    }

    const deletarProjetoCard = async (nomeProjeto) => {
       await  ApagarProjetoCard(nomeProjeto).then(() => {
            atulizarCardProjeto()
        })
        
    }
    

    useEffect(() => {
        atulizarCardProjeto()
    }, [atualizarCard])
    return (
        <Spin spinning={isLoading} size="large" tip="Carregando...">
            <CardComponente dadosProjeto={dadosProjeto} deletarProjetoCard={deletarProjetoCard} />
        </Spin>
    )
}