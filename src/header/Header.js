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
                        <Link className="col-2 pt-1" to={routes.STORIES + routes.STORIES_HOME}>
                            <span className="text-muted">Home</span>
                        </Link>
                        <Link className="col-2 pt-1" to={routes.ABOUT}>
                            <span className="text-muted">About</span>
                        </Link>
                    </div>
                    <div className="col-4 text-center">
                        <h3 className="blog-header-logo text-dark">Another News Platform..</h3>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <Link className="col-2 pt-1" to={routes.SIGN_UP}>
                            <span className="text-muted">SignUp</span>
                        </Link>
                    </div>
                </div>
            </header>

            <Route path={routes.STORIES + "/:section"} component={StoryContainer}/>
            <Route path={routes.ABOUT} component={About}/>
            <Route path={routes.SIGN_UP} component={Signup}/>
        </>
    )
}