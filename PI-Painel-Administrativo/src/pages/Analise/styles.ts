import { styled } from "../../config/stitches";

export const MainContaier = styled('div', {
    diisplay: 'flex',
    fontFamily: 'Open Sans Light ',
    width: '100%',
    my: '1rem',
    flexDirection: 'column',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '$primary',
    p: '1rem',
})

export const H1Styled = styled('h1', {
    fontWeight: 'lighter',
    fontFamily: 'Open Sans Light ',
})

export const H2Styled = styled('h2', {
    fontWeight: 'lighter'
})


export const BodyContainer = styled('div', {
    diisplay: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    '@lg': {
        textAlign: 'unset'
    }

})

export const TitleWrapper = styled('div', {})

export const BodyWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    mx: '2rem',
    my: '1rem',
    '@lg': {
        flexDirection: 'row',

    }
})

export const ImageStyled = styled('img', {
    display: 'flex',
    borderRadius: '10px',
    maxSize: '70%',
    '@lg': {
        maxWidth: '60%',
    }
})

export const TextContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
})

export const ImageContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    gap: '1rem'
})

export const ButtonDiv = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    mt: '2rem'
})