import { ACTION_TYPES as AT } from '../actionTypes'

export const updatePosts = posts => ({ type: AT.UPDATE_POSTS, payload: { posts: posts } })

export const deletePost = id => ({ type: AT.DELETE_POST, payload: { id: id } })
