import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavbarNews extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#search">News App</a>
                    <a className="navbar-brand" href="#zero">Muhammad Yogi</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        )
    }
}