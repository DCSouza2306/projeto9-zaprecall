import styled from "styled-components"

export default function Botoes(){
    return(
        <ContainerBotao>
            <ListaBotoes >
                <Botao cor="#FF3030">
                    Não lembrei!
                </Botao> 
                
                <Botao cor="#FF922E">
                    Quase não lembrei!
                </Botao> 
    
                <Botao cor="#2FBE34">
                    Zap!
                </Botao> 

            </ListaBotoes>

            <p className="qtd-concluidos">0/4 CONCLUÍDOS</p>

           
        </ContainerBotao>
    )
}

const ContainerBotao = styled.div`
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
`
const ListaBotoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Botao = styled.button`
    width:85px;
    height: 37px;
    background-color: ${props => props.cor};
    margin-right: 8px;
    border-radius: 5px;
    border: none;
    font-size: 12px;
    color: #fff;

    &:hover{
        cursor: pointer;
    }
`