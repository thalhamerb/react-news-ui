import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {RecoilRoot} from "recoil";
import ReactTooltip from 'react-tooltip';
import {CookiesProvider} from "react-cookie";

ReactDOM.render(
    <RecoilRoot>
        <CookiesProvider>
            <App/>
            <ReactTooltip type="light"/>
        </CookiesProvider>
    </RecoilRoot>,
    document.getElementById('root'))