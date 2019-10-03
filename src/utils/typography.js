import Typography from "typography"
import stAnnesTheme from "typography-theme-st-annes"

// Override so default colours used
stAnnesTheme.overrideThemeStyles = ({rhythm}, option) => ({
    a: {
        color: null,
    },
    "a:hover,a:active": {
        color: null,
    },
    'h2,h3': {
        // marginBottom: rhythm(1),
        marginTop: rhythm(1),
    },
    'p': {

        marginBottom: rhythm(1 / 2),
    }
})

const typography = new Typography(stAnnesTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography