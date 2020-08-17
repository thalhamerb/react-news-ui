import React from 'react';
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import Header from "./header/Header";
import Cookies from 'universal-cookie';
import * as routes from "./routes";

export default function App() {
    const cookies = new Cookies();  //todo this cookie set isn't working
    cookies.set('SameSite', 'None', {path: routes.HOME, secure: true});
    // console.log(cookies.get('SameSite'));

    return (
        <div className="container-fluid">
            <Router>
                <Switch>
                    <Redirect from={routes.HOME} exact to={routes.STORIES + routes.STORIES_HOME}/>
                    <Redirect from={routes.STORIES} exact to={routes.STORIES + routes.STORIES_HOME}/>
                    <Header/>
                </Switch>
            </Router>
        </div>
    );
}
