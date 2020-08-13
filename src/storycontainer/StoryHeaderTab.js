import React from 'react';
import {Link} from "react-router-dom";
import {SECTION_PREFIX} from "../routes";

export default function StoryHeaderTab(props) {
    return (
        <Link className="p-2 text-muted" to={SECTION_PREFIX + props.section}>
            <li className={'nav-link' + (props.section === props.activeSection ? " active" : "")}>{props.name}</li>
        </Link>
    );

}