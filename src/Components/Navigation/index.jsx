import React from "react";
import "./index.css";
import 'remixicon/fonts/remixicon.css'

const Navigation = ({openSidebar}) => {
    return(
        <div className="tool-bar">
            <div onClick={openSidebar}>
            <i className="ri-menu-line" style={{cursor: `pointer`}}></i>
            </div>
            <div className="title">Muhammad Yogi</div>
        </div>
    )
};

export default Navigation;