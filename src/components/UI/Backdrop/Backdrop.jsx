import React from 'react'

import * as classes from './Backdrop.module.scss'

export const Backdrop = props => (props.isShow ? <div className={classes.Backdrop} onClick={props.close} /> : null)
