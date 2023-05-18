import { MainContainer, H1Styled, ContainerContent, TitleContainer, BigContainter, PieContainer, H2Styled, CadastroContainer, BarContainer } from "./styles"
import { authUser, userApproved, userDenied, usersData } from "../../mock/mock"
import { Pie } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Evolução por mês',
        },
    },
};

const data = {
    labels: [
        'Reprovados',
        'Aprovados',
        'Aguardando'
    ],
    datasets: [{
        data: [userDenied.length, userApproved.length, usersData.length],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};


const dataBar = {
    labels: [
        'Mês retrasado',
        'Mês anterior',
        'Este mês'
    ],
    datasets: [{
        data: [userDenied.length, userApproved.length, usersData.length],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

export default function Home() {
    return (
        <MainContainer>
            <ContainerContent>
                <TitleContainer>
                    <H1Styled>Bem Vindo, {authUser.nome}.</H1Styled>
                </TitleContainer>
                <BigContainter>
                    <PieContainer>
                        <Pie data={data} />
                    </PieContainer>
                    <BarContainer>
                        <Bar options={options} data={dataBar} />
                    </BarContainer>
                </BigContainter>
            </ContainerContent>
        </MainContainer>
    )
}