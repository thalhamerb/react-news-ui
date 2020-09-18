import React from 'react';

export default function StoryInfo({story, favorite, addRemoveStoryFromFavorites}) {

    const faIcon = "fa " + (favorite ? "fa-heart" : "fa-heart-o");

    const title = story.title == null ? "" : story.title.substr(0, story.title.lastIndexOf("-") - 1);

    let formattedDate = null;
    if (story.publishedAt != null) {
        formattedDate = story.publishedAt.substr(0, story.publishedAt.indexOf("T"));
    }

    let articleInfo = story.source.name;
    if (formattedDate != null) {
        articleInfo += ' · ' + formattedDate;
    }

    return (
        <div className="col p-4 d-flex flex-column position-static">
            <h5>{title}</h5>
            <div className="text-muted">{articleInfo}</div>
            <p className="mt-1">{story.description}</p>
            <div>
                <a href={story.url} target="_blank" rel="noopener noreferrer">Continue reading</a>
                <button className={faIcon + " pull-right btn btn-link text-muted shadow-none"} onClick={() => addRemoveStoryFromFavorites()}> </button>
            </div>
        </div>
    );
}