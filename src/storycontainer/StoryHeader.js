import React from 'react';
import StoryHeaderTab from "./StoryHeaderTab";
import Search from "./Search";
import * as routes from "../routes";

export default function StoryHeader({activeSection}) {

    return (
        <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="nav nav-tabs col-6">
                <nav className="nav d-flex ">
                    <StoryHeaderTab activeSection={activeSection} section={routes.SECTION_GENERAL} name="General"/>
                    <StoryHeaderTab activeSection={activeSection} section={routes.SECTION_BUSINESS} name="Business"/>
                    <StoryHeaderTab activeSection={activeSection} section={routes.SECTION_SCIENCE} name="Science"/>
                    <StoryHeaderTab activeSection={activeSection} section={routes.SECTION_TECH} name="Technology"/>
                    <StoryHeaderTab activeSection={activeSection} section={routes.SECTION_HEALTH} name="Health"/>
                    <StoryHeaderTab activeSection={activeSection} section={routes.SECTION_ENTERTAIN} name="Entertainment"/>
                </nav>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
                <Search />
            </div>
        </div>
    );
}