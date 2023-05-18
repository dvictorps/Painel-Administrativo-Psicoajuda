import { H1Styled, MainContaier, BodyContainer, H2Styled, ImageStyled, BodyWrapper, TextContainer, ImageContainer, ButtonDiv } from "./styles";

import { usersData } from "../../mock/mock";
import { useParams } from "react-router-dom";
import { IconStyled } from "../../components/IconStyled";
import { Aprovado, ButtonContent } from "../../components/UserCard";
import { Button } from "@mui/material";


export function StatusStyled(number: number) {
    if (number === 0) return "Em Análise"
    if (number === 2) return "Reprovado"
    if (number === 1) return "Aprovado"
}



export default function Analise() {

    const { id } = useParams()
    const userData = usersData.find(user => user.id === parseInt(id || ''))



    return (
        <>
            <H1Styled>Processo de Análise</H1Styled>
            <MainContaier>
                <BodyWrapper>
                    <BodyContainer>
                        <H2Styled>{userData.name}</H2Styled>
                        <ImageStyled src={userData.profilePicture} />
                    </BodyContainer>
                    <TextContainer>
                        <H2Styled>Usuário Cadastrado: {userData.username}</H2Styled>
                        <H2Styled>Profissão: {userData.job}</H2Styled>
                        <H2Styled>Status: {StatusStyled(userData.status)}</H2Styled>
                        <H2Styled>Coren: {userData.coren ? 'Enviado' : 'Não Enviado'}</H2Styled>
                        <H2Styled>Identidade: {userData.document ? 'Enviado' : 'Não Enviado'}</H2Styled>
                    </TextContainer>
                </BodyWrapper>
                <ImageContainer>
                    <H2Styled>COREN:</H2Styled>
                    <ImageStyled src={userData.coren} />
                    <H2Styled>DOCUMENTO:</H2Styled>
                    <ImageStyled src={userData.document} />
                </ImageContainer>
                <ButtonDiv>
                    <Button variant="outlined" startIcon={<IconStyled name="MdOutlineSafetyCheck" />}>Confirmar</Button>
                    {!Aprovado(userData.status) ? <Button variant="outlined" color="error" startIcon={<IconStyled name="MdDoDisturb" />}>Reprovar</Button> : <></>}
                </ButtonDiv>
            </MainContaier>
        </>
    )
}