import React from "react";
import axios from "axios";


export default class ProductCreate extends React.Component{

    constructor(props){
        super(props);

        this.state= {
            name: "",
            description: "",
            price: "",
        }
    }

    changeProductNameHandler = (event) => {
        this.setState({name: event.target.value});
    };

    changeProductDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    };

    changeProductPriceHandler = (event) => {
        this.setState({price: event.target.value});
    };

    submitHandler = () => {
        axios.post('http://localhost:4000/api/product/create', this.state)
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
                   <div className="form-group">
                       <label htmlFor="productName">Name</label>
                       <input type="text" className="form-control" placeholder="Product Name" value={this.state.name} onChange={this.changeProductNameHandler} />
                   </div>
                    <div className="form-group">
                        <label htmlFor="productDescription">Description</label>
                        <input type="text" className="form-control" placeholder="Product Description" value={this.state.description} onChange={this.changeProductDescriptionHandler}/>
                    </div>    
                    <div className="form-group">
                        <label htmlFor="productPrice">Price</label>
                        <input type="text" className="form-control" placeholder="Product Price" value={this.state.price} onChange={this.changeProductPriceHandler}/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.submitHandler}>Save</button>
               </form>
            </div>
        )
    }
}
