import { MainContainer, H1Styled, GridContainer, SearchContainer, EditionContainer, ButtonContainer, ModalContent, ModalTextContent, H3Styled, ModalButtonContent, ModalTextContainer } from "./styles";
import { adminData } from "../../mock/mock";
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid';
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { IconStyled } from "../../components/IconStyled";
import { ModalStyled } from "../../components/Modal";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70, headerAlign: 'center', align: 'center' },
    { field: 'username', headerName: 'Username', width: 130, headerAlign: 'center', align: 'center' },
    { field: 'name', headerName: 'Nome', width: 130, headerAlign: 'center', align: 'center' },
    { field: 'cadastro', headerName: 'Cadastro', width: 130, headerAlign: 'center', align: 'center' },
    { field: 'role', headerName: 'Cargo', width: 130, headerAlign: 'center', align: 'center' },

];

export default function Painel() {

    const [selected, setSelected] = useState<string | null>(null);
    const handleSelectionChange = (newSelection: GridRowId[]) => {
        if (newSelection.length > 0) {
            setSelected(newSelection[0] as string);
        } else {
            setSelected(null);
        }
    };

    const [searchTerm, setSearchTerm] = useState('')

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);



    const dataFilter = adminData.filter(admin => {
        if (searchTerm == '') {
            return admin
        } else if (admin.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return admin
        }
    })

    const findAdmin = adminData.find(admin => admin.id === parseInt(selected))

    function ArrayExists() {
        if (findAdmin != null) return (
            [
                {
                    label: 'Username',
                    defaultValue: findAdmin.username
                },
                {
                    label: 'Nome',
                    defaultValue: findAdmin.name
                },
                {
                    label: 'Senha',
                    defaultValue: ''
                },

            ])
        else return []
    }

    return (
        <MainContainer>
            <H1Styled>Painel Administrativo</H1Styled>
            <EditionContainer>
                <SearchContainer>
                    <IconStyled name="BiSearch" />
                    <TextField id="input-with-sx" label="Pesquisar" variant="standard" fullWidth onChange={event => {
                        setSearchTerm(event.target.value)
                    }} />
                </SearchContainer>
                <ButtonContainer>
                    <Button variant="outlined" startIcon={<IconStyled name="BiEdit" />} onClick={handleOpen1}>Editar</Button>
                    <ModalStyled title="Confirmar Operação" open={open1} onClose={handleClose1} >
                        <ModalContent>
                            {!selected && (<H3Styled>Por favor, selecione um dado para fazer a alteração</H3Styled>)}
                            <ModalTextContent>
                                <ModalTextContainer>
                                    {selected && (
                                        ArrayExists().map(input => (<TextField
                                            id="input"
                                            label={input.label}
                                            defaultValue={input.defaultValue}
                                        />))
                                    )}
                                </ModalTextContainer>
                            </ModalTextContent>
                            <ModalButtonContent>
                                {selected && (<Button variant="outlined" color="success" startIcon={<IconStyled name="BiSave" />} onClick={handleClose1}>Salvar</Button>)}
                                <Button variant="outlined" startIcon={<IconStyled name="GiCancel" />} onClick={handleClose1}>Cancelar</Button>
                            </ModalButtonContent>
                        </ModalContent>
                    </ModalStyled>
                    <Button variant="outlined" color="error" startIcon={<IconStyled name="MdDelete" />} onClick={handleOpen}>Excluir</Button>
                    <ModalStyled title="Confirmar Operação" open={open} onClose={handleClose} >
                        <ModalContent>
                            <ModalTextContent>
                                <H3Styled>
                                    {selected ? `Você tem certeza que deseja excluir o usuário ${findAdmin?.name}?` : 'Por favor, selecione um dado para prosseguir.'}
                                </H3Styled>
                            </ModalTextContent>
                            <ModalButtonContent>
                                <Button variant="outlined" startIcon={<IconStyled name="GiCancel" />} onClick={handleClose}>Cancelar</Button>
                                {selected && (<Button variant="outlined" color="error" startIcon={<IconStyled name="MdDoDisturb" />} onClick={handleClose}>Excluir</Button>)}
                            </ModalButtonContent>
                        </ModalContent>
                    </ModalStyled>
                </ButtonContainer>
            </EditionContainer>
            <GridContainer>
                <DataGrid
                    rows={dataFilter}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    onRowSelectionModelChange={handleSelectionChange}
                    rowSelectionModel={selected ? [selected] : []}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection

                />
            </GridContainer>
        </MainContainer>
    )
}