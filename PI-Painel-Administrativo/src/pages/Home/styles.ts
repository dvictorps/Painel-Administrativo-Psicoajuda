import { styled } from "../../config/stitches";

export const MainContainer = styled('div', {
    display: 'flex',
    fontFamily: 'Open Sans Light ',

})


export const ContainerContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

})

export const TitleContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
})

export const BigContainter = styled('div', {
    display: ' flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    flex: 1,
    gap: '1rem',
    alignItems: 'center',
    my: '3rem',

})

export const H1Styled = styled('h1', {
    fontWeight: 'lighter'
})

export const H2Styled = styled('h2', {
    fontWeight: 'lighter'
})

export const PieContainer = styled('div', {
    height: 'auto',
    minWidth: '35%',
})

export const BarContainer = styled('div', {
    my: '1rem',
    display: 'flex',
    minWidth: '60%',
})

export const CadastroContainer = styled('div', {
    display: 'flex',
    p: '1rem',
    gap: '1rem',
    borderWidth: '1px',
    borderColor: '$primary',
    borderStyle: 'solid',
    flexDirection: 'column',
})