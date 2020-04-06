import React from 'react';
import {Route} from "react-router-dom";
import {Header} from "../pages/frontend/includes/Header";
import {Footer} from "../pages/frontend/includes/Footer";


export const FrontendRoutes = ({component: Component, ...rest}) => {
    return (
        <div>
            <Header/>
            <Route {...rest} render={props => (<Component {...props} />)}/>
            <Footer/>
        </div>
        )
};