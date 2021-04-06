import React from 'react'
import Posts from '../Posts/Posts'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export default function (params) {
	return (
		<>
			<Posts />
			<Button color="primary" component={Link} to="/chat">
				Chat
			</Button>
		</>
	)
}
