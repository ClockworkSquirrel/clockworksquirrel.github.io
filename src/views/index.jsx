import React from "react"

import { makeStyles } from "@material-ui/styles"
import SectionDivider from "../components/sectionDivider"

import Hero from "../components/hero"
import SocialLinks from "../components/socialLinks"
import Skills from "../components/skills"

const useStyles = makeStyles(theme => ({
    mainContent: {
        margin: theme.spacing(3, 5),
    },
}))

function IndexView() {
    const classes = useStyles()

    return (
        <>
            <Hero />

            <main className={classes.mainContent}>
                <SocialLinks />
                <SectionDivider />

                <Skills />
            </main>
        </>
    )
}

export default IndexView