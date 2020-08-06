import React from 'react';
import StoryHeader from "./StoryHeader";
import StoryBody from "./StoryBody"

function StoryContainer(props) {

    return (
        <>
            <StoryHeader section={props.section} />
            <StoryBody url={`http://newsapi.org/v2/top-headlines?country=us&category=${props.section}`} />
        </>
    );
}

export default StoryContainer;