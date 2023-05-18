import { styled } from "../../config/stitches";

export const ModalContainer = styled('div', {
    display: 'flex',
    top: '50%',
    left: '50%',
    flexDirection: 'column',
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    backgroundColor: '#141414',
    transform: 'translate(-50%, -50%)',
    borderColor: '$primary',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '10px',
    '@lg': {
        minWidth: '30%',
        maxWidth: '50%',
    }
})

export const ModalTitle = styled('div', {
    display: 'flex',
    px: '1rem',
    py: '0.5rem',
    borderBottom: '1px solid $primary'
})


export const ModalContent = styled('div', {
    display: ' flex',

})

export const H1Styled = styled('h1', {
    fontFamily: 'Open Sans Font',
    fontWeight: 'normal',
    fontSize: '25px'
})