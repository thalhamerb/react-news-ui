import React from 'react';
import StoryHeaderTab from "./StoryHeaderTab";

export default function StoryHeader({activeSection}) {

    return (
        <div className="nav nav-tabs">
            <nav className="nav d-flex ">
                <StoryHeaderTab activeSection={activeSection} section="general" name="General"/>
                <StoryHeaderTab activeSection={activeSection} section="business" name="Business"/>
                <StoryHeaderTab activeSection={activeSection} section="science" name="Science"/>
                <StoryHeaderTab activeSection={activeSection} section="technology" name="Technology"/>
                <StoryHeaderTab activeSection={activeSection} section="health" name="Health"/>
                <StoryHeaderTab activeSection={activeSection} section="entertainment" name="Entertainment"/>
            </nav>
        </div>
    );
}