import React, { useEffect, useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import * as classes from './ProductPage.module.scss'

import { axiosInstance } from '../../axios/axios'

console.log(classes)

const animClasses = {
	enter: classes['item-enter'],
	enterActive: classes['item-enter-active'],
	exit: classes['item-exit'],
	exitActive: classes['item-exit-active']
}

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
		(<TransitionGroup className={classes.itemWrap}>
			{prods.map(item => (
				<CSSTransition key={item.id} timeout={Math.random() * 2000} classNames={animClasses}>
					<div className={classes.item}>
						<div className={classes.title}>{item.title}</div>
						<div>
							<img src={item.img} alt={item.title} className='img-thumbnail' />
						</div>
						<div className={classes.price}>{item.price}</div>
					</div>
				</CSSTransition>
			))}
		</TransitionGroup>)

	return <div className={classes.ProductPage}>{renderProds()}</div>
}

const mapState = ({ auth }) => ({
	userId: auth.userId
})

export const ProductPage = connect(mapState)(ProductPageWrap)
