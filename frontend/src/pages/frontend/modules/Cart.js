import React, {useEffect, useState} from 'react';
import {GlobalStore} from "global-store-hook";

export const Cart = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const store = GlobalStore();
    const [stop, setStop] = useState(false);
    useEffect(() => {
        setStop(true);
        setCartItems(store.get('cart'));
    }, [stop]);

    const handleRemove = (id) => {

    }

    return (
        <div>
            {cartItems.length === 0 &&
            <div>
                Oops! your cart is empty
            </div>}

            <div>
                <table className={'table'}>
                    {
                        cartItems.map((item, i) => {
                            return(
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <button type="button" className="btn btn-danger" 
                                    onClick = {() => handleRemove(item.id)} > Remove </button> 
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    );
};