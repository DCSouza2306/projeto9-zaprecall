import styled from "styled-components";
import Botoes from "./Botoes";
import ListaCards from "./ListaCards";
import { useState } from "react"

export default function ZapMain(){
 

    return(
        <ContainerPrincipal>
            <ListaCards />
            <Botoes />
        </ContainerPrincipal>
    )
}

const ContainerPrincipal = styled.div`
    width: 375px;
    height: 667px;
    background-color: #FB6B6B;
    position: fixed;
`
