import React from 'react';
import {Route} from "react-router-dom";
import { Header } from '../pages/blog/includes/Header';
import { Footer } from '../pages/blog/includes/Footer';

export const BlogRoutes = ({component: Component, ...rest}) => (
    <div>
        <Header/>
        <Route {...rest} render={props => (<Component {...props} />)}/>
        <Footer/>
    </div>
);

