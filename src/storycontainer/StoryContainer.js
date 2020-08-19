import React, {useEffect, useState} from 'react';
import StoryBody from "./StoryBody"
import {Route} from "react-router-dom";
import * as routes from "../routes";
import StoryHeaderTab from "./StoryHeaderTab";
import Search from "./Search";

export default function StoryContainer() {
    return (
        <>
            <div className="row flex-nowrap justify-content-between align-items-center">
                <ul className="nav nav-tabs col-6">
                        <StoryHeaderTab section="general" name="General"/>
                        <StoryHeaderTab section="business" name="Business"/>
                        <StoryHeaderTab section="science" name="Science"/>
                        <StoryHeaderTab section="technology" name="Technology"/>
                        <StoryHeaderTab section="health" name="Health"/>
                        <StoryHeaderTab section="entertainment" name="Entertainment"/>
                </ul>
                <div className="col-6 d-flex justify-content-end align-items-center">
                    <Search/>
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