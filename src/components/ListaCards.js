import styled from "styled-components"
import Cards from "./Cards"
import logo from "../assets/img/logo.png"



export default function ListaCards() {

    const CARDS = [
        { Q: 'O que é JSX?', R: 'Uma extensão de linguagem do JavaScript' },
        { Q: 'O React é __ ', R: 'uma biblioteca JavaScript para construção de interfaces' },
        { Q: 'Componentes devem iniciar com __ ', R: 'letra maiúscula' },
        { Q: 'Podemos colocar __ dentro do JSX', R: 'expressões' },
        { Q: 'O ReactDOM nos ajuda __', R: 'interagindo com a DOM para colocar componentes React na mesma' },
        { Q: 'Usamos o npm para __', R: 'gerenciar os pacotes necessários e suas dependências' },
        { Q: 'Usamos props para __', R: 'passar diferentes informações para componentes ' },
        { Q: 'Usamos estado (state) para __', R: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' }
    ];


    function imprimirCards() {
        const cardsEscolhidos = [];
        const indicesEscolhidos = [];
        let indice;

        while (cardsEscolhidos.length < 4) {
            indice = Math.floor(Math.random() * CARDS.length);

            if(!indicesEscolhidos.includes(indice)){
                indicesEscolhidos.push(indice);
                cardsEscolhidos.push(CARDS[indice]);
            }
        }

        return (
            <ul>
                {cardsEscolhidos.map((c, i) => <Cards pergunta={c.Q} indice={i} resposta={c.R}/>)}
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
