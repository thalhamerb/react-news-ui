import React from 'react';
import StoryContainer from "./storycontainer/StoryContainer";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import About from "./header/About";
import Header from "./header/Header";
import Cookies from 'universal-cookie';
import Signup from "./header/SignUp";
import * as routes from "./routes";

export default function App() {
    const cookies = new Cookies();
    cookies.set('SameSite', 'None', { path: routes.HOME, secure: true });

  return (
    <div className="container-fluid">
        <Router>
            <Header />
            <Switch>
                <Redirect from={routes.HOME} exact to={routes.SECTION_PREFIX + routes.SECTION_HOME} />
                <Route path={routes.SECTION_PREFIX + "/:section"} render={(props) => <StoryContainer key={props.match.params.section} section={props.match.params.section} />} />
                <Route path={routes.ABOUT} component={About} />
                <Route path={routes.SIGN_UP} component={Signup} />
                <Route path={routes.CUSTOM_SEARCH_PREFIX + "/:input"} render={(props) => <StoryContainer key={props.match.params.input} input={props.match.params.input} />}  />
            </Switch>
        </Router>
    </div>
  );
}
