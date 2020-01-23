import React, { Component } from 'react'

import { Post } from '../../components/Post/Post'

import * as classes from './MainPage.module.scss'

export class MainPage extends Component {
	state = {
		post: []
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => {
				this.setState(prev => ({ post: [...prev.post, ...json] }))
			})
	}

	handleClickPostRemove(id) {
		fetch('https://jsonplaceholder.typicode.com/posts/' + id, { method: 'DELETE' }).then(res => {
			if (res.status === 200) this.setState(prev => ({ post: prev.post.filter(item => item.id !== id) }))
		})
	}

	renderElements() {
		return this.state.post.map(item => {
			return <Post key={item.id} {...item} clicked={this.handleClickPostRemove.bind(this, item.id)} />
		})
	}

	renderLoading() {
		return <p>Loading elemetns...</p>
	}

	render() {
		return <div className={classes.MainPage}>{this.state.post.length ? this.renderElements() : this.renderLoading()}</div>
	}
}
