import React from 'react';

export default function StoryInfo({item}) {
    const removeMagFromTitle = text => {
        return text.substr(0, text.lastIndexOf("-") - 1);
    }

    const formatDate = date => {
        return date.substr(0, date.indexOf("T"));
    }

    return (
        <div className="col p-4 d-flex flex-column position-static">
            <h5>{removeMagFromTitle(item.title)}</h5>
            <div className="text-muted">{item.source.name} &middot; {formatDate(item.publishedAt)}</div>
            <p className="mt-1">{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="stretched-link">Continue reading</a>
        </div>
    );
}