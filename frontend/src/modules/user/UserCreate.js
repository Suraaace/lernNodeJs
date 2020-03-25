import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';




class UserCreate extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="firsName ">First Name</label>
                        <input type="text" class="form-control" placeholder="First Name"/>
                    </div>
                    <div class="form-group">
                        <label for="lastName ">Last Name</label>
                        <input type="text" class="form-control" placeholder="Last Name"/>
                        {/* <input type="text" class="form-control" id="FirstName" placeholder="First Name"> */}
                    </div>
                    <div class="form-group">
                        <label for="phoneNumber">Phone Number</label>
                        <input type="text" class="form-control" placeholder="Phone Number"/>
                    </div>
                    <button type="submit" class="btn btn-primary"> Register </button>
                </form>

            </div>
        )
    }
}

export default UserCreate;