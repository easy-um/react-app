import React from 'react'
import { CSSTransition } from 'react-transition-group'

import * as classes from './ImagePreview.module.scss'

const animClasses = {
    enter: classes['ImagePreview_enter'],
    enterActive: classes['ImagePreview_enter_active'],
    exit: classes['ImagePreview_exit'],
    exitActive: classes['ImagePreview_exit_active']
}

export const ImagePreview = ({img}) => {
    return (
        <CSSTransition in={!!img} timeout={300} mountOnEnter unmountOnExit classNames={animClasses}>
            <div className={classes.ImagePreview}>
                <img src={img} alt="super-cat-pic!" className='img-thumbnail' />
            </div>
        </CSSTransition>
    )
} 