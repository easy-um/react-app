import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import * as classes from './ProductPage.module.scss'

import { axiosInstance } from '../../axios/axios'

export const ProductPageWrap = ({ userId }) => {
	const [prods, setProds] = useState([])

	// componentDidMount
	useEffect(() => {
		axiosInstance.get('/products.json', { headers: { common: { Authorization: null } } }).then(({ data }) => {
			if (data) {
				const products = Object.keys(data).map(prodId => {
					return { ...data[prodId], id: prodId }
				})
				setProds(products)
			}
		})
	}, [])

	const renderProds = () =>
		prods.map(item => (
			<div key={item.id} className={classes.item}>
				<div className={classes.title}>{item.title}</div>
				<div className={classes.price}>{item.price}</div>
			</div>
		))

	return <div className={classes.ProductPage}>{prods.length ? renderProds() : 'No products was found!'}</div>
}

const mapState = ({ auth }) => ({
	userId: auth.userId
})

export const ProductPage = connect(mapState)(ProductPageWrap)
