import { StrictMode } from "react"
import { render as mount } from "react-dom"

import App from "./components/app"

import "fontsource-josefin-sans"
import "fontsource-fira-code"

const mountTarget = document.querySelector("#app")
const appRootHierarchy = (
  <StrictMode>
    <App />
  </StrictMode>
)

mount(appRootHierarchy, mountTarget)