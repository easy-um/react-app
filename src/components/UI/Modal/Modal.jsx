import React, { Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'

import * as classes from './Modal.module.scss'

import { Backdrop } from '../Backdrop/Backdrop'

const animStyles = {
    enter: classes['Modal_enter'],
    enterActive: classes['Modal_enter_active'],
    exit: classes['Modal_exit'],
    exitActive: classes['Modal_exit_active']
}

/**
 * @param { {isShow: boolean, clicked: ()=> void, children: React.ReactNode } } param0
 */
export const Modal = ({isShow, clicked, children}) => {

    return (
        <Fragment>
                <Backdrop isShow={isShow} clicked={clicked} />
                <CSSTransition in={isShow} classNames={animStyles} timeout={300} mountOnEnter unmountOnExit>
                    <div className={classes.Modal}>
                        {children}
                    </div>
                </CSSTransition>
        </Fragment>
    )
}