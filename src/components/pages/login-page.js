import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { validateString } from '../../util/validation'

import { onHandleLogin } from '../../redux/actions/auth'

import { URL } from '../../data/urls'

class LoginPage extends Component {
	state = {
		email: '',
		password: '',
		rules: {
			email: {
				isValidate: true,
				min: 5
			},
			password: {
				isValidate: true,
				min: 3
			}
		}
	}

	componentDidMount() {
		if (this.props.isLoggedIn) this.props.history.push(URL.HOME)
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.isLoggedIn) this.props.history.push(URL.HOME)
	}

	onEmailChange = event => {
		this.setState({
			email: event.target.value
		})
	}

	onPasswordChange = event => {
		this.setState({
			password: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		// validation
		const isEmailValid = validateString(this.state.email, this.state.rules.email)
		const isPasswordValid = validateString(this.state.password, this.state.rules.password)
		if (!isEmailValid || !isPasswordValid) return
		// credentials check
		this.props.onHandleLogin(this.state.email, this.state.password)
	}

	renderError = () => <div className="alert alert-danger">{this.props.error.message}</div>

	render() {
		const { isLoggedIn, isLoading, error } = this.props
		const { email, password } = this.state

		if (isLoggedIn) return <Redirect to="/" />

		if (isLoading) return <div>Loading...</div>

		return (
			<div>
				{error ? this.renderError() : null}
				<form onSubmit={this.handleSubmit}>
					<h2>Login Page</h2>

					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							value={email}
							onChange={this.onEmailChange}
						></input>
					</div>

					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={this.onPasswordChange}></input>
					</div>

					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = ({ auth }) => ({
	isLoggedIn: auth.isLoggedIn,
	isLoading: auth.isLoading,
	error: auth.error
})

const mapDispatchToProps = dispatch => ({
	onHandleLogin: (login, password) => dispatch(onHandleLogin(login, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage))
