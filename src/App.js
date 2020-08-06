import React from 'react';
import StoryContainer from "./storycontainer/StoryContainer";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import About from "./header/About";
import Header from "./header/Header";
import Cookies from 'universal-cookie';
import Signup from "./header/SignUp";
import SearchContainer from "./search/SearchContainer";

export default function App() {
    const cookies = new Cookies();
    cookies.set('SameSite', 'None', { path: '/', secure: true });

  return (
    <div className="container">
        <Router>
            <Header />
            <Switch>
                <Redirect from='/' exact to='/section/general' />
                <Route path="/section/:section" render={(props) => <StoryContainer key={props.match.params.section} section={props.match.params.section} />} />
                <Route path="/about" component={About} />
                <Route path="/sign-up" component={Signup} />
                <Route path="/custom-search/:input" render={(props) => <SearchContainer key={props.match.params.input} input={props.match.params.input} />}  />
            </Switch>
        </Router>
    </div>
  );
}


//todo cash api response