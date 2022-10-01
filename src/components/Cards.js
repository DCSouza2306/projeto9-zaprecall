import styled from "styled-components"
import seta from "../assets/img/seta_play.png"

export default function Cards({pergunta, resposta, indice}){

    return(
        <Card>
            <p>Pergunta {indice +1}</p>
            <img className= "icone-seta" src={seta} alt="icone seta" />
        </Card>
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


.icone-seta{
    width: 20px;
    height: 23px;
}

.icone-seta:hover{
    cursor: pointer;
}


`