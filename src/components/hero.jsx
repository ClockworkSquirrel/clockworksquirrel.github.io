import React from "react"

import { Avatar, Box, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import LocationIcon from "@material-ui/icons/LocationOn"
import { avatarUrl } from "../config.json"

import { view } from "@risingstack/react-easy-state"
import store from "../store"

const useStyles = makeStyles(theme => ({
    root: {
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme.palette.primary.gradient,
        color: theme.palette.primary.contrastText,
        position: "relative",
    },
    triangle: {
        position: "absolute",
        width: 0,
        height: 0,
        bottom: 0,
        left: 0,
        borderStyle: "solid",
        borderWidth: "0 0 96px 100vw",
        borderColor: `transparent transparent ${theme.palette.background.default} transparent`,

        [theme.breakpoints.only("xs")]: {
            display: "none",
        },
    },
    columnsRoot: {
        display: "flex",
        margin: theme.spacing(3),
        maxWidth: theme.breakpoints.values.sm,
        flexWrap: "nowrap",

        [theme.breakpoints.only("xs")]: {
            flexDirection: "column",
        },
    },
    avatarColumn: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexGrow: 1,
        flexShrink: 1,
        flexDirection: "column",

        [theme.breakpoints.only("xs")]: {
            width: "100%",
        },
    },
    avatarImage: {
        maxWidth: 350,
        minWidth: 200,
        width: "100%",
        height: "auto",
        marginBottom: theme.spacing(1),
        boxShadow: theme.shadows[6],
    },
    aboutColumn: {
        flexShrink: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: theme.spacing(5),

        [theme.breakpoints.only("xs")]: {
            textAlign: "center",
            marginLeft: 0,
            marginTop: theme.spacing(3),
        },

        "& > *:last-child": {
            marginTop: theme.spacing(1),
        },
    },
    locationContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        "& > *:first-child": {
            marginRight: theme.spacing(1),
        },
    },
    subText: {
        color: theme.palette.grey[200],
    },
}))

function HeroComponent() {
    const classes = useStyles()

    const onContactButtonClick = evt => {
        evt.preventDefault()
        store.methods.scrollToSocialLinks()
    }

    return (
        <Box component="header" className={classes.root}>
            <div className={classes.columnsRoot}>
                <div className={classes.avatarColumn}>
                    <Avatar
                        alt="Profile Image"
                        src={avatarUrl}
                        className={classes.avatarImage}
                    />

                    <div className={classes.locationContainer}>
                        <LocationIcon />

                        <Typography variant="body1">
                            Gloucester, UK
                        </Typography>
                    </div>
                </div>

                <section className={classes.aboutColumn}>
                    <Typography variant="h3">
                        Hello!
                    </Typography>

                    <Typography variant="body1">
                        I’m Cam (also known as <strong>csqrl</strong> around the internet). I’m a web and Roblox developer and part-time retail sales assistant. I can usually be found tapping away on a phone or keyboard somewhere, with latte in hand. In my spare time, I create apps, games, plugins, packages, products and services <span className={classes.subText}>(oh, I do a little graphic design work too!)</span>.
                    </Typography>

                    <Button variant="contained" onClick={onContactButtonClick}>
                        Get in Touch
                    </Button>
                </section>
            </div>

            <span className={classes.triangle} />
        </Box>
    )
}

export default view(HeroComponent)