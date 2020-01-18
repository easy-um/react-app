import React from 'react'
import { TransitionGroup } from 'react-transition-group'

import * as classes from './transitionGroup.module.scss'

export const transitionGroup = WrappedComponent => props => {
	return (
		<TransitionGroup className={classes.transitionGroup}>
			<WrappedComponent {...props} />
		</TransitionGroup>
	)
}
