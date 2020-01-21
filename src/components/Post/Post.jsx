import React from 'react';

import * as classes from './Post.module.scss'

export const Post = ({ title, body, id, userId }) => {
    // console.log(title, id, userId, body)

    return (
        <div className={classes.Post}>
            <div className={classes.title}>Номер: {id} - {title}</div>
            <div className={classes.body}>
                {body}
            </div>
            <div className={classes.author}>
                Автор: {userId}
            </div>
        </div>
    )
}