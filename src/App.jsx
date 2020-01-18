import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'

import { MainLayout } from './containers/MainLayout/MainLayout'
import { About } from './containers/About/About'
import { Shop } from './containers/Shop/Shop'
import { Home } from './containers/Home/Home'
import { NotFound } from './containers/NotFound/NotFound'

import { withErrorHandler } from './hoc/withErrorHandler/withErrorHandler'
import { transitionGroup } from './hoc/transitionGroup/transitionGroup'

import { ROUTES } from './util/routes'

import { axiosInstance } from './data/axios'

import * as classes from './App.module.scss'

class AppWrap extends Component {
	render() {
		return (
			<div className={classes.App}>
				<MainLayout>
					<Switch>
						<Route exact path={ROUTES.HOME}>
							<Home />
						</Route>
						<Route exact path={ROUTES.ABOUT}>
							<About />
						</Route>
						<Route exact path={ROUTES.SHOP}>
							<Shop />
						</Route>
						<Route>
							<NotFound />
						</Route>
					</Switch>
				</MainLayout>
			</div>
		)
	}
}

export const App = withRouter(transitionGroup(withErrorHandler(AppWrap, axiosInstance)))
