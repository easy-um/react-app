import React,{ Fragment} from 'react'

import * as classes from './Modal.module.scss'

import {Backdrop } from '../Backdrop/Backdrop'

/**
 * @param { {isShow: boolean, clicked: ()=> void, children: React.ReactNode } } param0
 */
export const Modal = ({isShow, clicked, children}) => {

    return (
        <Fragment>
            <Backdrop isShow={isShow} clicked={clicked} />
            <div
                className={classes.Modal}
                style={{ transform: isShow ? 'translateY(0)' : 'translateY(-100vh)' }}>
                {children}
            </div>
        </Fragment>
    )
}