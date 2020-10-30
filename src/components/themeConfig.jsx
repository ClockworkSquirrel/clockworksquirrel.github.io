import { blue, orange } from "@material-ui/core/colors"

const ThemeProviderConfig = {
    palette: {
        primary: {
            gradient: "linear-gradient(110deg, #FF2F55 0%, #FF9100 100%)",
            ...blue,
        },
        secondary: {
            gradient: "linear-gradient(110deg, #00F0FF 0%, #2F69FF 100%)",
            ...orange,
        },
    },
    typography: {
        fontFamily: `"Josefin Sans", Helvetica, Arial, sans-serif`,
        h1: { textTransform: "lowercase", fontWeight: "bold", },
        h2: { textTransform: "lowercase", fontWeight: "bold", },
        h3: { textTransform: "lowercase", fontWeight: "bold", },
        h4: { textTransform: "lowercase", fontWeight: "bold", },
        h5: { textTransform: "lowercase", fontWeight: "bold", },
        h6: { textTransform: "lowercase", fontWeight: "bold", },
        subtitle1: { textTransform: "lowercase", },
        subtitle2: { textTransform: "lowercase", },
        body1: { textTransform: "lowercase", lineHeight: 1.2, },
        body2: { textTransform: "lowercase", },
        button: { textTransform: "lowercase", },
        caption: { textTransform: "lowercase", },
        overline: { textTransform: "lowercase", },
    },
}

export default ThemeProviderConfig