import React, { Component } from "react";

import { axiosInstance } from '../../axios/axios'

class AddProductPage extends Component {

  state = {
    title: "",
    price: "",
  };

  onTitleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  onPriceChange = (event) => {
    const value = event.target.value
    const cleanValue = parseInt(value)
    this.setState({
      price: isNaN(cleanValue) ? '' : cleanValue
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const responce = await axiosInstance.post('products.json', {
        title: this.state.title,
        price: this.state.price
      })
      console.log('[addProduct][responce]', responce)
      this.setState({title: '', price: ''})
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { title, price } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Add product page</h2>

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
            <button className="btn btn-success">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProductPage;
