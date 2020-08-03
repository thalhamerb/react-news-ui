import React from 'react';

function StoryInfo(props) {
    const limitText = (text, size) => {
        if (text) {
            return text.length < size ? text : text.slice(0,size-3) + '...';
        } else {
            return "";
        }
    }

    const title = limitText(props.item.title, 60);
    const description = limitText(props.item.description, 120);

    return (
        <div className="col p-4 d-flex flex-column position-static">
            <h3 className="mb-0">{title}</h3>
            <div className="mb-1 text-muted">{props.item.source.name}</div>
            <p className="card-text mb-auto">{description}</p>
            <a href={props.item.url} target="_blank" rel="noopener noreferrer" className="stretched-link">Continue reading</a>
        </div>
    );
}

export default StoryInfo;