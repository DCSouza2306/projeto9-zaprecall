import styled from "styled-components"
import logo from "../assets/img/logo.png"

export default function BoasVindas({setHabilitaRecall}){
    function iniciarRecall(){
        setHabilitaRecall(true);
    }
    return(

        <ContainerPrincipal>
            <div className="titulo">
                <img src={logo} alt="logo ZapRecall" />
                <h1>ZapRecall</h1>
            </div>

            <button data-identifier="start-btn" onClick={()=>iniciarRecall()}>Iniciar Recall!</button>
        </ContainerPrincipal>
    )
}

const ContainerPrincipal = styled.div`
    width: 375px;
    height: 100vh;
    background-color: #FB6B6B;
    position: absolute;
    display: flex;
    flex-direction: column;


    .titulo{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-top: 100px;
    }

    h1{
        font-family: 'Righteous';
        font-size: 36px;
        color: #FFFFFF;
        margin-top: 20px;
    }

    img{
        width: 136px;
        height: 161px;
    }

    button{
        font-family:'Recursive';
        font-size: 18px;
        background-color: #FFFFFF;
        color: #D70900;
        margin: 40px auto;
        width: 246px;
        height: 54px;
        border: 1px solid #D70900;
        border-radius: 5px;
    }

    button:hover{
        cursor: pointer;
    }

`