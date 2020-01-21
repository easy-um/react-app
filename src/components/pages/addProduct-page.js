import React, { Component } from "react";

class AddProductPage extends Component {

  state = {
    title: "",
    price: ""
  };

  onTitleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  onPriceChange = (event) => {
    this.setState({
      price: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddProduct(this.state.title, this.state.price);
    this.setState({
      title: "",
      price: ""
    });
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
        </form>
      </div>
    );
  }
}

export default AddProductPage;
