import React from 'react';
import {Link} from "react-router-dom";

function LinkButton(props) {
    return (
        <Link className="btn btn-sm btn-outline-secondary my-auto"
              to={props.to}>
            Search
        </Link>
    );
}

export default LinkButton;