import React, { Component, lazy, Suspense } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'

import { MainLayout } from './containers/MainLayout/MainLayout'
// import { About } from './containers/About/About'
import { Shop } from './containers/Shop/Shop'
import { Home } from './containers/Home/Home'
import { NotFound } from './containers/NotFound/NotFound'

import { withErrorHandler } from './hoc/withErrorHandler/withErrorHandler'
import { transitionGroup } from './hoc/transitionGroup/transitionGroup'

import { ROUTES } from './util/routes'

import { axiosInstance } from './data/axios'

import * as classes from './App.module.scss'

const About = lazy(() =>
	import('./containers/About/About').then(component => {
		console.log(component)
		return new Promise(res => {
			setTimeout(() => {
				res(component)
			}, Math.random() * 3000)
		})
	})
)

class AppWrap extends Component {
	render() {
		return (
			<div className={classes.App}>
				<MainLayout>
					<Suspense fallback={<div>Loading..</div>}>
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
					</Suspense>
				</MainLayout>
			</div>
		)
	}
}

export const App = withRouter(transitionGroup(withErrorHandler(AppWrap, axiosInstance)))
