import React from 'react';
import {Link} from "react-router-dom";

export default function HeaderLink(props) {
    return (
        <Link className="col-2 text-muted" to={props.route}>
            {props.value}
        </Link>
    );
}
