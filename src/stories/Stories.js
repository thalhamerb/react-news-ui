import React from 'react';
import StoryRow from "./StoryRow";

function Stories(props) {
    const storyGroups = chunkData(props.storyData);

    return (
        <div>
            {storyGroups.map(items => <StoryRow key={items[0].id} items={items} />)}
        </div>
    );
}

function chunkData(storyData) {
    let i,j,storyGroups = [],chunk = 2;
    for (i=0,j=storyData.length; i<j; i+=chunk) {
        storyGroups.push(storyData.slice(i,i+chunk));
    }
    return storyGroups;
}

export default Stories;