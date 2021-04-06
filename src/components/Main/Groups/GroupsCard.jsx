import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const styles = {
	card: {
		maxWidth: 400,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		marginBottom: 16,
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
}

function SimpleCard(props) {
	const { classes } = props
	const bull = <span className={classes.bullet}>•</span>

	return (
		<div>
			<Card className={classes.card}>
				<CardContent>
					<Typography className={classes.title} color="textSecondary">
						{props.groupUid}
					</Typography>
					<Typography variant="headline" component="h2">
						{props.groupName}
					</Typography>
					<Typography className={classes.pos} color="textSecondary">
					</Typography>
					<Typography component="p">
						{bull}{props.groupLecturer}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" component={Link} to={`/main/groups`}>
						Details
					</Button>
				</CardActions>
			</Card>
		</div>
	)
}

SimpleCard.propTypes = {
	classes: PropTypes.object.isRequired,
	groupName: PropTypes.string,
	groupUid: PropTypes.string,
	groupLecturer: PropTypes.string
}

export default withStyles(styles)(SimpleCard)
