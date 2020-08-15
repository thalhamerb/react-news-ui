import React from 'react';
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import Header from "./header/Header";
import Cookies from 'universal-cookie';
import * as routes from "./routes";

export default function App() {
    const cookies = new Cookies();  //todo this cookie set isn't working
    cookies.set('SameSite', 'None', {path: routes.HOME, secure: true});
    console.log(cookies.get('SameSite'));

    return (
        <div className="container-fluid">
            <Router>
                <Header/>
                <Redirect from={routes.HOME} exact to={routes.STORIES + routes.STORIES_GENERAL}/>
                <Redirect from={routes.STORIES} exact to={routes.STORIES + routes.STORIES_GENERAL}/>
            </Router>
        </div>
    );
}
