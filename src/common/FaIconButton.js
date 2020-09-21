import React from 'react';

export default function FaIconButton(props) {
    return (
        <button className={props.faIcon + " btn btn-link text-muted shadow-none"}
                onClick={() => props.callbackFunction()}>
        </button>
    );
}
