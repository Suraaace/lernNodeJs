import React, {useEffect, useState} from 'react';
import {GlobalStore} from "global-store-hook";
import axios from "axios";
import history from "../../../helper/history";



export const Cart = (props) => {
    const [placeOrderText, setPlaceOrderText] = useState('Place Order');

    const store = GlobalStore();
    const cartItems = store.get('cart');
    const user = store.get('user');
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

        for (let itm of cartItems) {

            let orderObj = {
                id : itm._id,
                // name : itm.name,
                userId : user.id,
                status: "pending"
            };

            axios.post(process.env.REACT_APP_API_HOST_URL+'/order/create', orderObj)
                .then ((response) => {
                    console.log(orderObj);

                })
        }
        store.set('cart', []);
        localStorage.setItem('cart', "");
        setPlaceOrderText('Order Placed Success');
    };


        // let id = this.props.match.params.id;
        // if(id) {
        //     axios.post(process.env.REACT_APP_API_HOST_URL+'/user/update/'+id, this.state)
        //         .then((response) => {
        //             history.push('/admin/user');
        //         });
        // } else {
        //     axios.post(process.env.REACT_APP_API_HOST_URL+'/user/create', this.state)
        //         .then((response) => {
        //             history.push('/admin/user');
        //         });
        // }
      //API Call to save it in database
      //table structure => productId, userId, orderStatus

      //clear cart page

      //Next step
      // admin panel order management
      //frontend Account => my orders
   
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
                <button type={'button'} className={'btn btn-primary'} onClick={() => placeOrder()}>{placeOrderText}</button>
            </div>
        </div>
    );
};