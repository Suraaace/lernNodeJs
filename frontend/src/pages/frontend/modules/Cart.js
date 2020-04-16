import React, {useEffect, useState} from 'react';
import {GlobalStore} from "global-store-hook";

export const Cart = (props) => {
    //const [cartItems, setCartItems] = useState([]);

    const store = GlobalStore();
    const cartItems = store.get('cart');
    //const [stop, setStop] = useState(false);
    // useEffect(() => {
    //     //setStop(true);
    //     setCartItems(store.get('cart'));
    // }, []);

    const handleRemove = (id) => {
        const newItems = cartItems.filter(itm => itm._id !== id);
        //setCartItems(newItems);
        store.set('cart', newItems);
        localStorage.setItem('cart', JSON.stringify(newItems));
    };
    const placeOrder= () => {
      //API Call to save it in database
      //table structure => productId, userId, orderStatus

      //clear cart page

      //Next step
      // admin panel order management
      //frontend Account => my orders
    };
    const totalPrice = cartItems.reduce((accum,item) => parseInt(accum) + parseInt(item.price), 0);

    return (
        <div>
            {cartItems.length === 0 &&
            <div>
                Oops! your cart is empty
            </div>}

            { totalPrice > 0 &&
            <div>
                <h2>Total Price: $ {totalPrice}</h2>
            </div>}
            <div>
                <table className={'table'}>
                    <tbody>
                    {
                        cartItems.map((item, i) => {
                            return(
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick = {() => handleRemove(item._id)} > Remove </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <button type={'button'} className={'btn btn-primary'} onClick={() => placeOrder()}>{'Place Order'}</button>
            </div>
        </div>
    );
};