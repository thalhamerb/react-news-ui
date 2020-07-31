import React from 'react';
import './App.css';
import Stories from "./stories/Stories";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import About from "./header/About";
import Header from "./header/Header";

function App() {

  return (
    <div className="container">
        <Router>
            <Header />
            <Switch>
                <Redirect from='/' exact to='/section/general' />
                <Route path="/section/:section" render={(props) => <Stories key={props.match.params.section} {...props} />} />
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    </div>
  );
}

export default App