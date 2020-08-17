import React, {useEffect, useState} from 'react';
import StoryBody from "./StoryBody"
import {Route} from "react-router-dom";
import * as routes from "../routes";
import StoryHeaderTab from "./StoryHeaderTab";
import Search from "./Search";

export default function StoryContainer(props) {

    useEffect(() => {
        setActiveSection(props.match.params.section)
    }, [props])

    const [activeSection, setActiveSection] = useState('');

    return (
        <>
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="nav nav-tabs col-6">
                    <nav className="nav d-flex ">
                        <StoryHeaderTab activeSection={activeSection} setActiveSection={setActiveSection}
                                        section="general" name="General"/>
                        <StoryHeaderTab activeSection={activeSection} setActiveSection={setActiveSection}
                                        section="business" name="Business"/>
                        <StoryHeaderTab activeSection={activeSection} setActiveSection={setActiveSection}
                                        section="science" name="Science"/>
                        <StoryHeaderTab activeSection={activeSection} setActiveSection={setActiveSection}
                                        section="technology" name="Technology"/>
                        <StoryHeaderTab activeSection={activeSection} setActiveSection={setActiveSection}
                                        section="health" name="Health"/>
                        <StoryHeaderTab activeSection={activeSection} setActiveSection={setActiveSection}
                                        section="entertainment" name="Entertainment"/>
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