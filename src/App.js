import React from 'react';
import './App.css';
import Header from './header/Header';
import Stories from "./stories/Stories";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {

  return (
    <div className="container">
        <Router>
            <Header />
            <Switch>
                <Redirect from='/' exact to='/section/business' />
                <Route path="/section/:section" render={(props) => <Stories key={props.match.params.section} {...props} />} />
            </Switch>
        </Router>
    </div>
  );
}

export default App