import styled from "styled-components"

export default function ListaBotoes(
    {
        setBotao,
        setContador,
        contador,
        setCardRespondido,
        setBotaoLista,
        botaoLista,
        indice

    }) {

    function selecionarBotao(botao) {
        setBotao(botao);
        botaoLista[indice] = botao
        setBotaoLista([...botaoLista]);
        setContador(contador + 1);
        setCardRespondido(true);
    }

    return (
        <Lista >
            <Botao
                data-identifier="forgot-btn"
                cor="#FF3030"
                onClick={() => selecionarBotao(0)}
            >
                Não lembrei!
            </Botao>

            <Botao
                data-identifier="almost-forgot-btn"
                cor="#FF922E"
                onClick={() => selecionarBotao(1)}
            >
                Quase não lembrei!
            </Botao>

            <Botao
                data-identifier="zap-btn"
                cor="#2FBE34"
                onClick={() => selecionarBotao(2)}
            >
                Zap!
            </Botao>

        </Lista>

    )
}

const Lista = styled.div`
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