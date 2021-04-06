import React from 'react'
import Tabs from '../../Main/Tabs'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export default function (params) {
	return (
		<>
			<Tabs />
			<Button color="primary" component={Link} to="/chat">
				Chat
			</Button>
		</>
	)
}
