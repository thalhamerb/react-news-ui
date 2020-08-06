import React from 'react';
import {Link} from "react-router-dom";
import Search from "../search/Search";

function Header() {
    return (
        <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4">
                    <Link className="col-2 pt-1" to={"/"}>
                        <span className="text-muted">Home</span>
                    </Link>
                    <Link className="col-2 pt-1" to={"/about"}>
                        <span className="text-muted">About</span>
                    </Link>
                    <Link className="col-2 pt-1" to={"/sign-up"}>
                        <span className="text-muted">Sign up</span>
                    </Link>
                </div>
                <div className="col-4 text-center">
                    <h3 className="blog-header-logo text-dark">Another News Platform..</h3>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <Search />
                </div>
            </div>
        </header>
    )
}

export default Header;