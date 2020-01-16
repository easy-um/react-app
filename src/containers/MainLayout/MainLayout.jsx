import React, { Component } from 'react'

import { Header } from '../../components/Layout/Header/Header'
import { Footer } from '../../components/Layout/Footer/Footer'
import { Main } from '../../components/Layout/Main/Main'

import * as classes from './MainLayout.module.scss'

export class MainLayout extends Component {
	render() {
		return (
			<div className={classes.MainLayout}>
				<Header />
				<Main>{this.props.children}</Main>
				<Footer />
			</div>
		)
	}
}
