import Typography from "typography"
import stAnnesTheme from "typography-theme-st-annes"

// Override so default colours used
stAnnesTheme.overrideThemeStyles = ({rhythm}, options) => ({
    a: {
        color: null,
    },
    "a:hover,a:active": {
        color: null,
    },
    'h1,h2': {
        marginTop: rhythm(1)
    },
    'p': {
        marginBottom: rhythm(1 / 2),
    },
    'table' : {
        width: null
    },
    'td, th': {
        padding: rhythm(1/8)

    }
})

const typography = new Typography(stAnnesTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography