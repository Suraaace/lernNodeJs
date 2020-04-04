import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import history from "./helper/history";
import {AdminRoutes} from "./Routes/AdminRoutes";
import {FrontendRoutes} from "./Routes/FrontendRoutes";
import UserIndex from "./pages/admin/modules/user/UserIndex";
import UserCreate from "./pages/admin/modules/user/UserCreate";
import {Home} from "./pages/frontend/modules/Home";

export const SiteRoutes = (props) => {
    return (
        <Router history={history}>
            <Switch>
                {/* admin routes*/}
                <AdminRoutes exact path={'/admin/user'} component={UserIndex}/>
                <AdminRoutes exact path={'/admin/user/create'} component={UserCreate}/>
                <AdminRoutes exact path={'/admin/user/edit/:id'} component={UserCreate}/>

                {/* frontend routes*/}
                <FrontendRoutes exact path={'/'} component={Home}/>


               {/* <LoginRoutes/>*/}
            </Switch>
        </Router>
    );
};