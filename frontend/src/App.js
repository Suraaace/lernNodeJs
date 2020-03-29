import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Header, Footer} from "./templates/KmTemplate";
import history from "./helper/history";
import UserIndex from "./modules/user/UserIndex";
import OrderIndex from "./modules/order/OrderIndex";
import ProductIndex from "./modules/product/ProductIndex";
import UserCreate from "./modules/user/UserCreate";
import ProductCreate from "./modules/product/ProductCreate";
import {PublicRoute} from "./PublicRoutes";
// import Header from "./templates/Header";
// import Footer from "./templates/Footer";

class App extends React.Component {

  render() {
    return(
      <Router history={history}>
        {/* Header Start */}

        <Header/>
        {/* Header Ends*/}

        {/* Body Starts*/}
        <div className={'container-fluid'}>
          <div className={'row'}>

            {/* Sidebar */}
            <div className={'col-2 sidebar-wrapper'}>
            <nav className="nav flex-column" style={ {backgroundColor: "#e8e8e8"}} >
              <Link to="/admin/user" className="nav-link">User Management</Link>
              <Link to="/product" className="nav-link">Product Management</Link>
              <Link to="/order" className="nav-link">Order Management</Link>
            </nav>
            </div>
            {/* Body */}
            <div className={'col-10 body-wrapper'}>
              <Switch>
                <PublicRoute exact path={'/admin/user'} component={UserIndex}/>
                <PublicRoute exact path={'/admin/user/create'} component={UserCreate}/>
                <PublicRoute exact path={'/admin/user/edit/:id'} component={UserCreate}/>

                <Route exact path="/product">
                  <ProductIndex />
                </Route>
                <Route exact path="/product/create">
                  <ProductCreate />
                </Route>
                <Route exact path="/order">
                  <OrderIndex />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        {/* Body Ends*/}

        {/*Footer Starts*/}
        <div className={'container-fluid'} style={{ backgroundColor: "#d2d2d2"}}>
          <div className={'row'} style={{'height': 200}}>
            <Footer/>
          </div>
        </div>
        {/* Footer Ends*/}
      </Router>
    );
  }

}

export default App;