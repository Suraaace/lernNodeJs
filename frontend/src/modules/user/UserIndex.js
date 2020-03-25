import React from "react";
import {Link} from "react-router-dom";

class UserIndex extends React.Component{
    render() {
        return(
            <div>
                <h2>List Of Users</h2>
                <Link to="/user/create" className="btn btn-primary">Create User</Link>
                <table className={'table'}>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                    </tr>
                    <tr>
                        <td>Kiran</td>
                        <td>Mulmi</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default UserIndex;