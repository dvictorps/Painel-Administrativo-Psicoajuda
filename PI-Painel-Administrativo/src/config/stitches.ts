import { createStitches, PropertyValue } from '@stitches/react'
import { BreakpointsEnum } from '../enums/breakpoints'

export const { styled, css, globalCss, getCssText, createTheme } = createStitches({
    theme: {
        colors: {
            primary: '#474747',
            secondary: '#ffffff',
        },
        sizes: {
            // -> height
            28: '28px',
            35: '35px',
            40: '40px',
        },
        space: {
            // -> padding / margin
            0: '4px',
            1: '8px',
            2: '12px',
            3: '16px',
            4: '24px',
            5: '32px',
            6: '40px',
            7: '56px',
            8: '72px',
            9: '80px',
            10: '96px',
            11: '120px',
        },
    },
    media: {
        xs: `(min-width: ${BreakpointsEnum.xs}px)`,
        sm: `(min-width: ${BreakpointsEnum.sm}px)`,
        md: `(min-width: ${BreakpointsEnum.md}px)`,
        lg: `(min-width: ${BreakpointsEnum.lg}px)`,
        xl: `(min-width: ${BreakpointsEnum.xl}px)`,
        xxl: `(min-width: ${BreakpointsEnum.xxl}px)`,
    },

    utils: {
        p: (value: PropertyValue<'padding'>) => ({
            padding: value,
        }),
        pt: (value: PropertyValue<'paddingTop'>) => ({
            paddingTop: value,
        }),
        pr: (value: PropertyValue<'paddingRight'>) => ({
            paddingRight: value,
        }),
        pb: (value: PropertyValue<'paddingBottom'>) => ({
            paddingBottom: value,
        }),
        pl: (value: PropertyValue<'paddingLeft'>) => ({
            paddingLeft: value,
        }),
        px: (value: PropertyValue<'paddingLeft'>) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: PropertyValue<'paddingTop'>) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        m: (value: PropertyValue<'margin'>) => ({
            margin: value,
        }),
        mt: (value: PropertyValue<'marginTop'>) => ({
            marginTop: value,
        }),
        mr: (value: PropertyValue<'marginRight'>) => ({
            marginRight: value,
        }),
        mb: (value: PropertyValue<'marginBottom'>) => ({
            marginBottom: value,
        }),
        ml: (value: PropertyValue<'marginLeft'>) => ({
            marginLeft: value,
        }),
        mx: (value: PropertyValue<'marginLeft'>) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: PropertyValue<'marginTop'>) => ({
            marginTop: value,
            marginBottom: value,
        }),
        size: (value: PropertyValue<'width'>) => ({
            width: value,
            height: value,
        }),
    },
})
