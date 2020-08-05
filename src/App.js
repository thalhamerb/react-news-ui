import React from 'react';
import './App.css';
import StoryContainer from "./storycontainer/StoryContainer";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import About from "./header/About";
import Header from "./header/Header";
import Cookies from 'universal-cookie';
import Signup from "./header/SignUp";

function App() {
    const cookies = new Cookies();
    cookies.set('SameSite', 'None', { path: '/', secure: true });

  return (
    <div className="container">
        <Router>
            <Header />
            <Switch>
                <Redirect from='/' exact to='/section/general' />
                <Route path="/section/:section" render={(props) => <StoryContainer key={props.match.params.section} {...props} />} />
                <Route path="/about" component={About} />
                <Route path={"/sign-up"}  component={Signup} />
            </Switch>
        </Router>
    </div>
  );
}

export default App