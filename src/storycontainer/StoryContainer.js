import React from 'react';
import StoryHeader from "./StoryHeader";
import StoryBody from "./StoryBody"

export default function StoryContainer({section, input}) {

    const url = input ? `http://newsapi.org/v2/everything?q=${input}` : `http://newsapi.org/v2/top-headlines?country=us&category=${section}`;

    return (
        <>
            <StoryHeader activeSection={section} />
            <StoryBody url={url} />
        </>
    );
}