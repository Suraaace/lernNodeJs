import React from "react";
import axios from "axios";

class UserCreate extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        }
        
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    };

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    };

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    };

    changePhoneHandler = (event) => {
        this.setState({phone: event.target.value});
    };

    submitHandler = () => {

        //API Call created in Nodejs
        axios.post('http://localhost:3000/api/user/create', this.state)
            .then((response) => {
                this.setState({});
               console.log(response);
               console.log("successfully saved");
            });
    };

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="firsName ">First Name</label>
                        <input type="text" className="form-control" placeholder="First Name" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName ">Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName ">Email</label>
                        <input type="text" className="form-control" placeholder="Email" value={this.state.email} onChange={this.changeEmailHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" className="form-control" placeholder="Phone Number" value={this.state.phone} onChange={this.changePhoneHandler}/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.submitHandler}> Save</button>
                </form>

            </div>
        )
    }
}

export default UserCreate;