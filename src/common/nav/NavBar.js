import React from 'react';

function NavBar(props) {
    return (
        <ul className="col-6 nav nav-tabs">
            {props.children}
        </ul>
    );
}

export default NavBar;