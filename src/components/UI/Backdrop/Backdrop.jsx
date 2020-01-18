import React from 'react'
import { CSSTransition } from 'react-transition-group'

import * as classes from './Backdrop.module.scss'

const transitionClassNames = {
	enter: classes.Backdrop_enter,
	enterActive: classes.Backdrop_enter_active,
	exit: classes.Backdrop_exit,
	exitActive: classes.Backdrop_exit_active
}

const transitionTimeout = {
	enter: 100,
	exit: 300
}

export const Backdrop = props => {
	return (
		<CSSTransition mountOnEnter unmountOnExit classNames={{ ...transitionClassNames }} timeout={{ ...transitionTimeout }} in={props.isShow}>
			<div className={classes.Backdrop} onClick={props.close} />
		</CSSTransition>
	)
}
