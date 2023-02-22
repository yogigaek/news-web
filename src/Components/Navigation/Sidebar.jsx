import React from "react";
import { SidebarData } from './DataSide';
import { Link } from 'react-router-dom';

const Sidebar = ({sidebar}) => {

    return(
        <div className={sidebar?`sidebar sidebar--open`: `sidebar`}>

            {SidebarData.map((items, index) => {
                return(
                    <li key={index} className={items.cName} >
                        <Link to={items.path}>
                            {items.icon}
                            <span>{items.title}</span>
                        </Link>
                    </li>
                )
            })}
        </div>
    )
}

export default Sidebar;