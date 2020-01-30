import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { LoginPage, SignupPage, AddProductPage } from '../pages'
import { MainPage } from '../../containers/MainPage/MainPage'
import { PostPage } from '../../containers/PostPage/PostPage'
import { ProductPage } from '../../containers/ProductPage/ProductPage'

import { MainLayout } from '../Layout/Main/Main'

import { URL } from '../../data/urls'

import { withAxiosError } from '../../hoc/withAxiosError'
import { axiosInstance } from '../../axios/axios'

import { autoUserAuthentication } from '../../redux/actions/auth'

class AppWrap extends Component {
	componentDidMount() {
		this.props.autoUserAuthentication()
	}

	render() {
		return (
			<MainLayout>
				<Switch>
					<Route path={URL.HOME} exact>
						<MainPage />
					</Route>

					<Route path={URL.LOGIN} exact>
						<LoginPage />
					</Route>

					<Route path={URL.SIGNUP} exact>
						<SignupPage />
					</Route>

					<Route path={URL.ADD_PRODUCT} exact>
						<AddProductPage />
					</Route>

					<Route path={URL.POST} exact>
						<PostPage />
					</Route>

					<Route path={URL.PRODUCTS}>
						<ProductPage />
					</Route>
				</Switch>
			</MainLayout>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	autoUserAuthentication: () => dispatch(autoUserAuthentication())
})

const App = connect(null, mapDispatchToProps)(withAxiosError(AppWrap, axiosInstance))

export default App
