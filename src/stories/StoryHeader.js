import React from 'react';
import {Link} from "react-router-dom";

function StoryHeader() {
    return (
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex ">
                <Link className="p-2 text-muted" to={"/section/general"}>
                    <li>General</li>
                </Link>
                <Link className="p-2 text-muted" to={"/section/business"}>
                    <li>Business</li>
                </Link>
                <Link className="p-2 text-muted" to={"/section/science"}>
                    <li>Science</li>
                </Link>
                <Link className="p-2 text-muted" to={"/section/technology"}>
                    <li>Technology</li>
                </Link>
                <Link className="p-2 text-muted" to={"/section/health"}>
                    <li>Health</li>
                </Link>
                <Link className="p-2 text-muted" to={"/section/entertainment"}>
                    <li>Entertainment</li>
                </Link>
            </nav>
        </div>
    );
}

export default React.memo(StoryHeader);