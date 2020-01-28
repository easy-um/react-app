import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { LoginPage, SignupPage, AddProductPage } from '../Pages/index'
import { MainPage } from '../../containers/MainPage/MainPage'
import { PostPage } from '../../containers/PostPage/PostPage'

import { MainLayout } from '../Layout/Main/Main'

import { URL } from '../../data/urls'

class AppWrap extends Component {
	maxIdUser = 1
	maxIdProduct = 1

	state = {
		isLoggedIn: false,
		isAdmin: false,
		usersData: [{ email: 'admin', password: 'admin', id: 1 }],
		productsData: [],
		adminCredentials: {
			email: 'admin',
			password: '123'
		}
	}

	funcUser(email, password) {
		return {
			email,
			password,
			id: this.maxIdUser++
		}
	}

	funcProduct(title, price) {
		return {
			title,
			price,
			id: this.maxIdProduct++
		}
	}

	onLogin = (email, password) => {
		// lets check admin creds
		if (email === this.state.adminCredentials.email && password === this.state.adminCredentials.password) {
			this.setState({ isAdmin: true, isLoggedIn: true })
		}
	}

	onSignUp = (email, password) => {
		const newUser = this.funcUser(email, password)

		this.setState(({ usersData }) => {
			const newArr = [...usersData, newUser]

			return {
				usersData: newArr
			}
		})
	}

	onAddProduct = (title, price) => {
		const newProduct = this.funcProduct(title, price)

		this.setState(({ productsData }) => {
			const newArr = [...productsData, newProduct]

			return {
				productsData: newArr
			}
		})
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
						<SignupPage onSignUp={this.onSignUp.bind(this)} />
					</Route>

					<Route path={URL.ADD_PRODUCT} exact>
						<AddProductPage onAddProduct={this.onAddProduct} />
					</Route>

					<Route path={URL.POST} exact>
						<PostPage />
					</Route>
				</Switch>
			</MainLayout>
		)
	}
}

const App = AppWrap

export default App
