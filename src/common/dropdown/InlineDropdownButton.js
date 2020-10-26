import React from 'react';

export default function InlineDropdownButton(props) {
    return (
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button className="btn btn-link text-muted shadow-none dropdown-item" onClick={props.clickFunction}>{props.value}</button>
        </div>
    );
}