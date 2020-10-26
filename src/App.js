import React, {Suspense} from 'react';
import {useCookies} from "react-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Routes from "./Routes";
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import * as routes from "./route.constants";


export default function App() {
    const [cookies, setCookie] = useCookies(['SameSite']);
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
