import React from 'react';

export default function StoryImage(props) {
    return (
        <>
            {props.imageUrl ? <div className="col-auto d-none d-lg-block">
                    <img src={props.imageUrl} alt="article image" width="200" height="250" style={{objectFit: "cover"}} />
                </div> : null}
        </>
    );
}