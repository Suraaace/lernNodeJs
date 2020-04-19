import React from "react";
import axios from "axios";

export default class OrderIndex extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            pageTitle: 'Order Management',
            orders:  [],
            // products: [] 
        }
    }

    componentDidMount() {
        this.loadOrderFromServer();
        // this.loadProductFromServer();
    }

    loadOrderFromServer = () => {
        axios.get(process.env.REACT_APP_API_HOST_URL+'/order/')
            .then((response) => {
                this.setState({orders: response.data.data });
            })
            .catch(err => err);
    }

    // loadProductFromServer = () => {
    //     axios.get(process.env.REACT_APP_API_HOST_URL+'/product/')
    //         .then((response) => {
    //             this.setState({products: response.data.data });
    //         })
    //         .catch(err => err);
    // }
    


    render() {
        return(
        <div>
            <h2>{this.state.pageTitle}</h2>
            <div className = "card-body">
            <div className = "card">
            <table className = {"table"}>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Order By</th>
                        <th>Status</th>
                    </tr>   
                </thead>
                <tbody>
                    {
                        this.state.orders.map((order, i)=>{
                            return(
                                <tr key = {i}>
                                    <td>{order.product ? order.product.name : ''}</td>
                                   <td>{order.user ? (order.user.firstName + " "+ order.user.lastName ) : '' }</td>
                                    <td>{order.status}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
            </div>        
        </div>
    )}
}

