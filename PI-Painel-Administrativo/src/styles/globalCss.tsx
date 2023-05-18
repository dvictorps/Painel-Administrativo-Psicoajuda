import { globalCss } from '../config/stitches'

export function GlobalStyles() {
    const styledGlobal = globalCss({
        '@font-face': [
            {
                fontFamily: 'Nunito Font',
                src: "url('/fonts/nunito-font/Nunito-VariableFont_wght.ttf')",
            },
            {
                fontFamily: 'Nunito Light',
                src: "url('/fonts/nunito-font/Nunito-Light.ttf')",
            },
            {
                fontFamily: 'Nunito Regular',
                src: "url('/fonts/nunito-font/Nunito-Regular.ttf')",
            },
            {
                fontFamily: 'Nunito SemiBold',
                src: "url('/fonts/nunito-font/Nunito-SemiBold.ttf')",
            },
            {
                fontFamily: 'Nunito Bold',
                src: "url('/fonts/nunito-font/Nunito-Bold.ttf')",
            },
            {
                fontFamily: 'Open Sans Light',
                src: "url('/fonts/opensans-font/OpenSans-Light.ttf')",
            },
            {
                fontFamily: 'Open Sans Font',
                src: "url('/fonts/opensans-font/OpenSans-VariableFont_wdth,wght.ttf')",
            },
            {
                fontFamily: 'Open Sans Regular',
                src: "url('/fonts/opensans-font/OpenSans-SemiBold.ttf')",
            },
            {
                fontFamily: 'Open Sans SemiBold',
                src: "url('/fonts/opensans-font/OpenSans-SemiBold.ttf')",
            },
            {
                fontFamily: 'Open Sans Bold',
                src: "url('/fonts/opensans-font/OpenSans-Bold.ttf')",
            },
        ],
        '*': { margin: 0, padding: 0 },
        body: {
            fontFamily: 'Open Sans Regular',
            margin: 0,
            padding: 0,
            height: '100%',
            '@md': { fontSize: '87.5%' }, // 87.5% -> 14px
            '@lg': { fontSize: '93.75%' }, // 87.5% -> 15px,
        },
    })

    return <div>{styledGlobal()}</div>
}
