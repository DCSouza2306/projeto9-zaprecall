import styled from "styled-components"
import Cards from "./Cards"
import logo from "../assets/img/logo.png"
import ARRAYCARDS from "./ARRAYCARDS";



export default function ListaCards({setContador,contador, botaoLista, setBotaoLista}) {

    return (
        <ContainerLista>
            <div className="titulo">
                <img src={logo} alt="logo ZapRecall" />
                <h1>ZapRecall</h1>
            </div>
            <ul>
                {ARRAYCARDS.map((c, i) => 
                <Cards 
                key={i} 
                pergunta={c.Q} 
                indice={i} 
                resposta={c.R}
                contador={contador}
                setContador={setContador}
                botaoLista={botaoLista}
                setBotaoLista={setBotaoLista}
                />)}
            </ul>
        </ContainerLista>
    )
}

const ContainerLista = styled.div`
    width: 300px;
    margin: 20px auto;
    position: relative;
   

    .titulo{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    h1{
        font-family: 'Righteous';
        font-size: 36px;
        color: #FFFFFF;
    }

    img{
        width: 52px;
        height: 60px;
    }
`
