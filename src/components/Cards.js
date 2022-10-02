import styled from "styled-components"
import seta from "../assets/img/seta_play.png"
import setaVirar from "../assets/img/seta_virar.png"
import imagensCheck from "./ImagensCheck"


import { useState } from "react"
import ListaBotoes from "./ListaBotoes";

export default function Cards(
    {
        pergunta,
        resposta,
        indice,
        setContador,
        contador,
        botaoLista,
        setBotaoLista
    }) {

    const [virarPergunta, setVirarPergunta] = useState(false);
    const [virarResposta, setVirarResposta] = useState(false);
    const [cardRespondido, setCardRespondido] = useState(false);
    const [botao, setBotao] = useState("");

    return (
        <>
            <Card data-identifier="flashcard" desabilita={virarPergunta ? "none" : ""}>
                <p>Pergunta {indice + 1}</p>
                <button  className="botao-card" data-identifier="flashcard-show-btn">
                    <img
                        className="icone"
                        src={seta} alt="icone seta"
                        onClick={() => setVirarPergunta(true)}
                    />
                </button>

            </Card>

            {virarPergunta && (
                <CardMaior desabilita={virarResposta ? "none" : ""}>
                    <p data-identifier="flashcard-question" >{pergunta}</p>
                    <button className="botao-card" data-identifier="flashcard-turn-btn">
                        <img
                            className="icone"
                            src={setaVirar} alt="Icone seta de virar"
                            onClick={() => setVirarResposta(true)}
                        />
                    </button>

                </CardMaior>
            )}

            {virarResposta && (
                <CardMaior desabilita={cardRespondido ? "none" : ""}>
                    <p data-identifier="flashcard-answer" >{resposta}</p>
                    <ListaBotoes
                        indice={indice}
                        setContador={setContador}
                        setBotao={setBotao}
                        contador={contador}
                        setCardRespondido={setCardRespondido}
                        botaoLista={botaoLista}
                        setBotaoLista={setBotaoLista}
                    />
                </CardMaior>
            )}

            {cardRespondido && (
                <CardRespondido cor={imagensCheck[botao].cor}>
                    <p>Pergunta {indice + 1}</p>
                    <img
                        data-identifier="flashcard-status"
                        className="icone"
                        src={imagensCheck[botao].tipo}
                        alt="icone de check"

                    />
                </CardRespondido>
            )}

        </>
    )
}

const Card = styled.li`
width: 300px;
height: 65px;
background-color: #fff;
margin-top: 20px;
padding: 0 20px;
display: flex;
align-items: center;
justify-content: space-between;
font-family: 'Recursive';
font-size: 16px;
font-weight: 700;
border-radius: 5px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
display: ${props => props.desabilita};

.icone{
    width: 20px;
    height: 23px;
}

.botao-card{
    width: 33px;
    height: 33px;
    border: none;
    background-color: white;
}

.botao-card:hover{
    cursor: pointer;
}
`
const CardRespondido = styled(Card)`
    p{
        text-decoration-line: line-through;
        color: ${props => props.cor}
    }
`

const CardMaior = styled(Card)`
height:131px;
background-color:#FFFFD4;
flex-direction: column;
align-items: space-between;
padding-top: 15px;
position: relative;


.botao-card{
    position:absolute;
    bottom: 20px;
    right: 20px;
    background-color:#FFFFD4;
}
`

