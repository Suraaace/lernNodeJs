import React from "react";
import {Link} from "react-router-dom";
export class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light navbar-wrapper">
                    <Link to={''}>Simple Ecommerce Site</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        )
    }
}

export class Footer extends React.Component {
    render() {
        return (
            <div>
                <div>I am footer</div>
            </div>
        )
    }
}

/*
export {Header, Footer}*/
