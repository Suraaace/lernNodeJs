import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import history from "../../helper/history";

class UserIndex extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        // API call to fetch list of user in Nodejs
        axios.get('http://localhost:4000/api/user/')
            .then((response) => {
                this.setState({users: response.data.data });
            })
            .catch(err => err);
    }

    handleDelete = (id) => {
        axios.delete('http://localhost:4000/api/user/delete/'+id)
            .then((response) => {
                history.push('/user');
            })
            .catch(err => err);
    };

    render() {
        return(
            <div>
                <h2>List Of Users</h2>
                <Link to="/user/create" className="btn btn-primary">Create User</Link>
                <table className={'table'}>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th colSpan={2}>Action</th>
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
                                   <td><Link to={'user/edit/' + user._id}>Edit</Link></td>
                                   <td><button type={'button'} onClick={() => this.handleDelete(user._id)} className={'btn btn-danger'}>Delete</button></td>
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