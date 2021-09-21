import React, { Component } from 'react';
import productService from '../services/productService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productName: '',
            description: '',
            quantity: '',
            price: '',
            type: ''
        }

        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
    }

    saveProduct = (event) => {
        event.preventDefault();
        let product = {productName: this.state.productName, description: this.state.description, quantity: this.state.quantity,
                        price: this.state.price, type: this.state.type};
        // console.log('product =>' + JSON.stringify(product));
        productService.createProduct(product).then(res => {
            this.props.history.push('/products');
        })
    }

    cancel() {
        this.props.history.push('/products');
    }

    changeProductNameHandler = (event) => {
        this.setState({productName: event.target.value});
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    changeQuantityHandler = (event) => {
        this.setState({quantity: event.target.value});
    }

    changePriceHandler = (event) => {
        this.setState({price: event.target.value});
    }

    changeTypeHandler = (event) => {
        this.setState({type: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row" style={{padding: "3%"}}>
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 style={{color: "#0B5ED8"}} className="text-center"> Add Product </h3>
                            <div className="card-body">

                                <form>
                                    <div className="form-group">
                                        <label>Product Name: </label>
                                        <input placeholder="Product Name" name="productName" className="form-control" 
                                            value={this.state.productName} onChange={this.changeProductNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Description: </label>
                                        <input placeholder="Product description" name="description" className="form-control" 
                                            value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Quantity: </label>
                                        <input placeholder="Quantity" name="quantity" className="form-control" 
                                            value={this.state.quantity} onChange={this.changeQuantityHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Price: </label>
                                        <input placeholder="Price" name="price" className="form-control" 
                                            value={this.state.price} onChange={this.changePriceHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Type: </label>
                                        <input placeholder="Type" name="type" className="form-control" 
                                            value={this.state.type} onChange={this.changeTypeHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveProduct}>Save</button>
                                    <button style={{marginLeft: "10px"}} className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateProductComponent;