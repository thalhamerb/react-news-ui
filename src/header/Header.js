import React from 'react';
import {Link, Route} from "react-router-dom";
import * as routes from "../routes";
import About from "./About";
import Signup from "./SignUp";
import StoryContainer from "../storycontainer/StoryContainer";

export default function Header() {
    return (
        <>
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4">
                        <Link className="col-2 pt-1 text-muted" to={routes.STORIES + routes.STORIES_HOME}>
                            Home
                        </Link>
                        <Link className="col-2 pt-1 text-muted" to={routes.ABOUT}>
                            About
                        </Link>
                    </div>
                    <div className="col-4 text-center">
                        <h3 className="blog-header-logo text-dark">Another News Platform..</h3>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <Link className="col-2 pt-1 text-muted" to={routes.SIGN_UP}>
                            SignUp
                        </Link>
                    </div>
                </div>
            </header>

            <Route path={routes.STORIES + "/:section"}>
                <StoryContainer />
            </Route>
            <Route path={routes.ABOUT}>
                <About />
            </Route>
            <Route path={routes.SIGN_UP}>
                <Signup/>
            </Route>
        </>
    )
}