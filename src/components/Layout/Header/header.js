import React from 'react'

import Nav from './Nav/nav'
import * as classes from './Header.module.scss'

const Header = props => {
	return (
		<header className={classes.Header}>
			<Nav {...props} />
		</header>
	)
}

export default Header
