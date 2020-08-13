import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {CUSTOM_SEARCH_PREFIX} from "../routes";

export default function Search() {

    const [searchInput, setSearchInput] = useState("");

    const processChange = e => {
        setSearchInput(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    }

    return (
        <form className="form-inline my-2 my-lg-0">
            <input
                className="form-control mr-sm-2"
                type="text"
                name="search"
                placeholder="Search"
                value={searchInput}
                onChange={processChange}
                onKeyDown={handleKeyDown} />
            <Link to={CUSTOM_SEARCH_PREFIX + searchInput}>
                <p className="btn btn-sm btn-outline-secondary my-auto">Search</p>
            </Link>
        </form>
    );
}