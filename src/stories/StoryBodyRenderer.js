import React from 'react';
import StoryRow from "./StoryRow";

export default function StoryBodyRenderer({storyData}) {

    const chunkData = (storyData) => {
        let i, j, storyGroups = [], chunk = 2;
        for (i = 0, j = storyData.length; i < j; i += chunk) {
            storyGroups.push(storyData.slice(i, i + chunk));
        }
        return storyGroups;
    }

    return (
        chunkData(storyData).map((items, idx) => <StoryRow key={idx} items={items}/>)
    );
}
