import React from 'react';

function StoryImage(props) {
    return (
        <>
            {props.image ? <div className="col-auto d-none d-lg-block">
                    <img src={props.image} alt="" width="200" height="250" style={{objectFit: "cover"}} />
                </div> : null}
        </>
    );
}

export default StoryImage;