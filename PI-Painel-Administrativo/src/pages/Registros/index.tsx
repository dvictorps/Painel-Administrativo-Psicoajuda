import { UserCard } from "../../components/UserCard"
import { Container, CardContainer, SearchContainer, PaginationContainer, SelectWrapper } from "./styles"
import { usersData, statusData } from "../../mock/mock"
import TextField from '@mui/material/TextField';
import { IconStyled } from "../../components/IconStyled";
import { useState } from "react";
import { UserDataType } from "../../components/UserCard";
import Pagination from '@mui/material/Pagination';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Registros() {

    const getPartsOfArray1 = (array: UserDataType[], perPage: number) => {
        if (Number.isNaN(array.length / perPage)) {
            console.log('could not be run');
            return []
        } else if (perPage > array.length) {
            return array
        } else {
            const resultRestDivision = array.length % perPage;
            const resultDivisionInt = Math.floor(array.length / perPage);
            let newArray = [];
            let inicio = 0;
            let final = perPage;

            for (let i = 1; i <= resultDivisionInt; i++) {
                newArray.push(array.slice(inicio, final));
                inicio += perPage;
                if (i == resultDivisionInt) {
                    final += resultRestDivision
                } else {
                    final += perPage;
                }

            }
            if (resultRestDivision > 0) {
                newArray.push(array.slice(inicio, final));
            }
            return newArray
        }
    }


    const [currentPage, setPage] = useState(1)
    const handlePaginationChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page);
    };

    const [status, setStatus] = useState('0');
    const handleStatusChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
        setPage(1)
    };

    const userDataFiltered = usersData.filter((user: UserDataType) => {
        if (user.status === parseInt(status)) { return user }
    })


    function separatePages(pagination: UserDataType[]) {
        if (pagination.length > 4) return 4
        else if (pagination.length < 4) return pagination.length
    }

    const userDataPagination = getPartsOfArray1(userDataFiltered, separatePages(userDataFiltered))

    console.log(userDataPagination)

    const indice = currentPage - 1

    const [searchTerm, setSearchTerm] = useState('')

    const userDataMapCard = userDataPagination[indice]?.map(user => {
        return (
            <UserCard userData={user} key={user.id} />
        )
    })

    const userDataMapCardSearch = userDataFiltered.filter(user => {
        if (searchTerm == '') {
            return user
        } else if (user.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return user
        }
    })
        .map(user => {
            return (
                <UserCard userData={user} key={user.id} />
            )
        })


    function DrawCard(searchStatus: string) {
        if (searchStatus === '') return userDataMapCard
        else if (searchStatus != '') return userDataMapCardSearch
    }

    return (
        <Container>
            <SearchContainer>
                <IconStyled name="BiSearch" />
                <TextField id="input-with-sx" label="Pesquisar" variant="standard" fullWidth onChange={event => {
                    setSearchTerm(event.target.value)
                }} />
            </SearchContainer>
            <PaginationContainer>
                <SelectWrapper>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            label="Status"
                            onChange={handleStatusChange}
                        >
                            {statusData.map(status => <MenuItem key={status.id} value={status.id}>{status.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </SelectWrapper>
                <Pagination count={userDataPagination.length} page={currentPage} color="primary" onChange={handlePaginationChange} />
            </PaginationContainer>
            <CardContainer>
                {DrawCard(searchTerm)}
            </CardContainer>

        </Container>
    )
}