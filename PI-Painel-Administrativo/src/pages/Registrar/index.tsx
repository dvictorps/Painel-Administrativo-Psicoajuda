import { MainContainer, H1Styled, TitleContainer, TextContainer, ButtonContainer } from "./styles";
import CssBaseline from '@mui/material/CssBaseline';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { Button, TextField } from "@mui/material";
import { IconStyled } from "../../components/IconStyled";

export default function Registrar() {

    return (
        <>
            <CssBaseline />
            <MainContainer>
                <TitleContainer>
                    <SettingsSuggestIcon fontSize='large' />
                    <H1Styled>Registrar</H1Styled>
                </TitleContainer>
                <TextContainer>
                    <TextField
                        id="input"
                        label="Usuário"
                    />
                    <TextField
                        id="input"
                        label="Nome"
                    />
                    <TextField
                        id="input"
                        label="Senha"
                        type="password"
                    />
                    <TextField
                        id="input"
                        label="Confirme sua senha"
                        type="password"
                    />
                </TextContainer>
                <ButtonContainer>

                    <Button variant="outlined" startIcon={<IconStyled name="RiRegisteredFill" />} >Registrar</Button>
                </ButtonContainer>
            </MainContainer>
        </>
    )
}