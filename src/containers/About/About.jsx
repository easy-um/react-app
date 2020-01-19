import React from 'react'

import { axiosInstance } from '../../data/axios'

import * as classes from './About.module.scss'

export const About = props => {
	const makeReq = async () => {
		try {
			const url = 'https://jsonplaceholder.typicode.com/users'
			const r = await axiosInstance.get(url, { query: '' })
			if (!r.data) throw r
			console.log(r)
		} catch (error) {
			console.log('[req][error]', error)
		}
	}

	return (
		<div className={classes.About}>
			<div>show/hid modal</div>
			<div>
				<button onClick={makeReq}>make</button>
			</div>
		</div>
	)
}

export default About
