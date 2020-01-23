import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import * as classes from "./nav.module.scss";

class Nav extends Component {
	render() {
		const { isLoggedIn, isAdmin } = this.props

		const renderIsAdmin = () => {
			return (
				<Fragment>
					<li>
						<Link to="/addProduct">Add Product</Link>
					</li>
				</Fragment>
			)
		}

		const renderIsLoggedIn = () => {
			return (
				<Fragment>
					<li>
						<Link to="/" onClick={this.props.onLogout}>
							logout
						</Link>
					</li>
				</Fragment>
			)
		}

		const renderIsLoggedOut = (
			<Fragment>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/signup">Registaration</Link>
				</li>
			</Fragment>
		)

		return (
			<div>
				<nav className="navbar navbar-inverse">
					<div className="container">
						<div className="logo">
							<Link to="/">Store</Link>
						</div>
						<div className="main_list">
							<ul className="navlinks">
								{isLoggedIn ? renderIsLoggedIn() : renderIsLoggedOut}
								{isAdmin ? renderIsAdmin() : null}
							</ul>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}

const mapStateToProps = ({ auth }) => ({
	isLoggedIn: auth.isLoggedIn,
	isAdmin: auth.isAdmin
})

export default connect(mapStateToProps, null)(Nav)
