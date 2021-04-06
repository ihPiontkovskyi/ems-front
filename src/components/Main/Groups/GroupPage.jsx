import React from 'react'
import Posts from '../Posts/Posts'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export default function (params) {
	return (
		<>
			<Button color="secondary" variant="contained" component={Link} to="/chat" style={{ marginBottom: 20}}>
				Chat
			</Button>
			<Posts />
			
		</>
	)
}
