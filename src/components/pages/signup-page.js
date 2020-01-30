import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import { registerUser } from '../../redux/actions/auth'
import { URL } from '../../data/urls'

class SignupPage extends Component {
	state = {
		email: '',
		password: ''
		// confirmPassword: ''
	}

	componentDidMount() {
		if (this.props.isLoggedIn) return this.props.history.push(URL.HOME)
	}

	componentDidUpdate() {
		if (this.props.isLoggedIn) return this.props.history.push(URL.HOME)
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

	// onConfirmPasswordChange = event => {
	// 	this.setState({
	// 		confirmPassword: event.target.value
	// 	})
	// }

	handleSubmit = event => {
		event.preventDefault()
		this.props.registerUser(this.state.email, this.state.password)
		this.setState({
			email: '',
			password: ''
			// confirmPassword: ''
		})
	}

	renderForm = () => {
		const { email, password } = this.state
		// const {confirmPassword} = this.state

		return (
			<form onSubmit={this.handleSubmit}>
				<h2>Sign Up Page</h2>

				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input
						type="email"
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

				{/* <div className="form-group">
						<label htmlFor="exampleInputPassword1">Confirm password</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
							value={confirmPassword}
							onChange={this.onConfirmPasswordChange}
						></input>
					</div> */}

				<button type="submit" className="btn btn-primary">
					Sign Up
				</button>
			</form>
		)
	}

	renderError = () => <div className="alert alert-danger">{this.props.error.message}</div>

	render() {
		if (this.props.isLoggedIn) return <Redirect to={URL.HOME} />

		return (
			<Fragment>
				{this.props.error ? this.renderError() : null}
				<div>{this.props.isLoading ? <div>Loading...</div> : this.renderForm()}</div>
			</Fragment>
		)
	}
}

const mapStateToProps = ({ auth }) => ({
	isLoading: auth.isLoading,
	isLoggedIn: auth.isLoggedIn,
	error: auth.error
})

const mapsDispatchToProps = dispatch => ({
	registerUser: (email, password) => dispatch(registerUser(email, password))
})

export default connect(mapStateToProps, mapsDispatchToProps)(withRouter(SignupPage))
