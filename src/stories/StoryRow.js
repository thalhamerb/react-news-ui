import React from 'react'
import Story from "./Story";

function StoryRow(props) {
    const storyComponents = props.items.map(item => <Story key={item.id} item={item} />);
    return (
        <div className="row mb-2">
            {storyComponents}
        </div>
    );
}

export default StoryRow;