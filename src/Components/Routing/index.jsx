import Navigation from "../Navigation";
import Sidebar from "../Navigation/Sidebar";
import Backdrop from './../Navigation/Backdrop';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Intro from './../Intro-reactjs/index';
import LifecycleComponents from './../Lifecycle-components/index';
import StylingComponents from './../Styling-components/index';
import Hooks from './../hook/index';
// import FormValidation from './../Form-validation/index';
// import Home from "../Navigation/Home";
// import Redux from './../Redux/index';

const Routing = () => {

    const [sidebar, setSidebar] = useState(false);

    const toogleSidebar = () => {
        setSidebar((prevState) => !prevState)
    }

    return(
        <div>
            <Router>
            <Navigation openSidebar={toogleSidebar} />
            <Backdrop sidebar={sidebar} closeSidebar={toogleSidebar} />           
            <Sidebar sidebar={sidebar} />   
                <Routes>
                    <Route path="/" element={<Hooks />} />
                    <Route path="/LifecycleComponents" element={<LifecycleComponents />} />
                    <Route path="/Intro" element={<Intro />} />
                    <Route path="/StylingComponents" element={<StylingComponents />} />
                    {/* <Route path="/FormValidation" element={<FormValidation />} /> */}
                    {/* <Route path="/Hooks" element={<Hooks />} />   */}
                    {/* <Route path="/Redux" element={<Redux />} />                 */}
                </Routes>
            </Router>
        </div>
    )
};

export default Routing;

// {/* <div className="sidebar">
//             <a href="form"><i className="fa fa-fw fa-home"></i>Form Valdation</a> <br />
//             <a href="hook"><i className="fa fa-fw fa-home"></i>Hooks</a> <br />
//             <a href="lifecycle"><i className="fa fa-fw fa-home"></i>Lifecycle Components</a> <br />
//             <a href="styling"><i className="fa fa-fw fa-home"></i>Styling Components</a>
// </div> */}