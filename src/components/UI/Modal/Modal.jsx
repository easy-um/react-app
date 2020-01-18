import React, { Fragment, memo } from 'react'
import {} from 'react-transition-group'

import { Backdrop } from '../Backdrop/Backdrop'

import * as classes from './Modal.module.scss'

const ModalWrap = props => {
	return (
		<Fragment>
			<Backdrop isShow={props.isShow} close={props.close} />
			<div className={classes.Modal} style={{ transform: props.isShow ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.isShow ? '1' : '0' }}>
				{props.children}
			</div>
		</Fragment>
	)
}

export const Modal = memo(ModalWrap, (prev, next) => {
	return prev.isShow === next.isShow && prev.children === next.children
})
