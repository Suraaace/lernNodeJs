import React from "react";
import axios from "axios";
import history from "../../helper/history";

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

    componentDidMount() {
        let id = this.props.match.params.id;
        if(id) {
            axios.get(process.env.REACT_APP_API_HOST_URL+'/user/'+id)
                .then((response) => {
                    this.setState({
                        firstName: response.data.data.firstName,
                        lastName: response.data.data.lastName,
                        email: response.data.data.email,
                        phone: response.data.data.phone,
                    });
                })
                .catch(err => err);
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
        let id = this.props.match.params.id;
        if(id) {
            axios.post(process.env.REACT_APP_API_HOST_URL+'/user/update/'+id, this.state)
                .then((response) => {
                    history.push('/admin/user');
                });
        } else {
            axios.post(process.env.REACT_APP_API_HOST_URL+'/user/create', this.state)
                .then((response) => {
                    history.push('/admin/user');
                });
        }

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