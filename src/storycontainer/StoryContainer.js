import React from 'react';
import StoryHeader from "./StoryHeader";
import StoryBody from "./StoryBody"

export default function StoryContainer({section}) {

    return (
        <>
            <StoryHeader activeSection={section} />
            <StoryBody url={`http://newsapi.org/v2/top-headlines?country=us&category=${section}`} />
        </>
    );
}