import React from "react";
import axios from "axios";
import history from "../../../../helper/history";



export default class ProductCreate extends React.Component{

    constructor(props){
        super(props);

        this.state= {
            product: {
                name: "",
                description: "",
                price: "",
                isFeatured: "",
                isPopular: ""
            },
            categories: []
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        if(id) {
            axios.get(process.env.REACT_APP_API_HOST_URL+'/product/'+id)
                .then((response) => {
                    this.setState(state => {
                       state.product.name = response.data.data.name;
                       state.product.description = response.data.data.description;
                       state.product.price = response.data.data.price;
                      
                       state.product.isFeatured = response.data.data.isFeatured;
                       state.product.isPopular = response.data.data.isPopular;
                       return state;
                    });
                })
                .catch(err => err);
        }

        axios.get(process.env.REACT_APP_API_HOST_URL+'/category/')
            .then((response) => {
                this.setState({
                    categories: response.data.data
                });
            })
            .catch(err => err);
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState(state => {
            state.product[name] = value;
            return state;
        });
    };

    submitHandler = () => {
        let id = this.props.match.params.id;
        if(id) {
            axios.post(process.env.REACT_APP_API_HOST_URL+'/product/update/'+id, this.state.product)
            .then((response) => {
                history.push('/admin/product');
            })
        } else {
        axios.post(process.env.REACT_APP_API_HOST_URL+'/product/create', this.state.product)
            .then((response) => {
                history.push('/admin/product');
            })
        }
    };
    
    render(){
        return(
            <div>
               <form>
                   <div className="form-group">
                       <label htmlFor="productName">Name</label>
                       <input type="text" className="form-control" placeholder="Product Name" name={'name'} value={this.state.product.name} onChange={this.handleChange} />
                   </div>
                    <div className="form-group">
                        <label htmlFor="productDescription">Description</label>
                        <input type="text" className="form-control" placeholder="Product Description" name={'description'} value={this.state.product.description} onChange={this.handleChange}/>
                    </div>    
                    <div className="form-group">
                        <label htmlFor="productPrice">Price</label>
                        <input type="text" className="form-control" placeholder="Product Price" name={'price'} value={this.state.product.price} onChange={this.handleChange}/>
                    </div>
                   <div className="form-group">
                       <label htmlFor="productDescription">Category</label>
                       <select className={'form-control'} name={'category'} defaultValue={this.state.product.category} onChange={this.handleChange}>
                           { this.state.categories &&
                               this.state.categories.map( (item, i) => {
                                   return (<option key={i} value={item._id}>{ item.name }</option>)
                               })
                           }
                       </select>
                   </div>
                    <div className="form-group">
                        <label htmlFor="isFeatured">Featured</label>
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name={"isFeatured"}  value={'yes'} onChange={this.handleChange} defaultChecked
                                 />
                                <label className="form-check-label" htmlFor="isFeatured1">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name={"isFeatured"}  value={'no'} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="isFeatured2">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="isPopular">Popular</label>
                        {/* <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name={"yes"} value={this.state.product.isPopular} onChange={this.handleChange} checked/>
                                <label className="form-check-label" htmlFor="isFeatured1">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name={"no"}  value={this.state.product.isPopular} onChange={this.handleChange}  />
                                <label className="form-check-label" htmlFor="isFeatured2">No</label>
                            </div>
                        </div> */}
                        <div className="col-sm-10">
                        <select name={'isPopular'} defaultChecked= {this.state.product.isPopular} onChange={this.handleChange}>
                        <option selected value={"yes"}>Yes</option>
                        <option value={"no"}>No</option>
                        </select>
                        </div>
                   

                    </div>

                   <button type="button" className="btn btn-primary" onClick={this.submitHandler}>Save</button>
               </form>
            </div>
        )
    }
}
