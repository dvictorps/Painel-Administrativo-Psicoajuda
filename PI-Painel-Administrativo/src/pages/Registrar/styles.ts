import { styled } from "../../config/stitches";

export const MainContainer = styled('div', {
    display: 'flex',
    top: '50%',
    left: '50%',
    flexDirection: 'column',
    position: 'absolute',
    width: '100%',
    height: 'auto',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Open Sans Light',
    alignItems: 'center',
    '@lg': {
        maxWidth: '20%',
        m: 'unset'
    }
})

export const H1Styled = styled('h1', {})

export const TitleContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
})

export const TextContainer = styled('div', {
    display: 'flex',
    flexDirection: ' column',
    gap: '1rem',
    width: '100%',
    m: '1rem',
})

export const ButtonContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    width: 'auto',
    justifyContent: 'center',
    gap: '1rem'
})
