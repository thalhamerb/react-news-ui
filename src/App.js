import React from 'react';
import './App.css';
import Header from './header/Header';
import Stories from "./stories/Stories";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import World from "./header/World";
import Local from "./header/Local";

function App() {

  return (
    <div className="container">
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={World} />
                <Route path="/world" component={World} />
                <Route path="/local" component={Local} />
            </Switch>
        </Router>
    </div>
  );
}

export default App