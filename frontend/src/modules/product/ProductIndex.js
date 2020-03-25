import React from "react";
import {Link} from "react-router-dom";


export default class ProductIndex extends React.Component{ // exporting and defing at the same time
// class ProductIndex extends React.Component{ 
    render() {
        return(
            <div>
                <h2>List of Products</h2>
                <Link to="/product/create" className="btn btn-primary">Create Product</Link>
                <table className={"table"}>
                    <tr>
                        <td>Name</td>
                        <td>Colour</td>
                        <td>Size</td>
                    </tr>
                    <tr>
                        <td>Monitor</td>
                        <td>Black</td>
                        <td>32</td>
                    </tr>
                </table>
            </div>
        )
    }
}

// export default ProductIndex;