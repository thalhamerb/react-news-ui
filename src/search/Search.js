import React, {useState} from 'react';
import {Link} from "react-router-dom";

export default function Search() {

    const [searchInput, setSearchInput] = useState("");

    const processChange = (e) => {
        setSearchInput(e.target.value);
    }

    return (
        <form className="form-inline my-2 my-lg-0">
            <input
                className="form-control mr-sm-2"
                type="text"
                name="search"
                placeholder="Search"
                value={searchInput}
                onChange={processChange}/>
            <Link to={"/custom-search/" + searchInput}>
                <p className="btn btn-sm btn-outline-secondary my-auto">Search</p>
            </Link>
        </form>
    );
}