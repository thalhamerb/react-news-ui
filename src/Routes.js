import React, {Suspense} from 'react';
import {Route} from "react-router-dom";
import * as routes from "./route.constants";
import Stories from "./pages/Stories";
import FavoriteStories from "./pages/FavoriteStories";

const About = React.lazy(() => {
    return import('./pages/About');
});

const Signup = React.lazy(() => {
    return import('./pages/SignUp');
})

function Routes() {
    return (
        <>
            <Route path={routes.STORIES + "/:section"}>
                <Stories/>
            </Route>
            <Route path={routes.FAVORITE_STORIES}>
                <FavoriteStories/>
            </Route>

            <Suspense fallback={<div>Loading...</div>}>
                <Route path={routes.ABOUT}>
                    <About/>
                </Route>
                <Route path={routes.SIGN_UP}>
                    <Signup/>
                </Route>
            </Suspense>
        </>
    );
}

export default Routes;