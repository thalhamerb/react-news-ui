import React from 'react';
import StoryBody from "../storycontainer/StoryBody";

function SearchContainer(props) {
    return (
        <StoryBody url={`http://newsapi.org/v2/everything?q=${props.input}`} />
    );
}

export default SearchContainer;