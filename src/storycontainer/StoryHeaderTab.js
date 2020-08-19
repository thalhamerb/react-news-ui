import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {STORIES} from "../routes";

export default function StoryHeaderTab(props) {
    return (
        <li className='nav-item'>
            <NavLink to={STORIES + '/' + props.section}
                     className="nav-link text-muted"
                     activeClassName="active"
                     replace>
                {props.name}
            </NavLink>
        </li>
    );

}