import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import history from "../../helper/history";
import Alert from "../../helper/alert";

class UserIndex extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            pageTitle: 'User Management',
            users: [],
            userCount: 0,
            message:""
        }
    }

    componentDidMount() {
        this.loadDataFromServer();
    }

    handleDelete = (id) => {
        axios.delete(process.env.REACT_APP_API_HOST_URL+'/user/delete/'+id)
            .then((response) => {
                this.loadDataFromServer();
            })
            .catch(err => err);
    };

    loadDataFromServer = () => {

        // Get All data from API and update the state
        axios.get(process.env.REACT_APP_API_HOST_URL+'/user/')
            .then((response) => {
                this.setState({users: response.data.data });
                this.setState({userCount: response.data.data.length})
            })
            .catch(err => err);
    };

    render() {
        return(
            <div>
                <h2>{ this.state.pageTitle}</h2>
                <Link to="/admin/user/create" className="btn btn-primary float-right">Create User</Link>
                <div className="card-body">
                    <h5 className="card-title">Users({this.state.userCount})</h5>
                    <div className="card">
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
                                           <td><Link to={'/admin/user/edit/' + user._id} className={'btn btn-primary'}>Edit</Link></td>
                                           <td><button type={'button'} onClick={() => this.handleDelete(user._id)} className={'btn btn-danger'}>Delete</button></td>
                                       </tr>
                                   )
                               })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserIndex;