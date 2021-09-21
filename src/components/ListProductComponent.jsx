import React, { Component } from 'react';
import productService from '../services/productService';

class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
        }

        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(productId) {
        productService.deleteProduct(productId).then( res => {
            this.setState({
                products: this.state.products.filter(product => product.productId !== productId)
            });
        });
    }

    editProduct(productId) {
        this.props.history.push(`/update-product/${productId}`);
    }

    addProduct() {
        this.props.history.push('/add-product');
    }

    componentDidMount() {
        productService.getProducts().then((res) => {
            this.setState({products: res.data});
        })        
    }


    render() {
        return (
            <div>
                <div >
                    <button style={{margin: "10px"}} className="btn btn-primary" onClick={this.addProduct}> Add Product </button>
                </div>
                <h2 style={{color: "#0B5ED8"}} className="text-center">Products List</h2>
                
                <div className="row">
                   
                    <table style={{margin: "5%"}} className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Product Id</th>
                                <th> Product Name </th>
                                <th> Description </th>
                                <th> Quantity </th>
                                <th> Price </th>
                                <th> Type </th>
                                <th> Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.products.map(
                                    product => 
                                    <tr key = {product.productId}>
                                        <td> {product.productId} </td>
                                        <td> {product.productName} </td>
                                        <td> {product.description} </td>
                                        <td> {product.quantity} </td>
                                        <td> {product.price} </td> 
                                        <td> {product.type} </td>
                                        <td>
                                            <button onClick={ () => this.editProduct(product.productId) } className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(product.productId) } className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    {this.state.products.length===0  && (<h4 className="text-center" style={{color: "red"}}>No products</h4>)}
                </div>
            </div>
        );
    }
}

export default ListProductComponent;