import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PostCard from './PostCard'

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 1400,
		marginBottom: 20,
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
}))
export default function ({ title, img, nickName }) {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	const posts = [
		{
			title: 'Leonardo',
			nickName: 'Leo',
		},
		{
			title: 'Donatello',
			nickName: 'Don',
		},
		{
			title: 'Michelangelo',
			nickName: 'Mikey',
		},
		{
			title: 'Raphael',
			nickName: 'Raph',
		},
	]

	return (
		<div className={classes.root}>
			{posts.map((t, index) => {
				return <PostCard title={t.title} nickName={t.nickName} />
			})}
		</div>
	)
}
