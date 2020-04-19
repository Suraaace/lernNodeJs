import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const Account = (props) => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_HOST_URL+'/order/')
            .then((response) => {
                setOrders(response.data.data);
            }) 
            .catch(err=>err);
    }, []); // [] to stop the loop call
    
    return(
        <div>
            <div>
                <table className={'table'}>
                    <tbody>
                    {
                        orders.map((order, i) => {
                                
                            return (
                                <tr key ={i}>
                                    <td>{order._id}</td>
                                </tr>                                                  
                            )                         
                        })
                    }                    
                    </tbody>
                </table>
            </div>            
        </div>                     
    )

}