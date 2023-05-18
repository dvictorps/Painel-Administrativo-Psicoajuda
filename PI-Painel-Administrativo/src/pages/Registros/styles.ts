import { styled } from "../../config/stitches";

export const Container = styled('div', {
    width: '100%',
})


export const H1Styled = styled('h1', {
    fontFamily: 'Open Sans Light',
    fontWeight: 'normal'
})

export const CardContainer = styled('div', {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    '@md': {
        flexDirection: 'row',
    }
})

export const SearchContainer = styled('div', {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
    my: '1rem'
})

export const PaginationContainer = styled('div', {
    display: 'flex',
    my: '1rem',
    flexDirection: 'column',
    gap: '1rem',
    '@lg': {
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})

export const SelectWrapper = styled('div', {
    display: 'flex',
    '@md': {
        width: '20%'
    }
})