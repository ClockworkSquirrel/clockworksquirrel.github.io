import React from "react"

import { Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import { ReactComponent as JavaScriptIcon } from "../assets/javascript.svg"
import { ReactComponent as NodeIcon } from "../assets/node.svg"
import { ReactComponent as FigmaIcon } from "../assets/figma.svg"
import { ReactComponent as HTML5Icon } from "../assets/html5.svg"
import { ReactComponent as LuaIcon } from "../assets/lua.svg"
import { ReactComponent as IllustratorIcon } from "../assets/illustrator.svg"
import { ReactComponent as ReactIcon } from "../assets/react.svg"
import { ReactComponent as GitHubIcon } from "../assets/github.svg"
import { ReactComponent as ElectronIcon } from "../assets/electron.svg"

import CoffeeIcon from "@material-ui/icons/LocalCafe"

const skillsArray = [
    [ "JavaScript/ESNext, TypeScript", JavaScriptIcon ],
    [ "Node, NPM+Yarn", NodeIcon ],
    [ "HTML, CSS", HTML5Icon ],
    [ "Figma", FigmaIcon ],
    [ "Lua", LuaIcon ],
    [ "Adobe Illustrator", IllustratorIcon ],
    [ "React", ReactIcon ],
    [ "GitHub", GitHubIcon ],
    [ "Electron", ElectronIcon ],
    [ "Excellent Tea Making", CoffeeIcon ],
]

const useStyles = makeStyles(theme => ({
    skillsContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    skillCardContainer: {
        width: "50%",
        padding: theme.spacing(.5),

        [theme.breakpoints.only("xs")]: {
            width: "100%",
        },
    },
    skillCard: {
        padding: theme.spacing(1),
        display: "flex",
        alignItems: "center",
    },
    skillIcon: {
        marginRight: theme.spacing(1),
        fill: "currentColor",
        color: "inherit",
        height: "1.5rem",
        width: "1.5rem",
    }
}))

function SkillsComponent() {
    const classes = useStyles()

    return (
        <section>
            <Typography variant="h4">
                Skills
            </Typography>

            <div className={classes.skillsContainer}>
                {
                    skillsArray.map(skill => {
                        const SkillIcon = skill?.[1]

                        return (
                            <div className={classes.skillCardContainer}>
                                <Paper variant="outlined" className={classes.skillCard}>
                                    {
                                        SkillIcon && <SkillIcon
                                            className={classes.skillIcon}
                                        />
                                    }

                                    { skill[0] }
                                </Paper>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default SkillsComponent