import React from 'react';
import StoryBody from "../storycontainer/StoryBody";

export default function SearchContainer({input}) {
    return (
        <StoryBody url={`http://newsapi.org/v2/everything?q=${input}`} />
    );
}