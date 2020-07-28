import React from 'react';
import storyData from '../stories/stories.json'
import Stories from "../stories/Stories";

function World() {

    return (
        <div>
            <Stories storyData={storyData.filter(item => item.id < 3)}/>
        </div>
    );
}

export default World;
