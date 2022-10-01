import styled from "styled-components"
import Cards from "./Cards"
import logo from "../assets/img/logo.png"
import ARRAYCARDS from "./ARRAYCARDS";



export default function ListaCards({setContador,contador, botaoLista, setBotaoLista}) {

    function imprimirCards() {
        const cardsEscolhidos = [];
        const indicesEscolhidos = [];
        let indice;

        while (cardsEscolhidos.length < 4) {
            indice = Math.floor(Math.random() * ARRAYCARDS.length);

            if(!indicesEscolhidos.includes(indice)){
                indicesEscolhidos.push(indice);
                cardsEscolhidos.push(ARRAYCARDS[indice]);
            }
        }

        return (
            <ul>
                {cardsEscolhidos.map((c, i) => 
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
        )

    }

    return (
        <ContainerLista>
            <div className="titulo">
                <img src={logo} alt="logo ZapRecall" />
                <h1>ZapRecall</h1>
            </div>
            {imprimirCards()}
        </ContainerLista>
    )
}

const ContainerLista = styled.div`
    height: 564px;
    width: 300px;
    margin: 0 auto;
    margin-top: 30px;

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
