import React from 'react';
import StoryHeaderTab from "./StoryHeaderTab";
import Search from "./Search";

export default function StoryHeader({activeSection}) {

    return (
        <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="nav nav-tabs col-6">
                <nav className="nav d-flex ">
                    <StoryHeaderTab activeSection={activeSection} section="general" name="General"/>
                    <StoryHeaderTab activeSection={activeSection} section="business" name="Business"/>
                    <StoryHeaderTab activeSection={activeSection} section="science" name="Science"/>
                    <StoryHeaderTab activeSection={activeSection} section="technology" name="Technology"/>
                    <StoryHeaderTab activeSection={activeSection} section="health" name="Health"/>
                    <StoryHeaderTab activeSection={activeSection} section="entertainment" name="Entertainment"/>
                </nav>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
                <Search />
            </div>
        </div>
    );
}