import React, {Suspense} from 'react';
import {Route} from "react-router-dom";
import * as routes from "../routes";
import StoryContainer from "../stories/StoryContainer";
import UserDropdown from "./UserDropdown";
import FavoriteStories from "../stories/FavoriteStories";
import HeaderLink from "../common/header/HeaderLink";
import HeaderTitle from "../common/header/HeaderTitle";
import FaIconLink from "../common/FaIconLink";

const About = React.lazy(() => {
    return import('./About');
});

const Signup = React.lazy(() => {
    return import('./SignUp');
})

export default function Header() {
    return (
        <>
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4">
                        <HeaderLink route={routes.STORIES + routes.STORIES_HOME} value="Home"/>
                        <HeaderLink route={routes.ABOUT} value="About"/>
                    </div>
                    <div className="col-4 text-center">
                        <HeaderTitle value="Another News Platform.."/>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <FaIconLink faIcon="fa-heart" to={routes.FAVORITE_STORIES} dataTip="Favorites"/>
                        <UserDropdown/>
                    </div>
                </div>
            </header>

            <Route path={routes.STORIES + "/:section"}>
                <StoryContainer/>
            </Route>
            <Route path={routes.FAVORITE_STORIES}>
                <FavoriteStories/>
            </Route>

            <Suspense fallback={<div>Loading...</div>}>
                <Route path={routes.ABOUT}>
                    <About/>
                </Route>
                <Route path={routes.SIGN_UP}>
                    <Signup/>
                </Route>
            </Suspense>
        </>
    )
}