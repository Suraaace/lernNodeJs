import React from "react";

export class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Simple Ecommerce Site</a>
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
