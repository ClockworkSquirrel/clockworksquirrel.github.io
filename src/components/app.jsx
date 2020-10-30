import React from "react"

import ThemeProvider from "./themeProvider"
import IndexView from "../views/index"

function AppComponent() {
    return (
        <ThemeProvider>
            <IndexView />
        </ThemeProvider>
    )
}

export default AppComponent