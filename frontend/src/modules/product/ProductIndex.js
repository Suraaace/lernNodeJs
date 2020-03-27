import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";


export default class ProductIndex extends React.Component{ // exporting and defing at the same time
// class ProductIndex extends React.Component{ 

    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

        componentDidMount() {
            // API call to fetch list of user in Nodejs
            axios.get('http://localhost:4000/api/product/')
                .then((response) => {
                    this.setState({products: response.data.data });
                })
                .catch(err => err);
        }

    render() {
        return(
            <div>
                <h2>List of Products</h2>
                <Link to="/product/create" className="btn btn-primary">Create Product</Link>
                <table className={"table"}>
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Price</td>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map((products,i)=>{
                                return(
                                    <tr key ={i}>
                                        <td>{products.productName}</td>
                                        <td>{products.productDescription}</td>
                                        <td>{products.productPrice}</td>
                                    </tr>
                                )
                                
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

// export default ProductIndex;