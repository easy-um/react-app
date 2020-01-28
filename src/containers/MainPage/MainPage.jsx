import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Post } from '../../components/Post/Post'

import { updatePosts, deletePost } from '../../redux/actions/posts'

import * as classes from './MainPage.module.scss'

class MainPageWrap extends Component {
	componentDidMount() {
		// console.log('[componentDidMount]', this.props)
		if (!this.props.posts.length) {
			fetch('https://jsonplaceholder.typicode.com/posts')
				.then(response => response.json())
				.then(posts => {
					// this.setState(prev => ({ post: [...prev.post, ...posts] }))
					this.props.updatePosts(posts)
				})
		}
	}

	// componentDidUpdate() {
	// 	console.log('[componentDidUpdate]', this.props)
	// }

	handleClickPostRemove(id) {
		fetch('https://jsonplaceholder.typicode.com/posts/' + id, { method: 'DELETE' }).then(res => {
			if (res.status === 200) this.props.deletePost(id)
		})
	}

	renderElements() {
		return this.props.posts.map(item => {
			return <Post key={item.id} {...item} clicked={this.handleClickPostRemove.bind(this, item.id)} />
		})
	}

	renderLoading() {
		return <p>Loading elements...</p>
	}

	render() {
		return <div className={classes.MainPage}>{this.props.posts.length ? this.renderElements() : this.renderLoading()}</div>
	}
}

const mapStateToProps = state => ({
	posts: state.posts.posts
})

const mapDispatchToProps = dispatch => ({
	updatePosts: posts => dispatch(updatePosts(posts)),
	deletePost: id => dispatch(deletePost(id))
})

export const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPageWrap)
