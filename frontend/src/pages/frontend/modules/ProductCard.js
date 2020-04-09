import React from "react";
import {Link} from "react-router-dom";

export const ProductCard = props => {
    const product = props.product;
    return (
        <div className={'col-3'}>
            <div className="card" >
                <img className="card-img-top" src="https://dummyimage.com/300.png/09f/fff" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{product.price}</li>
                    <li className="list-group-item">{product.category ? product.category.name : ''}</li>
                    <li className="list-group-item"><Link to={'/'} className={'btn btn-primary btn-block'}>Add to Cart</Link></li>
                </ul>
            </div>
        </div>
    );
};