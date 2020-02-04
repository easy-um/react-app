import React from 'react'
import { CSSTransition} from 'react-transition-group'

import * as classes from './Backdrop.module.scss'

const animClasses = {
    enter: classes['Backdrop_enter'],
    enterActive: classes['Backdrop_enter_active'],
    exit: classes['Backdrop_exit'],
    exitActive: classes['Backdrop_exit_active']
}

/**
 * 
 * @param { {isShow: boolean, clicked: ()=> void} } param0 
 */
export const Backdrop = ({ isShow, clicked }) => {
    return (
        <CSSTransition
            in={isShow}
            timeout={300} 
            classNames={animClasses}
            mountOnEnter
            unmountOnExit
        >
            <div className={classes.Backdrop} onClick={clicked} />
        </CSSTransition>
    )
}