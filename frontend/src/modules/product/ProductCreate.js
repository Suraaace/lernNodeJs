import React from "react";
import axios from "axios";
import history from "../../helper/history";



export default class ProductCreate extends React.Component{

    constructor(props){
        super(props);

        this.state= {
            name: "",
            description: "",
            price: "",
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        if(id) {
            axios.get('http://localhost:4000/api/product/'+id)
                .then((response) => {
                    this.setState({
                        name: response.data.data.name,
                        description: response.data.data.description,
                        price: response.data.data.price,
                    });
                })
                .catch(err => err);
        }
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    };

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    };

    changePriceHandler = (event) => {
        this.setState({price: event.target.value});
    };

    submitHandler = () => {
        let id = this.props.match.params.id;
        if(id) {
            axios.post('http://localhost:4000/api/product/update/'+id, this.state)
            .then((response) => {
                history.push('/product');
            })
        } else {
        axios.post('http://localhost:4000/api/product/create', this.state)
            .then((response) => {
                history.push('/product');
            })
        }
    }

    
    render(){
        return(
            <div>
               <form>
                   <div className="form-group">
                       <label htmlFor="productName">Name</label>
                       <input type="text" className="form-control" placeholder="Product Name" value={this.state.name} onChange={this.changeNameHandler} />
                   </div>
                    <div className="form-group">
                        <label htmlFor="productDescription">Description</label>
                        <input type="text" className="form-control" placeholder="Product Description" value={this.state.description} onChange={this.changeDescriptionHandler}/>
                    </div>    
                    <div className="form-group">
                        <label htmlFor="productPrice">Price</label>
                        <input type="text" className="form-control" placeholder="Product Price" value={this.state.price} onChange={this.changePriceHandler}/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.submitHandler}>Save</button>
               </form>
            </div>
        )
    }
}
