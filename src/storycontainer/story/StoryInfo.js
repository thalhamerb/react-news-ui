import React from 'react';

export default function StoryInfo({item}) {
    const limitText = (text, size) => {
        if (text) {
            return text.length < size ? text : text.slice(0,size-3) + '...';
        } else {
            return "";
        }
    }

    // const title = limitText(item.title, 60);
    const description = limitText(item.description, 150);

    return (
        <div className="col p-4 d-flex flex-column position-static">
            <h5 className="mb-0">{item.title}</h5>
            <div className="mb-1 text-muted">{item.source.name}</div>
            <p className="card-text mb-auto">{description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="stretched-link">Continue reading</a>
        </div>
    );
}