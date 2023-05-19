import { useState } from "react"
import { IconStyled } from "../IconStyled"
import {
    Container, CardContainer, TitleContainer, ImageStyled, H1Styled,
    H2Styled, TextDiv, ButtonDiv, SubContainer, PStyled, StatusContainer,
    ModalContent, H3Styled, ModalTextContent, ModalButtonContent, AnaliseModalContainer,
    ImageInputContainer, ImageModalStyled, TextContainerModal, ImageContainerModal, AStyled
} from "./styles"
import { Button } from "@mui/material"
import { ModalStyled } from "../Modal"
import { useScreenSize } from "../../utils/useScreenSize"
import { BreakpointsEnum } from "../../enums/breakpoints"
import TextField from '@mui/material/TextField';


export type UserDataType = {
    id: number
    username: string
    name: string
    coren: string
    document: string
    profilePicture: string
    job: string
    status: number
}

type UserCardProps = {
    userData: UserDataType
    fullwidth?: boolean

}

export function Aprovado(number: number) {
    if (number === 1) return true
    if (number === 0 || number === 2) return false
}

export function ButtonContent(condition: boolean) {
    return condition ? 'Reanalisar' : 'Analisar'
}

export function UserCard({ fullwidth, userData }: UserCardProps) {

    const inputArray = [
        {
            label: 'Nome',
            defaultValue: userData.name
        },
        {
            label: 'Username',
            defaultValue: userData.username
        },
        {
            label: 'Profissão',
            defaultValue: userData.job
        },
        {
            label: 'COREN',
            defaultValue: userData.coren ? 'Enviado' : 'Não Enviado'
        },
        {
            label: 'Identidade',
            defaultValue: userData.document ? 'Enviado' : 'Não Enviado'
        },
    ]

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

    const windowSize = useScreenSize()

    function getSizeForMobile() {
        if (windowSize.innerWidth < BreakpointsEnum.md) return true
        if (windowSize.innerWidth > BreakpointsEnum.md) return false
    }

    return (
        <Container fullwidth={fullwidth}>
            <CardContainer>
                <SubContainer>
                    <TitleContainer>
                        <ImageStyled src={userData.profilePicture} />
                        <TextDiv>
                            <H1Styled>{userData.name}</H1Styled>
                            <H2Styled>{userData.job}</H2Styled>
                            <StatusContainer>
                                <PStyled>
                                    Coren:{userData.coren ? (<IconStyled name="BiCheck" color="green" />) : (<IconStyled name="BiError" color='red' />)}
                                </PStyled>
                                <PStyled>
                                    Documento:{userData.document ? (<IconStyled name="BiCheck" color="green" />) : (<IconStyled name="BiError" color='red' />)}
                                </PStyled>
                            </StatusContainer>
                        </TextDiv>
                    </TitleContainer>
                    <ButtonDiv>
                        {getSizeForMobile() ? <Button variant="outlined" startIcon={<IconStyled name="MdOutlineSafetyCheck" />} href={`/registros/${userData.id}`} >{ButtonContent(Aprovado(userData.status))}</Button>
                            : <Button variant="outlined" startIcon={<IconStyled name="MdOutlineSafetyCheck" />} onClick={handleOpen1} >{ButtonContent(Aprovado(userData.status))}</Button>}
                        <ModalStyled title="Processo de Análise" open={open1} onClose={handleClose1} >
                            <ModalContent>
                                <AnaliseModalContainer>
                                    <H3Styled>
                                        Por favor, realize o processo de Análise abaixo.
                                    </H3Styled>
                                </AnaliseModalContainer>
                                <ImageInputContainer>
                                    <ImageContainerModal>
                                        <AStyled href={userData.profilePicture}>
                                            <ImageModalStyled src={userData.profilePicture} />
                                        </AStyled>
                                        <AStyled href={userData.coren}>
                                            <ImageModalStyled src={userData.coren} />
                                        </AStyled>
                                        <AStyled href={userData.coren}>
                                            <ImageModalStyled src={userData.document} />
                                        </AStyled>
                                    </ImageContainerModal>
                                    <TextContainerModal>
                                        {inputArray.map(input => (<TextField
                                            id="outlined-read-only-input"
                                            label={input.label}
                                            defaultValue={input.defaultValue}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />))}
                                        <H3Styled>Clique nas imagens para visualizar em tela cheia</H3Styled>
                                    </TextContainerModal>
                                </ImageInputContainer>
                                <ModalButtonContent>
                                    <Button variant="outlined" color="success" startIcon={<IconStyled name="MdOutlineSafetyCheck" />}>Confirmar</Button>
                                    <Button variant="outlined" color="error" startIcon={<IconStyled name="MdDoDisturb" />} onClick={handleClose1}>Reprovar</Button>
                                    <Button variant="outlined" startIcon={<IconStyled name="GiCancel" />} onClick={handleClose1}>Cancelar</Button>
                                </ModalButtonContent>
                            </ModalContent>
                        </ModalStyled>
                        {!Aprovado(userData.status) ? <Button variant="outlined" color="error" startIcon={<IconStyled name="MdDoDisturb" />} onClick={handleOpen}>Reprovar</Button> : <></>}
                        <ModalStyled title="Confirmar Operação" open={open} onClose={handleClose} >
                            <ModalContent>
                                <ModalTextContent>
                                    <H3Styled>
                                        Você está prestes a reprovar o cadastro de {userData.name} sem a realização de uma análise,
                                        tem certeza que deseja prosseguir com a operação?
                                    </H3Styled>
                                </ModalTextContent>
                                <ModalButtonContent>
                                    <Button variant="outlined" startIcon={<IconStyled name="GiCancel" />} onClick={handleClose}>Cancelar</Button>
                                    <Button variant="outlined" color="error" startIcon={<IconStyled name="MdDoDisturb" />} onClick={handleClose}>Reprovar</Button>
                                </ModalButtonContent>
                            </ModalContent>
                        </ModalStyled>
                    </ButtonDiv>
                </SubContainer>
            </CardContainer>
        </Container >
    )
}