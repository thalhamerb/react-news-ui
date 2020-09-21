import React from 'react';
import {NavLink} from "react-router-dom";

export default function NavTab(props) {
    return (
        <li className='nav-item'>
            <NavLink to={props.to}
                     className="nav-link text-muted"
                     activeClassName="active"
                     replace>
                {props.value}
            </NavLink>
        </li>
    );

}