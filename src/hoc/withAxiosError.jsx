import React, { Component, Fragment } from 'react'
import { AxiosInstance} from 'axios'

import * as classes from './withAxiosError.module.scss'

import {Modal} from '../components/UI/Modal/Modal'

/**
 * 
 * @param {React.Component} WrappedComponent 
 * @param {AxiosInstance} axiosInstance
 */
export const withAxiosError = (WrappedComponent, axiosInstance) => {
    return class extends Component{
        // eslint-disable-next-line
        constructor(props) {
            super(props)

            this.state = {
                error: null
            } 
                
            this.axiosRes = axiosInstance.interceptors.response.use(
                res => res,
                error => {
                    this.setState({ error: error })
                    return error
                }
            )
        }

        componentWillUnmount() {
            axiosInstance.interceptors.response.eject(this.axiosRes)
        }

        render() {
            return (
                <div className={classes.withErrorHandler}>
                    <Modal isShow={this.state.error} clicked={()=>this.setState({error: null})}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
}