import React, {useState} from 'react';
import StoryBody from "./StoryBody"
import {STORIES_GENERAL} from "../routes";
import {Route} from "react-router-dom";
import * as routes from "../routes";
import StoryHeaderTab from "./StoryHeaderTab";
import Search from "./Search";

export default function StoryContainer() {

    const [activeSection, setActiveSection] = useState(STORIES_GENERAL);

    return (
        <>
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="nav nav-tabs col-6">
                    <nav className="nav d-flex ">
                        <StoryHeaderTab activeSection={activeSection} setActiveSection={setActiveSection}
                                        section={routes.STORIES_GENERAL} name="General"/>
                        <StoryHeaderTab activeSection={activeSection} setActiveSection={setActiveSection}
                                        section={routes.STORIES_BUSINESS} name="Business"/>
                        <StoryHeaderTab activeSection={activeSection} setActiveSection={setActiveSection}
                                        section={routes.STORIES_SCIENCE} name="Science"/>
                        <StoryHeaderTab activeSection={activeSection} setActiveSection={setActiveSection}
                                        section={routes.STORIES_TECH} name="Technology"/>
                        <StoryHeaderTab activeSection={activeSection} setActiveSection={setActiveSection}
                                        section={routes.STORIES_HEALTH} name="Health"/>
                        <StoryHeaderTab activeSection={activeSection} setActiveSection={setActiveSection}
                                        section={routes.STORIES_ENTERTAIN} name="Entertainment"/>
                    </nav>
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                    <Search setActiveSection={setActiveSection}/>
                </div>
            </div>

            <Route path={routes.STORIES + "/:section"}
                   render={(props) => <StoryBody key={props.match.params.section}
                                                 url={`http://newsapi.org/v2/top-headlines?country=us&category=${props.match.params.section}`}/>}/>
            <Route path={routes.STORIES + routes.CUSTOM_SEARCH_PREFIX + "/:input"}
                   render={(props) => <StoryBody key={props.match.params.input}
                                                 url={`http://newsapi.org/v2/everything?q=${props.match.params.input}`}/>}/>
        </>
    );
}