import React from 'react';
import {Link} from "react-router-dom";

export default function FaIconLink(props) {
    return (
        <Link className={`fa ${props.faIcon} text-muted`}
              to={props.to}
              aria-hidden="true"
              data-tip={props.dataTip}
              data-place="left"/>
    );
}