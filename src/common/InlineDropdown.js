import React from 'react';

function InlineDropdown(props) {
    return (
        <div className="dropdown">
            <button className="btn btn-link text-muted shadow-none dropdown-toggle" type="button"
                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                {props.value}
            </button>
            {props.children}
        </div>
    );
}

export default InlineDropdown;