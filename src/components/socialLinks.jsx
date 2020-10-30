import React from "react"

import { IconButton, SvgIcon, Tooltip, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import EmailIcon from "@material-ui/icons/Email"

import { ReactComponent as GitHubIcon } from "../assets/github.svg"
import { ReactComponent as DribbbleIcon } from "../assets/dribbble.svg"
import { ReactComponent as PatreonIcon } from "../assets/patreon.svg"
import { ReactComponent as DiscordIcon } from "../assets/discord.svg"
import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg"
import { ReactComponent as RobloxIcon } from "../assets/roblox.svg"
import { ReactComponent as RobloxDevForumIcon } from "../assets/devforum.svg"

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    linksContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
}))

function CustomTooltip({ title, children, ...props }) {
    return (
        <Tooltip {...props} title={
            <Typography variant="body2">
                { title }
            </Typography>
        }>
            { children }
        </Tooltip>
    )
}

function SocialLinksComponent() {
    const classes = useStyles()

    return (
        <section id="social-links" className={classes.root}>
            <Typography variant="h4">
                Where to Find Me
            </Typography>

            <div className={classes.linksContainer}>
                <CustomTooltip title="GitHub">
                    <IconButton
                        aria-label="GitHub Profile"
                        component="a"
                        href="https://github.com/clockworksquirrel"
                        rel="noopener noreferer"
                    >
                        <SvgIcon component={GitHubIcon} />
                    </IconButton>
                </CustomTooltip>

                <CustomTooltip title="Dribbble">
                    <IconButton
                        aria-label="Dribbble Profile"
                        component="a"
                        href="https://dribbble.com/csqrl"
                        rel="noopener noreferer"
                    >
                        <SvgIcon component={DribbbleIcon} />
                    </IconButton>
                </CustomTooltip>

                <CustomTooltip title="Roblox">
                    <IconButton
                        aria-label="Roblox Profile"
                        component="a"
                        href="https://roblox.com/users/3659905/profile"
                        rel="noopener noreferer"
                    >
                        <SvgIcon component={RobloxIcon} />
                    </IconButton>
                </CustomTooltip>

                <CustomTooltip title="DevForum">
                    <IconButton
                        aria-label="Roblox Developer Forum"
                        component="a"
                        href="https://devforum.roblox.com/u/csqrl"
                        rel="noopener noreferer"
                    >
                        <SvgIcon component={RobloxDevForumIcon} />
                    </IconButton>
                </CustomTooltip>

                <CustomTooltip title="LinkedIn">
                    <IconButton
                        aria-label="LinkedIn Profile"
                        component="a"
                        href="https://linkedin.com/csqrl"
                        rel="noopener noreferer"
                    >
                        <SvgIcon component={LinkedInIcon} />
                    </IconButton>
                </CustomTooltip>

                <CustomTooltip title="Patreon">
                    <IconButton
                        aria-label="Patreon Profile"
                        component="a"
                        href="https://patreon.com/csqrl"
                        rel="noopener noreferer"
                    >
                        <SvgIcon component={PatreonIcon} />
                    </IconButton>
                </CustomTooltip>

                <CustomTooltip title="Email">
                    <IconButton
                        aria-label="Email"
                        component="a"
                        href="mailto:csqrl@outlook.com"
                        rel="noopener noreferer"
                    >
                        <EmailIcon />
                    </IconButton>
                </CustomTooltip>
            </div>
        </section>
    )
}

export default SocialLinksComponent