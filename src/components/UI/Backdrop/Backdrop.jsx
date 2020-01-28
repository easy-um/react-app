import React from 'react'

import * as classes from './Backdrop.module.scss'

/**
 * 
 * @param { {isShow: boolean, clicked: ()=> void} } param0 
 */
export const Backdrop = ({ isShow, clicked }) => isShow ? <div className={classes.Backdrop} onClick={clicked} /> : null