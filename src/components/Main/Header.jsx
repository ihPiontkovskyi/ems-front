import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import HelpIcon from '@material-ui/icons/Help'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const lightColor = 'rgba(255, 255, 255, 0.7)'

const styles = theme => ({
	menuButton: {
		marginLeft: -theme.spacing(1),
	},
	iconButtonAvatar: {
		padding: 4,
	},
	link: {
		textDecoration: 'none',
		color: lightColor,
		'&:hover': {
			color: theme.palette.common.white,
		},
	},
	button: {
		borderColor: lightColor,
	},
})

const handleSignOut = (props) => {
	props.login(false);
	localStorage.removeItem('uid');
	localStorage.removeItem('role');
}

function Header(props) {
	const { classes, onDrawerToggle } = props

	return (
		<React.Fragment>
			<AppBar color="primary" position="sticky" elevation={0}>
				<Toolbar>
					<Grid container spacing={1} alignItems="center">
						<Hidden smUp>
							<Grid item>
								<IconButton color="inherit" aria-label="open drawer" onClick={onDrawerToggle} className={classes.menuButton}>
									<MenuIcon />
								</IconButton>
							</Grid>
						</Hidden>
						<Grid item xs />
						<Grid item>
							<Link className={classes.link} onClick={()=> handleSignOut(props)} variant="body2">
								Sign Out
							</Link>
						</Grid>
						<Grid item>
							<Tooltip title="Alerts • No alerts">
								<IconButton color="inherit">
									<NotificationsIcon />
								</IconButton>
							</Tooltip>
						</Grid>
						<Grid item>
							<IconButton color="inherit" className={classes.iconButtonAvatar}>
								<Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
							</IconButton>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<AppBar component="div" className={classes.secondaryBar} color="primary" position="static" elevation={0}>
				<Toolbar>
					<Grid container alignItems="center" spacing={1}>
						<Grid item xs>
							<Typography color="inherit" variant="h6" component="h1">
								Course name: Name
							</Typography>
							<Typography color="inherit" variant="h6" component="h1">
								Lecture: lecture
							</Typography>
						</Grid>
						{/* <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid> */}
					</Grid>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	)
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	onDrawerToggle: PropTypes.func.isRequired,
}

export default withStyles(styles)(Header)
