import React from 'react'
import { NavLink } from 'react-router-dom'

import { ROUTES } from '../../../../util/routes'

import * as classes from './Nav.module.scss'

export const Nav = props => {
	return (
		<div className={classes.Nav}>
			<NavLink to={ROUTES.HOME} exact activeClassName={classes.active} className={classes.link}>
				Home
			</NavLink>
			<NavLink to={ROUTES.SHOP} exact activeClassName={classes.active} className={classes.link}>
				Shop
			</NavLink>
			<NavLink to={ROUTES.ABOUT} exact activeClassName={classes.active} className={classes.link}>
				About
			</NavLink>
		</div>
	)
}
