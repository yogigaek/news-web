import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class ListComp extends React.Component{

    
    render(){
        return(
            <div className="row" id="skill">
            <div className="col">
                <h6 className="fs-5 fw-bold" >Skills</h6>
                <ul>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>HTML</li>
                    <li>Css</li>
                    <li>MongoDb</li>
                    <li>MySql</li>
                    <li>Git</li>
                    <li>Bash</li>
                </ul> 
            </div>
            <div className="col">
                <h6 className="fs-5 fw-bold">Other Skills</h6>
                <ul>
                    <li>NodeJs</li>
                    <li>Laravel</li>
                    <li>React.Js</li>
                    <li>Golang</li>
                    <li>Mechine Learning</li>
                    <li>Microservice</li>
                    <li>REST Apis</li>
                    <li>Problem Solving</li>
                </ul>
            </div>
            <div className="col">
                <h6 className="fs-5 fw-bold">Language</h6>
                <ul>
                    <li>English</li>
                    <li>Indonesia</li>
                </ul>
            </div>
        </div>
        )
    };
};