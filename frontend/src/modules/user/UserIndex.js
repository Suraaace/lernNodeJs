import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class UserIndex extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        console.log('b');
        // API call to fetch list of user in Nodejs
        axios.get('http://localhost:3000/api/user/')
            .then((response) => {
                this.setState({users: response.data.data });
            })
            .catch(err => err);
    }

    render() {
        return(
            <div>
                <h2>List Of Users</h2>
                <Link to="/user/create" className="btn btn-primary">Create User</Link>
                <table className={'table'}>
                    <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                       this.state.users.map((user, i) => {
                           return (
                               <tr key={i}>
                                   <td>{user.firstName}</td>
                                   <td>{user.lastName}</td>
                                   <td>{user.email}</td>
                                   <td>{user.phone}</td>
                               </tr>
                           )
                       })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserIndex;