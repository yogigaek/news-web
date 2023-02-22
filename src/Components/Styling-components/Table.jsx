import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TableComp extends React.Component{

    render(){
        return(
            <div className="kampret" id="table">
                <h6 className="fs-5 fw-bold text-center">Table Grafik Skills</h6>

                <table className="table table-dark table-striped table-sm" >
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Skill</th>
                            <th scope="col">Grafik</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1.</th>
                            <td>Java Scrip</td>
                            <td><div className="coba"></div></td>
                        </tr>
                        <tr>
                            <th scope="row">2.</th>
                            <td>PHP</td>
                            <td><div className="coba1"></div></td>
                        </tr>
                        <tr>
                            <th scope="row">3.</th>
                            <td>HTML</td>
                            <td><div className="coba2"></div></td>
                        </tr>
                        <tr>
                            <th scope="row">4.</th>
                            <td>CSS</td>
                            <td><div className="coba3"></div></td>
                        </tr>
                        <tr>
                            <th scope="row">5.</th>
                            <td>MongoDb</td>
                            <td><div className="coba4"></div></td>
                        </tr>
                        <tr>
                            <th scope="row">6.</th>
                            <td>MySql</td>
                            <td><div className="coba5"></div></td>
                        </tr>
                        <tr>
                            <th scope="row">7.</th>
                            <td>GIT</td>
                            <td><div className="coba6"></div></td>
                        </tr>
                        <tr>
                            <th scope="row">8.</th>
                            <td>Bash</td>
                            <td><div className="coba7"></div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        )
    }
}