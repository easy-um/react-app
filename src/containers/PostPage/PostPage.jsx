import React, { useEffect, useState, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import * as classes from './PostPage.module.scss'

const PostPageWrap = props => {
	const [post, setPost] = useState(null)

	console.log(props)
	console.log('[currentPage]', props.match.params.postId)

	// componentDidMount(){}
	useEffect(() => {
		if (props.match.params.postId) {
			const id = props.match.params.postId
			fetch('https://jsonplaceholder.typicode.com/posts/' + id)
				.then(res => res.json())
				.then(post => setPost(post))
		}
		// eslint-disable-next-line
	}, [])

	const renderLoading = <div>Loading...</div>

	const renderComponent = () => {
		if (!post) return null
		const { body, title, userId } = post
		return (
			<Fragment>
				<div className={classes.title}>{title}</div>
				<div className={classes.body}>{body}</div>
				<div className={classes.author}>Автор: {userId}</div>
			</Fragment>
		)
	}

	return <div className={classes.PostPage}>{post ? renderComponent() : renderLoading}</div>
}

export const PostPage = withRouter(PostPageWrap)
