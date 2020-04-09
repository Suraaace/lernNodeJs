import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

export default class Home extends React.Component{ // exporting and defing at the same time
   // export const Home = (props) =>   
        constructor(props) {
            super(props);
        this.state = {
            pageTitle: 'ProductS',
            products: [],
            productCount: 0,
        };
        };

        componentDidMount() 
        {
            this.loadDataFromServer();
        };
    
        loadDataFromServer = ()=>{
            axios.get('/')
            .then((response) => {
                let totalData = response.data.count;
        
                this.setState({
                    productCount: totalData,
                    products: response.data
                    
                });
                console.log('Data has been received');
                
                })
            .catch(err => err);
        };
    
        displayProduct = (products) => {
           // const count =  products.length;
           // if (!productCount) return null;
        
            
                 return (  
                    this.state.products.map((product, i) =>{
                    <div key = {i}>
                    <div className="card-body" >
                    <h5 className="card-title">{product.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{product.category ? product.category.name : ''}</h6>
                    <p className="card-text">{product.description}</p>
                    </div>
                </div>
                    }
               )
                
        
           ); 
        }  

    
        render(){
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <div>{this.displayProduct(this.state.products)}</div>
                
        
                

            </div>
        );
        };
    };