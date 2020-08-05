import React from 'react';
import {Link} from "react-router-dom";

function StoryHeaderTab(props) {
    return (
        <Link className="p-2 text-muted" to={"/section/" + props.section}>
            <li className={'nav-link' + (props.section === props.active ? " active" : "")}>{props.name}</li>
        </Link>
    );

}

export default StoryHeaderTab;