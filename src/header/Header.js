import React, {Suspense} from 'react';
import {Link, Route} from "react-router-dom";
import * as routes from "../routes";
import StoryContainer from "../stories/StoryContainer";
import UserDropdown from "./UserDropdown";
import Favorites from "../stories/favorites/Favorites";

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
                        <Link className="col-2 text-muted" to={routes.STORIES + routes.STORIES_HOME}>
                            Home
                        </Link>
                        <Link className="col-2 text-muted" to={routes.ABOUT}>
                            About
                        </Link>
                    </div>
                    <div className="col-4 text-center">
                        <h3 className="blog-header-logo text-dark">Another News Platform..</h3>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <Link className="fa fa-heart text-muted" to={routes.FAVORITE_STORIES} aria-hidden="true" data-tip="Favorites" data-place="left"/>
                        <UserDropdown/>
                    </div>
                </div>
            </header>

            <Route path={routes.STORIES + "/:section"}>
                <StoryContainer/>
            </Route>
            <Route path={routes.FAVORITE_STORIES}>
                <Favorites/>
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