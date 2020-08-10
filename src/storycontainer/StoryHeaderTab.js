import React from 'react';
import {Link} from "react-router-dom";

export default function StoryHeaderTab(props) {
    return (
        <Link className="p-2 text-muted" to={"/section/" + props.section}>
            <li className={'nav-link' + (props.section === props.activeSection ? " active" : "")}>{props.name}</li>
        </Link>
    );

}