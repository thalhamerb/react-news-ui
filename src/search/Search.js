import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Search() {

    const [searchInput, setSearchInput] = useState("");

    return (
        <form className="form-inline my-2 my-lg-0">
            <input
                className="form-control mr-sm-2"
                type="text"
                name="search"
                placeholder="Search"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}/>
            <Link to={"/custom-search/" + searchInput}>
                <p className="btn btn-sm btn-outline-secondary my-auto">Search</p>
            </Link>
        </form>
    );
}

export default Search;