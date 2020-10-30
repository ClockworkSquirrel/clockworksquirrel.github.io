import React from "react"

import { makeStyles } from "@material-ui/styles"

import Hero from "../components/hero"
import SocialLinks from "../components/socialLinks"

const useStyles = makeStyles(theme => ({
    mainContent: {
        [theme.breakpoints.only("xs")]: {
            marginTop: theme.spacing(3),
        },
    },
}))

function IndexView() {
    const classes = useStyles()

    return (
        <>
            <Hero />

            <main className={classes.mainContent}>
                <SocialLinks />
            </main>
        </>
    )
}

export default IndexView