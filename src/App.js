import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import * as routes from "./route.constants";


export default function App() {

    return (
        <div className="container-fluid">
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Redirect from={routes.HOME} exact to={routes.STORIES + routes.STORIES_HOME}/>
                    <Header/>
                </Switch>
            </Router>
        </div>
    );
}
