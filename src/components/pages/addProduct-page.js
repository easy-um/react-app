import React, { Component, createRef } from 'react'

import { axiosInstance } from '../../axios/axios'

import { ImagePreview } from '../UI/ImagePreview/ImagePreview'

import { convertToBase64 } from '../../util/base64'

class AddProductPage extends Component {
	state = {
		title: '',
		price: '',
		uploadedImage: null,
		convertedImage: null
	}

	/** @type {React.RefObject<HTMLInputElement>} */
	fileRef = createRef(null)

	componentDidUpdate(prevProps, prevState){
		if ((prevState.uploadedImage !== this.state.uploadedImage) && (this.state.uploadedImage !== null)){
			convertToBase64(this.state.uploadedImage).then(
				convertedImg => this.setState(prevState => ({ ...prevState, convertedImage: convertedImg }))
			)
		}

		// if (prevState.convertedImage !== this.state.convertedImage && this.state.convertedImage) {
		// 	// not needed
		// }
	}

	onTitleChange = event => {
		this.setState({
			title: event.target.value
		})
	}

	onPriceChange = event => {
		const value = event.target.value
		const cleanValue = parseInt(value)
		this.setState({
			price: isNaN(cleanValue) ? '' : cleanValue
		})
	}

	handleSubmit = async event => {
		event.preventDefault()
		try {
			const responce = await axiosInstance.post(
				'products.json',
				{
					title: this.state.title,
					price: this.state.price,
					img: this.state.convertedImage
				},
				{ params: { auth: localStorage.getItem('token') } }
			)
			console.log('[addProduct][responce]', responce)
			this.setState({ title: '', price: '' })
		} catch (err) {
			console.log(err)
		}
	}

	handleUploadFile = () => {
		console.log('[handleUploadFile][triggered!]')
		this.fileRef.current.click()
	}

	onFileAdded = () => {
		const file = this.fileRef.current.files[0]
		console.log('[onFileAdded]', file)
		if (file.type !== 'image/jpeg') return
		this.setState({ uploadedImage: file, convertedImage: null })
	}

	render() {
		const { title, price } = this.state

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h2>Add product page</h2>

					<ImagePreview img={this.state.convertedImage} />

					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Title</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Title"
							value={title}
							onChange={this.onTitleChange}
						></input>
					</div>

					<input
						ref={this.fileRef}
						onChange={this.onFileAdded}
						type="file"
						style={{width: '0px', height: '0px', position:'absolute', display:'block', visibility: 'hidden'}}
					></input>

					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Price</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Price"
							value={price}
							onChange={this.onPriceChange}
						></input>
					</div>

					<div className="form-group">
						<button className="btn btn-success" style={{margin:'5px'}}>Send</button>
					</div>
				</form>
				<div>
					<button className='btn btn-info' onClick={this.handleUploadFile} style={{ margin: '5px' }}>Choose file</button>
					{this.state.convertedImage &&
						<button
							className='btn btn-danger'
							onClick={() => this.setState({ uploadedImage: null, convertedImage: null })} style={{ margin: '5px' }}>
							Delete file
							</button>
					}
				</div>
			</div>
		)
	}
}

export default AddProductPage
