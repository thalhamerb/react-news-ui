import React from 'react'
import Story from "./story/Story";

function StoryRow(props) {
    let i = 0;
    const storyComponents = props.items.map(item => <Story key={i++} item={item} />);
    return (
        <div className="row mb-2">
            {storyComponents}
        </div>
    );
}

export default StoryRow;