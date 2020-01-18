import React, { useState, useEffect, Fragment } from 'react'

import { Modal } from '../../components/UI/Modal/Modal'

const withErrorHandlerWrap = (WrappedComponent, axiosInstance) => {
	return props => {
		const [error, setError] = useState(null)

		useEffect(() => {
			const axiosReq = axiosInstance.interceptors.request.use(req => {
				setError(null)
				return req
			})

			const axiosRes = axiosInstance.interceptors.response.use(
				res => res,
				err => {
					setError({ error: err, message: err.response.data.message })
					return err
				}
			)

			return () => {
				axiosInstance.interceptors.request.eject(axiosReq)
				axiosInstance.interceptors.response.eject(axiosRes)
			}
			// eslint-disable-next-line
		}, [])

		const cleanError = () => setError(null)

		return (
			<Fragment>
				<Modal isShow={error} close={cleanError}>
					{error ? error.message : null}
				</Modal>
				<WrappedComponent {...props} />
			</Fragment>
		)
	}
}

export const withErrorHandler = withErrorHandlerWrap
