import React from 'react'

import * as classes from './Main.module.scss'

export const Main = props => {
	return <main className={classes.Main}>{props.children}</main>
}
