import { styled } from "../../config/stitches";


export const MainContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Open Sans Light ',
})

export const H1Styled = styled('h1', {
    fontWeight: 'lighter'
})

export const GridContainer = styled('div', {
    display: 'flex',
    height: 'auto',
    width: 'auto',
    my: '1rem'

})

export const SearchContainer = styled('div', {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
    my: '1rem'
})

export const EditionContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '@lg': {
        flexDirection: 'row'
    }
})

export const ButtonContainer = styled('div', {
    display: 'flex',
    width: '50%',
    flexDirection: 'column',
    gap: '1rem',
    height: 'auto',
    justifyContent: 'center',
    p: '1rem',
    '@lg': {
        justifyContent: 'flex-end',
        flexDirection: 'row',
    }
})

export const ModalContent = styled('div', {
    display: 'flex',
    m: '1rem',
    width: '100%',
    flexDirection: 'column',
    gap: '1rem'
})

export const ModalTextContent = styled('div', {
    flexWrap: 'wrap'
})

export const ModalButtonContent = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem'
})

export const H3Styled = styled('h3', {
    fontWeight: 'lighter',
    fontFamily: 'Open Sans Font'
})

export const ModalTextContainer = styled('div', {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: '1rem',
    p: '1rem',
})