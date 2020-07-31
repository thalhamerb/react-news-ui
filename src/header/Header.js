import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <Link className="col-4 pt-1" to={"/about"}>
                    <p className="text-muted">About</p>
                </Link>
                <div className="col-4 text-center">
                    <h3 className="blog-header-logo text-dark">Another News Platform..</h3>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    {/*<a className="text-muted" href="#" aria-label="Search">*/}
                    {/*    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"*/}
                    {/*         strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img"*/}
                    {/*         viewBox="0 0 24 24" focusable="false"><title>Search</title>*/}
                    {/*        <circle cx="10.5" cy="10.5" r="7.5"/>*/}
                    {/*        <path d="M21 21l-5.2-5.2"/>*/}
                    {/*    </svg>*/}
                    {/*</a>*/}
                    <Link to={"/"}>
                        <p className="text-muted">Home</p>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;