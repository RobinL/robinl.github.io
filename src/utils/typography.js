import Typography from "typography"
import stAnnesTheme from "typography-theme-st-annes"

// Override so default colours used
stAnnesTheme.overrideThemeStyles = () => ({
    a: {
        color: null,
    },
    "a:hover,a:active": {
        color: null,
    }
})

const typography = new Typography(stAnnesTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography