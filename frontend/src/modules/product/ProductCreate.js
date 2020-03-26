import React from "react";
import axios from "axios";


export default class ProductCreate extends React.Component{

    constructor(props){
        super(props);

        this.state= {
            productName: "",
            productDescription: "",
            productPrice: "",
        }
    }

    changeProductNameHandler = (event) => {
        this.setState({productName: event.target.value});
    };

    changeProductDescriptionHandler = (event) => {
        this.setState({productDescription: event.target.value});
    };

    changeProductPriceHandler = (event) => {
        this.setState({productPrice: event.target.value});
    };

    submitHandler = () => {
        axios.post('http://localhost:3000/api/product/create', this.state)
            .then((response) => {
                this.setState({});
                console.log(response);
                console.log('"Successfully Saved');
            });
    }
    

    render(){
        return(
            <div>
               <form>
                   <div class="form-group">
                       <label for="productName">Name</label>
                       <input type="text" class="form-control" placeholder="Product Name" value={this.state.productName} onChange={this.changeProductNameHandler} />
                   </div>
                    <div class="form-group"> 
                        <label for="productDescription">Description</label>
                        <input type="text" class="form-control" placeholder="Product Description" value={this.state.productDescription} onChange={this.changeProductDescriptionHandler}/>
                    </div>    
                    <div class="form-group">
                        <label for="productPrice">Price</label>
                        <input type="text" class="form-control" placeholder="Product Price" value={this.state.productPrice} onChange={this.changeProductPriceHandler}/>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={this.submitHandler}>Save</button>
               </form>
            </div>
        )
    }
}
