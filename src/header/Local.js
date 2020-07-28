import React from 'react';
import storyData from '../stories/stories.json';
import Stories from "../stories/Stories";

function Local() {

    return (
        <div>
            <Stories storyData={storyData.filter(item => item.id >= 3)}/>
        </div>
    );
}

export default Local;
