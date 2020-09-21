import React, {useState} from 'react';
import LinkButton from "./LinkButton";

export default function Search(props) {

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
                onKeyDown={handleKeyDown}/>
            <LinkButton to={props.linkUrl + '/' + searchInput}/>
        </form>
    );
}