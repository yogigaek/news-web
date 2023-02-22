import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TableComp3 extends React.Component{

    render(){
        return(
            <div className="kampret2">
                <h6 className="fs-5 fw-bold text-center">Table Language</h6>

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
                            <td>English</td>
                            <td><div className="pensil"></div></td>
                        </tr>
                        <tr>
                            <th scope="row">2.</th>
                            <td>Indonesia</td>
                            <td><div className="pensil1"></div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    };
};