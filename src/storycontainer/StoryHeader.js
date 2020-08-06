import React from 'react';
import StoryHeaderTab from "./StoryHeaderTab";

export default function StoryHeader(props) {

    return (
        <div className="nav nav-tabs">
            <nav className="nav d-flex ">
                <StoryHeaderTab active={props.section} section="general" name="General"/>
                <StoryHeaderTab active={props.section} section="business" name="Business"/>
                <StoryHeaderTab active={props.section} section="science" name="Science"/>
                <StoryHeaderTab active={props.section} section="technology" name="Technology"/>
                <StoryHeaderTab active={props.section} section="health" name="Health"/>
                <StoryHeaderTab active={props.section} section="entertainment" name="Entertainment"/>
            </nav>
        </div>
    );
}