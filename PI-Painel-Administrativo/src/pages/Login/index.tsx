import { MainContainer, H1Styled, TitleContainer, TextContainer, ButtonContainer } from "./styles";
import CssBaseline from '@mui/material/CssBaseline';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { Button, TextField } from "@mui/material";
import { IconStyled } from "../../components/IconStyled";
import { api } from "../../api/api";
import { useEffect } from "react"

export default function Login() {

    useEffect(() => {
        api.post('/user', {
            name: "Lucass",
            email: "lucass.oliveira@gmail.com",
            senha: "1234ABCD",
            avatar: "https://cdn.pixabay.com/photo/2014/04/02/16/23/tree-307149_1280.png"
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        console.log('entrou na requisição')
    }, [])

    return (
        <>
            <CssBaseline />
            <MainContainer>
                <TitleContainer>
                    <SettingsSuggestIcon fontSize='large' />
                    <H1Styled>Psicoajuda</H1Styled>
                </TitleContainer>
                <TextContainer>
                    <TextField
                        id="input"
                        label="Usuário"
                    />
                    <TextField
                        id="input"
                        label="Senha"
                        type="password"
                    />
                </TextContainer>
                <ButtonContainer>
                    <Button variant="outlined" startIcon={<IconStyled name="BiLogIn" />}>Login</Button>
                    <Button variant="outlined" startIcon={<IconStyled name="RiRegisteredFill" />} href="/register">Registrar</Button>
                </ButtonContainer>
            </MainContainer>
        </>
    )
}