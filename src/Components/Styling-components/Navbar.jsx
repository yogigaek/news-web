import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

export default class NavbarComp extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#naf">Muhammad Yogi</a>
            <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </Button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-link" href="#bio">Biografi</a>
                <a className="nav-link" href="#skill">Skill</a>
                <a className="nav-link" href="#table" tabindex="-1" aria-disabled="true">Grafik Skill</a>
                <a className="nav-link" href="#kontak1">Contact</a>
                </div>
            </div>
            </div>
        </nav>
        )
    }
}