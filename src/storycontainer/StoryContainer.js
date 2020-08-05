import React from 'react';
import StoryHeader from "./StoryHeader";
import StoryBody from "./StoryBody"

function StoryContainer({match}) {
    return (
        <>
            <StoryHeader section={match.params.section} />
            <StoryBody section={match.params.section} />
        </>
    );
}

export default StoryContainer;