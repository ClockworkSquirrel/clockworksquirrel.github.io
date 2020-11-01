import { Divider } from "@material-ui/core"
import { withStyles } from "@material-ui/styles"

const SectionDividerComponent = withStyles(theme => ({
    root: {
        margin: theme.spacing(3, 0),
    }
}))(Divider)

export default SectionDividerComponent