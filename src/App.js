import React from 'react';
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import Header from "./header/Header";
import { useCookies } from "react-cookie";
import * as routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
    const [cookies, setCookie] = useCookies(['SameSite', 'name', 'test']);
    setCookie('SameSite', 'None', {path:'/'})
    // console.log(cookies.SameSite);

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
