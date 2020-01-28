import React, { Component } from 'react'

import {Header} from '../Header'

export class MainLayout extends Component {
	render() {
		return (
			<div style={{ width: '100%', height: '100%' }}>
				<Header {...this.props} />
				<div style={{ padding: '20px' }}>{this.props.children}</div>
			</div>
		)
	}
}
