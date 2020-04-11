import React, { useState, useEffect } from "react";
import axios from "axios";

export const ProductDetail = props => {
    const id = props.match.params.id;

    const [stop, setStop] = useState("");
    const [product, setProduct] = useState("");

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_HOST_URL+'/product/'+id)
            .then((response) => {
                setProduct(response.data.data);
            })
            .catch(err => err);
    }, [stop]);

    return (
        <div>
            <div>Name: {product.name} </div>
            <div>Description: {product.description}</div>
            <div>Price: {product.price}</div>
        </div>
    )
};