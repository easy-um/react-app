import React from 'react'
import { Link } from 'react-router-dom'

import * as classes from './Post.module.scss'

import { URL } from '../../data/urls'

export const Post = ({ title, body, id, userId, clicked }) => {
	// console.log(title, id, userId, body)

	return (
		<div className={classes.Post}>
			<div className={classes.closeButton} onClick={clicked}>
				<div className={classes.row}></div>
				<div className={classes.row}></div>
			</div>
			<div className={classes.title}>
				<Link to={URL.POST_WO_ID + id}>
					Номер: {id} - {title}
				</Link>
			</div>
			<div className={classes.body}>{body}</div>
			<div className={classes.author}>Автор: {userId}</div>
		</div>
	)
}
