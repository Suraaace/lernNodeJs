import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'axios-progress-bar/dist/nprogress.css';

import {loadProgressBar} from 'axios-progress-bar';

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
import Home from "./pages/frontend/modules/Home";
import {Product} from "./pages/frontend/modules/Product";
import ProductIndex from "./pages/admin/modules/product/ProductIndex";
import ProductCreate from "./pages/admin/modules/product/ProductCreate";
import CategoryIndex from "./pages/admin/modules/category/CategoryIndex";
import CategoryCreate from "./pages/admin/modules/category/CategoryCreate";
import OrderIndex from "./pages/admin/modules/order/OrderIndex";
import OrderCreate from "./pages/admin/modules/order/OrderCreate";
import {Login} from "./pages/frontend/modules/Login";
import {AdminLoginRoutes} from "./Routes/AdminLoginRoutes";
import {AdminLogin} from "./pages/admin/modules/login/AdminLogin";
import {ForgotPassword} from "./pages/admin/modules/login/ForgotPassword";
import { BlogRoutes } from './Routes/BlogRoutes';
import {BlogHome} from "./pages/blog/modules/BlogHome";
import {BlogAboutUs} from "./pages/blog/modules/BlogAboutUs";
import {ProductDetail} from "./pages/frontend/modules/ProductDetail";
import {CategoryDetail} from "./pages/frontend/modules/CategoryDetail";
import {ProductListing} from "./pages/frontend/modules/ProductListing";
import {Cart} from "./pages/frontend/modules/Cart";
import {Account} from "./pages/frontend/modules/Account";

import {GlobalStoreProvider, GlobalStore} from 'global-store-hook';

export const SiteRoutes = (props) => {
    
    loadProgressBar();

    let cart = localStorage.getItem('cart');
    if(!cart) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }

    const init = {
        cart: cart,
        user: {
            _id: "5e78c54d79771f735e168589",
            name: "Kiran Mulmi",
            //email: "a"
        }
    };

    return (
        <GlobalStoreProvider initValues={init}>
            <Router history={history}>
            <Switch>
                {/* admin routes*/}
                <AdminLoginRoutes exact path={'/admin/login'} component={AdminLogin}/>
                <AdminLoginRoutes exact path={'/admin/'} component={AdminLogin}/>
                <AdminLoginRoutes exact path={'/admin/forgot-password'} component={ForgotPassword}/>

                {/*User Management*/}
                <AdminRoutes exact path={'/admin/user'} component={UserIndex}/>
                <AdminRoutes exact path={'/admin/user/create'} component={UserCreate}/>
                <AdminRoutes exact path={'/admin/user/edit/:id'} component={UserCreate}/>

                {/* Product Management*/}
                <AdminRoutes exact path={'/admin/product'} component={ProductIndex}/>
                <AdminRoutes exact path={'/admin/product/create'} component={ProductCreate}/>
                <AdminRoutes exact path={'/admin/product/edit/:id'} component={ProductCreate}/>

                {/* Category Management*/}
                <AdminRoutes exact path={'/admin/category'} component={CategoryIndex}/>
                <AdminRoutes exact path={'/admin/category/create'} component={CategoryCreate}/>
                <AdminRoutes exact path={'/admin/category/edit/:id'} component={CategoryCreate}/>

                {/* Order Management */}
                <AdminRoutes exact path={'/admin/order'} component={OrderIndex}/>
                <AdminRoutes exact path={'/admin/order/create'} component={OrderCreate}/>


                {/* frontend routes*/}
                <FrontendRoutes exact path={'/'} component={Home}/>
                <FrontendRoutes exact path={'/product'} component={Product}/>
                <FrontendRoutes exact path={'/product/details/:itemId'} component={ProductDetail}/>
                <FrontendRoutes exact path={'/category/details/:itemId'} component={ProductListing}/>
                <FrontendRoutes exact path={'/cart'} component={Cart}/>
                <FrontendRoutes exact path={'/login'} component={Login}/>
                <FrontendRoutes exact path={'/account'} component={Account}/>


               {/* <LoginRoutes/>*/}


               {/* <BlogRoutes/> */}
                <BlogRoutes exact path={'/blog'} component={BlogHome} />
                <BlogRoutes exact path={'/blog/about-us'} component= {BlogAboutUs}/>

            </Switch>
        </Router>
        </GlobalStoreProvider>
    );
};