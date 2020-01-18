import React, { Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Backdrop } from '../Backdrop/Backdrop'

import * as classes from './Modal.module.scss'

const transitionClassNames = {
	enter: classes.Modal_enter,
	enterActive: classes.Modal_enter_active,
	exit: classes.Modal_exit,
	exitActive: classes.Modal_exit_active
}

export const Modal = props => {
	return (
		<Fragment>
			<Backdrop close={props.close} isShow={props.isShow} />
			<CSSTransition mountOnEnter unmountOnExit in={props.isShow} timeout={300} classNames={{ ...transitionClassNames }}>
				<div className={classes.Modal} onClick={props.close}>
					{props.children}
				</div>
			</CSSTransition>
		</Fragment>
	)
}
