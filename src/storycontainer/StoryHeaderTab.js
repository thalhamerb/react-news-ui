import React from 'react';
import {Link} from "react-router-dom";
import {STORIES} from "../routes";

export default function StoryHeaderTab(props) {
    return (
        <li className={'nav-link' + (props.section === props.activeSection ? " active" : "")}>
            <Link className="p-2 text-muted"
                  to={STORIES + '/' + props.section}
                  onClick={() => props.setActiveSection(props.section)}>{props.name}</Link>
        </li>
    );

}