import React from 'react'

import Nav from './Nav'
import * as classes from './Header.module.scss'

export const Header = props => {
	return (
		<header className={classes.Header}>
			<Nav {...props} />
		</header>
	)
}

