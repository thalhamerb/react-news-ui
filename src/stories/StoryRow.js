import React from 'react'
import Story from "./story/Story";

export default function StoryRow(props) {
    return (
        <div className="row mb-2">
            {props.items.map((item, idx) => <Story key={idx} story={item} />)}
        </div>
    );
}