import React from 'react'

function Story(props) {
    const title = limitText(props.item.title, 60);
    const description = limitText(props.item.description, 120);
    return (
        <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0">{title}</h3>
                    <div className="mb-1 text-muted">{props.item.source.name}</div>
                    <p className="card-text mb-auto">{description}</p>
                    <a href={props.item.url} target="_blank" rel="noopener noreferrer" className="stretched-link">Continue reading</a>
                </div>
                {props.item.urlToImage ? <div className="col-auto d-none d-lg-block">
                    <img src={props.item.urlToImage} alt="" width="200" height="250" style={{objectFit: "cover"}} />
                </div> : null}

            </div>
        </div>
    );
}

function limitText(text, size) {
    if (text) {
        return text.length < size ? text : text.slice(0,size-3) + '...';
    } else {
        return "";
    }
}

export default Story;