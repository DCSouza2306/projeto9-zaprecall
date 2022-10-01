import styled from "styled-components";
import imagensCheck from "./ImagensCheck";
import ListaCards from "./ListaCards";
import { useState } from "react"

export default function ZapMain() {

    const [botaoLista, setBotaoLista] = useState([3, 3, 3, 3]);
    const [contador, setContador] = useState(0)

    return (
        <ContainerPrincipal>
            <ListaCards
                contador={contador}
                setContador={setContador}
                botaoLista={botaoLista}
                setBotaoLista={setBotaoLista}
            />
            <ContainerConcluidos>
                <p className="qtd-concluidos">{contador}/4 CONCLUÍDOS</p>
                <div className="lista-icones">
                    {botaoLista.map((b) => <img src={imagensCheck[b].tipo} alt={""} />)}
                </div>

            </ContainerConcluidos>
        </ContainerPrincipal>
    )
}

const ContainerPrincipal = styled.div`
    width: 375px;
    height: 667px;
    background-color: #FB6B6B;
    position: fixed;
`

const ContainerConcluidos = styled.div`
    width: 100%;
    height: 111px;
    background-color: #FFF;
    border: 1px solid lightgray;
    padding-top: 15px;
    font-family: 'Recursive';
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .qtd-concluidos{
        margin-top: 15px;
        font-size: 18px;
        color: #333333;
    }

    .lista-icones{
        display: flex;
    }

    img{
        margin-right: 5px;
    }
`
