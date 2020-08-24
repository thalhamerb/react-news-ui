import React from 'react';

export default function StoryInfo({item}) {

    function formatTitle() {
        let text = item.title;
        if (text == null) return "";
        return text.substr(0, text.lastIndexOf("-") - 1);
    }

    function formatDate(date) {
        if (date == null) return null;
        return date.substr(0, date.indexOf("T"));
    }

    function formatArticleInfo() {
        let articleInfo = item.source.name;
        let formattedDate = formatDate(item.publishedAt);
        if (formattedDate != null) {
            articleInfo += ' · ' + formattedDate
        }
        return articleInfo;
    }

    return (
        <div className="col p-4 d-flex flex-column position-static">
            <h5>{formatTitle()}</h5>
            <div className="text-muted">{formatArticleInfo()}</div>
            <p className="mt-1">{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="stretched-link">Continue reading</a>
        </div>
    );
}