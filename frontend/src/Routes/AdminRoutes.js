import React from 'react';
import {Route} from "react-router-dom";


export const AdminRoutes = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (<Component {...props} />)}/>
);