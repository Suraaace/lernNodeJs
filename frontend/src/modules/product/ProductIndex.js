import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import history from "../../helper/history";



export default class ProductIndex extends React.Component{ // exporting and defing at the same time
// class ProductIndex extends React.Component{ 

    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

        componentDidMount() {
            // API call to fetch list of product in Nodejs
            axios.get('http://localhost:4000/api/product/')
                .then((response) => {
                    this.setState({products: response.data.data });
                })
                .catch(err => err);
        }

        handleDelete = (id) => {
            axios.delete('http://localhost:4000/api/product/delete/'+id)
                .then((response) => {
                    history.push('/product');
                })
                .catch(err => err);
        };

    render() {
        return(
            <div>
                <h2>List of Products</h2>
                <Link to="/product/create" className="btn btn-primary">Create Product</Link>
                <table className={"table"}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th colSpan={3}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map((product,i)=>{
                                return(
                                    <tr key ={i}>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                        <td> <Link to={'product/edit/'+ product._id}>Edit</Link></td>
                                        <td> <button type={'button'} onClick={()=>this.handleDelete(product._id)} className={'btn btn-danger'}>Delete</button> </td>
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