import React from 'react';
import StoryBody from "../components/stories/StoryBody"
import {Route} from "react-router-dom";
import * as routes from "../route.constants";
import NavTab from "../common/nav/NavTab";
import SearchBar from "../common/search-bar/SearchBar";
import NavBar from "../common/nav/NavBar";
import {STORIES} from "../route.constants";

export default function Stories() {
    return (
        <>
            <div className="row flex-nowrap justify-content-between align-items-center">
                <NavBar>
                    <NavTab to={STORIES + "/general"} value="General"/>
                    <NavTab to={STORIES + "/business"} value="Business"/>
                    <NavTab to={STORIES + "/science"} value="Science"/>
                    <NavTab to={STORIES + "/technology"} value="Technology"/>
                    <NavTab to={STORIES + "/health"} value="Health"/>
                    <NavTab to={STORIES + "/entertainment"} value="Entertainment"/>
                </NavBar>
                <div className="col-6 d-flex justify-content-end align-items-center">
                    <SearchBar linkUrl={routes.STORIES + routes.CUSTOM_SEARCH_PREFIX}/>
                </div>
            </div>

            <Route path={routes.STORIES + "/:section"}
                   render={(props) => <StoryBody key={props.match.params.section} section={props.match.params.section}/>}/>
            <Route path={routes.STORIES + routes.CUSTOM_SEARCH_PREFIX + "/:input"}
                   render={(props) => <StoryBody key={props.match.params.input} input={props.match.params.input}/>}/>
        </>
    );
}