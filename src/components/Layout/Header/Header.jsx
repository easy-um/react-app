import React, { Component } from 'react'

import { Nav } from './Nav/Nav'

import * as classes from './Header.module.scss'

export class Header extends Component {
	render() {
		return (
			<header className={classes.Header}>
				<Nav />
			</header>
		)
	}
}
