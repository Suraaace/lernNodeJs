import React from "react";

export default class ProductCreate extends React.Component{
    render(){
        return(
            <div>
               <form>
                   <div class="form-group">
                       <label for="productName">Name</label>
                       <input type="text" class="form-control" placeholder="Product Name"/>
                   </div>
                    <div class="form-group"> 
                        <label for="productColour">Colour</label>
                        <input type="text" class="form-control" placeholder="Product Colour"/>
                    </div>    
                    <div>
                        <label for="productSize">Size</label>
                        <input type="text" class="form-control" placeholder="Product Size"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Create</button>
               </form>
            </div>
        )
    }
}
