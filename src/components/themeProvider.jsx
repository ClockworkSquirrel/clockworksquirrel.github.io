import React from "react"

import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core"
import themeConfig from "./themeConfig"

function ThemeProviderComponent({ children }) {
    return (
        <ThemeProvider theme={createMuiTheme(themeConfig)}>
            <CssBaseline />

            { children }
        </ThemeProvider>
    )
}

export default ThemeProviderComponent