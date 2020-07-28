import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex ">
                <Link className="p-2 text-muted" to={"/world"}>
                    <li>World</li>
                </Link>
                <Link className="p-2 text-muted" to={"/local"}>
                    <li>Local</li>
                </Link>
            </nav>
        </div>
    );
}

export default Header