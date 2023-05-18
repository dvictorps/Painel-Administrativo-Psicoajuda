import { styled } from "../../config/stitches";

export const Container = styled('div', {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    '@md': {
        maxWidth: '48%'
    },
    variants: {
        fullwidth: {
            true: {
                maxWidth: '100%'
            }
        }
    }

})

export const CardContainer = styled('div', {
    display: 'flex',
    backgroundColor: '#141414',
    borderStyle: 'solid',
    borderColor: '$primary',
    borderWidth: '1px',
    borderRadius: '5px',
    '@lg': {
        maxHeight: '10rem',
        flex: 1
    }
})

export const SubContainer = styled('div', {
    display: 'flex',
    m: '24px',
    width: '100%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '@md': {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    '@lg': {
        flexWrap: 'unset'
    }
})

export const TitleContainer = styled('div', {
    display: 'flex',
    fontSize: 'small',
    gap: '13px',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    '@md': {
        flexDirection: 'row',
        textAlign: 'unset'
    }

})

export const ImageStyled = styled('img', {
    borderRadius: '50%',
    maxWidth: '50%',
    maxHeight: '70%'
})

export const H1Styled = styled('h1', {
    fontWeight: 'normal',
    fontFamily: 'Open Sans Font',
})

export const H2Styled = styled('h2', {
    fontWeight: 'lighter',
    fontFamily: 'Open Sans Font'
})

export const TextDiv = styled('div', {
    display: 'flex',
    flexDirection: 'column'
})

export const ButtonDiv = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '5px',
})

export const PStyled = styled('p', {
    fontFamily: 'Open Sans Font',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontWeight: 'lighter'

})

export const StatusContainer = styled('div', {
    mt: '1rem'
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

export const AnaliseModalContainer = styled('div', {
    flexWrap: 'wrap'
})

export const ImageInputContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: '1rem',

})

export const ImageModalStyled = styled('img', {
    display: 'flex',
    borderRadius: '10px',
    maxWidth: '50%'

})

export const TextContainerModal = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
})

export const ImageContainerModal = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    gap: '1rem',
    justifyContent: 'center',

})

export const AStyled = styled('a', {
    display: 'flex',

    justifyContent: 'center',
    width: '100%'
})