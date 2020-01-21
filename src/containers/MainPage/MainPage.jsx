import React, { Component } from 'react';

import { Post } from '../../components/Post/Post'

import * as classes from './MainPage.module.scss'

export class MainPage extends Component {
    state = {
        post: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    this.setState(prev => ({ post: [...prev.post, ...json] }))
                }, 3000)
            })
    }

    renderElements() {
        return this.state.post.map((item) => {
            return (
                <Post key={item.id} {...item} />
            )
        })
    }

    renderLoading() {
        return (
            <p>Loading elemetns...</p>
        )
    }

    render() {
        return (
            <div className={classes.MainPage}>
                {this.state.post.length ?
                    this.renderElements() :
                    this.renderLoading()}
            </div>
        )
    }
}