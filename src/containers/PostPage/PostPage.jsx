import React from 'react'
import { withRouter } from 'react-router-dom'

const PostPageWrap = props => {
    console.log(props)
    console.log('[currentPage]', props.match.params.postId)

    return (
        <div>post page!!</div>
    )
}

export const PostPage = withRouter(PostPageWrap)